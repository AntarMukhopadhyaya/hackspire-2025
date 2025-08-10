"use client";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInUpDelayed,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/lib/motionVariants";
import { CornerAccents } from "@/components/ui/CornerAccents";
import { CyberpunkContainer } from "@/components/ui/CyberpunkContainer";
import { TerminalEffect } from "@/components/ui/TerminalEffect";

function SpireCompleters() {
  return (
    <section
      id="spire-completers"
      className="relative py-12 md:py-16 text-white overflow-hidden"
      style={
        {
          // CSS variables for responsive clip-paths and breakpoints
          "--clip-path-trapezium":
            "polygon(3% 0, 97% 0, 100% 11%, 80% 91%, 72% 100%, 24% 100%, 16% 90%, 0 12%)",
          "--clip-path-corners":
            "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
          "--clip-path-left-trap":
            "polygon(0% 0%, 100% 15%, 100% 85%, 0% 100%)",
          "--clip-path-right-trap":
            "polygon(0% 15%, 100% 0%, 100% 100%, 0% 85%)",
          "--corner-size": "clamp(0.75rem, 2vw, 1rem)",
        } as React.CSSProperties
      }
    >
      {/* Yellow Trapezium Background with Responsive Clip-Path */}
      <div className="absolute top-0 left-0 right-0 h-64 md:h-80 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath: "var(--clip-path-trapezium)",
          }}
        >
          {/* PCB-like circuit patterns */}
          <div className="absolute inset-0">
            {/* Horizontal traces */}
            <div className="absolute top-[6%] left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute top-[12%] left-0 right-0 h-px bg-black opacity-40"></div>
            <div className="absolute top-[18%] left-0 right-0 h-px bg-black opacity-30"></div>
            <div className="absolute top-[24%] left-0 right-0 h-px bg-black opacity-20"></div>

            {/* Vertical traces */}
            <div className="absolute top-0 bottom-0 left-[6%] w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 left-[12%] w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 left-[18%] w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 left-[24%] w-px bg-black opacity-20"></div>
            <div className="absolute top-0 bottom-0 right-[6%] w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 right-[12%] w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 right-[18%] w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 right-[24%] w-px bg-black opacity-20"></div>

            {/* Corner decorative borders */}
            <div className="absolute top-0 left-0 w-[20%] h-[20%] border-l-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute top-0 right-0 w-[20%] h-[20%] border-r-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-[20%] h-[20%] border-l-2 border-b-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-[20%] h-[20%] border-r-2 border-b-2 border-black opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Side Vertical Trapezium Shapes with Responsive Positioning */}
      <div className="absolute left-0 top-1/4 w-12 md:w-20 h-48 md:h-64 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "var(--clip-path-left-trap)" }}
        >
          <div
            className="absolute top-1/2 left-0 w-full h-6 md:h-8 bg-black transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)" }}
          ></div>
        </div>
      </div>

      <div className="absolute left-0 top-3/4 w-10 md:w-16 h-32 md:h-48 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)" }}
        >
          <div
            className="absolute top-1/2 left-0 w-full h-4 md:h-6 bg-black transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 30%, 100% 0%, 100% 100%, 0% 70%)" }}
          ></div>
        </div>
      </div>

      <div className="absolute right-0 top-1/4 w-12 md:w-20 h-48 md:h-64 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "var(--clip-path-right-trap)" }}
        >
          <div
            className="absolute top-1/2 right-0 w-full h-6 md:h-8 bg-black transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)" }}
          ></div>
        </div>
      </div>

      <div className="absolute right-0 top-3/4 w-10 md:w-16 h-32 md:h-48 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)" }}
        >
          <div
            className="absolute top-1/2 right-0 w-full h-4 md:h-6 bg-black transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 0%, 100% 30%, 100% 70%, 0% 100%)" }}
          ></div>
        </div>
      </div>

      {/* Terminal Background Effect */}
      <TerminalEffect />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main title section */}
        <motion.div
          {...fadeInUp}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2
            {...fadeInUpDelayed(0.1)}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl md:text-[5rem] lg:text-[6rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo"
          >
            SPIRE COMPLETERS
          </motion.h2>

          <motion.p
            {...fadeInUpDelayed(0.2)}
            viewport={{ once: true }}
            className="text-black max-w-2xl mx-auto mb-4 px-12 sm:px-0 md:mb-8 font-medium text-sm md:text-lg lg:text-xl"
            style={{ fontFamily: "Mokoto Demo" }}
          >
            Recognizing those who conquered the ultimate challenge.
          </motion.p>

          {/* Logo section */}
          <motion.div
            {...fadeInUpDelayed(0.3)}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4 md:gap-8 lg:gap-12 flex-wrap md:flex-nowrap mt-44 sm:mt-20 md:mt-48 lg:mt-40"
          >
            <motion.div
              {...scaleIn(0.4)}
              viewport={{ once: true }}
              className="w-24 md:w-32 lg:w-40"
            >
              <img
                src="/icons/future.png"
                alt="Future"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              {...scaleIn(0.5)}
              viewport={{ once: true }}
              className="w-20 md:w-24 lg:w-32"
            >
              <img
                src="/icons/starcyber.png"
                alt="Logo Icon"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              {...scaleIn(0.6)}
              viewport={{ once: true }}
              className="w-24 md:w-32 lg:w-40"
            >
              <img src="/icons/acm.png" alt="ACM" className="w-full h-auto" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Content cards section */}
        <motion.div
          {...fadeInUpDelayed(0.7)}
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12"
        >
          <motion.div
            {...fadeInLeft(0.8)}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <CyberpunkContainer>
              <h3
                className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-2 md:mb-4 transition-all duration-300 group-hover:glitch-text"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                The Ultimate Challenge
              </h3>
              <p
                className="text-black text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-300 group-hover:text-shadow-glow"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                Only the most dedicated hackers who complete every challenge,
                solve every puzzle, and push their limits beyond imagination
                earn the prestigious title of Spire Completer.
              </p>
            </CyberpunkContainer>
          </motion.div>

          <motion.div
            {...fadeInRight(0.9)}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <CyberpunkContainer>
              <h3
                className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-2 md:mb-4 transition-all duration-300 group-hover:glitch-text"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                Legacy of Excellence
              </h3>
              <p
                className="text-black text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-300 group-hover:text-shadow-glow"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                Each Spire Completer joins an elite community of innovators,
                problem-solvers, and boundary-pushers.
              </p>
            </CyberpunkContainer>
          </motion.div>
        </motion.div>

        {/* Statistics badge */}
        <motion.div
          {...fadeInUpDelayed(1.0)}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <div className="inline-flex items-center gap-2 md:gap-4 relative">
            <div
              className="relative bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 px-4 py-2 md:px-8 md:py-4"
              style={
                {
                  "--corner-size": "clamp(0.75rem, 2vw, 1rem)",
                } as React.CSSProperties
              }
            >
              <CornerAccents />
              <span
                className="text-purple-300 text-sm md:text-lg font-medium relative z-10"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                🏆 Only 0.1% of participants achieve this status
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Large Decorative Trapezium with Circuit Board Pattern */}
      <motion.div
        {...fadeInUpDelayed(1.2)}
        viewport={{ once: true }}
        className="flex justify-center mt-8 md:mt-16"
      >
        <div className="relative w-full max-w-3xl md:max-w-4xl h-16 md:h-24">
          <div className="w-full h-full bg-yellow-400 relative large-trapezium-decorative py-12">
            {/* Responsive circuit board patterns using percentages */}
            <div className="absolute inset-0 opacity-70">
              {/* Horizontal circuit traces */}
              <div className="absolute top-[12%] left-[8%] right-[8%] h-px bg-black opacity-60"></div>
              <div className="absolute top-[25%] left-[12%] right-[12%] h-px bg-black opacity-50"></div>
              <div className="absolute top-[37%] left-[8%] right-[8%] h-px bg-black opacity-45"></div>
              <div className="absolute top-[50%] left-[16%] right-[16%] h-px bg-black opacity-55"></div>
              <div className="absolute top-[62%] left-[10%] right-[10%] h-px bg-black opacity-40"></div>
              <div className="absolute top-[75%] left-[14%] right-[14%] h-px bg-black opacity-50"></div>
              <div className="absolute top-[87%] left-[8%] right-[8%] h-px bg-black opacity-45"></div>

              {/* Vertical circuit traces */}
              <div className="absolute left-[8%] top-[6%] bottom-[6%] w-px bg-black opacity-50"></div>
              <div className="absolute left-[16%] top-[3%] bottom-[3%] w-px bg-black opacity-55"></div>
              <div className="absolute left-[24%] top-[12%] bottom-[12%] w-px bg-black opacity-45"></div>
              <div className="absolute left-[32%] top-[6%] bottom-[6%] w-px bg-black opacity-60"></div>
              <div className="absolute left-[40%] top-[3%] bottom-[3%] w-px bg-black opacity-50"></div>
              <div className="absolute right-[8%] top-[6%] bottom-[6%] w-px bg-black opacity-50"></div>
              <div className="absolute right-[16%] top-[3%] bottom-[3%] w-px bg-black opacity-55"></div>
              <div className="absolute right-[24%] top-[12%] bottom-[12%] w-px bg-black opacity-45"></div>
              <div className="absolute right-[32%] top-[6%] bottom-[6%] w-px bg-black opacity-60"></div>
              <div className="absolute right-[40%] top-[3%] bottom-[3%] w-px bg-black opacity-50"></div>

              {/* Circuit nodes using percentage positioning */}
              <div className="absolute top-[25%] left-[16%] w-1 h-1 md:w-1.5 md:h-1.5 bg-black opacity-70 rounded-full"></div>
              <div className="absolute top-[37%] left-[24%] w-0.5 h-0.5 md:w-1 md:h-1 bg-black opacity-65 rounded-full"></div>
              <div className="absolute top-[50%] left-[32%] w-1 h-1 md:w-1.5 md:h-1.5 bg-black opacity-75 rounded-full"></div>
              <div className="absolute top-[62%] left-[40%] w-0.5 h-0.5 md:w-1 md:h-1 bg-black opacity-60 rounded-full"></div>
              <div className="absolute top-[25%] right-[16%] w-1 h-1 md:w-1.5 md:h-1.5 bg-black opacity-70 rounded-full"></div>
              <div className="absolute top-[37%] right-[24%] w-0.5 h-0.5 md:w-1 md:h-1 bg-black opacity-65 rounded-full"></div>
              <div className="absolute top-[50%] right-[32%] w-1 h-1 md:w-1.5 md:h-1.5 bg-black opacity-75 rounded-full"></div>
              <div className="absolute top-[62%] right-[40%] w-0.5 h-0.5 md:w-1 md:h-1 bg-black opacity-60 rounded-full"></div>

              {/* Additional decorative elements with responsive positioning */}
              <div className="absolute top-[16%] left-[20%] w-2 md:w-3 h-0.5 bg-black opacity-55 rounded-sm"></div>
              <div className="absolute top-[16%] right-[20%] w-2 md:w-3 h-0.5 bg-black opacity-55 rounded-sm"></div>
              <div className="absolute top-[33%] left-[28%] w-1.5 md:w-2 h-0.5 bg-black opacity-50 rounded-sm"></div>
              <div className="absolute top-[33%] right-[28%] w-1.5 md:w-2 h-0.5 bg-black opacity-50 rounded-sm"></div>
              <div className="absolute top-[66%] left-[36%] w-2 md:w-3 h-0.5 bg-black opacity-60 rounded-sm"></div>
              <div className="absolute top-[66%] right-[36%] w-2 md:w-3 h-0.5 bg-black opacity-60 rounded-sm"></div>
              <div className="absolute bottom-[16%] left-[40%] w-3 md:w-4 h-0.5 bg-black opacity-55 rounded-sm"></div>
              <div className="absolute bottom-[16%] right-[40%] w-3 md:w-4 h-0.5 bg-black opacity-55 rounded-sm"></div>
            </div>

            {/* Mission Text - Adjusted for mobile */}
            <div className="absolute inset-0 flex items-center justify-center z-20 px-2">
              <span
                className="text-black text-xs sm:text-sm md:text-4xl lg:text-xl xl:text-2xl font-bold tracking-wider glitch-text md:glitch-text-large text-center whitespace-normal sm:whitespace-nowrap px-1  "
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                MISSION KOLKATA ACCOMPLISHED
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default SpireCompleters;
