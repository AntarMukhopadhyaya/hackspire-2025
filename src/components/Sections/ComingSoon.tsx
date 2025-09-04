"use client";
import React from "react";
import { motion } from "framer-motion";
import MatrixRain from "../ui/MatrixRain";
import CyberButton from "../ui/CyberButton";

interface ComingSoonProps {
  variant?: "mentors" | "judges" | "both";
  showCTA?: boolean;
}

// Reusable angled badge
function NeonBadge({ text }: { text: string }) {
  return (
    <div className="relative inline-block mb-6">
      <div
        className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-500 opacity-80 animate-pulse"
        style={{
          clipPath:
            "polygon(18px 0%, 100% 0%, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0% 100%, 0% 18px)",
        }}
      />
      <div
        className="relative px-8 py-3 bg-black/90 border border-yellow-400 text-yellow-300 text-xl md:text-2xl font-bold tracking-wider shadow-[0_0_12px_rgba(250,204,21,0.5)]"
        style={{
          fontFamily: "'Mokoto Demo', monospace",
          clipPath:
            "polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%, 0% 16px)",
        }}
      >
        {text}
      </div>
    </div>
  );
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  variant = "both",
  showCTA = true,
}) => {
  const titleMap: Record<string, string> = {
    mentors: "MENTORS DROPPING SOON",
    judges: "JUDGES REVEAL SOON",
    both: "MENTORS & JUDGES ARE LOADING",
  };

  const subtitleMap: Record<string, string> = {
    mentors:
      "Crafting an elite guild of innovators, founders & domain veterans.",
    judges: "Summoning industry leaders & visionaries to evaluate excellence.",
    both: "Finalizing an exceptional roster of mentors & judges. Stay locked in.",
  };

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28 px-3 sm:px-4 md:px-8 text-white">
      {/* Yellow angled backdrop */}
      <div className="absolute top-0 left-0 right-0 h-[17rem] sm:h-72 md:h-80 -z-10">
        <div
          className="w-full h-full bg-yellow-400 shadow-[0_0_35px_rgba(0,0,0,0.35)_inset]"
          style={{
            clipPath:
              "polygon(5% 0, 95% 0, 100% 18%, 86% 92%, 75% 100%, 25% 100%, 14% 92%, 0 18%)",
          }}
        >
          <div className="absolute inset-0 opacity-35 pointer-events-none">
            <div className="absolute top-6 left-0 right-0 h-px bg-black/60" />
            <div className="absolute top-14 left-0 right-0 h-px bg-black/40" />
            <div className="absolute top-24 left-0 right-0 h-px bg-black/30" />
            <div className="absolute bottom-10 left-0 right-0 h-px bg-black/20" />
            <div className="absolute top-0 bottom-0 left-10 w-px bg-black/50" />
            <div className="absolute top-0 bottom-0 left-20 w-px bg-black/30" />
            <div className="absolute top-0 bottom-0 right-10 w-px bg-black/50" />
            <div className="absolute top-0 bottom-0 right-20 w-px bg-black/30" />
          </div>
          {/* Depth gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.25),transparent_55%)] mix-blend-overlay opacity-50" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <NeonBadge text={titleMap[variant]} />
          <h2
            data-text="COMING SOON"
            className="extruded-heading relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-4 sm:mb-6 leading-[0.9] tracking-tight"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            COMING SOON
          </h2>
          <p
            data-text={subtitleMap[variant]}
            className="extruded-subtitle max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed mb-8 md:mb-12 tracking-wide px-4 sm:px-8 md:px-12"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            {subtitleMap[variant]}
          </p>

          {/* Progress / Loading Visual */}
          <div className="w-full max-w-xl mx-auto mb-8 md:mb-10 px-1">
            <div
              className="relative h-5 bg-black/40 border border-yellow-500 overflow-hidden"
              style={{
                clipPath:
                  "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-yellow-500/40 to-yellow-400/30 animate-pulse" />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(105deg,rgba(0,0,0,0)_0px,rgba(0,0,0,0)_40px,rgba(0,0,0,0.25)_40px,rgba(0,0,0,0.25)_60px)]" />
              <motion.div
                initial={{ width: "10%" }}
                animate={{
                  width: [
                    "15%",
                    "55%",
                    "70%",
                    "85%",
                    "92%",
                    "96%",
                    "97%",
                    "98%",
                    "99%",
                    "99%",
                    "99%",
                  ],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="h-full bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 shadow-[0_0_12px_rgba(250,204,21,0.6)]"
              />
              <div className="absolute inset-0 border border-yellow-400 pointer-events-none" />
            </div>
            <div className="mt-3 flex justify-between text-[9px] xs:text-[10px] md:text-xs text-black/70 font-mono px-1">
              <span>BOOTSTRAPPING</span>
              <span>FETCHING PROFILES</span>
              <span>VERIFYING</span>
              <span>NEARLY READY</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Local styles for subtle animation utility */}
      <style jsx>{`
        @keyframes subtleGlow {
          0%,
          100% {
            opacity: 0.9;
          }
          50% {
            opacity: 0.6;
          }
        }

        /* Typography matching other sections - clean and readable */
        .extruded-heading {
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
        }
        .extruded-heading::before {
          display: none; /* Remove pseudo-element for cleaner look */
        }
        .extruded-heading:hover {
          transform: translateY(-1px);
          transition: transform 0.2s ease;
        }

        /* Subtitle styling matching site patterns */
        .extruded-subtitle {
          position: relative;
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
        }
        .extruded-subtitle::before {
          display: none; /* Remove pseudo-element for cleaner look */
        }
        .extruded-subtitle:hover {
          opacity: 0.9;
          transition: opacity 0.2s ease;
        }
      `}</style>
    </section>
  );
};

export default ComingSoon;
