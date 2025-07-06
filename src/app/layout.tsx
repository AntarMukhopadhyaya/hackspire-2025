import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesClient from "@/components/ParticlesClient";
import SplashCursor from "@/components/blocks/Animations/SplashCursor/SplashCursor";
import { NavbarDemo } from "@/components/NavbarDemo";
import Threads from "@/components/blocks/Backgrounds/Threads/Threads";
import Footer from "@/components/Footer";
import { AudioProvider } from "@/components/AudioContext";

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
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/Distancia-500-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Distancia-900-Heavy.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Blanka-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        {/* Prefetch particles resources */}
        <link rel="prefetch" href="/_next/static/chunks/pages/_app.js" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
        suppressHydrationWarning
      >
        {/* Font loading script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Immediate font loading to prevent FOUT
              (function() {
                if (typeof window !== 'undefined' && 'fonts' in document) {
                  Promise.all([
                    new FontFace('Distancia', "url('/fonts/Distancia-500-Regular.otf')", { weight: 'normal', display: 'swap' }).load(),
                    new FontFace('Distancia', "url('/fonts/Distancia-900-Heavy.otf')", { weight: '900', display: 'swap' }).load(),
                    new FontFace('Blanka', "url('/fonts/Blanka-Regular.otf')", { weight: 'normal', display: 'swap' }).load()
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
        <AudioProvider>
          <NavbarDemo />

          {/* Global Holographic Overlay */}
          {/* <div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 75%)",
            }}
          /> */}
          {/* <SplashCursor /> */}
          <ParticlesClient />

          <div className="relative z-10">{children}</div>
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}
