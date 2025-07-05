"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { link } from "fs";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

export function NavbarDemo() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Tracks",
      link: "#tracks",
    },
    {
      name: "Schedule",
      link: "#schedule",
    },
    {
      name: "Crews",
      link: "/crews",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const [audioInitialized, setAudioInitialized] = useState(false);
  const [audioWaitingForInteraction, setAudioWaitingForInteraction] =
    useState(false);
  const [isClient, setIsClient] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Initialize audio on component mount (client-side only)
  useEffect(() => {
    if (!isClient) return;

    const initializeAudio = async () => {
      if (audioRef.current && !audioInitialized) {
        const audio = audioRef.current;

        // Preload and setup audio immediately
        audio.volume = 0.3;
        audio.loop = true;
        audio.muted = false;
        audio.preload = "auto";

        // Force load the audio
        audio.load();

        const tryPlayAudio = async () => {
          try {
            // Multiple aggressive attempts to start audio
            audio.currentTime = 0;
            const playPromise = audio.play();
            await playPromise;
            setAudioInitialized(true);
            setAudioWaitingForInteraction(false);
            console.log("Audio started successfully");
            return true;
          } catch (error) {
            console.log("Audio play attempt failed:", error);
            return false;
          }
        };

        // Immediate play attempts
        let playSuccess = false;

        // Attempt 1: Direct play
        playSuccess = await tryPlayAudio();

        if (!playSuccess) {
          // Attempt 2: After a micro delay
          setTimeout(async () => {
            playSuccess = await tryPlayAudio();
            if (!playSuccess) {
              // Attempt 3: Set up aggressive interaction listeners
              console.log("Setting up immediate audio triggers");

              const enableAudio = async () => {
                if (isAudioPlaying && audio) {
                  const success = await tryPlayAudio();
                  if (success) {
                    // Remove listeners once successful
                    document.removeEventListener("click", enableAudio);
                    document.removeEventListener("touchstart", enableAudio);
                    document.removeEventListener("keydown", enableAudio);
                    document.removeEventListener("mouseover", enableAudio);
                    document.removeEventListener("scroll", enableAudio);
                    window.removeEventListener("focus", enableAudio);
                  }
                }
              };

              // Add multiple aggressive listeners
              document.addEventListener("click", enableAudio, {
                once: true,
                passive: true,
              });
              document.addEventListener("touchstart", enableAudio, {
                once: true,
                passive: true,
              });
              document.addEventListener("keydown", enableAudio, { once: true });
              document.addEventListener("mouseover", enableAudio, {
                once: true,
                passive: true,
              });
              document.addEventListener("scroll", enableAudio, {
                once: true,
                passive: true,
              });
              window.addEventListener("focus", enableAudio, { once: true });

              // Try to trigger on any animation frame
              const tryOnAnimationFrame = () => {
                if (!audioInitialized) {
                  tryPlayAudio().then((success) => {
                    if (!success) {
                      requestAnimationFrame(tryOnAnimationFrame);
                    }
                  });
                }
              };
              requestAnimationFrame(tryOnAnimationFrame);
            }
          }, 10);
        }
      }
    };

    // Try immediately, no delay
    initializeAudio();
  }, [isClient, isAudioPlaying]);

  // Handle audio play/pause when state changes
  useEffect(() => {
    if (audioRef.current && audioInitialized) {
      if (isAudioPlaying) {
        audioRef.current.play().catch((error) => {
          console.log("Error playing audio:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isAudioPlaying, audioInitialized]);

  const toggleAudio = async () => {
    // Toggle the audio state
    const newPlayingState = !isAudioPlaying;
    setIsAudioPlaying(newPlayingState);

    if (audioRef.current) {
      if (newPlayingState) {
        // User wants to play audio
        try {
          audioRef.current.volume = 0.3;
          audioRef.current.loop = true;
          audioRef.current.currentTime = 0;
          await audioRef.current.play();
          setAudioInitialized(true);
          setAudioWaitingForInteraction(false);
        } catch (error) {
          console.log("Error starting audio:", error);
          // Don't set to false, keep trying on next interaction
        }
      } else {
        // User wants to pause audio
        audioRef.current.pause();
      }
    }
  };

  return (
    <div className="relative w-full">
      {/* Audio element - only render on client to avoid hydration mismatch */}
      {isClient && (
        <audio
          ref={audioRef}
          src="/audio/attention.mp3"
          preload="auto"
          autoPlay
          playsInline
          loop
          muted={false}
          controls={false}
          crossOrigin="anonymous"
          onCanPlayThrough={() => {
            // Try to play as soon as it can play through
            if (audioRef.current && isAudioPlaying && !audioInitialized) {
              audioRef.current.play().catch(() => {
                console.log("CanPlayThrough play attempt failed");
              });
            }
          }}
          onLoadedData={() => {
            // Try to play as soon as data is loaded
            if (audioRef.current && isAudioPlaying && !audioInitialized) {
              audioRef.current.play().catch(() => {
                console.log("LoadedData play attempt failed");
              });
            }
          }}
        />
      )}

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
              title={isAudioPlaying ? "Mute Audio" : "Unmute Audio"}
            >
              {isAudioPlaying ? (
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
                title={isAudioPlaying ? "Mute Audio" : "Unmute Audio"}
              >
                {isAudioPlaying ? (
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
