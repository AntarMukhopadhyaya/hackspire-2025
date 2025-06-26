"use client";
import { motion } from 'framer-motion';

const tracks = [
  {
    name: "Cyber Shakti",
    icon: "🛡️",
    color: "from-red-500 to-amber-500",
    description: "Cybersecurity warfare and digital protection"
  },
  {
    name: "Smart Shristi",
    icon: "🧠",
    color: "from-blue-400 to-cyan-500",
    description: "AI solutions for modern India"
  },
  {
    name: "Code Trance",
    icon: "🌀",
    color: "from-purple-500 to-fuchsia-500",
    description: "Web3 and blockchain revolution"
  },
  {
    name: "LokNaath Connect",
    icon: "🌾",
    color: "from-emerald-400 to-green-500",
    description: "Rural tech for grassroots impact"
  }
];

export default function TracksSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 glitch-text-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              Challenge Tracks
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Choose your battlefield in these four domains where technology meets tradition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r rounded-lg from-pink-600 to-purple-600 opacity-75 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"></div>
              <div className="relative bg-gray-900 rounded-lg p-8 h-full flex flex-col">
                <div className={`text-5xl mb-6 w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br ${track.color}`}>
                  {track.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{track.name}</h3>
                <p className="text-gray-300 mb-6">{track.description}</p>
                <div className="mt-auto">
                  <button className="text-sm font-medium bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-all duration-300 flex items-center group">
                    Explore Track
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}