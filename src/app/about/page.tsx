"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Building2, Rocket, Users, Lightbulb } from "lucide-react";
import CyberButton from "@/components/ui/CyberButton";
import { TrapeziumShape } from "@/components/ui/TrapeziumShape";
import { CircuitOverlay } from "@/components/ui/CircuitOverlay";
import {
  aboutTitleAnimation,
  aboutSubtitleAnimation,
  aboutLogoAnimation,
  aboutSectionAnimation,
  aboutFeatureStaggered,
  aboutVisionAnimation,
  aboutCallToActionAnimation,
} from "@/lib/motionVariants";
import {
  ABOUT_TITLE_CLASSES,
  ABOUT_SUBTITLE_CLASSES,
  ABOUT_SECTION_TITLE_CLASSES,
  ABOUT_SECTION_TEXT_CLASSES,
  ABOUT_FEATURE_TITLE_CLASSES,
  ABOUT_FEATURE_TEXT_CLASSES,
  ABOUT_VISION_TITLE_CLASSES,
  ABOUT_VISION_TEXT_CLASSES,
  ABOUT_VISION_QUOTE_CLASSES,
  ABOUT_CTA_TITLE_CLASSES,
  ABOUT_CTA_TEXT_CLASSES,
  ABOUT_CONTAINER_CLASSES,
  ABOUT_CYBERPUNK_BG_CLASSES,
  ABOUT_CYBERPUNK_BORDER_CLASSES,
  ABOUT_CONTENT_WRAPPER_CLASSES,
  ABOUT_CONTENT_WRAPPER_SMALL_CLASSES,
  ABOUT_ICON_CONTAINER_CLASSES,
  ABOUT_CLIP_PATHS,
} from "@/lib/styles";

