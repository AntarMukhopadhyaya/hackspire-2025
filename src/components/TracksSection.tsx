"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ChromaGrid = dynamic(
  () => import("./blocks/Components/ChromaGrid/ChromaGrid"),
  { ssr: false }
);

const tracks = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Cyber Shakti",
    subtitle: "Cybersecurity warfare and digital protection",
    handle: "🛡️",
    borderColor: "#EF4444",
    gradient: "linear-gradient(145deg, #EF4444, #F59E0B)",
    url: "#cyber-shakti",
    imageHover:
      "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Smart Shristi",
    subtitle: "AI solutions for modern India",
    handle: "🧠",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(180deg, #3B82F6, #06B6D4)",
    url: "#smart-shristi",
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Code Trance",
    subtitle: "Web3 and blockchain revolution",
    handle: "🌀",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(165deg, #8B5CF6, #EC4899)",
    url: "#code-trance",
  },
  {
    image: "https://i.pravatar.cc/300?img=4",
    title: "LokNaath Connect",
    subtitle: "Rural tech for grassroots impact",
    handle: "🌾",
    borderColor: "#10B981",
    gradient: "linear-gradient(195deg, #10B981, #059669)",
    url: "#loknaath-connect",
  },
];

export default function TracksSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="px-4 md:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl font-bold mb-6 glitch-text-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              Challenge Tracks
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Choose your battlefield in these four domains where technology meets
            tradition
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ height: "450px", position: "relative" }}
        >
          <ChromaGrid
            items={tracks}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </motion.div>
      </div>
    </section>
  );
}
