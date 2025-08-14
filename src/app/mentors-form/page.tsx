"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Phone,
  Briefcase,
  Globe,
  Award,
  Upload,
  Image as ImageIcon,
} from "lucide-react";
import CyberButton from "@/components/ui/CyberButton";
import { UploadButton } from "@/utils/uploadthing";
import { toast } from "sonner";

function MentorsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    linkedin: "",
    expertise: [] as string[],
    experience: "",
    bio: "",
    availability: "",
    motivation: "",
    profileImage: null as File | null,
  });

  const [profileImageUrl, setProfileImageUrl] = useState<string>("");
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);

  const handleExpertiseToggle = (expertise: string) => {
    setFormData((prev) => ({
      ...prev,
      expertise: prev.expertise.includes(expertise)
        ? prev.expertise.filter((exp) => exp !== expertise)
        : [...prev.expertise, expertise],
    }));
  };

  const removeExpertise = (expertise: string) => {
    setFormData((prev) => ({
      ...prev,
      expertise: prev.expertise.filter((exp) => exp !== expertise),
    }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExpertiseOpen &&
        !(event.target as Element).closest(".expertise-dropdown")
      ) {
        setIsExpertiseOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpertiseOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Prepare data for Google Sheets
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        website: formData.website,
        linkedin: formData.linkedin,
        expertise: formData.expertise,
        experience: formData.experience,
        bio: formData.bio,
        availability: formData.availability,
        motivation: formData.motivation,
        profileImageUrl: profileImageUrl,
      };

      // Submit to Google Sheets via API route
      const response = await fetch("/api/submit-mentor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        // Show success toast
        toast.success("🚀 Application Submitted Successfully!", {
          description:
            "Welcome to the HackSpire 2025 mentor network! We'll be in touch soon.",
          duration: 5000,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          linkedin: "",
          expertise: [],
          experience: "",
          bio: "",
          availability: "",
          motivation: "",
          profileImage: null,
        });
        setProfileImageUrl("");
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Show error toast
      toast.error("❌ Submission Failed", {
        description:
          "Something went wrong. Please try again or contact support.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white py-20 px-4 relative bg-transparent">
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

      {/* Centered Mentors Form Title */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] xl:text-8xl 2xl:text-[8rem] font-bold text-white font-sddystopiandemo"
        >
          Mentors Form
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto -mt-4 pb-8 text-sm sm:text-sm md:text-xl text-white leading-relaxed font-mokoto px-12 md:px-30"
        >
          Ready to inspire the next generation of hackers?
          <br />
          Join our elite mentor network and shape the future of innovation.
          <br />
          <span className="text-yellow-300">FIEM ACM Student Chapter</span> -
          Empowering minds, building futures.
        </motion.p>
      </div>

      {/* Mentors Form Section */}
      <div
        className={`relative overflow-hidden from-yellow-400/20 max-w-5xl mx-auto mb-20 z-10 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 group bg-gradient-to-br flex flex-col justify-end p-8 ${5}`}
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
        <div className="w-full flex flex-col justify-end h-full">
          <h3
            className={`text-4xl md:text-5xl font-bold text-white mb-2 leading-tight break-words`}
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            Join Our Mentor Network
          </h3>
          <p
            className={`text-yellow-300 text-lg font-medium mb-6 leading-tight`}
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            Share your expertise and guide the next generation of innovators!
          </p>

          <form
            className={`text-gray-300 leading-snug transition-opacity duration-500 space-y-6`}
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
            onSubmit={handleSubmit}
          >
            {/* Personal Information Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                  placeholder="Your full name"
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
                  Email Address *
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
            </div>

            {/* Contact Information Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                  placeholder="+91 1234567890"
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
                  htmlFor="company"
                  className="block text-sm font-medium text-white mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                  placeholder="Your company name"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    clipPath:
                      "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
                  }}
                />
              </motion.div>
            </div>

            {/* Website and Expertise Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-white mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Website/Portfolio
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                  placeholder="https://yourwebsite.com"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    clipPath:
                      "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
                  }}
                />
              </motion.div>

              {/* {LinkdIn field} */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label
                  htmlFor="linkedin"
                  className="block text-sm font-medium text-white mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  LinkedIn
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                  placeholder="https://linkedin.com/in/yourprofile"
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
                  htmlFor="expertise"
                  className="block text-sm font-medium text-white mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Primary Expertise *
                </label>
                <div className="w-full relative expertise-dropdown">
                  {/* Selected Tags Display */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.expertise.map((expertise) => (
                      <div
                        key={expertise}
                        className="flex items-center gap-2 px-3 py-2 bg-yellow-400 text-black rounded-lg font-mokoto text-sm"
                        style={{
                          clipPath:
                            "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
                        }}
                      >
                        <span>{expertise}</span>
                        <button
                          type="button"
                          onClick={() => removeExpertise(expertise)}
                          className="w-4 h-4 flex items-center justify-center hover:bg-black/20 rounded-full transition-colors"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Dropdown Button */}
                  <button
                    type="button"
                    onClick={() => setIsExpertiseOpen(!isExpertiseOpen)}
                    className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300 flex items-center justify-between"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      clipPath:
                        "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
                    }}
                  >
                    <span
                      className={
                        formData.expertise.length === 0
                          ? "text-gray-400"
                          : "text-white"
                      }
                    >
                      {formData.expertise.length === 0
                        ? "Select your expertise areas"
                        : `${formData.expertise.length} expertise area${
                            formData.expertise.length === 1 ? "" : "s"
                          } selected`}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isExpertiseOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Options */}
                  {isExpertiseOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-black/90 border-2 border-yellow-400/50 rounded-lg z-50 max-h-60 overflow-y-auto">
                      {[
                        "Web Development",
                        "Mobile Development",
                        "AI & Machine Learning",
                        "Cybersecurity",
                        "Blockchain",
                        "Cloud Computing",
                        "Data Science",
                        "Internet of Things",
                        "Game Development",
                        "Other",
                      ].map((expertise) => (
                        <div
                          key={expertise}
                          className={`px-4 py-3 cursor-pointer transition-colors duration-200 ${
                            formData.expertise.includes(expertise)
                              ? "bg-yellow-400/20 text-yellow-400"
                              : "text-white hover:bg-yellow-400/10"
                          }`}
                          onClick={() => {
                            handleExpertiseToggle(expertise);
                            // Don't close dropdown immediately to allow multiple selections
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-4 h-4 border-2 rounded ${
                                formData.expertise.includes(expertise)
                                  ? "bg-yellow-400 border-yellow-400"
                                  : "border-yellow-400/50"
                              }`}
                            >
                              {formData.expertise.includes(expertise) && (
                                <svg
                                  className="w-3 h-3 text-black"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className="font-mokoto">{expertise}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Experience and Availability Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-white mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    clipPath:
                      "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
                  }}
                >
                  <option value="">Select experience level</option>
                  <option value="1-3">1-3 years</option>
                  <option value="4-6">4-6 years</option>
                  <option value="7-10">7-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label
                  htmlFor="availability"
                  className="block text-sm font-medium text-white mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    clipPath:
                      "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
                  }}
                >
                  <option value="">Select availability</option>
                  <option value="full-time">Full-time during event</option>
                  <option value="part-time">Part-time during event</option>
                  <option value="weekends">Weekends only</option>
                  <option value="flexible">Flexible schedule</option>
                </select>
              </motion.div>
            </div>

            {/* Bio and Motivation */}
            <motion.div
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-white mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Professional Bio *
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300 resize-none"
                placeholder="Tell us about your background, achievements, and expertise..."
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
                htmlFor="motivation"
                className="block text-sm font-medium text-white mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Why do you want to mentor? *
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300 resize-none"
                placeholder="Share your motivation for becoming a mentor..."
                style={{
                  fontFamily: "Poppins, sans-serif",
                  clipPath:
                    "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
                }}
              />
            </motion.div>

            {/* Profile Image Upload Row */}
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="w-full mb-8"
            >
              <label
                className="block text-sm font-medium text-white mb-3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Profile Image
              </label>
              <div className="flex flex-col items-start gap-4">
                <UploadButton
                  endpoint="profileImageUploader"
                  onClientUploadComplete={(res) => {
                    if (res && res[0]) {
                      setProfileImageUrl(res[0].ufsUrl);
                      console.log("Upload Completed:", res[0].ufsUrl);
                    }
                  }}
                  onUploadError={(error: Error) => {
                    console.error("Upload Error:", error);
                    alert(`Upload failed: ${error.message}`);
                  }}
                  appearance={{
                    button:
                      "bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 font-mokoto transition-colors duration-300",
                    container: "w-full",
                    allowedContent: "text-gray-400 text-xs font-mokoto mt-2",
                  }}
                />

                {profileImageUrl && (
                  <div className="flex items-center gap-3 p-3 bg-black/40 border border-yellow-400/30 rounded-sm relative z-10">
                    <ImageIcon className="w-5 h-5 text-yellow-400" />
                    <div className="flex flex-col">
                      <span className="text-sm text-yellow-300 font-medium">
                        Image uploaded successfully
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsImageLoading(true);
                          setIsImageModalOpen(true);
                        }}
                        className="text-xs text-blue-400 hover:text-blue-300 underline cursor-pointer bg-transparent border-none relative z-30 p-1 hover:bg-blue-400/10 rounded transition-colors duration-200"
                      >
                        View uploaded image
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-3 font-mokoto">
                Upload a professional photo (JPG, PNG, GIF - Max 4MB)
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CyberButton
                isSending={isSubmitting}
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </span>
              </CyberButton>
            </motion.div>
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
        <div className="relative w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
          {/* 16:9 wrapper */}
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
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
                    Future Institute of Engineering and Management - Your
                    Gateway to Innovation
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
          </div>
        </div>
      </motion.div>

      {/* Simple Logos Section - Just the images */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="text-center relative z-10 mb-20 mt-16"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <img
            src="https://res.cloudinary.com/dislegzga/image/upload/v1755067912/new_fiem_logo_iq0bn8.jpg"
            alt="FIEM Logo"
            className="w-40 h-40 md:w-48 md:h-48 object-contain"
          />
          <img
            src="https://res.cloudinary.com/dislegzga/image/upload/v1755068141/fiemacm_mx8uox.jpg"
            alt="ACM Student Chapter Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
          />
        </div>
      </motion.div>

      {/* Visit Our Podium Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-center relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-sddystopiandemo">
            Ready to Take the Stage?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 font-mokoto">
            Join our community of mentors and inspire the next generation
          </p>
          <div className="inline-block">
            <a
              href="https://hackspire.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-mokoto text-lg"
            >
              <span>Visit our podium</span>
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Image Modal */}
      {isImageModalOpen && profileImageUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsImageModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] mx-4 sm:mx-8 md:mx-auto p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cyberpunk Modal Container */}
            <div
              className="relative bg-black/90 border-2 border-yellow-400 p-3 sm:p-6 overflow-hidden"
              style={{
                clipPath:
                  "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
              }}
            >
              {/* Cyberpunk Circuit Overlay */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-2 left-2 w-8 h-px bg-yellow-400 opacity-60"></div>
                <div className="absolute top-2 left-2 w-px h-8 bg-yellow-400 opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-8 h-px bg-yellow-400 opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-px h-8 bg-yellow-400 opacity-60"></div>
                <div className="absolute top-1/2 left-1 w-4 h-px bg-yellow-400/40"></div>
                <div className="absolute top-1/3 right-1 w-4 h-px bg-yellow-400/40"></div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsImageModalOpen(false);
                }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 w-8 h-8 sm:w-10 sm:h-10 bg-red-500 hover:bg-red-600 text-white font-bold text-lg sm:text-xl flex items-center justify-center transition-colors duration-200 cursor-pointer"
                style={{
                  clipPath:
                    "polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)",
                }}
              >
                ×
              </button>

              {/* Modal Header */}
              <div className="relative z-10 mb-3 sm:mb-4">
                <h3
                  className="text-lg sm:text-2xl font-bold text-yellow-400 font-mokoto"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Profile Image Preview
                </h3>
                <div className="w-full h-px bg-yellow-400/30 mt-2"></div>
              </div>

              {/* Image Container */}
              <div className="relative z-10 flex justify-center items-center min-h-[200px]">
                {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-yellow-400 text-sm font-mokoto">
                        Loading image...
                      </span>
                    </div>
                  </div>
                )}
                <img
                  src={profileImageUrl}
                  alt="Profile Preview"
                  className={`max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain border-2 border-yellow-400/50 rounded-lg shadow-2xl transition-opacity duration-300 ${
                    isImageLoading ? "opacity-0" : "opacity-100"
                  }`}
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(255, 212, 63, 0.3))",
                  }}
                  onLoad={() => setIsImageLoading(false)}
                  onLoadStart={() => setIsImageLoading(true)}
                />
              </div>

              {/* Modal Footer */}
              <div className="relative z-10 mt-3 sm:mt-4 flex justify-center">
                <a
                  href={profileImageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 font-mokoto font-bold transition-colors duration-200"
                  style={{
                    clipPath:
                      "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                  }}
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default MentorsForm;
