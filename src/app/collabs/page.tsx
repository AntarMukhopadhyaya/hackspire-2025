"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { School, Users, BookOpen, Microscope, Calendar, Mail } from "lucide-react";
import Link from "next/link";

function Collaboration() {
  // Sample college data
  const colleges = [
    {
      name: "Future Institute of Engineering & Management",
      logo: "/images/collab/iitd.png",
      role: "Host College",
      location: "Sonarpur, Kolkata"
    },
    {
      name: "Jadavpur University",
      logo: "/images/collab/iitd.png",
      role: "Academic Partner",
      location: "Kolkata"
    },
    {
      name: "Techno India University",
      logo: "/images/collab/iitd.png",
      role: "Technical Partner",
      location: "Kolkata"
    },
    {
      name: "University of Engineering & Management",
      logo: "/images/collab/iitd.png",
      role: "Knowledge Partner",
      location: "Kolkata"
    },
    {
      name: "Institute of Engineering & Management",
      logo: "/images/collab/iitd.png",
      role: "Innovation Partner",
      location: "Kolkata"
    },
    {
      name: "Heritage Institute of Technology",
      logo: "/images/collab/iitd.png",
      role: "Research Partner",
      location: "Kolkata"
    }
  ];

  return (
    <div className="min-h-screen text-white py-20 px-4">
      {/* Centered Collaboration Title */}
      <div className="text-center mb-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white font-distancia"
        >
          Institutional Collaborations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 mt-8 max-w-4xl mx-auto leading-relaxed px-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          HackSpire 2025 is proud to be organized in collaboration with these prestigious institutions
        </motion.p>
      </div>

      {/* Host College Section */}
      <div className="max-w-6xl mx-auto mb-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-distancia">
            Host Institution
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-md bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border-2 border-yellow-400/50"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-32 h-32 relative mb-6 md:mb-0 md:mr-8">
              <Image
                src="/images/collab/iitd.png"
                alt="FIEM Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2 font-distancia">
                Future Institute of Engineering & Management
              </h3>
              <p className="text-lg text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                Sonarpur, Kolkata
              </p>
              <p className="text-white/80" style={{ fontFamily: "Poppins, sans-serif" }}>
                Organizing Institution | ACM Student Chapter
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Partner Colleges Section */}
      <div className="max-w-7xl mx-auto mb-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-distancia">
            Partner Institutions
          </h2>
          <p className="text-base md:text-lg text-gray-300 px-2" style={{ fontFamily: "Poppins, sans-serif" }}>
            We extend our gratitude to these institutions for their support in making HackSpire 2025 possible
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {colleges.filter(c => c.name !== "Future Institute of Engineering & Management").map((college, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-md bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex flex-col h-full items-center text-center">
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src={college.logo}
                    alt={college.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-distancia">
                  {college.name}
                </h3>
                <p className="text-sm text-yellow-300 mb-1">{college.role}</p>
                <p className="text-sm text-white/80 mt-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {college.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Collaboration Benefits Section */}
      <div className="max-w-6xl mx-auto mb-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-distancia">
            About Our Collaborations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 px-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <School className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-distancia">
                Academic Excellence
              </h3>
              <p className="text-white/80 leading-relaxed flex-grow" style={{ fontFamily: "Poppins, sans-serif" }}>
                Our partner institutions represent the finest engineering and technology education in West Bengal, bringing together top students and faculty for this event.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="backdrop-blur-md bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <Users className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-distancia">
                Student Community
              </h3>
              <p className="text-white/80 leading-relaxed flex-grow" style={{ fontFamily: "Poppins, sans-serif" }}>
                This collaboration creates opportunities for students across institutions to network, share knowledge, and build lasting professional relationships.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-md bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <BookOpen className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-distancia">
                Knowledge Sharing
              </h3>
              <p className="text-white/80 leading-relaxed flex-grow" style={{ fontFamily: "Poppins, sans-serif" }}>
                Partner institutions contribute faculty expertise, research insights, and academic resources to enhance the hackathon experience.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="backdrop-blur-md bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <Microscope className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-distancia">
                Innovation Ecosystem
              </h3>
              <p className="text-white/80 leading-relaxed flex-grow" style={{ fontFamily: "Poppins, sans-serif" }}>
                Together, we foster a culture of innovation and problem-solving among engineering students across Kolkata.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ACM Student Chapter Section */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-distancia">
            Organized by FIEM ACM Student Chapter
          </h2>
          <p
            className="text-base md:text-lg text-gray-300 mb-8 px-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            The official student body of Association for Computing Machinery at Future Institute of Engineering & Management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-6 py-3 md:px-8 md:py-4 backdrop-blur-md bg-white/20 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base flex items-center justify-center gap-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Users className="w-5 h-5" />
              About Our Chapter
            </Link>
            <Link
              href="/#schedule"
              className="px-6 py-3 md:px-8 md:py-4 backdrop-blur-md bg-purple-500/20 text-purple-300 font-bold rounded-full hover:bg-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base flex items-center justify-center gap-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Calendar className="w-5 h-5" />
              HackSpire Schedule
            </Link>
            <Link
              href="mailto:acm@fiem.edu.in"
              className="px-6 py-3 md:px-8 md:py-4 backdrop-blur-md bg-green-500/20 text-green-300 font-bold rounded-full hover:bg-green-500/30 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base flex items-center justify-center gap-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Collaboration;