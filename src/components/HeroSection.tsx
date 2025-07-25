"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import DecryptedText from "./blocks/TextAnimations/DecryptedText/DecryptedText";
import { useEffect, useState } from "react";
import Threads from "./blocks/Backgrounds/Threads/Threads";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export default function HeroSection() {
  // Countdown timer logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set target date to September 15, 2025
  const targetDate = new Date("2025-09-15T09:00:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

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
      {/* Threads Animated Background (behind hero text) */}
      {/**
      <div className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: "none" }}>
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
          className="w-full h-full"
          style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
        />
      </div>
      */}
      {/* Diagonal Strip Image (top-left, absolute, no text) */}
      <div
        className="absolute z-20 pointer-events-none hidden md:block"
        style={{
          top: "85px",
          left: "-45px",
          width: "500px",
          height: "120px",
          transform: "rotate(-22deg)",
          transformOrigin: "top left",
          opacity: 0.5,
        }}
      >
        <Image
          src="/images/strip.svg"
          alt="Decorative Strip"
          fill
          className="object-contain"
          priority
        />
        {/* Overlay PUSH LIMITS text */}
        <span
          style={{
            position: "absolute",
            zIndex: 9,
            left: "40%",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(0deg)",
            fontFamily: "Distancia, sans-serif",
            fontSize: "26px",
            color: "#fff",

            letterSpacing: "0.08em",
            fontWeight: 900,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <span
            className="glitch"
            style={{ display: "inline-block", width: "100%" }}
          >
            PUSH LIMITS
          </span>
        </span>
      </div>
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
        {/* Logo Icon SVG coming from top */}
        <div className="absolute top-0 left-0 w-full flex justify-start pl-[5%] opacity-20">
          <div className="relative w-full h-[1000px] max-w-7xl">
            <Image
              src="/icons/logoicon.svg"
              alt="HackSpire Logo"
              fill
              className="object-contain object-left"
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
          <h1 className="flex items-center justify-center gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold -mb-6 md:-mb-10 relative text-white animate-pulse hero-title leading-none">
            <img
              src="/icons/logoicon.svg"
              alt="Hackspire Logo Icon"
              className="inline-block align-middle h-[2.5rem] sm:h-[3rem] md:h-[4.5rem] lg:h-[6rem] xl:h-[12rem] w-auto -mr-4 sm:-mr-6 md:-mr-8"
              draggable="false"
            />
            <span className="align-middle">HACKSPIRE 2025</span>
          </h1>
          {/* CODE | CREATE | CONQUER text with Cocobiker font */}
          <div className="text-center mb-4 md:mb-8">
            <p
              className="text-white text-lg sm:text-xl md:text-[26px] font-bold animate-pulse"
              style={{ fontFamily: "CocoBiker, sans-serif" }}
            >
              CODE | CREATE | CONQUER
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold space-y-1"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
              Where <span className="text-white font-bold">Tradition</span>
              Meets <span className="text-white font-bold">Innovation</span>
            </p>
            <div className="h-1 w-16 sm:w-20 md:w-24 mx-auto bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 rounded-full shadow-md" />

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

            {/* Glassmorphism Countdown Timer Box */}
            <div className="w-full flex justify-center mt-4 md:mt-6">
              <div
                className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-gradient-to-r from-purple-600/40 to-blue-600/40 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 w-auto max-w-[600px] mx-auto overflow-hidden whitespace-nowrap flex-nowrap"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {/* Calendar Icon and Date */}
                <div
                  className="flex items-center gap-2 text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-normal"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <FaCalendarAlt className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                  <span>Sept 13-15 2025</span>
                </div>
                <span className="hidden sm:block mx-3 text-white/40 text-xl sm:text-2xl md:text-3xl font-normal">
                  |
                </span>
                {/* Clock Icon and Countdown */}
                <div
                  className="flex items-center gap-1 text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-normal w-[140px] sm:w-[160px] md:w-[180px]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <FaClock className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-1" />
                  <span
                    className="w-full block text-center font-normal text-sm sm:text-lg md:text-xl lg:text-2xl"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {typeof timeLeft.days === "number"
                      ? timeLeft.days.toString().padStart(2, "0")
                      : "00"}{" "}
                    :
                    {typeof timeLeft.hours === "number"
                      ? timeLeft.hours.toString().padStart(2, "0")
                      : "00"}{" "}
                    :
                    {typeof timeLeft.minutes === "number"
                      ? timeLeft.minutes.toString().padStart(2, "0")
                      : "00"}{" "}
                    :
                    {typeof timeLeft.seconds === "number"
                      ? timeLeft.seconds.toString().padStart(2, "0")
                      : "00"}
                  </span>
                </div>
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
        <p className="mb-2 text-xs sm:text-sm text-white/80 tracking-wide">
          Scroll Down
        </p>
        <div className="w-px h-10 sm:h-14 bg-gradient-to-t from-goldGlow to-white animate-bounce" />
      </motion.div>
    </section>
  );
}
