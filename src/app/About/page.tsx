"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Rocket, Users, Lightbulb } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen text-white py-20 px-4">
      {/* Centered About Title */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white font-distancia"
        >
          About
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mt-8 max-w-4xl mx-auto leading-relaxed"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Where tradition meets innovation, and ancient wisdom guides modern
          solutions. Join us in celebrating Bengal's festive spirit through the
          power of technology.
        </motion.p>
      </div>

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mb-20"
      >
        <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto">
          <Image
            src="/icons/logoicon.svg"
            alt="HackSpire Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Theme Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-white/10 rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-distancia">
            About the Theme
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="text-yellow-300 font-semibold">
              Hackspire 2025
            </span>{" "}
            brings together Bengal's festive spirit and tech innovation. Just as{" "}
            <span className="text-pink-400 font-bold">Ma Durga</span> triumphs
            over evil, our hackers rise to solve real-world challenges with
            creativity, collaboration, and courage.
          </p>
        </motion.div>
      </div>

      {/* Key Features Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-distancia">
            What Makes Us Special
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/10 rounded-xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <Building2 className="w-10 h-10 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4 font-distancia">
              Cultural Heritage
            </h3>
            <p
              className="text-white/80 leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Celebrating Bengal's rich tradition while embracing technological
              innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="backdrop-blur-md bg-white/10 rounded-xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <Rocket className="w-10 h-10 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4 font-distancia">
              Tech Innovation
            </h3>
            <p
              className="text-white/80 leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Cutting-edge solutions in AI, Blockchain, Web3, and sustainable
              technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-md bg-white/10 rounded-xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <Users className="w-10 h-10 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4 font-distancia">
              Community Spirit
            </h3>
            <p
              className="text-white/80 leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Building connections and fostering collaboration among passionate
              developers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="backdrop-blur-md bg-white/10 rounded-xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <Lightbulb className="w-10 h-10 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4 font-distancia">
              Real Impact
            </h3>
            <p
              className="text-white/80 leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Creating solutions that address real-world challenges and make a
              difference
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-distancia">
            Our Vision
          </h2>
          <div className="backdrop-blur-md bg-white/10 rounded-xl p-8 md:p-12">
            <p
              className="text-xl md:text-2xl leading-relaxed text-white/90 mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              To create a platform where technology serves humanity, where
              innovation is guided by wisdom, and where the spirit of{" "}
              <span className="text-pink-400 font-bold">Ma Durga's</span>{" "}
              courage inspires developers to build solutions that matter.
            </p>
            <p
              className="text-lg text-gray-300 italic"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              "Code | Create | Conquer - Where tradition meets the future"
            </p>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-distancia">
            Ready to Join the Revolution?
          </h2>
          <p
            className="text-lg text-gray-300 mb-8"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Be part of HackSpire 2025 and help us shape the future through
            technology and tradition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#"
              className="px-8 py-4 backdrop-blur-md bg-white/20 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Register Now
            </a>
            <a
              href="https://discord.gg/8qpHgECDH3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 justify-center"
              style={{
                fontFamily: "Poppins, sans-serif",
                backgroundColor: "#4854E6",
              }}
            >
              <Image
                src="/icons/discord.svg"
                alt="Discord"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              Join Discord
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
