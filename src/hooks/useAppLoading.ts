"use client";

import { useEffect, useState } from "react";
import { FontLoader } from "@/lib/fontLoader";

export function useAppLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadResources = async () => {
      try {
        // Load fonts
        const fontLoader = FontLoader.getInstance();
        await fontLoader.loadFonts();

        if (mounted) {
          setFontsLoaded(true);

          // Small delay to ensure smooth transition
          setTimeout(() => {
            if (mounted) {
              setIsLoading(false);
            }
          }, 100);
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
  }, []);

  return { isLoading, fontsLoaded };
}
