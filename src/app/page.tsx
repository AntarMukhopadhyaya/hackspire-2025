"use client";
import { useRef } from "react";
import HeroSection from "@/components/Sections/HeroSection";

import ScheduleSection from "@/components/Sections/ScheduleSection";

import SpireCompleters from "@/components/Sections/SpireCompleters";
import MentorsSection from "@/components/Sections/MentorsSection";
import FAQSection from "@/components/Sections/FAQSection";
import SponsorsSection from "@/components/Sections/SponsorsSection";

import GlorySection from "@/components/Sections/GlorySection";
import PrizePullSection from "@/components/Sections/PrizePullSection";

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

        <SpireCompleters />
        <MentorsSection />
        <ScheduleSection />
        <PrizePullSection />
        <GlorySection />
        <SponsorsSection />
        {/* <CollaborationsSection /> */}
        <FAQSection />
      </div>
    </main>
  );
}
