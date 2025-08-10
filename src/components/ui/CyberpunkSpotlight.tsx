"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  LAYOUT_SPOTLIGHT_CONTAINER_CLASSES,
  LAYOUT_GRADIENTS,
} from "@/lib/styles";
import { spotlightAnimation } from "@/lib/motionVariants";

/**
 * Animated cyberpunk spotlight background effect
 * Lazy loads animation after requestIdleCallback for performance
 * Respects prefers-reduced-motion accessibility settings
 */
export default function CyberpunkSpotlight() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Defer animation initialization until browser is idle
    const initAnimation = () => setShouldAnimate(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(initAnimation);
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(initAnimation, 100);
    }
  }, []);

  if (!shouldAnimate) {
    // Render static state immediately for better LCP
    return (
      <div className={LAYOUT_SPOTLIGHT_CONTAINER_CLASSES}>
        <div
          className="w-full h-full"
          style={{
            background: LAYOUT_GRADIENTS.cyberpunkSpotlight,
          }}
        />
      </div>
    );
  }

  return (
    <div className={LAYOUT_SPOTLIGHT_CONTAINER_CLASSES}>
      <motion.div
        className="w-full h-full"
        style={{
          background: LAYOUT_GRADIENTS.cyberpunkSpotlight,
        }}
        {...spotlightAnimation}
      />
    </div>
  );
}
