"use client";
import React, { useState, useEffect } from "react";
import { Filter, Users, Code, Wrench, Star } from "lucide-react";
import { CrewCard, type CrewMember } from "../../components/CrewCard";
import crewMembersData from "../../data/crew-members.json";

const filterOptions = [
  { id: "all", label: "All Crews", icon: Filter },
  { id: "spireorgs", label: "SpireOrgs", icon: Users },
  { id: "hackbuilders", label: "HackBuilders", icon: Code },
  { id: "spiregineers", label: "Spiregineers", icon: Wrench },
  { id: "spireteers", label: "Spireteers", icon: Star },
];

function Crews() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [crewMembers, setCrewMembers] = useState<CrewMember[]>([]);

  useEffect(() => {
    setCrewMembers(crewMembersData);
  }, []);

  const filteredMembers =
    activeFilter === "all"
      ? crewMembers
      : crewMembers.filter((member) => member.crew === activeFilter);

  return (
    <div className="min-h-screen text-white py-20 px-4">
      {/* Centered Crews Title */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-bold text-white font-distancia">
          Crews
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-xl mx-auto leading-relaxed font-['Poppins']">
          Meet the organizing members behind Hackspire.
          <br />
          Each crew plays a vital role in making the event possible.
        </p>
      </div>

      {/* Filter Section */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {filterOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
                  backdrop-blur-md bg-white/10
                  hover:bg-white/20
                  transition-all duration-300 ease-out
                  ${
                    activeFilter === option.id
                      ? "bg-white/30 text-white"
                      : "text-white/80 hover:text-white"
                  }
                `}
              >
                <IconComponent size={18} />
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Crew Cards Grid */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
          {filteredMembers.map((member) => (
            <CrewCard key={member.id} member={member} />
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center mt-16">
            <p className="text-gray-400 text-lg">
              No crew members found for the selected filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Crews;
