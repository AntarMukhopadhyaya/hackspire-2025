import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export interface TransitionState {
  isTransitioning: boolean;
  currentPath: string;
  previousPath: string;
  transitionType: "hero" | "slide" | "scale" | "fade" | "default";
}

export const usePageTransition = () => {
  const pathname = usePathname();
  const [state, setState] = useState<TransitionState>({
    isTransitioning: false,
    currentPath: pathname,
    previousPath: pathname,
    transitionType: "default",
  });

  useEffect(() => {
    // Skip transitions for home page
    if (pathname === "/") {
      setState((prev) => ({
        ...prev,
        isTransitioning: false,
        currentPath: pathname,
        previousPath: prev.currentPath,
        transitionType: "default",
      }));
      return;
    }

    setState((prev) => ({
      isTransitioning: true,
      previousPath: prev.currentPath,
      currentPath: pathname,
      transitionType: getTransitionType(pathname),
    }));

    const timer = setTimeout(() => {
      setState((prev) => ({
        ...prev,
        isTransitioning: false,
      }));
    }, 80); // Reduced from 150ms

    return () => clearTimeout(timer);
  }, [pathname]);

  const getTransitionType = (
    path: string
  ): TransitionState["transitionType"] => {
    if (path === "/") return "default"; // Home page has no transition
    if (path.includes("/about")) return "slide";
    if (path.includes("/contact")) return "fade";
    if (path.includes("/crews")) return "scale";
    if (path.includes("/themes")) return "slide";
    if (path.includes("/collabs")) return "fade";
    if (path.includes("/glory")) return "hero";
    return "default";
  };

  const triggerCustomTransition = (type: TransitionState["transitionType"]) => {
    setState((prev) => ({
      ...prev,
      isTransitioning: true,
      transitionType: type,
    }));

    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        isTransitioning: false,
      }));
    }, 500); // Reduced from 700ms
  };

  return {
    ...state,
    triggerCustomTransition,
  };
};
