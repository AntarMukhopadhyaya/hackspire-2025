"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
// import { useAudio } from "./AudioContext"; // Commented out for now
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function CyberpunkNavbar() {
  // const { isPlaying, toggleAudio, isInitialized } = useAudio(); // Commented out for now
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize (when switching to desktop)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    {
      name:"Contact Us",
      link:"/contact"
    }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
        <div className="relative w-full">
          <div className="flex items-center justify-between">
            {/* Logo - Outside the cyberpunk container */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/icons/logomain.png"
                alt="Hackspire Logo"
                width={600}
                height={150}
                className="h-16 md:h-20 w-auto object-contain"
                priority
              />
            </Link>

            {/* Main navbar with corner cuts - Positioned to the right */}
            <div className="cyberpunk-navbar relative bg-black/90 backdrop-blur-sm ml-auto">
              <div className="flex items-center px-4 py-2">
                {/* Navigation Items - Desktop */}
                <div className="hidden md:flex items-center">
                  {navItems.map((item, index) => (
                    <div key={item.name} className="flex items-center">
                      <Link
                        href={item.link}
                        className="text-white/80 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium tracking-wide uppercase px-3 py-1"
                      >
                        {item.name}
                      </Link>
                      {index < navItems.length - 1 && (
                        <div className="w-px h-4 bg-yellow-400/30 mx-1"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile hamburger menu */}
                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200 p-1.5"
                    aria-label="Toggle mobile menu"
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Menu className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Audio Control & Discord - Desktop Only */}
                <div className="hidden md:flex items-center space-x-2 ml-6 pl-4 border-l border-yellow-400/30">
                  {/* Audio Toggle - Commented out for now */}
                  {/* <button
                    onClick={toggleAudio}
                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200 p-1.5"
                    aria-label={isPlaying ? "Mute audio" : "Play audio"}
                  >
                    {isPlaying ? (
                      <Volume2 className="w-4 h-4" />
                    ) : (
                      <VolumeX className="w-4 h-4" />
                    )}
                  </button> */}

                  {/* Discord Link */}
                  <Link
                    href="https://discord.gg/your-discord"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200 p-1.5"
                    aria-label="Join Discord"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.30z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="cyberpunk-mobile-menu relative bg-black/95 backdrop-blur-md border border-yellow-400/50 rounded-lg p-6">
              {/* Mobile menu items */}
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white/80 hover:text-yellow-400 transition-colors duration-200 text-base font-medium tracking-wide uppercase py-3 px-4 border-l-2 border-transparent hover:border-yellow-400"
                      style={{ fontFamily: "Mokoto Demo" }}
                    >
                      <span className="flex items-center">
                        <span className="text-yellow-400 mr-2">{">"}</span>
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
