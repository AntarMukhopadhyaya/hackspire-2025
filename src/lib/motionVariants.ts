// Motion variants for consistent animations across the app
// Supports prefers-reduced-motion accessibility

const prefersReducedMotion =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

// Base variants that respect motion preferences
const createVariant = (variant: any) =>
  prefersReducedMotion
    ? { initial: variant.animate, animate: variant.animate }
    : variant;

// Common fade and slide variants
export const fadeInUp = createVariant({
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
});

export const fadeInUpDelayed = (delay: number) =>
  createVariant({
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" },
  });

export const fadeInLeft = (delay: number) =>
  createVariant({
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" },
  });

export const fadeInRight = (delay: number) =>
  createVariant({
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" },
  });

export const scaleIn = (delay: number) =>
  createVariant({
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, delay, ease: "easeOut" },
  });

// Typing animation variants
export const typingAnimation = (delay: number = 0) =>
  createVariant({
    animate: {
      width: ["0%", "100%", "100%", "0%"],
      opacity: [0, 1, 1, 0],
    },
    transition: {
      duration: 12,
      repeat: Infinity,
      delay,
      times: [0, 0.3, 0.7, 1],
      ease: "easeInOut",
    },
  });

// Cursor blink animation
export const cursorBlink = createVariant({
  animate: {
    opacity: [0, 1, 1, 0],
    scale: [0.8, 1, 1, 0.8],
  },
  transition: {
    duration: 1.2,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

// Progress bar animation
export const progressBar = createVariant({
  animate: {
    width: ["0%", "100%"],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

// Background opacity pulse
export const backgroundPulse = createVariant({
  animate: {
    opacity: [0.4, 0.8, 0.4],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

// Terminal container animation
export const terminalContainer = createVariant({
  initial: { opacity: 0 },
  animate: { opacity: 0.4 },
  transition: { duration: 1, delay: 1 },
});

// Title and text variants
export const titleFadeIn = createVariant({
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
});

export const subtitleFadeIn = createVariant({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.3 },
});

// Card grid variants
export const cardFadeInUp = (delay: number = 0) =>
  createVariant({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

export const cardFadeInUpStaggered = (index: number, baseDelay: number = 0) =>
  cardFadeInUp(baseDelay + index * 0.15);

// Hover scale variant
export const hoverScale = createVariant({
  whileHover: { scale: 1.05 },
  transition: { duration: 0.3 },
});

// Matrix animation (for background effects)
export const matrixFall = {
  animate: {
    y: ["0vh", "200vh"],
    opacity: [0, 1, 1, 0],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "linear",
  },
};

// Contact page specific variants
export const contactTitleFadeIn = createVariant({
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
});

export const contactSubtitleFadeIn = createVariant({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.3 },
});

export const contactCardStaggered = (index: number) =>
  createVariant({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: 0.8 + index * 0.1, ease: "easeOut" },
  });

export const formFocusScale = createVariant({
  whileFocus: { scale: 1.02 },
  transition: { duration: 0.2 },
});

export const buttonHoverScale = createVariant({
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
});

export const mapContainerAnimation = createVariant({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, delay: 0.9 },
});

export const mapTitleAnimation = createVariant({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 1.2 },
});

export const mapSubtitleAnimation = createVariant({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 1.4 },
});

export const successMessageAnimation = createVariant({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
});

// Tracks page specific variants
export const modalBackdrop = createVariant({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
});

export const modalContent = createVariant({
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
  transition: { duration: 0.3 },
});

export const glorySectionAnimation = createVariant({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.3 },
  viewport: { once: true },
});

export const ctaSectionAnimation = createVariant({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
});

// About page specific variants
export const aboutTitleAnimation = createVariant({
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
});

export const aboutSubtitleAnimation = createVariant({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.3 },
});

export const aboutLogoAnimation = createVariant({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, delay: 0.6 },
});

export const aboutSectionAnimation = createVariant({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
  viewport: { once: true },
});

export const aboutFeatureStaggered = (index: number) =>
  createVariant({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: index * 0.15 },
    viewport: { once: true },
  });

export const aboutVisionAnimation = createVariant({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
  viewport: { once: true },
});

export const aboutCallToActionAnimation = createVariant({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
  viewport: { once: true },
});

// Layout motion variants
export const spotlightAnimation = createVariant({
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: [0, 1, 0.8, 1],
    scale: [0.8, 1.1, 0.9, 1],
  },
  transition: {
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
  },
});

export const layoutContainerAnimation = createVariant({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
});
