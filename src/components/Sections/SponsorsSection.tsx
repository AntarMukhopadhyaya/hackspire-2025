"use client";

import { motion } from "framer-motion";
import React from "react";

import SponsorCard from "../ui/SponsorCard";

type SponsorTier = {
  tier: string;
  sponsors: {
    name: string;
    logo: string;
    alt: string;
  }[];
};

const sponsorTiers = [
  {
    tier: "Diamond",
    sponsors: [
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Diamond Sponsor Placeholder 1",
      },
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Diamond Sponsor Placeholder 2",
      },
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Diamond Sponsor Placeholder 3",
      },
    ],
  },
  {
    tier: "Platinum",
    sponsors: [
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Platinum Sponsor Placeholder 1",
      },
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Platinum Sponsor Placeholder 2",
      },
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Platinum Sponsor Placeholder 3",
      },
    ],
  },
  {
    tier: "Gold",
    sponsors: [
      {
        name: "Devfolio",
        logo: "/images/DevFolio.png",
        alt: "DEVFOLIO LOGO",
      },
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Gold Sponsor Placeholder 1",
      },
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Gold Sponsor Placeholder 2",
      },
    ],
  },
  {
    tier: "Silver",
    sponsors: [
      {
        name: "ETHIndia",
        logo: "/images/ETHIndia.png",
        alt: "ETHINDIA LOGO",
      },
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Silver Sponsor Placeholder 1",
      },
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Silver Sponsor Placeholder 2",
      },
    ],
  },
  {
    tier: "Bronze",
    sponsors: [
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Bronze Sponsor Placeholder 1",
      },
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Bronze Sponsor Placeholder 2",
      },
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Bronze Sponsor Placeholder 3",
      },
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Bronze Sponsor Placeholder 4",
      },
      {
        name: "Coming Soon",
        logo: "placeholder",
        alt: "Bronze Sponsor Placeholder 5",
      },
    ],
  },
];

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
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
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
