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
import CyberButton from "@/components/ui/CyberButton";
import GloryBentoGrid from "../../components/GloryBentoGrid";
import { TrapeziumShape } from "@/components/ui/TrapeziumShape";
import { CircuitOverlay } from "@/components/ui/CircuitOverlay";
import {
  modalBackdrop,
  modalContent,
  titleFadeIn,
  subtitleFadeIn,
  cardFadeInUp,
  glorySectionAnimation,
  ctaSectionAnimation,
} from "@/lib/motionVariants";
import {
  TRACKS_TITLE_CLASSES,
  TRACKS_SUBTITLE_CLASSES,
  TRACKS_CONTAINER_CLASSES,
  MATRIX_WRAPPER_CLASSES,
  MATRIX_OPACITY_CONTAINER,
  MODAL_PANEL_CLASSES,
  TRACKS_CLIP_PATHS,
  TRACK_CARD_CONTAINER_CLASSES,
  TRACK_CARD_BG_CLASSES,
  TRACK_CARD_BORDER_CLASSES,
  TRACK_CARD_GLITCH_RED_CLASSES,
  TRACK_CARD_GLITCH_CYAN_CLASSES,
  TRACK_CARD_CONTENT_CLASSES,
  TRACK_HEADER_CLASSES,
  TRACK_ICON_CONTAINER_CLASSES,
  TRACK_ARTICLE_BUTTON_CLASSES,
  TRACK_TITLE_CLASSES,
  TRACK_SUBTITLE_CLASSES,
  TRACK_DESCRIPTION_CLASSES,
  TRACK_CHALLENGES_TITLE_CLASSES,
  TRACK_CHALLENGE_TAG_CLASSES,
  GLORY_SECTION_TITLE_CLASSES,
  GLORY_SECTION_SUBTITLE_CLASSES,
  CTA_SECTION_TITLE_CLASSES,
  CTA_SECTION_TEXT_CLASSES,
} from "@/lib/styles";

