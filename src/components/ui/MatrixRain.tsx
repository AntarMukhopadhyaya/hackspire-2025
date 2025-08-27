"use client";
import { useEffect, useRef, useMemo, useCallback, memo } from "react";

interface MatrixRainProps {
  className?: string;
  width?: number;
  height?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  isFullScreen?: boolean;
  opacity?: number;
  animationSpeed?: number;
  fontSize?: number;
  density?: number;
}

const MatrixRain = memo(function MatrixRain({
  className = "",
  width = 400,
  height = 300,
  position = "top-left",
  isFullScreen = false,
  opacity = 0.2,
  animationSpeed = 35,
  fontSize = 14,
  density = 1,
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const dropsRef = useRef<number[]>([]);

  // Memoize matrix configuration to prevent recalculation
  const matrixConfig = useMemo(
    () => ({
      // Matrix characters (optimized character set)
      chars:
        "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      // Colors
      matrixColor: "#FFC107",
      trailColor: "rgba(0, 0, 0, 0.04)",
      // Animation settings
      fontSize,
      animationSpeed,
      resetProbability: 0.975,
      density,
    }),
    [fontSize, animationSpeed, density]
  );

  // Memoize character array to avoid splitting on every render
  const charArray = useMemo(
    () => matrixConfig.chars.split(""),
    [matrixConfig.chars]
  );

  // Memoize position classes
  const positionClasses = useMemo(
    () => ({
      "top-left": "top-0 left-0",
      "top-right": "top-0 right-0",
      "bottom-left": "bottom-0 left-0",
      "bottom-right": "bottom-0 right-0",
    }),
    []
  );

  // Memoize canvas style to prevent object recreation
  const canvasStyle = useMemo(
    () => ({
      opacity,
      zIndex: 2,
      ...(isFullScreen
        ? {}
        : {
            width: `${width}px`,
            height: `${height}px`,
          }),
    }),
    [opacity, isFullScreen, width, height]
  );

  // Optimized resize handler with useCallback
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const newWidth = isFullScreen ? window.innerWidth : width;
    const newHeight = isFullScreen ? window.innerHeight : height;

    // Only resize if dimensions actually changed
    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      canvas.width = newWidth;
      canvas.height = newHeight;

      // Recalculate drops for new canvas size
      const columns =
        Math.floor(newWidth / matrixConfig.fontSize) * matrixConfig.density;
      dropsRef.current = Array.from(
        { length: columns },
        () => Math.floor(Math.random() * 100) // Random initial positions
      );
    }
  }, [
    isFullScreen,
    width,
    height,
    matrixConfig.fontSize,
    matrixConfig.density,
  ]);

  // Optimized draw function with useCallback
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { fontSize, matrixColor, trailColor, resetProbability } =
      matrixConfig;
    const drops = dropsRef.current;

    // Create trailing effect
    ctx.fillStyle = trailColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text properties once
    ctx.fillStyle = matrixColor;
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = "top";

    // Batch character drawing for better performance
    for (let i = 0; i < drops.length; i++) {
      // Get random character (using bitwise operation for better performance)
      const charIndex = Math.floor(Math.random() * charArray.length);
      const char = charArray[charIndex];

      // Calculate position
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Draw character
      ctx.fillText(char, x, y);

      // Reset drop with optimized random check
      if (y > canvas.height && Math.random() > resetProbability) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }, [matrixConfig, charArray]);

  // Optimized animation loop using requestAnimationFrame
  const animate = useCallback(() => {
    draw();
    animationRef.current = setTimeout(() => {
      requestAnimationFrame(animate);
    }, matrixConfig.animationSpeed);
  }, [draw, matrixConfig.animationSpeed]);

  // Main effect with proper cleanup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initial setup
    resizeCanvas();

    // Add resize listener only if needed
    if (isFullScreen) {
      window.addEventListener("resize", resizeCanvas, { passive: true });
    }

    // Start animation
    animate();

    // Cleanup function
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
        animationRef.current = null;
      }
      if (isFullScreen) {
        window.removeEventListener("resize", resizeCanvas);
      }
    };
  }, [isFullScreen, resizeCanvas, animate]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute pointer-events-none ${
        isFullScreen ? "inset-0 w-full h-full" : positionClasses[position]
      } ${className}`}
      style={canvasStyle}
    />
  );
});

export default MatrixRain;
