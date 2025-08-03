"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { motion } from "framer-motion";

export default function ScheduleSection() {
  return (
    <section
      className="relative py-16 md:py-24 mb-16 md:mb-24 text-white overflow-hidden"
      id="schedule"
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
            CYBER PROTOCOL TIMELINE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-black max-w-2xl mx-auto mb-8 font-medium text-lg md:text-xl lg:text-2xl"
            style={{ fontFamily: "Mokoto Demo" }}
          >
            From registration to glory - your journey to digital supremacy.
          </motion.p>
        </motion.div>

        <TracingBeam className="px-6 relative z-10">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {hackathonContent.map((item, index) => (
              <motion.div
                key={`content-${index}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="mb-16 relative"
                style={{
                  position: "sticky",
                  top: `${60 + index * 20}px`,
                  zIndex: hackathonContent.length - index,
                }}
              >
                {/* Futuristic Card Container */}
                <motion.div
                  className="relative p-6"
                  whileInView={{
                    y: index * -10,
                    rotateX: index * 2,
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Background with clip-path cuts */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/90 to-orange-500/80"
                    style={{
                      clipPath:
                        "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                    }}
                  ></div>

                  {/* Border with clip-path cuts */}
                  <div
                    className="absolute -inset-1 bg-gradient-to-br from-yellow-500 to-orange-600"
                    style={{
                      clipPath:
                        "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                      zIndex: -1,
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className="bg-black text-yellow-400 rounded-full text-sm w-fit px-4 py-1 mb-4 font-mono font-bold"
                    >
                      {item.badge}
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                      className="text-2xl md:text-3xl font-bold text-black mb-4"
                      style={{ fontFamily: "'Mokoto Demo', monospace" }}
                    >
                      {item.title}
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                      className="text-black text-lg leading-relaxed"
                      style={{ fontFamily: "'Mokoto Demo', monospace" }}
                    >
                      {item.description}
                    </motion.div>
                  </div>

                  {/* Futuristic corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8">
                    <div className="w-full h-full border-l-2 border-t-2 border-black opacity-60"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8">
                    <div className="w-full h-full border-r-2 border-t-2 border-black opacity-60"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-8 h-8">
                    <div className="w-full h-full border-l-2 border-b-2 border-black opacity-60"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8">
                    <div className="w-full h-full border-r-2 border-b-2 border-black opacity-60"></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}

const hackathonContent = [
  {
    title: "Registration Phase",
    description: (
      <>
        <p>
          Digital gates open for aspiring hackers to join the ultimate coding
          battlefield. Register, form teams, and prepare for the challenges
          ahead.
        </p>
      </>
    ),
    badge: "1st September",
  },
  {
    title: "Registration Deadline",
    description: (
      <>
        <p>
          Final call for digital warriors to join the HackSpire revolution. Last
          chance to secure your position among the elite hackers.
        </p>
      </>
    ),
    badge: "30th September",
  },
  {
    title: "Rolling Approval Phase",
    description: (
      <>
        <p>
          Expert panel evaluates submissions with cybernetic precision.
          Successful candidates receive approval codes and access to exclusive
          resources.
        </p>
      </>
    ),
    badge: "15th October",
  },
  {
    title: "Hack Begins - The Digital Uprising",
    description: (
      <>
        <p>
          The ultimate digital showdown begins. Teams deploy strategies,
          algorithms come to life, and innovation erupts across the cyber
          battlefield.
        </p>
      </>
    ),
    badge: "31st October",
  },
  {
    title: "Victory Protocol - Hackathon Ends",
    description: (
      <>
        <p>
          Final presentations to industry legends. Winners are crowned, networks
          formed, and careers launched into the stratosphere of success.
        </p>
      </>
    ),
    badge: "1st November",
  },
];
