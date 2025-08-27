"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaBrain,
  FaGlobe,
  FaSeedling,
  FaRobot,
  FaGamepad,
  FaHeartbeat,
  FaLightbulb,
  FaExternalLinkAlt,
} from "react-icons/fa";
import CyberButton from "@/components/ui/CyberButton";

const themes = [
  {
    id: 1,
    title: "AI",
    subtitle: "Artificial Intelligence & Machine Learning",
    description:
      "Build intelligent systems using neural networks, computer vision, and natural language processing to solve real-world problems.",
    icon: FaBrain,
    challenges: [
      "Computer Vision",
      "Natural Language Processing",
      "Predictive Analytics",
      "Deep Learning Models",
    ],
  },
  {
    id: 2,
    title: "Blockchain",
    subtitle: "Decentralized Applications & Web3",
    description:
      "Create decentralized solutions using smart contracts, DeFi protocols, and blockchain technology for transparent systems.",
    icon: FaGlobe,
    challenges: [
      "Smart Contracts",
      "DeFi Applications",
      "NFT Platforms",
      "DAO Governance",
    ],
  },
  {
    id: 3,
    title: "Cybersecurity",
    subtitle: "Digital Security & Privacy Protection",
    description:
      "Develop security solutions to protect digital infrastructure from cyber threats and ensure data privacy.",
    icon: FaShieldAlt,
    challenges: [
      "Threat Detection",
      "Encryption Systems",
      "Network Security",
      "Vulnerability Assessment",
    ],
  },
  {
    id: 4,
    title: "Agriculture",
    subtitle: "Smart Farming & Sustainable Technology",
    description:
      "Innovate agricultural solutions using IoT, sensors, and data analytics to improve crop yield and sustainability.",
    icon: FaSeedling,
    challenges: [
      "Crop Monitoring",
      "Smart Irrigation",
      "Yield Prediction",
      "Soil Analysis",
    ],
  },
  {
    id: 5,
    title: "Robotics",
    subtitle: "Automation & Intelligent Machines",
    description:
      "Design robotic systems and automation solutions for manufacturing, healthcare, and everyday applications.",
    icon: FaRobot,
    challenges: [
      "Autonomous Navigation",
      "Human-Robot Interaction",
      "Industrial Automation",
      "Sensor Integration",
    ],
  },
  {
    id: 6,
    title: "Gaming",
    subtitle: "Interactive Entertainment & Virtual Worlds",
    description:
      "Create immersive gaming experiences using AR/VR, game engines, and interactive storytelling technologies.",
    icon: FaGamepad,
    challenges: [
      "Game Development",
      "AR/VR Experiences",
      "Multiplayer Systems",
      "Game AI",
    ],
  },
  {
    id: 7,
    title: "Healthcare",
    subtitle: "Medical Technology & Digital Health",
    description:
      "Develop healthcare solutions using telemedicine, medical devices, and health informatics to improve patient care.",
    icon: FaHeartbeat,
    challenges: [
      "Telemedicine Platforms",
      "Medical Diagnostics",
      "Health Monitoring",
      "Drug Discovery",
    ],
  },
  {
    id: 8,
    title: "Open Innovation",
    subtitle: "Creative Solutions & Novel Approaches",
    description:
      "Think outside the box and create innovative solutions that don't fit traditional categories. This track encourages creativity and novel problem-solving approaches.",
    icon: FaLightbulb,
    challenges: [
      "Creative Problem Solving",
      "Cross-Disciplinary Solutions",
      "Novel Technologies",
      "Innovation in Any Field",
    ],
  },
];

