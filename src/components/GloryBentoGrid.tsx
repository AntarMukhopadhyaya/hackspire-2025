"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface BentoCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  delay: number;
  size: "small" | "medium" | "large";
  onHover?: (
    data: {
      title: string;
      subtitle: string;
      description: string;
      imageUrl: string;
    } | null
  ) => void;
  onMouseMove?: (event: React.MouseEvent) => void;
}

const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-2 row-span-1",
  large: "col-span-2 row-span-2",
};

const textSizeTitle = "text-[clamp(1.1rem,2.5vw,2.2rem)]";
const textSizeSubtitle = "text-[clamp(0.8rem,1.2vw,1.1rem)]";
const textSizeDesc = "text-[clamp(0.7rem,1vw,1rem)]";

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  delay,
  size,
  onHover,
  onMouseMove,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.({ title, subtitle, description, imageUrl });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover?.(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    onMouseMove?.(e);
  };

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-700 ease-out group cursor-pointer hover:scale-[1.02] hover:bg-gradient-to-br hover:from-purple-800/30 hover:to-blue-800/30 flex flex-col justify-end p-4 ${sizeClasses[size]}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ filter: "brightness(0.3) contrast(1.2)" }}
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col justify-end h-full">
        <h3
          className={`font-bold text-white mb-1 font-['Distancia'] leading-tight break-words ${textSizeTitle} truncate`}
        >
          {title}
        </h3>
        <p
          className={`text-purple-300 font-medium mb-1 font-['Poppins'] leading-tight ${textSizeSubtitle} truncate`}
        >
          {subtitle}
        </p>
        <p
          className={`text-gray-300 font-['Poppins'] leading-snug ${textSizeDesc} ${
            isHovered ? "opacity-100" : "opacity-80"
          } transition-opacity duration-500 line-clamp-3`}
        >
          {description}
        </p>
      </div>
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-purple-400/50 transition-colors duration-500 pointer-events-none" />
    </div>
  );
};

const SIZES = ["small", "medium", "large"] as const;

