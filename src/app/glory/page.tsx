"use client";
import React from "react";
import { motion } from "framer-motion";
import GloryBentoGrid from "../../components/GloryBentoGrid";
import GloryAnimatedText from "../../components/GloryAnimatedText";

function Glory() {
  return (
    <div className="min-h-screen text-white py-20 px-4">
      {/* Centered Glory Title */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white font-distancia"
        >
          Glory
        </motion.h1>

        {/* Subtext with Poppins font */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mt-8 max-w-4xl mx-auto leading-relaxed"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Celebrating the extraordinary achievements and groundbreaking
          innovations from last year's HACKSPIRE hackathon. Witness the
          incredible projects, brilliant minds, and revolutionary solutions that
          emerged from our community of passionate developers, designers, and
          innovators.
        </motion.p>
      </div>

      {/* Bento Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20"
      >
        <GloryBentoGrid />
      </motion.div>

      {/* Animated Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-20"
      >
        <GloryAnimatedText />
      </motion.div>
    </div>
  );
}

export default Glory;
