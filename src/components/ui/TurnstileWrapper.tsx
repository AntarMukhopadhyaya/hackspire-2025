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
  theme = "dark",
  size = "normal",
}: TurnstileWrapperProps) {
  const [siteKey, setSiteKey] = useState<string>("");

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

  if (!siteKey) {
    return (
      <div
        className={`p-4 border border-gray-600 rounded bg-gray-800/50 ${className}`}
      >
        <p className="text-gray-400 text-sm">Loading verification...</p>
      </div>
    );
  }

  return (
    <div className={`turnstile-container ${className}`}>
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
      <style jsx>{`
        .turnstile-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1rem 0;
        }

        /* Custom styling for cyberpunk theme */
        .turnstile-container :global(iframe) {
          border-radius: 4px;
          border: 1px solid #facc15;
          box-shadow: 0 0 10px rgba(250, 204, 21, 0.3);
        }
      `}</style>
    </div>
  );
}
