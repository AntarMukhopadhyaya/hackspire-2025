"use client";
import { motion, type Transition } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

interface AnimationConfig {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: Transition;
}

const FooterContent = () => {
  const shlokasSanskrit = [
    "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता",
    "नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः",
    "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके",
    "शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते",
  ];
  const shlokasBengali = [
    "যা দেবী সর্বভূতেষু শক্তিরূপেণ সংস্থিতা",
    "নমস্তস্যৈ নমস্তস্যৈ নমস্তস্যৈ নমো নমঃ",
    "সর্বমঙ্গলমাঙ্গল্যে শিবে সর্বার্থসাধিকে",
    "শরণ্যে ত্র্যম্বকে গৌরি নারাযণি নমোঽস্তু তে",
  ];

  const [currentPhase, setCurrentPhase] = useState("sanskrit-appear");
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const timer1 = setTimeout(() => {
      setCurrentPhase("sanskrit-disappear");
    }, 5000);

    const timer2 = setTimeout(() => {
      setCurrentPhase("bengali-appear");
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [inView]);

  const getSanskritAnimation = (index: number): AnimationConfig => {
    if (currentPhase === "sanskrit-appear") {
      return {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: {
          delay: index * 0.4,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        },
      };
    } else if (currentPhase === "sanskrit-disappear") {
      return {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 0, y: -20 },
        transition: {
          delay: index * 0.3,
          duration: 0.6,
          ease: "easeIn",
        },
      };
    } else {
      return {
        initial: { opacity: 0, y: 0 },
        animate: { opacity: 0, y: 0 },
        transition: { duration: 0 },
      };
    }
  };

  const getBengaliAnimation = (index: number): AnimationConfig => {
    if (currentPhase === "bengali-appear") {
      return {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: {
          delay: index * 0.4,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        },
      };
    } else {
      return {
        initial: { opacity: 0, y: 0 },
        animate: { opacity: 0, y: 0 },
        transition: { duration: 0 },
      };
    }
  };

  return (
    <footer className="text-white py-16 font-noto-bengali relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1),transparent_70%)] pointer-events-none" />
      <div className="px-4 md:px-8 lg:px-16 max-w-6xl mx-auto relative z-10">
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
          <motion.div
            className="text-center min-h-[120px] flex flex-col justify-center"
            onViewportEnter={() => setInView(true)}
          >
            {/* Sanskrit Shlokas */}
            {currentPhase.includes("sanskrit") &&
              shlokasSanskrit.map((shloka, index) => (
                <motion.p
                  key={`sanskrit-${index}`}
                  initial={getSanskritAnimation(index).initial}
                  animate={getSanskritAnimation(index).animate}
                  transition={getSanskritAnimation(index).transition}
                  className="text-lg text-yellow-200 mb-2 tracking-wide"
                >
                  {shloka}
                </motion.p>
              ))}

            {/* Bengali Shlokas */}
            {currentPhase === "bengali-appear" &&
              shlokasBengali.map((shloka, index) => (
                <motion.p
                  key={`bengali-${index}`}
                  initial={getBengaliAnimation(index).initial}
                  animate={getBengaliAnimation(index).animate}
                  transition={getBengaliAnimation(index).transition}
                  className="text-lg text-yellow-200 mb-2 tracking-wide"
                >
                  {shloka}
                </motion.p>
              ))}
          </motion.div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-yellow-300/10 text-center text-sm text-gray-500 tracking-widest">
          © 2025 Hackspire. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Export the dynamic component with no SSR
const Footer = dynamic(() => Promise.resolve(FooterContent), {
  ssr: false,
});

export default Footer;
