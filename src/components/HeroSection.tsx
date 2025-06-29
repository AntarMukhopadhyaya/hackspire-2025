"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import DecryptedText from "./blocks/TextAnimations/DecryptedText/DecryptedText";
import { useEffect, useState } from "react";

export default function HeroSection() {
  // Add looping decrypted text logic
  const decryptedTexts = [
    "AI & Machine Learning",
    "Blockchain Revolution",
    "Web3 & Decentralization",
    "Cybersecurity",
    "Quantum Computing",
    "Sustainable Tech",
    "Hackspire 2025",
  ];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % decryptedTexts.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Multi-line decrypted text block (now for looping)
  const decryptedLines = [
    "Blockchain is revolutionizing trust.",
    "AI powers the future of innovation.",
    "Machine Learning enables smart solutions.",
    "Web3 decentralizes the internet.",
    "Cybersecurity protects our data.",
    "Quantum Computing breaks new ground.",
    "Sustainable Tech shapes tomorrow.",
    "Hackspire 2025 ignites ideas.",
  ];

  // Looping decrypt/encrypt logic
  const [showDecrypted, setShowDecrypted] = useState(true);
  const [phase, setPhase] = useState<"decrypting" | "hold" | "encrypting">(
    "decrypting"
  );

  // Animation timing
  const decryptSpeed = 90;
  const encryptSpeed = 60;
  const decryptIterations = 24;
  const encryptIterations = 16;
  const holdDuration = 1500; // ms to show fully revealed text

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (phase === "decrypting") {
      // Wait for decrypt animation to finish, then hold
      timeout = setTimeout(
        () => setPhase("hold"),
        decryptIterations * decryptSpeed
      );
    } else if (phase === "hold") {
      // Hold fully revealed text
      timeout = setTimeout(() => setPhase("encrypting"), holdDuration);
    } else if (phase === "encrypting") {
      // Wait for encrypt animation, then next text
      timeout = setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % decryptedLines.length);
        setPhase("decrypting");
      }, encryptIterations * encryptSpeed);
    }
    return () => clearTimeout(timeout);
  }, [phase, decryptedLines.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* Background and Durga projection (absolute, layered) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* West Bengal SVG Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="relative w-full h-full max-w-7xl">
            <Image
              src="/images/westbengal.svg"
              alt="West Bengal"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* Holographic Durga projection */}
        {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
          <div className="relative w-full h-full">
            <Image
              src="/images/durga.svg"
              alt="Holographic Durga"
              fill
              className="object-contain opacity-70 durga-holographic"
              priority
            />
            <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_0%)]"></div>
          </div>
        </div> */}
      </div>

      {/* Hero Text (centered vertically and horizontally) */}
      <div className="relative z-30 flex flex-col items-center justify-center w-full h-full">
        <div className="text-center px-4 w-full max-w-5xl mx-auto">
          {/* Hero Title Block: Logo, HACKSPIRE 2025, CODE | CREATE | CONQUER all perfectly centered as a group */}
          <h1 className="flex items-center justify-center gap-2 text-5xl md:text-7xl lg:text-8xl font-bold -mb-10 relative text-white animate-pulse hero-title leading-none">
            <img
              src="/icons/logoicon.svg"
              alt="Hackspire Logo Icon"
              className="inline-block align-middle h-[4.5rem] md:h-[6rem] lg:h-[12rem] w-auto -mr-8"
              draggable="false"
            />
            <span className="align-middle">HACKSPIRE 2025</span>
          </h1>
          {/* CODE | CREATE | CONQUER text with Cocobiker font */}
          <div className="text-center mb-8">
            <p
              className="text-white text-[26px] font-bold animate-pulse "
              style={{ fontFamily: "CocoBiker, sans-serif" }}
            >
              CODE | CREATE | CONQUER
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold space-y-1"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
              Where <span className="text-white font-bold">Tradition</span>
              Meets <span className="text-white font-bold">Innovation</span>
            </p>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 rounded-full shadow-md" />

            {/* DecryptedText Looping Area (centered under tagline) */}
            <div className="hidden lg:flex w-full justify-center items-center mt-4 pointer-events-none">
              <div
                className="relative w-auto min-w-[220px] max-w-[90vw] flex items-center justify-center"
                style={{ pointerEvents: "auto" }}
              >
                <DecryptedText
                  key={currentIdx + "-" + phase}
                  text={decryptedLines[currentIdx]}
                  animateOn="view"
                  revealDirection="center"
                  speed={phase === "decrypting" ? decryptSpeed : encryptSpeed}
                  maxIterations={
                    phase === "decrypting"
                      ? decryptIterations
                      : encryptIterations
                  }
                  className="text-base lg:text-lg font-normal text-white text-center transition-opacity duration-200"
                  encryptedClassName="text-base lg:text-lg font-normal text-white text-center transition-opacity duration-200"
                  parentClassName="w-full"
                  characters={
                    phase === "decrypting"
                      ? undefined
                      : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
                  }
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator absolutely at the very bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center"
      >
        <p className="mb-2 text-sm text-white/80 tracking-wide">Scroll Down</p>
        <div className="w-px h-14 bg-gradient-to-t from-goldGlow to-white animate-bounce" />
      </motion.div>
    </section>
  );
}