const tracks = [
  {
    id: 1,
    title: "NEURAL FIREWALL",
    subtitle: "Digital fortress engineering and cyber warfare",
    description:
      "Engineer neural-net defense matrices against hostile code infiltration. Deploy AI-driven countermeasures and quantum-encrypted channels for autonomous threat neutralization.",
    icon: FaShieldAlt,
    challenges: [
      "System Penetration",
      "Code Reverse Engineering",
      "Quantum Cryptography",
      "Network Packet Injection",
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
    title: "SYNTHETIC INTELLIGENCE",
    subtitle: "Neural network deployment and machine consciousness",
    description:
      "Architect cognitive algorithms and deploy sentient learning systems. Engineer deep neural architectures and autonomous decision engines for advanced machine cognition.",
    icon: FaBrain,
    challenges: [
      "Neural Pattern Recognition",
      "Autonomous Language Processing",
      "Behavioral Prediction Algorithms",
      "Deep Cognitive Networks",
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
    title: "BLOCKCHAIN NEXUS",
    subtitle: "Decentralized protocol architecture and crypto-economy",
    description:
      "Forge distributed digital economy through blockchain protocols. Deploy autonomous smart contracts, architect DeFi ecosystems, and construct DAO governance networks.",
    icon: FaGlobe,
    challenges: [
      "Protocol Smart Contracts",
      "Decentralized Finance Architecture",
      "Token Engineering",
      "Autonomous Organization Systems",
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
    title: "EDGE PROTOCOL",
    subtitle: "Distributed sensor networks and sustainable tech infrastructure",
    description:
      "Deploy edge computing nodes and sustainable tech grids across remote sectors. Engineer IoT sensor networks and mesh connectivity for self-sustaining ecosystems.",
    icon: FaSeedling,
    challenges: [
      "Distributed IoT Sensor Arrays",
      "Energy Grid Optimization",
      "Mesh Network Protocols",
      "Self-Sustaining Tech Systems",
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
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const openArticle = (track: any) => {
    setSelectedArticle(track.article);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div
      className={TRACKS_CONTAINER_CLASSES}
      style={
        {
          // expose CSS vars for clip-path usage throughout the page
          "--clip-path-main-trap": TRACKS_CLIP_PATHS.mainTrapezium,
          "--clip-path-left-trap-main": TRACKS_CLIP_PATHS.leftTrapMain,
          "--clip-path-left-trap-secondary":
            TRACKS_CLIP_PATHS.leftTrapSecondary,
          "--clip-path-right-trap-main": TRACKS_CLIP_PATHS.rightTrapMain,
          "--clip-path-right-trap-secondary":
            TRACKS_CLIP_PATHS.rightTrapSecondary,
          "--clip-path-triangle-up": TRACKS_CLIP_PATHS.triangleCutUp,
          "--clip-path-triangle-down": TRACKS_CLIP_PATHS.triangleCutDown,
          "--clip-path-track-card": TRACKS_CLIP_PATHS.trackCard,
        } as React.CSSProperties
      }
    >
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
      {/* Matrix Rain Background */}
      <div className={MATRIX_WRAPPER_CLASSES}>
        <div className={MATRIX_OPACITY_CONTAINER}>
          <style>
            {Array.from({ length: 50 })
              .map((_, i) => {
                const delay = Math.random() * 5;
                const duration = 3 + Math.random() * 4;
                return `.matrix-column-${i} { left: ${
                  i * 2
                }%; animation-delay: ${delay}s; animation-duration: ${duration}s; }`;
              })
              .join("\n")}
          </style>
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`absolute top-0 text-green-400 font-mono text-xs leading-none matrix-column-animated matrix-column-${i}`}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="opacity-70">
                  {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Yellow Trapezium Background with Clip-Path - Responsive */}
      <div className="absolute top-0 left-0 right-0 h-80 sm:h-96 md:h-[28rem] z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "var(--clip-path-main-trap)" }}
        >
          {/* PCB-like circuit overlay */}
          <CircuitOverlay variant="main" opacity="medium" />
        </div>
      </div>

      {/* Left Side Trapezium Shapes */}
      <div className="absolute left-0 top-1/4 w-20 h-64 z-0">
        <TrapeziumShape variant="left-main" />
      </div>
      <div className="absolute left-0 top-3/4 w-16 h-48 z-0">
        <TrapeziumShape variant="left-secondary" />
      </div>

      {/* Right Side Trapezium Shapes */}
      <div className="absolute right-0 top-1/4 w-20 h-64 z-0">
        <TrapeziumShape variant="right-main" />
      </div>
      <div className="absolute right-0 top-3/4 w-16 h-48 z-0">
        <TrapeziumShape variant="right-secondary" />
      </div>

      {/* Additional Smaller Side Shapes */}
      <div className="absolute left-0 top-1/2 w-12 h-32 z-0">
        <TrapeziumShape variant="left-small" />
      </div>
      <div className="absolute left-0 top-1/6 w-14 h-40 z-0">
        <TrapeziumShape variant="left-small" />
      </div>
      <div className="absolute right-0 top-1/2 w-12 h-32 z-0">
        <TrapeziumShape variant="right-small" />
      </div>
      <div className="absolute right-0 top-1/6 w-14 h-40 z-0">
        <TrapeziumShape variant="right-small" />
      </div>

      {/* Centered Tracks Title */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1 {...titleFadeIn} className={TRACKS_TITLE_CLASSES}>
          Tracks
        </motion.h1>
        <motion.p {...subtitleFadeIn} className={TRACKS_SUBTITLE_CLASSES}>
          Choose your digital warfare arena across four cyber-domains where
          innovation shapes reality.
          <br />
          Each path unlocks hardcore challenges and system-breaking potential.
        </motion.p>
      </div>

      {/* Track Cards */}
      <div className="max-w-7xl mx-auto mt-20 mb-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            return (
              <motion.div
                key={track.id}
                {...cardFadeInUp(index * 0.15)}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
                <div className={TRACK_CARD_CONTAINER_CLASSES}>
                  {/* Background with clip-path cuts */}
                  <div
                    className={TRACK_CARD_BG_CLASSES}
                    style={{
                      clipPath: "var(--clip-path-track-card)",
                    }}
                  ></div>

                  {/* Border with clip-path cuts */}
                  <div
                    className={TRACK_CARD_BORDER_CLASSES}
                    style={{
                      clipPath: "var(--clip-path-track-card)",
                      zIndex: -1,
                    }}
                  ></div>

                  {/* Glitch overlays for hover effect */}
                  <div
                    className={TRACK_CARD_GLITCH_RED_CLASSES}
                    style={{
                      clipPath: "var(--clip-path-track-card)",
                      mixBlendMode: "screen",
                      transform: "translateX(-2px)",
                      zIndex: 1,
                    }}
                  ></div>

                  <div
                    className={TRACK_CARD_GLITCH_CYAN_CLASSES}
                    style={{
                      clipPath: "var(--clip-path-track-card)",
                      mixBlendMode: "screen",
                      transform: "translateX(2px)",
                      zIndex: 2,
                    }}
                  ></div>

                  {/* Content */}
                  <div className={TRACK_CARD_CONTENT_CLASSES}>
                    {/* Track Header with Icon */}
                    <div className={TRACK_HEADER_CLASSES}>
                      <div className={TRACK_ICON_CONTAINER_CLASSES}>
                        <IconComponent className="w-8 h-8 text-black" />
                      </div>

                      <button
                        onClick={() => openArticle(track)}
                        className={TRACK_ARTICLE_BUTTON_CLASSES}
                        title="Read detailed article"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Track Title with Orange Underline */}
                    <div className="mb-4">
                      <h3
                        className={TRACK_TITLE_CLASSES}
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {track.title}
                      </h3>
                      {/* Orange Underline */}
                      <div className="w-16 h-1 bg-orange-500 mb-3"></div>
                      <p
                        className={TRACK_SUBTITLE_CLASSES}
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {track.subtitle}
                      </p>
                    </div>

                    {/* Always Visible Content - Description */}
                    <div className="border-t border-black/20 pt-3 mt-3 flex-1">
                      {/* Description */}
                      <p
                        className={TRACK_DESCRIPTION_CLASSES}
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {track.description}
                      </p>

                      {/* Challenge Areas */}
                      <div>
                        <h4
                          className={TRACK_CHALLENGES_TITLE_CLASSES}
                          style={{ fontFamily: "'Mokoto Demo', monospace" }}
                        >
                          Core Challenge Vectors:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {track.challenges.map((challenge, idx) => (
                            <span
                              key={idx}
                              className={TRACK_CHALLENGE_TAG_CLASSES}
                              style={{
                                fontFamily: "'Mokoto Demo', monospace",
                              }}
                            >
                              {challenge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Glory Bento Grid Section - Moved from Glory page */}
      <motion.div
        {...glorySectionAnimation}
        className="mt-20 mb-16 relative z-10"
      >
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className={GLORY_SECTION_TITLE_CLASSES}>Glory Hall</h2>
          <p className={GLORY_SECTION_SUBTITLE_CLASSES}>
            Witness the extraordinary achievements and groundbreaking
            innovations from last year's HACKSPIRE hackathon
          </p>
        </div>

        <GloryBentoGrid />
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div
        {...ctaSectionAnimation}
        className="text-center mt-2 relative z-10"
      >
        <h2 className={CTA_SECTION_TITLE_CLASSES}>
          Initialize Digital Uprising?
        </h2>
        <p className={CTA_SECTION_TEXT_CLASSES}>
          Join the neural network of elite code architects in the ultimate
          digital battleground
        </p>

        {/* Cyberpunk Register Button */}
        <CyberButton href="https://discord.gg/8qpHgECDH3">
          ACCESS PROTOCOL
        </CyberButton>
      </motion.div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            {...modalBackdrop}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeArticle}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div
              {...modalContent}
              onClick={(e) => e.stopPropagation()}
              className={MODAL_PANEL_CLASSES}
            >
              <button
                onClick={closeArticle}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                ✕
              </button>
              <div className="pr-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sddystopiandemo">
                  {selectedArticle.title}
                </h1>
                <div className="text-gray-300 text-base leading-relaxed whitespace-pre-line font-mokoto">
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
