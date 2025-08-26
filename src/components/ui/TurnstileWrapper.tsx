"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface TurnstileWrapperProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  className?: string;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "compact";
}

export default function TurnstileWrapper({
  onVerify,
  onError,
  onExpire,
  className = "",
  theme = "dark",
  size = "normal",
}: TurnstileWrapperProps) {
  const [siteKey, setSiteKey] = useState<string>("");
  const [portalEl, setPortalEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    // Get site key from environment variable
    const key = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;
    if (key) {
      setSiteKey(key);
    } else {
      console.error(
        "Cloudflare Turnstile site key not found in environment variables"
      );
    }
  }, []);

  // Create a portal element on mount so the widget renders at document.body
  useEffect(() => {
    const node = document.createElement("div");
    node.setAttribute("data-turnstile-portal", "true");
    document.body.appendChild(node);
    setPortalEl(node);
    return () => {
      if (node.parentNode) node.parentNode.removeChild(node);
    };
  }, []);

  if (!siteKey || !portalEl) {
    return (
      <div
        className={`p-4 border border-gray-600 rounded bg-gray-800/50 ${className}`}
      >
        <p className="text-gray-400 text-sm">Loading verification...</p>
      </div>
    );
  }

  const content = (
    <div
      className={`turnstile-root fixed inset-0 flex items-center justify-center pointer-events-none`}
      style={{ zIndex: 2147483647 }}
    >
      <div
        className={`turnstile-container pointer-events-auto ${className}`}
        style={{ zIndex: 2147483647 }}
      >
        <Turnstile
          siteKey={siteKey}
          onSuccess={onVerify}
          onError={onError}
          onExpire={onExpire}
          options={{
            theme: theme,
            size: size,
          }}
        />
      </div>
      <style jsx>{`
        .turnstile-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
        }

        /* Custom styling for cyberpunk theme - ensure iframe sits above everything */
        .turnstile-container :global(iframe) {
          position: relative !important;
          z-index: 2147483647 !important;
          pointer-events: auto !important;
          border-radius: 4px;
          border: 1px solid #facc15;
          box-shadow: 0 0 10px rgba(250, 204, 21, 0.3);
        }
      `}</style>
    </div>
  );

  return createPortal(content, portalEl);
}
