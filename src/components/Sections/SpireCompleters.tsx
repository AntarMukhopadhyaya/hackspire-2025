"use client";
import { motion } from "framer-motion";

function SpireCompleters() {
  return (
    <section
      id="spire-completers"
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
                $ sudo ./spire_protocol_v2.sh --initialize --mode=elite
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
                $ python3 elite_scanner.py --scan-candidates
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
                $ ./verify_legend_status.exe --check-achievements
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
                $ access_granted: spire_completers_database
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
                $ node hall_of_fame_executor.js
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
                [████████████████████████████] 100% COMPLETE
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
            className="text-5xl sm:text-7xl md:text-[5rem] lg:text-[6rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo"
          >
            SPIRE COMPLETERS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-black max-w-2xl mx-auto mb-4 px-12 sm:px-0 md:mb-8 font-medium text-sm md:text-lg lg:text-xl"
            style={{ fontFamily: "Mokoto Demo" }}
          >
            Recognizing those who conquered the ultimate challenge.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl mt-20 sm:mt-24 md:mt-32 lg:mt-40 mb-8 sm:mb-12 md:mb-16 lg:mb-20 sm:text-7xl md:text-[5rem] lg:text-[6rem] xl:text-8xl 2xl:text-[7rem] font-bold text-white"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            HOSTS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 sm:gap-16 flex-col sm:flex-row flex-nowrap"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="w-28 md:w-48 lg:w-56"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Web%20Assets/new_fiem_logo_iq0bn8_oh8hx6.jpg?updatedAt=1757995736005"
                alt="FIEM"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              className="w-20 md:w-32 lg:w-40"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Web%20Assets/starcyber_q6jkev_xqsecp.png?updatedAt=1757995736110"
                alt="StarCyber"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              className="w-16 md:w-32 lg:w-40"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Web%20Assets/fiemacm_mx8uox_fchcgm.jpg?updatedAt=1757995743294"
                alt="FIEM ACM"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl mt-16 sm:mt-20 md:mt-24 lg:mt-32 mb-8 sm:mb-12 md:mb-16 lg:mb-20 sm:text-7xl md:text-[5rem] lg:text-[6rem] xl:text-8xl 2xl:text-[7rem] font-bold text-white"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            PARTNERS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 sm:gap-16 flex-row flex-nowrap"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="w-20 md:w-32 lg:w-40"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Web%20Assets/AICTE_lqh1yw_wg9syn.jpg?updatedAt=1757995741211"
                alt="AICTE"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              className="w-20 md:w-32 lg:w-40"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Web%20Assets/Council_eyi2wu_qklcby.jpg?updatedAt=1757995741547"
                alt="Council"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              className="w-20 md:w-32 lg:w-40"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Web%20Assets/moe_tcoq9v_w2okv5.jpg?updatedAt=1757995736201"
                alt="MOE"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Additional Content - Adjusted grid for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-24 md:mt-32"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
            <div className="relative p-4 md:p-6 group cursor-pointer transition-all duration-300 hover:scale-105 h-full">
              {/* Background with clip-path cuts */}
              <div
                className="absolute inset-0 bg-yellow-400 transition-all duration-300 group-hover:animate-pulse"
                style={{
                  clipPath:
                    "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
                }}
              ></div>

              {/* Border with clip-path cuts */}
              <div
                className="absolute -inset-0.5 md:-inset-1 bg-yellow-500 transition-all duration-300 group-hover:bg-orange-500"
                style={{
                  clipPath:
                    "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
                  zIndex: -1,
                }}
              ></div>

              {/* Glitch overlays for hover effect */}
              <div
                className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150 glitch-overlay-1"
                style={{
                  clipPath:
                    "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
                  mixBlendMode: "screen",
                  transform: "translateX(-2px)",
                  zIndex: 1,
                }}
              ></div>

              <div
                className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150 glitch-overlay-2"
                style={{
                  clipPath:
                    "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
                  mixBlendMode: "screen",
                  transform: "translateX(2px)",
                  zIndex: 2,
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-2 md:mb-4 transition-all duration-300 group-hover:glitch-text"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Future Institute of Engineering & Management
                </h3>
                <p
                  className="text-black text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-300 group-hover:text-shadow-glow"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Future Institute of Engineering & Management (FIEM) is a
                  premier institution committed to excellence in technical
                  education. As the host of Hackspire, It provides the perfect
                  environment for hackers.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            className="text-center md:text-right"
          >
            {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
            <div className="relative p-4 md:p-6 group cursor-pointer transition-all duration-300 hover:scale-105 h-full">
              {/* Background with clip-path cuts */}
              <div
                className="absolute inset-0 bg-yellow-400 transition-all duration-300 group-hover:animate-pulse"
                style={{
                  clipPath:
                    "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
                }}
              ></div>

              {/* Border with clip-path cuts */}
              <div
                className="absolute -inset-0.5 md:-inset-1 bg-yellow-500 transition-all duration-300 group-hover:bg-orange-500"
                style={{
                  clipPath:
                    "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
                  zIndex: -1,
                }}
              ></div>

              {/* Glitch overlays for hover effect */}
              <div
                className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150 glitch-overlay-1"
                style={{
                  clipPath:
                    "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
                  mixBlendMode: "screen",
                  transform: "translateX(-2px)",
                  zIndex: 1,
                }}
              ></div>

              <div
                className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150 glitch-overlay-2"
                style={{
                  clipPath:
                    "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
                  mixBlendMode: "screen",
                  transform: "translateX(2px)",
                  zIndex: 2,
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-2 md:mb-4 transition-all duration-300 group-hover:glitch-text"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  FIEM ACM Student Chapter
                </h3>
                <p
                  className="text-black text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-300 group-hover:text-shadow-glow"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  The FIEM ACM Student Chapter is the driving force behind
                  Hackspire, organizing and executing this prestigious
                  hackathon. As a student-run organization, they bring
                  innovation and technical expertise.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
          className="text-center mt-8 md:mt-12"
        >
          {/* Cyberpunk Container with Cut Edges */}
          <div className="inline-flex items-center gap-2 md:gap-4 relative">
            {/* Main container with cut edges */}
            <div className="relative bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 px-4 py-2 md:px-8 md:py-4">
              {/* Cut edge effect - top left */}
              <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 bg-black transform -translate-x-0.5 -translate-y-0.5 md:-translate-x-1 md:-translate-y-1">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-l border-t border-purple-500/30"></div>
              </div>

              {/* Cut edge effect - top right */}
              <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-black transform translate-x-0.5 -translate-y-0.5 md:translate-x-1 md:-translate-y-1">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-r border-t border-purple-500/30"></div>
              </div>

              {/* Cut edge effect - bottom left */}
              <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 bg-black transform -translate-x-0.5 translate-y-0.5 md:-translate-x-1 md:translate-y-1">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-l border-b border-purple-500/30"></div>
              </div>

              {/* Cut edge effect - bottom right */}
              <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-black transform translate-x-0.5 translate-y-0.5 md:translate-x-1 md:translate-y-1">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-r border-b border-purple-500/30"></div>
              </div>

              {/* Content */}
              <span
                className="text-purple-300 text-sm md:text-lg font-medium relative z-10"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                Elite hackers who conquered every challenge
              </span>
            </div>
          </div>
        </motion.div>

        {/* Community Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          className="text-center mt-8 md:mt-12"
        >
          {/* Community Partners Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
            className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            Community Partners
          </motion.h3>

          {/* Community Partners Logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
            className="flex justify-center items-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 mb-4 md:mb-8 flex-wrap"
          >
            <div
              key="lme"
              className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/image_13_fdf5wq.png?updatedAt=1757994683653"
                alt="LME"
                className="w-full h-auto object-contain"
              />
            </div>
            <div
              key="gdg-fiem"
              className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/GDGFIEM.png?updatedAt=1757994684050"
                alt="GDG"
                className="w-full h-auto object-contain"
              />
            </div>
            <div
              key="gdg-glt"
              className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/GDGGLT.png?updatedAt=1757994688237"
                alt="GDGGCLT"
                className="w-full h-auto object-contain"
              />
            </div>
            <div
              key="hacktropica"
              className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/Hacktropica.png?updatedAt=1757994684066"
                alt="Hacktropica"
                className="w-full h-auto object-contain"
              />
            </div>
            <div
              key="devnest"
              className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/Devnest_grrtik.png?updatedAt=1757994683901"
                alt="Devnest"
                className="w-full h-auto object-contain"
              />
            </div>
            <div
              key="apexcircle"
              className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/Apexcircle_wlzikj.png?updatedAt=1757994683603"
                alt="Apexcircle"
                className="w-full h-auto object-contain"
              />
            </div>
            <div
              key="tv"
              className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/TV_rf5gpy.png?updatedAt=1757994688885"
                alt="Tech Verse"
                className="w-full h-auto object-contain"
              />
            </div>
            <div
              key="devdotcom"
              className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/Devdotcom_zho9gc.png?updatedAt=1757994683757"
                alt="Devdotcom"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/Repository_iw09hw.png?updatedAt=1757994684043"
                alt="Repository"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/Sourcify_rju5bs.png?updatedAt=1757994683724"
                alt="Sourcify"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/AiZenera_hsu2nr.png?updatedAt=1757994684066"
                alt="AiZenera"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/SPORTIVO_LOGO_hfbltv.png?updatedAt=1757994684017"
                alt="Sportivo"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/MetaMorph.png?updatedAt=1758205540211"
                alt="MetaMorph"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/tcu.png?updatedAt=1758429166115"
                alt="TCU"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/GDGAOT.png?updatedAt=1758610015985"
                alt="GDGAOT"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/GDGIEM.png?updatedAt=1758610015966"
                alt="GDGIEM"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/innovatex.png?updatedAt=1758610016006"
                alt="InnovateX"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/Byte%20Brigade.png?updatedAt=1758739055521"
                alt="Byte Brigade"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/Samarth%20tmsl.png?updatedAt=1758739209126"
                alt="Samarth Tmsl"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/Lnc%20community.png?updatedAt=1758739317761"
                alt="LNC Community"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/byte_rush.png?updatedAt=1759214181407"
                alt="Byte Rush"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/k2pkqd50y/Community%20Partners/GDGRCCIT.png?updatedAt=1759503836777"
                alt="GDGRCCIT"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </motion.div>

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
                  MISSION ACCOMPLISHED
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SpireCompleters;
