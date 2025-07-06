"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaBrain,
  FaGlobe,
  FaSeedling,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Image from "next/image";

const tracks = [
  {
    id: 1,
    title: "Cyber Shakti",
    subtitle: "Cybersecurity warfare and digital protection",
    description:
      "Build robust defense systems against cyber threats. Develop cutting-edge security solutions, implement blockchain-based authentication, create threat detection algorithms, and design secure communication protocols that protect digital infrastructure from evolving cyber attacks.",
    icon: FaShieldAlt,
    challenges: [
      "Penetration Testing",
      "Malware Analysis",
      "Cryptography",
      "Network Security",
    ],
    hoverImage:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    article: {
      title: "The Future of Cybersecurity: Defending Digital India",
      content: `In an era where digital transformation is accelerating rapidly across India, cybersecurity has become more critical than ever. The Cyber Shakti track challenges participants to build next-generation security solutions that can protect our digital infrastructure.

**Key Focus Areas:**
• **Zero Trust Architecture**: Design security models that verify every transaction
• **AI-Powered Threat Detection**: Use machine learning to identify and neutralize threats in real-time
• **Blockchain Security**: Implement decentralized security protocols for enhanced protection
• **IoT Security**: Secure the growing network of connected devices across smart cities

**Why It Matters:**
With India's digital economy projected to reach $1 trillion by 2025, securing this digital ecosystem is paramount. From protecting sensitive government data to safeguarding financial transactions, cybersecurity professionals are the guardians of our digital future.

**What You'll Build:**
Participants will develop innovative security solutions including intrusion detection systems, secure communication protocols, vulnerability assessment tools, and advanced encryption mechanisms. The goal is to create solutions that can scale with India's growing digital needs.`,
    },
  },
  {
    id: 2,
    title: "Smart Shristi",
    subtitle: "AI solutions for modern India",
    description:
      "Harness the power of artificial intelligence to solve India's unique challenges. Create intelligent systems using machine learning, deep learning, and neural networks. Develop AI-powered solutions for healthcare, education, agriculture, and smart cities that can transform millions of lives.",
    icon: FaBrain,
    challenges: [
      "Computer Vision",
      "NLP",
      "Predictive Analytics",
      "Deep Learning",
    ],
    hoverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    article: {
      title: "AI for India: Building Intelligent Solutions for Tomorrow",
      content: `Artificial Intelligence is not just a technological advancement; it's a tool for social transformation. The Smart Shristi track focuses on leveraging AI to solve uniquely Indian challenges and improve the lives of over 1.4 billion people.

**Innovation Areas:**
• **Healthcare AI**: Diagnostic tools for remote areas, drug discovery, and personalized medicine
• **Educational AI**: Adaptive learning systems, language processing for regional languages
• **Agricultural AI**: Crop monitoring, yield prediction, and smart irrigation systems
• **Urban AI**: Traffic optimization, waste management, and resource allocation

**The Indian Context:**
India's diverse linguistic landscape, varying levels of digital literacy, and unique socio-economic challenges require AI solutions that are contextually aware and culturally sensitive.

**Impact Potential:**
AI solutions developed in this track have the potential to reach millions of Indians, from farmers in rural villages to students in metropolitan cities. The focus is on creating inclusive AI that bridges gaps rather than widening them.

**Technical Focus:**
Participants will work with cutting-edge technologies including computer vision for medical imaging, natural language processing for regional languages, predictive analytics for agricultural planning, and deep learning for complex problem-solving.`,
    },
  },
  {
    id: 3,
    title: "Code Trance",
    subtitle: "Web3 and blockchain revolution",
    description:
      "Pioneer the decentralized future with blockchain technology. Build smart contracts, create DeFi protocols, develop NFT marketplaces, and design Web3 applications. Explore cryptocurrency, tokenomics, and distributed systems that will revolutionize how we interact with the digital world.",
    icon: FaGlobe,
    challenges: [
      "Smart Contracts",
      "DeFi Protocols",
      "NFT Development",
      "DAOs",
    ],
    hoverImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    article: {
      title: "Decentralizing the Future: Web3 and Blockchain Innovation",
      content: `The Code Trance track represents the cutting edge of decentralized technology. As we move towards Web3, participants will build the infrastructure and applications that will define the next generation of the internet.

**Blockchain Fundamentals:**
• **Smart Contracts**: Self-executing contracts with terms directly written into code
• **Decentralized Finance (DeFi)**: Financial services without traditional intermediaries
• **NFTs and Digital Assets**: Unique digital ownership and creative economy
• **Decentralized Autonomous Organizations (DAOs)**: Community-governed organizations

**Real-World Applications:**
Blockchain technology has applications far beyond cryptocurrency. From supply chain transparency to digital identity verification, from voting systems to intellectual property protection, the possibilities are endless.

**Technical Challenges:**
• **Scalability**: Building solutions that can handle millions of transactions
• **Interoperability**: Creating systems that work across different blockchain networks
• **Security**: Ensuring smart contracts are bug-free and exploit-resistant
• **User Experience**: Making Web3 applications as intuitive as Web2

**The Vision:**
Participants will contribute to building a more transparent, democratic, and user-controlled internet where individuals have true ownership of their data and digital assets.`,
    },
  },
  {
    id: 4,
    title: "LokNaath Connect",
    subtitle: "Rural tech for grassroots impact",
    description:
      "Bridge the digital divide with sustainable technology solutions. Create eco-friendly innovations for rural communities, develop IoT systems for agriculture, build renewable energy solutions, and design accessible technology that empowers rural India while preserving the environment.",
    icon: FaSeedling,
    challenges: [
      "IoT for Agriculture",
      "Renewable Energy",
      "Rural Connectivity",
      "Sustainable Tech",
    ],
    hoverImage:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    article: {
      title: "Technology for the Grassroots: Empowering Rural India",
      content: `The LokNaath Connect track focuses on creating technology solutions that directly impact rural communities, where 65% of India's population resides. This track is about building sustainable, accessible, and impactful solutions for the backbone of our nation.

**Core Mission:**
To bridge the digital divide and create technology that is not just for urban elite but for every Indian, regardless of their geographical location or economic status.

**Key Innovation Areas:**
• **Smart Agriculture**: IoT sensors for soil monitoring, automated irrigation, crop health analysis
• **Renewable Energy**: Solar microgrids, wind energy solutions, energy storage systems
• **Rural Connectivity**: Low-cost internet solutions, mesh networks, satellite connectivity
• **Sustainable Development**: Waste management, water purification, environmental monitoring

**Ground Realities:**
Rural India faces unique challenges - intermittent power supply, limited internet connectivity, diverse linguistic needs, and varying levels of technical literacy. Solutions must be robust, simple, and culturally appropriate.

**Impact Metrics:**
Success is measured not just in technical sophistication but in real-world adoption and positive impact on rural livelihoods. Can a farmer increase crop yield? Can a village access clean water? Can a remote school connect to digital education?

**Technology Stack:**
Participants will work with IoT devices, renewable energy systems, mobile technologies, satellite communication, and edge computing to create solutions that work in challenging rural environments.`,
    },
  },
];

