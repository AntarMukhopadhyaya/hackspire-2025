// PCB circuit board overlay patterns for cyberpunk styling

interface CircuitOverlayProps {
  variant?: "main" | "secondary" | "dense" | "sparse";
  opacity?: "high" | "medium" | "low";
  className?: string;
}

export function CircuitOverlay({
  variant = "main",
  opacity = "medium",
  className = "",
}: CircuitOverlayProps) {
  const opacityClass = {
    high: "opacity-70",
    medium: "opacity-60",
    low: "opacity-50",
  }[opacity];

  const renderMainPattern = () => (
    <>
      {/* Horizontal lines */}
      <div
        className={`absolute top-8 left-0 right-0 h-px bg-black ${opacityClass}`}
      ></div>
      <div
        className={`absolute top-16 left-0 right-0 h-px bg-black opacity-40`}
      ></div>
      <div
        className={`absolute top-24 left-0 right-0 h-px bg-black opacity-30`}
      ></div>
      <div
        className={`absolute top-32 left-0 right-0 h-px bg-black opacity-20`}
      ></div>

      {/* Vertical lines */}
      <div
        className={`absolute top-0 bottom-0 left-8 w-px bg-black ${opacityClass}`}
      ></div>
      <div
        className={`absolute top-0 bottom-0 left-16 w-px bg-black opacity-40`}
      ></div>
      <div
        className={`absolute top-0 bottom-0 right-8 w-px bg-black ${opacityClass}`}
      ></div>
      <div
        className={`absolute top-0 bottom-0 right-16 w-px bg-black opacity-40`}
      ></div>

      {/* Corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-black opacity-40"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-black opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-black opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-black opacity-40"></div>
    </>
  );

  const renderSecondaryPattern = () => (
    <>
      {/* Horizontal lines with percentage spacing */}
      <div
        className={`absolute top-[3%] left-0 right-0 h-px bg-black ${opacityClass}`}
      ></div>
      <div
        className={`absolute top-[9%] left-0 right-0 h-px bg-black opacity-50`}
      ></div>
      <div
        className={`absolute top-[15%] left-0 right-0 h-px bg-black ${opacityClass}`}
      ></div>
      <div
        className={`absolute bottom-[3%] left-0 right-0 h-px bg-black ${opacityClass}`}
      ></div>
      <div
        className={`absolute bottom-[9%] left-0 right-0 h-px bg-black opacity-50`}
      ></div>

      {/* Vertical lines with percentage spacing */}
      <div
        className={`absolute top-0 bottom-0 left-[10%] w-px bg-black ${opacityClass}`}
      ></div>
      <div
        className={`absolute top-0 bottom-0 left-[30%] w-px bg-black opacity-50`}
      ></div>
      <div
        className={`absolute top-0 bottom-0 right-[10%] w-px bg-black ${opacityClass}`}
      ></div>
      <div
        className={`absolute top-0 bottom-0 right-[30%] w-px bg-black opacity-50`}
      ></div>

      {/* Circuit nodes */}
      <div
        className={`absolute top-[6%] left-[20%] w-1 h-1 bg-black ${opacityClass} rounded-full`}
      ></div>
      <div
        className={`absolute top-[12%] left-[40%] w-1 h-1 bg-black ${opacityClass} rounded-full`}
      ></div>
      <div
        className={`absolute bottom-[6%] right-[20%] w-1 h-1 bg-black ${opacityClass} rounded-full`}
      ></div>
    </>
  );

  const renderDensePattern = () => (
    <>
      {/* Multiple horizontal lines */}
      <div
        className={`absolute top-4 bottom-4 left-2 w-px bg-black ${opacityClass}`}
      ></div>
      <div
        className={`absolute top-6 bottom-6 left-4 w-px bg-black opacity-60`}
      ></div>
      <div
        className={`absolute top-8 bottom-8 left-6 w-px bg-black opacity-50`}
      ></div>

      {/* Multiple vertical lines */}
      <div
        className={`absolute top-8 left-1 right-1 h-px bg-black opacity-65`}
      ></div>
      <div
        className={`absolute top-16 left-2 right-2 h-px bg-black opacity-55`}
      ></div>
      <div
        className={`absolute top-24 left-1 right-1 h-px bg-black opacity-50`}
      ></div>

      {/* Micro components */}
      <div
        className={`absolute top-7 left-1 w-1 h-1 bg-black rounded-full ${opacityClass}`}
      ></div>
      <div
        className={`absolute top-15 left-3 w-1 h-1 bg-black rounded-full opacity-60`}
      ></div>
      <div className="absolute top-12 left-2 w-2 h-0.5 bg-black opacity-55 rounded-sm"></div>
    </>
  );

  const renderSparsePattern = () => (
    <>
      {/* Circuit lines with increased spacing */}
      <div
        className={`absolute top-[6%] left-0 right-0 h-px bg-black opacity-60`}
      ></div>
      <div
        className={`absolute top-[16%] left-0 right-0 h-px bg-black opacity-40`}
      ></div>
      <div
        className={`absolute bottom-[6%] left-0 right-0 h-px bg-black opacity-60`}
      ></div>

      {/* Vertical sparse lines */}
      <div
        className={`absolute top-0 bottom-0 left-[18%] w-px bg-black opacity-60`}
      ></div>
      <div
        className={`absolute top-0 bottom-0 right-[18%] w-px bg-black opacity-60`}
      ></div>

      {/* Minimal circuit nodes */}
      <div
        className={`absolute top-[12%] left-[37%] w-1 h-1 bg-black ${opacityClass} rounded-full`}
      ></div>
      <div
        className={`absolute bottom-[12%] right-[37%] w-1 h-1 bg-black ${opacityClass} rounded-full`}
      ></div>
    </>
  );

  const renderPattern = () => {
    switch (variant) {
      case "secondary":
        return renderSecondaryPattern();
      case "dense":
        return renderDensePattern();
      case "sparse":
        return renderSparsePattern();
      default:
        return renderMainPattern();
    }
  };

  return (
    <div className={`absolute inset-0 ${className}`}>{renderPattern()}</div>
  );
}
