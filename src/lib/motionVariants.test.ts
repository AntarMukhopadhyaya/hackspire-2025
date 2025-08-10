// Test file for motion variants to verify behavior
// Focuses on prefers-reduced-motion handling
import { jest, describe, it, expect, beforeEach } from "@jest/globals";

describe("motionVariants", () => {
  // Mock window.matchMedia for testing
  const mockMatchMedia = (matches: boolean) => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  };

  beforeEach(() => {
    // Reset modules to ensure fresh import
    jest.resetModules();
  });

  it("should return static variants when prefers-reduced-motion is enabled", async () => {
    mockMatchMedia(true); // User prefers reduced motion

    const { fadeInUp, titleFadeIn } = await import("./motionVariants");

    expect(fadeInUp.initial).toEqual(fadeInUp.animate);
    expect(titleFadeIn.initial).toEqual(titleFadeIn.animate);
  });

  it("should return animated variants when prefers-reduced-motion is disabled", async () => {
    mockMatchMedia(false); // User allows motion

    const { fadeInUp, titleFadeIn } = await import("./motionVariants");

    expect(fadeInUp.initial).not.toEqual(fadeInUp.animate);
    expect(titleFadeIn.initial).not.toEqual(titleFadeIn.animate);
    expect(fadeInUp.initial.opacity).toBe(0);
    expect(fadeInUp.animate.opacity).toBe(1);
  });

  it("should handle delayed variants correctly", async () => {
    mockMatchMedia(false);

    const { fadeInUpDelayed, cardFadeInUpStaggered } = await import(
      "./motionVariants"
    );

    const delayed = fadeInUpDelayed(0.5);
    const staggered = cardFadeInUpStaggered(2, 0.1);

    expect(delayed.transition.delay).toBe(0.5);
    expect(staggered.transition.delay).toBe(0.4); // 0.1 + 2 * 0.15
  });

  it("should provide matrix animation without prefers-reduced-motion handling", async () => {
    mockMatchMedia(true);

    const { matrixFall } = await import("./motionVariants");

    // Matrix animation should not be affected by reduced motion preference
    // as it's a background decorative element
    expect(matrixFall.animate.y).toEqual(["0vh", "200vh"]);
    expect(matrixFall.transition.repeat).toBe(Infinity);
  });
});
