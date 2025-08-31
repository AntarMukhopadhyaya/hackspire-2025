"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface CustomDevfolioButtonProps {
  className?: string;
}

const CustomDevfolioButton: React.FC<CustomDevfolioButtonProps> = ({
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`custom-devfolio-button-container relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <a
        href="https://hackspire25.devfolio.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <div className="custom-devfolio-button relative overflow-hidden">
          {/* Background with rounded corners */}
          <div className="custom-devfolio-button-bg"></div>

          {/* Content */}
          <div className="custom-devfolio-button-content">
            {/* Devfolio Icon */}
            <div className="custom-devfolio-icon">
              <Image
                src="/devfolio.svg"
                alt="Devfolio"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>

            {/* Text */}
            <span className="custom-devfolio-button-text">
              Apply with Devfolio
            </span>
          </div>

          {/* Hover glow effect */}
          {isHovered && (
            <motion.div
              className="custom-devfolio-button-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </div>
      </a>

      {/* CSS Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap");

        .custom-devfolio-button-container {
          cursor: pointer;
          user-select: none;
        }

        .custom-devfolio-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, sans-serif;
          font-size: 30px;
          font-weight: 600;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          overflow: hidden;
          height: 44px;
          width: 312px;
        }

        /* Background with rounded corners */
        .custom-devfolio-button-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #0070f3;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        /* Content layout */
        .custom-devfolio-button-content {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 2;
        }

        /* Icon styling */
        .custom-devfolio-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }

        /* Button text */
        .custom-devfolio-button-text {
          color: #ffffff;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 20px;
        }

        /* Glow effect on hover */
        .custom-devfolio-button-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 70%
          );
          border-radius: 4px;
          pointer-events: none;
          z-index: 1;
        }

        /* Hover effects */
        .custom-devfolio-button-container:hover .custom-devfolio-button-bg {
          background: #0051cc;
          box-shadow: 0 4px 12px rgba(0, 112, 243, 0.3);
        }

        .custom-devfolio-button-container:hover .custom-devfolio-button-text {
          color: #ffffff;
        }

        /* Active/pressed state */
        .custom-devfolio-button-container:active .custom-devfolio-button-bg {
          background: #004099;
          transform: translateY(1px);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .custom-devfolio-button {
            padding: 10px 20px;
            font-size: 14px;
            min-width: 180px;
          }

          .custom-devfolio-icon {
            width: 20px;
            height: 20px;
          }

          .custom-devfolio-button-content {
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .custom-devfolio-button {
            padding: 8px 16px;
            font-size: 13px;
            min-width: 160px;
          }

          .custom-devfolio-icon {
            width: 18px;
            height: 18px;
          }

          .custom-devfolio-button-content {
            gap: 8px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default CustomDevfolioButton;
