"use client";
import React from "react";
import GloryBentoGrid from "../../components/GloryBentoGrid";
import GloryAnimatedText from "../../components/GloryAnimatedText";

function Glory() {
  return (
    <div className="min-h-screen text-white py-20 px-4">
      {/* Centered Glory Title */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-bold text-white font-distancia">
          Glory
        </h1>

        {/* Subtext with Poppins font */}
        <p
          className="text-xl md:text-2xl text-gray-300 mt-8 max-w-4xl mx-auto leading-relaxed"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Celebrating the extraordinary achievements and groundbreaking
          innovations from last year's HACKSPIRE hackathon. Witness the
          incredible projects, brilliant minds, and revolutionary solutions that
          emerged from our community of passionate developers, designers, and
          innovators.
        </p>
      </div>

      {/* Bento Grid Section */}
      <div className="mt-20">
        <GloryBentoGrid />
      </div>

      {/* Animated Text Section */}
      <div className="mt-20">
        <GloryAnimatedText />
      </div>
    </div>
  );
}

export default Glory;
