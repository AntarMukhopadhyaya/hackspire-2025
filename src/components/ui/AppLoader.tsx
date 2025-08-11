"use client";
import { useState, useEffect } from "react";
import { useAppLoading } from "@/hooks/useAppLoading";
import HackingOpener from "./HackingOpener";

interface AppLoaderProps {
  children: React.ReactNode;
}

export default function AppLoader({ children }: AppLoaderProps) {
  const [showOpener, setShowOpener] = useState(false);
  const [openerComplete, setOpenerComplete] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { isLoading, fontsLoaded } = useAppLoading();

  useEffect(() => {
    setIsClient(true);

    // Check if user wants to skip the opener for performance
    const skipOpener = sessionStorage.getItem("hackspire-skip-opener");
    const hasSeenOpener = sessionStorage.getItem("hackspire-opener-seen");

    if (skipOpener === "true" || hasSeenOpener) {
      setOpenerComplete(true);
    } else {
      setShowOpener(true);
    }
  }, []);

  const handleOpenerComplete = () => {
    setOpenerComplete(true);
    sessionStorage.setItem("hackspire-opener-seen", "true");

    // Small delay to allow for smooth transition
    setTimeout(() => {
      setShowOpener(false);
    }, 500);
  };

  // Don't render anything on server to prevent hydration issues
  if (!isClient) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 border-4 border-cyber-yellow border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyber-yellow font-mono text-xl">
            Loading Resources...
          </p>
        </div>
      </div>
    );
  }

  // Show opener if it's enabled and hasn't been completed (prioritize this over loading)
  if (showOpener && !openerComplete) {
    return <HackingOpener onComplete={handleOpenerComplete} />;
  }

  // Show loading state if resources are still loading AND opener is complete
  if ((isLoading || !fontsLoaded) && openerComplete) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 border-4 border-cyber-yellow border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyber-yellow font-mono text-xl">
            Loading Resources...
          </p>
        </div>
      </div>
    );
  }

  // Show main app content
  return <>{children}</>;
}
