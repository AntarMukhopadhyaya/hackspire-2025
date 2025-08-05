"use client";

/**
 * Font loading utility to prevent FOUT and improve UX
 */
export class FontLoader {
  private static instance: FontLoader;
  private fontsLoaded = false;
  private loadingPromise: Promise<void> | null = null;

  private constructor() {}

  static getInstance(): FontLoader {
    if (!FontLoader.instance) {
      FontLoader.instance = new FontLoader();
    }
    return FontLoader.instance;
  }

  async loadFonts(): Promise<void> {
    if (this.fontsLoaded) {
      return Promise.resolve();
    }

    if (this.loadingPromise) {
      return this.loadingPromise;
    }

    this.loadingPromise = this.loadFontsInternal();
    return this.loadingPromise;
  }

  private async loadFontsInternal(): Promise<void> {
    if (typeof window === "undefined") return;

    try {
      // Use the Font Loading API if available
      if ("fonts" in document) {
        const fontPromises = [
          new FontFace("Distancia", "url('/fonts/Distancia-500-Regular.otf')", {
            weight: "normal",
            display: "swap",
          }).load(),
        ];

        // Use Promise.allSettled with shorter timeout
        const loadedFonts = await Promise.allSettled(fontPromises);

        loadedFonts.forEach((result, index) => {
          if (result.status === "fulfilled") {
            document.fonts.add(result.value);
          }
        });

        // Shorter timeout for fonts.ready
        const fontsReadyPromise = document.fonts.ready;
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error("Fonts ready timeout")), 2000);
        });

        await Promise.race([fontsReadyPromise, timeoutPromise]);
      } else {
        // Fallback for browsers without Font Loading API
        await new Promise((resolve) => {
          const timeout = setTimeout(resolve, 2000); // Reduced timeout

          const checkFonts = setInterval(() => {
            const testElement = document.createElement("div");
            testElement.style.fontFamily = "Distancia, serif";
            testElement.style.fontSize = "100px";
            testElement.style.position = "absolute";
            testElement.style.left = "-9999px";
            testElement.innerHTML = "Test";

            document.body.appendChild(testElement);
            const width = testElement.offsetWidth;
            document.body.removeChild(testElement);

            // If width changed, font is loaded
            if (width > 0) {
              clearInterval(checkFonts);
              clearTimeout(timeout);
              resolve(void 0);
            }
          }, 50); // Faster check interval
        });
      }

      this.fontsLoaded = true;
      document.documentElement.classList.add("fonts-loaded");

      // Trigger a reflow to ensure fonts are applied
      document.body.offsetHeight;
    } catch (error) {
      console.warn("Font loading failed:", error);
      // Still mark as loaded to prevent infinite loading
      this.fontsLoaded = true;
      document.documentElement.classList.add("fonts-loaded");
    }
  }

  isLoaded(): boolean {
    return this.fontsLoaded;
  }
}

// Auto-start font loading
if (typeof window !== "undefined") {
  FontLoader.getInstance().loadFonts();
}
