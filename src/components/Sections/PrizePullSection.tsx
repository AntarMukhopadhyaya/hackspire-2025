"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrizePullSection() {
  return (
    <section
      id="prize-pull"
      className="relative py-0 md:py-0 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Main content text from GloryAnimatedText, with same styling */}
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
          @media (max-width: 640px) {
            .glory-card-title {
              font-size: 5rem !important;
            }
          }
        `}</style>
        <section className="relative py-8 md:py-12 mb-8 md:mb-12 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mt-2 mb-4"
            >
              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="mb-4 font-bold text-[clamp(2rem,5vw,4rem)] text-white"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                EXCITING PRIZE PULL
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-gray-400 max-w-3xl mx-auto mb-4 font-medium text-lg md:text-xl lg:text-2xl"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                Unlock amazing prizes and exclusive rewards! Every participant
                stands a chance to win something special at Hackspire.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              className="flex justify-center items-center mt-15"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                className="flex flex-col items-center w-full"
              >
                <h3
                  className="font-extrabold text-white mt-8 mb-0 transition-all duration-300 glory-card-title text-center"
                  style={{
                    fontFamily: "'Mokoto Demo', monospace",
                    fontSize: "6rem",
                    lineHeight: "1.1",
                  }}
                >
                  ₹70k+
                </h3>
                <p
                  className="text-white text-base md:text-lg leading-tight md:leading-relaxed transition-all duration-300 glory-card-text text-center mt-4"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Win cash, gadgets, and exclusive rewards! Every participant
                  can grab something special.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}
