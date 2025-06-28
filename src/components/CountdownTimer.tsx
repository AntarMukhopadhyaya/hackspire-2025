"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const eventDate = new Date("2025-10-01T00:00:00").getTime();
    const totalDays = 100;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      setDays(d);
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      setProgress(((totalDays - d) / totalDays) * 100);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 z-10 overflow-hidden rounded-none shadow-none">
      <div className="px-4 md:px-8 lg:px-16 max-w-3xl mx-auto">
        {/* Particle Grid Background */}
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10 bg-[length:100px_100px] z-0 pointer-events-none" />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-extrabold mb-16 tracking-widest text-saffron drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]"
        >
          Hackspire{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            Awakens In...
          </span>
        </motion.h2>

        {/* Countdown Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mx-auto w-fit rounded-2xl border border-purple-800/40 bg-gradient-to-br from-gray-900 via-black to-gray-800 p-10 shadow-[0_0_60px_rgba(124,58,237,0.2)]"
        >
          {/* Glow Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-shaktiRed/10 blur-2xl opacity-50 z-0" />

          <div className="relative z-10 text-center space-y-6">
            {/* Day/Hour Display */}
            <motion.div
              className="text-5xl sm:text-6xl font-extrabold tracking-wide"
              animate={{
                textShadow: [
                  "0 0 6px rgba(96, 165, 250, 0.7)",
                  "0 0 12px rgba(124, 58, 237, 0.9)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <span className="bg-gradient-to-r from-techBlue via-shaktiPurple to-shaktiRed bg-clip-text text-transparent">
                {days}d {hours}h
              </span>
            </motion.div>

            {/* Min/Sec Display */}
            <motion.div
              className="text-3xl sm:text-4xl font-medium"
              animate={{
                textShadow: [
                  "0 0 4px rgba(59, 130, 246, 0.5)",
                  "0 0 8px rgba(168, 85, 247, 0.7)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.3,
              }}
            >
              <span className="bg-gradient-to-r from-purple-300 to-saffron bg-clip-text text-transparent">
                {minutes}m {seconds}s
              </span>
            </motion.div>

            {/* Progress Bar */}
            <div className="mt-8 h-2 w-full bg-gray-700/50 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-techBlue via-shaktiPurple to-shaktiRed"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            {/* Event Date */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm mt-4 text-purple-300/80 font-mono"
            >
              October 1, 2025
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
