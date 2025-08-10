"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { School, Users, BookOpen, Microscope } from "lucide-react";
import {
  titleFadeIn,
  subtitleFadeIn,
  cardFadeInUp,
  cardFadeInUpStaggered,
} from "@/lib/motionVariants";
import {
  TITLE_CLASSES,
  SUBTITLE_CLASSES,
  SECTION_TITLE_CLASSES,
  CARD_TITLE_CLASSES,
  CONTAINER_CLASSES,
  GRID_CLASSES,
  BENEFITS_GRID_CLASSES,
  CENTER_CONTENT_CLASSES,
  CLIP_PATH_VARS,
  SECTION_SPACING,
  CONTENT_PADDING,
  CARD_BASE_CLASSES,
  CARD_MIN_HEIGHT_CLASSES,
  CARD_CONTENT_CLASSES,
  CARD_ICON_CLASSES,
} from "@/lib/styles";
import { CyberpunkContainer } from "@/components/ui/CyberpunkContainer";
import { MatrixBackground } from "@/components/ui/MatrixBackground";
import CyberButton from "@/components/ui/CyberButton";

function Collaboration() {
  // Sample college data
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

  return (
    <div
      className="min-h-screen text-white py-20 px-4 relative overflow-hidden"
      style={
        {
          // CSS variables for responsive clip-paths
          "--clip-path-trapezium": CLIP_PATH_VARS.trapezium,
          "--clip-path-corners": CLIP_PATH_VARS.corners,
          "--clip-path-left-trap": CLIP_PATH_VARS.leftTrap,
          "--clip-path-right-trap": CLIP_PATH_VARS.rightTrap,
          "--clip-path-left-trap-secondary": CLIP_PATH_VARS.leftTrapSecondary,
          "--clip-path-right-trap-secondary": CLIP_PATH_VARS.rightTrapSecondary,
        } as React.CSSProperties
      }
    >
      {/* Matrix Rain Background */}
      <MatrixBackground />

      {/* Yellow Trapezium Background with Responsive Clip-Path */}
      <div className="absolute top-0 left-0 right-0 h-96 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath: "var(--clip-path-trapezium)",
          }}
        >
          {/* PCB-like circuit patterns using percentage positioning */}
          <div className="absolute inset-0">
            {/* Horizontal traces */}
            <div className="absolute top-[8%] left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute top-[16%] left-0 right-0 h-px bg-black opacity-40"></div>
            <div className="absolute top-[24%] left-0 right-0 h-px bg-black opacity-30"></div>
            <div className="absolute top-[32%] left-0 right-0 h-px bg-black opacity-20"></div>

            {/* Vertical traces */}
            <div className="absolute top-0 bottom-0 left-[8%] w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 left-[16%] w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 left-[24%] w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 left-[32%] w-px bg-black opacity-20"></div>
            <div className="absolute top-0 bottom-0 right-[8%] w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 right-[16%] w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 right-[24%] w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 right-[32%] w-px bg-black opacity-20"></div>

            {/* Corner decorative borders using percentages */}
            <div className="absolute top-0 left-0 w-[20%] h-[20%] border-l-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute top-0 right-0 w-[20%] h-[20%] border-r-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-[20%] h-[20%] border-l-2 border-b-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-[20%] h-[20%] border-r-2 border-b-2 border-black opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Side Vertical Trapezium Shapes with Responsive Positioning */}
      <div className="absolute left-0 top-1/4 w-20 h-64 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "var(--clip-path-left-trap)" }}
        >
          {/* Cut in the middle */}
          <div
            className="absolute top-1/2 left-0 w-full h-8 bg-transparent transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 30%, 100% 0%, 100% 100%, 0% 70%)" }}
          ></div>

          {/* Circuit board patterns using percentage positioning */}
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-[3%] left-0 right-0 h-px bg-black opacity-70"></div>
            <div className="absolute top-[9%] left-0 right-0 h-px bg-black opacity-50"></div>
            <div className="absolute top-[15%] left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute bottom-[3%] left-0 right-0 h-px bg-black opacity-70"></div>
            <div className="absolute bottom-[9%] left-0 right-0 h-px bg-black opacity-50"></div>
            <div className="absolute bottom-[15%] left-0 right-0 h-px bg-black opacity-60"></div>

            <div className="absolute top-0 bottom-0 left-[10%] w-px bg-black opacity-70"></div>
            <div className="absolute top-0 bottom-0 left-[30%] w-px bg-black opacity-50"></div>
            <div className="absolute top-0 bottom-0 right-[10%] w-px bg-black opacity-70"></div>
            <div className="absolute top-0 bottom-0 right-[30%] w-px bg-black opacity-50"></div>

            <div className="absolute top-[6%] left-[20%] w-1 h-1 bg-black opacity-80 rounded-full"></div>
            <div className="absolute top-[12%] left-[40%] w-1 h-1 bg-black opacity-80 rounded-full"></div>
            <div className="absolute bottom-[6%] right-[20%] w-1 h-1 bg-black opacity-80 rounded-full"></div>
            <div className="absolute bottom-[12%] right-[40%] w-1 h-1 bg-black opacity-80 rounded-full"></div>
          </div>

          <div
            className="absolute top-1/3 right-0 w-4 h-12 bg-transparent"
            style={{ clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)" }}
          ></div>
        </div>
      </div>

      <div className="absolute left-0 bottom-1/4 w-16 h-48 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "var(--clip-path-left-trap-secondary)" }}
        >
          <div
            className="absolute top-1/2 left-0 w-full h-6 bg-transparent transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 25%, 100% 0%, 100% 100%, 0% 75%)" }}
          ></div>

          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-[6%] left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute top-[16%] left-0 right-0 h-px bg-black opacity-40"></div>
            <div className="absolute bottom-[6%] left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute bottom-[16%] left-0 right-0 h-px bg-black opacity-40"></div>

            <div className="absolute top-0 bottom-0 left-[18%] w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 right-[18%] w-px bg-black opacity-60"></div>

            <div className="absolute top-[12%] left-[37%] w-1 h-1 bg-black opacity-70 rounded-full"></div>
            <div className="absolute bottom-[12%] right-[37%] w-1 h-1 bg-black opacity-70 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-1/4 w-20 h-64 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "var(--clip-path-right-trap)" }}
        >
          <div
            className="absolute top-1/2 right-0 w-full h-8 bg-transparent transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 0%, 100% 30%, 100% 70%, 0% 100%)" }}
          ></div>

          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-[3%] left-0 right-0 h-px bg-black opacity-70"></div>
            <div className="absolute top-[9%] left-0 right-0 h-px bg-black opacity-50"></div>
            <div className="absolute top-[15%] left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute bottom-[3%] left-0 right-0 h-px bg-black opacity-70"></div>
            <div className="absolute bottom-[9%] left-0 right-0 h-px bg-black opacity-50"></div>
            <div className="absolute bottom-[15%] left-0 right-0 h-px bg-black opacity-60"></div>

            <div className="absolute top-0 bottom-0 left-[10%] w-px bg-black opacity-70"></div>
            <div className="absolute top-0 bottom-0 left-[30%] w-px bg-black opacity-50"></div>
            <div className="absolute top-0 bottom-0 right-[10%] w-px bg-black opacity-70"></div>
            <div className="absolute top-0 bottom-0 right-[30%] w-px bg-black opacity-50"></div>

            <div className="absolute top-[6%] left-[20%] w-1 h-1 bg-black opacity-80 rounded-full"></div>
            <div className="absolute top-[12%] left-[40%] w-1 h-1 bg-black opacity-80 rounded-full"></div>
            <div className="absolute bottom-[6%] right-[20%] w-1 h-1 bg-black opacity-80 rounded-full"></div>
            <div className="absolute bottom-[12%] right-[40%] w-1 h-1 bg-black opacity-80 rounded-full"></div>
          </div>

          <div
            className="absolute top-1/3 left-0 w-4 h-12 bg-transparent"
            style={{ clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)" }}
          ></div>
        </div>
      </div>

      <div className="absolute right-0 bottom-1/4 w-16 h-48 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "var(--clip-path-right-trap-secondary)" }}
        >
          <div
            className="absolute top-1/2 right-0 w-full h-6 bg-transparent transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 0%, 100% 25%, 100% 75%, 0% 100%)" }}
          ></div>

          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-[6%] left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute top-[16%] left-0 right-0 h-px bg-black opacity-40"></div>
            <div className="absolute bottom-[6%] left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute bottom-[16%] left-0 right-0 h-px bg-black opacity-40"></div>

            <div className="absolute top-0 bottom-0 left-[18%] w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 right-[18%] w-px bg-black opacity-60"></div>

            <div className="absolute top-[12%] left-[37%] w-1 h-1 bg-black opacity-70 rounded-full"></div>
            <div className="absolute bottom-[12%] right-[37%] w-1 h-1 bg-black opacity-70 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Centered Collaboration Title */}
        <div className={CENTER_CONTENT_CLASSES}>
          <motion.h1 {...titleFadeIn} className={`${TITLE_CLASSES} -ml-4`}>
            Collaborations
          </motion.h1>
          <motion.p
            {...subtitleFadeIn}
            className={`${SUBTITLE_CLASSES} -mt-4 pb-8 px-12 md:px-30`}
          >
            Elite institutions unite in the digital warfare coalition across
            cyber-domains.
            <br />
            Each partnership strengthens our neural network protocols and system
            supremacy.
          </motion.p>
        </div>

        {/* Host College Section */}
        <div className={`${CONTAINER_CLASSES} mt-40`}>
          <div className="text-center mb-12">
            <h2 className={SECTION_TITLE_CLASSES}>Host Institution</h2>
          </div>

          <motion.div {...cardFadeInUp()} viewport={{ once: true }}>
            <CyberpunkContainer className="transition-all duration-300 hover:scale-105">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-32 h-32 relative mb-6 md:mb-0 md:mr-8">
                  <Image
                    src="/images/collab/iitd.png"
                    alt="FIEM Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3
                    className={`${CARD_TITLE_CLASSES} text-2xl md:text-3xl`}
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Future Institute of Engineering & Management
                  </h3>
                  <div className="w-16 h-1 bg-orange-500 mb-3 mx-auto md:mx-0"></div>
                  <p
                    className="text-lg text-black mb-2 transition-all duration-300 group-hover:text-shadow-glow"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Sonarpur, Kolkata
                  </p>
                  <p
                    className="text-black leading-relaxed"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Organizing Institution | ACM Student Chapter
                  </p>
                </div>
              </div>
            </CyberpunkContainer>
          </motion.div>
        </div>

        {/* Partner Colleges Section */}
        <div
          className={`max-w-7xl mx-auto ${SECTION_SPACING} ${CONTENT_PADDING}`}
        >
          <div className="text-center mb-12">
            <h2 className={SECTION_TITLE_CLASSES}>Partner Institutions</h2>
            <p
              className="text-base md:text-lg text-white leading-relaxed px-2"
              style={{ fontFamily: "'Mokoto Demo', monospace" }}
            >
              Elite neural networks collaborating in the digital warfare
              protocol matrix
            </p>
          </div>

          <div className={GRID_CLASSES}>
            {colleges
              .filter(
                (c) => c.name !== "Future Institute of Engineering & Management"
              )
              .map((college, index) => (
                <motion.div
                  key={index}
                  {...cardFadeInUpStaggered(index)}
                  viewport={{ once: true }}
                  className={`${CARD_BASE_CLASSES} ${CARD_MIN_HEIGHT_CLASSES}`}
                >
                  <CyberpunkContainer className="h-full">
                    <div className={CARD_CONTENT_CLASSES}>
                      <div className={CARD_ICON_CLASSES}>
                        <Image
                          src={college.logo}
                          alt={college.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3
                        className={`${CARD_TITLE_CLASSES} text-lg md:text-xl`}
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {college.name}
                      </h3>
                      <div className="w-12 h-1 bg-orange-500 mb-3"></div>
                      <p
                        className="text-sm text-black mb-1 transition-all duration-300 group-hover:text-shadow-glow"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {college.role}
                      </p>
                      <p
                        className="text-sm text-black mt-auto leading-relaxed"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {college.location}
                      </p>
                    </div>
                  </CyberpunkContainer>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Collaboration Benefits Section */}
        <div className={CONTAINER_CLASSES}>
          <div className="text-center mb-12">
            <h2 className={SECTION_TITLE_CLASSES}>Neural Network Protocols</h2>
          </div>

          <div className={BENEFITS_GRID_CLASSES}>
            {[
              {
                icon: School,
                title: "Academic Excellence",
                description:
                  "Elite engineering protocols and technology matrices converge from West Bengal's finest institutions, deploying top neural architects for this digital warfare.",
              },
              {
                icon: Users,
                title: "Neural Community",
                description:
                  "Cross-institutional network deployment enables digital architects to forge autonomous connection protocols and build persistent professional matrices.",
              },
              {
                icon: BookOpen,
                title: "Data Transmission",
                description:
                  "Partner institutions deploy faculty expertise algorithms, research insight protocols, and academic resource matrices to enhance digital warfare experience.",
              },
              {
                icon: Microscope,
                title: "Innovation Nexus",
                description:
                  "United neural networks foster innovation culture matrices and problem-solving algorithms among engineering cyborgs across Kolkata's digital territories.",
              },
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  {...cardFadeInUpStaggered(index, 0.1)}
                  viewport={{ once: true }}
                  className={`${CARD_BASE_CLASSES} min-h-[220px]`}
                >
                  <CyberpunkContainer className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="p-3 bg-black/20 rounded-lg mb-4 w-fit">
                        <IconComponent className="w-8 h-8 text-black" />
                      </div>
                      <h3
                        className={CARD_TITLE_CLASSES}
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {benefit.title}
                      </h3>
                      <div className="w-16 h-1 bg-orange-500 mb-3"></div>
                      <p
                        className="text-black leading-relaxed flex-grow"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </CyberpunkContainer>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ACM Student Chapter Section */}
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            {...cardFadeInUp(0.2)}
            viewport={{ once: true }}
            className="text-center mt-2 relative z-10"
          >
            <h2 className={SECTION_TITLE_CLASSES}>
              Initialize Digital Coalition?
            </h2>
            <p
              className="text-white text-lg mb-8 max-w-2xl mx-auto font-mokoto"
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
  );
}

export default Collaboration;
