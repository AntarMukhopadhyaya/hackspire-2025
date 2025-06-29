import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesClient from "@/components/ParticlesClient";
import SplashCursor from "@/components/blocks/Animations/SplashCursor/SplashCursor";
import { NavbarDemo } from "@/components/NavbarDemo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
        suppressHydrationWarning
      >
        {/* Navbar */}
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
      </body>
    </html>
  );
}
