"use client";

import React, { useState, ChangeEvent, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CyberButton from "@/components/ui/CyberButton";
import { Upload } from "lucide-react";

interface FormData {
  name: string;
  teamName: string;
  image: File | null;
}

export default function FlexPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    teamName: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      // Create a preview of the uploaded image
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);

      setFormData({
        ...formData,
        image: file,
      });
    }
  };

  const generateImage = async () => {
    if (!formData.image || !previewImage) return;

    setIsGenerating(true);

    try {
      // Create a NEW canvas element to ensure no interference
      const canvas = document.createElement("canvas");

      // Optimized dimensions for better performance
      canvas.width = 540; // Reduced from 1080
      canvas.height = 675; // Reduced from 1350

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Clear entire canvas with black background
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 1080, 1350);

      // Load the user image
      const userImg = new window.Image();
      userImg.crossOrigin = "anonymous";

      await new Promise<void>((resolve, reject) => {
        userImg.onload = () => resolve();
        userImg.onerror = reject;
        userImg.src = previewImage;
      });

      // Get user image actual dimensions
      const userWidth = userImg.naturalWidth;
      const userHeight = userImg.naturalHeight;

      // Calculate how to fit user image in our FIXED 540x675 canvas
      const canvasWidth = 540;
      const canvasHeight = 675;

      const scaleX = canvasWidth / userWidth;
      const scaleY = canvasHeight / userHeight;
      const scale = Math.min(scaleX, scaleY); // Fit entirely within canvas

      const scaledUserWidth = userWidth * scale;
      const scaledUserHeight = userHeight * scale;

      // Center the user image in our fixed canvas
      const userX = (canvasWidth - scaledUserWidth) / 2;
      const userY = (canvasHeight - scaledUserHeight) / 2;

      // Draw user image at calculated position and size
      ctx.drawImage(userImg, userX, userY, scaledUserWidth, scaledUserHeight);

      // Now load and draw the frame overlay
      const frameImg = new window.Image();
      frameImg.crossOrigin = "anonymous";

      await new Promise<void>((resolve, reject) => {
        frameImg.onload = () => resolve();
        frameImg.onerror = reject;
        frameImg.src =
          "https://ik.imagekit.io/k2pkqd50y/Flex/flex-frame.png?updatedAt=1760521472299";
      });

      // Draw frame overlay to cover ENTIRE canvas (540x675)
      ctx.drawImage(frameImg, 0, 0, 540, 675);

      // Add text overlay
      ctx.fillStyle = "#000000"; // Black color
      ctx.textAlign = "left"; // Left aligned
      // Remove shadow properties - no shadow needed

      // Add name text (25px, Mokoto font) - increased size
      ctx.font = "25px 'Mokoto Demo', monospace";
      ctx.fillText(formData.name, 15, 675 - 50); // Scaled position

      // Add team name text (28px, Mokoto font) - increased size
      ctx.font = "28px 'Mokoto Demo', monospace";
      ctx.fillText(formData.teamName, 15, 675 - 25); // Scaled position

      // Convert to data URL
      const dataUrl = canvas.toDataURL("image/png", 1.0);

      // Debug logging
      console.log("Final canvas dimensions:", canvas.width, "x", canvas.height);
      console.log("Data URL length:", dataUrl.length);

      setGeneratedImage(dataUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCreateAnother = () => {
    setGeneratedImage(null);
    setFormData({
      name: "",
      teamName: "",
      image: null,
    });
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 mt-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            Ready to flex yourself at HackSpire'25?
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Show the world you're part of something extraordinary! Create your
            personalized HackSpire'25 flex frame and let everyone know you're
            building the future. 🚀
          </p>
        </motion.div>

        {/* Side by side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          {/* Left side - Demo/Generated Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-lg">
              {generatedImage ? (
                <div className="space-y-4">
                  <div>
                    <img
                      src={generatedImage}
                      alt="Generated Flex Frame"
                      className="w-full h-auto object-contain"
                      style={{
                        aspectRatio: "1080/1350",
                        maxHeight: "500px",
                      }}
                    />
                  </div>
                  <a
                    href={generatedImage}
                    download="hackspire-flex.png"
                    className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 text-center transition-colors duration-200"
                    style={{
                      clipPath:
                        "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                      fontFamily: "'Mokoto Demo', monospace",
                    }}
                  >
                    Download Image
                  </a>
                </div>
              ) : (
                <div>
                  <Image
                    src="/flex-image.png"
                    alt="Demo Flex Frame"
                    width={500}
                    height={625}
                    className="w-full h-auto object-contain"
                    style={{
                      aspectRatio: "1080/1350",
                      maxHeight: "500px",
                    }}
                    priority
                  />
                </div>
              )}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-lg mx-auto lg:mx-0 flex flex-col items-center justify-center"
          >
            <div
              className="relative bg-black/90 border-2 border-yellow-400 p-6"
              style={{
                clipPath:
                  "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
              }}
            >
              {/* Cyberpunk Circuit Overlay */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-2 left-2 w-8 h-px bg-yellow-400 opacity-60"></div>
                <div className="absolute top-2 left-2 w-px h-8 bg-yellow-400 opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-8 h-px bg-yellow-400 opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-px h-8 bg-yellow-400 opacity-60"></div>
              </div>

              <div className="relative z-10">
                <h3
                  className="text-2xl font-bold text-yellow-400 mb-6 text-center"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Flex Your Team
                </h3>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2"
                      style={{
                        clipPath:
                          "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="teamName"
                      className="block text-sm font-medium text-white mb-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Team Name
                    </label>
                    <input
                      type="text"
                      id="teamName"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2"
                      style={{
                        clipPath:
                          "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="imageUpload"
                      className="block text-sm font-medium text-white mb-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Upload Image
                    </label>
                    {previewImage ? (
                      <div className="relative w-full max-w-[300px] mx-auto">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-full h-auto object-contain border border-gray-600"
                          style={{ maxHeight: "300px" }}
                        />
                      </div>
                    ) : (
                      <label
                        htmlFor="imageUpload"
                        className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-6 flex flex-col items-center justify-center cursor-pointer"
                        style={{
                          clipPath:
                            "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                        }}
                      >
                        <Upload className="w-8 h-8 text-yellow-400 mb-2" />
                        <span className="text-sm text-gray-400">
                          Click to upload image
                        </span>
                        <input
                          type="file"
                          id="imageUpload"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                          ref={fileInputRef}
                        />
                      </label>
                    )}
                  </div>

                  <div className="flex justify-center mt-6">
                    <CyberButton
                      type="button"
                      onClick={generatedImage ? handleCreateAnother : generateImage}
                      disabled={isGenerating || (!formData.image && !generatedImage)}
                    >
                      {isGenerating 
                        ? "Generating..." 
                        : generatedImage 
                        ? "Create Another" 
                        : "Generate Flex Image"
                      }
                    </CyberButton>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