function shuffleArray<T>(array: T[]): T[] {
  // Fisher-Yates shuffle
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const GloryBentoGrid: React.FC = () => {
  const [randomizedData, setRandomizedData] = useState<BentoCardProps[]>([]);
  const [hoveredCard, setHoveredCard] = useState<{
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
  } | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleCardHover = (
    data: {
      title: string;
      subtitle: string;
      description: string;
      imageUrl: string;
    } | null
  ) => {
    setHoveredCard(data);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const modalWidth = 320; // max-w-xs is approximately 320px
    const modalHeight = 200; // approximate height
    const padding = 20;

    let x = event.clientX + padding;
    let y = event.clientY - modalHeight - padding;

    // Adjust if modal would go off-screen
    if (x + modalWidth > window.innerWidth) {
      x = event.clientX - modalWidth - padding;
    }
    if (y < 0) {
      y = event.clientY + padding;
    }

    setMousePosition({ x, y });
  };

  // 12 cards to fill a 6x2 grid (no blank spots)
  const baseData: Omit<BentoCardProps, "size">[] = [
    {
      title: "Innovation Hub",
      subtitle: "2024 Breakthrough",
      description:
        "Revolutionary AI-powered solutions that transformed healthcare diagnostics and patient care.",
      imageUrl:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      delay: 0,
    },
    {
      title: "Quantum Leap",
      subtitle: "Tech Excellence",
      description:
        "Next-generation quantum computing applications that pushed the boundaries of computational power.",
      imageUrl:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
      delay: 100,
    },
    {
      title: "Green Future",
      subtitle: "Sustainability",
      description:
        "Eco-friendly solutions that address climate change through innovative renewable energy systems.",
      imageUrl:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=600&fit=crop",
      delay: 200,
    },
    {
      title: "Digital Revolution",
      subtitle: "Web3 Pioneer",
      description:
        "Blockchain-based platforms that revolutionized decentralized finance and digital ownership.",
      imageUrl:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      delay: 300,
    },
    {
      title: "Smart Cities",
      subtitle: "Urban Innovation",
      description:
        "IoT-driven smart city solutions that optimize urban infrastructure and improve citizen life.",
      imageUrl:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
      delay: 400,
    },
    {
      title: "Health Tech",
      subtitle: "Medical Breakthrough",
      description:
        "Advanced telemedicine platforms that brought healthcare to remote communities worldwide.",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=600&fit=crop",
      delay: 500,
    },
    {
      title: "Education 2.0",
      subtitle: "Learning Revolution",
      description:
        "Immersive VR/AR educational platforms that transformed how students learn and interact.",
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      delay: 600,
    },
    {
      title: "Fintech Wave",
      subtitle: "Financial Innovation",
      description:
        "Next-generation payment systems and financial tools that democratized access to banking services.",
      imageUrl:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop",
      delay: 700,
    },
    // Extra cards to fill grid
    {
      title: "AgriTech",
      subtitle: "Food Security",
      description:
        "Smart farming solutions using IoT and AI to boost crop yields and sustainability.",
      imageUrl:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
      delay: 800,
    },
    {
      title: "Space Tech",
      subtitle: "Beyond Earth",
      description:
        "Innovations in satellite and space exploration for a connected planet.",
      imageUrl:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop",
      delay: 900,
    },
    {
      title: "Cybersecurity",
      subtitle: "Digital Safety",
      description:
        "Cutting-edge security solutions to protect data and privacy in a digital world.",
      imageUrl:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&h=600&fit=crop",
      delay: 1000,
    },
    {
      title: "Mobility",
      subtitle: "Smart Transport",
      description:
        "Next-gen mobility and transport solutions for urban and rural areas.",
      imageUrl:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop",
      delay: 1100,
    },
  ];

  // Use useEffect to shuffle data only on client side
  React.useEffect(() => {
    const shuffledData: BentoCardProps[] = shuffleArray(baseData).map(
      (card) => ({
        ...card,
        size: SIZES[Math.floor(Math.random() * SIZES.length)],
      })
    );
    setRandomizedData(shuffledData);
  }, []);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-[160px] md:auto-rows-[200px] lg:auto-rows-[220px]">
          {randomizedData.map((card, index) => (
            <BentoCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              imageUrl={card.imageUrl}
              delay={card.delay}
              size={card.size}
              onHover={handleCardHover}
              onMouseMove={handleMouseMove}
            />
          ))}
        </div>
      </div>

      {/* HackSpire 2024 Success Section */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-4 lg:px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-['Distancia']">
            HackSpire 2024 Success
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-['Poppins'] max-w-3xl mx-auto">
            The incredible team of crew members and faculty who made HackSpire
            2024 a grand success
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20"
        >
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="https://res.cloudinary.com/dislegzga/image/upload/v1751778202/WhatsApp_Image_2025-07-06_at_10.32.39_7e1ee8c1_q6iytc.jpg"
              alt="HackSpire 2024 Success - Crew and Faculty"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Optional overlay text */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-['Distancia']">
              The Dream Team Behind the Magic
            </h3>
            <p className="text-gray-300 font-['Poppins'] text-sm md:text-base">
              Our dedicated crew members and supportive faculty who worked
              tirelessly to bring HackSpire 2024 to life and make it an
              unforgettable experience for all participants.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Modal */}
      <AnimatePresence>
        {hoveredCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed pointer-events-none z-50"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          >
            <div className="bg-black/90 backdrop-blur-md border border-purple-400/30 rounded-xl overflow-hidden max-w-xs shadow-2xl shadow-purple-500/20">
              <div className="relative w-full h-32 mb-0">
                <Image
                  src={hoveredCard.imageUrl}
                  alt={hoveredCard.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-1 font-['Poppins'] leading-tight">
                  {hoveredCard.title}
                </h3>
                <p className="text-purple-300 font-medium text-sm mb-2 font-['Poppins']">
                  {hoveredCard.subtitle}
                </p>
                <p className="text-gray-300 text-xs font-['Poppins'] leading-relaxed line-clamp-3">
                  {hoveredCard.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GloryBentoGrid;
