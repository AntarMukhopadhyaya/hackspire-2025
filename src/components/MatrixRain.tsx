"use client";
import { useEffect, useRef } from "react";

interface MatrixRainProps {
  className?: string;
  width?: number;
  height?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  isFullScreen?: boolean;
}

export default function MatrixRain({
  className = "",
  width = 400,
  height = 300,
  position = "top-left",
  isFullScreen = false,
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to specific dimensions or full screen
    const resizeCanvas = () => {
      if (isFullScreen) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      } else {
        canvas.width = width;
        canvas.height = height;
      }
    };

    resizeCanvas();

    // Add window resize listener if full screen
    if (isFullScreen) {
      window.addEventListener("resize", resizeCanvas);
    }

    // Matrix characters (mix of katakana, numbers, and symbols)
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charArray = chars.split("");

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Cyberpunk yellow color
    const matrixColor = "#FFC107"; // Cyberpunk yellow
    const trailColor = "rgba(255, 193, 7, 0.05)"; // Very faint yellow for trail

    const draw = () => {
      // Create trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = matrixColor;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Get random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];

        // Draw character
        ctx.fillStyle = matrixColor;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Add some randomness to make it look more authentic
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      if (isFullScreen) {
        window.removeEventListener("resize", resizeCanvas);
      }
    };
  }, []);

  // Position classes based on the position prop
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <canvas
      ref={canvasRef}
      className={`absolute pointer-events-none ${
        isFullScreen ? "inset-0 w-full h-full" : positionClasses[position]
      } ${className}`}
      style={{
        opacity: 0.2,
        zIndex: 2,
        ...(isFullScreen
          ? {}
          : {
              width: `${width}px`,
              height: `${height}px`,
            }),
      }}
    />
  );
}
