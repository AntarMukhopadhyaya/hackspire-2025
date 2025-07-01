"use client";
import { motion } from "framer-motion";
import ProfileCard from "./blocks/Components/ProfileCard/ProfileCard";

const teamMembers = [
  {
    id: 1,
    avatarUrl: "https://i.pravatar.cc/300?img=11",
    name: "Aarav Sharma",
    title: "Lead Organizer",
    handle: "aarvsh",
    status: "Online",
  },
  {
    id: 2,
    avatarUrl: "https://i.pravatar.cc/300?img=12",
    name: "Priya Patel",
    title: "Community Manager",
    handle: "priyap",
    status: "Online",
  },
  {
    id: 3,
    avatarUrl: "https://i.pravatar.cc/300?img=13",
    name: "Rohan Verma",
    title: "Tech Lead",
    handle: "rohanv",
    status: "Coding",
  },
  {
    id: 4,
    avatarUrl: "https://i.pravatar.cc/300?img=14",
    name: "Neha Gupta",
    title: "Design Lead",
    handle: "neha_g",
    status: "Designing",
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden" id="team">
      <div className="px-4 md:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
         <h2 className="text-5xl font-bold mb-6 glitch-text-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              Our Team
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            The passionate individuals behind Hackspire 2025, working tirelessly to make this event a success.
          </p>
        </motion.div>

     <div className="w-full max-w-7xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 justify-items-center px-4">
    {teamMembers.map((member) => (
      <motion.div
        key={member.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <ProfileCard
          avatarUrl={member.avatarUrl}
          name={member.name}
          title={member.title}
          handle={member.handle}
          status={member.status}
          contactText="Message"
          showBehindGradient={false}
          className="w-full max-w-sm"
        />
      </motion.div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}