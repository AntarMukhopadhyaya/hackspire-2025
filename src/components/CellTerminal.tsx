"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  isTyping?: boolean;
}

const botGreeting =
  "Greetings, digital wanderer! I am your AI companion for Hackspire - Kolkata's biggest hackathon! Ready to assist with any queries about our cyberpunk-themed event. What would you like to know?";

export default function CellTerminal() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isMinimized, setIsMinimized] = useState(true);
  const [showGreeting, setShowGreeting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show greeting after some time
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(true);
      addBotMessage(botGreeting);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: "",
      isBot: true,
      isTyping: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true);

    // Simulate typing animation
    let currentText = "";
    const words = text.split(" ");
    let wordIndex = 0;

    const typeInterval = setInterval(() => {
      if (wordIndex < words.length) {
        currentText += (currentText ? " " : "") + words[wordIndex];
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === newMessage.id
              ? { ...msg, text: currentText, isTyping: true }
              : msg
          )
        );
        wordIndex++;
      } else {
        clearInterval(typeInterval);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === newMessage.id ? { ...msg, isTyping: false } : msg
          )
        );
        setIsTyping(false);
      }
    }, 100); // Type each word every 100ms
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: text,
      isBot: false,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
  };

  const getMockResponse = (userMessage: string) => {
    const responses = [
      "Welcome to Hackspire! Kolkata's biggest hackathon with a cyberpunk vibe. What can I help you with?",
      "Interesting question! At Hackspire, we focus on innovation and creativity in a cyberpunk atmosphere.",
      "That's a great point! Our hackathon brings together the best minds in Kolkata for an epic coding adventure.",
      "Hackspire is all about pushing boundaries and creating something amazing in our cyberpunk-themed environment.",
      "I'm here to help you navigate the world of Hackspire! What would you like to know about our event?",
      "The cyberpunk theme adds a unique flavor to our hackathon experience. Ready to dive into the future?",
      "Hackspire is where innovation meets creativity in Kolkata's most exciting hackathon!",
      "Great question! Our event combines cutting-edge technology with the cyberpunk aesthetic you love.",
    ];

    // Simple response selection based on message length
    const index = userMessage.length % responses.length;
    return responses[index];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isTyping) {
      const userMessage = inputValue.trim();
      addUserMessage(userMessage);

      // Get mock response
      const botResponse = getMockResponse(userMessage);
      addBotMessage(botResponse);
    }
  };

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
      className="fixed bottom-4 right-32 z-50 bg-black bg-opacity-90 border border-cyan-400 rounded-lg p-3 w-96 h-48 overflow-hidden cursor-move"
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
            TERM
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

      {/* Chat Messages */}
      <div className="space-y-1 overflow-y-auto max-h-28 mb-2 scrollbar-hide">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`text-xs font-mono leading-tight ${
              message.isBot ? "text-green-400" : "text-blue-400"
            }`}
            style={{ fontFamily: "Mokoto Demo" }}
          >
            <span className="opacity-60">{">"}</span> {message.text}
            {message.isTyping && (
              <span className="inline-block w-2 h-3 bg-green-400 ml-1 animate-pulse"></span>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <span
          className="text-cyan-400 text-xs"
          style={{ fontFamily: "Mokoto Demo" }}
        >
          {">"}
        </span>
        <div className="w-2 h-3 bg-cyan-400 animate-pulse mr-1"></div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isTyping}
          className="flex-1 bg-transparent text-cyan-400 text-xs outline-none border-none"
          style={{ fontFamily: "Mokoto Demo" }}
          aria-label="Chat input"
          title="Type your message here"
        />
      </form>

      {/* Terminal Footer with fake stats */}
      <div className="absolute bottom-1 left-3 right-3 flex justify-between text-xs text-cyan-400 opacity-60 select-none">
        <span style={{ fontFamily: "Mokoto Demo" }}>AI: ONLINE</span>
        <span style={{ fontFamily: "Mokoto Demo" }}>
          CHAT: {messages.length}
        </span>
        <span style={{ fontFamily: "Mokoto Demo" }}>CPU: 15%</span>
      </div>
    </motion.div>
  );
}
