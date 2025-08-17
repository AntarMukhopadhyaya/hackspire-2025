"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface NeonXProps {
  size: number;
  initialX: string;
  initialY: string;
  id: string;
}

const NeonX = ({ size, initialX, initialY, id }: NeonXProps) => {
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
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.5, delay: Math.random() * 2 },
        scale: { duration: 0.5, delay: Math.random() * 2 },
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
            delay: Math.random(),
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
            delay: Math.random() * 0.5,
          }}
        >
          X
        </motion.span>
      </div>
    </motion.div>
  );
};

export default function NeonXElements() {
  // Generate random positions and sizes for 5 X elements (avoiding center logo area)
  const xElements = [
    { id: "x1", size: 60, x: "5%", y: "10%" },
    { id: "x2", size: 45, x: "90%", y: "15%" },
    { id: "x3", size: 80, x: "15%", y: "85%" },
    { id: "x4", size: 35, x: "85%", y: "80%" },
    { id: "x5", size: 55, x: "8%", y: "70%" },
  ];

  return (
    <>
      {xElements.map((element) => (
        <NeonX
          key={element.id}
          id={element.id}
          size={element.size}
          initialX={element.x}
          initialY={element.y}
        />
      ))}
    </>
  );
}
