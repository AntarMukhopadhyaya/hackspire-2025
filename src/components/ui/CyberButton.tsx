"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function CyberButton({
  children,
  onClick,
  className = "",
  href,
}: CyberButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonContent = (
    <motion.div
      className={`cyber-button-container relative inline-block ${
        isHovered ? "glitch-active" : ""
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2,
        },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Main Button */}
      <div className="cyber-button relative overflow-hidden">
        {/* Background with cuts */}
        <div className="cyber-button-bg"></div>

        {/* Border with cuts */}
        <div className="cyber-button-border"></div>

        {/* Text */}
        <span
          className={`cyber-button-text ${isHovered ? "glitch-active" : ""}`}
        >
          {children}
        </span>

        {/* Glitch overlay effect */}
        {isHovered && (
          <>
            <motion.div
              className="cyber-button-glitch-1"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0, 1, 0],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {children}
            </motion.div>
            <motion.div
              className="cyber-button-glitch-2"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0, 1, 0],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.1,
              }}
            >
              {children}
            </motion.div>
          </>
        )}

        {/* Scan line effect */}
        {isHovered && (
          <motion.div
            className="cyber-button-scan"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {buttonContent}
    </button>
  );
}
