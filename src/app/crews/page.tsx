"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Filter, Users, Code, Wrench, Star } from "lucide-react";
import { CrewCard, type CrewMember } from "../../components/ui/CrewCard";
import crewMembersData from "../../data/crew-members.json";

const filterOptions = [
  { id: "all", label: "All Crews", icon: Filter },
  { id: "spireorgs", label: "SpireOrgs", icon: Users },
  { id: "hackbuilders", label: "HackBuilders", icon: Code },
  { id: "spiregineers", label: "Spiregineers", icon: Wrench },
  { id: "spireteers", label: "Spireteers", icon: Star },
];

function Crews() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [crewMembers, setCrewMembers] = useState<CrewMember[]>([]);

  useEffect(() => {
    setCrewMembers(crewMembersData);
  }, []);

  const filteredMembers =
    activeFilter === "all"
      ? crewMembers
      : crewMembers.filter((member) => member.crew === activeFilter);

  return (
    <div className="min-h-screen text-white py-20 px-4 relative">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Dynamic CSS for matrix columns */}
          <style>
            {Array.from({ length: 50 })
              .map((_, i) => {
                const delay = Math.random() * 5;
                const duration = 3 + Math.random() * 4;
                return `.matrix-column-${i} {
                left: ${i * 2}%;
                animation-delay: ${delay}s;
                animation-duration: ${duration}s;
              }`;
              })
              .join("\n")}
          </style>

          {/* Matrix columns */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`absolute top-0 text-green-400 font-mono text-xs leading-none matrix-column-animated matrix-column-${i}`}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="opacity-70">
                  {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Yellow Trapezium Background with Clip-Path */}
      <div className="absolute top-0 left-0 right-0 h-96 z-0">
        {/* Main trapezium with clip-path */}
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath:
              "polygon(3% 0, 97% 0, 100% 11%, 80% 91%, 72% 100%, 24% 100%, 16% 90%, 0 12%)",
          }}
        >
          {/* PCB-like lines */}
          <div className="absolute inset-0">
            {/* Horizontal lines */}
            <div className="absolute top-8 left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute top-16 left-0 right-0 h-px bg-black opacity-40"></div>
            <div className="absolute top-24 left-0 right-0 h-px bg-black opacity-30"></div>
            <div className="absolute top-32 left-0 right-0 h-px bg-black opacity-20"></div>

            {/* Vertical lines */}
            <div className="absolute top-0 bottom-0 left-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 left-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 left-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 left-32 w-px bg-black opacity-20"></div>
            <div className="absolute top-0 bottom-0 right-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 right-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 right-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 right-32 w-px bg-black opacity-20"></div>

            {/* Diagonal lines for futuristic effect */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-black opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Multiple Left Side Vertical Trapezium Shapes - Attached to Screen Edge */}
      <div className="absolute left-0 top-1/4 w-20 h-64 z-0">
        <div className="w-full h-full bg-yellow-400 relative left-trapezium-main">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 left-0 w-full h-8 bg-transparent transform -translate-y-1/2 left-trapezium-cut"></div>

          {/* Circuit board patterns for left trapezium */}
          <div className="absolute inset-0 opacity-60">
            {/* Vertical circuit traces */}
            <div className="absolute top-4 bottom-4 left-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-6 bottom-6 left-4 w-px bg-black opacity-60"></div>
            <div className="absolute top-8 bottom-8 left-6 w-px bg-black opacity-50"></div>

            {/* Horizontal connecting traces */}
            <div className="absolute top-8 left-1 right-1 h-px bg-black opacity-65"></div>
            <div className="absolute top-16 left-2 right-2 h-px bg-black opacity-55"></div>
            <div className="absolute top-24 left-1 right-1 h-px bg-black opacity-50"></div>
            <div className="absolute top-32 left-2 right-2 h-px bg-black opacity-45"></div>

            {/* Connection nodes */}
            <div className="absolute top-7 left-1 w-1 h-1 bg-black rounded-full opacity-70"></div>
            <div className="absolute top-15 left-3 w-1 h-1 bg-black rounded-full opacity-60"></div>
            <div className="absolute top-23 left-5 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-31 left-3 w-1 h-1 bg-black rounded-full opacity-50"></div>

            {/* Small components */}
            <div className="absolute top-12 left-2 w-2 h-0.5 bg-black opacity-55 rounded-sm"></div>
            <div className="absolute top-20 left-4 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-28 left-2 w-2.5 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>

          {/* Additional transparent cuts */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-transparent triangle-cut-up"></div>

          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-transparent triangle-cut-down"></div>

          <div className="absolute top-1/3 right-0 w-4 h-12 bg-transparent trapezium-cut-left"></div>
        </div>
      </div>

      <div className="absolute left-0 top-3/4 w-16 h-48 z-0">
        <div className="w-full h-full bg-yellow-400 relative left-trapezium-secondary">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 left-0 w-full h-6 bg-transparent transform -translate-y-1/2 left-trapezium-cut-secondary"></div>

          {/* Circuit patterns for second left trapezium */}
          <div className="absolute inset-0 opacity-55">
            {/* Vertical traces */}
            <div className="absolute top-3 bottom-3 left-2 w-px bg-black opacity-65"></div>
            <div className="absolute top-5 bottom-5 left-4 w-px bg-black opacity-55"></div>

            {/* Horizontal traces */}
            <div className="absolute top-6 left-1 right-1 h-px bg-black opacity-60"></div>
            <div className="absolute top-12 left-2 right-2 h-px bg-black opacity-50"></div>
            <div className="absolute top-18 left-1 right-1 h-px bg-black opacity-45"></div>

            {/* Connection nodes */}
            <div className="absolute top-5 left-1 w-1 h-1 bg-black rounded-full opacity-65"></div>
            <div className="absolute top-11 left-3 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-17 left-3 w-1 h-1 bg-black rounded-full opacity-50"></div>

            {/* Components */}
            <div className="absolute top-9 left-2 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-15 left-3 w-2 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>

          {/* Additional transparent cuts */}
          <div className="absolute top-1/5 left-1/3 w-6 h-6 bg-transparent triangle-cut-up"></div>

          <div className="absolute top-4/5 right-1/3 w-5 h-5 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      {/* Multiple Right Side Vertical Trapezium Shapes - Attached to Screen Edge */}
      <div className="absolute right-0 top-1/4 w-20 h-64 z-0">
        <div className="w-full h-full bg-yellow-400 relative right-trapezium-main">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-8 bg-transparent transform -translate-y-1/2 right-trapezium-cut"></div>

          {/* Circuit board patterns for right trapezium */}
          <div className="absolute inset-0 opacity-60">
            {/* Vertical circuit traces (mirrored for right side) */}
            <div className="absolute top-4 bottom-4 right-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-6 bottom-6 right-4 w-px bg-black opacity-60"></div>
            <div className="absolute top-8 bottom-8 right-6 w-px bg-black opacity-50"></div>

            {/* Horizontal connecting traces */}
            <div className="absolute top-8 left-1 right-1 h-px bg-black opacity-65"></div>
            <div className="absolute top-16 left-2 right-2 h-px bg-black opacity-55"></div>
            <div className="absolute top-24 left-1 right-1 h-px bg-black opacity-50"></div>
            <div className="absolute top-32 left-2 right-2 h-px bg-black opacity-45"></div>

            {/* Connection nodes */}
            <div className="absolute top-7 right-1 w-1 h-1 bg-black rounded-full opacity-70"></div>
            <div className="absolute top-15 right-3 w-1 h-1 bg-black rounded-full opacity-60"></div>
            <div className="absolute top-23 right-5 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-31 right-3 w-1 h-1 bg-black rounded-full opacity-50"></div>

            {/* Small components */}
            <div className="absolute top-12 right-2 w-2 h-0.5 bg-black opacity-55 rounded-sm"></div>
            <div className="absolute top-20 right-4 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-28 right-2 w-2.5 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>

          {/* Additional transparent cuts */}
          <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-transparent triangle-cut-down"></div>

          <div className="absolute top-3/4 left-1/4 w-6 h-6 bg-transparent triangle-cut-up"></div>

          <div className="absolute top-1/3 left-0 w-4 h-12 bg-transparent trapezium-cut-right"></div>
        </div>
      </div>

      <div className="absolute right-0 top-3/4 w-16 h-48 z-0">
        <div className="w-full h-full bg-yellow-400 relative right-trapezium-secondary">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-6 bg-transparent transform -translate-y-1/2 right-trapezium-cut-secondary"></div>

          {/* Circuit patterns for second right trapezium */}
          <div className="absolute inset-0 opacity-55">
            {/* Vertical traces (right side) */}
            <div className="absolute top-3 bottom-3 right-2 w-px bg-black opacity-65"></div>
            <div className="absolute top-5 bottom-5 right-4 w-px bg-black opacity-55"></div>

            {/* Horizontal traces */}
            <div className="absolute top-6 left-1 right-1 h-px bg-black opacity-60"></div>
            <div className="absolute top-12 left-2 right-2 h-px bg-black opacity-50"></div>
            <div className="absolute top-18 left-1 right-1 h-px bg-black opacity-45"></div>

            {/* Connection nodes */}
            <div className="absolute top-5 right-1 w-1 h-1 bg-black rounded-full opacity-65"></div>
            <div className="absolute top-11 right-3 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-17 right-3 w-1 h-1 bg-black rounded-full opacity-50"></div>

            {/* Components */}
            <div className="absolute top-9 right-2 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-15 right-3 w-2 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>

          {/* Additional transparent cuts */}
          <div className="absolute top-1/5 right-1/3 w-6 h-6 bg-transparent triangle-cut-down"></div>

          <div className="absolute top-4/5 left-1/3 w-5 h-5 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      {/* Additional Left Side Shapes */}
      <div className="absolute left-0 top-1/2 w-12 h-32 z-0">
        <div className="w-full h-full bg-yellow-600/60 relative left-trapezium-small">
          {/* Small cut in the middle */}
          <div className="absolute top-1/2 left-0 w-full h-4 bg-transparent transform -translate-y-1/2 left-trapezium-cut-small"></div>

          {/* Additional small cuts */}
          <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-transparent triangle-cut-up"></div>

          <div className="absolute top-3/4 right-1/2 w-3 h-3 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      <div className="absolute left-0 top-1/6 w-14 h-40 z-0">
        <div className="w-full h-full bg-yellow-500/70 relative left-trapezium-tiny">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 left-0 w-full h-5 bg-transparent transform -translate-y-1/2 left-trapezium-cut-tiny"></div>

          {/* Additional cuts */}
          <div className="absolute top-1/4 left-1/3 w-5 h-5 bg-transparent triangle-cut-up"></div>

          <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      {/* Additional Right Side Shapes */}
      <div className="absolute right-0 top-1/2 w-12 h-32 z-0">
        <div className="w-full h-full bg-yellow-600/60 relative right-trapezium-small">
          {/* Small cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-4 bg-transparent transform -translate-y-1/2 right-trapezium-cut-small"></div>

          {/* Additional small cuts */}
          <div className="absolute top-1/4 right-1/2 w-4 h-4 bg-transparent triangle-cut-down"></div>

          <div className="absolute top-3/4 left-1/2 w-3 h-3 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      <div className="absolute right-0 top-1/6 w-14 h-40 z-0">
        <div className="w-full h-full bg-yellow-500/70 relative right-trapezium-tiny">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-5 bg-transparent transform -translate-y-1/2 right-trapezium-cut-tiny"></div>

          {/* Additional cuts */}
          <div className="absolute top-1/4 right-1/3 w-5 h-5 bg-transparent triangle-cut-down"></div>

          <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      {/* Centered Crews Title */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo"
        >
          Crews
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto -mt-4 pb-8 text-sm sm:text-sm md:text-xl text-black leading-relaxed font-mokoto px-12 md:px-30"
        >
          Meet the organizing members behind Hackspire.
          <br />
          Each crew plays a vital role in making the event possible.
        </motion.p>
      </div>

      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-wrap justify-center gap-4 mt-48 sm:mt-40 md:mt-28">
          {filterOptions.map((option) => {
            const IconComponent = option.icon;
            const isActive = activeFilter === option.id;
            return (
              <motion.button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-filter-button relative overflow-hidden"
              >
                {/* Background with clip-path cuts */}
                <div
                  className={`absolute inset-0 transition-all duration-300 cyber-filter-background ${
                    isActive
                      ? "bg-yellow-400"
                      : "bg-yellow-400/80 hover:bg-yellow-400"
                  }`}
                />

                {/* Border with clip-path cuts */}
                <div
                  className={`absolute -inset-1 transition-all duration-300 cyber-filter-border ${
                    isActive
                      ? "bg-orange-500"
                      : "bg-orange-500/70 hover:bg-orange-500"
                  }`}
                />

                {/* Content */}
                <div
                  className={`relative z-10 flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 font-mokoto ${
                    isActive ? "text-black" : "text-black/80 hover:text-black"
                  }`}
                >
                  <IconComponent size={18} />
                  {option.label}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Crew Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="max-w-7xl mx-auto mt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
          {filteredMembers.map((member) => (
            <CrewCard key={member.id} member={member} />
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center mt-16">
            <p className="text-gray-400 text-lg">
              No crew members found for the selected filter.
            </p>
          </div>
        )}
      </motion.div>

      {/* CSS for matrix animation and cyberpunk styling */}
      <style jsx>{`
        .matrix-column-animated {
          animation: matrix-fall linear infinite;
        }

        @keyframes matrix-fall {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        .cyber-filter-button {
          position: relative;
          overflow: hidden;
        }

        .cyber-filter-background {
          clip-path: polygon(
            15px 0%,
            100% 0%,
            100% calc(100% - 15px),
            calc(100% - 15px) 100%,
            0% 100%,
            0% 15px
          );
        }

        .cyber-filter-border {
          clip-path: polygon(
            15px 0%,
            100% 0%,
            100% calc(100% - 15px),
            calc(100% - 15px) 100%,
            0% 100%,
            0% 15px
          );
          z-index: -1;
        }

        .main-trapezium {
          clip-path: polygon(
            0% 0%,
            100% 0%,
            88% 90%,
            80% 100%,
            20% 100%,
            12% 90%
          );
        }

        .corner-cut-top-left {
          clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
        }

        .corner-cut-top-right {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
        }

        .corner-cut-bottom-left {
          clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
        }

        .corner-cut-bottom-right {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
        }

        .vertical-trapezium-left {
          clip-path: polygon(0% 0%, 100% 10%, 90% 90%, 0% 100%);
        }

        .vertical-trapezium-right {
          clip-path: polygon(0% 10%, 100% 0%, 100% 100%, 10% 90%);
        }
      `}</style>
    </div>
  );
}

export default Crews;
