"use client";
import React from "react";
import { motion } from "framer-motion";

function Tracks() {
  return (
    <div className="min-h-screen text-white py-20 px-4">
      {/* Centered Tracks Title */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-bold text-white font-distancia">
          Tracks
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-300 mt-8 max-w-4xl mx-auto leading-relaxed"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Choose your battlefield in these four domains where technology meets tradition.
          Each track represents a unique challenge designed to push the boundaries of innovation.
        </p>
      </div>

      {/* Tracks content will go here */}
      <div className="max-w-6xl mx-auto mt-20">
        {/* Track cards will be added here */}
      </div>
    </div>
  );
}

export default Tracks;
