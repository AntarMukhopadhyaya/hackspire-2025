import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/ui/Navbar";
import Footer from "@/components/Footer";
// import { AudioProvider } from "@/components/ui/AudioContext"; // Commented out for now
import LenisProvider from "@/components/ui/LenisProvider";
import PageTransition from "@/lib/PageTransition";
import RouteChangeAnimation from "@/lib/RouteChangeAnimation";
import { Toaster } from "@/components/ui/sonner";
import ConditionalAppLoader from "@/components/ui/ConditionalAppLoader";
// import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "HackSpire 2025",
  description: "HackSpire 2025 - A Hackathon Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload only the most critical font */}
        <link
          rel="preload"
          href="/fonts/Distancia-500-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        {/* Prefetch particles resources */}
        <link rel="prefetch" href="/_next/static/chunks/pages/_app.js" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Font loading script */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              // Immediate font loading to prevent FOUT
              (function() {
                if (typeof window !== 'undefined' && 'fonts' in document) {
                  Promise.all([
                    new FontFace('Distancia', "url('/fonts/Distancia-500-Regular.otf')", { weight: 'normal', display: 'swap' }).load()
                  ]).then(function(fonts) {
                    fonts.forEach(function(font) { document.fonts.add(font); });
                    document.documentElement.classList.add('fonts-loaded');
                  }).catch(function() {
                    document.documentElement.classList.add('fonts-loaded');
                  });
                }
              })();
            `,
          }}
        />

        {/* Navbar */}
        {/* <AudioProvider> */}
        <ConditionalAppLoader>
          <LenisProvider>
            <RouteChangeAnimation />
            <Navbar />

            {/* Global Cyberpunk Yellow Spotlight */}
            <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
              <div
                className="w-full h-full"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 40% at 20% 10%, rgba(234, 179, 8, 0.25) 0%, rgba(161, 98, 7, 0.15) 40%, rgba(120, 53, 15, 0.08) 70%, transparent 100%)",
                }}
              ></div>
            </div>

            {/* Global Holographic Overlay */}
            {/* <div
              className="fixed inset-0 z-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 75%)",
              }}
            /> */}
            {/* <SplashCursor /> */}

            <div className="relative z-10">
              <PageTransition>{children}</PageTransition>
            </div>
            <Footer />
            <Toaster />
          </LenisProvider>
        </ConditionalAppLoader>
        {/* </AudioProvider> */}
      </body>
    </html>
  );
}
