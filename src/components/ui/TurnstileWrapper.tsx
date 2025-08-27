"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { useEffect, useState } from "react";

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
  theme = "light",
  size = "normal",
}: TurnstileWrapperProps) {
  const [siteKey, setSiteKey] = useState<string>("");
  const [mounted, setMounted] = useState(false);

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
    setMounted(true);
  }, []);

  if (!mounted || !siteKey) {
    return (
      <div
        className={`p-4 border border-gray-600 rounded bg-gray-800/50 ${className}`}
      >
        <p className="text-gray-400 text-sm text-center">
          Loading verification...
        </p>
      </div>
    );
  }

  return (
    <div
      className={`turnstile-container w-full flex justify-center ${className}`}
    >
      <div className="turnstile-widget">
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
        .turnstile-widget {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        /* Custom styling for cyberpunk theme */
        .turnstile-widget :global(iframe) {
          border-radius: 4px !important;
          border: 2px solid #facc15 !important;
          box-shadow: 0 0 15px rgba(250, 204, 21, 0.4) !important;
          filter: brightness(1.3) contrast(1.2) !important;
          background: rgba(0, 0, 0, 0.1) !important;
        }

        .turnstile-widget :global(iframe):hover {
          box-shadow: 0 0 20px rgba(250, 204, 21, 0.6) !important;
          border-color: #fbbf24 !important;
          filter: brightness(1.4) contrast(1.25) !important;
        }

        /* Style the actual checkbox content */
        .turnstile-widget :global(iframe) :global(*) {
          filter: brightness(1.2) !important;
        }
      `}</style>
    </div>
  );
}
