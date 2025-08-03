"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const cellCodes = [
  "malloc(1024)",
  "free(ptr)",
  "strcpy(dest, src)",
  'printf("Hello World")',
  "fork()",
  "pthread_create(&thread, NULL, func, NULL)",
  "socket(AF_INET, SOCK_STREAM, 0)",
  "bind(sockfd, &addr, sizeof(addr))",
  "listen(sockfd, 5)",
  "accept(sockfd, NULL, NULL)",
  "read(fd, buffer, 256)",
  "write(fd, data, strlen(data))",
  'open("/dev/null", O_RDWR)',
  "close(fd)",
  'execve("/bin/sh", argv, envp)',
  "waitpid(pid, &status, 0)",
  "kill(pid, SIGTERM)",
  "signal(SIGINT, handler)",
  "mmap(NULL, size, PROT_READ, MAP_PRIVATE, fd, 0)",
  "munmap(addr, size)",
  "ioctl(fd, cmd, arg)",
  "select(nfds, &readfds, NULL, NULL, &timeout)",
  "poll(fds, nfds, timeout)",
  "epoll_create(1)",
  "setsockopt(sockfd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt))",
];

export default function CellTerminal() {
  const [currentCode, setCurrentCode] = useState("");
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCode =
        cellCodes[Math.floor(Math.random() * cellCodes.length)];
      setCurrentCode(randomCode);

      setDisplayedLines((prev) => {
        const newLines = [...prev, `> ${randomCode}`];
        // Keep only last 6 lines
        return newLines.slice(-6);
      });
    }, 2000); // Execute new code every 2 seconds

    return () => clearInterval(interval);
  }, []);

  if (isMinimized) {
    return (
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        className="fixed bottom-4 right-32 z-50 bg-black bg-opacity-90 border border-cyan-400 rounded-lg p-2 cursor-move hover:bg-opacity-100 transition-all"
        onClick={() => setIsMinimized(false)}
        whileDrag={{ scale: 1.05, zIndex: 100 }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-cyan-400 rounded"></div>
          <span
            className="text-cyan-400 text-xs select-none"
            style={{ fontFamily: "Mokoto Demo" }}
          >
            TERM
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      className="fixed bottom-4 right-32 z-50 bg-black bg-opacity-90 border border-cyan-400 rounded-lg p-3 w-80 h-40 overflow-hidden cursor-move"
      whileDrag={{ scale: 1.02, zIndex: 100 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-cyan-400 pb-1 mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex items-center space-x-3">
          <span
            className="text-cyan-400 text-xs select-none"
            style={{ fontFamily: "Mokoto Demo" }}
          >
            CELL_EXEC
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(true);
            }}
            className="text-cyan-400 hover:text-white transition-colors text-xs"
            title="Minimize"
            style={{ pointerEvents: "auto" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13H5v-2h14v2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="space-y-1 overflow-y-auto max-h-24">
        {displayedLines.map((line, index) => (
          <div
            key={index}
            className="text-cyan-400 text-xs font-mono leading-tight"
            style={{
              fontFamily: "Mokoto Demo",
              opacity: index === displayedLines.length - 1 ? 1 : 0.7,
            }}
          >
            {line}
          </div>
        ))}
        {/* Blinking cursor */}
        <div className="flex items-center">
          <span
            className="text-cyan-400 text-xs"
            style={{ fontFamily: "Mokoto Demo" }}
          >
            {">"}
          </span>
          <div className="w-2 h-3 bg-cyan-400 ml-1 animate-pulse"></div>
        </div>
      </div>

      {/* Terminal Footer with fake stats */}
      <div className="absolute bottom-1 left-3 right-3 flex justify-between text-xs text-cyan-400 opacity-60 select-none">
        <span style={{ fontFamily: "Mokoto Demo" }}>PID: 1337</span>
        <span style={{ fontFamily: "Mokoto Demo" }}>MEM: 42%</span>
        <span style={{ fontFamily: "Mokoto Demo" }}>CPU: 15%</span>
      </div>
    </motion.div>
  );
}
