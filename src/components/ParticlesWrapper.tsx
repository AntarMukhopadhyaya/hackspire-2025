"use client";

import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

// Global state to prevent reinitializing particles engine on every navigation
let globalEngineInitialized = false;
let globalEnginePromise: Promise<void> | null = null;

export default function ParticlesWrapper() {
  const [init, setInit] = useState(globalEngineInitialized);
  const initRef = useRef(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (initRef.current || globalEngineInitialized) {
      setInit(true);
      return;
    }

    initRef.current = true;

    // If already initializing, wait for it
    if (globalEnginePromise) {
      globalEnginePromise.then(() => {
        setInit(true);
        globalEngineInitialized = true;
      });
      return;
    }

    // Initialize only once globally
    globalEnginePromise = initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      globalEngineInitialized = true;
      setInit(true);
    });
  }, []);

  // Show a minimal loading state instead of null to prevent layout shift
  if (!init) {
    return (
      <div className="fixed inset-0 pointer-events-none particles-container opacity-0">
        <div className="w-full h-full bg-transparent" />
      </div>
    );
  }

  const options = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.6,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: { min: 0.3, max: 0.8 },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="fixed inset-0 pointer-events-none particles-container">
      <Particles id="tsparticles" options={options} />
    </div>
  );
}
