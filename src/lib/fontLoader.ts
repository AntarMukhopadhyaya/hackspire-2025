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
          new FontFace("Distancia", "url('/fonts/Distancia-900-Heavy.otf')", {
            weight: "900",
            display: "swap",
          }).load(),
          new FontFace("Blanka", "url('/fonts/Blanka-Regular.otf')", {
            weight: "normal",
            display: "swap",
          }).load(),
        ];

        const loadedFonts = await Promise.allSettled(fontPromises);

        loadedFonts.forEach((result, index) => {
          if (result.status === "fulfilled") {
            document.fonts.add(result.value);
          }
        });

        await document.fonts.ready;
      } else {
        // Fallback for browsers without Font Loading API
        await new Promise((resolve) => {
          const timeout = setTimeout(resolve, 3000); // 3s timeout

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
          }, 100);
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
