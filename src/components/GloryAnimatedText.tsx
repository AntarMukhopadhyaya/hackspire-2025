"use client";
import { motion } from "framer-motion";

function GloryAnimatedText() {
  return (
    <section className="relative py-16 md:py-24 mb-16 md:mb-24 text-white overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

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
            className="mb-4 font-['Distancia'] font-bold text-[clamp(2rem,5vw,4rem)] text-white"
          >
            HACKSPIRE 2024 LEGACY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-gray-400 max-w-3xl mx-auto mb-8 font-medium font-['Poppins'] text-lg md:text-xl lg:text-2xl"
          >
            A year of unprecedented innovation, collaboration, and technological
            breakthroughs that redefined the future of hackathons.
          </motion.p>
        </motion.div>

        {/* Achievement Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-['Distancia']">
                500+
              </h3>
              <p className="text-purple-300 text-lg font-medium font-['Poppins']">
                Participants
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 border border-green-500/30 rounded-2xl p-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-['Distancia']">
                50+
              </h3>
              <p className="text-green-300 text-lg font-medium font-['Poppins']">
                Projects Built
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-['Distancia']">
                24hrs
              </h3>
              <p className="text-orange-300 text-lg font-medium font-['Poppins']">
                Innovation Sprint
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Detailed Content Sections */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-['Poppins']">
              Innovation Unleashed
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-['Poppins']">
              From AI-powered healthcare solutions to blockchain-based financial
              platforms, HACKSPIRE 2024 witnessed groundbreaking innovations
              that pushed the boundaries of what's possible. Teams collaborated
              across disciplines, combining cutting-edge technology with
              real-world problem-solving to create solutions that matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
            className="text-center md:text-right"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-['Poppins']">
              Community Impact
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-['Poppins']">
              Beyond the code, HACKSPIRE 2024 fostered a community of passionate
              innovators who continue to collaborate, mentor, and inspire. The
              connections formed during those intense 24 hours have evolved into
              lasting partnerships and friendships that drive the tech ecosystem
              forward.
            </p>
          </motion.div>
        </motion.div>

        {/* Additional Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-green-600/20 border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-['Distancia']">
              🏆 HACKSPIRE 2024 HIGHLIGHTS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="text-center">
                <p className="text-purple-300 text-lg font-medium font-['Poppins']">
                  🚀 15+ Industry Partners
                </p>
              </div>
              <div className="text-center">
                <p className="text-blue-300 text-lg font-medium font-['Poppins']">
                  💡 $50K+ in Prizes
                </p>
              </div>
              <div className="text-center">
                <p className="text-green-300 text-lg font-medium font-['Poppins']">
                  🌟 100% Success Rate
                </p>
              </div>
              <div className="text-center">
                <p className="text-orange-300 text-lg font-medium font-['Poppins']">
                  🎯 Global Reach
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GloryAnimatedText;
