"use client";
import { motion } from "framer-motion";
const stages = [
  { day: 1, name: "Pratipada", phase: "Ideation", color: "border-cyan-400" },
  { day: 2, name: "Dwitiya", phase: "Team Formation", color: "border-pink-400" },
  { day: 3, name: "Tritiya", phase: "Tech Setup", color: "border-purple-400" },
  { day: 4, name: "Chaturthi", phase: "Hacking Begins", color: "border-yellow-400" },
  { day: 5, name: "Panchami", phase: "Midnight Push", color: "border-green-400" },
  { day: 6, name: "Shashthi", phase: "Morning Boost", color: "border-blue-400" },
  { day: 7, name: "Saptami", phase: "Final Sprint", color: "border-red-400" },
  { day: 8, name: "Ashtami", phase: "Submissions", color: "border-indigo-400" },
  { day: 9, name: "Navami", phase: "Demo Day", color: "border-amber-400" }
];

export default function ScheduleSection() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 [background:radial-gradient(circle_at_center,rgba(120,119,198,0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10 bg-[length:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 neon-text">
            Navratri <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Hack Timeline</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Nine nights of coding glory following the spirit of Durga Puja
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-pink-500 to-purple-500 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-32">
            {stages.map((stage, index) => (
              <div 
                key={index}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                <div className="w-1/2 px-8">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`p-6 border-l-4 ${stage.color} bg-gray-900/50 backdrop-blur-sm rounded-r-lg shadow-lg`}
                  >
                    <div className="text-sm font-mono text-cyan-300 mb-1">Day {stage.day}</div>
                    <h3 className="text-2xl font-bold mb-2">{stage.name}</h3>
                    <p className="text-xl font-medium text-pink-400">{stage.phase}</p>
                    <div className="mt-4">
                      <button className="text-sm font-mono border border-current px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors">
                        View Details →
                      </button>
                    </div>
                  </motion.div>
                </div>
                
                <div className="w-1/2 flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className={`w-8 h-8 rounded-full border-4 ${stage.color} bg-black shadow-[0_0_15px_var(--tw-border-color)]`}
                  >
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-current"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}