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
import GloryBentoGrid from "../../components/ui/GloryBentoGrid";

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
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Dynamic CSS for matrix columns */}
          <style>
            {Array.from({ length: 50 })
              .map((_, i) => {
                const delay = Math.random() * 5;
                const duration = 3 + Math.random() * 4;
                return `.matrix-column-${i} {
                left: ${i * 2}%;
                animation-delay: ${delay}s;
                animation-duration: ${duration}s;
              }`;
              })
              .join("\n")}
          </style>

          {/* Matrix columns */}
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
      <div className="absolute top-0 left-0 right-0 h-64 sm:h-80 md:h-96 z-0">
        {/* Main trapezium with clip-path */}
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath:
              "polygon(5% 0, 95% 0, 100% 15%, 85% 90%, 75% 100%, 25% 100%, 15% 90%, 0 15%)",
            WebkitClipPath:
              "polygon(5% 0, 95% 0, 100% 15%, 85% 90%, 75% 100%, 25% 100%, 15% 90%, 0 15%)",
          }}
        >
          {/* PCB-like lines - Responsive */}
          <div className="absolute inset-0">
            {/* Horizontal lines */}
            <div className="absolute top-4 sm:top-6 md:top-8 left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute top-8 sm:top-12 md:top-16 left-0 right-0 h-px bg-black opacity-40"></div>
            <div className="absolute top-12 sm:top-18 md:top-24 left-0 right-0 h-px bg-black opacity-30"></div>
            <div className="absolute top-16 sm:top-24 md:top-32 left-0 right-0 h-px bg-black opacity-20"></div>

            {/* Vertical lines */}
            <div className="absolute top-0 bottom-0 left-4 sm:left-6 md:left-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 left-8 sm:left-12 md:left-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 left-12 sm:left-18 md:left-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 left-16 sm:left-24 md:left-32 w-px bg-black opacity-20"></div>
            <div className="absolute top-0 bottom-0 right-4 sm:right-6 md:right-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 right-8 sm:right-12 md:right-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 right-12 sm:right-18 md:right-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 right-16 sm:right-24 md:right-32 w-px bg-black opacity-20"></div>

            {/* Diagonal lines for futuristic effect - Responsive */}
            <div className="absolute top-0 left-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-l-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute top-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-r-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-l-2 border-b-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-r-2 border-b-2 border-black opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Multiple Left Side Vertical Trapezium Shapes - Attached to Screen Edge */}
      <div className="absolute left-0 top-1/4 w-20 h-64 z-0">
        <div className="w-full h-full bg-yellow-400 relative left-trapezium-main">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 left-0 w-full h-8 bg-transparent transform -translate-y-1/2 left-trapezium-cut"></div>

          {/* Circuit board patterns for left trapezium */}
          <div className="absolute inset-0 opacity-60">
            {/* Vertical circuit traces */}
            <div className="absolute top-4 bottom-4 left-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-6 bottom-6 left-4 w-px bg-black opacity-60"></div>
            <div className="absolute top-8 bottom-8 left-6 w-px bg-black opacity-50"></div>

            {/* Horizontal connecting traces */}
            <div className="absolute top-8 left-1 right-1 h-px bg-black opacity-65"></div>
            <div className="absolute top-16 left-2 right-2 h-px bg-black opacity-55"></div>
            <div className="absolute top-24 left-1 right-1 h-px bg-black opacity-50"></div>
            <div className="absolute top-32 left-2 right-2 h-px bg-black opacity-45"></div>

            {/* Connection nodes */}
            <div className="absolute top-7 left-1 w-1 h-1 bg-black rounded-full opacity-70"></div>
            <div className="absolute top-15 left-3 w-1 h-1 bg-black rounded-full opacity-60"></div>
            <div className="absolute top-23 left-5 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-31 left-3 w-1 h-1 bg-black rounded-full opacity-50"></div>

            {/* Small components */}
            <div className="absolute top-12 left-2 w-2 h-0.5 bg-black opacity-55 rounded-sm"></div>
            <div className="absolute top-20 left-4 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-28 left-2 w-2.5 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>

          {/* Additional transparent cuts */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-1/3 right-0 w-4 h-12 bg-transparent trapezium-cut-left"></div>
        </div>
      </div>

      <div className="absolute left-0 top-3/4 w-16 h-48 z-0">
        <div className="w-full h-full bg-yellow-400 relative left-trapezium-secondary">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 left-0 w-full h-6 bg-transparent transform -translate-y-1/2 left-trapezium-cut-secondary"></div>

          {/* Circuit patterns for second left trapezium */}
          <div className="absolute inset-0 opacity-55">
            {/* Vertical traces */}
            <div className="absolute top-3 bottom-3 left-2 w-px bg-black opacity-65"></div>
            <div className="absolute top-5 bottom-5 left-4 w-px bg-black opacity-55"></div>

            {/* Horizontal traces */}
            <div className="absolute top-6 left-1 right-1 h-px bg-black opacity-60"></div>
            <div className="absolute top-12 left-2 right-2 h-px bg-black opacity-50"></div>
            <div className="absolute top-18 left-1 right-1 h-px bg-black opacity-45"></div>

            {/* Connection nodes */}
            <div className="absolute top-5 left-1 w-1 h-1 bg-black rounded-full opacity-65"></div>
            <div className="absolute top-11 left-3 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-17 left-3 w-1 h-1 bg-black rounded-full opacity-50"></div>

            {/* Components */}
            <div className="absolute top-9 left-2 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-15 left-3 w-2 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>

          {/* Additional transparent cuts */}
          <div className="absolute top-1/5 left-1/3 w-6 h-6 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-4/5 right-1/3 w-5 h-5 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      {/* Multiple Right Side Vertical Trapezium Shapes - Attached to Screen Edge */}
      <div className="absolute right-0 top-1/4 w-20 h-64 z-0">
        <div className="w-full h-full bg-yellow-400 relative right-trapezium-main">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-8 bg-transparent transform -translate-y-1/2 right-trapezium-cut"></div>

          {/* Circuit board patterns for right trapezium */}
          <div className="absolute inset-0 opacity-60">
            {/* Vertical circuit traces (mirrored for right side) */}
            <div className="absolute top-4 bottom-4 right-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-6 bottom-6 right-4 w-px bg-black opacity-60"></div>
            <div className="absolute top-8 bottom-8 right-6 w-px bg-black opacity-50"></div>

            {/* Horizontal connecting traces */}
            <div className="absolute top-8 left-1 right-1 h-px bg-black opacity-65"></div>
            <div className="absolute top-16 left-2 right-2 h-px bg-black opacity-55"></div>
            <div className="absolute top-24 left-1 right-1 h-px bg-black opacity-50"></div>
            <div className="absolute top-32 left-2 right-2 h-px bg-black opacity-45"></div>

            {/* Connection nodes */}
            <div className="absolute top-7 right-1 w-1 h-1 bg-black rounded-full opacity-70"></div>
            <div className="absolute top-15 right-3 w-1 h-1 bg-black rounded-full opacity-60"></div>
            <div className="absolute top-23 right-5 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-31 right-3 w-1 h-1 bg-black rounded-full opacity-50"></div>

            {/* Small components */}
            <div className="absolute top-12 right-2 w-2 h-0.5 bg-black opacity-55 rounded-sm"></div>
            <div className="absolute top-20 right-4 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-28 right-2 w-2.5 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>

          {/* Additional transparent cuts */}
          <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-3/4 left-1/4 w-6 h-6 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-1/3 left-0 w-4 h-12 bg-transparent trapezium-cut-right"></div>
        </div>
      </div>

      <div className="absolute right-0 top-3/4 w-16 h-48 z-0">
        <div className="w-full h-full bg-yellow-400 relative right-trapezium-secondary">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-6 bg-transparent transform -translate-y-1/2 right-trapezium-cut-secondary"></div>

          {/* Circuit patterns for second right trapezium */}
          <div className="absolute inset-0 opacity-55">
            {/* Vertical traces (right side) */}
            <div className="absolute top-3 bottom-3 right-2 w-px bg-black opacity-65"></div>
            <div className="absolute top-5 bottom-5 right-4 w-px bg-black opacity-55"></div>

            {/* Horizontal traces */}
            <div className="absolute top-6 left-1 right-1 h-px bg-black opacity-60"></div>
            <div className="absolute top-12 left-2 right-2 h-px bg-black opacity-50"></div>
            <div className="absolute top-18 left-1 right-1 h-px bg-black opacity-45"></div>

            {/* Connection nodes */}
            <div className="absolute top-5 right-1 w-1 h-1 bg-black rounded-full opacity-65"></div>
            <div className="absolute top-11 right-3 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-17 right-3 w-1 h-1 bg-black rounded-full opacity-50"></div>

            {/* Components */}
            <div className="absolute top-9 right-2 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-15 right-3 w-2 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>

          {/* Additional transparent cuts */}
          <div className="absolute top-1/5 right-1/3 w-6 h-6 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-4/5 left-1/3 w-5 h-5 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      {/* Additional Left Side Shapes */}
      <div className="absolute left-0 top-1/2 w-12 h-32 z-0">
        <div className="w-full h-full bg-yellow-600/60 relative left-trapezium-small">
          {/* Small cut in the middle */}
          <div className="absolute top-1/2 left-0 w-full h-4 bg-transparent transform -translate-y-1/2 left-trapezium-cut-small"></div>
          {/* Additional small cuts */}
          <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-3/4 right-1/2 w-3 h-3 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      <div className="absolute left-0 top-1/6 w-14 h-40 z-0">
        <div className="w-full h-full bg-yellow-500/70 relative left-trapezium-tiny">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 left-0 w-full h-5 bg-transparent transform -translate-y-1/2 left-trapezium-cut-tiny"></div>
          {/* Additional cuts */}
          <div className="absolute top-1/4 left-1/3 w-5 h-5 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      {/* Additional Right Side Shapes */}
      <div className="absolute right-0 top-1/2 w-12 h-32 z-0">
        <div className="w-full h-full bg-yellow-600/60 relative right-trapezium-small">
          {/* Small cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-4 bg-transparent transform -translate-y-1/2 right-trapezium-cut-small"></div>
          {/* Additional small cuts */}
          <div className="absolute top-1/4 right-1/2 w-4 h-4 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-3/4 left-1/2 w-3 h-3 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      <div className="absolute right-0 top-1/6 w-14 h-40 z-0">
        <div className="w-full h-full bg-yellow-500/70 relative right-trapezium-tiny">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-5 bg-transparent transform -translate-y-1/2 right-trapezium-cut-tiny"></div>
          {/* Additional cuts */}
          <div className="absolute top-1/4 right-1/3 w-5 h-5 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      {/* Centered Tracks Title */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo"
        >
          Tracks
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto -mt-4 pb-8 text-sm sm:text-sm md:text-xl text-black leading-relaxed font-mokoto px-12 md:px-30"
        >
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
                <div className="relative p-4 group cursor-pointer transition-all duration-300 hover:scale-105 h-full min-h-[460px]">
                  {/* Background with clip-path cuts */}
                  <div
                    className="absolute inset-0 bg-yellow-400 transition-all duration-300 group-hover:animate-pulse"
                    style={{
                      clipPath:
                        "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                    }}
                  ></div>

                  {/* Border with clip-path cuts */}
                  <div
                    className="absolute -inset-1 bg-yellow-500 transition-all duration-300 group-hover:bg-orange-500"
                    style={{
                      clipPath:
                        "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                      zIndex: -1,
                    }}
                  ></div>

                  {/* Glitch overlays for hover effect */}
                  <div
                    className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150 glitch-overlay-1"
                    style={{
                      clipPath:
                        "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                      mixBlendMode: "screen",
                      transform: "translateX(-2px)",
                      zIndex: 1,
                    }}
                  ></div>

                  <div
                    className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150 glitch-overlay-2"
                    style={{
                      clipPath:
                        "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                      mixBlendMode: "screen",
                      transform: "translateX(2px)",
                      zIndex: 2,
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Track Header with Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-black/20 rounded-lg">
                        <IconComponent className="w-8 h-8 text-black" />
                      </div>

                      <button
                        onClick={() => openArticle(track)}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-black/20 text-black hover:bg-black/30 transition-all duration-200 hover:scale-110"
                        title="Read detailed article"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Track Title with Orange Underline */}
                    <div className="mb-4">
                      <h3
                        className="text-2xl md:text-3xl font-bold text-black mb-2 transition-all duration-300 group-hover:glitch-text"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {track.title}
                      </h3>
                      {/* Orange Underline */}
                      <div className="w-16 h-1 bg-orange-500 mb-3"></div>
                      <p
                        className="text-black text-lg leading-relaxed transition-all duration-300 group-hover:text-shadow-glow"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {track.subtitle}
                      </p>
                    </div>

                    {/* Always Visible Content - Description */}
                    <div className="border-t border-black/20 pt-3 mt-3 flex-1">
                      {/* Description */}
                      <p
                        className="text-black text-base leading-relaxed mb-2"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {track.description}
                      </p>

                      {/* Challenge Areas */}
                      <div>
                        <h4
                          className="text-black font-semibold mb-1"
                          style={{ fontFamily: "'Mokoto Demo', monospace" }}
                        >
                          Core Challenge Vectors:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {track.challenges.map((challenge, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs bg-black/10 rounded-full text-black backdrop-blur-sm border border-black/20 hover:scale-105 transition-transform duration-200"
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 mb-16 relative z-10"
      >
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sddystopiandemo">
            Glory Hall
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto font-mokoto">
            Witness the extraordinary achievements and groundbreaking
            innovations from last year's HACKSPIRE hackathon
          </p>
        </div>

        <GloryBentoGrid />
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-2 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sddystopiandemo">
          Initialize Digital Uprising?
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto font-mokoto">
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
