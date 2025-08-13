"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Users,
  MessageCircle,
  Clock,
} from "lucide-react";
import FAQSection from "@/components/Sections/FAQSection";
import CyberButton from "@/components/ui/CyberButton";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
        console.error("Contact form error:", result.error);
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen text-white py-20 px-4 relative bg-transparent">
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

      {/* Multiple Left Side Vertical Trapezium Shapes */}
      <div className="absolute left-0 top-1/4 w-20 h-64 z-0">
        <div className="w-full h-full bg-yellow-400 relative left-trapezium-main">
          <div className="absolute top-1/2 left-0 w-full h-8 bg-transparent transform -translate-y-1/2 left-trapezium-cut"></div>
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-4 bottom-4 left-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-6 bottom-6 left-4 w-px bg-black opacity-60"></div>
            <div className="absolute top-8 bottom-8 left-6 w-px bg-black opacity-50"></div>
            <div className="absolute top-8 left-1 right-1 h-px bg-black opacity-65"></div>
            <div className="absolute top-16 left-2 right-2 h-px bg-black opacity-55"></div>
            <div className="absolute top-24 left-1 right-1 h-px bg-black opacity-50"></div>
            <div className="absolute top-32 left-2 right-2 h-px bg-black opacity-45"></div>
            <div className="absolute top-7 left-1 w-1 h-1 bg-black rounded-full opacity-70"></div>
            <div className="absolute top-15 left-3 w-1 h-1 bg-black rounded-full opacity-60"></div>
            <div className="absolute top-23 left-5 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-31 left-3 w-1 h-1 bg-black rounded-full opacity-50"></div>
            <div className="absolute top-12 left-2 w-2 h-0.5 bg-black opacity-55 rounded-sm"></div>
            <div className="absolute top-20 left-4 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-28 left-2 w-2.5 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-1/3 right-0 w-4 h-12 bg-transparent trapezium-cut-left"></div>
        </div>
      </div>

      <div className="absolute left-0 top-3/4 w-16 h-48 z-0">
        <div className="w-full h-full bg-yellow-400 relative left-trapezium-secondary">
          <div className="absolute top-1/2 left-0 w-full h-6 bg-transparent transform -translate-y-1/2 left-trapezium-cut-secondary"></div>
          <div className="absolute inset-0 opacity-55">
            <div className="absolute top-3 bottom-3 left-2 w-px bg-black opacity-65"></div>
            <div className="absolute top-5 bottom-5 left-4 w-px bg-black opacity-55"></div>
            <div className="absolute top-6 left-1 right-1 h-px bg-black opacity-60"></div>
            <div className="absolute top-12 left-2 right-2 h-px bg-black opacity-50"></div>
            <div className="absolute top-18 left-1 right-1 h-px bg-black opacity-45"></div>
            <div className="absolute top-5 left-1 w-1 h-1 bg-black rounded-full opacity-65"></div>
            <div className="absolute top-11 left-3 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-17 left-3 w-1 h-1 bg-black rounded-full opacity-50"></div>
            <div className="absolute top-9 left-2 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-15 left-3 w-2 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>
          <div className="absolute top-1/5 left-1/3 w-6 h-6 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-4/5 right-1/3 w-5 h-5 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      {/* Multiple Right Side Vertical Trapezium Shapes */}
      <div className="absolute right-0 top-1/4 w-20 h-64 z-0">
        <div className="w-full h-full bg-yellow-400 relative right-trapezium-main">
          <div className="absolute top-1/2 right-0 w-full h-8 bg-transparent transform -translate-y-1/2 right-trapezium-cut"></div>
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-4 bottom-4 right-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-6 bottom-6 right-4 w-px bg-black opacity-60"></div>
            <div className="absolute top-8 bottom-8 right-6 w-px bg-black opacity-50"></div>
            <div className="absolute top-8 left-1 right-1 h-px bg-black opacity-65"></div>
            <div className="absolute top-16 left-2 right-2 h-px bg-black opacity-55"></div>
            <div className="absolute top-24 left-1 right-1 h-px bg-black opacity-50"></div>
            <div className="absolute top-32 left-2 right-2 h-px bg-black opacity-45"></div>
            <div className="absolute top-7 right-1 w-1 h-1 bg-black rounded-full opacity-70"></div>
            <div className="absolute top-15 right-3 w-1 h-1 bg-black rounded-full opacity-60"></div>
            <div className="absolute top-23 right-5 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-31 right-3 w-1 h-1 bg-black rounded-full opacity-50"></div>
            <div className="absolute top-12 right-2 w-2 h-0.5 bg-black opacity-55 rounded-sm"></div>
            <div className="absolute top-20 right-4 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-28 right-2 w-2.5 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>
          <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-3/4 left-1/4 w-6 h-6 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-1/3 left-0 w-4 h-12 bg-transparent trapezium-cut-right"></div>
        </div>
      </div>

      <div className="absolute right-0 top-3/4 w-16 h-48 z-0">
        <div className="w-full h-full bg-yellow-400 relative right-trapezium-secondary">
          <div className="absolute top-1/2 right-0 w-full h-6 bg-transparent transform -translate-y-1/2 right-trapezium-cut-secondary"></div>
          <div className="absolute inset-0 opacity-55">
            <div className="absolute top-3 bottom-3 right-2 w-px bg-black opacity-65"></div>
            <div className="absolute top-5 bottom-5 right-4 w-px bg-black opacity-55"></div>
            <div className="absolute top-6 left-1 right-1 h-px bg-black opacity-60"></div>
            <div className="absolute top-12 left-2 right-2 h-px bg-black opacity-50"></div>
            <div className="absolute top-18 left-1 right-1 h-px bg-black opacity-45"></div>
            <div className="absolute top-5 right-1 w-1 h-1 bg-black rounded-full opacity-65"></div>
            <div className="absolute top-11 right-3 w-1 h-1 bg-black rounded-full opacity-55"></div>
            <div className="absolute top-17 right-3 w-1 h-1 bg-black rounded-full opacity-50"></div>
            <div className="absolute top-9 right-2 w-1.5 h-0.5 bg-black opacity-50 rounded-sm"></div>
            <div className="absolute top-15 right-3 w-2 h-0.5 bg-black opacity-45 rounded-sm"></div>
          </div>
          <div className="absolute top-1/5 right-1/3 w-6 h-6 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-4/5 left-1/3 w-5 h-5 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      {/* Additional Left Side Shapes */}
      <div className="absolute left-0 top-1/2 w-12 h-32 z-0">
        <div className="w-full h-full bg-yellow-600/60 relative left-trapezium-small">
          <div className="absolute top-1/2 left-0 w-full h-4 bg-transparent transform -translate-y-1/2 left-trapezium-cut-small"></div>
          <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-3/4 right-1/2 w-3 h-3 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      <div className="absolute left-0 top-1/6 w-14 h-40 z-0">
        <div className="w-full h-full bg-yellow-500/70 relative left-trapezium-tiny">
          <div className="absolute top-1/2 left-0 w-full h-5 bg-transparent transform -translate-y-1/2 left-trapezium-cut-tiny"></div>
          <div className="absolute top-1/4 left-1/3 w-5 h-5 bg-transparent triangle-cut-up"></div>
          <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-transparent triangle-cut-down"></div>
        </div>
      </div>

      {/* Additional Right Side Shapes */}
      <div className="absolute right-0 top-1/2 w-12 h-32 z-0">
        <div className="w-full h-full bg-yellow-600/60 relative right-trapezium-small">
          <div className="absolute top-1/2 right-0 w-full h-4 bg-transparent transform -translate-y-1/2 right-trapezium-cut-small"></div>
          <div className="absolute top-1/4 right-1/2 w-4 h-4 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-3/4 left-1/2 w-3 h-3 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      <div className="absolute right-0 top-1/6 w-14 h-40 z-0">
        <div className="w-full h-full bg-yellow-500/70 relative right-trapezium-tiny">
          <div className="absolute top-1/2 right-0 w-full h-5 bg-transparent transform -translate-y-1/2 right-trapezium-cut-tiny"></div>
          <div className="absolute top-1/4 right-1/3 w-5 h-5 bg-transparent triangle-cut-down"></div>
          <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-transparent triangle-cut-up"></div>
        </div>
      </div>

      {/* Centered Contact Title */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto -mt-4 pb-8 text-sm sm:text-sm md:text-xl text-black leading-relaxed font-mokoto px-12 md:px-30"
        >
          Have questions about HackSpire 2025? Want to partner with us?
          <br />
          We'd love to hear from you. Reach out and let's build something
          extraordinary together.
        </motion.p>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-6xl mx-auto mt-36 sm:mt-0 mb-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
            <div className="relative p-6 group cursor-pointer transition-all duration-300 hover:scale-105">
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
              <div className="relative z-10">
                <h3
                  className="text-4xl md:text-5xl font-bold text-black mb-2"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Location
                </h3>
                <p
                  className="text-black text-lg font-medium whitespace-nowrap"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Sonarpur, Kolkata, West Bengal
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            className="text-center"
          >
            {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
            <div className="relative p-6 group cursor-pointer transition-all duration-300 hover:scale-105">
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
              <div className="relative z-10">
                <h3
                  className="text-4xl md:text-5xl font-bold text-black mb-2"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Email
                </h3>
                <a
                  href="mailto:fiemacm@gmail.com"
                  className="text-black text-lg font-medium hover:text-blue-600 transition-colors cursor-pointer"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  fiemacm@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
            className="text-center"
          >
            {/* Cyberpunk Yellow Container with Clip-Path Cut Edges */}
            <div className="relative p-6 group cursor-pointer transition-all duration-300 hover:scale-105">
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
              <div className="relative z-10">
                <h3
                  className="text-4xl md:text-5xl font-bold text-black mb-2"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Phone
                </h3>
                <p
                  className="text-black text-lg font-medium"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  +91 7074757878
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}

      <div
        className={`relative overflow-hidden from-yellow-400/20 max-w-4xl mx-auto mb-20 z-10 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 group cursor-pointer bg-gradient-to-br flex flex-col justify-end p-4 ${5}`}
        style={{
          animationDelay: `2ms`,
          clipPath:
            "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Cyberpunk Circuit Overlay */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
          <div className="absolute top-2 left-2 w-8 h-px bg-yellow-400 opacity-60"></div>
          <div className="absolute top-2 left-2 w-px h-8 bg-yellow-400 opacity-60"></div>
          <div className="absolute bottom-2 right-2 w-8 h-px bg-yellow-400 opacity-60"></div>
          <div className="absolute bottom-2 right-2 w-px h-8 bg-yellow-400 opacity-60"></div>
          <div className="absolute top-1/2 left-1 w-4 h-px bg-yellow-400/40"></div>
          <div className="absolute top-1/3 right-1 w-4 h-px bg-yellow-400/40"></div>
        </div>

        {/* Content */}
        <div className=" w-full flex flex-col justify-end h-full">
          <h3
            className={`text-4xl md:text-5xl font-bold text-white mb-2 leading-tight break-words`}
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            Get in Touch
          </h3>
          <p
            className={`text-yellow-300 text-lg font-medium mb-2 leading-tight`}
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            Ready to be part of the revolution? Send us a message!
          </p>
          <form
            className={`text-gray-300 leading-snug
                               transition-opacity duration-500 space-y-6`}
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
            onSubmit={handleSubmit}
          >
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                placeholder="Your name"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  clipPath:
                    "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
                }}
              />
            </motion.div>
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                placeholder="your@email.com"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  clipPath:
                    "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
                }}
              />
            </motion.div>
            <motion.div
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-white mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                placeholder="What's this about?"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  clipPath:
                    "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
                }}
              />
            </motion.div>
            <motion.div
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300 resize-none"
                placeholder="Tell us more about your inquiry..."
                style={{
                  fontFamily: "Poppins, sans-serif",
                  clipPath:
                    "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
                }}
              />
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CyberButton
                onClick={() => {
                  if (!isSubmitting) {
                    handleSubmit({
                      preventDefault: () => {},
                    } as React.FormEvent);
                  }
                }}
              >
                <span className="flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
              </CyberButton>
            </motion.div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-4 bg-green-500/20 border border-green-500/30 cyber-success-message"
              >
                <p
                  className="text-green-300 font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  🎉 Message sent successfully! Check your email for
                  confirmation. We'll get back to you soon.
                </p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-4 bg-red-500/20 border border-red-500/30 cyber-error-message"
              >
                <p
                  className="text-red-300 font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  ❌ Failed to send message. Please try again or contact us
                  through Discord.
                </p>
              </motion.div>
            )}
          </form>
        </div>

        {/* Animated Border */}
        <div
          className="absolute inset-0 border border-yellow-400/30 group-hover:border-yellow-400/60 transition-colors duration-500 pointer-events-none"
          style={{
            clipPath:
              "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
          }}
        />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Custom Large Photoframe with Google Maps - 16:9 Aspect Ratio */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="flex justify-center mt-20 relative z-10 px-4"
      >
        <div className="relative w-full max-w-6xl h-[33.75rem]">
          {/* Upward Light Effect */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full h-20 bg-gradient-to-t from-yellow-400/30 via-yellow-300/20 to-transparent blur-xl opacity-70 group-hover:opacity-90 group-hover:h-24 transition-all duration-500 ease-in-out"></div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-12 bg-gradient-to-t from-yellow-500/50 via-yellow-400/30 to-transparent blur-lg opacity-60 group-hover:opacity-80 group-hover:h-16 transition-all duration-500 ease-in-out"></div>

          {/* Outer Glow Border */}
          <div
            className="absolute -inset-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-75 group-hover:opacity-100 group-hover:from-yellow-400 group-hover:via-yellow-300 group-hover:to-yellow-400 transition-all duration-500 ease-in-out"
            style={{
              clipPath:
                "polygon(2% 42%, 0 42%, 3% 0, 97% 0, 100% 42%, 98% 42%, 98% 55%, 100% 55%, 97% 100%, 3% 100%, 0 56%, 2% 56%)",
              filter: "blur(2px)",
            }}
          ></div>

          {/* Main Border Frame */}
          <div
            className="absolute -inset-1 bg-yellow-500"
            style={{
              clipPath:
                "polygon(2% 42%, 0 42%, 3% 0, 97% 0, 100% 42%, 98% 42%, 98% 55%, 100% 55%, 97% 100%, 3% 100%, 0 56%, 2% 56%)",
            }}
          ></div>

          {/* Background Frame with Google Maps */}
          <div
            className="w-full h-full relative overflow-hidden group cursor-pointer transform transition-transform duration-500 ease-in-out group-hover:scale-[1.02]"
            style={{
              clipPath:
                "polygon(2% 42%, 0 42%, 3% 0, 97% 0, 100% 42%, 98% 42%, 98% 55%, 100% 55%, 97% 100%, 3% 100%, 0 56%, 2% 56%)",
            }}
          >
            {/* Google Maps iframe container with same clip-path */}
            <div
              className="absolute inset-0 w-full h-full group"
              style={{
                clipPath:
                  "polygon(2% 42%, 0 42%, 3% 0, 97% 0, 100% 42%, 98% 42%, 98% 55%, 100% 55%, 97% 100%, 3% 100%, 0 56%, 2% 56%)",
              }}
            >
              <iframe
                src="https://www.google.com/maps?q=Future+Institute+of+Engineering+and+Management,CCV8%2B85M+Sonarpur+Station+Rd+Mission+Pally+Narendrapur+Rajpur+Sonarpur+West+Bengal+700150&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Google Maps showing Future Institute of Engineering and Management location"
              />
            </div>

            {/* Dark overlay for text readability - disappears and lets clicks through on hover */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] group-hover:opacity-0 group-hover:pointer-events-none transition-all duration-500 ease-in-out"></div>

            {/* Content overlay - disappears and lets clicks through on hover */}
            <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 group-hover:pointer-events-none transition-all duration-500 ease-in-out">
              <div className="text-center space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 font-sddystopiandemo drop-shadow-2xl"
                >
                  FIND US
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="text-lg md:text-xl text-white font-mokoto max-w-2xl mx-auto px-4"
                >
                  Future Institute of Engineering and Management - Your Gateway
                  to Innovation
                </motion.p>
              </div>
            </div>

            {/* Enhanced Circuit patterns inside frame - disappear on hover */}
            <div className="absolute inset-0 opacity-30 pointer-events-none group-hover:opacity-0 transition-all duration-500 ease-in-out">
              {/* Horizontal circuit lines */}
              <div className="absolute top-4 left-8 right-8 h-px bg-yellow-300 opacity-80"></div>
              <div className="absolute top-8 left-12 right-12 h-px bg-yellow-300 opacity-60"></div>
              <div className="absolute top-12 left-8 right-8 h-px bg-yellow-300 opacity-70"></div>
              <div className="absolute bottom-4 left-8 right-8 h-px bg-yellow-300 opacity-80"></div>
              <div className="absolute bottom-8 left-12 right-12 h-px bg-yellow-300 opacity-60"></div>
              <div className="absolute bottom-12 left-8 right-8 h-px bg-yellow-300 opacity-70"></div>

              {/* Vertical circuit lines */}
              <div className="absolute left-4 top-8 bottom-8 w-px bg-yellow-300 opacity-80"></div>
              <div className="absolute left-8 top-12 bottom-12 w-px bg-yellow-300 opacity-60"></div>
              <div className="absolute left-12 top-8 bottom-8 w-px bg-yellow-300 opacity-70"></div>
              <div className="absolute right-4 top-8 bottom-8 w-px bg-yellow-300 opacity-80"></div>
              <div className="absolute right-8 top-12 bottom-12 w-px bg-yellow-300 opacity-60"></div>
              <div className="absolute right-12 top-8 bottom-8 w-px bg-yellow-300 opacity-70"></div>

              {/* Corner circuit nodes */}
              <div className="absolute top-8 left-8 w-2 h-2 bg-yellow-300 opacity-70 rounded-full"></div>
              <div className="absolute top-8 right-8 w-2 h-2 bg-yellow-300 opacity-70 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-yellow-300 opacity-70 rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-2 h-2 bg-yellow-300 opacity-70 rounded-full"></div>
            </div>
          </div>

          {/* Additional Light Rays from bottom */}
          <div className="absolute bottom-0 left-1/4 w-px h-20 bg-gradient-to-t from-yellow-400/80 to-transparent transform rotate-12 opacity-60 group-hover:opacity-80 group-hover:h-24 transition-all duration-500 ease-in-out"></div>
          <div className="absolute bottom-0 left-1/3 w-px h-16 bg-gradient-to-t from-yellow-300/70 to-transparent transform -rotate-6 opacity-50 group-hover:opacity-70 group-hover:h-20 transition-all duration-500 ease-in-out"></div>
          <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-t from-yellow-500/90 to-transparent opacity-70 group-hover:opacity-90 group-hover:h-28 transition-all duration-500 ease-in-out"></div>
          <div className="absolute bottom-0 right-1/3 w-px h-16 bg-gradient-to-t from-yellow-300/70 to-transparent transform rotate-6 opacity-50 group-hover:opacity-70 group-hover:h-20 transition-all duration-500 ease-in-out"></div>
          <div className="absolute bottom-0 right-1/4 w-px h-20 bg-gradient-to-t from-yellow-400/80 to-transparent transform -rotate-12 opacity-60 group-hover:opacity-80 group-hover:h-24 transition-all duration-500 ease-in-out"></div>
        </div>
      </motion.div>

      {/* CSS for matrix animation and cyberpunk styling */}
      <style jsx>{`
        .matrix-column-animated {
          animation: matrix-fall linear infinite;
        }

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

        .cyber-card {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .cyber-card:hover {
          transform: translateY(-5px);
        }

        .cyber-card-background {
          clip-path: polygon(
            15px 0%,
            100% 0%,
            100% calc(100% - 15px),
            calc(100% - 15px) 100%,
            0% 100%,
            0% 15px
          );
        }

        .cyber-card-border {
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

        .cyber-form-container {
          position: relative;
          overflow: hidden;
        }

        .cyber-form-background {
          clip-path: polygon(
            20px 0%,
            100% 0%,
            100% calc(100% - 20px),
            calc(100% - 20px) 100%,
            0% 100%,
            0% 20px
          );
        }

        .cyber-form-border {
          clip-path: polygon(
            20px 0%,
            100% 0%,
            100% calc(100% - 20px),
            calc(100% - 20px) 100%,
            0% 100%,
            0% 20px
          );
          z-index: -1;
        }

        .cyber-input {
          clip-path: polygon(
            10px 0%,
            100% 0%,
            100% calc(100% - 10px),
            calc(100% - 10px) 100%,
            0% 100%,
            0% 10px
          );
        }

        .cyber-button {
          position: relative;
          overflow: hidden;
        }

        .cyber-button-background {
          clip-path: polygon(
            15px 0%,
            100% 0%,
            100% calc(100% - 15px),
            calc(100% - 15px) 100%,
            0% 100%,
            0% 15px
          );
        }

        .cyber-button-border {
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

        .cyber-button-small {
          position: relative;
          overflow: hidden;
        }

        .cyber-button-large {
          position: relative;
          overflow: hidden;
        }

        .cyber-success-message {
          clip-path: polygon(
            10px 0%,
            100% 0%,
            100% calc(100% - 10px),
            calc(100% - 10px) 100%,
            0% 100%,
            0% 10px
          );
        }

        .cyber-error-message {
          clip-path: polygon(
            10px 0%,
            100% 0%,
            100% calc(100% - 10px),
            calc(100% - 10px) 100%,
            0% 100%,
            0% 10px
          );
        }
      `}</style>
    </div>
  );
}

export default ContactUs;
