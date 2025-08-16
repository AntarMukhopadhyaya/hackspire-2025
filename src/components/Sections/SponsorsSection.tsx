"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import sponsorsData from "@/data/sponsors.json";

type SponsorTier = {
  tier: string;
  sponsors: {
    name: string;
    logo: string;
    alt: string;
  }[];
};

const sponsorTiers: SponsorTier[] = sponsorsData;

function TierTitle({ label }: { label: SponsorTier["tier"] }) {
  return (
    <div className="flex items-center justify-center mb-6">
      <div className="relative inline-block">
        <div
          className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-80"
          style={{
            clipPath:
              "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)",
          }}
        />
        <div
          className="relative px-6 py-2 bg-black text-yellow-300 border border-yellow-500"
          style={{
            fontFamily: "'Mokoto Demo', monospace",
            clipPath:
              "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
          }}
        >
          {label.toUpperCase()} TIER
        </div>
      </div>
    </div>
  );
}

function SponsorCard({
  src,
  alt,
  tier,
  sponsorName,
}: {
  src: string;
  alt: string;
  tier: string;
  sponsorName: string;
}) {
  const isDiamond = tier === "Diamond";
  const isPlatinum = tier === "Platinum";

  const clipPathRect =
    "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)";

  // Background and border styles per tier
  const backgroundStyle: React.CSSProperties | undefined =
    tier === "Platinum"
      ? {
          background:
            "linear-gradient(135deg, #E6E6E6 0%, #CFCFCF 50%, #BFC2C7 100%)",
        }
      : tier === "Silver"
      ? {
          background:
            "linear-gradient(135deg, #E0E0E0 0%, #C0C0C0 50%, #D5D5D5 100%)",
        }
      : tier === "Bronze"
      ? {
          background:
            "linear-gradient(135deg, #CD7F32 0%, #B06A2B 50%, #8C5A28 100%)",
        }
      : tier === "Diamond"
      ? {
          background:
            "linear-gradient(135deg, #B3ECFF 0%, #33D4FF 50%, #00B0FF 100%)",
        }
      : undefined; // Gold uses existing classes

  const borderStyle: React.CSSProperties | undefined =
    tier === "Platinum"
      ? { background: "linear-gradient(135deg, #DCDCDC 0%, #C9CCD3 100%)" }
      : tier === "Silver"
      ? { background: "linear-gradient(135deg, #C9C9C9 0%, #BFBFBF 100%)" }
      : tier === "Bronze"
      ? { background: "linear-gradient(135deg, #B06A2B 0%, #7A4A1E 100%)" }
      : tier === "Diamond"
      ? { background: "linear-gradient(135deg, #7FE8FF 0%, #19C7FF 100%)" }
      : undefined; // Gold uses existing classes

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative p-4 md:p-6 group cursor-pointer transition-all duration-300 hover:scale-105"
    >
      {/* Background with clip-path cuts */}
      <div
        className={
          tier === "Gold"
            ? "absolute inset-0 bg-yellow-400 transition-all duration-300 group-hover:animate-pulse"
            : "absolute inset-0 transition-all duration-300 group-hover:animate-pulse"
        }
        style={{
          clipPath: clipPathRect,
          ...(tier === "Gold" ? {} : backgroundStyle),
        }}
      ></div>

      {/* Border with clip-path cuts */}
      <div
        className={
          tier === "Gold"
            ? "absolute -inset-0.5 md:-inset-1 bg-yellow-500 transition-all duration-300 group-hover:bg-orange-500"
            : "absolute -inset-0.5 md:-inset-1 transition-all duration-300"
        }
        style={{
          clipPath: clipPathRect,
          zIndex: -1,
          ...(tier === "Gold" ? {} : borderStyle),
        }}
      ></div>

      {/* Glitch overlays for hover effect */}
      <div
        className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-150"
        style={{
          clipPath: clipPathRect,
          mixBlendMode: "screen",
          transform: "translateX(-2px)",
          zIndex: 1,
        }}
      ></div>
      <div
        className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-150"
        style={{
          clipPath: clipPathRect,
          mixBlendMode: "screen",
          transform: "translateX(2px)",
          zIndex: 2,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-4 md:py-6">
        {src.includes("placeholder") ? (
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mb-3 font-mokoto">
              Coming Soon
            </div>
            <div className="text-sm sm:text-base md:text-lg text-gray-500 font-mokoto">
              {tier} Sponsor
            </div>
          </div>
        ) : (
          <>
            <Image
              src={src}
              alt={alt}
              width={400}
              height={200}
              className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain mb-2"
            />
            <div className="text-center">
              <div className="text-sm sm:text-base md:text-lg text-gray-700 font-medium font-mokoto">
                {sponsorName}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Diamond Patterns for Diamond Tier */}
      {isDiamond && (
        <>
          {/* Diamond corner accents only */}
          <div className="absolute top-3 left-3 w-3 h-3 bg-cyan-300 opacity-70 transform rotate-45"></div>
          <div className="absolute top-3 right-3 w-3 h-3 bg-cyan-300 opacity-70 transform rotate-45"></div>
          <div className="absolute bottom-3 left-3 w-3 h-3 bg-cyan-300 opacity-70 transform rotate-45"></div>
          <div className="absolute bottom-3 right-3 w-3 h-3 bg-cyan-300 opacity-70 transform rotate-45"></div>
        </>
      )}

      {/* Shine Effect for Platinum Tier */}
      {isPlatinum && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Shine line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

          {/* Star sparkles - positioned around the card */}
          <div className="absolute top-4 left-1/4 w-3 h-3 animate-pulse shadow-lg">
            <div
              className="w-full h-full bg-white/80 transform rotate-45"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            ></div>
          </div>
          <div
            className="absolute top-8 right-1/3 w-3 h-3 animate-pulse shadow-lg"
            style={{ animationDelay: "0.5s" }}
          >
            <div
              className="w-full h-full bg-white/70 transform rotate-45"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            ></div>
          </div>
          <div
            className="absolute bottom-6 left-1/3 w-3 h-3 animate-pulse shadow-lg"
            style={{ animationDelay: "1s" }}
          >
            <div
              className="w-full h-full bg-white/90 transform rotate-45"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            ></div>
          </div>
          <div
            className="absolute bottom-8 right-1/4 w-3 h-3 animate-pulse shadow-lg"
            style={{ animationDelay: "1.5s" }}
          >
            <div
              className="w-full h-full bg-white/60 transform rotate-45"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            ></div>
          </div>

          {/* Additional larger star sparkles */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 animate-pulse shadow-lg transform -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-full h-full bg-white/90 transform rotate-45"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            ></div>
          </div>
          <div
            className="absolute top-1/3 right-1/4 w-3.5 h-3.5 animate-pulse shadow-lg"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className="w-full h-full bg-white/80 transform rotate-45"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            ></div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="relative py-12 md:py-16 text-white overflow-hidden"
    >
      {/* Yellow Trapezium Background with Clip-Path (from About polygon) */}
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
          {/* PCB-like lines (matching SpireCompleters) */}
          <div className="absolute inset-0">
            {/* Horizontal lines */}
            <div className="absolute top-4 md:top-8 left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute top-8 md:top-16 left-0 right-0 h-px bg-black opacity-40"></div>
            <div className="absolute top-12 md:top-24 left-0 right-0 h-px bg-black opacity-30"></div>
            <div className="absolute top-16 md:top-32 left-0 right-0 h-px bg-black opacity-20"></div>

            {/* Vertical lines */}
            <div className="absolute top-0 bottom-0 left-4 md:left-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 left-8 md:left-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 left-12 md:left-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 left-16 md:left-32 w-px bg-black opacity-20"></div>
            <div className="absolute top-0 bottom-0 right-4 md:right-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 right-8 md:right-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 right-12 md:right-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 right-16 md:right-32 w-px bg-black opacity-20"></div>

            {/* Diagonal corners */}
            <div className="absolute top-0 left-0 w-16 md:w-32 h-16 md:h-32 border-l-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute top-0 right-0 w-16 md:w-32 h-16 md:h-32 border-r-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-16 md:w-32 h-16 md:h-32 border-l-2 border-b-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-16 md:w-32 h-16 md:h-32 border-r-2 border-b-2 border-black opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Multiple Left Side Vertical Trapezium Shapes - match SpireCompleters */}
      <div className="absolute left-0 top-1/4 w-12 md:w-20 h-48 md:h-64 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "polygon(0% 0%, 100% 15%, 100% 85%, 0% 100%)" }}
        >
          <div
            className="absolute top-1/2 left-0 w-full h-6 md:h-8 bg-black transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)" }}
          ></div>
        </div>
      </div>
      <div className="absolute left-0 top-3/4 w-10 md:w-16 h-32 md:h-48 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)" }}
        >
          <div
            className="absolute top-1/2 left-0 w-full h-4 md:h-6 bg-black transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 30%, 100% 0%, 100% 100%, 0% 70%)" }}
          ></div>
        </div>
      </div>

      {/* Multiple Right Side Vertical Trapezium Shapes - match SpireCompleters */}
      <div className="absolute right-0 top-1/4 w-12 md:w-20 h-48 md:h-64 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "polygon(0% 15%, 100% 0%, 100% 100%, 0% 85%)" }}
        >
          <div
            className="absolute top-1/2 right-0 w-full h-6 md:h-8 bg-black transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)" }}
          ></div>
        </div>
      </div>
      <div className="absolute right-0 top-3/4 w-10 md:w-16 h-32 md:h-48 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)" }}
        >
          <div
            className="absolute top-1/2 right-0 w-full h-4 md:h-6 bg-black transform -translate-y-1/2"
            style={{ clipPath: "polygon(0% 0%, 100% 30%, 100% 70%, 0% 100%)" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-[5rem] lg:text-[6rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo"
          >
            SPONSORS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto -mt-2 text-sm sm:text-base md:text-xl text-black leading-relaxed"
            style={{ fontFamily: "Mokoto Demo" }}
          >
            Powered by our allies in innovation — Platinum, Diamond, Gold,
            Silver and Bronze tiers.
          </motion.p>
        </motion.div>

        {/* Sponsors grid wrapper separated from header; pushed below trapezium */}
        <div className="relative z-10 mt-44 sm:mt-20 md:mt-48 lg:mt-40 space-y-10 md:space-y-14">
          {sponsorTiers.map((group, groupIndex) => (
            <motion.div
              key={group.tier}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.05 }}
            >
              <TierTitle label={group.tier} />

              <div
                className={
                  group.tier === "Platinum"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                    : group.tier === "Diamond"
                    ? "grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                    : group.tier === "Gold"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                    : group.tier === "Silver"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                    : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
                }
              >
                {group.sponsors.map((sponsor, index) => (
                  <SponsorCard
                    key={`${group.tier}-${index}`}
                    src={sponsor.logo}
                    alt={sponsor.alt}
                    tier={group.tier}
                    sponsorName={sponsor.name}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