export default function ThemeClient() {
  return (
    <div className="min-h-screen text-white py-20 px-4 relative overflow-hidden">
      {/* Mobile-specific styles for sleek cards */}
      <style jsx>{`
        @media (max-width: 768px) {
          .track-card-mobile {
            min-height: 280px !important;
            padding: 16px !important;
          }

          .track-title {
            font-size: 1.5rem !important;
            line-height: 1.2 !important;
            margin-bottom: 8px !important;
          }

          .track-subtitle {
            font-size: 0.875rem !important;
            line-height: 1.3 !important;
            margin-bottom: 12px !important;
          }

          .track-description {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
            margin-bottom: 12px !important;
          }

          .track-challenges {
            font-size: 0.75rem !important;
          }
        }

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
      <div className="absolute top-0 left-0 right-0 h-64 sm:h-80 md:h-96 z-0">
        {/* Main trapezium with clip-path */}
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath:
              "polygon(5% 0, 95% 0, 100% 15%, 85% 90%, 75% 100%, 25% 100%, 15% 90%, 0 15%)",
            WebkitClipPath:
              "polygon(5% 0, 95% 0, 100% 15%, 85% 90%, 75% 100%, 25% 100%, 15% 90%, 0 15%)",
          }}
        >
          {/* PCB-like lines - Responsive */}
          <div className="absolute inset-0">
            {/* Horizontal lines */}
            <div className="absolute top-4 sm:top-6 md:top-8 left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute top-8 sm:top-12 md:top-16 left-0 right-0 h-px bg-black opacity-40"></div>
            <div className="absolute top-12 sm:top-18 md:top-24 left-0 right-0 h-px bg-black opacity-30"></div>
            <div className="absolute top-16 sm:top-24 md:top-32 left-0 right-0 h-px bg-black opacity-20"></div>

            {/* Vertical lines */}
            <div className="absolute top-0 bottom-0 left-4 sm:left-6 md:left-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 left-8 sm:left-12 md:left-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 left-12 sm:left-18 md:left-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 left-16 sm:left-24 md:left-32 w-px bg-black opacity-20"></div>
            <div className="absolute top-0 bottom-0 right-4 sm:right-6 md:right-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 right-8 sm:right-12 md:right-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 right-12 sm:right-18 md:right-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 right-16 sm:right-24 md:right-32 w-px bg-black opacity-20"></div>

            {/* Diagonal lines for futuristic effect - Responsive */}
            <div className="absolute top-0 left-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-l-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute top-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-r-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-l-2 border-b-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-r-2 border-b-2 border-black opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Multiple Left Side Vertical Trapezium Shapes - Copied from Contact Page */}
      <div className="absolute left-0 top-1/4 w-20 h-64 z-0">
        <div className="w-full h-full bg-yellow-400 relative left-trapezium-main">
          <div className="absolute top-1/2 left-0 w-full h-8 bg-transparent transform -translate-y-1/2 left-trapezium-cut"></div>
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-4 bottom-4 left-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-6 bottom-6 left-4 w-px bg-black opacity-60"></div>
            <div className="absolute top-8 bottom-8 left-6 w-px bg-black opacity-50"></div>
            <div className="absolute top-8 left-1 right-1 h-px bg-black opacity-65"></div>
            <div className="absolute top-16 left-2 right-2 h-px bg-black opacity-55"></div>
            <div className="absolute top-24 left-1 right-1 h-px bg-black opacity-50"></div>
            <div className="absolute top-32 left-2 right-2 h-px bg-black opacity-45"></div>
            <div className="absolute top-7 left-1 w-1 h-1 bg-black rounded-full opacity-70"></div>
            <div className="absolute top-15 left-3 w-1 h-1 bg-black rounded-full opacity-60"></div>
            <div className="absolute top-23 left-5 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-31 left-3 w-1 h-1 bg-black rounded-full opacity-50"></div>
            <div className="absolute top-12 left-2 w-2 h-0.5 bg-black opacity-55 rounded-sm"></div>
            <div className="absolute top-20 left-4 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-28 left-2 w-2.5 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-1/3 right-0 w-4 h-12 bg-transparent trapezium-cut-left"></div>
        </div>
      </div>

      <div className="absolute left-0 top-3/4 w-16 h-48 z-0">
        <div className="w-full h-full bg-yellow-400 relative left-trapezium-secondary">
          <div className="absolute top-1/2 left-0 w-full h-6 bg-transparent transform -translate-y-1/2 left-trapezium-cut-secondary"></div>
          <div className="absolute inset-0 opacity-55">
            <div className="absolute top-3 bottom-3 left-2 w-px bg-black opacity-65"></div>
            <div className="absolute top-5 bottom-5 left-4 w-px bg-black opacity-55"></div>
            <div className="absolute top-6 left-1 right-1 h-px bg-black opacity-60"></div>
            <div className="absolute top-12 left-2 right-2 h-px bg-black opacity-50"></div>
            <div className="absolute top-18 left-1 right-1 h-px bg-black opacity-45"></div>
            <div className="absolute top-5 left-1 w-1 h-1 bg-black rounded-full opacity-65"></div>
            <div className="absolute top-11 left-3 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-17 left-3 w-1 h-1 bg-black rounded-full opacity-50"></div>
            <div className="absolute top-9 left-2 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-15 left-3 w-2 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>
          <div className="absolute top-1/5 left-1/3 w-6 h-6 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-4/5 right-1/3 w-5 h-5 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      {/* Additional Left Side Shapes */}
      <div className="absolute left-0 top-1/2 w-12 h-32 z-0">
        <div className="w-full h-full bg-yellow-600/60 relative left-trapezium-small">
          <div className="absolute top-1/2 left-0 w-full h-4 bg-transparent transform -translate-y-1/2 left-trapezium-cut-small"></div>
          <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-3/4 right-1/2 w-3 h-3 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      <div className="absolute left-0 top-1/6 w-14 h-40 z-0">
        <div className="w-full h-full bg-yellow-500/70 relative left-trapezium-tiny">
          <div className="absolute top-1/2 left-0 w-full h-5 bg-transparent transform -translate-y-1/2 left-trapezium-cut-tiny"></div>
          <div className="absolute top-1/4 left-1/3 w-5 h-5 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      {/* Multiple Right Side Vertical Trapezium Shapes - Copied from Contact Page */}
      <div className="absolute right-0 top-1/4 w-20 h-64 z-0">
        <div className="w-full h-full bg-yellow-400 relative right-trapezium-main">
          <div className="absolute top-1/2 right-0 w-full h-8 bg-transparent transform -translate-y-1/2 right-trapezium-cut"></div>
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-4 bottom-4 right-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-6 bottom-6 right-4 w-px bg-black opacity-60"></div>
            <div className="absolute top-8 bottom-8 right-6 w-px bg-black opacity-50"></div>
            <div className="absolute top-8 left-1 right-1 h-px bg-black opacity-65"></div>
            <div className="absolute top-16 left-2 right-2 h-px bg-black opacity-55"></div>
            <div className="absolute top-24 left-1 right-1 h-px bg-black opacity-50"></div>
            <div className="absolute top-32 left-2 right-2 h-px bg-black opacity-45"></div>
            <div className="absolute top-7 right-1 w-1 h-1 bg-black rounded-full opacity-70"></div>
            <div className="absolute top-15 right-3 w-1 h-1 bg-black rounded-full opacity-60"></div>
            <div className="absolute top-23 right-5 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-31 right-3 w-1 h-1 bg-black rounded-full opacity-50"></div>
            <div className="absolute top-12 right-2 w-2 h-0.5 bg-black opacity-55 rounded-sm"></div>
            <div className="absolute top-20 right-4 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-28 right-2 w-2.5 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>
          <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-3/4 left-1/4 w-6 h-6 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-1/3 left-0 w-4 h-12 bg-transparent trapezium-cut-right"></div>
        </div>
      </div>

      <div className="absolute right-0 top-3/4 w-16 h-48 z-0">
        <div className="w-full h-full bg-yellow-400 relative right-trapezium-secondary">
          <div className="absolute top-1/2 right-0 w-full h-6 bg-transparent transform -translate-y-1/2 right-trapezium-cut-secondary"></div>
          <div className="absolute inset-0 opacity-55">
            <div className="absolute top-3 bottom-3 right-2 w-px bg-black opacity-65"></div>
            <div className="absolute top-5 bottom-5 right-4 w-px bg-black opacity-55"></div>
            <div className="absolute top-6 left-1 right-1 h-px bg-black opacity-60"></div>
            <div className="absolute top-12 left-2 right-2 h-px bg-black opacity-50"></div>
            <div className="absolute top-18 left-1 right-1 h-px bg-black opacity-45"></div>
            <div className="absolute top-5 right-1 w-1 h-1 bg-black rounded-full opacity-65"></div>
            <div className="absolute top-11 right-3 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-17 right-3 w-1 h-1 bg-black rounded-full opacity-50"></div>
            <div className="absolute top-9 right-2 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-15 right-3 w-2 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>
          <div className="absolute top-1/5 right-1/3 w-6 h-6 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-4/5 left-1/3 w-5 h-5 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      {/* Additional Right Side Shapes */}
      <div className="absolute right-0 top-1/2 w-12 h-32 z-0">
        <div className="w-full h-full bg-yellow-600/60 relative right-trapezium-small">
          <div className="absolute top-1/2 right-0 w-full h-4 bg-transparent transform -translate-y-1/2 right-trapezium-cut-small"></div>
          <div className="absolute top-1/4 right-1/2 w-4 h-4 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-3/4 left-1/2 w-3 h-3 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      <div className="absolute right-0 top-1/6 w-14 h-40 z-0">
        <div className="w-full h-full bg-yellow-500/70 relative right-trapezium-tiny">
          <div className="absolute top-1/2 right-0 w-full h-5 bg-transparent transform -translate-y-1/2 right-trapezium-cut-tiny"></div>
          <div className="absolute top-1/4 right-1/3 w-5 h-5 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      {/* Centered Themes Title */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bold text-black font-sddystopiandemo"
        >
          THEMES
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto -mt-4 pb-8 text-xs sm:text-sm md:text-lg lg:text-xl text-black leading-relaxed font-mokoto px-6 sm:px-12 md:px-20"
        >
          <span className="hidden md:inline">
            Choose your digital warfare arena across four cyber-domains where
            innovation shapes reality. Each path unlocks hardcore challenges and
            system-breaking potential.
          </span>
          <span className="md:hidden">
            Choose your innovation theme and build the future with cutting-edge
            technology.
          </span>
        </motion.p>
      </div>

      {/* Theme Cards */}
      <div className="max-w-7xl mx-auto mt-32 sm:mt-40 md:mt-20 mb-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-4 2xl:gap-20">
          {themes.map((theme, index) => {
            const IconComponent = theme.icon;

            return (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Cyberpunk Yellow Container with Clip-Path Cut Edges - Sleek Size */}
                <div className="relative p-4 md:p-6 group cursor-pointer transition-all xl:scale-75 2xl:scale-90 2xl:hover:scale-95 xl:w-[480px] xl:h-[480px] xl:-translate-x-12 2xl:-translate-x-14 md:w-[450px] md:mx-auto duration-300  hover:scale-105 xl:hover:scale-90 h-full min-h-[280px] md:min-h-[200px] theme-card-mobile">
                  {/* Background with clip-path cuts */}
                  <div
                    className="absolute inset-0 bg-yellow-400 transition-all duration-300 group-hover:animate-pulse"
                    style={{
                      clipPath:
                        "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                    }}
                  ></div>

                  {/* Border with clip-path cuts */}
                  <div
                    className="absolute -inset-1 bg-yellow-500 transition-all duration-300 group-hover:bg-orange-500"
                    style={{
                      clipPath:
                        "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                      zIndex: -1,
                    }}
                  ></div>

                  {/* Glitch overlays for hover effect */}
                  <div
                    className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150"
                    style={{
                      clipPath:
                        "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                      mixBlendMode: "screen",
                      transform: "translateX(-2px)",
                      zIndex: 1,
                    }}
                  ></div>

                  <div
                    className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150"
                    style={{
                      clipPath:
                        "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                      mixBlendMode: "screen",
                      transform: "translateX(2px)",
                      zIndex: 2,
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Left Side - Icon and Title */}
                    <div className="mb-4 md:mb-0 md:pr-6">
                      {/* Theme Header with Icon and Visit Link */}
                      <div className="flex items-start justify-between mb-3 md:mb-4">
                        <div className="p-2 md:p-3 bg-black/20 rounded-lg">
                          <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-black" />
                        </div>

                        {/* Visit Link Icon - Top Right Corner */}
                        <a
                          href={`https://en.wikipedia.org/wiki/${theme.title.replace(
                            " ",
                            "_"
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/20 text-black hover:bg-black/30 transition-all duration-200 hover:scale-110"
                          title={`Learn more about ${theme.title}`}
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Theme Title */}
                      <h3
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 md:mb-3 track-title"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {theme.title}
                      </h3>

                      {/* Theme Subtitle */}
                      <p
                        className="text-sm md:text-base text-black font-medium mb-3 track-subtitle"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {theme.subtitle}
                      </p>
                    </div>

                    {/* Right Side - Description and Challenges */}
                    <div className="flex flex-col h-full">
                      {/* Theme Description */}
                      <p
                        className="text-xs md:text-sm text-black leading-relaxed mb-4 lg:flex-grow track-description"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {theme.description}
                      </p>

                      {/* Key Areas */}
                      <div>
                        <h4
                          className="text-xs md:text-sm font-bold text-black mb-2 track-challenges"
                          style={{ fontFamily: "'Mokoto Demo', monospace" }}
                        >
                          Key Areas:
                        </h4>
                        <div className="grid grid-cols-2 gap-1 md:gap-2">
                          {theme.challenges.map((challenge, idx) => (
                            <div
                              key={idx}
                              className="text-xs md:text-sm text-black bg-black/10 px-2 py-1 rounded theme-challenges"
                              style={{ fontFamily: "'Mokoto Demo', monospace" }}
                            >
                              {challenge}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-16 md:mt-20 relative z-10">
        <div
          className="relative overflow-hidden bg-gradient-to-br from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 p-6 md:p-8 text-center group hover:border-yellow-400/60 transition-all duration-300"
          style={{
            clipPath:
              "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
          }}
        >
          {/* Cyberpunk Circuit Overlay */}
          <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            <div className="absolute top-2 left-2 w-12 h-px bg-yellow-400 opacity-60"></div>
            <div className="absolute top-2 left-2 w-px h-12 bg-yellow-400 opacity-60"></div>
            <div className="absolute bottom-2 right-2 w-12 h-px bg-yellow-400 opacity-60"></div>
            <div className="absolute bottom-2 right-2 w-px h-12 bg-yellow-400 opacity-60"></div>
          </div>

          <h3
            className="text-2xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            Ready to Build the Future?
          </h3>
          <p
            className="text-yellow-300 mb-8 max-w-2xl mx-auto text-sm md:text-lg"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            Choose your theme and start building innovative solutions that will
            shape tomorrow's technology landscape.
          </p>
          <CyberButton href="/register">
            <span className="flex items-center gap-3">Register Now</span>
          </CyberButton>
        </div>
      </div>
    </div>
  );
}