function Tracks() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const openArticle = (track: any) => {
    setSelectedArticle(track.article);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen text-white py-20 px-4 relative overflow-hidden">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-500/10 rounded-full blur-xl animate-pulse delay-2000" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-red-500/10 rounded-full blur-xl animate-pulse delay-3000" />
      </div>

      {/* Logo watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 z-0">
        <Image
          src="/icons/logoicon.svg"
          alt="HackSpire Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Centered Tracks Title */}
      <div className="text-center mb-20 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white font-distancia mb-6"
        >
          Tracks
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Choose your battlefield in these four domains where technology meets
          tradition.
        </motion.p>
      </div>

      {/* Track Cards */}
      <div className="max-w-7xl mx-auto mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            const isHovered = hoveredCard === track.id;

            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(track.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: {
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom smooth easing
                  },
                }}
                className="relative group cursor-pointer backdrop-blur-md bg-white/5 rounded-2xl p-8 transition-all duration-300 border border-white/10 overflow-hidden"
                style={{
                  backgroundColor: isHovered
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(255,255,255,0.05)",
                  borderColor: isHovered
                    ? "rgba(255,255,255,0.2)"
                    : "rgba(255,255,255,0.1)",
                }}
              >
                {/* Simple hover effect without flickering background */}
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-green-500/20 pointer-events-none" />

                {/* Simple floating particles without complex animations */}
                {isHovered && (
                  <>
                    <div className="absolute top-6 right-6 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse" />
                    <div
                      className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </>
                )}

                {/* Card content */}
                <div className="relative h-full z-10">
                  {/* Track Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="p-4 rounded-xl backdrop-blur-md border transition-all duration-200"
                      style={{
                        backgroundColor: isHovered
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(255,255,255,0.1)",
                        borderColor: isHovered
                          ? "rgba(255,255,255,0.3)"
                          : "rgba(255,255,255,0.2)",
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      <div
                        style={{
                          color: isHovered ? "#ffffff" : "#e5e7eb",
                          transition: "color 0.2s ease",
                        }}
                      >
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>

                    <button
                      onClick={() => openArticle(track)}
                      className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
                      title="Read detailed article"
                      style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? "scale(1)" : "scale(0.8)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Track Title & Subtitle */}
                  <div
                    className="mb-6 transition-transform duration-200"
                    style={{
                      transform: isHovered
                        ? "translateY(-2px)"
                        : "translateY(0)",
                    }}
                  >
                    <h3
                      className="text-3xl md:text-4xl font-bold text-white mb-2 font-distancia transition-all duration-200"
                      style={{
                        transform: isHovered ? "scale(1.01)" : "scale(1)",
                        color: isHovered ? "#ffffff" : "#f9fafb",
                      }}
                    >
                      {track.title}
                    </h3>
                    <p
                      className="text-gray-400 text-lg transition-colors duration-200"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        color: isHovered ? "#d1d5db" : "#9ca3af",
                      }}
                    >
                      {track.subtitle}
                    </p>
                  </div>

                  {/* Hover Content - Description */}
                  {isHovered && (
                    <div
                      className="border-t border-white/20 pt-6 mt-6 opacity-0 animate-in slide-in-from-bottom-4 duration-300"
                      style={{
                        opacity: 1,
                        animation: "fadeInUp 0.3s ease-out forwards",
                      }}
                    >
                      {/* Description */}
                      <p
                        className="text-gray-300 text-base leading-relaxed mb-4"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {track.description}
                      </p>

                      {/* Challenge Areas */}
                      <div className="mb-4">
                        <h4
                          className="text-white font-semibold mb-2"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          Key Challenge Areas:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {track.challenges.map((challenge, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/90 backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-200"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                animationDelay: `${idx * 0.05}s`,
                              }}
                            >
                              {challenge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-20 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-distancia">
          Ready to Build the Future?
        </h2>
        <p
          className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Join thousands of innovators in India's most prestigious hackathon
        </p>

        {/* Register Button styled like About page */}
        <motion.a
          href="https://discord.gg/8qpHgECDH3"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:bg-white/20"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Register Now
        </motion.a>
      </motion.div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeArticle}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-8"
            >
              {/* Close Button */}
              <button
                onClick={closeArticle}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                ✕
              </button>

              {/* Article Content */}
              <div className="pr-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 font-distancia">
                  {selectedArticle.title}
                </h1>
                <div
                  className="text-gray-300 text-base leading-relaxed whitespace-pre-line"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {selectedArticle.content}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Tracks;
