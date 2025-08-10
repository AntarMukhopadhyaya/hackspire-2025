// Reusable trapezium shapes for contact page background elements
import { CircuitOverlay } from "./CircuitOverlay";

interface TrapeziumShapeProps {
  variant:
    | "left-main"
    | "left-secondary"
    | "right-main"
    | "right-secondary"
    | "left-small"
    | "right-small";
  className?: string;
  opacity?: number;
}

export function TrapeziumShape({
  variant,
  className = "",
  opacity = 1,
}: TrapeziumShapeProps) {
  // Map variants to CSS variable clip-paths injected by the page
  const getClipPathVar = () => {
    switch (variant) {
      case "left-main":
        return "var(--clip-path-left-trap-main)";
      case "left-secondary":
      case "left-small":
        return "var(--clip-path-left-trap-secondary)";
      case "right-main":
        return "var(--clip-path-right-trap-main)";
      case "right-secondary":
      case "right-small":
        return "var(--clip-path-right-trap-secondary)";
      default:
        return "var(--clip-path-right-trap-main)";
    }
  };

  const getCutoutClipPath = () => {
    const isLeft = variant.includes("left");
    const isSecondary =
      variant.includes("secondary") || variant.includes("small");

    if (isSecondary) {
      return isLeft
        ? "polygon(0% 0%, 100% 25%, 100% 75%, 0% 100%)"
        : "polygon(0% 25%, 100% 0%, 100% 100%, 0% 75%)";
    }

    return isLeft
      ? "polygon(0% 0%, 100% 30%, 100% 70%, 0% 100%)"
      : "polygon(0% 30%, 100% 0%, 100% 100%, 0% 70%)";
  };

  const getCircuitVariant = () => {
    if (variant.includes("small")) return "sparse";
    if (variant.includes("secondary")) return "secondary";
    return "dense";
  };

  const isLeft = variant.includes("left");

  return (
    <div className={`w-full h-full relative ${className}`} style={{ opacity }}>
      {/* Main shape with clip-path (background on clipped element) */}
      <div
        className="w-full h-full bg-yellow-400 relative overflow-hidden"
        style={{ clipPath: getClipPathVar() }}
      >
        {/* Center cutout (decorative) */}
        <div
          className="absolute top-1/2 w-full bg-transparent transform -translate-y-1/2 pointer-events-none"
          style={{
            clipPath: getCutoutClipPath(),
            height: variant.includes("small")
              ? "1rem"
              : variant.includes("secondary")
              ? "1.5rem"
              : "2rem",
            [isLeft ? "left" : "right"]: 0,
          }}
        ></div>

        {/* Circuit overlay */}
        <CircuitOverlay
          variant={getCircuitVariant() as any}
          opacity="medium"
          className="pointer-events-none"
        />

        {/* Decorative triangular cuts (subtle transparent accents) */}
        {!variant.includes("small") && (
          <>
            <div
              className="absolute w-6 h-6 bg-transparent pointer-events-none"
              style={{
                clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)",
                top: "25%",
                [isLeft ? "left" : "right"]: "25%",
              }}
            ></div>
            <div
              className="absolute w-5 h-5 bg-transparent pointer-events-none"
              style={{
                clipPath: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)",
                top: "75%",
                [isLeft ? "right" : "left"]: "25%",
              }}
            ></div>
          </>
        )}

        {/* Additional geometric element for main variants */}
        {variant.includes("main") && (
          <div
            className="absolute w-4 h-12 bg-transparent pointer-events-none"
            style={{
              clipPath: isLeft
                ? "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)"
                : "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)",
              top: "33%",
              [isLeft ? "right" : "left"]: 0,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}
