"use client";
import { useMemo, useCallback, useRef } from "react";
import ProfileCard from "../blocks/Components/ProfileCard/ProfileCard";
import judgesData from "@/data/judges.js";
import mentorsData from "@/data/mentors.js";

function CategoryBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center mb-8 md:mb-12">
      <div className="relative inline-block">
        <div
          className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-80"
          style={{
            clipPath:
              "polygon(18px 0%, 100% 0%, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0% 100%, 0% 18px)",
          }}
        />
        <div
          className="relative px-8 py-4 bg-black text-yellow-300 border border-yellow-500 text-xl md:text-2xl font-bold"
          style={{
            fontFamily: "'Mokoto Demo', monospace",
            clipPath:
              "polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 18px) 100%, 0% 100%, 0% 16px)",
          }}
        >
          {label.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

// Type definitions for the data
interface PersonData {
  name: string;
  title: string;
  handle: string;
  status: string;
  avatarUrl: string;
  linkedin: string;
}

function MentorsSection() {
  // Import data from separate JS files
  const judges = judgesData as PersonData[];
  const mentors = mentorsData as PersonData[];
  const sectionRef = useRef<HTMLElement>(null);
  // Performance optimization: Memoize contact handler
  const handleContactClick = useCallback((name: string) => {
    console.log(`Contact ${name} clicked`);
  }, []);

  // Performance optimization: Memoize grid layouts without animations
  const judgesGrid = useMemo(
    () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
        {judges.map((judge, index) => (
          <div
            key={`judge-${index}-${judge.name}`}
            className="flex justify-center"
          >
            <ProfileCard
              name={judge.name}
              title={judge.title}
              handle={judge.handle}
              status={judge.status}
              contactText="Contact Me"
              avatarUrl={judge.avatarUrl}
              linkedin={judge.linkedin}
              showUserInfo={true}
              showBehindGradient={true} // Enable background glow effect
              enableTilt={false} // Disable tilt effect
              enableMobileTilt={false} // Keep mobile tilt disabled for performance
              onContactClick={() => handleContactClick(judge.name)}
            />
          </div>
        ))}
      </div>
    ),
    [judges, handleContactClick]
  );

  const mentorsGrid = useMemo(
    () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {mentors.map((mentor, index) => (
          <div
            key={`mentor-${index}-${mentor.name}`}
            className="flex justify-center"
          >
            <ProfileCard
              name={mentor.name}
              title={mentor.title}
              handle={mentor.handle}
              status={mentor.status}
              contactText="Contact Me"
              avatarUrl={mentor.avatarUrl}
              linkedin={mentor.linkedin}
              iconUrl="https://res.cloudinary.com/dislegzga/image/upload/v1755362336/codeicon_wetmk9.png"
              grainUrl="https://res.cloudinary.com/dislegzga/image/upload/v1755362435/grain_ck2vv1.jpg"
              showUserInfo={true}
              showBehindGradient={true} // Enable background glow effect
              enableTilt={false} // Disable tilt effect
              enableMobileTilt={false} // Keep mobile tilt disabled for performance
              onContactClick={() => handleContactClick(mentor.name)}
            />
          </div>
        ))}
      </div>
    ),
    [mentors, handleContactClick]
  );

  return (
    <section
      ref={sectionRef}
      id="experts"
      className="relative py-12 md:py-16 text-white overflow-hidden"
    >
      {/* Yellow Trapezium Background with Clip-Path */}
      <div className="absolute top-0 left-0 right-0 h-64 md:h-80 z-0">
        {/* Main trapezium with clip-path */}
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath:
              "polygon(5% 0, 95% 0, 100% 15%, 85% 90%, 75% 100%, 25% 100%, 15% 90%, 0 15%)",
            WebkitClipPath:
              "polygon(5% 0, 95% 0, 100% 15%, 85% 90%, 75% 100%, 25% 100%, 15% 90%, 0 15%)",
          }}
        >
          {/* PCB-like lines */}
          <div className="absolute inset-0">
            {/* Horizontal lines */}
            <div className="absolute top-4 md:top-8 left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute top-8 md:top-16 left-0 right-0 h-px bg-black opacity-40"></div>
            <div className="absolute top-12 md:top-24 left-0 right-0 h-px bg-black opacity-30"></div>
            <div className="absolute top-16 md:top-32 left-0 right-0 h-px bg-black opacity-20"></div>

            {/* Vertical lines */}
            <div className="absolute top-0 bottom-0 left-4 md:left-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 left-8 md:left-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 left-12 md:left-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 left-16 md:left-32 w-px bg-black opacity-20"></div>
            <div className="absolute top-0 bottom-0 right-4 md:right-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 right-8 md:right-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 right-12 md:right-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 right-16 md:right-32 w-px bg-black opacity-20"></div>

            {/* Diagonal lines for futuristic effect */}
            <div className="absolute top-0 left-0 w-16 md:w-32 h-16 md:h-32 border-l-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute top-0 right-0 w-16 md:w-32 h-16 md:h-32 border-r-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-16 md:w-32 h-16 md:h-32 border-l-2 border-b-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-16 md:w-32 h-16 md:h-32 border-r-2 border-b-2 border-black opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Multiple Left Side Vertical Trapezium Shapes - Adjusted for mobile */}
      <div className="absolute left-0 top-1/4 w-12 md:w-20 h-48 md:h-64 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath: "polygon(0% 0%, 100% 15%, 100% 85%, 0% 100%)",
          }}
        >
          {/* Cut in the middle */}
          <div
            className="absolute top-1/2 left-0 w-full h-6 md:h-8 bg-black transform -translate-y-1/2"
            style={{
              clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)",
            }}
          ></div>
        </div>
      </div>

      <div className="absolute left-0 top-3/4 w-10 md:w-16 h-32 md:h-48 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)",
          }}
        >
          {/* Cut in the middle */}
          <div
            className="absolute top-1/2 left-0 w-full h-4 md:h-6 bg-black transform -translate-y-1/2"
            style={{
              clipPath: "polygon(0% 30%, 100% 0%, 100% 100%, 0% 70%)",
            }}
          ></div>
        </div>
      </div>

      {/* Multiple Right Side Vertical Trapezium Shapes - Adjusted for mobile */}
      <div className="absolute right-0 top-1/4 w-12 md:w-20 h-48 md:h-64 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath: "polygon(0% 15%, 100% 0%, 100% 100%, 0% 85%)",
          }}
        >
          {/* Cut in the middle */}
          <div
            className="absolute top-1/2 right-0 w-full h-6 md:h-8 bg-black transform -translate-y-1/2"
            style={{
              clipPath: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)",
            }}
          ></div>
        </div>
      </div>

      <div className="absolute right-0 top-3/4 w-10 md:w-16 h-32 md:h-48 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)",
          }}
        >
          {/* Cut in the middle */}
          <div
            className="absolute top-1/2 right-0 w-full h-4 md:h-6 bg-black transform -translate-y-1/2"
            style={{
              clipPath: "polygon(0% 0%, 100% 30%, 100% 70%, 0% 100%)",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-6xl sm:text-7xl md:text-[5rem] lg:text-[6rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo">
            EXPERTS
          </h2>

          <p
            className="text-black mx-auto mb-4 md:mb-8 font-medium text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-8 md:px-0 text-center max-w-[95%] sm:max-w-[85%] md:max-w-none leading-tight sm:leading-normal"
            style={{ fontFamily: "Mokoto Demo" }}
          >
            <span className="block sm:inline">
              Connect with seasoned industry experts and mentors
            </span>
            <span className="block sm:inline sm:ml-1">
              ready to guide your coding journey to success.
            </span>
          </p>
        </div>

        {/* Profile Cards Sections */}
        <div className="mt-40 sm:mt-44 md:mt-40 space-y-16 md:space-y-20">
          {/* Judges Section */}
          <div>
            <CategoryBadge label="JUDGES" />
            {judgesGrid}
          </div>

          {/* Simple Yellow Divider */}
          <div className="flex justify-center my-12 md:my-16">
            <div className="w-full max-w-4xl mx-8 md:mx-16">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
            </div>
          </div>

          {/* Mentors Section */}
          <div>
            <CategoryBadge label="MENTORS" />
            {mentorsGrid}
          </div>
        </div>
      </div>

      {/* Large Decorative Trapezium - Adjusted for mobile */}
      <div className="flex justify-center mt-8 md:mt-16">
        <div className="relative w-full max-w-3xl md:max-w-4xl h-16 md:h-24">
          {/* Main large trapezium background */}
          <div className="w-full h-full bg-yellow-400 relative large-trapezium-decorative py-12">
            {/* Circuit board patterns */}
            <div className="absolute inset-0 opacity-70">
              {/* Horizontal circuit traces */}
              <div className="absolute top-2 md:top-3 left-4 md:left-8 right-4 md:right-8 h-px bg-black opacity-60"></div>
              <div className="absolute top-4 md:top-6 left-6 md:left-12 right-6 md:right-12 h-px bg-black opacity-50"></div>
              <div className="absolute top-6 md:top-9 left-4 md:left-8 right-4 md:right-8 h-px bg-black opacity-45"></div>
              <div className="absolute top-8 md:top-12 left-8 md:left-16 right-8 md:right-16 h-px bg-black opacity-55"></div>
              <div className="absolute top-10 md:top-15 left-5 md:left-10 right-5 md:right-10 h-px bg-black opacity-40"></div>
              <div className="absolute top-12 md:top-18 left-7 md:left-14 right-7 md:right-14 h-px bg-black opacity-50"></div>
              <div className="absolute top-14 md:top-21 left-4 md:left-8 right-4 md:right-8 h-px bg-black opacity-45"></div>

              {/* Vertical circuit traces */}
              <div className="absolute left-4 md:left-8 top-1 md:top-2 bottom-1 md:bottom-2 w-px bg-black opacity-50"></div>
              <div className="absolute left-8 md:left-16 top-0.5 md:top-1 bottom-0.5 md:bottom-1 w-px bg-black opacity-55"></div>
              <div className="absolute left-12 md:left-24 top-2 md:top-3 bottom-2 md:bottom-3 w-px bg-black opacity-45"></div>
              <div className="absolute left-16 md:left-32 top-1 md:top-2 bottom-1 md:bottom-2 w-px bg-black opacity-60"></div>
              <div className="absolute left-20 md:left-40 top-0.5 md:top-1 bottom-0.5 md:bottom-1 w-px bg-black opacity-50"></div>
              <div className="absolute right-4 md:right-8 top-1 md:top-2 bottom-1 md:bottom-2 w-px bg-black opacity-50"></div>
              <div className="absolute right-8 md:right-16 top-0.5 md:top-1 bottom-0.5 md:bottom-1 w-px bg-black opacity-55"></div>
              <div className="absolute right-12 md:right-24 top-2 md:top-3 bottom-2 md:bottom-3 w-px bg-black opacity-45"></div>
              <div className="absolute right-16 md:right-32 top-1 md:top-2 bottom-1 md:bottom-2 w-px bg-black opacity-60"></div>
              <div className="absolute right-20 md:right-40 top-0.5 md:top-1 bottom-0.5 md:bottom-1 w-px bg-black opacity-50"></div>

              {/* Circuit nodes */}
              <div className="absolute top-4 md:top-6 left-8 md:left-16 w-1 h-1 md:w-1.5 md:h-1.5 bg-black opacity-70 rounded-full"></div>
              <div className="absolute top-6 md:top-9 left-12 md:left-24 w-0.5 h-0.5 md:w-1 md:h-1 bg-black opacity-65 rounded-full"></div>
              <div className="absolute top-8 md:top-12 left-16 md:left-32 w-1 h-1 md:w-1.5 md:h-1.5 bg-black opacity-75 rounded-full"></div>
              <div className="absolute top-10 md:top-15 left-20 md:left-40 w-0.5 h-0.5 md:w-1 md:h-1 bg-black opacity-60 rounded-full"></div>
              <div className="absolute top-4 md:top-6 right-8 md:right-16 w-1 h-1 md:w-1.5 md:h-1.5 bg-black opacity-70 rounded-full"></div>
              <div className="absolute top-6 md:top-9 right-12 md:right-24 w-0.5 h-0.5 md:w-1 md:h-1 bg-black opacity-65 rounded-full"></div>
              <div className="absolute top-8 md:top-12 right-16 md:right-32 w-1 h-1 md:w-1.5 md:h-1.5 bg-black opacity-75 rounded-full"></div>
              <div className="absolute top-10 md:top-15 right-20 md:right-40 w-0.5 h-0.5 md:w-1 md:h-1 bg-black opacity-60 rounded-full"></div>

              {/* Additional decorative elements */}
              <div className="absolute top-2 md:top-4 left-10 md:left-20 w-2 md:w-3 h-0.5 bg-black opacity-55 rounded-sm"></div>
              <div className="absolute top-2 md:top-4 right-10 md:right-20 w-2 md:w-3 h-0.5 bg-black opacity-55 rounded-sm"></div>
              <div className="absolute top-5 md:top-8 left-14 md:left-28 w-1.5 md:w-2 h-0.5 bg-black opacity-50 rounded-sm"></div>
              <div className="absolute top-5 md:top-8 right-14 md:right-28 w-1.5 md:w-2 h-0.5 bg-black opacity-50 rounded-sm"></div>
              <div className="absolute top-12 md:top-16 left-18 md:left-36 w-2 md:w-3 h-0.5 bg-black opacity-60 rounded-sm"></div>
              <div className="absolute top-12 md:top-16 right-18 md:right-36 w-2 md:w-3 h-0.5 bg-black opacity-60 rounded-sm"></div>
              <div className="absolute bottom-2 md:bottom-4 left-20 md:left-40 w-3 md:w-4 h-0.5 bg-black opacity-55 rounded-sm"></div>
              <div className="absolute bottom-2 md:bottom-4 right-20 md:right-40 w-3 md:w-4 h-0.5 bg-black opacity-55 rounded-sm"></div>
            </div>

            {/* Mission Text - Adjusted for mobile */}
            <div className="absolute inset-0 flex items-center justify-center z-20 px-2">
              <span
                className="text-black text-xs sm:text-sm md:text-4xl lg:text-xl xl:text-2xl font-bold tracking-wider glitch-text md:glitch-text-large text-center whitespace-normal sm:whitespace-nowrap px-1"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                GUIDANCE NETWORK ACTIVATED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentorsSection;
