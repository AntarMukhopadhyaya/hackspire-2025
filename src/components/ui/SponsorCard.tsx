import React from "react";
import { motion } from "framer-motion";

interface SponsorCardProps {
  src: string;
  alt: string;
  tier: string;
  sponsorName: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  src,
  alt,
  tier,
  sponsorName,
}) => {
  const borderStyle: React.CSSProperties | undefined =
    tier === "Platinum"
      ? { background: "linear-gradient(135deg, #DCDCDC 0%, #C9CCD3 100%)" }
      : tier === "Silver"
      ? { background: "linear-gradient(135deg, #C9C9C9 0%, #BFBFBF 100%)" }
      : tier === "Bronze"
      ? { background: "linear-gradient(135deg, #B06A2B 0%, #7A4A1E 100%)" }
      : tier === "Diamond"
      ? { background: "linear-gradient(135deg, #7FE8FF 0%, #19C7FF 100%)" }
      : undefined;
  const isDiamond = tier === "Diamond";
  const isPlatinum = tier === "Platinum";

  const clipPathRect =
    "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)";

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
      ? { background: "linear-gradient(135deg, #7FE8FF 0%, #19C7FF 100%)" }
      : undefined;

  // Card size classes
  const cardPadding = "p-4 md:p-6";
  const logoHeight = 64;
  const sponsorFont = "text-sm sm:text-base md:text-lg";
  const comingSoonFont = "text-xl sm:text-2xl md:text-3xl lg:text-4xl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative ${cardPadding} group cursor-pointer transition-all duration-300 hover:scale-105`}
    >
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
      <div
        className={`relative z-10 flex flex-col items-center justify-center py-2 md:py-3`}
      >
        {src.includes("placeholder") ? (
          <div className="text-center">
            <div
              className={`${comingSoonFont} font-bold text-gray-600 mb-2 font-mokoto`}
            >
              Coming Soon
            </div>
            <div className={`${sponsorFont} text-gray-500 font-mokoto`}>
              {tier} Sponsor
            </div>
          </div>
        ) : (
          <>
            <img
              src={src}
              alt={alt}
              width={400}
              height={200}
              className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain mb-2"
            />
            <div className="text-center">
              <div
                className={`${sponsorFont} text-gray-700 font-medium font-mokoto`}
              >
                {sponsorName}
              </div>
            </div>
          </>
        )}
      </div>
      {isDiamond && (
        <>
          <div className="absolute top-3 left-3 w-3 h-3 bg-cyan-300 opacity-70 transform rotate-45"></div>
          <div className="absolute top-3 right-3 w-3 h-3 bg-cyan-300 opacity-70 transform rotate-45"></div>
          <div className="absolute bottom-3 left-3 w-3 h-3 bg-cyan-300 opacity-70 transform rotate-45"></div>
          <div className="absolute bottom-3 right-3 w-3 h-3 bg-cyan-300 opacity-70 transform rotate-45"></div>
        </>
      )}
      {isPlatinum && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
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
};

export default SponsorCard;
