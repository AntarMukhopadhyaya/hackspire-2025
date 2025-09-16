"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MatrixRain from "../ui/MatrixRain";
import { TechnicalOverlay } from "../ui/TechnicalOverlay";
import CyberButton from "../ui/CyberButton";
import CountdownTimer from "../ui/CountdownTimer";
import DevfolioButton from "../ui/DevfolioButton";

import Image from "next/image";
import NeonXElements from "../ui/NeonXElements";
// import CellTerminal from "../ui/CellTerminal";
import Link from "next/link";
import CustomDevfolioButton from "../ui/CustomDevfolioButton";

export default function HeroSection() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const fullText = "Innovate to Inspire ";

  const handleGuidelinesClick = () => {
    window.open(
      "https://fancy-brass-700.notion.site/HackSpire-2025-Participant-Guide-13c111e6784280f8bfd0e74faca3a592?source=copy_link",
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3,
      }}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Technical Overlay - Desktop Only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="hidden md:block"
      >
        <TechnicalOverlay />
      </motion.div>

      {/* Matrix Rain Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <MatrixRain
          className="!absolute !inset-0 !w-full !h-full"
          isFullScreen={true}
        />
      </motion.div>

      {/* Matrix Background */}
      <div className="absolute inset-0 z-0">
        <div className="matrix-background"></div>
      </div>

      {/* Neon Blue X Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute inset-0 z-20"
      >
        <NeonXElements />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="relative z-30 flex flex-col items-center justify-center w-full h-full md:mb-32"
      >
        <div className="text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          {/* Hero Title Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 1.0,
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
            className="flex items-center justify-center w-full relative mt-0 mr-6 sm:mr-10 md:mt-60 md:mr-2 lg:mt-36 lg:ml-16"
          >
            {/* World Map Background - Adjusted for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 1.3, duration: 1.5 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
            >
              <Image
                src="https://ik.imagekit.io/k2pkqd50y/Web%20Assets/worldmap_ozh3jv_uhg7dc.svg?updatedAt=1757995737113"
                alt="World Map Background"
                width={900}
                height={225}
                className="scale-[0.7] sm:scale-[0.8] md:scale-[0.9] lg:scale-100 translate-y-4 sm:translate-y-2 md:translate-y-0"
                priority
              />
            </motion.div>

            {/* Main Logo - Adjusted sizes for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.2,
                duration: 1.0,
                ease: "easeOut",
              }}
            >
              <div className="text-center -mb-8 sm:-mb-12 md:-mb-16 lg:-mb-18 xl:-mb-18 sm:mt-20 md:mt-20 lg:mt-0">
                <motion.h1
                  className="text-[20px]  sm:text-[28px] md:text-[28px] lg:text-[36px] xl:text-[40px] font-mokoto text-white leading-tight relative"
                  style={{ fontFamily: "Mokoto Demo, sans-serif" }}
                  animate={{
                    x: glitchActive ? [0, -2, 2, -1, 1, 0] : 0,
                    y: glitchActive ? [0, 1, -1, 0] : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative">
                    {text}
                    <span className="inline-block w-1 h-full bg-white ml-1 animate-pulse"></span>
                  </span>
                  {glitchActive && (
                    <>
                      <span
                        className="absolute inset-0 text-cyan-400 opacity-70 animate-pulse"
                        style={{ transform: "translate(2px, 1px)" }}
                      >
                        {fullText}
                      </span>
                      <span
                        className="absolute inset-0 text-red-400 opacity-70 animate-pulse"
                        style={{ transform: "translate(-1px, -1px)" }}
                      >
                        {fullText}
                      </span>
                    </>
                  )}
                </motion.h1>
              </div>
              <Image
                src="https://res.cloudinary.com/dyg7rbugo/image/upload/v1757996170/HERO_r7kbas_kbvliu.gif"
                alt="Hackspire Logo Main"
                width={1200}
                height={300}
                className="block mx-auto h-[12rem] sm:h-[16rem] md:h-[16rem] lg:h-[22rem] xl:h-[26rem] 2xl:h-[30rem] w-auto object-contain relative z-10 sm:-translate-x-10 "
                draggable={false}
                priority
                unoptimized
              />
            </motion.div>
          </motion.div>
          {/* Countdown Timer - Adjusted for mobile */}
          {/* Countdown Timer - Adjusted positioning for sm and md to avoid clipping */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center w-full -mt-4 mr-18 sm:-mt-25 sm:ml-46 md:-mt-24 md:ml-48 lg:-mt-34 lg:mr-40 xl:-mt-40"
          >
            <div className="transform translate-x-10 sm:translate-x-16 md:translate-x-16 lg:translate-x-44 xl:translate-x-56">
              <CountdownTimer />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="sm:mt-8 md:mt-42 lg:mt-48">
        {/* Join Discord Button - Better mobile positioning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-0 right-0 z-50 flex items-center justify-center px-4"
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* <DevfolioButton /> */}
            <CustomDevfolioButton />
            <CyberButton
              onClick={handleGuidelinesClick}
              className={"text-xs sm:text-sm px-3 py-0.5 scale-80"}
            >
              Guidelines
            </CyberButton>
          </div>
        </motion.div>

        {/* Cyberpunk Social Section - Adjusted for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-8 md:px-16 lg:px-24"
        >
          <div className="relative w-full max-w-3xl sm:max-w-4xl h-24 sm:h-32">
            {/* Angled Cyberpunk Shape */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-yellow-400"
              style={{
                clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)",
              }}
            >
              {/* Black Lines and Cuts - Adjusted for mobile */}
              <div className="absolute inset-0">
                <div className="absolute top-1 sm:top-2 left-4 sm:left-8 right-4 sm:right-8 h-0.5 bg-black opacity-80"></div>
                <div className="absolute bottom-1 sm:bottom-2 left-4 sm:left-8 right-4 sm:right-8 h-0.5 bg-black opacity-80"></div>
                <div className="absolute top-0 bottom-0 left-8 sm:left-16 w-0.5 bg-black opacity-80"></div>
                <div className="absolute top-0 bottom-0 right-8 sm:right-16 w-0.5 bg-black opacity-80"></div>
                <div
                  className="absolute top-1 left-12 sm:left-24 w-6 sm:w-8 h-0.5 bg-black opacity-80"
                  style={{ transform: "rotate(45deg)" }}
                ></div>
                <div
                  className="absolute top-1 right-12 sm:right-24 w-6 sm:w-8 h-0.5 bg-black opacity-80"
                  style={{ transform: "rotate(-45deg)" }}
                ></div>
              </div>

              {/* Social Icons - Adjusted spacing for mobile */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex space-x-3 sm:space-x-6">
                  {/* Facebook */}
                  <Link
                    href="https://www.facebook.com/share/14LCXi3MXQH/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Link>

                  {/* Instagram */}
                  <Link
                    href="https://www.instagram.com/acmfiem?utm_source=qr&igsh=ZDJ5ejN5Nzk0Nmx5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>

                  {/* LinkedIn */}
                  <Link
                    href="https://www.linkedin.com/company/acmfiem/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>

                  {/* Twitter */}
                  <a
                    href="https://x.com/acmfiem?t=4YZZAKbQK13Rby_InX5v9A&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>

                  {/* Discord */}
                  <Link
                    href="https://discord.gg/8qpHgECDH3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Follow Us Text - Adjusted for mobile */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div
                className="text-black text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider pb-1"
                style={{ fontFamily: "Mokoto Demo" }}
              >
                FOLLOW US
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cell Terminal - Desktop Only */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="hidden md:block"
      >
        {/* <CellTerminal /> */}
      </motion.div>
    </motion.section>
  );
}
