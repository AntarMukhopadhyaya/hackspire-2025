"use client";
import { motion } from "framer-motion";

function SpireCompleters() {
  return (
    <section
      id="spire-completers"
      className="relative py-16 md:py-24 text-white overflow-hidden"
    >
      {/* Yellow Trapezium Background with Clip-Path */}
      <div className="absolute top-0 left-0 right-0 h-96 z-0">
        {/* Main trapezium with clip-path */}
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath:
              "polygon(3% 0, 97% 0, 100% 11%, 80% 91%, 72% 100%, 24% 100%, 16% 90%, 0 12%)",
          }}
        >
          {/* PCB-like lines */}
          <div className="absolute inset-0">
            {/* Horizontal lines */}
            <div className="absolute top-8 left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute top-16 left-0 right-0 h-px bg-black opacity-40"></div>
            <div className="absolute top-24 left-0 right-0 h-px bg-black opacity-30"></div>
            <div className="absolute top-32 left-0 right-0 h-px bg-black opacity-20"></div>

            {/* Vertical lines */}
            <div className="absolute top-0 bottom-0 left-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 left-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 left-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 left-32 w-px bg-black opacity-20"></div>
            <div className="absolute top-0 bottom-0 right-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 right-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 right-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 right-32 w-px bg-black opacity-20"></div>

            {/* Diagonal lines for futuristic effect */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-black opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Multiple Left Side Vertical Trapezium Shapes - Attached to Screen Edge */}
      <div className="absolute left-0 top-1/4 w-20 h-64 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath: "polygon(0% 0%, 100% 15%, 100% 85%, 0% 100%)",
          }}
        >
          {/* Cut in the middle */}
          <div
            className="absolute top-1/2 left-0 w-full h-8 bg-black transform -translate-y-1/2"
            style={{
              clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)",
            }}
          ></div>
        </div>
      </div>

      <div className="absolute left-0 top-3/4 w-16 h-48 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)",
          }}
        >
          {/* Cut in the middle */}
          <div
            className="absolute top-1/2 left-0 w-full h-6 bg-black transform -translate-y-1/2"
            style={{
              clipPath: "polygon(0% 30%, 100% 0%, 100% 100%, 0% 70%)",
            }}
          ></div>
        </div>
      </div>

      {/* Multiple Right Side Vertical Trapezium Shapes - Attached to Screen Edge */}
      <div className="absolute right-0 top-1/4 w-20 h-64 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath: "polygon(0% 15%, 100% 0%, 100% 100%, 0% 85%)",
          }}
        >
          {/* Cut in the middle */}
          <div
            className="absolute top-1/2 right-0 w-full h-8 bg-black transform -translate-y-1/2"
            style={{
              clipPath: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)",
            }}
          ></div>
        </div>
      </div>

      <div className="absolute right-0 top-3/4 w-16 h-48 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)",
          }}
        >
          {/* Cut in the middle */}
          <div
            className="absolute top-1/2 right-0 w-full h-6 bg-black transform -translate-y-1/2"
            style={{
              clipPath: "polygon(0% 0%, 100% 30%, 100% 70%, 0% 100%)",
            }}
          ></div>
        </div>
      </div>

      {/* Background Typing Effect - Continuous Loop & Responsive */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-green-400/90 font-mono text-xs sm:text-sm md:text-base lg:text-lg select-none max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]"
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
            className="space-y-2 sm:space-y-3"
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
                --access-level=legendary
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
                $ python3 elite_scanner.py --scan-candidates --filter=genius
                --output=hall_of_fame.json
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
                --validate-skills --confirm-mastery
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
                --privileges=read,write,execute --status=confirmed
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
                $ node hall_of_fame_executor.js --update-records
                --broadcast-achievements --notify-community
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
                className="inline-block text-green-300/70 bg-green-400/10 px-1"
              >
                [████████████████████████████████████████████████████████████]
                100% COMPLETE
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
            className="text-green-400/90 text-lg font-bold ml-1"
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
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mb-4 font-['Sddystopiandemo-GO7xa'] font-bold text-[clamp(3rem,8vw,7rem)] text-black"
          >
            SPIRE COMPLETERS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-black max-w-2xl mx-auto mb-8 font-medium text-lg md:text-xl lg:text-2xl"
            style={{ fontFamily: "Mokoto Demo" }}
          >
            Recognizing those who conquered the ultimate challenge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center items-center gap-8 md:gap-12 flex-wrap md:flex-nowrap"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="w-32 md:w-40 lg:w-48"
            >
              <img
                src="/icons/future.png"
                alt="Future"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              className="w-24 md:w-32"
            >
              <img
                src="/icons/logoicon.svg"
                alt="Logo Icon"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              className="w-32 md:w-40 lg:w-48"
            >
              <img src="/icons/acm.png" alt="ACM" className="w-full h-auto" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
            <div className="relative p-6 group cursor-pointer transition-all duration-300 hover:scale-105">
              {/* Background with clip-path cuts */}
              <div
                className="absolute inset-0 bg-yellow-400 transition-all duration-300 group-hover:animate-pulse"
                style={{
                  clipPath:
                    "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                }}
              ></div>

              {/* Border with clip-path cuts */}
              <div
                className="absolute -inset-1 bg-yellow-500 transition-all duration-300 group-hover:bg-orange-500"
                style={{
                  clipPath:
                    "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                  zIndex: -1,
                }}
              ></div>

              {/* Glitch overlays for hover effect */}
              <div
                className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150 glitch-overlay-1"
                style={{
                  clipPath:
                    "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                  mixBlendMode: "screen",
                  transform: "translateX(-2px)",
                  zIndex: 1,
                }}
              ></div>

              <div
                className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150 glitch-overlay-2"
                style={{
                  clipPath:
                    "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                  mixBlendMode: "screen",
                  transform: "translateX(2px)",
                  zIndex: 2,
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-2xl md:text-3xl font-bold text-black mb-4 transition-all duration-300 group-hover:glitch-text"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  The Ultimate Challenge
                </h3>
                <p
                  className="text-black text-lg leading-relaxed transition-all duration-300 group-hover:text-shadow-glow"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Only the most dedicated hackers who complete every challenge,
                  solve every puzzle, and push their limits beyond imagination
                  earn the prestigious title of Spire Completer. These legends
                  have proven their mastery in the digital realm.
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
            <div className="relative p-6 group cursor-pointer transition-all duration-300 hover:scale-105">
              {/* Background with clip-path cuts */}
              <div
                className="absolute inset-0 bg-yellow-400 transition-all duration-300 group-hover:animate-pulse"
                style={{
                  clipPath:
                    "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                }}
              ></div>

              {/* Border with clip-path cuts */}
              <div
                className="absolute -inset-1 bg-yellow-500 transition-all duration-300 group-hover:bg-orange-500"
                style={{
                  clipPath:
                    "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                  zIndex: -1,
                }}
              ></div>

              {/* Glitch overlays for hover effect */}
              <div
                className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150 glitch-overlay-1"
                style={{
                  clipPath:
                    "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                  mixBlendMode: "screen",
                  transform: "translateX(-2px)",
                  zIndex: 1,
                }}
              ></div>

              <div
                className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150 glitch-overlay-2"
                style={{
                  clipPath:
                    "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                  mixBlendMode: "screen",
                  transform: "translateX(2px)",
                  zIndex: 2,
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-2xl md:text-3xl font-bold text-black mb-4 transition-all duration-300 group-hover:glitch-text"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Legacy of Excellence
                </h3>
                <p
                  className="text-black text-lg leading-relaxed transition-all duration-300 group-hover:text-shadow-glow"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Each Spire Completer joins an elite community of innovators,
                  problem-solvers, and boundary-pushers. Their achievements
                  inspire the next generation of hackers to dream bigger, code
                  smarter, and hack the impossible.
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
          className="text-center mt-12"
        >
          {/* Cyberpunk Container with Cut Edges */}
          <div className="inline-flex items-center gap-4 relative">
            {/* Main container with cut edges */}
            <div className="relative bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 px-8 py-4">
              {/* Cut edge effect - top left */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-black transform -translate-x-1 -translate-y-1">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-l border-t border-purple-500/30"></div>
              </div>

              {/* Cut edge effect - top right */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-black transform translate-x-1 -translate-y-1">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-r border-t border-purple-500/30"></div>
              </div>

              {/* Cut edge effect - bottom left */}
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-black transform -translate-x-1 translate-y-1">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-l border-b border-purple-500/30"></div>
              </div>

              {/* Cut edge effect - bottom right */}
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-black transform translate-x-1 translate-y-1">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-r border-b border-purple-500/30"></div>
              </div>

              {/* Content */}
              <span
                className="text-purple-300 text-lg font-medium relative z-10"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                🏆 Only 0.1% of participants achieve this status
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Large Decorative Trapezium with Circuit Board Patterns and Mission Text - Moved to Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        className="flex justify-center mt-16"
      >
        <div className="relative w-full max-w-4xl h-24">
          {/* Main large trapezium background */}
          <div className="w-full h-full bg-yellow-400 relative large-trapezium-decorative">
            {/* Circuit board patterns */}
            <div className="absolute inset-0 opacity-70">
              {/* Horizontal circuit traces */}
              <div className="absolute top-3 left-8 right-8 h-px bg-black opacity-60"></div>
              <div className="absolute top-6 left-12 right-12 h-px bg-black opacity-50"></div>
              <div className="absolute top-9 left-8 right-8 h-px bg-black opacity-45"></div>
              <div className="absolute top-12 left-16 right-16 h-px bg-black opacity-55"></div>
              <div className="absolute top-15 left-10 right-10 h-px bg-black opacity-40"></div>
              <div className="absolute top-18 left-14 right-14 h-px bg-black opacity-50"></div>
              <div className="absolute top-21 left-8 right-8 h-px bg-black opacity-45"></div>

              {/* Vertical circuit traces */}
              <div className="absolute left-8 top-2 bottom-2 w-px bg-black opacity-50"></div>
              <div className="absolute left-16 top-1 bottom-1 w-px bg-black opacity-55"></div>
              <div className="absolute left-24 top-3 bottom-3 w-px bg-black opacity-45"></div>
              <div className="absolute left-32 top-2 bottom-2 w-px bg-black opacity-60"></div>
              <div className="absolute left-40 top-1 bottom-1 w-px bg-black opacity-50"></div>
              <div className="absolute right-8 top-2 bottom-2 w-px bg-black opacity-50"></div>
              <div className="absolute right-16 top-1 bottom-1 w-px bg-black opacity-55"></div>
              <div className="absolute right-24 top-3 bottom-3 w-px bg-black opacity-45"></div>
              <div className="absolute right-32 top-2 bottom-2 w-px bg-black opacity-60"></div>
              <div className="absolute right-40 top-1 bottom-1 w-px bg-black opacity-50"></div>

              {/* Circuit nodes */}
              <div className="absolute top-6 left-16 w-1.5 h-1.5 bg-black opacity-70 rounded-full"></div>
              <div className="absolute top-9 left-24 w-1 h-1 bg-black opacity-65 rounded-full"></div>
              <div className="absolute top-12 left-32 w-1.5 h-1.5 bg-black opacity-75 rounded-full"></div>
              <div className="absolute top-15 left-40 w-1 h-1 bg-black opacity-60 rounded-full"></div>
              <div className="absolute top-6 right-16 w-1.5 h-1.5 bg-black opacity-70 rounded-full"></div>
              <div className="absolute top-9 right-24 w-1 h-1 bg-black opacity-65 rounded-full"></div>
              <div className="absolute top-12 right-32 w-1.5 h-1.5 bg-black opacity-75 rounded-full"></div>
              <div className="absolute top-15 right-40 w-1 h-1 bg-black opacity-60 rounded-full"></div>

              {/* Additional decorative elements */}
              <div className="absolute top-4 left-20 w-3 h-0.5 bg-black opacity-55 rounded-sm"></div>
              <div className="absolute top-4 right-20 w-3 h-0.5 bg-black opacity-55 rounded-sm"></div>
              <div className="absolute top-8 left-28 w-2 h-0.5 bg-black opacity-50 rounded-sm"></div>
              <div className="absolute top-8 right-28 w-2 h-0.5 bg-black opacity-50 rounded-sm"></div>
              <div className="absolute top-16 left-36 w-3 h-0.5 bg-black opacity-60 rounded-sm"></div>
              <div className="absolute top-16 right-36 w-3 h-0.5 bg-black opacity-60 rounded-sm"></div>
              <div className="absolute bottom-4 left-40 w-4 h-0.5 bg-black opacity-55 rounded-sm"></div>
              <div className="absolute bottom-4 right-40 w-4 h-0.5 bg-black opacity-55 rounded-sm"></div>
            </div>

            {/* Mission Text - One Linear Line with Glitch Effect */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span
                className="text-black text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider glitch-text-large text-center whitespace-nowrap"
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