function About() {
  return (
    <div
      className="min-h-screen text-white py-20 px-4 relative overflow-hidden"
      style={
        {
          "--clip-path-main-trap": ABOUT_CLIP_PATHS.mainTrapezium,
          "--clip-path-corner-cuts": ABOUT_CLIP_PATHS.cornerCuts,
          "--clip-path-left-trap-main": ABOUT_CLIP_PATHS.leftTrapMain,
          "--clip-path-left-trap-secondary": ABOUT_CLIP_PATHS.leftTrapSecondary,
          "--clip-path-right-trap-main": ABOUT_CLIP_PATHS.rightTrapMain,
          "--clip-path-right-trap-secondary":
            ABOUT_CLIP_PATHS.rightTrapSecondary,
        } as React.CSSProperties
      }
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Matrix Rain Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Dynamic CSS for matrix columns */}
          <style>
            {Array.from({ length: 50 })
              .map((_, i) => {
                const delay = Math.random() * 5;
                const duration = 3 + Math.random() * 4;
                return `.matrix-column-${i} {
                left: ${i * 2}%;
                animation-delay: ${delay}s;
                animation-duration: ${duration}s;
              }`;
              })
              .join("\n")}
          </style>

          {/* Matrix columns */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`absolute top-0 text-green-400 font-mono text-xs leading-none matrix-column-animated matrix-column-${i}`}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="opacity-70">
                  {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Yellow Trapezium Background with Clip-Path - Responsive */}
      <div className="absolute top-0 left-0 right-0 h-80 sm:h-96 md:h-[28rem] z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "var(--clip-path-main-trap)" }}
        >
          <CircuitOverlay variant="main" opacity="medium" />
        </div>
      </div>

      {/* Side Trapezium Shapes using TrapeziumShape component */}
      <div className="absolute left-0 top-1/4 w-20 h-64 z-0">
        <TrapeziumShape variant="left-main" />
      </div>
      <div className="absolute left-0 top-3/4 w-16 h-48 z-0">
        <TrapeziumShape variant="left-secondary" />
      </div>
      <div className="absolute right-0 top-1/4 w-20 h-64 z-0">
        <TrapeziumShape variant="right-main" />
      </div>
      <div className="absolute right-0 top-3/4 w-16 h-48 z-0">
        <TrapeziumShape variant="right-secondary" />
      </div>
      <div className="absolute left-0 top-1/2 w-12 h-32 z-0">
        <TrapeziumShape variant="left-small" />
      </div>
      <div className="absolute left-0 top-1/6 w-14 h-40 z-0">
        <TrapeziumShape variant="left-small" />
      </div>
      <div className="absolute right-0 top-1/2 w-12 h-32 z-0">
        <TrapeziumShape variant="right-small" />
      </div>
      <div className="absolute right-0 top-1/6 w-14 h-40 z-0">
        <TrapeziumShape variant="right-small" />
      </div>

      {/* Centered About Title */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1 {...aboutTitleAnimation} className={ABOUT_TITLE_CLASSES}>
          About
        </motion.h1>
        <motion.p
          {...aboutSubtitleAnimation}
          className={ABOUT_SUBTITLE_CLASSES}
        >
          Where ancient wisdom converges with digital evolution, and cultural
          heritage fuels technological breakthroughs.
          <br />
          Experience the fusion of Bengal's spiritual essence with cutting-edge
          computational power.
        </motion.p>
      </div>

      {/* Logo Section */}
      <motion.div
        {...aboutLogoAnimation}
        className="text-center mb-20 relative z-10"
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
      <div className="max-w-4xl mx-auto mb-20 relative z-10">
        <motion.div
          {...aboutSectionAnimation}
          className={ABOUT_CONTAINER_CLASSES}
        >
          {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
          <div
            className={ABOUT_CYBERPUNK_BG_CLASSES}
            style={{ clipPath: "var(--clip-path-corner-cuts)" }}
          ></div>

          {/* Border with clip-path cuts */}
          <div
            className={ABOUT_CYBERPUNK_BORDER_CLASSES}
            style={{
              clipPath: "var(--clip-path-corner-cuts)",
              zIndex: -1,
            }}
          ></div>

          {/* Content */}
          <div className={ABOUT_CONTENT_WRAPPER_CLASSES}>
            <h2 className={ABOUT_SECTION_TITLE_CLASSES}>About the Theme</h2>
            <p className={ABOUT_SECTION_TEXT_CLASSES}>
              <span className="text-orange-600 font-semibold">
                HACKSPIRE 2025
              </span>{" "}
              orchestrates the convergence of Bengal's spiritual matrix with
              advanced computational paradigms. Just as{" "}
              <span className="text-orange-600 font-bold">Ma Durga</span>{" "}
              neutralizes digital corruption, our neural architects deploy
              innovative algorithms to dismantle real-world system
              vulnerabilities through collaborative intelligence and strategic
              code execution.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Key Features Section */}
      <div className="max-w-6xl mx-auto mb-20 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sddystopiandemo">
            What Makes Us Special
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Building2,
              title: "CULTURAL MATRIX",
              description:
                "Synthesizing Bengal's ancient wisdom protocols with quantum computational frameworks",
            },
            {
              icon: Rocket,
              title: "NEURAL INNOVATION",
              description:
                "Deploying advanced AI neural networks, blockchain consensus mechanisms, and Web3 decentralized architectures",
            },
            {
              icon: Users,
              title: "COLLECTIVE INTELLIGENCE",
              description:
                "Establishing neural network connections and fostering collaborative algorithmic development among elite coders",
            },
            {
              icon: Lightbulb,
              title: "SYSTEM IMPACT",
              description:
                "Engineering solutions that penetrate real-world system vulnerabilities and generate measurable digital transformation",
            },
          ].map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={index}
                {...aboutFeatureStaggered(index)}
                className="relative"
              >
                {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
                <div className="relative p-4 group cursor-pointer transition-all duration-300 hover:scale-105 h-full">
                  {/* Background with clip-path cuts */}
                  <div
                    className={ABOUT_CYBERPUNK_BG_CLASSES}
                    style={{ clipPath: "var(--clip-path-corner-cuts)" }}
                  ></div>

                  {/* Border with clip-path cuts */}
                  <div
                    className={ABOUT_CYBERPUNK_BORDER_CLASSES}
                    style={{
                      clipPath: "var(--clip-path-corner-cuts)",
                      zIndex: -1,
                    }}
                  ></div>

                  {/* Content */}
                  <div className={ABOUT_CONTENT_WRAPPER_SMALL_CLASSES}>
                    <div className={ABOUT_ICON_CONTAINER_CLASSES}>
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                    <h3 className={ABOUT_FEATURE_TITLE_CLASSES}>
                      {feature.title}
                    </h3>
                    <p className={ABOUT_FEATURE_TEXT_CLASSES}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-4xl mx-auto mb-20 relative z-10">
        <motion.div {...aboutVisionAnimation} className="text-center">
          <h2 className={ABOUT_VISION_TITLE_CLASSES}>Our Vision</h2>
          <div className={ABOUT_CONTAINER_CLASSES}>
            {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
            <div
              className={ABOUT_CYBERPUNK_BG_CLASSES}
              style={{ clipPath: "var(--clip-path-corner-cuts)" }}
            ></div>

            {/* Border with clip-path cuts */}
            <div
              className={ABOUT_CYBERPUNK_BORDER_CLASSES}
              style={{
                clipPath: "var(--clip-path-corner-cuts)",
                zIndex: -1,
              }}
            ></div>

            {/* Content */}
            <div className={ABOUT_CONTENT_WRAPPER_CLASSES}>
              <p className={ABOUT_VISION_TEXT_CLASSES}>
                To architect a digital ecosystem where computational
                intelligence serves human consciousness, where algorithmic
                innovation is guided by ancient wisdom protocols, and where the
                spirit of{" "}
                <span className="text-orange-600 font-bold">Ma Durga's</span>{" "}
                neural resilience inspires code architects to engineer solutions
                that penetrate the fabric of reality.
              </p>
              <p className={ABOUT_VISION_QUOTE_CLASSES}>
                "EXECUTE | SYNTHESIZE | DOMINATE - Where ancient wisdom
                converges with quantum computation"
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div {...aboutCallToActionAnimation}>
          <h2 className={ABOUT_CTA_TITLE_CLASSES}>
            READY TO INITIALIZE THE DIGITAL UPRISING?
          </h2>
          <p className={ABOUT_CTA_TEXT_CLASSES}>
            Deploy your neural architecture in HACKSPIRE 2025 and help us
            engineer the future through quantum computation and ancient wisdom
          </p>

          {/* Cyberpunk Register Button */}
          <CyberButton href="https://discord.gg/8qpHgECDH3">
            ACCESS PROTOCOL
          </CyberButton>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
