// Reusable corner accent component for cyberpunk styling

interface CornerAccentsProps {
  className?: string;
}

export function CornerAccents({ className = "" }: CornerAccentsProps) {
  return (
    <>
      {/* Top left corner */}
      <div
        className={`absolute top-0 left-0 w-[--corner-size] h-[--corner-size] bg-black transform -translate-x-0.5 -translate-y-0.5 md:-translate-x-1 md:-translate-y-1 ${className}`}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-l border-t border-purple-500/30"></div>
      </div>

      {/* Top right corner */}
      <div
        className={`absolute top-0 right-0 w-[--corner-size] h-[--corner-size] bg-black transform translate-x-0.5 -translate-y-0.5 md:translate-x-1 md:-translate-y-1 ${className}`}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-r border-t border-purple-500/30"></div>
      </div>

      {/* Bottom left corner */}
      <div
        className={`absolute bottom-0 left-0 w-[--corner-size] h-[--corner-size] bg-black transform -translate-x-0.5 translate-y-0.5 md:-translate-x-1 md:translate-y-1 ${className}`}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-l border-b border-purple-500/30"></div>
      </div>

      {/* Bottom right corner */}
      <div
        className={`absolute bottom-0 right-0 w-[--corner-size] h-[--corner-size] bg-black transform translate-x-0.5 translate-y-0.5 md:translate-x-1 md:translate-y-1 ${className}`}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-r border-b border-purple-500/30"></div>
      </div>
    </>
  );
}
