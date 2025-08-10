// Reusable cyberpunk container with clip-path styling and hover effects

interface CyberpunkContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function CyberpunkContainer({
  children,
  className = "",
}: CyberpunkContainerProps) {
  return (
    <div
      className={`relative p-4 md:p-6 group cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}
    >
      {/* Background with responsive clip-path */}
      <div
        className="absolute inset-0 bg-yellow-400 transition-all duration-300 group-hover:animate-pulse"
        style={{
          clipPath: "var(--clip-path-corners)",
        }}
      ></div>

      {/* Border with responsive clip-path */}
      <div
        className="absolute -inset-0.5 md:-inset-1 bg-yellow-500 transition-all duration-300 group-hover:bg-orange-500"
        style={{
          clipPath: "var(--clip-path-corners)",
          zIndex: -1,
        }}
      ></div>

      {/* Glitch overlays for hover effect */}
      <div
        className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150"
        style={{
          clipPath: "var(--clip-path-corners)",
          mixBlendMode: "screen",
          transform: "translateX(-2px)",
          zIndex: 1,
        }}
      ></div>

      <div
        className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150"
        style={{
          clipPath: "var(--clip-path-corners)",
          mixBlendMode: "screen",
          transform: "translateX(2px)",
          zIndex: 2,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
