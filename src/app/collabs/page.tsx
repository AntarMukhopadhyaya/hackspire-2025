"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  School,
  Users,
  BookOpen,
  Microscope,
  Calendar,
  Mail,
} from "lucide-react";
import Link from "next/link";
import CyberButton from "@/components/ui/CyberButton";

function Collaboration() {
  const [matrixColumns, setMatrixColumns] = useState<
    Array<{
      id: number;
      characters: string[];
      left: number;
      animationDelay: number;
      animationDuration: number;
    }>
  >([]);

  useEffect(() => {
    // Generate matrix columns on client side
    const columns = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      characters: Array.from({ length: 20 }, () =>
        String.fromCharCode(33 + Math.floor(Math.random() * 94))
      ),
      left: i * 2,
      animationDelay: Math.random() * 5,
      animationDuration: 3 + Math.random() * 4,
    }));
    setMatrixColumns(columns);
  }, []);

  // Sample college data
  const colleges = [
    {
      name: "Future Institute of Engineering & Management",
      logo: "/images/collab/iitd.png",
      role: "Host College",
      location: "Sonarpur, Kolkata",
    },
    {
      name: "Jadavpur University",
      logo: "/images/collab/iitd.png",
      role: "Academic Partner",
      location: "Kolkata",
    },
    {
      name: "Techno India University",
      logo: "/images/collab/iitd.png",
      role: "Technical Partner",
      location: "Kolkata",
    },
    {
      name: "University of Engineering & Management",
      logo: "/images/collab/iitd.png",
      role: "Knowledge Partner",
      location: "Kolkata",
    },
    {
      name: "Institute of Engineering & Management",
      logo: "/images/collab/iitd.png",
      role: "Innovation Partner",
      location: "Kolkata",
    },
    {
      name: "Heritage Institute of Technology",
      logo: "/images/collab/iitd.png",
      role: "Research Partner",
      location: "Kolkata",
    },
  ];

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
          {/* Matrix columns */}
          {matrixColumns.map((column) => (
            <div
              key={column.id}
              className="absolute top-0 text-green-400 font-mono text-xs leading-none"
              style={{
                left: `${column.left}%`,
                animation: `matrix-fall ${column.animationDuration}s linear infinite`,
                animationDelay: `${column.animationDelay}s`,
              }}
            >
              {column.characters.map((char, j) => (
                <div key={j} className="opacity-70">
                  {char}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Yellow Trapezium Background with Clip-Path */}
      <div className="absolute top-0 left-0 right-0 h-96 z-0">
        {/* Main trapezium with clip-path */}
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath:
              "polygon(3% 0, 97% 0, 100% 11%, 80% 91%, 72% 100%, 24% 100%, 16% 90%, 0 12%)",
          }}
        >
          {/* PCB-like lines */}
          <div className="absolute inset-0">
            {/* Horizontal lines */}
            <div className="absolute top-8 left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute top-16 left-0 right-0 h-px bg-black opacity-40"></div>
            <div className="absolute top-24 left-0 right-0 h-px bg-black opacity-30"></div>
            <div className="absolute top-32 left-0 right-0 h-px bg-black opacity-20"></div>

            {/* Vertical lines */}
            <div className="absolute top-0 bottom-0 left-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 left-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 left-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 left-32 w-px bg-black opacity-20"></div>
            <div className="absolute top-0 bottom-0 right-8 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 right-16 w-px bg-black opacity-40"></div>
            <div className="absolute top-0 bottom-0 right-24 w-px bg-black opacity-30"></div>
            <div className="absolute top-0 bottom-0 right-32 w-px bg-black opacity-20"></div>

            {/* Diagonal lines for futuristic effect */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-black opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-black opacity-40"></div>
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
            {/* Horizontal traces */}
            <div className="absolute top-2 left-0 right-0 h-px bg-black opacity-70"></div>
            <div className="absolute top-6 left-0 right-0 h-px bg-black opacity-50"></div>
            <div className="absolute top-10 left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute bottom-2 left-0 right-0 h-px bg-black opacity-70"></div>
            <div className="absolute bottom-6 left-0 right-0 h-px bg-black opacity-50"></div>
            <div className="absolute bottom-10 left-0 right-0 h-px bg-black opacity-60"></div>

            {/* Vertical traces */}
            <div className="absolute top-0 bottom-0 left-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-0 bottom-0 left-6 w-px bg-black opacity-50"></div>
            <div className="absolute top-0 bottom-0 right-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-0 bottom-0 right-6 w-px bg-black opacity-50"></div>

            {/* Connection nodes */}
            <div className="absolute top-4 left-4 w-1 h-1 bg-black opacity-80 rounded-full"></div>
            <div className="absolute top-8 left-8 w-1 h-1 bg-black opacity-80 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-black opacity-80 rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-1 h-1 bg-black opacity-80 rounded-full"></div>
          </div>

          {/* Side cut accent */}
          <div className="absolute top-1/3 right-0 w-4 h-12 bg-transparent trapezium-cut-left"></div>
        </div>
      </div>

      {/* Second left trapezium */}
      <div className="absolute left-0 bottom-1/4 w-16 h-48 z-0">
        <div className="w-full h-full bg-yellow-400 relative left-trapezium-secondary">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 left-0 w-full h-6 bg-transparent transform -translate-y-1/2 left-trapezium-cut-secondary"></div>

          {/* Circuit patterns for second left trapezium */}
          <div className="absolute inset-0 opacity-50">
            {/* Reduced pattern for secondary element */}
            <div className="absolute top-3 left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute top-8 left-0 right-0 h-px bg-black opacity-40"></div>
            <div className="absolute bottom-3 left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute bottom-8 left-0 right-0 h-px bg-black opacity-40"></div>

            <div className="absolute top-0 bottom-0 left-3 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 right-3 w-px bg-black opacity-60"></div>

            {/* Corner accent nodes */}
            <div className="absolute top-6 left-6 w-1 h-1 bg-black opacity-70 rounded-full"></div>
            <div className="absolute bottom-6 right-6 w-1 h-1 bg-black opacity-70 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Multiple Right Side Vertical Trapezium Shapes - Attached to Screen Edge */}
      <div className="absolute right-0 top-1/4 w-20 h-64 z-0">
        <div className="w-full h-full bg-yellow-400 relative right-trapezium-main">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-8 bg-transparent transform -translate-y-1/2 right-trapezium-cut"></div>

          {/* Circuit board patterns for right trapezium */}
          <div className="absolute inset-0 opacity-60">
            {/* Horizontal traces */}
            <div className="absolute top-2 left-0 right-0 h-px bg-black opacity-70"></div>
            <div className="absolute top-6 left-0 right-0 h-px bg-black opacity-50"></div>
            <div className="absolute top-10 left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute bottom-2 left-0 right-0 h-px bg-black opacity-70"></div>
            <div className="absolute bottom-6 left-0 right-0 h-px bg-black opacity-50"></div>
            <div className="absolute bottom-10 left-0 right-0 h-px bg-black opacity-60"></div>

            {/* Vertical traces */}
            <div className="absolute top-0 bottom-0 left-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-0 bottom-0 left-6 w-px bg-black opacity-50"></div>
            <div className="absolute top-0 bottom-0 right-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-0 bottom-0 right-6 w-px bg-black opacity-50"></div>

            {/* Connection nodes */}
            <div className="absolute top-4 left-4 w-1 h-1 bg-black opacity-80 rounded-full"></div>
            <div className="absolute top-8 left-8 w-1 h-1 bg-black opacity-80 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-black opacity-80 rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-1 h-1 bg-black opacity-80 rounded-full"></div>
          </div>

          {/* Side cut accent */}
          <div className="absolute top-1/3 left-0 w-4 h-12 bg-transparent trapezium-cut-right"></div>
        </div>
      </div>

      {/* Second right trapezium */}
      <div className="absolute right-0 bottom-1/4 w-16 h-48 z-0">
        <div className="w-full h-full bg-yellow-400 relative right-trapezium-secondary">
          {/* Cut in the middle */}
          <div className="absolute top-1/2 right-0 w-full h-6 bg-transparent transform -translate-y-1/2 right-trapezium-cut-secondary"></div>

          {/* Circuit patterns for second right trapezium */}
          <div className="absolute inset-0 opacity-50">
            {/* Reduced pattern for secondary element */}
            <div className="absolute top-3 left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute top-8 left-0 right-0 h-px bg-black opacity-40"></div>
            <div className="absolute bottom-3 left-0 right-0 h-px bg-black opacity-60"></div>
            <div className="absolute bottom-8 left-0 right-0 h-px bg-black opacity-40"></div>

            <div className="absolute top-0 bottom-0 left-3 w-px bg-black opacity-60"></div>
            <div className="absolute top-0 bottom-0 right-3 w-px bg-black opacity-60"></div>

            {/* Corner accent nodes */}
            <div className="absolute top-6 left-6 w-1 h-1 bg-black opacity-70 rounded-full"></div>
            <div className="absolute bottom-6 right-6 w-1 h-1 bg-black opacity-70 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content with higher z-index to appear above trapeziums */}
      <div className="relative z-10">
        {/* Centered Collaboration Title */}
        <div className="text-center mb-16 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo -ml-4"
          >
            Collaborations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center max-w-4xl mx-auto -mt-4 pb-8 text-sm sm:text-sm md:text-xl text-black leading-relaxed font-mokoto px-12 md:px-30"
          >
            Elite institutions unite in the digital warfare coalition across
            cyber-domains.
            <br />
            Each partnership strengthens our neural network protocols and system
            supremacy.
          </motion.p>
        </div>

        {/* Host College Section */}
        <div className="max-w-6xl mx-auto mb-20 px-4 mt-40">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sddystopiandemo">
              Host Institution
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
            <div className="relative p-6">
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
              <div className="relative z-10 flex flex-col md:flex-row items-center">
                <div className="w-32 h-32 relative mb-6 md:mb-0 md:mr-8">
                  <Image
                    src="/images/collab/iitd.png"
                    alt="FIEM Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3
                    className="text-2xl md:text-3xl font-bold text-black mb-2 transition-all duration-300 group-hover:glitch-text"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Future Institute of Engineering & Management
                  </h3>
                  {/* Orange Underline */}
                  <div className="w-16 h-1 bg-orange-500 mb-3 mx-auto md:mx-0"></div>
                  <p
                    className="text-lg text-black mb-2 transition-all duration-300 group-hover:text-shadow-glow"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Sonarpur, Kolkata
                  </p>
                  <p
                    className="text-black leading-relaxed"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Organizing Institution | ACM Student Chapter
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partner Colleges Section */}
        <div className="max-w-7xl mx-auto mb-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sddystopiandemo">
              Partner Institutions
            </h2>
            <p
              className="text-base md:text-lg text-white leading-relaxed px-2"
              style={{ fontFamily: "'Mokoto Demo', monospace" }}
            >
              Elite neural networks collaborating in the digital warfare
              protocol matrix
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
            {colleges
              .filter(
                (c) => c.name !== "Future Institute of Engineering & Management"
              )
              .map((college, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group cursor-pointer transition-all duration-300 hover:scale-105 h-full min-h-[280px]"
                >
                  {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
                  <div className="relative p-4 h-full">
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
                    <div className="relative z-10 flex flex-col h-full items-center text-center">
                      <div className="w-24 h-24 relative mb-4">
                        <Image
                          src={college.logo}
                          alt={college.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3
                        className="text-lg md:text-xl font-bold text-black mb-2 transition-all duration-300 group-hover:glitch-text"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {college.name}
                      </h3>
                      {/* Orange Underline */}
                      <div className="w-12 h-1 bg-orange-500 mb-3"></div>
                      <p
                        className="text-sm text-black mb-1 transition-all duration-300 group-hover:text-shadow-glow"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {college.role}
                      </p>
                      <p
                        className="text-sm text-black mt-auto leading-relaxed"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}
                      >
                        {college.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Collaboration Benefits Section */}
        <div className="max-w-6xl mx-auto mb-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sddystopiandemo">
              Neural Network Protocols
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 px-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer transition-all duration-300 hover:scale-105 h-full min-h-[220px]"
            >
              {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
              <div className="relative p-4 h-full">
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

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="p-3 bg-black/20 rounded-lg mb-4 w-fit">
                    <School className="w-8 h-8 text-black" />
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-black mb-2 transition-all duration-300 group-hover:glitch-text"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Academic Excellence
                  </h3>
                  {/* Orange Underline */}
                  <div className="w-16 h-1 bg-orange-500 mb-3"></div>
                  <p
                    className="text-black leading-relaxed flex-grow"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Elite engineering protocols and technology matrices converge
                    from West Bengal's finest institutions, deploying top neural
                    architects for this digital warfare.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative group cursor-pointer transition-all duration-300 hover:scale-105 h-full min-h-[220px]"
            >
              {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
              <div className="relative p-4 h-full">
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

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="p-3 bg-black/20 rounded-lg mb-4 w-fit">
                    <Users className="w-8 h-8 text-black" />
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-black mb-2 transition-all duration-300 group-hover:glitch-text"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Neural Community
                  </h3>
                  {/* Orange Underline */}
                  <div className="w-16 h-1 bg-orange-500 mb-3"></div>
                  <p
                    className="text-black leading-relaxed flex-grow"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Cross-institutional network deployment enables digital
                    architects to forge autonomous connection protocols and
                    build persistent professional matrices.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group cursor-pointer transition-all duration-300 hover:scale-105 h-full min-h-[220px]"
            >
              {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
              <div className="relative p-4 h-full">
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

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="p-3 bg-black/20 rounded-lg mb-4 w-fit">
                    <BookOpen className="w-8 h-8 text-black" />
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-black mb-2 transition-all duration-300 group-hover:glitch-text"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Data Transmission
                  </h3>
                  {/* Orange Underline */}
                  <div className="w-16 h-1 bg-orange-500 mb-3"></div>
                  <p
                    className="text-black leading-relaxed flex-grow"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Partner institutions deploy faculty expertise algorithms,
                    research insight protocols, and academic resource matrices
                    to enhance digital warfare experience.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="relative group cursor-pointer transition-all duration-300 hover:scale-105 h-full min-h-[220px]"
            >
              {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
              <div className="relative p-4 h-full">
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

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="p-3 bg-black/20 rounded-lg mb-4 w-fit">
                    <Microscope className="w-8 h-8 text-black" />
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-black mb-2 transition-all duration-300 group-hover:glitch-text"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    Innovation Nexus
                  </h3>
                  {/* Orange Underline */}
                  <div className="w-16 h-1 bg-orange-500 mb-3"></div>
                  <p
                    className="text-black leading-relaxed flex-grow"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    United neural networks foster innovation culture matrices
                    and problem-solving algorithms among engineering cyborgs
                    across Kolkata's digital territories.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ACM Student Chapter Section */}
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-2 relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sddystopiandemo">
              Initialize Digital Coalition?
            </h2>
            <p
              className="text-white text-lg mb-8 max-w-2xl mx-auto font-mokoto"
              style={{ fontFamily: "'Mokoto Demo', monospace" }}
            >
              Join the neural network protocols organized by FIEM ACM Student
              Chapter
            </p>

            {/* Cyberpunk Register Button */}
            <CyberButton href="https://discord.gg/8qpHgECDH3">
              ACCESS PROTOCOL
            </CyberButton>
          </motion.div>
        </div>
      </div>

      {/* CSS for matrix animation and trapezium shapes */}
      <style jsx global>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        .matrix-column-animated {
          animation: matrix-fall linear infinite;
        }

        .cyber-filter-button {
          position: relative;
          overflow: hidden;
        }

        .cyber-filter-background {
          clip-path: polygon(
            15px 0%,
            100% 0%,
            100% calc(100% - 15px),
            calc(100% - 15px) 100%,
            0% 100%,
            0% 15px
          );
        }

        .cyber-filter-border {
          clip-path: polygon(
            15px 0%,
            100% 0%,
            100% calc(100% - 15px),
            calc(100% - 15px) 100%,
            0% 100%,
            0% 15px
          );
          z-index: -1;
        }

        .main-trapezium {
          clip-path: polygon(
            0% 0%,
            100% 0%,
            88% 90%,
            80% 100%,
            20% 100%,
            12% 90%
          );
        }

        .corner-cut-top-left {
          clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
        }

        .corner-cut-top-right {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
        }

        .corner-cut-bottom-left {
          clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
        }

        .corner-cut-bottom-right {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
        }

        .vertical-trapezium-left {
          clip-path: polygon(0% 0%, 100% 10%, 90% 90%, 0% 100%);
        }

        .vertical-trapezium-right {
          clip-path: polygon(0% 10%, 100% 0%, 100% 100%, 10% 90%);
        }

        .left-trapezium-main {
          clip-path: polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%);
        }

        .left-trapezium-secondary {
          clip-path: polygon(0% 0%, 100% 15%, 100% 85%, 0% 100%);
        }

        .left-trapezium-cut {
          clip-path: polygon(0% 30%, 100% 0%, 100% 100%, 0% 70%);
        }

        .left-trapezium-cut-secondary {
          clip-path: polygon(0% 25%, 100% 0%, 100% 100%, 0% 75%);
        }

        .trapezium-cut-left {
          clip-path: polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%);
        }

        .right-trapezium-main {
          clip-path: polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%);
        }

        .right-trapezium-secondary {
          clip-path: polygon(0% 15%, 100% 0%, 100% 100%, 0% 85%);
        }

        .right-trapezium-cut {
          clip-path: polygon(0% 0%, 100% 30%, 100% 70%, 0% 100%);
        }

        .right-trapezium-cut-secondary {
          clip-path: polygon(0% 0%, 100% 25%, 100% 75%, 0% 100%);
        }

        .trapezium-cut-right {
          clip-path: polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%);
        }
      `}</style>
    </div>
  );
}

export default Collaboration;
