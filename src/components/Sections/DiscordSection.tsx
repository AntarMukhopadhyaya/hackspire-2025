"use client";

import { motion } from "framer-motion";
import React from "react";

export default function DiscordSection() {
  return (
    <section className="relative py-2 md:py-4 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Discord Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col items-center gap-0">
            <motion.a
              href="https://discord.gg/8qpHgECDH3"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img
                src="https://ik.imagekit.io/k2pkqd50y/ChatGPT_Image_Sep_6_2025_09_05_42_PM_owuz2p.png?updatedAt=1757998404580"
                alt="Discord Icon"
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain cursor-pointer hover:opacity-80 transition-opacity duration-300"
              />
            </motion.a>
            <motion.a
              href="https://discord.gg/8qpHgECDH3"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-lg md:text-xl lg:text-2xl font-medium flex items-center gap-1 hover:border-b hover:border-dotted hover:border-white transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "'Mokoto Demo', monospace" }}
            >
              Join Discord
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
