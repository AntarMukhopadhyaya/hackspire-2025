"use client";
import { useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/Sections/HeroSection";

// Lazy load heavy components for better performance
const ScheduleSection = dynamic(
  () => import("@/components/Sections/ScheduleSection"),
  {
    loading: () => <div className="h-96 bg-black/20 animate-pulse" />,
  }
);

const SpireCompleters = dynamic(
  () => import("@/components/Sections/SpireCompleters"),
  {
    loading: () => <div className="h-96 bg-black/20 animate-pulse" />,
  }
);

const MentorsSection = dynamic(
  () => import("@/components/Sections/MentorsSection"),
  {
    loading: () => <div className="h-96 bg-black/20 animate-pulse" />,
  }
);

const FAQSection = dynamic(() => import("@/components/Sections/FAQSection"), {
  loading: () => <div className="h-96 bg-black/20 animate-pulse" />,
});

const SponsorsSection = dynamic(
  () => import("@/components/Sections/SponsorsSection"),
  {
    loading: () => <div className="h-96 bg-black/20 animate-pulse" />,
  }
);

const DiscordSection = dynamic(
  () => import("@/components/Sections/DiscordSection"),
  {
    loading: () => <div className="h-96 bg-black/20 animate-pulse" />,
  }
);

const GlorySection = dynamic(
  () => import("@/components/Sections/GlorySection"),
  {
    loading: () => <div className="h-96 bg-black/20 animate-pulse" />,
  }
);

const PrizePoolSection = dynamic(
  () => import("@/components/Sections/PrizePoolSection"),
  {
    loading: () => <div className="h-96 bg-black/20 animate-pulse" />,
  }
);

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
        <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
          <SpireCompleters />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
          <MentorsSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
          <ScheduleSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
          <PrizePoolSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
          <GlorySection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
          <SponsorsSection />
        </Suspense>
        {/* <CollaborationsSection /> */}
        <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
          <DiscordSection />
        </Suspense>
      </div>
    </main>
  );
}
