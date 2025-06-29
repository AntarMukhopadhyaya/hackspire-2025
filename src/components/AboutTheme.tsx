"use client";
import { motion } from "framer-motion";
export default function AboutTheme() {
  return (
    <section className="relative py-20 z-10" id="about">
      <div className="px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 bg-black/50 backdrop-blur-xl border border-goldGlow/20 shadow-xl rounded-2xl p-10 sm:p-14 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-goldGlow via-yellow-300 to-shaktiRed bg-clip-text text-transparent">
            About the Theme
          </h2>

          <p className="text-lg sm:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
            <span className="text-yellow-300 font-semibold">
              Hackspire 2025
            </span>
            brings together Bengal's festive spirit and tech innovation. Just as
            <span className="text-pink-400 font-bold">Ma Durga</span> triumphs
            over evil, our hackers rise to solve real-world challenges with
            creativity, collaboration, and courage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
