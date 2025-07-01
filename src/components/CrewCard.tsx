import React from "react";
import Image from "next/image";
import { Github, Instagram, Linkedin } from "lucide-react";

interface CrewMember {
  id: number;
  name: string;
  position: string;
  image: string;
  instagram: string;
  github: string;
  linkedin: string;
  crew: string;
}

interface CrewCardProps {
  member: CrewMember;
}

export function CrewCard({ member }: CrewCardProps) {
  return (
    <div className="relative w-80 h-96">
      {/* Combined Card Container - This will act as single component for animations */}
      <div className="relative w-80 h-96">
        {/* Black rounded background box */}
        <div
          className="absolute inset-0 bg-black rounded-lg"
          style={{
            width: "320px",
            height: "387px",
          }}
        />

        {/* SVG card overlay */}
        <img
          src="/images/crewcard.svg"
          alt="Crew Card"
          className="absolute inset-0 w-80 h-auto z-15"
          style={{ width: "320px", height: "387px" }}
        />
      </div>

      {/* Content overlays */}
      {/* Instagram icon at top left corner */}
      <div className="absolute top-2 left-2 z-20">
        <Instagram size={24} className="text-white" />
      </div>

      {/* SPIRECREW text on the colored strip */}
      <div className="absolute top-0 right-4 z-20">
        <span
          className="text-white text-sm font-thin tracking-wide"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          SPIRECREW
        </span>
      </div>

      {/* HACKSPIRE text vertically on the left red strip */}
      <div className="absolute top-1/2 left-1 transform -translate-y-1/2 z-20">
        <span
          className="text-neutral-500 text-base font-medium tracking-wide"
          style={{
            fontFamily: "Poppins, sans-serif",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          HACKSPIRE 2025
        </span>
      </div>

      {/* Developer Image - Center of the card cutout */}
      <div className="absolute top-[46%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-75 h-75 rounded-lg overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          width={320}
          height={320}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Crew Member Name - Bottom area */}
      <div className="absolute bottom-8 left-7 z-20">
        <h2
          className="text-gray-300 text-2xl font-medium text-left"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {member.name}
        </h2>
      </div>

      {/* Position - Bottom area below name */}
      <div className="absolute bottom-2 left-10 z-20">
        <p
          className="text-gray-400 text-base text-left"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {member.position}
        </p>
      </div>

      {/* Social Icons - Bottom right corner */}
      <div className="absolute bottom-2 right-4 z-20 flex gap-2">
        <a href={member.github} target="_blank" rel="noopener noreferrer">
          <Github
            size={20}
            className="text-white hover:text-gray-300 transition-colors"
          />
        </a>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin
            size={20}
            className="text-white hover:text-gray-300 transition-colors"
          />
        </a>
      </div>
    </div>
  );
}

export type { CrewMember };
