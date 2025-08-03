"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { useAudio } from "./AudioContext";

export function NavbarDemo() {
  const { isPlaying, toggleAudio, isInitialized } = useAudio();

  // Debug logging
  useEffect(() => {
    console.log("NavbarDemo: Audio state -", { isPlaying, isInitialized });
  }, [isPlaying, isInitialized]);

  const navItems = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Tracks",
      link: "/tracks",
    },
    {
      name: "Schedule",
      link: "#schedule",
    },
    {
      name: "Glory",
      link: "/glory",
    },
    {
      name: "Crews",
      link: "/crews",
    },
    {
      name: "Collaborations",
      link: "/collabs",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="mt-2">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleAudio}
              className="flex items-center justify-center w-10 h-10 transition-colors duration-200 z-50 relative"
              title={isPlaying ? "Mute Audio" : "Unmute Audio"}
            >
              {isPlaying ? (
                <Volume2 className="w-5 h-5 text-white hover:text-gray-300" />
              ) : (
                <VolumeX className="w-5 h-5 text-white hover:text-gray-300" />
              )}
            </button>
            {/* Discord Icon Button */}
            <a
              href="https://discord.gg/8qpHgECDH3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 transition-all duration-200 hover:scale-110 hover:opacity-80 cursor-pointer z-50 relative"
              title="Join our Discord"
              onClick={(e) => {
                console.log("Discord icon clicked!");
                // Let the default link behavior happen
              }}
              style={{
                pointerEvents: "auto",
                zIndex: 9999,
              }}
            >
              <Image
                src="/icons/discord.svg"
                alt="Discord"
                width={24}
                height={24}
                className="w-6 h-6 pointer-events-none"
              />
            </a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              {/* Audio Toggle Button for Mobile */}
              <button
                onClick={toggleAudio}
                className="flex items-center justify-center w-8 h-8 transition-colors duration-200 z-50 relative"
                title={isPlaying ? "Mute Audio" : "Unmute Audio"}
              >
                {isPlaying ? (
                  <Volume2 className="w-4 h-4 text-white hover:text-gray-300" />
                ) : (
                  <VolumeX className="w-4 h-4 text-white hover:text-gray-300" />
                )}
              </button>
              {/* Discord Icon Button for Mobile */}
              <a
                href="https://discord.gg/8qpHgECDH3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 transition-all duration-200 hover:scale-110 hover:opacity-80 cursor-pointer z-50 relative"
                title="Join our Discord"
                onClick={(e) => {
                  console.log("Mobile Discord icon clicked!");
                  // Let the default link behavior happen
                }}
                style={{
                  pointerEvents: "auto",
                  zIndex: 9999,
                }}
              >
                <Image
                  src="/icons/discord.svg"
                  alt="Discord"
                  width={20}
                  height={20}
                  className="w-5 h-5 pointer-events-none"
                />
              </a>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white hover:text-black transition-colors duration-200"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              {/* Discord Link for Mobile Menu */}
              <a
                href="https://discord.gg/8qpHgECDH3"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-white hover:text-black transition-colors duration-200 px-4 py-2 rounded-md border border-white/20 hover:bg-white/10"
              >
                <Image
                  src="/icons/discord.svg"
                  alt="Discord"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span>Join Discord</span>
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
