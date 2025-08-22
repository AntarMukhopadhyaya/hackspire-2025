import { useEffect, useState } from "react";

interface DevfolioButtonProps {
  hackathonSlug: string;
  buttonTheme?: "light" | "dark";
  className?: string;
  style?: React.CSSProperties;
}

export default function DevfolioButton({
  hackathonSlug,
  buttonTheme = "light",
  className = "",
  style = {},
}: DevfolioButtonProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return placeholder during SSR to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div
        className={`bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center gap-2 opacity-90 ${className}`}
        style={{ height: "44px", width: "312px", ...style }}
      >
        <div className="w-6 h-6 bg-white rounded"></div>
        Loading...
      </div>
    );
  }

  // Render the actual Devfolio button after mount
  return (
    <div
      className={`apply-button ${className}`}
      data-hackathon-slug={hackathonSlug}
      data-button-theme={buttonTheme}
      style={{ height: "44px", width: "312px", ...style }}
      suppressHydrationWarning
    />
  );
}
