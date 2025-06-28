"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
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
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
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
        </div>
      </div>

      {/* Hero Text (centered vertically and horizontally) */}
      <div className="relative z-30 flex flex-col items-center justify-center w-full pt-32 pb-16">
        <div className="text-center px-4 w-full max-w-5xl mx-auto">
          <h1 className="flex items-center justify-center text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative text-transparent bg-clip-text bg-gradient-to-r from-goldGlow via-white to-shaktiRed animate-pulse hero-title leading-none">
            <img
              src="/icons/logoicon.svg"
              alt="Hackspire Logo Icon"
              className="inline-block align-middle h-[4.5rem] md:h-[6rem] lg:h-[12rem] w-auto -mr-6 animate-pulse"
              draggable="false"
            />
            <span>HACKSPIRE 2025</span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold space-y-4"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
              Where <span className="text-white font-bold">Tradition</span>
              Meets <span className="text-white font-bold">Innovation</span>
            </p>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 rounded-full shadow-md" />
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
