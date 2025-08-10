/**
 * @jest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach } from "@jest/globals";
import {
  fadeInUp,
  titleFadeIn,
  cardFadeInUp,
  modalBackdrop,
  glorySectionAnimation,
  aboutTitleAnimation,
  aboutSubtitleAnimation,
  aboutSectionAnimation,
  aboutFeatureStaggered,
  spotlightAnimation,
  layoutContainerAnimation,
} from "../motionVariants";

// Mock window.matchMedia for prefers-reduced-motion tests
const mockMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

describe("motionVariants", () => {
  beforeEach(() => {
    // Reset window.matchMedia before each test
    delete (window as any).matchMedia;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("when prefers-reduced-motion is false", () => {
    beforeEach(() => {
      mockMatchMedia(false);
    });

    it("should return normal animation variants for fadeInUp", () => {
      const variant = fadeInUp;

      expect(variant).toHaveProperty("initial");
      expect(variant).toHaveProperty("animate");
      expect(variant).toHaveProperty("transition");
      expect(variant.initial).toEqual({ opacity: 0, y: 80 });
      expect(variant.animate).toEqual({ opacity: 1, y: 0 });
    });

    it("should return normal animation variants for titleFadeIn", () => {
      const variant = titleFadeIn;

      expect(variant.initial).toEqual({ opacity: 0, y: -30 });
      expect(variant.animate).toEqual({ opacity: 1, y: 0 });
      expect(variant.transition).toEqual({ duration: 0.8 });
    });

    it("should return parameterized variants for cardFadeInUp", () => {
      const variant = cardFadeInUp(0.5);

      expect(variant.initial).toEqual({ opacity: 0, y: 50 });
      expect(variant.animate).toEqual({ opacity: 1, y: 0 });
      expect(variant.transition).toEqual({ duration: 0.6, delay: 0.5 });
    });

    it("should return modal backdrop variants with exit animation", () => {
      const variant = modalBackdrop;

      expect(variant).toHaveProperty("initial");
      expect(variant).toHaveProperty("animate");
      expect(variant).toHaveProperty("exit");
      expect(variant.initial).toEqual({ opacity: 0 });
      expect(variant.animate).toEqual({ opacity: 1 });
      expect(variant.exit).toEqual({ opacity: 0 });
    });

    it("should return glory section animation with viewport settings", () => {
      const variant = glorySectionAnimation;

      expect(variant.initial).toEqual({ opacity: 0, y: 50 });
      expect(variant.whileInView).toEqual({ opacity: 1, y: 0 });
      expect(variant.viewport).toEqual({ once: true });
      expect(variant.transition).toEqual({ duration: 0.8, delay: 0.3 });
    });
  });

  describe("when prefers-reduced-motion is true", () => {
    beforeEach(() => {
      mockMatchMedia(true);
      // Clear the module cache to force re-evaluation with new matchMedia
      jest.resetModules();
    });

    it("should return static variants that respect accessibility preferences", async () => {
      // Re-import the module after mocking matchMedia
      const { fadeInUp: reducedFadeInUp } = await import("../motionVariants");

      // When prefers-reduced-motion is true, both initial and animate should be the same
      expect(reducedFadeInUp.initial).toEqual(reducedFadeInUp.animate);
      expect(reducedFadeInUp.initial).toEqual({ opacity: 1, y: 0 });
    });

    it("should return static variants for titleFadeIn", async () => {
      const { titleFadeIn: reducedTitleFadeIn } = await import(
        "../motionVariants"
      );

      expect(reducedTitleFadeIn.initial).toEqual(reducedTitleFadeIn.animate);
      expect(reducedTitleFadeIn.initial).toEqual({ opacity: 1, y: 0 });
    });

    it("should return static variants for modal animations", async () => {
      const { modalBackdrop: reducedModalBackdrop } = await import(
        "../motionVariants"
      );

      expect(reducedModalBackdrop.initial).toEqual(
        reducedModalBackdrop.animate
      );
      expect(reducedModalBackdrop.initial).toEqual({ opacity: 1 });
      expect(reducedModalBackdrop.exit).toEqual({ opacity: 1 });
    });
  });

  describe("variant structure validation", () => {
    beforeEach(() => {
      mockMatchMedia(false);
    });

    it("should have consistent structure across all variants", () => {
      const variants = [fadeInUp, titleFadeIn, modalBackdrop];

      variants.forEach((variant) => {
        expect(typeof variant).toBe("object");
        expect(variant).toHaveProperty("initial");
        expect(variant).toHaveProperty("animate");

        // Check that initial and animate are objects or functions
        expect(
          typeof variant.initial === "object" ||
            typeof variant.initial === "function"
        ).toBe(true);
        expect(
          typeof variant.animate === "object" ||
            typeof variant.animate === "function"
        ).toBe(true);
      });
    });

    it("should handle cardFadeInUp with different delay values", () => {
      const variant1 = cardFadeInUp(0);
      const variant2 = cardFadeInUp(1);

      expect(variant1.transition.delay).toBe(0);
      expect(variant2.transition.delay).toBe(1);

      // Other properties should be the same
      expect(variant1.initial).toEqual(variant2.initial);
      expect(variant1.animate).toEqual(variant2.animate);
      expect(variant1.transition.duration).toEqual(
        variant2.transition.duration
      );
    });
  });

  describe("About page variants", () => {
    beforeEach(() => {
      mockMatchMedia(false);
    });

    it("should have correct structure for aboutTitleAnimation", () => {
      expect(aboutTitleAnimation).toHaveProperty("initial");
      expect(aboutTitleAnimation).toHaveProperty("animate");
      expect(aboutTitleAnimation).toHaveProperty("transition");

      expect(aboutTitleAnimation.initial).toEqual({ opacity: 0, y: -30 });
      expect(aboutTitleAnimation.animate).toEqual({ opacity: 1, y: 0 });
      expect(aboutTitleAnimation.transition.duration).toBe(0.8);
    });

    it("should have correct structure for aboutSubtitleAnimation", () => {
      expect(aboutSubtitleAnimation).toHaveProperty("initial");
      expect(aboutSubtitleAnimation).toHaveProperty("animate");
      expect(aboutSubtitleAnimation).toHaveProperty("transition");

      expect(aboutSubtitleAnimation.initial).toEqual({ opacity: 0, y: 20 });
      expect(aboutSubtitleAnimation.animate).toEqual({ opacity: 1, y: 0 });
      expect(aboutSubtitleAnimation.transition.delay).toBe(0.3);
    });

    it("should have viewport configuration for aboutSectionAnimation", () => {
      expect(aboutSectionAnimation).toHaveProperty("viewport");
      expect(aboutSectionAnimation.viewport).toEqual({ once: true });
      expect(aboutSectionAnimation).toHaveProperty("whileInView");
    });

    it("should generate parameterized variants for aboutFeatureStaggered", () => {
      const variant0 = aboutFeatureStaggered(0);
      const variant1 = aboutFeatureStaggered(1);
      const variant2 = aboutFeatureStaggered(2);

      expect(variant0.transition.delay).toBe(0);
      expect(variant1.transition.delay).toBe(0.15);
      expect(variant2.transition.delay).toBe(0.3);

      // All should have same structure
      [variant0, variant1, variant2].forEach((variant) => {
        expect(variant).toHaveProperty("initial");
        expect(variant).toHaveProperty("whileInView");
        expect(variant).toHaveProperty("transition");
        expect(variant).toHaveProperty("viewport");
        expect(variant.viewport.once).toBe(true);
      });
    });

    it("should respect prefers-reduced-motion for About variants", () => {
      mockMatchMedia(true); // Enable reduced motion

      // Clear the module cache to force re-evaluation
      jest.resetModules();
      const {
        aboutTitleAnimation: reducedAboutTitle,
        aboutSectionAnimation: reducedAboutSection,
      } = require("../motionVariants");

      expect(reducedAboutTitle.initial).toEqual(reducedAboutTitle.animate);
      expect(reducedAboutSection.initial).toEqual(reducedAboutSection.animate);
    });
  });

  describe("SSR compatibility", () => {
    it("should handle undefined window gracefully", () => {
      // Simulate SSR environment
      const originalWindow = global.window;
      delete (global as any).window;

      // Re-import should not throw
      expect(() => {
        jest.resetModules();
        require("../motionVariants");
      }).not.toThrow();

      // Restore window
      global.window = originalWindow;
    });
  });

  describe("Layout motion variants", () => {
    beforeEach(() => {
      mockMatchMedia(false);
    });

    it("should return proper spotlightAnimation structure", () => {
      const variant = spotlightAnimation;
      expect(variant).toHaveProperty("initial");
      expect(variant).toHaveProperty("animate");
      expect(variant).toHaveProperty("transition");
      expect(variant.initial).toEqual({ opacity: 0, scale: 0.8 });
      expect(variant.animate.opacity).toEqual([0, 1, 0.8, 1]);
      expect(variant.animate.scale).toEqual([0.8, 1.1, 0.9, 1]);
    });

    it("should return proper layoutContainerAnimation structure", () => {
      const variant = layoutContainerAnimation;
      expect(variant).toHaveProperty("initial");
      expect(variant).toHaveProperty("animate");
      expect(variant).toHaveProperty("exit");
      expect(variant.initial).toEqual({ opacity: 0 });
      expect(variant.animate).toEqual({ opacity: 1 });
      expect(variant.exit).toEqual({ opacity: 0 });
    });

    it("should respect prefers-reduced-motion for spotlight animation", () => {
      mockMatchMedia(true);
      // Re-import to get the updated variant with reduced motion
      jest.resetModules();
      const { spotlightAnimation } = require("../motionVariants");

      expect(spotlightAnimation.initial).toEqual(spotlightAnimation.animate);
    });
  });
});
