import { useEffect, useState } from "react";

export default function DevfolioButton() {
  // Render the actual Devfolio button after mount
  return (
    <div
      className={`apply-button`}
      data-hackathon-slug="hackspire2025"
      data-button-theme="dark"
      suppressHydrationWarning
    />
  );
}
