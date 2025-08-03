"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const FooterContent = () => {
  return (
    <footer className="relative mt-20 text-white overflow-hidden">
      {/* Inverted Yellow Trapezium Background with Black Border */}
      <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
        {/* Black border background */}
        <div
          className="w-full h-full bg-black absolute"
          style={{
            clipPath:
              "polygon(20% 15%, 83% 16%, 101% 30%, 101% 71%, 93% 96%, 11% 96%, -1% 71%, -1% 27%)",
          }}
        ></div>

        {/* Main yellow trapezium with custom clip-path */}
        <div
          className="w-full h-full bg-yellow-400 relative"
          style={{
            clipPath:
              "polygon(21% 16%, 82% 17%, 100% 31%, 100% 70%, 81% 100%, 17% 99%, 0% 70%, 0% 28%)",
            transform: "translate(2px, 2px)",
          }}
        >
          {/* Left side vertical trapezium cut */}
          <div
            className="absolute bottom-1/2 left-0 w-20 h-40 bg-black transform translate-y-1/2"
            style={{
              clipPath: "polygon(0% 0%, 100% 10%, 90% 90%, 0% 100%)",
            }}
          ></div>

          {/* Right side vertical trapezium cut */}
          <div
            className="absolute bottom-1/2 right-0 w-20 h-40 bg-black transform translate-y-1/2"
            style={{
              clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 10% 90%)",
            }}
          ></div>

          {/* Multiple layered cuts at top-left corner */}
          {/* Primary top-left triangular cut */}
          <div
            className="absolute top-0 left-0 w-16 h-16 bg-black"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
            }}
          ></div>

          {/* Secondary top-left trapezium cut */}
          <div
            className="absolute top-2 left-2 w-20 h-12 bg-black"
            style={{
              clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)",
            }}
          ></div>

          {/* Tertiary top-left angular accent */}
          <div
            className="absolute top-8 left-8 w-12 h-8 bg-black"
            style={{
              clipPath: "polygon(0% 0%, 80% 0%, 100% 80%, 20% 100%)",
            }}
          ></div>

          {/* Multiple layered cuts at top-right corner */}
          {/* Primary top-right triangular cut */}
          <div
            className="absolute top-0 right-0 w-16 h-16 bg-black"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
            }}
          ></div>

          {/* Secondary top-right trapezium cut */}
          <div
            className="absolute top-2 right-2 w-20 h-12 bg-black"
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
            }}
          ></div>

          {/* Tertiary top-right angular accent */}
          <div
            className="absolute top-8 right-8 w-12 h-8 bg-black"
            style={{
              clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 80%)",
            }}
          ></div>

          {/* Circuit Board Pattern Overlay */}
          <div className="absolute inset-0 opacity-60">
            {/* Horizontal circuit traces */}
            <div className="absolute top-8 left-0 right-0 h-px bg-black opacity-70"></div>
            <div className="absolute top-16 left-8 right-8 h-px bg-black opacity-60"></div>
            <div className="absolute top-24 left-16 right-16 h-px bg-black opacity-50"></div>
            <div className="absolute top-32 left-8 right-8 h-px bg-black opacity-65"></div>
            <div className="absolute top-40 left-12 right-12 h-px bg-black opacity-55"></div>
            <div className="absolute top-48 left-20 right-20 h-px bg-black opacity-60"></div>
            <div className="absolute top-56 left-8 right-8 h-px bg-black opacity-70"></div>
            <div className="absolute bottom-24 left-16 right-16 h-px bg-black opacity-50"></div>
            <div className="absolute bottom-16 left-8 right-8 h-px bg-black opacity-65"></div>
            <div className="absolute bottom-8 left-0 right-0 h-px bg-black opacity-70"></div>

            {/* Vertical circuit traces */}
            <div className="absolute top-8 bottom-8 left-8 w-px bg-black opacity-65"></div>
            <div className="absolute top-12 bottom-12 left-16 w-px bg-black opacity-55"></div>
            <div className="absolute top-8 bottom-8 left-24 w-px bg-black opacity-60"></div>
            <div className="absolute top-16 bottom-16 left-32 w-px bg-black opacity-50"></div>
            <div className="absolute top-8 bottom-8 left-40 w-px bg-black opacity-65"></div>
            <div className="absolute top-12 bottom-12 left-48 w-px bg-black opacity-55"></div>
            <div className="absolute top-8 bottom-8 left-56 w-px bg-black opacity-60"></div>
            <div className="absolute top-8 bottom-8 right-8 w-px bg-black opacity-65"></div>
            <div className="absolute top-12 bottom-12 right-16 w-px bg-black opacity-55"></div>
            <div className="absolute top-8 bottom-8 right-24 w-px bg-black opacity-60"></div>
            <div className="absolute top-16 bottom-16 right-32 w-px bg-black opacity-50"></div>
            <div className="absolute top-8 bottom-8 right-40 w-px bg-black opacity-65"></div>
            <div className="absolute top-12 bottom-12 right-48 w-px bg-black opacity-55"></div>
            <div className="absolute top-8 bottom-8 right-56 w-px bg-black opacity-60"></div>

            {/* Circuit nodes and connection points */}
            <div className="absolute top-8 left-16 w-2 h-2 bg-black opacity-80 rounded-full"></div>
            <div className="absolute top-16 left-24 w-1.5 h-1.5 bg-black opacity-70 rounded-full"></div>
            <div className="absolute top-24 left-32 w-2 h-2 bg-black opacity-75 rounded-full"></div>
            <div className="absolute top-32 left-40 w-1.5 h-1.5 bg-black opacity-65 rounded-full"></div>
            <div className="absolute top-40 left-48 w-2 h-2 bg-black opacity-80 rounded-full"></div>
            <div className="absolute top-48 left-24 w-1.5 h-1.5 bg-black opacity-70 rounded-full"></div>
            <div className="absolute top-56 left-16 w-2 h-2 bg-black opacity-75 rounded-full"></div>
            <div className="absolute top-8 right-16 w-2 h-2 bg-black opacity-80 rounded-full"></div>
            <div className="absolute top-16 right-24 w-1.5 h-1.5 bg-black opacity-70 rounded-full"></div>
            <div className="absolute top-24 right-32 w-2 h-2 bg-black opacity-75 rounded-full"></div>
            <div className="absolute top-32 right-40 w-1.5 h-1.5 bg-black opacity-65 rounded-full"></div>
            <div className="absolute top-40 right-48 w-2 h-2 bg-black opacity-80 rounded-full"></div>
            <div className="absolute top-48 right-24 w-1.5 h-1.5 bg-black opacity-70 rounded-full"></div>
            <div className="absolute top-56 right-16 w-2 h-2 bg-black opacity-75 rounded-full"></div>

            {/* Resistor and capacitor-like elements */}
            <div className="absolute top-12 left-20 w-6 h-1 bg-black opacity-70 rounded"></div>
            <div className="absolute top-20 left-28 w-4 h-1 bg-black opacity-60 rounded"></div>
            <div className="absolute top-28 left-36 w-6 h-1 bg-black opacity-70 rounded"></div>
            <div className="absolute top-36 left-44 w-4 h-1 bg-black opacity-60 rounded"></div>
            <div className="absolute top-44 left-20 w-6 h-1 bg-black opacity-70 rounded"></div>
            <div className="absolute top-52 left-28 w-4 h-1 bg-black opacity-60 rounded"></div>
            <div className="absolute top-12 right-20 w-6 h-1 bg-black opacity-70 rounded"></div>
            <div className="absolute top-20 right-28 w-4 h-1 bg-black opacity-60 rounded"></div>
            <div className="absolute top-28 right-36 w-6 h-1 bg-black opacity-70 rounded"></div>
            <div className="absolute top-36 right-44 w-4 h-1 bg-black opacity-60 rounded"></div>
            <div className="absolute top-44 right-20 w-6 h-1 bg-black opacity-70 rounded"></div>
            <div className="absolute top-52 right-28 w-4 h-1 bg-black opacity-60 rounded"></div>

            {/* Corner diagonal accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-black opacity-50"></div>
            <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-black opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-black opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12"
        >
          {/* Left Section - Main Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h3
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-wider"
              style={{ fontFamily: "'Sddystopiandemo-GO7xa', monospace" }}
            >
              HACKSPIRE 2025
            </h3>
            <p
              className="text-lg sm:text-xl text-black font-medium max-w-lg"
              style={{ fontFamily: "'Mokoto Demo', monospace" }}
            >
              Neural Network Protocols • Quantum Code Architecture • Digital
              Supremacy Engine
            </p>
          </motion.div>

          {/* Right Section - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-end gap-6"
          >
            {/* Social Media Icons */}
            <div className="flex items-center gap-6">
              <motion.a
                href="#"
                className="text-black hover:text-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </motion.a>
              <motion.a
                href="#"
                className="text-black hover:text-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="text-black hover:text-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="text-black hover:text-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
            </div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm sm:text-base text-black font-medium"
              style={{ fontFamily: "'Mokoto Demo', monospace" }}
            >
              © 2025 HACKSPIRE • DIGITAL SUPREMACY PROTOCOL
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterContent;
