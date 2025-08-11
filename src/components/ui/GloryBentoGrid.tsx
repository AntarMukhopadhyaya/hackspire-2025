"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface BentoCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  delay: number;
  size: "small" | "medium" | "large";
}

interface HoverModalProps {
  isVisible: boolean;
  position: { x: number; y: number };
  data: {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
  } | null;
}

const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-2 row-span-1",
  large: "col-span-2 row-span-2",
};

const textSizeTitle = "text-[clamp(1.1rem,2.5vw,2.2rem)]";
const textSizeSubtitle = "text-[clamp(0.8rem,1.2vw,1.1rem)]";
const textSizeDesc = "text-[clamp(0.7rem,1vw,1rem)]";

const HoverModal: React.FC<
  HoverModalProps & { modalRef?: React.RefObject<HTMLDivElement | null> }
> = ({ isVisible, position, data, modalRef }) => {
  if (!isVisible || !data) return null;

  return (
    <div
      ref={modalRef}
      className="fixed z-[9999] pointer-events-none"
      style={{
        left: position.x + 20,
        top: position.y - 100,
        opacity: isVisible ? 1 : 0,
        transform: `scale(${isVisible ? 1 : 0.9})`,
        transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
      }}
    >
      {/* Futuristic Card */}
      <div className="relative p-4 w-80">
        {/* Background with clip-path cuts */}
        <div
          className="absolute inset-0 bg-yellow-400"
          style={{
            clipPath:
              "polygon(15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%, 0% 15px)",
          }}
        ></div>

        {/* Border with clip-path cuts */}
        <div
          className="absolute -inset-1 bg-yellow-500"
          style={{
            clipPath:
              "polygon(15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%, 0% 15px)",
            zIndex: -1,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Image */}
          <div
            className="w-full h-32 mb-3 overflow-hidden relative"
            style={{
              clipPath:
                "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
            }}
          >
            <Image
              src={data.imageUrl}
              alt={data.title}
              fill
              className="object-cover"
              style={{ filter: "brightness(0.8) contrast(1.1)" }}
            />
          </div>

          {/* Text Content */}
          <h3
            className="text-xl font-bold text-black mb-2"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            {data.title}
          </h3>
          <p
            className="text-black text-sm font-medium mb-2"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            {data.subtitle}
          </p>
          <p
            className="text-black text-xs leading-tight"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            {data.description}
          </p>
        </div>

        {/* Cyberpunk corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-black opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-black opacity-60"></div>
      </div>
    </div>
  );
};

const BentoCard: React.FC<
  BentoCardProps & {
    onHover: (data: any, position: { x: number; y: number }) => void;
    onLeave: () => void;
  }
> = ({
  title,
  subtitle,
  description,
  imageUrl,
  delay,
  size,
  onHover,
  onLeave,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    setIsHovered(true);
    onHover(
      { title, subtitle, description, imageUrl },
      { x: e.clientX, y: e.clientY }
    );
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isHovered) {
      onHover(
        { title, subtitle, description, imageUrl },
        { x: e.clientX, y: e.clientY }
      );
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onLeave();
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden bg-gradient-to-br from-yellow-400/10 to-orange-500/10 backdrop-blur-sm border border-yellow-400/20 transition-all duration-700 ease-out group cursor-pointer hover:scale-[1.02] hover:bg-gradient-to-br hover:from-yellow-400/20 hover:to-orange-500/20 hover:border-yellow-400/40 flex flex-col justify-end p-4 ${sizeClasses[size]}`}
      style={{
        animationDelay: `${delay}ms`,
        clipPath:
          "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
      <div className="relative z-10 w-full flex flex-col justify-end h-full">
        <h3
          className={`font-bold text-white mb-1 leading-tight break-words ${textSizeTitle} truncate`}
          style={{ fontFamily: "'Mokoto Demo', monospace" }}
        >
          {title}
        </h3>
        <p
          className={`text-yellow-300 font-medium mb-1 leading-tight ${textSizeSubtitle} truncate`}
          style={{ fontFamily: "'Mokoto Demo', monospace" }}
        >
          {subtitle}
        </p>
        <p
          className={`text-gray-300 leading-snug ${textSizeDesc} ${
            isHovered ? "opacity-100" : "opacity-80"
          } transition-opacity duration-500 line-clamp-3`}
          style={{ fontFamily: "'Mokoto Demo', monospace" }}
        >
          {description}
        </p>
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
  );
};

const GloryBentoGrid: React.FC = () => {
  const [hoverModal, setHoverModal] = useState<{
    isVisible: boolean;
    position: { x: number; y: number };
    data: {
      title: string;
      subtitle: string;
      description: string;
      imageUrl: string;
    } | null;
  }>({
    isVisible: false,
    position: { x: 0, y: 0 },
    data: null,
  });

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCardHover = (data: any, position: { x: number; y: number }) => {
    setHoverModal({
      isVisible: true,
      position,
      data,
    });
  };

  const handleCardLeave = () => {
    setHoverModal({
      isVisible: false,
      position: { x: 0, y: 0 },
      data: null,
    });
  };

  // Static grid layout with fixed positions and sizes to prevent random repositioning
  const staticData: BentoCardProps[] = [
    {
      title: "NEURAL FIREWALL",
      subtitle: "Cyber Defense System",
      description:
        "AI-powered security matrix that neutralized 99.9% of cyber threats in real-time.",
      imageUrl:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      delay: 0,
      size: "large",
    },
    {
      title: "QUANTUM MATRIX",
      subtitle: "Computing Revolution",
      description:
        "Breakthrough quantum algorithms solving complex problems in milliseconds.",
      imageUrl:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
      delay: 100,
      size: "medium",
    },
    {
      title: "ECO NEXUS",
      subtitle: "Climate Guardian",
      description:
        "Smart grid system reducing carbon emissions by 40% across smart cities.",
      imageUrl:
        "https://images.unsplash.com/photo-1569163139591-de3340b1e6d0?w=800&h=600&fit=crop",
      delay: 200,
      size: "small",
    },
    {
      title: "VOID RUNNERS",
      subtitle: "Space Explorer",
      description:
        "Deep space navigation system enabling humanity's first interstellar journey.",
      imageUrl:
        "https://images.unsplash.com/photo-1464652874599-de44db3b776e?w=800&h=600&fit=crop",
      delay: 300,
      size: "small",
    },
    {
      title: "BIO SYNC",
      subtitle: "Medical AI",
      description:
        "Precision medicine platform delivering personalized treatments with 95% accuracy.",
      imageUrl:
        "https://images.unsplash.com/photo-1514416432324-4775b0d92b2e?w=800&h=600&fit=crop",
      delay: 400,
      size: "medium",
    },
    {
      title: "NEON PROTOCOL",
      subtitle: "Blockchain Network",
      description:
        "Decentralized financial ecosystem processing transactions at lightning speed.",
      imageUrl:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      delay: 500,
      size: "large",
    },
    {
      title: "STORM CAST",
      subtitle: "Weather Predictor",
      description:
        "Predictive weather systems preventing natural disasters with 98% accuracy.",
      imageUrl:
        "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&h=600&fit=crop",
      delay: 600,
      size: "small",
    },
    {
      title: "MIND BRIDGE",
      subtitle: "Neural Interface",
      description:
        "Brain-computer interface enabling direct thought-to-digital communication.",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      delay: 700,
      size: "small",
    },
    {
      title: "AGRO MATRIX",
      subtitle: "Smart Farming",
      description:
        "Precision agriculture boosting crop yields by 45% with minimal resources.",
      imageUrl:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
      delay: 800,
      size: "medium",
    },
    {
      title: "SPACE LINK",
      subtitle: "Satellite Network",
      description:
        "Global connectivity solution bringing internet to remote regions.",
      imageUrl:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop",
      delay: 900,
      size: "small",
    },
    {
      title: "SHIELD PROTOCOL",
      subtitle: "Data Guardian",
      description:
        "Zero-trust security architecture protecting sensitive data worldwide.",
      imageUrl:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&h=600&fit=crop",
      delay: 1000,
      size: "small",
    },
    {
      title: "MOBILITY HUB",
      subtitle: "Transport Network",
      description:
        "Autonomous transport system revolutionizing urban mobility patterns.",
      imageUrl:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop",
      delay: 1100,
      size: "medium",
    },
  ];

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-[160px] md:auto-rows-[200px] lg:auto-rows-[220px]">
          {staticData.map((card, index) => (
            <BentoCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              imageUrl={card.imageUrl}
              delay={card.delay}
              size={card.size}
              onHover={handleCardHover}
              onLeave={handleCardLeave}
            />
          ))}
        </div>
      </div>

      {/* Hover Modal */}
      <HoverModal
        isVisible={hoverModal.isVisible}
        position={hoverModal.position}
        data={hoverModal.data}
        modalRef={modalRef}
      />
    </>
  );
};

export default GloryBentoGrid;
