import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Github, Instagram, Linkedin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

interface CrewMember {
  id: number;
  name: string;
  position: string;
  image: string;
  instagram: string;
  github: string;
  linkedin: string;
  twitter: string;
  crew: string;
  crewfilter: string;
}

interface CrewCardProps {
  member: CrewMember;
}

export function CrewCard({ member }: CrewCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Handle mouse movement for tilt effect and shine
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    // Reduce the divisor for more dramatic effect
    const rotateY = (x - rect.width / 2) / 10;
    const rotateX = -((y - rect.height / 2) / 10);

    // Update mouse position for shine effect (normalized from 0 to 100)
    const normalizedX = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const normalizedY = Math.max(0, Math.min(100, (y / rect.height) * 100));

    setMousePosition({ x: normalizedX, y: normalizedY });
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    // Reset rotation and hover state when mouse leaves
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <div
      className="w-72 md:w-72 lg:w-80 h-[22rem] md:h-[22rem] lg:h-96 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.01)", borderRadius: 0 }}
    >
      <div
        ref={cardRef}
        className="relative w-80 h-96 crew-card-tilt md:scale-90 lg:scale-100 transform-gpu"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={
          {
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            "--mouse-x": `${mousePosition.x}%`,
            "--mouse-y": `${mousePosition.y}%`,
            "--shine-opacity": isHovering ? "1" : "0",
          } as React.CSSProperties
        }
      >
        {/* Combined Card Container - This will act as single component for animations */}
        <div className="relative w-80 h-96 crew-card-tilt-content">
          {/* Black background with subtle corner cuts */}
          <div
            className="absolute inset-0 bg-black"
            style={{
              width: "320px",
              height: "387px",
              clipPath:
                "polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)",
              WebkitClipPath:
                "polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)",
              borderRadius: 0,
              transition: "clip-path 0s, border-radius 0s",
            }}
          />

          {/* SVG card overlay */}
          <img
            src="https://res.cloudinary.com/dislegzga/image/upload/v1755361827/crewcard4_bzzzbf.png"
            alt="Crew Card"
            className="absolute inset-0 w-80 h-auto z-15"
            style={{ width: "320px", height: "387px" }}
          />
        </div>

        {/* Content overlays */}
        {/* Instagram icon at top left corner */}
        <div
          className="absolute top-2 left-2 z-[25]"
          style={{
            transform: `translateZ(5px)`,
          }}
        >
          <a
            href={
              member.instagram && member.instagram.trim() !== ""
                ? member.instagram
                : "#"
            }
            target={
              member.instagram && member.instagram.trim() !== ""
                ? "_blank"
                : undefined
            }
            rel={
              member.instagram && member.instagram.trim() !== ""
                ? "noopener noreferrer"
                : undefined
            }
            className={`cursor-pointer ${
              !member.instagram || member.instagram.trim() === ""
                ? "opacity-50 pointer-events-none"
                : ""
            }`}
            aria-disabled={!member.instagram || member.instagram.trim() === ""}
          >
            <Instagram
              size={24}
              className="text-black hover:text-gray-700 transition-colors"
            />
          </a>
        </div>

        {/* HACKSPIRE 2025 text horizontally next to Instagram icon */}
        <div
          className="absolute top-1 left-10 z-[25]"
          style={{
            transform: `translateZ(5px)`,
          }}
        >
          <span
            className="text-neutral-500 text-base font-medium tracking-wide"
            style={{
              fontFamily: "Blanka, Impact, Arial Black, sans-serif",
            }}
          >
            HACKSPIRE 2025
          </span>
        </div>

        {/* SPIRECREW text on the colored strip */}
        <div
          className="absolute top-0 right-4 z-[25]"
          style={{
            transform: `translateZ(8px)`,
          }}
        >
          <span
            className="text-white text-sm font-thin tracking-wide"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            SPIRECREW
          </span>
        </div>

        {/* Crew filter text on the left red strip */}
        <div
          className="absolute top-1/2 left-1 z-[50]"
          style={{
            transform: `translateZ(20px) translateY(-50%)`,
          }}
        >
          <span
            className="text-neutral-500 text-lg font-medium tracking-wide"
            style={{
              fontFamily: "Sddystopiandemo-GO7xa, monospace",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
          >
            {member.crewfilter}
          </span>
        </div>

        {/* Developer Image - Center of the card cutout - now with lower z-index */}
        <div
          className="absolute top-[45%] left-[53%] w-72 h-72 rounded-lg overflow-hidden z-[5]"
          style={{
            transform: `translateZ(0px) translateX(-50%) translateY(-50%)`,
          }}
        >
          <Image
            src={member.image}
            alt={member.name}
            width={328}
            height={328}
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* SVG card overlay - now guaranteed to stay above the image */}
        <img
          src="https://res.cloudinary.com/dislegzga/image/upload/v1755361827/crewcard4_bzzzbf.png"
          alt="Crew Card"
          className="absolute inset-0 w-80 h-auto z-[15] pointer-events-none"
          style={{ width: "320px", height: "387px" }}
        />

        {/* Crew Member Name - Bottom area */}
        <div
          className="absolute bottom-8 left-7 z-[25]"
          style={{
            transform: `translateZ(10px)`,
          }}
        >
          <h2
            className="text-black text-2xl font-medium text-left"
            style={{ fontFamily: "Mokoto Demo, monospace" }}
          >
            {member.name}
          </h2>
        </div>

        {/* Position - Bottom area below name */}
        <div
          className="absolute bottom-2 left-10 z-[25]"
          style={{
            transform: `translateZ(8px)`,
          }}
        >
          <p
            className="text-black text-base text-left"
            style={{ fontFamily: "Mokoto Demo, monospace" }}
          >
            {member.position}
          </p>
        </div>

        {/* Social Icons - Bottom right corner */}
        <div
          className="absolute bottom-2 right-4 z-[25] flex gap-2"
          style={{
            transform: `translateZ(8px)`,
          }}
        >
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Github
              size={20}
              className="text-black hover:text-gray-700 transition-colors"
            />
          </a>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Linkedin
              size={20}
              className="text-black hover:text-gray-700 transition-colors"
            />
          </a>
          <a
            href={member.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-black hover:text-gray-700 transition-colors"
              style={{ width: "20px", height: "20px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export type { CrewMember };
