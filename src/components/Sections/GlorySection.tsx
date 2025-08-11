"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GloryAnimatedText from "../ui/GloryAnimatedText";

export default function GlorySection() {
  const galleryImages: string[] = [
    "https://picsum.photos/id/1018/1280/720",
    "https://picsum.photos/id/1025/1280/720",
    "https://picsum.photos/id/1039/1280/720",
    "https://picsum.photos/id/1043/1280/720",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(true);

  const handlePrev = () => {
    setIsImageLoaded(false);
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const handleNext = () => {
    setIsImageLoaded(false);
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Preload all images once
  useEffect(() => {
    galleryImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  return (
    <section
      id="glory"
      className="relative py-12 md:py-16 text-white overflow-hidden"
    >
      {/* Header trapezium background to match other sections */}
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

      {/* Side accents */}
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
        {/* Header */}
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
            GLORY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-black max-w-3xl mx-auto mb-4 px-12 sm:px-0 md:mb-8 font-medium text-sm md:text-lg lg:text-xl"
            style={{ fontFamily: "Mokoto Demo" }}
          >
            Celebrating the extraordinary achievements and innovations from
            HackSpire 2024.
          </motion.p>
        </motion.div>

        {/* Content below header trapezium */}
        <div className="relative z-10 mt-44 sm:mt-20 md:mt-48 lg:mt-40 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4"
          >
            <GloryAnimatedText />
          </motion.div>

          {/* Showcase frame (matches page with responsive 16:9) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center px-4"
          >
            <div className="relative w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
              {/* 16:9 wrapper */}
              <div
                className="relative w-full"
                style={{ aspectRatio: "16 / 9" }}
              >
                {/* Upward light effects */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-20 bg-gradient-to-t from-yellow-400/30 via-yellow-300/20 to-transparent blur-xl opacity-70"></div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-t from-yellow-500/50 via-yellow-400/30 to-transparent blur-lg opacity-60"></div>

                {/* Outer glow border */}
                <div
                  className="absolute -inset-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-75"
                  style={{
                    clipPath:
                      "polygon(2% 42%, 0 42%, 3% 0, 97% 0, 100% 42%, 98% 42%, 98% 55%, 100% 55%, 97% 100%, 3% 100%, 0 56%, 2% 56%)",
                    filter: "blur(2px)",
                  }}
                ></div>

                {/* Main border */}
                <div
                  className="absolute -inset-1 bg-yellow-500"
                  style={{
                    clipPath:
                      "polygon(2% 42%, 0 42%, 3% 0, 97% 0, 100% 42%, 98% 42%, 98% 55%, 100% 55%, 97% 100%, 3% 100%, 0 56%, 2% 56%)",
                  }}
                ></div>

                {/* Background frame with group hover for nav controls */}
                <div
                  className="absolute inset-0 group"
                  style={{
                    clipPath:
                      "polygon(2% 42%, 0 42%, 3% 0, 97% 0, 100% 42%, 98% 42%, 98% 55%, 100% 55%, 97% 100%, 3% 100%, 0 56%, 2% 56%)",
                  }}
                >
                  {/* Crossfading slide using img; avoid yellow flash while loading */}
                  <motion.img
                    key={currentIndex}
                    src={galleryImages[currentIndex]}
                    alt="glory"
                    className="absolute inset-0 w-full h-full object-cover"
                    onLoad={() => setIsImageLoaded(true)}
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: isImageLoaded ? 1 : 0.2 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    draggable={false}
                    style={{ userSelect: "none" }}
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-0"></div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-center space-y-3">
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 font-sddystopiandemo drop-shadow-2xl"
                      >
                        GLORY FRAME
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="text-sm sm:text-base md:text-lg text-white font-mokoto max-w-2xl mx-auto px-4"
                      >
                        Showcasing the pinnacle of innovation and excellence
                        from HackSpire 2024
                      </motion.p>
                    </div>
                  </div>

                  {/* Circuit patterns overlay */}
                  <div className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                    <div className="absolute top-4 left-8 right-8 h-px bg-yellow-300 opacity-80"></div>
                    <div className="absolute top-8 left-12 right-12 h-px bg-yellow-300 opacity-60"></div>
                    <div className="absolute top-12 left-8 right-8 h-px bg-yellow-300 opacity-70"></div>
                    <div className="absolute bottom-4 left-8 right-8 h-px bg-yellow-300 opacity-80"></div>
                    <div className="absolute bottom-8 left-12 right-12 h-px bg-yellow-300 opacity-60"></div>
                    <div className="absolute bottom-12 left-8 right-8 h-px bg-yellow-300 opacity-70"></div>

                    <div className="absolute left-4 top-8 bottom-8 w-px bg-yellow-300 opacity-80"></div>
                    <div className="absolute left-8 top-12 bottom-12 w-px bg-yellow-300 opacity-60"></div>
                    <div className="absolute left-12 top-8 bottom-8 w-px bg-yellow-300 opacity-70"></div>
                    <div className="absolute right-4 top-8 bottom-8 w-px bg-yellow-300 opacity-80"></div>
                    <div className="absolute right-8 top-12 bottom-12 w-px bg-yellow-300 opacity-60"></div>
                    <div className="absolute right-12 top-8 bottom-8 w-px bg-yellow-300 opacity-70"></div>

                    <div className="absolute top-8 left-8 w-2 h-2 bg-yellow-300 opacity-70 rounded-full"></div>
                    <div className="absolute top-8 right-8 w-2 h-2 bg-yellow-300 opacity-70 rounded-full"></div>
                    <div className="absolute bottom-8 left-8 w-2 h-2 bg-yellow-300 opacity-70 rounded-full"></div>
                    <div className="absolute bottom-8 right-8 w-2 h-2 bg-yellow-300 opacity-70 rounded-full"></div>
                  </div>

                  {/* Techy nav buttons: hidden until hover */}
                  <button
                    aria-label="Previous"
                    onClick={handlePrev}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 rounded-none appearance-none focus:outline-none outline-none"
                    style={{
                      clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
                      background:
                        "linear-gradient(135deg, rgba(234,179,8,0.95), rgba(249,115,22,0.9))",
                      width: "48px",
                      height: "48px",
                      color: "black",
                      borderRadius: 0,
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                    }}
                  >
                    <span className="sr-only">Previous</span>
                  </button>
                  <button
                    aria-label="Next"
                    onClick={handleNext}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 rounded-none appearance-none focus:outline-none outline-none"
                    style={{
                      clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                      background:
                        "linear-gradient(225deg, rgba(234,179,8,0.95), rgba(249,115,22,0.9))",
                      width: "48px",
                      height: "48px",
                      color: "black",
                      borderRadius: 0,
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                    }}
                  >
                    <span className="sr-only">Next</span>
                  </button>
                </div>

                {/* Additional light rays from bottom */}
                <div className="absolute bottom-0 left-1/4 w-px h-20 bg-gradient-to-t from-yellow-400/80 to-transparent rotate-12 opacity-60"></div>
                <div className="absolute bottom-0 left-1/3 w-px h-16 bg-gradient-to-t from-yellow-300/70 to-transparent -rotate-6 opacity-50"></div>
                <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-t from-yellow-500/90 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 right-1/3 w-px h-16 bg-gradient-to-t from-yellow-300/70 to-transparent rotate-6 opacity-50"></div>
                <div className="absolute bottom-0 right-1/4 w-px h-20 bg-gradient-to-t from-yellow-400/80 to-transparent -rotate-12 opacity-60"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
