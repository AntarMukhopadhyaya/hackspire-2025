"use client";
import { motion } from "framer-motion";

const FooterContent = () => {
  return (
    <footer className="relative mt-20 text-white overflow-hidden">
      {/* Mobile View - Simple Background */}
      <div className="hidden">
        <div className="bg-yellow-400 relative min-h-[300px]">
          {/* Simple mobile pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-4 left-4 right-4 h-px bg-black"></div>
            <div className="absolute top-8 left-8 right-8 h-px bg-black"></div>
            <div className="absolute bottom-8 left-8 right-8 h-px bg-black"></div>
            <div className="absolute bottom-4 left-4 right-4 h-px bg-black"></div>
            <div className="absolute top-4 bottom-4 left-4 w-px bg-black"></div>
            <div className="absolute top-4 bottom-4 right-4 w-px bg-black"></div>
            <div className="absolute top-8 left-8 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute top-8 right-8 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-2 h-2 bg-black rounded-full"></div>
          </div>

          {/* Mobile Content */}
          <div className="relative z-10 px-6 py-12 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-black mb-4 tracking-wide"
              style={{ fontFamily: "'Sddystopiandemo-GO7xa', monospace" }}
            >
              HACKSPIRE 2025
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-black font-medium mb-8 px-4"
              style={{ fontFamily: "'Mokoto Demo', monospace" }}
            >
              Neural Network Protocols • Quantum Code Architecture • Digital
              Supremacy Engine
            </motion.p>

            {/* Mobile Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center items-center gap-6 mb-6"
            >
              {/* Twitter Icon */}
              <motion.a
                href="https://x.com/FiemAcm?t=8KMerJECwU9fseHsvt7ryQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </motion.a>
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/acmfiem?utm_source=qr&igsh=ZDJ5ejN5Nzk0Nmx5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/fiem-acm-student-chapter-537786351"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/share/14LCXi3MXQH/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Mobile Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xs text-black font-medium px-2"
              style={{ fontFamily: "'Mokoto Demo', monospace" }}
            >
              <span>© 2025 HACKSPIRE •</span>
              <br />
              <span>FIEM ACM STUDENT CHAPTER</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet View - Complex Background */}
      <div className="block">
        <div className="absolute bottom-0 left-0 right-0 h-72 md:h-80 lg:h-80 z-0">
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
              className="absolute bottom-1/2 left-0 w-16 h-32 md:w-20 md:h-40 bg-black transform translate-y-1/2"
              style={{
                clipPath: "polygon(0% 0%, 100% 10%, 90% 90%, 0% 100%)",
              }}
            ></div>

            {/* Right side vertical trapezium cut */}
            <div
              className="absolute bottom-1/2 right-0 w-16 h-32 md:w-20 md:h-40 bg-black transform translate-y-1/2"
              style={{
                clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 10% 90%)",
              }}
            ></div>

            {/* Multiple layered cuts at top-left corner */}
            {/* Primary top-left triangular cut */}
            <div
              className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-black"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
              }}
            ></div>

            {/* Secondary top-left trapezium cut */}
            <div
              className="absolute top-2 left-2 w-16 h-10 md:w-20 md:h-12 bg-black"
              style={{
                clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)",
              }}
            ></div>

            {/* Tertiary top-left angular accent */}
            <div
              className="absolute top-6 left-6 w-10 h-7 md:top-8 md:left-8 md:w-12 md:h-8 bg-black"
              style={{
                clipPath: "polygon(0% 0%, 80% 0%, 100% 80%, 20% 100%)",
              }}
            ></div>

            {/* Multiple layered cuts at top-right corner */}
            {/* Primary top-right triangular cut */}
            <div
              className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-black"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
              }}
            ></div>

            {/* Secondary top-right trapezium cut */}
            <div
              className="absolute top-2 right-2 w-16 h-10 md:w-20 md:h-12 bg-black"
              style={{
                clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
              }}
            ></div>

            {/* Tertiary top-right angular accent */}
            <div
              className="absolute top-6 right-6 w-10 h-7 md:top-8 md:right-8 md:w-12 md:h-8 bg-black"
              style={{
                clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 80%)",
              }}
            ></div>

            {/* Circuit Board Pattern Overlay - Desktop only */}
            <div className="absolute inset-0 opacity-60">
              {/* Horizontal circuit traces */}
              <div className="absolute top-6 left-0 right-0 h-px bg-black opacity-70 md:top-8"></div>
              <div className="absolute top-12 left-6 right-6 h-px bg-black opacity-60 md:top-16 md:left-8 md:right-8"></div>
              <div className="absolute top-18 left-12 right-12 h-px bg-black opacity-50 md:top-24 md:left-16 md:right-16"></div>
              <div className="absolute top-24 left-6 right-6 h-px bg-black opacity-65 md:top-32 md:left-8 md:right-8"></div>
              <div className="absolute top-30 left-9 right-9 h-px bg-black opacity-55 md:top-40 md:left-12 md:right-12"></div>
              <div className="absolute top-36 left-15 right-15 h-px bg-black opacity-60 md:top-48 md:left-20 md:right-20"></div>
              <div className="absolute top-42 left-6 right-6 h-px bg-black opacity-70 md:top-56 md:left-8 md:right-8"></div>
              <div className="absolute bottom-18 left-12 right-12 h-px bg-black opacity-50 md:bottom-24 md:left-16 md:right-16"></div>
              <div className="absolute bottom-12 left-6 right-6 h-px bg-black opacity-65 md:bottom-16 md:left-8 md:right-8"></div>
              <div className="absolute bottom-6 left-0 right-0 h-px bg-black opacity-70 md:bottom-8"></div>

              {/* Vertical circuit traces */}
              <div className="absolute top-6 bottom-6 left-6 w-px bg-black opacity-65 md:top-8 md:bottom-8 md:left-8"></div>
              <div className="absolute top-9 bottom-9 left-12 w-px bg-black opacity-55 md:top-12 md:bottom-12 md:left-16"></div>
              <div className="absolute top-6 bottom-6 left-18 w-px bg-black opacity-60 md:top-8 md:bottom-8 md:left-24"></div>
              <div className="absolute top-12 bottom-12 left-24 w-px bg-black opacity-50 md:top-16 md:bottom-16 md:left-32"></div>
              <div className="absolute top-6 bottom-6 left-30 w-px bg-black opacity-65 md:top-8 md:bottom-8 md:left-40"></div>
              <div className="absolute top-9 bottom-9 left-36 w-px bg-black opacity-55 md:top-12 md:bottom-12 md:left-48"></div>
              <div className="absolute top-6 bottom-6 left-42 w-px bg-black opacity-60 md:top-8 md:bottom-8 md:left-56"></div>
              <div className="absolute top-6 bottom-6 right-6 w-px bg-black opacity-65 md:top-8 md:bottom-8 md:right-8"></div>
              <div className="absolute top-9 bottom-9 right-12 w-px bg-black opacity-55 md:top-12 md:bottom-12 md:right-16"></div>
              <div className="absolute top-6 bottom-6 right-18 w-px bg-black opacity-60 md:top-8 md:bottom-8 md:right-24"></div>
              <div className="absolute top-12 bottom-12 right-24 w-px bg-black opacity-50 md:top-16 md:bottom-16 md:right-32"></div>
              <div className="absolute top-6 bottom-6 right-30 w-px bg-black opacity-65 md:top-8 md:bottom-8 md:right-40"></div>
              <div className="absolute top-9 bottom-9 right-36 w-px bg-black opacity-55 md:top-12 md:bottom-12 md:right-48"></div>
              <div className="absolute top-6 bottom-6 right-42 w-px bg-black opacity-60 md:top-8 md:bottom-8 md:right-56"></div>

              {/* Circuit nodes and connection points */}
              <div className="absolute top-6 left-12 w-1.5 h-1.5 bg-black opacity-80 rounded-full md:top-8 md:left-16 md:w-2 md:h-2"></div>
              <div className="absolute top-12 left-18 w-1 h-1 bg-black opacity-70 rounded-full md:top-16 md:left-24 md:w-1.5 md:h-1.5"></div>
              <div className="absolute top-18 left-24 w-1.5 h-1.5 bg-black opacity-75 rounded-full md:top-24 md:left-32 md:w-2 md:h-2"></div>
              <div className="absolute top-24 left-30 w-1 h-1 bg-black opacity-65 rounded-full md:top-32 md:left-40 md:w-1.5 md:h-1.5"></div>
              <div className="absolute top-30 left-36 w-1.5 h-1.5 bg-black opacity-80 rounded-full md:top-40 md:left-48 md:w-2 md:h-2"></div>
              <div className="absolute top-36 left-18 w-1 h-1 bg-black opacity-70 rounded-full md:top-48 md:left-24 md:w-1.5 md:h-1.5"></div>
              <div className="absolute top-42 left-12 w-1.5 h-1.5 bg-black opacity-75 rounded-full md:top-56 md:left-16 md:w-2 md:h-2"></div>
              <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-black opacity-80 rounded-full md:top-8 md:right-16 md:w-2 md:h-2"></div>
              <div className="absolute top-12 right-18 w-1 h-1 bg-black opacity-70 rounded-full md:top-16 md:right-24 md:w-1.5 md:h-1.5"></div>
              <div className="absolute top-18 right-24 w-1.5 h-1.5 bg-black opacity-75 rounded-full md:top-24 md:right-32 md:w-2 md:h-2"></div>
              <div className="absolute top-24 right-30 w-1 h-1 bg-black opacity-65 rounded-full md:top-32 md:right-40 md:w-1.5 md:h-1.5"></div>
              <div className="absolute top-30 right-36 w-1.5 h-1.5 bg-black opacity-80 rounded-full md:top-40 md:right-48 md:w-2 md:h-2"></div>
              <div className="absolute top-36 right-18 w-1 h-1 bg-black opacity-70 rounded-full md:top-48 md:right-24 md:w-1.5 md:h-1.5"></div>
              <div className="absolute top-42 right-12 w-1.5 h-1.5 bg-black opacity-75 rounded-full md:top-56 md:right-16 md:w-2 md:h-2"></div>

              {/* Resistor and capacitor-like elements */}
              <div className="absolute top-9 left-15 w-4 h-0.5 bg-black opacity-70 rounded md:top-12 md:left-20 md:w-6 md:h-1"></div>
              <div className="absolute top-15 left-21 w-3 h-0.5 bg-black opacity-60 rounded md:top-20 md:left-28 md:w-4 md:h-1"></div>
              <div className="absolute top-21 left-27 w-4 h-0.5 bg-black opacity-70 rounded md:top-28 md:left-36 md:w-6 md:h-1"></div>
              <div className="absolute top-27 left-33 w-3 h-0.5 bg-black opacity-60 rounded md:top-36 md:left-44 md:w-4 md:h-1"></div>
              <div className="absolute top-33 left-15 w-4 h-0.5 bg-black opacity-70 rounded md:top-44 md:left-20 md:w-6 md:h-1"></div>
              <div className="absolute top-39 left-21 w-3 h-0.5 bg-black opacity-60 rounded md:top-52 md:left-28 md:w-4 md:h-1"></div>
              <div className="absolute top-9 right-15 w-4 h-0.5 bg-black opacity-70 rounded md:top-12 md:right-20 md:w-6 md:h-1"></div>
              <div className="absolute top-15 right-21 w-3 h-0.5 bg-black opacity-60 rounded md:top-20 md:right-28 md:w-4 md:h-1"></div>
              <div className="absolute top-21 right-27 w-4 h-0.5 bg-black opacity-70 rounded md:top-28 md:right-36 md:w-6 md:h-1"></div>
              <div className="absolute top-27 right-33 w-3 h-0.5 bg-black opacity-60 rounded md:top-36 md:right-44 md:w-4 md:h-1"></div>
              <div className="absolute top-33 right-15 w-4 h-0.5 bg-black opacity-70 rounded md:top-44 md:right-20 md:w-6 md:h-1"></div>
              <div className="absolute top-39 right-21 w-3 h-0.5 bg-black opacity-60 rounded md:top-52 md:right-28 md:w-4 md:h-1"></div>

              {/* Corner diagonal accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-black opacity-50 md:w-24 md:h-24 md:border-l-2 md:border-t-2"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-black opacity-50 md:w-24 md:h-24 md:border-r-2 md:border-t-2"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l border-b border-black opacity-60 md:w-32 md:h-32 md:border-l-2 md:border-b-2"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-black opacity-60 md:w-32 md:h-32 md:border-r-2 md:border-b-2"></div>
            </div>
          </div>
        </div>

        {/* Desktop Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-28 relative z-10 pt-12 pb-4 sm:py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12"
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
                className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-2 sm:mb-3 md:mb-4 tracking-wide sm:tracking-wider"
                style={{ fontFamily: "'Sddystopiandemo-GO7xa', monospace" }}
              >
                HACKSPIRE 2025
              </h3>
              <p
                className="px-20 md:px-0 text-xs sm:text-base md:text-lg lg:text-xl text-black font-medium max-w-sm sm:max-w-md lg:max-w-lg"
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
              className="flex flex-col items-center lg:items-end gap-4 sm:gap-5 lg:gap-6"
            >
              {/* Social Media Icons */}
              <div className="flex items-center gap-4 sm:gap-5 lg:gap-6">
                {/* Twitter */}
                <motion.a
                  href="https://x.com/FiemAcm?t=8KMerJECwU9fseHsvt7ryQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </motion.a>
                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/acmfiem?utm_source=qr&igsh=ZDJ5ejN5Nzk0Nmx5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/fiem-acm-student-chapter-537786351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
                {/* Facebook */}
                <motion.a
                  href="https://www.facebook.com/share/14LCXi3MXQH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </motion.a>
              </div>

              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xs sm:text-sm md:text-base text-black font-medium text-center lg:text-right"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                © 2025 HACKSPIRE • FIEM ACM STUDENT CHAPTER
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
