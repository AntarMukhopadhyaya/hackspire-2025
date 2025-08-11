"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { School, Users, BookOpen, Microscope } from "lucide-react";
import CyberButton from "@/components/ui/CyberButton";

const colleges = [
  {
    name: "Future Institute of Engineering & Management",
    logo: "/images/collab/iitd.png",
    role: "Host College",
    location: "Sonarpur, Kolkata",
  },
  {
    name: "Jadavpur University",
    logo: "/images/collab/iitd.png",
    role: "Academic Partner",
    location: "Kolkata",
  },
  {
    name: "Techno India University",
    logo: "/images/collab/iitd.png",
    role: "Technical Partner",
    location: "Kolkata",
  },
  {
    name: "University of Engineering & Management",
    logo: "/images/collab/iitd.png",
    role: "Knowledge Partner",
    location: "Kolkata",
  },
  {
    name: "Institute of Engineering & Management",
    logo: "/images/collab/iitd.png",
    role: "Innovation Partner",
    location: "Kolkata",
  },
  {
    name: "Heritage Institute of Technology",
    logo: "/images/collab/iitd.png",
    role: "Research Partner",
    location: "Kolkata",
  },
];

export default function CollaborationsSection() {
  return (
    <section
      id="collaborations"
      className="relative py-12 md:py-16 text-white overflow-hidden"
    >
      {/* Header trapezium background (match other sections) */}
      <div className="absolute top-0 left-0 right-0 h-64 md:h-80 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath:
              "polygon(5% 0, 95% 0, 100% 15%, 85% 90%, 75% 100%, 25% 100%, 15% 90%, 0 15%)",
            WebkitClipPath:
              "polygon(5% 0, 95% 0, 100% 15%, 85% 90%, 75% 100%, 25% 100%, 15% 90%, 0 15%)",
          }}
        >
          <div className="absolute inset-0">
            <div className="absolute top-4 md:top-8 left-0 right-0 h-px bg-black opacity-60" />
            <div className="absolute top-8 md:top-16 left-0 right-0 h-px bg-black opacity-40" />
            <div className="absolute top-12 md:top-24 left-0 right-0 h-px bg-black opacity-30" />
            <div className="absolute top-16 md:top-32 left-0 right-0 h-px bg-black opacity-20" />

            <div className="absolute top-0 bottom-0 left-4 md:left-8 w-px bg-black opacity-60" />
            <div className="absolute top-0 bottom-0 left-8 md:left-16 w-px bg-black opacity-40" />
            <div className="absolute top-0 bottom-0 left-12 md:left-24 w-px bg-black opacity-30" />
            <div className="absolute top-0 bottom-0 left-16 md:left-32 w-px bg-black opacity-20" />
            <div className="absolute top-0 bottom-0 right-4 md:right-8 w-px bg-black opacity-60" />
            <div className="absolute top-0 bottom-0 right-8 md:right-16 w-px bg-black opacity-40" />
            <div className="absolute top-0 bottom-0 right-12 md:right-24 w-px bg-black opacity-30" />
            <div className="absolute top-0 bottom-0 right-16 md:right-32 w-px bg-black opacity-20" />

            <div className="absolute top-0 left-0 w-16 md:w-32 h-16 md:h-32 border-l-2 border-t-2 border-black opacity-40" />
            <div className="absolute top-0 right-0 w-16 md:w-32 h-16 md:h-32 border-r-2 border-t-2 border-black opacity-40" />
            <div className="absolute bottom-0 left-0 w-16 md:w-32 h-16 md:h-32 border-l-2 border-b-2 border-black opacity-40" />
            <div className="absolute bottom-0 right-0 w-16 md:w-32 h-16 md:h-32 border-r-2 border-b-2 border-black opacity-40" />
          </div>
        </div>
      </div>

      {/* Side accents to match other sections */}
      <div className="absolute left-0 top-1/4 w-12 md:w-20 h-48 md:h-64 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "polygon(0% 0%, 100% 15%, 100% 85%, 0% 100%)" }}
        >
          <div
            className="absolute top-1/2 left-0 w-full h-6 md:h-8 bg-black transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)" }}
          />
        </div>
      </div>
      <div className="absolute right-0 top-1/4 w-12 md:w-20 h-48 md:h-64 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "polygon(0% 15%, 100% 0%, 100% 100%, 0% 85%)" }}
        >
          <div
            className="absolute top-1/2 right-0 w-full h-6 md:h-8 bg-black transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header text overlaying trapezium */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-[5rem] lg:text-[6rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo"
          >
            COLLABORATIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-black max-w-3xl mx-auto mb-4 px-12 sm:px-0 md:mb-8 font-medium text-sm md:text-lg lg:text-xl"
            style={{ fontFamily: "Mokoto Demo" }}
          >
            Elite institutions unite in the digital warfare coalition across
            cyber-domains.
          </motion.p>
        </motion.div>

        {/* Content wrapper pushed down below header trapezium */}
        <div className="relative z-10 mt-44 sm:mt-20 md:mt-48 lg:mt-40 space-y-16 md:space-y-20">
          {/* Host Institution */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white font-sddystopiandemo">
                Host Institution
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="relative p-6">
                <div
                  className="absolute inset-0 bg-yellow-400 transition-all duration-300 group-hover:animate-pulse"
                  style={{
                    clipPath:
                      "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                  }}
                />
                <div
                  className="absolute -inset-1 bg-yellow-500 transition-all duration-300 group-hover:bg-orange-500"
                  style={{
                    clipPath:
                      "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                    zIndex: -1,
                  }}
                />

                <div className="relative z-10 flex flex-col md:flex-row items-center">
                  <div className="w-32 h-32 relative mb-6 md:mb-0 md:mr-8">
                    <Image
                      src="/images/collab/iitd.png"
                      alt="FIEM Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h4
                      className="text-2xl md:text-3xl font-bold text-black mb-2"
                      style={{ fontFamily: "'Mokoto Demo', monospace" }}
                    >
                      Future Institute of Engineering & Management
                    </h4>
                    <div className="w-16 h-1 bg-orange-500 mb-3 mx-auto md:mx-0" />
                    <p
                      className="text-lg text-black mb-1"
                      style={{ fontFamily: "'Mokoto Demo', monospace" }}
                    >
                      Sonarpur, Kolkata
                    </p>
                    <p
                      className="text-black"
                      style={{ fontFamily: "'Mokoto Demo', monospace" }}
                    >
                      Organizing Institution | ACM Student Chapter
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Partner Institutions */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white font-sddystopiandemo">
                Partner Institutions
              </h3>
              <p
                className="text-base md:text-lg text-white leading-relaxed px-2"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                Elite neural networks collaborating in the digital warfare
                protocol matrix
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
              {colleges
                .filter(
                  (c) =>
                    c.name !== "Future Institute of Engineering & Management"
                )
                .map((college, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative group cursor-pointer transition-all duration-300 hover:scale-105 h-full min-h-[280px]"
                  >
                    <div className="relative p-4 h-full">
                      <div
                        className="absolute inset-0 bg-yellow-400 transition-all duration-300 group-hover:animate-pulse"
                        style={{
                          clipPath:
                            "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                        }}
                      />
                      <div
                        className="absolute -inset-1 bg-yellow-500 transition-all duration-300 group-hover:bg-orange-500"
                        style={{
                          clipPath:
                            "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                          zIndex: -1,
                        }}
                      />

                      <div className="relative z-10 flex flex-col h-full items-center text-center">
                        <div className="w-24 h-24 relative mb-4">
                          <Image
                            src={college.logo}
                            alt={college.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h4
                          className="text-lg md:text-xl font-bold text-black mb-2"
                          style={{ fontFamily: "'Mokoto Demo', monospace" }}
                        >
                          {college.name}
                        </h4>
                        <div className="w-12 h-1 bg-orange-500 mb-3" />
                        <p
                          className="text-sm text-black mb-1"
                          style={{ fontFamily: "'Mokoto Demo', monospace" }}
                        >
                          {college.role}
                        </p>
                        <p
                          className="text-sm text-black mt-auto"
                          style={{ fontFamily: "'Mokoto Demo', monospace" }}
                        >
                          {college.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white font-sddystopiandemo">
                Neural Network Protocols
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-2">
              {[
                {
                  Icon: School,
                  title: "Academic Excellence",
                  body: "Elite engineering protocols and technology matrices converge from West Bengal's finest institutions, deploying top neural architects for this digital warfare.",
                },
                {
                  Icon: Users,
                  title: "Neural Community",
                  body: "Cross-institutional network deployment enables digital architects to forge autonomous connection protocols and build persistent professional matrices.",
                },
                {
                  Icon: BookOpen,
                  title: "Data Transmission",
                  body: "Partner institutions deploy faculty expertise algorithms, research insight protocols, and academic resource matrices to enhance digital warfare experience.",
                },
                {
                  Icon: Microscope,
                  title: "Innovation Nexus",
                  body: "United neural networks foster innovation culture matrices and problem-solving algorithms among engineering cyborgs across Kolkata's digital territories.",
                },
              ].map(({ Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative group cursor-pointer transition-all duration-300 hover:scale-105 h-full min-h-[220px]"
                >
                  <div className="relative p-4 h-full">
                    <div
                      className="absolute inset-0 bg-yellow-400 transition-all duration-300 group-hover:animate-pulse"
                      style={{
                        clipPath:
                          "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                      }}
                    />
                    <div
                      className="absolute -inset-1 bg-yellow-500 transition-all duration-300 group-hover:bg-orange-500"
                      style={{
                        clipPath:
                          "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                        zIndex: -1,
                      }}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="p-3 bg-black/20 rounded-lg mb-4 w-fit">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                      <h4
                        className="text-xl md:text-2xl font-bold text-black mb-2"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {title}
                      </h4>
                      <div className="w-16 h-1 bg-orange-500 mb-3" />
                      <p
                        className="text-black leading-relaxed flex-grow"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sddystopiandemo">
                Initialize Digital Coalition?
              </h3>
              <p
                className="text-white text-lg mb-8 max-w-2xl mx-auto"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                Join the neural network protocols organized by FIEM ACM Student
                Chapter
              </p>
              <CyberButton href="https://discord.gg/8qpHgECDH3">
                ACCESS PROTOCOL
              </CyberButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
