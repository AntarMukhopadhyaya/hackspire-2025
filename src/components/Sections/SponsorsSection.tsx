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
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-5xl sm:text-7xl md:text-[5rem] lg:text-[6rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo">
            SPONSORS
          </h2>
          <p
            className="text-center max-w-4xl mx-auto -mt-2 text-sm sm:text-base md:text-xl text-black leading-relaxed"
            style={{ fontFamily: "Mokoto Demo" }}
          >
            Powered by our allies in innovation — Platinum, Diamond, Gold,
            Silver and Bronze tiers.
          </p>
        </div>
        {/* Restore original card grid UI, but use hard-coded sponsor data */}
        <div className="relative z-10 mt-44 sm:mt-20 md:mt-48 lg:mt-40 space-y-10 md:space-y-14">
          {/* Diamond Tier */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <TierTitle label="Diamond" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <SponsorCard
                src="placeholder"
                alt="Diamond Sponsor Placeholder 1"
                tier="Diamond"
                sponsorName="Coming Soon"
              />
              <SponsorCard
                src="placeholder"
                alt="Diamond Sponsor Placeholder 2"
                tier="Diamond"
                sponsorName="Coming Soon"
              />
              <SponsorCard
                src="placeholder"
                alt="Diamond Sponsor Placeholder 3"
                tier="Diamond"
                sponsorName="Coming Soon"
              />
            </div>
          </motion.div>
          {/* Platinum Tier */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <TierTitle label="Platinum" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <SponsorCard
                src="placeholder"
                alt="Platinum Sponsor Placeholder 1"
                tier="Platinum"
                sponsorName="Coming Soon"
              />
              <SponsorCard
                src="placeholder"
                alt="Platinum Sponsor Placeholder 2"
                tier="Platinum"
                sponsorName="Coming Soon"
              />
              <SponsorCard
                src="placeholder"
                alt="Platinum Sponsor Placeholder 3"
                tier="Platinum"
                sponsorName="Coming Soon"
              />
            </div>
          </motion.div>
          {/* Gold Tier */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <TierTitle label="Gold" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <SponsorCard
                src="/images/DevFolio.png"
                alt="DEVFOLIO LOGO"
                tier="Gold"
                sponsorName="Devfolio"
              />
              <SponsorCard
                src="placeholder"
                alt="Gold Sponsor Placeholder 1"
                tier="Gold"
                sponsorName="Coming Soon"
              />
              <SponsorCard
                src="placeholder"
                alt="Gold Sponsor Placeholder 2"
                tier="Gold"
                sponsorName="Coming Soon"
              />
            </div>
          </motion.div>
          {/* Silver Tier */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <TierTitle label="Silver" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <SponsorCard
                src="/images/ETHIndia.png"
                alt="ETHINDIA LOGO"
                tier="Silver"
                sponsorName="ETHIndia"
              />
              <SponsorCard
                src="placeholder"
                alt="Silver Sponsor Placeholder 1"
                tier="Silver"
                sponsorName="Coming Soon"
              />
              <SponsorCard
                src="placeholder"
                alt="Silver Sponsor Placeholder 2"
                tier="Silver"
                sponsorName="Coming Soon"
              />
            </div>
          </motion.div>
          {/* Bronze Tier */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TierTitle label="Bronze" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              <SponsorCard
                src="placeholder"
                alt="Bronze Sponsor Placeholder 1"
                tier="Bronze"
                sponsorName="Coming Soon"
              />
              <SponsorCard
                src="placeholder"
                alt="Bronze Sponsor Placeholder 2"
                tier="Bronze"
                sponsorName="Coming Soon"
              />
              <SponsorCard
                src="placeholder"
                alt="Bronze Sponsor Placeholder 3"
                tier="Bronze"
                sponsorName="Coming Soon"
              />
              <SponsorCard
                src="placeholder"
                alt="Bronze Sponsor Placeholder 4"
                tier="Bronze"
                sponsorName="Coming Soon"
              />
              <SponsorCard
                src="placeholder"
                alt="Bronze Sponsor Placeholder 5"
                tier="Bronze"
                sponsorName="Coming Soon"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
