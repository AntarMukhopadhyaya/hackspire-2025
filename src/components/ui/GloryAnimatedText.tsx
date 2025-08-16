"use client";
import { motion } from "framer-motion";

function GloryAnimatedText() {
  return (
    <>
      {/* Mobile-specific styles for sleek cards */}
      <style jsx>{`
        @media (max-width: 768px) {
          .glory-card-mobile {
            min-height: auto !important;
            padding: 12px 16px !important;
          }

          .glory-card-title {
            font-size: 1.125rem !important;
            line-height: 1.2 !important;
            margin-bottom: 8px !important;
          }

          .glory-card-text {
            font-size: 0.875rem !important;
            line-height: 1.3 !important;
          }
        }
      `}</style>
      <section className="relative py-8 md:py-12 mb-8 md:mb-12 text-white overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 z-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="mb-4 font-bold text-[clamp(2rem,5vw,4rem)] text-white"
              style={{ fontFamily: "'Mokoto Demo', monospace" }}
            >
              HACKSPIRE 2024 LEGACY
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-gray-400 max-w-3xl mx-auto mb-4 font-medium text-lg md:text-xl lg:text-2xl"
              style={{ fontFamily: "'Mokoto Demo', monospace" }}
            >
              A year of unprecedented innovation, collaboration, and
              technological breakthroughs that redefined the future of
              hackathons.
            </motion.p>
          </motion.div>

          {/* Achievement Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              className="text-center"
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
                    className="text-4xl md:text-5xl font-bold text-black mb-2"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    500+
                  </h3>
                  <p
                    className="text-black text-lg font-medium"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Participants
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
              className="text-center"
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
                    className="text-4xl md:text-5xl font-bold text-black mb-2"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    50+
                  </h3>
                  <p
                    className="text-black text-lg font-medium"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Projects Built
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
              className="text-center"
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
                    className="text-4xl md:text-5xl font-bold text-black mb-2"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    24hrs
                  </h3>
                  <p
                    className="text-black text-lg font-medium"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Innovation Sprint
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Achievement Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
            className="text-center mt-6"
          >
            {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
            <div className="relative pt-4 pb-2 -mb-8 px-4 md:px-8 group cursor-pointer transition-all duration-300 hover:scale-105">
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
              <div className="relative z-10 mb-0">
                <h3
                  className="text-lg md:text-2xl lg:text-3xl font-bold text-black glory-card-title"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  <span className="hidden md:inline">
                    🏆 HACKSPIRE 2024 HIGHLIGHTS
                  </span>
                  <span className="md:hidden">🏆 2024 HIGHLIGHTS</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-3 md:mt-6">
                  <div className="text-center">
                    <p
                      className="text-black text-sm md:text-lg font-medium glory-card-text"
                      style={{ fontFamily: "'Mokoto Demo', monospace" }}
                    >
                      <span className="hidden md:inline">
                        🚀 15+ Industry Partners
                      </span>
                      <span className="md:hidden">🚀 15+ Partners</span>
                    </p>
                  </div>
                  <div className="text-center">
                    <p
                      className="text-black text-sm md:text-lg font-medium glory-card-text"
                      style={{ fontFamily: "'Mokoto Demo', monospace" }}
                    >
                      <span className="hidden md:inline">
                        💡 $50K+ in Prizes
                      </span>
                      <span className="md:hidden">💡 $50K+ Prizes</span>
                    </p>
                  </div>
                  <div className="text-center">
                    <p
                      className="text-black text-sm md:text-lg font-medium glory-card-text"
                      style={{ fontFamily: "'Mokoto Demo', monospace" }}
                    >
                      <span className="hidden md:inline">
                        🌟 100% Success Rate
                      </span>
                      <span className="md:hidden">🌟 100% Success</span>
                    </p>
                  </div>
                  <div className="text-center">
                    <p
                      className="text-black text-sm md:text-lg font-medium glory-card-text"
                      style={{ fontFamily: "'Mokoto Demo', monospace" }}
                    >
                      🎯 Global Reach
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Detailed Content Sections */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-15"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
              className="text-center md:text-left"
            >
              {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
              <div className="relative p-4 md:p-6 group cursor-pointer transition-all duration-300 hover:scale-105">
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
                    className="text-lg md:text-2xl lg:text-3xl font-bold text-black mb-2 md:mb-4 transition-all duration-300 group-hover:glitch-text glory-card-title"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Innovation Unleashed
                  </h3>
                  <p
                    className="text-black text-sm md:text-lg leading-tight md:leading-relaxed transition-all duration-300 group-hover:text-shadow-glow glory-card-text"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    <span className="hidden md:inline">
                      From AI-powered healthcare solutions to blockchain-based
                      financial platforms, HACKSPIRE 2024 witnessed
                      groundbreaking innovations that pushed the boundaries of
                      what's possible. Teams collaborated across disciplines,
                      combining cutting-edge technology with real-world
                      problem-solving to create solutions that matter.
                    </span>
                    <span className="md:hidden">
                      AI-powered healthcare to blockchain platforms - HACKSPIRE
                      2024 pushed innovation boundaries with cutting-edge
                      solutions.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
              className="text-center md:text-right"
            >
              {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
              <div className="relative p-4 md:p-6 group cursor-pointer transition-all duration-300 hover:scale-105">
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
                    className="text-lg md:text-2xl lg:text-3xl font-bold text-black mb-2 md:mb-4 transition-all duration-300 group-hover:glitch-text glory-card-title"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Community Impact
                  </h3>
                  <p
                    className="text-black text-sm md:text-lg leading-tight md:leading-relaxed transition-all duration-300 group-hover:text-shadow-glow glory-card-text"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    <span className="hidden md:inline">
                      Beyond the code, HACKSPIRE 2024 fostered a community of
                      passionate innovators who continue to collaborate, mentor,
                      and inspire. The connections formed during those intense
                      24 hours have evolved into lasting partnerships and
                      friendships that drive the tech ecosystem forward.
                    </span>
                    <span className="md:hidden">
                      HACKSPIRE 2024 built a community of innovators creating
                      lasting partnerships that drive tech forward.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default GloryAnimatedText;
