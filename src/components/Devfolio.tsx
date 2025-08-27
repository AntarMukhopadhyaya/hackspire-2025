"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function DevfolioProvider() {
  useEffect(() => {
    const initDevfolio = () => {
      if ((window as any).Devfolio) {
        (window as any).Devfolio.Button("apply-button");
      }
    };

    // In case the SDK loads after hydration
    window.addEventListener("devfolio:ready", initDevfolio);

    return () => {
      window.removeEventListener("devfolio:ready", initDevfolio);
    };
  }, []);

  return (
    <Script
      src="https://apply.devfolio.co/v2/sdk.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.dispatchEvent(new Event("devfolio:ready"));
      }}
    />
  );
}
