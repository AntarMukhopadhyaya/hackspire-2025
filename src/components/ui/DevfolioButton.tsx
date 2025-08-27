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
  // Render the actual Devfolio button after mount
  return (
    <div
      className={`apply-button ${className}`}
      data-hackathon-slug="hackspire2025"
      data-button-theme="dark"
      suppressHydrationWarning
    />
  );
}
