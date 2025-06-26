"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden font-poppins">
      {/* Particle / Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-shaktiPurple via-black to-techBlue" />
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] bg-[url('data:image/svg+xml;base64,...')]" />
      </div>

      {/* Holographic Durga projection */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 pointer-events-none"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/durga-hologram.png"
            alt="Holographic Durga"
            fill
            className="object-contain opacity-90"
            style={{
              filter: 'drop-shadow(0 0 50px rgba(251, 191, 36, 0.9))',
              mixBlendMode: 'screen'
            }}
            priority
          />
          <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_75%)]"></div>
        </div>
      </motion.div>

      {/* Hero Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <div className="text-center px-4 w-full max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 relative text-transparent bg-clip-text bg-gradient-to-r from-goldGlow via-white to-shaktiRed animate-pulse">
            Hackspire 2025
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold space-y-4"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
              Where <span className="text-white font-bold">Tradition</span> Meets <span className="text-white font-bold">Innovation</span>
            </p>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 rounded-full shadow-md" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
      >
        <p className="mb-2 text-sm text-white/80 tracking-wide">Scroll Down</p>
        <div className="w-px h-14 bg-gradient-to-t from-goldGlow to-white animate-bounce" />
      </motion.div>
    </section>
  );
}
