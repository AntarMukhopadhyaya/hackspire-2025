"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouteChangeAnimation() {
  const pathname = usePathname();
  const progress = useMotionValue(0);
  const width = useTransform(progress, [0, 100], ["0%", "100%"]);
  const opacity = useTransform(progress, [0, 100], [0, 1]);

  useEffect(() => {
    // Skip animation for home page
    if (pathname === "/") return;

    // Animate progress bar on route change
    const controls = animate(progress, [0, 100], {
      duration: 0.6, // Reduced from 0.8s
      ease: "easeInOut",
      onComplete: () => {
        // Reset progress after animation
        setTimeout(() => {
          progress.set(0);
        }, 150); // Reduced from 200ms
      },
    });

    return controls.stop;
  }, [pathname, progress]);

  // Always render the same structure, but conditionally show content
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-0.5 z-50 pointer-events-none"
      style={{ 
        opacity: pathname === "/" ? 0 : opacity,
        pointerEvents: pathname === "/" ? "none" : "auto"
      }}
    >
      {/* Main progress bar */}
      <motion.div
        className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"
        style={{ width }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-transparent via-white/40 to-transparent"
        style={{
          x: useTransform(width, (w) => `calc(${w} - 4rem)`),
          opacity: useTransform(progress, [0, 50, 100], [0, 1, 0]),
        }}
      />

      {/* Scan line effect */}
      <motion.div
        className="absolute top-0 h-full w-0.5 bg-white shadow-lg"
        style={{
          x: useTransform(width, (w) => w),
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.9)",
        }}
      />
    </motion.div>
  );
}
