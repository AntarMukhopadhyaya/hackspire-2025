"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const shlokas = [
    "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता",
    "नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः",
    "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके",
    "शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते",
  ];

  return (
    <footer className="bg-black text-white py-16 px-6 font-noto-bengali relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-goldGlow mb-3 font-poppins">
              Hackspire 2025
            </h3>
            <p className="text-sm text-gray-400 font-light tracking-wide">
              Harnessing the Power of Shakti through Technology
            </p>
          </div>

          {/* Shloka Section */}
          <div className="text-center">
            {shlokas.map((shloka, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.3 }}
                className="text-lg text-yellow-200 mb-2 tracking-wide"
              >
                {shloka}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-yellow-300/10 text-center text-sm text-gray-500 tracking-widest">
          © 2025 Hackspire. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
