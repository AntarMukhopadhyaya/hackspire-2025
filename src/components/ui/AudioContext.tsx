"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface AudioContextType {
  isPlaying: boolean;
  isInitialized: boolean;
  isLoading: boolean;
  volume: number;
  toggleAudio: () => void;
  setVolume: (volume: number) => void;
  initializeAudio: () => Promise<void>;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

interface AudioProviderProps {
  children: React.ReactNode;
}

// Global audio state to persist across navigation
let globalAudio: HTMLAudioElement | null = null;
let globalIsPlaying = true;
let globalIsInitialized = false;
let globalVolume = 0.3;

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(globalIsPlaying);
  const [isInitialized, setIsInitialized] = useState(globalIsInitialized);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolumeState] = useState(globalVolume);
  const [isClient, setIsClient] = useState(false);

  const initializationAttempted = useRef(false);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Create global audio element once
  useEffect(() => {
    if (!isClient || globalAudio) return;

    globalAudio = new Audio("/audio/attention.mp3");
    globalAudio.loop = true;
    globalAudio.volume = globalVolume;
    globalAudio.preload = "auto";

    // Auto-play setup
    const attemptAutoPlay = async () => {
      if (!globalAudio) return;

      try {
        globalAudio.currentTime = 0;
        await globalAudio.play();
        globalIsInitialized = true;
        setIsInitialized(true);
        console.log("Audio auto-started successfully");
      } catch (error) {
        console.log("Auto-play blocked, setting up interaction listeners");

        const handleInteraction = async () => {
          if (globalAudio && globalIsPlaying) {
            try {
              await globalAudio.play();
              globalIsInitialized = true;
              setIsInitialized(true);
              console.log("Audio started after interaction");
              removeListeners();
            } catch (err) {
              console.log("Audio play failed:", err);
            }
          }
        };

        const removeListeners = () => {
          document.removeEventListener("click", handleInteraction);
          document.removeEventListener("touchstart", handleInteraction);
          document.removeEventListener("keydown", handleInteraction);
          document.removeEventListener("mousemove", handleInteraction);
          document.removeEventListener("scroll", handleInteraction);
        };

        document.addEventListener("click", handleInteraction, { once: true });
        document.addEventListener("touchstart", handleInteraction, {
          once: true,
        });
        document.addEventListener("keydown", handleInteraction, { once: true });
        document.addEventListener("mousemove", handleInteraction, {
          once: true,
        });
        document.addEventListener("scroll", handleInteraction, { once: true });
      }
    };

    // Load and attempt to play
    globalAudio.addEventListener("canplaythrough", attemptAutoPlay, {
      once: true,
    });
    globalAudio.load();

    return () => {
      // Don't destroy globalAudio on component unmount to persist across navigation
      // It will be cleaned up when the entire app unmounts
    };
  }, [isClient]);

  // Sync component state with global state
  useEffect(() => {
    setIsPlaying(globalIsPlaying);
    setIsInitialized(globalIsInitialized);
    setVolumeState(globalVolume);
  }, []);

  const initializeAudio = async (): Promise<void> => {
    if (
      !globalAudio ||
      globalIsInitialized ||
      initializationAttempted.current
    ) {
      return;
    }

    initializationAttempted.current = true;
    setIsLoading(true);

    try {
      globalAudio.currentTime = 0;
      await globalAudio.play();
      globalIsInitialized = true;
      setIsInitialized(true);
      console.log("Manual audio initialization successful");
    } catch (error) {
      console.log("Manual audio initialization failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAudio = async () => {
    if (!globalAudio) return;

    try {
      if (globalIsPlaying) {
        globalAudio.pause();
        globalIsPlaying = false;
        setIsPlaying(false);
        console.log("Audio paused");
      } else {
        if (!globalIsInitialized) {
          await initializeAudio();
        } else {
          await globalAudio.play();
        }
        globalIsPlaying = true;
        setIsPlaying(true);
        console.log("Audio resumed");
      }
    } catch (error) {
      console.log("Error toggling audio:", error);
    }
  };

  const setVolume = (newVolume: number) => {
    globalVolume = newVolume;
    setVolumeState(newVolume);
    if (globalAudio) {
      globalAudio.volume = newVolume;
    }
  };

  const contextValue: AudioContextType = {
    isPlaying,
    isInitialized,
    isLoading,
    volume,
    toggleAudio,
    setVolume,
    initializeAudio,
  };

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  );
};
