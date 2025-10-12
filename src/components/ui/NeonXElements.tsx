"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface NeonXProps {
  size: number;
  initialX: string;
  initialY: string;
  id: string;
  delay1: number;
  delay2: number;
  isMobile?: boolean;
}

const NeonX = ({
  size,
  initialX,
  initialY,
  id,
  delay1,
  delay2,
  isMobile,
}: NeonXProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      onDrag={(event, info) => {
        setPosition({
          x: position.x + info.delta.x,
          y: position.y + info.delta.y,
        });
      }}
      className="absolute cursor-grab active:cursor-grabbing"
      style={{
        left: initialX,
        top: initialY,
        transform: `translate(${position.x}px, ${position.y}px)`,
        fontSize: `${size}px`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: isMobile ? 0.65 : 1,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.5, delay: delay1 },
        scale: { duration: 0.5, delay: delay2 },
      }}
      whileHover={{ scale: 1.2 }}
      whileDrag={{ scale: 1.1, zIndex: 1000 }}
    >
      <div className="neon-x relative flex items-center justify-center w-full h-full">
        {/* Main X */}
        <span
          className="neon-x-text font-bold leading-none select-none"
          style={{
            fontFamily: "Mokoto Demo",
            fontSize: `${size}px`,
            lineHeight: "1",
          }}
        >
          X
        </span>

        {/* Glitch Overlays */}
        <motion.span
          className="neon-x-glitch-1 absolute inset-0 flex items-center justify-center font-bold leading-none select-none"
          style={{
            fontFamily: "Mokoto Demo",
            fontSize: `${size}px`,
            lineHeight: "1",
          }}
          animate={{
            opacity: [0, 1, 0, 1, 0],
            x: [-2, 2, -1, 1, 0],
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5, // Fixed delay instead of Math.random()
          }}
        >
          X
        </motion.span>

        <motion.span
          className="neon-x-glitch-2 absolute inset-0 flex items-center justify-center font-bold leading-none select-none"
          style={{
            fontFamily: "Mokoto Demo",
            fontSize: `${size}px`,
            lineHeight: "1",
          }}
          animate={{
            opacity: [0, 1, 0, 1, 0],
            x: [1, -2, 2, -1, 0],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.25, // Fixed delay instead of Math.random() * 0.5
          }}
        >
          X
        </motion.span>
      </div>
    </motion.div>
  );
};

export default function NeonXElements() {
  // Generate fixed positions and sizes for 5 X elements (avoiding center logo area)
  const baseElements = [
    { id: "x1", size: 60, x: "5%", y: "10%", delay1: 0.2, delay2: 0.4 },
    { id: "x2", size: 45, x: "90%", y: "15%", delay1: 0.6, delay2: 0.8 },
    { id: "x3", size: 80, x: "15%", y: "85%", delay1: 1.0, delay2: 1.2 },
    { id: "x4", size: 35, x: "85%", y: "80%", delay1: 1.4, delay2: 1.6 },
    { id: "x5", size: 55, x: "8%", y: "70%", delay1: 1.8, delay2: 2.0 },
  ];

  // Detect mobile (client-only) and adjust sizes/positions slightly so Xs don't overlap the bottom-center message
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 640px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile((e as any).matches ?? mq.matches);
    // Set initial
    setIsMobile(mq.matches);
    // Add listener (use addEventListener if available)
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange as any);
      return () => mq.removeEventListener("change", onChange as any);
    } else if (typeof mq.addListener === "function") {
      // deprecated but covers older browsers
      // @ts-ignore
      mq.addListener(onChange);
      return () => {
        // @ts-ignore
        mq.removeListener(onChange);
      };
    }
  }, []);

  const adjustedElements = baseElements.map((el) => {
    if (!isMobile) return el;
    // On mobile: shrink size, push elements further towards edges and slightly lower so they don't overlap bottom-center text
    // make Xs slightly larger on mobile compared to previous change but still a bit smaller than desktop
    const size = Math.round(el.size * 0.9);
    const xNum = parseFloat(el.x.replace("%", ""));
    const yNum = parseFloat(el.y.replace("%", ""));

    // push further to edges on mobile to avoid center/bottom overlap
    const newX = xNum < 50 ? Math.max(0, xNum - 12) : Math.min(100, xNum + 12);
    // nudge slightly down but less than before so visual balance remains
    const newY = Math.min(100, yNum + 6);

    return {
      ...el,
      size,
      x: `${newX}%`,
      y: `${newY}%`,
    };
  });

  return (
    <>
      {adjustedElements.map((element) => (
        <NeonX
          key={element.id}
          id={element.id}
          size={element.size}
          initialX={element.x}
          initialY={element.y}
          delay1={element.delay1}
          delay2={element.delay2}
          isMobile={isMobile}
        />
      ))}
    </>
  );
}
