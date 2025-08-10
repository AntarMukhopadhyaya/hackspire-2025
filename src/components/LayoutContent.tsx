"use client";
import dynamic from "next/dynamic";
import { CyberpunkNavbar } from "@/components/CyberpunkNavbar";
import Footer from "@/components/Footer";
import AppLoader from "@/components/AppLoader";
import { LAYOUT_CONTENT_CONTAINER_CLASSES } from "@/lib/styles";

// Dynamic import for non-critical animated background (improves LCP)
const CyberpunkSpotlight = dynamic(
  () => import("@/components/ui/CyberpunkSpotlight"),
  {
    ssr: false, // Background effect not needed for SSR
  }
);

interface LayoutContentProps {
  children: React.ReactNode;
}

/**
 * Client-side layout content wrapper
 * Handles dynamic imports and client-side only components
 */
export default function LayoutContent({ children }: LayoutContentProps) {
  return (
    <AppLoader>
      {/* Navigation header for semantic structure */}
      <header role="banner">
        <CyberpunkNavbar />
      </header>

      {/* Non-critical background animation - lazy loaded */}
      <CyberpunkSpotlight />

      {/* Main content wrapper with semantic structure */}
      <main role="main" className={LAYOUT_CONTENT_CONTAINER_CLASSES}>
        {children}
      </main>

      {/* Footer for semantic structure */}
      <footer role="contentinfo">
        <Footer />
      </footer>
    </AppLoader>
  );
}
