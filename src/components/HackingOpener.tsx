"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HackingOpenerProps {
  onComplete: () => void;
}

export default function HackingOpener({ onComplete }: HackingOpenerProps) {
  const [phase, setPhase] = useState<
    | "initial"
    | "logging"
    | "terminals"
    | "codeExecution"
    | "accessGranted"
    | "complete"
  >("initial");
  const [visibleTerminals, setVisibleTerminals] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const terminal1Ref = useRef<HTMLDivElement>(null);
  const terminal2Ref = useRef<HTMLDivElement>(null);

  // Check for mobile and client-side rendering
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation timing constants - Much faster!
  const LOGGING_DURATION = 800;
  const ACCESS_GRANTED_DELAY = 600;

  // Shortened terminal commands for speed
  const terminalCommands = [
    [
      "$ initializing system...",
      "Loading modules... [████████████████] 100%",
      "$ scanning ports...",
      "Port 22: OPEN",
      "Port 443: OPEN",
      "$ executing payload...",
      "Payload injected successfully",
      "Connection established",
    ],
    [
      "$ network discovery initiated",
      "Scanning subnet 192.168.1.0/24...",
      "Found 15 active hosts",
      "$ accessing database...",
      "Database connection established",
      "",
      "Name: HackSpire",
      "Presented by: FIEM ACM STUDENT CHAPTER",
    ],
  ];

  // Deterministic random function
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // Get terminal ref
  const getTerminalRef = (terminalNum: number) => {
    switch (terminalNum) {
      case 1:
        return terminal1Ref;
      case 2:
        return terminal2Ref;
      default:
        return null;
    }
  };

  // Simple typing function that works
  const startTerminalTyping = (terminalNum: number, commands: string[]) => {
    const terminal = getTerminalRef(terminalNum)?.current;
    if (!terminal) {
      console.error(`Terminal ${terminalNum} ref is null!`);
      return;
    }

    console.log(`Starting typing in terminal ${terminalNum}`);
    let commandIndex = 0;
    let charIndex = 0;

    const typeNextChar = () => {
      if (commandIndex >= commands.length) {
        console.log(`Terminal ${terminalNum} completed`);

        // If this is terminal 2, trigger access granted after completion
        if (terminalNum === 2) {
          setTimeout(() => setPhase("accessGranted"), 800);
        }
        return;
      }

      const currentCommand = commands[commandIndex];

      if (charIndex < currentCommand.length) {
        // Build content up to current position
        const content =
          commands.slice(0, commandIndex).join("\n") +
          (commandIndex > 0 ? "\n" : "") +
          currentCommand.slice(0, charIndex + 1);

        terminal.innerHTML = content
          .split("\n")
          .map((line) => `<div class="terminal-line">${line}</div>`)
          .join("");
        terminal.scrollTop = terminal.scrollHeight;

        charIndex++;
        setTimeout(typeNextChar, 5); // Even faster typing
      } else {
        // Move to next command
        commandIndex++;
        charIndex = 0;
        setTimeout(typeNextChar, 50); // Faster pause between commands
      }
    };

    // Start typing after a short delay
    setTimeout(typeNextChar, 100);
  };

  // Main phase control
  useEffect(() => {
    console.log(`Phase changed to: ${phase}`);

    if (phase === "initial") {
      setTimeout(() => setPhase("logging"), 500);
    }

    if (phase === "logging") {
      setTimeout(() => setPhase("terminals"), LOGGING_DURATION);
    }

    if (phase === "terminals") {
      setTimeout(() => {
        setVisibleTerminals([1]);
        setTimeout(() => setPhase("codeExecution"), 200);
      }, 100);
    }

    if (phase === "codeExecution") {
      setTimeout(() => {
        console.log("Starting terminal execution...");

        // Start terminal 1
        startTerminalTyping(1, terminalCommands[0]);

        // Start terminal 2 after delay - wait for it to be rendered
        setTimeout(() => {
          setVisibleTerminals([1, 2]);
          // Wait a bit more for the ref to be available
          setTimeout(() => {
            startTerminalTyping(2, terminalCommands[1]);
          }, 300);
        }, 800);
      }, 500);
    }

    if (phase === "accessGranted") {
      setTimeout(() => {
        setPhase("complete");
        setTimeout(() => onComplete(), 600);
      }, ACCESS_GRANTED_DELAY);
    }
  }, [phase, onComplete]);

  // Generate matrix rain
  const generateMatrixRain = () => {
    if (!isClient) return null;

    return Array.from({ length: 30 }, (_, i) => {
      const leftPos = seededRandom(i * 13) * 100;
      const animDelay = seededRandom(i * 17) * 5;
      const animDuration = seededRandom(i * 19) * 3 + 2;

      return (
        <div
          key={i}
          className="matrix-column"
          style={{
            left: `${leftPos}%`,
            animationDelay: `${animDelay}s`,
            animationDuration: `${animDuration}s`,
          }}
        >
          {Array.from({ length: 15 }, (_, j) => {
            const charAnimDelay = seededRandom((i + j) * 23) * 2;
            const charCode = Math.floor(seededRandom((i + j) * 31) * 96);

            return (
              <span
                key={j}
                className="matrix-char"
                style={{
                  animationDelay: `${charAnimDelay}s`,
                }}
              >
                {String.fromCharCode(0x30a0 + charCode)}
              </span>
            );
          })}
        </div>
      );
    });
  };

  if (phase === "complete") {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
      {/* Matrix Rain Background */}
      {isClient && (
        <div className="absolute inset-0 matrix-rain">
          {generateMatrixRain()}
        </div>
      )}

      {/* Scanning Lines Effect */}
      <div className="absolute inset-0">
        <div className="scan-line"></div>
        <div className="scan-line scan-line-2"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-20 grid-overlay"></div>

      <AnimatePresence mode="wait">
        {phase === "logging" && (
          <motion.div
            key="logging"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center p-4"
          >
            <div className="text-center">
              <h1
                className="text-4xl sm:text-6xl md:text-8xl font-bold text-cyber-yellow mb-6 glitch-text"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                LOGGING USER
              </h1>
              <div className="w-64 sm:w-80 md:w-96 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-cyber-yellow to-cyber-blue rounded-full"
                />
              </div>
              <p className="text-cyber-blue mt-6 font-mono text-lg sm:text-xl tracking-wider">
                INITIALIZING SECURE CONNECTION...
              </p>
            </div>
          </motion.div>
        )}

        {(phase === "terminals" ||
          phase === "codeExecution" ||
          phase === "accessGranted") && (
          <motion.div
            key="terminals"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl h-full max-h-[600px]">
              {/* Terminal 1 - Bottom Layer */}
              <AnimatePresence>
                {visibleTerminals.includes(1) && (
                  <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: -30 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="terminal-window absolute"
                    style={{
                      top: isMobile ? "30px" : "20px",
                      left: isMobile ? "10px" : "20px",
                      right: isMobile ? "50px" : "60px",
                      bottom: isMobile ? "50px" : "60px",
                      zIndex: 1,
                    }}
                  >
                    <div className="terminal-header">
                      <div className="terminal-buttons">
                        <span className="terminal-button red"></span>
                        <span className="terminal-button yellow"></span>
                        <span className="terminal-button green"></span>
                      </div>
                      <span className="terminal-title">root@hackspire:~#</span>
                    </div>
                    <div
                      ref={terminal1Ref}
                      className="terminal-content fixed-height"
                    ></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Terminal 2 - Top Layer with ACCESS GRANTED overlay */}
              <AnimatePresence>
                {visibleTerminals.includes(2) && (
                  <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: -30 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: phase === "accessGranted" ? 1.05 : 1,
                      rotateX: 0,
                    }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="terminal-window absolute"
                    style={{
                      top: isMobile ? "20px" : "10px",
                      left: isMobile ? "20px" : "40px",
                      right: isMobile ? "30px" : "40px",
                      bottom: isMobile ? "40px" : "40px",
                      zIndex: 2,
                    }}
                  >
                    <div className="terminal-header">
                      <div className="terminal-buttons">
                        <span className="terminal-button red"></span>
                        <span className="terminal-button yellow"></span>
                        <span className="terminal-button green"></span>
                      </div>
                      <span className="terminal-title">user@network:~$</span>
                    </div>
                    <div
                      ref={terminal2Ref}
                      className="terminal-content fixed-height"
                    ></div>

                    {phase === "accessGranted" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center bg-black/95 z-10"
                      >
                        <div className="text-center">
                          <h1
                            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-cyber-yellow glitch-text-large"
                            style={{ fontFamily: "'Mokoto Demo', monospace" }}
                          >
                            ACCESS
                          </h1>
                          <h1
                            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-cyber-yellow glitch-text-large mt-2"
                            style={{ fontFamily: "'Mokoto Demo', monospace" }}
                          >
                            GRANTED
                          </h1>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
