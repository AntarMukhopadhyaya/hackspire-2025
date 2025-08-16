"use client";

import { useEffect, useState } from "react";
import { FontLoader } from "@/lib/fontLoader";

export function useAppLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let mounted = true;

    const loadResources = async () => {
      try {
        // Load fonts with timeout
        const fontLoader = FontLoader.getInstance();
        const fontPromise = fontLoader.loadFonts();

        // Add timeout to prevent infinite loading
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error("Font loading timeout")), 3000);
        });

        await Promise.race([fontPromise, timeoutPromise]);

        if (mounted) {
          setFontsLoaded(true);

          // Reduced delay for faster transition
          setTimeout(() => {
            if (mounted) {
              setIsLoading(false);
            }
          }, 50);
        }
      } catch (error) {
        console.warn("Resource loading failed:", error);
        if (mounted) {
          setFontsLoaded(true);
          setIsLoading(false);
        }
      }
    };

    loadResources();

    return () => {
      mounted = false;
    };
  }, [isClient]);

  // Return safe defaults during SSR
  if (!isClient) {
    return { isLoading: false, fontsLoaded: true };
  }

  return { isLoading, fontsLoaded };
}
