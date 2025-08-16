import React from "react";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Check = () => {
  return (
    <footer className="relative mt-20 text-white overflow-hidden">
      {/* Inverted Yellow Trapezium Background with Black Border */}
      <div className="absolute bottom-0 left-0 right-0 h-64 sm:h-72 md:h-80 lg:h-80 z-0">
        {/* Black border background */}
        <div
          className="w-full h-full bg-black absolute"
          style={{
            clipPath:
              "polygon(20% 15%, 83% 16%, 101% 30%, 101% 71%, 93% 96%, 11% 96%, -1% 71%, -1% 27%)",
          }}
        ></div>

        {/* Main yellow trapezium with custom clip-path */}
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath:
              "polygon(21% 16%, 82% 17%, 100% 31%, 100% 70%, 81% 100%, 17% 99%, 0% 70%, 0% 28%)",
            transform: "translate(2px, 2px)",
          }}
        >
          {/* Left side vertical trapezium cut */}
          <div
            className="absolute bottom-1/2 left-0 w-12 sm:w-16 md:w-20 h-32 sm:h-36 md:h-40 bg-black transform translate-y-1/2"
            style={{
              clipPath: "polygon(0% 0%, 100% 10%, 90% 90%, 0% 100%)",
            }}
          ></div>

          {/* Right side vertical trapezium cut */}
          <div
            className="absolute bottom-1/2 right-0 w-12 sm:w-16 md:w-20 h-32 sm:h-36 md:h-40 bg-black transform translate-y-1/2"
            style={{
              clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 10% 90%)",
            }}
          ></div>

          {/* Top-left corner cuts */}
          <div
            className="absolute top-0 left-0 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-black"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
            }}
          ></div>

          <div
            className="absolute top-1 sm:top-2 left-1 sm:left-2 w-16 sm:w-18 md:w-20 h-8 sm:h-10 md:h-12 bg-black"
            style={{
              clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)",
            }}
          ></div>

          <div
            className="absolute top-6 sm:top-7 md:top-8 left-6 sm:left-7 md:left-8 w-8 sm:w-10 md:w-12 h-6 sm:h-7 md:h-8 bg-black"
            style={{
              clipPath: "polygon(0% 0%, 80% 0%, 100% 80%, 20% 100%)",
            }}
          ></div>

          {/* Top-right corner cuts */}
          <div
            className="absolute top-0 right-0 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-black"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
            }}
          ></div>

          <div
            className="absolute top-1 sm:top-2 right-1 sm:right-2 w-16 sm:w-18 md:w-20 h-8 sm:h-10 md:h-12 bg-black"
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
            }}
          ></div>

          <div
            className="absolute top-6 sm:top-7 md:top-8 right-6 sm:right-7 md:right-8 w-8 sm:w-10 md:w-12 h-6 sm:h-7 md:h-8 bg-black"
            style={{
              clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 80%)",
            }}
          ></div>

          {/* Circuit Board Pattern Overlay - Responsive */}
          <div className="absolute inset-0 opacity-40 sm:opacity-50 md:opacity-60">
            {/* Horizontal circuit traces */}
            <div className="absolute top-6 sm:top-8 left-0 right-0 h-px bg-black opacity-70"></div>
            <div className="absolute top-12 sm:top-16 left-4 sm:left-8 right-4 sm:right-8 h-px bg-black opacity-60"></div>
            <div className="absolute top-18 sm:top-24 left-8 sm:left-16 right-8 sm:right-16 h-px bg-black opacity-50"></div>
            <div className="absolute top-24 sm:top-32 left-4 sm:left-8 right-4 sm:right-8 h-px bg-black opacity-65"></div>
            <div className="absolute top-30 sm:top-40 left-6 sm:left-12 right-6 sm:right-12 h-px bg-black opacity-55"></div>
            <div className="absolute bottom-18 sm:bottom-24 left-8 sm:left-16 right-8 sm:right-16 h-px bg-black opacity-50"></div>
            <div className="absolute bottom-12 sm:bottom-16 left-4 sm:left-8 right-4 sm:right-8 h-px bg-black opacity-65"></div>
            <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 h-px bg-black opacity-70"></div>

            {/* Vertical circuit traces */}
            <div className="absolute top-6 sm:top-8 bottom-6 sm:bottom-8 left-4 sm:left-8 w-px bg-black opacity-65"></div>
            <div className="absolute top-8 sm:top-12 bottom-8 sm:bottom-12 left-8 sm:left-16 w-px bg-black opacity-55"></div>
            <div className="absolute top-6 sm:top-8 bottom-6 sm:bottom-8 left-12 sm:left-24 w-px bg-black opacity-60"></div>
            <div className="absolute top-6 sm:top-8 bottom-6 sm:bottom-8 right-4 sm:right-8 w-px bg-black opacity-65"></div>
            <div className="absolute top-8 sm:top-12 bottom-8 sm:bottom-12 right-8 sm:right-16 w-px bg-black opacity-55"></div>
            <div className="absolute top-6 sm:top-8 bottom-6 sm:bottom-8 right-12 sm:right-24 w-px bg-black opacity-60"></div>

            {/* Circuit nodes */}
            <div className="absolute top-6 sm:top-8 left-8 sm:left-16 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-black opacity-80 rounded-full"></div>
            <div className="absolute top-12 sm:top-16 left-12 sm:left-24 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-black opacity-70 rounded-full"></div>
            <div className="absolute top-18 sm:top-24 left-16 sm:left-32 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-black opacity-75 rounded-full"></div>
            <div className="absolute top-6 sm:top-8 right-8 sm:right-16 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-black opacity-80 rounded-full"></div>
            <div className="absolute top-12 sm:top-16 right-12 sm:right-24 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-black opacity-70 rounded-full"></div>
            <div className="absolute top-18 sm:top-24 right-16 sm:right-32 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-black opacity-75 rounded-full"></div>

            {/* Corner diagonal accents */}
            <div className="absolute top-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-l-2 border-t-2 border-black opacity-50"></div>
            <div className="absolute top-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-r-2 border-t-2 border-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-l-2 border-b-2 border-black opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-r-2 border-b-2 border-black opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12 mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24">
          {/* Left Section - Main Branding */}
          <div className="text-center lg:text-left">
            <h3
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black tracking-wider mb-2 sm:mb-3 lg:mb-4 font-mono"
              style={{ fontFamily: "'Sddystopiandemo-GO7xa', monospace" }}
            >
              HACKSPIRE 2025
            </h3>
            <p
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black font-medium max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl leading-relaxed font-mono"
              style={{ fontFamily: "'Mokoto Demo', monospace" }}
            >
              Neural Network Protocols • Quantum Code Architecture • Digital
              Supremacy Engine
            </p>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex flex-col items-center lg:items-end gap-4 sm:gap-6">
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <a
                href="#"
                className="text-black hover:text-gray-700 transition-colors duration-300 hover:scale-110 transform"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-700 transition-colors duration-300 hover:scale-110 transform"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-700 transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-700 transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-xs sm:text-sm lg:text-base text-black font-medium text-center lg:text-right font-mono">
              © 2025 HACKSPIRE • FIEM ACM STUDENT CHAPTER
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Check;
