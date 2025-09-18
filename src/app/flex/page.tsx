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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    teamName: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setGeneratedImage(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPreviewImage(null);
  };

  const handleCloseResultModal = () => {
    setIsResultModalOpen(false);
    setGeneratedImage(null);
  };

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

      // FORCE exact dimensions - this is the ONLY size the output will be
      canvas.width = 1080;
      canvas.height = 1350;

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

      // Calculate how to fit user image in our FIXED 1080x1350 canvas
      const canvasWidth = 1080;
      const canvasHeight = 1350;

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
          "https://ik.imagekit.io/k2pkqd50y/Flex/Flex.png?updatedAt=1758205801260";
      });

      // Draw frame overlay to cover ENTIRE canvas (1080x1350)
      ctx.drawImage(frameImg, 0, 0, 1080, 1350);

      // Add text overlay
      ctx.fillStyle = "#000000"; // Black color
      ctx.textAlign = "left"; // Left aligned
      // Remove shadow properties - no shadow needed

      // Add name text (38px, Mokoto font)
      ctx.font = "38px 'Mokoto Demo', monospace";
      ctx.fillText(formData.name, 30, 1350 - 100); // Very left (30px from edge)

      // Add team name text (40px, Mokoto font)
      ctx.font = "40px 'Mokoto Demo', monospace";
      ctx.fillText(formData.teamName, 30, 1350 - 50); // Very left (30px from edge)

      // Convert to data URL
      const dataUrl = canvas.toDataURL("image/png", 1.0);

      // Debug logging
      console.log("Final canvas dimensions:", canvas.width, "x", canvas.height);
      console.log("Data URL length:", dataUrl.length);

      setGeneratedImage(dataUrl);

      // Close the form modal and open the result modal
      setIsModalOpen(false);
      setIsResultModalOpen(true);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="mb-8 w-full max-w-md mx-auto">
            <Image
              src="https://ik.imagekit.io/k2pkqd50y/Flex/DevX.png?updatedAt=1758206777146"
              alt="HackSpire Flex"
              width={500}
              height={281}
              className="w-full h-auto"
              priority
            />
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "'Mokoto Demo', monospace" }} // Font name from project's font files
          >
            Ready to flex yourself at HackSpire'25?
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Show the world you're part of something extraordinary! Create your
            personalized HackSpire'25 flex frame and let everyone know you're
            building the future. 🚀
          </p>

          <div className="mt-4">
            <CyberButton onClick={handleOpenModal}>
              Create Your Flex Frame
            </CyberButton>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md mx-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cyberpunk Modal Container */}
            <div
              className="relative bg-black/90 border-2 border-yellow-400 p-6"
              style={{
                clipPath:
                  "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
              }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-50 w-8 h-8 bg-red-500 hover:bg-red-600 text-white font-bold text-lg flex items-center justify-center transition-colors duration-200 cursor-pointer"
                style={{
                  clipPath:
                    "polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)",
                }}
              >
                ×
              </button>

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
                  style={{ fontFamily: "'Mokoto Demo', monospace" }} // Font name from project's font files
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
                        {formData.image
                          ? formData.image.name
                          : "Click to upload image"}
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
                    {previewImage && (
                      <div className="mt-4">
                        <p className="text-sm text-white mb-2">Preview:</p>
                        <div className="relative w-full max-w-[200px] mx-auto border border-yellow-400">
                          <img
                            src={previewImage}
                            alt="Preview"
                            className="w-full h-auto object-contain"
                            style={{ maxHeight: "250px" }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center mt-6">
                    <CyberButton
                      type="button"
                      onClick={generateImage}
                      disabled={isGenerating || !formData.image}
                    >
                      {isGenerating ? "Generating..." : "Generate Flex Image"}
                    </CyberButton>
                  </div>

                  {/* Canvas is now created dynamically in generateImage function */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Result Modal */}
      {isResultModalOpen && generatedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl mx-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cyberpunk Modal Container */}
            <div
              className="relative bg-black/90 border-2 border-yellow-400 p-6"
              style={{
                clipPath:
                  "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
              }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseResultModal}
                className="absolute top-4 right-4 z-50 w-8 h-8 bg-red-500 hover:bg-red-600 text-white font-bold text-lg flex items-center justify-center transition-colors duration-200 cursor-pointer"
                style={{
                  clipPath:
                    "polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)",
                }}
              >
                ×
              </button>

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
                  Your Flex Frame is Ready!
                </h3>

                <div className="flex flex-col items-center space-y-6">
                  <div className="border-2 border-yellow-400 p-2 flex justify-center items-center">
                    <img
                      src={generatedImage}
                      alt="Generated Flex Frame"
                      className="max-w-[300px] h-auto object-contain"
                      style={{
                        aspectRatio: "1080/1350",
                        width: "auto",
                        maxHeight: "400px",
                      }}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                    <a
                      href={generatedImage}
                      download="hackspire-flex.png"
                      className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 text-center transition-colors duration-200"
                      style={{
                        clipPath:
                          "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                        fontFamily: "'Mokoto Demo', monospace",
                      }}
                    >
                      Download Image
                    </a>

                    <button
                      onClick={() => {
                        handleCloseResultModal();
                        handleOpenModal();
                      }}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 text-center transition-colors duration-200"
                      style={{
                        clipPath:
                          "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                        fontFamily: "'Mokoto Demo', monospace",
                      }}
                    >
                      Create Another
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
