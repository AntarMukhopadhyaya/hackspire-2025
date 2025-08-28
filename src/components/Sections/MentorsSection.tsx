"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo, useCallback } from "react";
import ProfileCard from "../blocks/Components/ProfileCard/ProfileCard";
import judgesData from "@/data/judges.json";
import mentorsData from "@/data/mentors.json";

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

function MentorsSection() {
  // Import data from separate JSON files
  const judges = judgesData;
  const mentors = mentorsData;

  // Performance optimization: Memoize contact handler
  const handleContactClick = useCallback((name: string) => {
    console.log(`Contact ${name} clicked`);
  }, []);

  // Performance optimization: Use progressive loading
  const [visibleJudges, setVisibleJudges] = useState<typeof judges>([]);
  const [visibleMentors, setVisibleMentors] = useState<typeof mentors>([]);
  const [loadingState, setLoadingState] = useState<
    "judges" | "mentors" | "complete"
  >("judges");

  useEffect(() => {
    // Load judges first (smaller set)
    setVisibleJudges(judges);

    // Load mentors progressively to prevent hanging
    const timer = setTimeout(() => {
      setLoadingState("mentors");
      // Load mentors in batches to prevent UI blocking
      const batchSize = 2;
      let currentIndex = 0;

      const loadBatch = () => {
        const nextBatch = mentors.slice(currentIndex, currentIndex + batchSize);
        if (nextBatch.length > 0) {
          setVisibleMentors((prev) => [...prev, ...nextBatch]);
          currentIndex += batchSize;

          if (currentIndex < mentors.length) {
            setTimeout(loadBatch, 100); // Small delay between batches
          } else {
            setLoadingState("complete");
          }
        }
      };

      loadBatch();
    }, 300);

    return () => clearTimeout(timer);
  }, [judges, mentors]);

  // Performance optimization: Memoize grid layouts with reduced animations
  const judgesGrid = useMemo(
    () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
        {visibleJudges.map((judge, index) => (
          <motion.div
            key={`${judge.handle}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="flex justify-center"
          >
            <ProfileCard
              name={judge.name}
              title={judge.title}
              handle={judge.handle}
              status={judge.status}
              contactText="Contact Me"
              avatarUrl={judge.avatarUrl}
              showUserInfo={true}
              enableTilt={false} // Disabled tilt for performance
              enableMobileTilt={false}
              onContactClick={() => handleContactClick(judge.name)}
            />
          </motion.div>
        ))}
      </div>
    ),
    [visibleJudges, handleContactClick]
  );

  const mentorsGrid = useMemo(
    () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {visibleMentors.map((mentor, index) => (
          <motion.div
            key={`${mentor.handle}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="flex justify-center"
          >
            <ProfileCard
              name={mentor.name}
              title={mentor.title}
              handle={mentor.handle}
              status={mentor.status}
              contactText="Contact Me"
              avatarUrl={mentor.avatarUrl}
              iconUrl="https://res.cloudinary.com/dislegzga/image/upload/v1755362336/codeicon_wetmk9.png"
              grainUrl="https://res.cloudinary.com/dislegzga/image/upload/v1755362435/grain_ck2vv1.jpg"
              showUserInfo={true}
              enableTilt={false} // Disabled tilt for performance
              enableMobileTilt={false}
              onContactClick={() => handleContactClick(mentor.name)}
            />
          </motion.div>
        ))}
      </div>
    ),
    [visibleMentors, handleContactClick]
  );

  return (
    <section
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

      {/* Background Typing Effect - Adjusted for mobile */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-green-400/90 font-mono text-xs sm:text-sm md:text-sm lg:text-base select-none max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw]"
        >
          <motion.div
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="space-y-1 sm:space-y-2"
          >
            {/* Continuous typing animation loop */}
            <motion.div
              animate={{
                width: ["0%", "100%", "100%", "0%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                times: [0, 0.3, 0.7, 1],
                ease: "easeInOut",
              }}
              className="overflow-hidden whitespace-nowrap"
            >
              <span className="text-green-300/90">
                $ sudo ./mentor_network.sh --initialize --mode=guidance
              </span>
            </motion.div>

            <motion.div
              animate={{
                width: ["0%", "100%", "100%", "0%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: 1.5,
                times: [0, 0.3, 0.7, 1],
                ease: "easeInOut",
              }}
              className="overflow-hidden whitespace-nowrap"
            >
              <span className="text-cyan-300/90">
                $ python3 expert_finder.py --scan-mentors
              </span>
            </motion.div>

            <motion.div
              animate={{
                width: ["0%", "100%", "100%", "0%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: 3,
                times: [0, 0.3, 0.7, 1],
                ease: "easeInOut",
              }}
              className="overflow-hidden whitespace-nowrap"
            >
              <span className="text-blue-300/90">
                $ ./verify_expertise.exe --check-credentials
              </span>
            </motion.div>

            <motion.div
              animate={{
                width: ["0%", "100%", "100%", "0%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: 4.5,
                times: [0, 0.3, 0.7, 1],
                ease: "easeInOut",
              }}
              className="overflow-hidden whitespace-nowrap"
            >
              <span className="text-purple-300/90">
                $ access_granted: mentor_database
              </span>
            </motion.div>

            <motion.div
              animate={{
                width: ["0%", "100%", "100%", "0%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: 6,
                times: [0, 0.3, 0.7, 1],
                ease: "easeInOut",
              }}
              className="overflow-hidden whitespace-nowrap"
            >
              <span className="text-yellow-300/90">
                $ node guidance_system.js --activate
              </span>
            </motion.div>

            <motion.div
              animate={{
                width: ["0%", "100%", "100%", "0%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: 7.5,
                times: [0, 0.3, 0.7, 1],
                ease: "easeInOut",
              }}
              className="overflow-hidden whitespace-nowrap"
            >
              <motion.span
                animate={{
                  width: ["0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block text-green-300/70 bg-green-400/10 px-1 text-xs sm:text-sm"
              >
                [████████████████████████████] 100% READY
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Enhanced blinking cursor */}
          <motion.span
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-green-400/90 text-sm md:text-lg font-bold ml-1"
          >
            _
          </motion.span>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-[5rem] lg:text-[6rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo"
          >
            EXPERTS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-black mx-auto mb-4 md:mb-8 font-medium text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-8 md:px-0 text-center max-w-[95%] sm:max-w-[85%] md:max-w-none leading-tight sm:leading-normal"
            style={{ fontFamily: "Mokoto Demo" }}
          >
            <span className="block sm:inline">
              Connect with seasoned industry experts and mentors
            </span>
            <span className="block sm:inline sm:ml-1">
              ready to guide your coding journey to success.
            </span>
          </motion.p>
        </motion.div>

        {/* Profile Cards Sections */}
        <div className="mt-40 sm:mt-44 md:mt-40 space-y-16 md:space-y-20">
          {/* Judges Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <CategoryBadge label="JUDGES" />
            {visibleJudges.length > 0 ? (
              judgesGrid
            ) : (
              <div className="flex justify-center items-center min-h-[300px]">
                <div className="text-yellow-400 font-mono text-lg animate-pulse">
                  Loading judges...
                </div>
              </div>
            )}
          </motion.div>

          {/* Glowing Yellow Underline */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center my-12 md:my-16"
          >
            <div className="w-full max-w-4xl mx-8 md:mx-16 relative">
              {/* Main line with enhanced glow and shadow */}
              <div className="h-0.5 bg-yellow-400 relative shadow-2xl shadow-yellow-400/80">
                {/* Tapered glow layers - stronger at center, fading to edges */}
                <div
                  className="absolute inset-0 h-0.5 blur-sm shadow-lg shadow-yellow-400/60"
                  style={{
                    background:
                      "linear-gradient(to right, transparent 0%, rgba(250, 204, 21, 0.8) 20%, rgba(250, 204, 21, 1) 50%, rgba(250, 204, 21, 0.8) 80%, transparent 100%)",
                  }}
                ></div>
                <div
                  className="absolute inset-0 h-1 blur-md shadow-xl shadow-yellow-300/50"
                  style={{
                    background:
                      "linear-gradient(to right, transparent 0%, rgba(253, 224, 71, 0.6) 25%, rgba(253, 224, 71, 0.9) 50%, rgba(253, 224, 71, 0.6) 75%, transparent 100%)",
                  }}
                ></div>
                <div
                  className="absolute inset-0 h-2 blur-lg shadow-2xl shadow-yellow-200/40"
                  style={{
                    background:
                      "linear-gradient(to right, transparent 0%, rgba(254, 240, 138, 0.3) 30%, rgba(254, 240, 138, 0.6) 50%, rgba(254, 240, 138, 0.3) 70%, transparent 100%)",
                  }}
                ></div>
                <div
                  className="absolute inset-0 h-3 blur-xl shadow-2xl shadow-yellow-100/30"
                  style={{
                    background:
                      "linear-gradient(to right, transparent 0%, rgba(254, 249, 195, 0.1) 35%, rgba(254, 249, 195, 0.3) 50%, rgba(254, 249, 195, 0.1) 65%, transparent 100%)",
                  }}
                ></div>

                {/* Core bright line with center emphasis */}
                <div
                  className="absolute inset-0 h-px shadow-md shadow-yellow-200/80"
                  style={{
                    background:
                      "linear-gradient(to right, transparent 0%, rgba(254, 240, 138, 0.7) 25%, rgba(254, 240, 138, 1) 50%, rgba(254, 240, 138, 0.7) 75%, transparent 100%)",
                  }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Mentors Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <CategoryBadge label="MENTORS" />
            {loadingState === "complete" ? (
              mentorsGrid
            ) : (
              <div className="flex flex-col justify-center items-center min-h-[300px] space-y-4">
                <div className="text-yellow-400 font-mono text-lg animate-pulse">
                  {loadingState === "judges"
                    ? "Preparing mentors..."
                    : `Loading mentors... (${visibleMentors.length}/6)`}
                </div>
                {visibleMentors.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {visibleMentors.map((mentor, index) => (
                      <motion.div
                        key={`${mentor.handle}-${index}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className="flex justify-center"
                      >
                        <ProfileCard
                          name={mentor.name}
                          title={mentor.title}
                          handle={mentor.handle}
                          status={mentor.status}
                          contactText="Contact Me"
                          avatarUrl={mentor.avatarUrl}
                          iconUrl="https://res.cloudinary.com/dislegzga/image/upload/v1755362336/codeicon_wetmk9.png"
                          grainUrl="https://res.cloudinary.com/dislegzga/image/upload/v1755362435/grain_ck2vv1.jpg"
                          showUserInfo={true}
                          enableTilt={false}
                          enableMobileTilt={false}
                          onContactClick={() => handleContactClick(mentor.name)}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Large Decorative Trapezium - Adjusted for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        className="flex justify-center mt-8 md:mt-16"
      >
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
      </motion.div>
    </section>
  );
}

export default MentorsSection;
