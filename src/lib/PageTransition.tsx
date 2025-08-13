"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  // Always render the same structure, but conditionally apply transitions
  const getTransitionType = (path: string) => {
    if (path.includes("/about")) return "slide";
    if (path.includes("/contact")) return "scale";
    if (path.includes("/projects")) return "fade";
    if (path.includes("/blog")) return "slide";
    return "default";
  };

  const transitionType = getTransitionType(currentPath);

  const variants = {
    hero: {
      initial: { y: 20, opacity: 0, scale: 0.95, filter: "blur(2px)" },
      animate: { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
      exit: { y: -20, opacity: 0, scale: 0.95, filter: "blur(2px)" },
    },
    slide: {
      initial: { x: 100, opacity: 0, scale: 0.95, filter: "blur(1px)" },
      animate: { x: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
      exit: { x: -100, opacity: 0, scale: 0.95, filter: "blur(1px)" },
    },
    scale: {
      initial: { scale: 0.8, opacity: 0, rotateY: 15, filter: "blur(1px)" },
      animate: { scale: 1, opacity: 1, rotateY: 0, filter: "blur(0px)" },
      exit: { scale: 1.2, opacity: 0, rotateY: -15, filter: "blur(1px)" },
    },
    fade: {
      initial: { opacity: 0, y: 10, filter: "blur(1px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: -10, filter: "blur(1px)" },
    },
    default: {
      initial: { y: 20, opacity: 0, scale: 0.98, filter: "blur(1px)" },
      animate: { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
      exit: { y: -20, opacity: 0, scale: 0.98, filter: "blur(1px)" },
    },
  };

  // For home page, render without transitions
  if (pathname === "/") {
    return <>{children}</>;
  }

  // For other pages, render with transitions
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPath}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants[transitionType]}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          opacity: { duration: 0.3 },
          filter: { duration: 0.25 },
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
