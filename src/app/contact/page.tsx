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
import FAQSection from "@/components/FAQSection";
import CyberButton from "@/components/ui/CyberButton";
import { CyberpunkContainer } from "@/components/ui/CyberpunkContainer";
import { MatrixBackground } from "@/components/ui/MatrixBackground";
import { CircuitOverlay } from "@/components/ui/CircuitOverlay";
import { TrapeziumShape } from "@/components/ui/TrapeziumShape";
import {
  contactTitleFadeIn,
  contactSubtitleFadeIn,
  contactCardStaggered,
  formFocusScale,
  buttonHoverScale,
  mapContainerAnimation,
  mapTitleAnimation,
  mapSubtitleAnimation,
  successMessageAnimation,
} from "@/lib/motionVariants";
import {
  CONTACT_TITLE_CLASSES,
  CONTACT_SUBTITLE_CLASSES,
  CONTACT_CARD_GRID_CLASSES,
  CONTACT_FORM_LABEL_CLASSES,
  CONTACT_INPUT_CLASSES,
  CONTACT_MAP_TITLE_CLASSES,
  CONTACT_MAP_SUBTITLE_CLASSES,
  CONTACT_CLIP_PATHS,
  CONTAINER_CLASSES,
} from "@/lib/styles";

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <div
      className="min-h-screen text-white py-20 px-4 relative bg-transparent"
      style={
        {
          // CSS variables for responsive clip-paths
          "--clip-path-main-trap": CONTACT_CLIP_PATHS.mainTrapezium,
          "--clip-path-contact-card": CONTACT_CLIP_PATHS.contactCard,
          "--clip-path-corners": CONTACT_CLIP_PATHS.contactCard,
          "--clip-path-form-container": CONTACT_CLIP_PATHS.formContainer,
          "--clip-path-input-field": CONTACT_CLIP_PATHS.inputField,
          "--clip-path-success-message": CONTACT_CLIP_PATHS.successMessage,
          "--clip-path-map-frame": CONTACT_CLIP_PATHS.mapFrame,
          "--clip-path-left-trap-main": CONTACT_CLIP_PATHS.leftTrapMain,
          "--clip-path-left-trap-secondary":
            CONTACT_CLIP_PATHS.leftTrapSecondary,
          "--clip-path-right-trap-main": CONTACT_CLIP_PATHS.rightTrapMain,
          "--clip-path-right-trap-secondary":
            CONTACT_CLIP_PATHS.rightTrapSecondary,
        } as React.CSSProperties
      }
    >
      {/* Matrix Rain Background */}
      <MatrixBackground />

      {/* Yellow Trapezium Background with Clip-Path */}
      <div className="absolute top-0 left-0 right-0 h-96 z-0">
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{ clipPath: "var(--clip-path-main-trap)" }}
        >
          <CircuitOverlay variant="main" />
        </div>
      </div>

      {/* Multiple Left Side Vertical Trapezium Shapes */}
      <div className="absolute left-0 top-1/4 w-20 h-64 z-0">
        <TrapeziumShape variant="left-main" />
      </div>

      <div className="absolute left-0 top-3/4 w-16 h-48 z-0">
        <TrapeziumShape variant="left-secondary" />
      </div>

      {/* Multiple Right Side Vertical Trapezium Shapes */}
      <div className="absolute right-0 top-1/4 w-20 h-64 z-0">
        <TrapeziumShape variant="right-main" />
      </div>

      <div className="absolute right-0 top-3/4 w-16 h-48 z-0">
        <TrapeziumShape variant="right-secondary" />
      </div>

      {/* Additional Smaller Side Shapes */}
      <div className="absolute left-0 top-1/2 w-12 h-32 z-0">
        <TrapeziumShape variant="left-small" opacity={0.6} />
      </div>

      <div className="absolute left-0 top-1/6 w-14 h-40 z-0">
        <TrapeziumShape variant="left-small" opacity={0.7} />
      </div>

      <div className="absolute right-0 top-1/2 w-12 h-32 z-0">
        <TrapeziumShape variant="right-small" opacity={0.6} />
      </div>

      <div className="absolute right-0 top-1/6 w-14 h-40 z-0">
        <TrapeziumShape variant="right-small" opacity={0.7} />
      </div>

      {/* Centered Contact Title */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1 {...contactTitleFadeIn} className={CONTACT_TITLE_CLASSES}>
          Contact Us
        </motion.h1>
        <motion.p
          {...contactSubtitleFadeIn}
          className={CONTACT_SUBTITLE_CLASSES}
        >
          Have questions about HackSpire 2025? Want to partner with us?
          <br />
          We'd love to hear from you. Reach out and let's build something
          extraordinary together.
        </motion.p>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-6xl mx-auto mb-16 relative z-10">
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
                  className="text-black text-lg font-medium"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Kolkata, West Bengal
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
                <p
                  className="text-black text-lg font-medium"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  xyz@gmail.com
                </p>
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
                  +91 1234567890
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div
        className="relative overflow-hidden from-yellow-400/20 max-w-4xl mx-auto mb-20 z-10 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 group cursor-pointer bg-gradient-to-br flex flex-col justify-end p-4"
        style={{
          animationDelay: `2ms`,
          clipPath: "var(--clip-path-form-container)",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Cyberpunk Circuit Overlay */}
        <CircuitOverlay
          variant="sparse"
          opacity="medium"
          className="opacity-30 group-hover:opacity-50 transition-opacity duration-500"
        />

        {/* Content */}
        <div className="w-full flex flex-col justify-end h-full">
          <h3
            className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight break-words"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            Get in Touch
          </h3>
          <p
            className="text-yellow-300 text-lg font-medium mb-2 leading-tight"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            Ready to be part of the revolution? Send us a message!
          </p>
          <form
            className="text-gray-300 leading-snug transition-opacity duration-500 space-y-6"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
            onSubmit={handleSubmit}
          >
            <motion.div {...formFocusScale}>
              <label htmlFor="name" className={CONTACT_FORM_LABEL_CLASSES}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={CONTACT_INPUT_CLASSES}
                placeholder="Your name"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  clipPath: "var(--clip-path-input-field)",
                }}
              />
            </motion.div>
            <motion.div {...formFocusScale}>
              <label htmlFor="email" className={CONTACT_FORM_LABEL_CLASSES}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={CONTACT_INPUT_CLASSES}
                placeholder="your@email.com"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  clipPath: "var(--clip-path-input-field)",
                }}
              />
            </motion.div>
            <motion.div {...formFocusScale}>
              <label htmlFor="subject" className={CONTACT_FORM_LABEL_CLASSES}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className={CONTACT_INPUT_CLASSES}
                placeholder="What's this about?"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  clipPath: "var(--clip-path-input-field)",
                }}
              />
            </motion.div>
            <motion.div {...formFocusScale}>
              <label htmlFor="message" className={CONTACT_FORM_LABEL_CLASSES}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className={`${CONTACT_INPUT_CLASSES} resize-none`}
                placeholder="Tell us more about your inquiry..."
                style={{
                  fontFamily: "Poppins, sans-serif",
                  clipPath: "var(--clip-path-input-field)",
                }}
              />
            </motion.div>

            <motion.div className="text-center" {...buttonHoverScale}>
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
                {...successMessageAnimation}
                className="text-center p-4 bg-green-500/20 border border-green-500/30"
                style={{ clipPath: "var(--clip-path-success-message)" }}
              >
                <p
                  className="text-green-300 font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Message sent successfully! We'll get back to you soon.
                </p>
              </motion.div>
            )}
          </form>
        </div>

        {/* Animated Border */}
        <div
          className="absolute inset-0 border border-yellow-400/30 group-hover:border-yellow-400/60 transition-colors duration-500 pointer-events-none"
          style={{ clipPath: "var(--clip-path-form-container)" }}
        />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Custom Large Photoframe with Google Maps - 16:9 Aspect Ratio */}
      <motion.div
        {...mapContainerAnimation}
        className="flex justify-center mt-20 relative z-10 px-4"
      >
        <div className="relative w-full max-w-6xl h-[33.75rem]">
          {/* Upward Light Effect */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full h-20 bg-gradient-to-t from-yellow-400/30 via-yellow-300/20 to-transparent blur-xl opacity-70"></div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-12 bg-gradient-to-t from-yellow-500/50 via-yellow-400/30 to-transparent blur-lg opacity-60"></div>

          {/* Outer Glow Border */}
          <div
            className="absolute -inset-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-75"
            style={{
              clipPath: "var(--clip-path-map-frame)",
              filter: "blur(2px)",
            }}
          ></div>

          {/* Main Border Frame */}
          <div
            className="absolute -inset-1 bg-yellow-500"
            style={{ clipPath: "var(--clip-path-map-frame)" }}
          ></div>

          {/* Background Frame with Google Maps */}
          <div
            className="w-full h-full relative overflow-hidden"
            style={{ clipPath: "var(--clip-path-map-frame)" }}
          >
            {/* Google Maps iframe container with same clip-path */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: "var(--clip-path-map-frame)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.2097842471743!2d88.43373731495658!3d22.53945688519166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02778c0c5e0c0b%3A0x7a9b4d2b7a9b4d2b!2sFuture%20Institute%20of%20Management!5e0!3m2!1sen!2sin!4v1635678901234"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <motion.h2
                  {...mapTitleAnimation}
                  className={CONTACT_MAP_TITLE_CLASSES}
                >
                  FIND US
                </motion.h2>
                <motion.p
                  {...mapSubtitleAnimation}
                  className={CONTACT_MAP_SUBTITLE_CLASSES}
                >
                  Future Institute and Management - Your Gateway to Innovation
                </motion.p>
              </div>
            </div>

            {/* Enhanced Circuit patterns inside frame */}
            <CircuitOverlay
              variant="secondary"
              opacity="low"
              className="opacity-30 pointer-events-none"
            />
          </div>

          {/* Additional Light Rays from bottom */}
          <div className="absolute bottom-0 left-1/4 w-px h-20 bg-gradient-to-t from-yellow-400/80 to-transparent transform rotate-12 opacity-60"></div>
          <div className="absolute bottom-0 left-1/3 w-px h-16 bg-gradient-to-t from-yellow-300/70 to-transparent transform -rotate-6 opacity-50"></div>
          <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-t from-yellow-500/90 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 right-1/3 w-px h-16 bg-gradient-to-t from-yellow-300/70 to-transparent transform rotate-6 opacity-50"></div>
          <div className="absolute bottom-0 right-1/4 w-px h-20 bg-gradient-to-t from-yellow-400/80 to-transparent transform -rotate-12 opacity-60"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactUs;
