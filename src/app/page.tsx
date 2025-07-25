"use client";
import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AboutTheme from "@/components/AboutTheme";
import TracksSection from "@/components/TracksSection";
import ScheduleSection from "@/components/ScheduleSection";
import CountdownTimer from "@/components/CountdownTimer";
import TeamSection from "@/components/TeamSection";
import SpireCompleters from "@/components/SpireCompleters";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <main ref={mainRef} className="min-h-screen relative overflow-hidden">
      {/* Global Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-shaktiPurple/20 via-black/30 to-techBlue/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <HeroSection />
        {/* <AboutTheme /> */}
        <SpireCompleters />
        <TracksSection />
        <ScheduleSection />
        <CountdownTimer />
      </div>
    </main>
  );
}
