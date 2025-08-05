"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Rocket,
  Users,
  Lightbulb,
  Shield,
  Brain,
  Globe,
  Leaf,
} from "lucide-react";
import CyberButton from "@/components/ui/CyberButton";

function About() {
  return (
    <div className="min-h-screen text-white py-20 px-4 relative overflow-hidden">
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

      {/* Multiple Left Side Vertical Trapezium Shapes - Attached to Screen Edge */}
      <div className="absolute left-0 top-1/4 w-20 h-64 z-0">
        <div className="w-full h-full bg-yellow-400 relative left-trapezium-main">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 left-0 w-full h-8 bg-transparent transform -translate-y-1/2 left-trapezium-cut"></div>

          {/* Circuit board patterns for left trapezium */}
          <div className="absolute inset-0 opacity-60">
            {/* Vertical circuit traces */}
            <div className="absolute top-4 bottom-4 left-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-6 bottom-6 left-4 w-px bg-black opacity-60"></div>
            <div className="absolute top-8 bottom-8 left-6 w-px bg-black opacity-50"></div>

            {/* Horizontal connecting traces */}
            <div className="absolute top-8 left-1 right-1 h-px bg-black opacity-65"></div>
            <div className="absolute top-16 left-2 right-2 h-px bg-black opacity-55"></div>
            <div className="absolute top-24 left-1 right-1 h-px bg-black opacity-50"></div>
            <div className="absolute top-32 left-2 right-2 h-px bg-black opacity-45"></div>

            {/* Connection nodes */}
            <div className="absolute top-7 left-1 w-1 h-1 bg-black rounded-full opacity-70"></div>
            <div className="absolute top-15 left-3 w-1 h-1 bg-black rounded-full opacity-60"></div>
            <div className="absolute top-23 left-5 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-31 left-3 w-1 h-1 bg-black rounded-full opacity-50"></div>

            {/* Small components */}
            <div className="absolute top-12 left-2 w-2 h-0.5 bg-black opacity-55 rounded-sm"></div>
            <div className="absolute top-20 left-4 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-28 left-2 w-2.5 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>

          {/* Additional transparent cuts */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-1/3 right-0 w-4 h-12 bg-transparent trapezium-cut-left"></div>
        </div>
      </div>

      <div className="absolute left-0 top-3/4 w-16 h-48 z-0">
        <div className="w-full h-full bg-yellow-400 relative left-trapezium-secondary">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 left-0 w-full h-6 bg-transparent transform -translate-y-1/2 left-trapezium-cut-secondary"></div>

          {/* Circuit patterns for second left trapezium */}
          <div className="absolute inset-0 opacity-55">
            {/* Vertical traces */}
            <div className="absolute top-3 bottom-3 left-2 w-px bg-black opacity-65"></div>
            <div className="absolute top-5 bottom-5 left-4 w-px bg-black opacity-55"></div>

            {/* Horizontal traces */}
            <div className="absolute top-6 left-1 right-1 h-px bg-black opacity-60"></div>
            <div className="absolute top-12 left-2 right-2 h-px bg-black opacity-50"></div>
            <div className="absolute top-18 left-1 right-1 h-px bg-black opacity-45"></div>

            {/* Connection nodes */}
            <div className="absolute top-5 left-1 w-1 h-1 bg-black rounded-full opacity-65"></div>
            <div className="absolute top-11 left-3 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-17 left-3 w-1 h-1 bg-black rounded-full opacity-50"></div>

            {/* Components */}
            <div className="absolute top-9 left-2 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-15 left-3 w-2 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>

          {/* Additional transparent cuts */}
          <div className="absolute top-1/5 left-1/3 w-6 h-6 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-4/5 right-1/3 w-5 h-5 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      {/* Multiple Right Side Vertical Trapezium Shapes - Attached to Screen Edge */}
      <div className="absolute right-0 top-1/4 w-20 h-64 z-0">
        <div className="w-full h-full bg-yellow-400 relative right-trapezium-main">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-8 bg-transparent transform -translate-y-1/2 right-trapezium-cut"></div>

          {/* Circuit board patterns for right trapezium */}
          <div className="absolute inset-0 opacity-60">
            {/* Vertical circuit traces (mirrored for right side) */}
            <div className="absolute top-4 bottom-4 right-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-6 bottom-6 right-4 w-px bg-black opacity-60"></div>
            <div className="absolute top-8 bottom-8 right-6 w-px bg-black opacity-50"></div>

            {/* Horizontal connecting traces */}
            <div className="absolute top-8 left-1 right-1 h-px bg-black opacity-65"></div>
            <div className="absolute top-16 left-2 right-2 h-px bg-black opacity-55"></div>
            <div className="absolute top-24 left-1 right-1 h-px bg-black opacity-50"></div>
            <div className="absolute top-32 left-2 right-2 h-px bg-black opacity-45"></div>

            {/* Connection nodes */}
            <div className="absolute top-7 right-1 w-1 h-1 bg-black rounded-full opacity-70"></div>
            <div className="absolute top-15 right-3 w-1 h-1 bg-black rounded-full opacity-60"></div>
            <div className="absolute top-23 right-5 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-31 right-3 w-1 h-1 bg-black rounded-full opacity-50"></div>

            {/* Small components */}
            <div className="absolute top-12 right-2 w-2 h-0.5 bg-black opacity-55 rounded-sm"></div>
            <div className="absolute top-20 right-4 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-28 right-2 w-2.5 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>

          {/* Additional transparent cuts */}
          <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-3/4 left-1/4 w-6 h-6 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-1/3 left-0 w-4 h-12 bg-transparent trapezium-cut-right"></div>
        </div>
      </div>

      <div className="absolute right-0 top-3/4 w-16 h-48 z-0">
        <div className="w-full h-full bg-yellow-400 relative right-trapezium-secondary">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-6 bg-transparent transform -translate-y-1/2 right-trapezium-cut-secondary"></div>

          {/* Circuit patterns for second right trapezium */}
          <div className="absolute inset-0 opacity-55">
            {/* Vertical traces (right side) */}
            <div className="absolute top-3 bottom-3 right-2 w-px bg-black opacity-65"></div>
            <div className="absolute top-5 bottom-5 right-4 w-px bg-black opacity-55"></div>

            {/* Horizontal traces */}
            <div className="absolute top-6 left-1 right-1 h-px bg-black opacity-60"></div>
            <div className="absolute top-12 left-2 right-2 h-px bg-black opacity-50"></div>
            <div className="absolute top-18 left-1 right-1 h-px bg-black opacity-45"></div>

            {/* Connection nodes */}
            <div className="absolute top-5 right-1 w-1 h-1 bg-black rounded-full opacity-65"></div>
            <div className="absolute top-11 right-3 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-17 right-3 w-1 h-1 bg-black rounded-full opacity-50"></div>

            {/* Components */}
            <div className="absolute top-9 right-2 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-15 right-3 w-2 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>

          {/* Additional transparent cuts */}
          <div className="absolute top-1/5 right-1/3 w-6 h-6 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-4/5 left-1/3 w-5 h-5 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      {/* Additional Left Side Shapes */}
      <div className="absolute left-0 top-1/2 w-12 h-32 z-0">
        <div className="w-full h-full bg-yellow-600/60 relative left-trapezium-small">
          {/* Small cut in the middle */}
          <div className="absolute top-1/2 left-0 w-full h-4 bg-transparent transform -translate-y-1/2 left-trapezium-cut-small"></div>
          {/* Additional small cuts */}
          <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-3/4 right-1/2 w-3 h-3 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      <div className="absolute left-0 top-1/6 w-14 h-40 z-0">
        <div className="w-full h-full bg-yellow-500/70 relative left-trapezium-tiny">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 left-0 w-full h-5 bg-transparent transform -translate-y-1/2 left-trapezium-cut-tiny"></div>
          {/* Additional cuts */}
          <div className="absolute top-1/4 left-1/3 w-5 h-5 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      {/* Additional Right Side Shapes */}
      <div className="absolute right-0 top-1/2 w-12 h-32 z-0">
        <div className="w-full h-full bg-yellow-600/60 relative right-trapezium-small">
          {/* Small cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-4 bg-transparent transform -translate-y-1/2 right-trapezium-cut-small"></div>
          {/* Additional small cuts */}
          <div className="absolute top-1/4 right-1/2 w-4 h-4 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-3/4 left-1/2 w-3 h-3 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      <div className="absolute right-0 top-1/6 w-14 h-40 z-0">
        <div className="w-full h-full bg-yellow-500/70 relative right-trapezium-tiny">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-5 bg-transparent transform -translate-y-1/2 right-trapezium-cut-tiny"></div>
          {/* Additional cuts */}
          <div className="absolute top-1/4 right-1/3 w-5 h-5 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      {/* Centered About Title */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-8xl md:text-[10rem] lg:text-[12rem] font-bold text-black font-sddystopiandemo"
        >
          About
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto -mt-4 pb-8 text-lg md:text-xl text-black leading-relaxed font-mokoto"
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
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative p-4 group cursor-pointer transition-all duration-300 hover:scale-105"
        >
          {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
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

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-sddystopiandemo">
              About the Theme
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-black max-w-3xl mx-auto font-mokoto">
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
                <div className="relative p-4 group cursor-pointer transition-all duration-300 hover:scale-105 h-full">
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

                  {/* Content */}
                  <div className="relative z-10 p-8">
                    <div className="p-3 bg-black/20 rounded-lg w-fit mb-4">
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4 font-sddystopiandemo">
                      {feature.title}
                    </h3>
                    <p className="text-black leading-relaxed font-mokoto">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-sddystopiandemo">
            Our Vision
          </h2>
          <div className="relative p-4 group cursor-pointer transition-all duration-300 hover:scale-105">
            {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
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

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12">
              <p className="text-xl md:text-2xl leading-relaxed text-black mb-6 font-mokoto">
                To architect a digital ecosystem where computational
                intelligence serves human consciousness, where algorithmic
                innovation is guided by ancient wisdom protocols, and where the
                spirit of{" "}
                <span className="text-orange-600 font-bold">Ma Durga's</span>{" "}
                neural resilience inspires code architects to engineer solutions
                that penetrate the fabric of reality.
              </p>
              <p className="text-lg text-black italic font-mokoto">
                "EXECUTE | SYNTHESIZE | DOMINATE - Where ancient wisdom
                converges with quantum computation"
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sddystopiandemo">
            READY TO INITIALIZE THE DIGITAL UPRISING?
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-mokoto">
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
