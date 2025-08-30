import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

import CyberButton from "../ui/CyberButton";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is HackSpire 2025 and how does it work?",
    answer:
      "HackSpire 2025 is a revolutionary hackathon that brings together the brightest minds in technology. Our event combines cutting-edge challenges with collaborative innovation, providing participants with 48 hours to build groundbreaking solutions using the latest technologies.",
    category: "General",
  },
  {
    id: 2,
    question: "How do I register for the hackathon?",
    answer:
      "Registration is simple! Visit our registration portal, fill out the application form, and submit your team details. Early bird registration is open until March 1st, 2025. Teams can have 2-4 members, and individual participants will be matched with teams.",
    category: "Registration",
  },
  {
    id: 3,
    question: "Can I participate online?",
    answer:
      "No. HackSpire 2025 is an in-person hackathon. All shortlisted participants must be present at the venue.",
    category: "Participation",
  },
  {
    id: 4,
    question: "Can I come alone or do I need a team?",
    answer:
      "You can register solo or in a team (2–4 members). If you don't have a team, you'll have the chance to form one at the event.",
    category: "Teams",
  },
  {
    id: 5,
    question: "What is the team size limit?",
    answer:
      "Teams can have up to 4 members. Solo participation is also allowed.",
    category: "Teams",
  },
  {
    id: 6,
    question: "Will accommodation be provided?",
    answer:
      "Accommodation will be arranged only during the hackathon days (October 31 – November 1, 2025).",
    category: "Logistics",
  },
  {
    id: 7,
    question: "Do you provide travel reimbursements or support?",
    answer: "No, we currently do not provide travel reimbursements or support.",
    category: "Logistics",
  },
  {
    id: 8,
    question: "What should I bring with me?",
    answer:
      "Bring your laptop, charger, valid student ID card, and any specific hardware you want to use. Basic amenities will be provided at the venue.",
    category: "Logistics",
  },
  {
    id: 9,
    question: "Will food be provided?",
    answer:
      "Yes. Meals and refreshments will be provided free of cost during the hackathon.",
    category: "Logistics",
  },
  {
    id: 10,
    question: "Do I need prior hackathon experience?",
    answer:
      "Not at all! Beginners are encouraged to participate. We'll also host workshops and mentoring sessions to guide you.",
    category: "Experience",
  },
  {
    id: 11,
    question: "Can I start working on my project before the hackathon?",
    answer:
      "No. All projects must be built during the hackathon. However, you can brainstorm ideas and explore tech stacks in advance.",
    category: "Rules",
  },
  {
    id: 12,
    question: "Will there be mentors to guide us?",
    answer:
      "Yes. Industry experts and community mentors will be available throughout the event to guide you.",
    category: "Support",
  },
  {
    id: 13,
    question: "Are there different tracks or problem statements?",
    answer:
      "Yes. HackSpire will have multiple tracks, including software and hardware. Problem statements will be shared at the event.",
    category: "Event Format",
  },
];

const FAQSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (id: number) => {
    console.log("Clicked FAQ item:", id);
    setExpandedItems((prev) => {
      if (prev.includes(id)) {
        console.log("Closing item:", id);
        return prev.filter((item) => item !== id);
      } else {
        console.log("Opening item:", id);
        return [...prev, id];
      }
    });
  };

  const isExpanded = (id: number) => expandedItems.includes(id);

  return (
    <div className="min-h-screen text-white py-20 px-4 relative bg-transparent">
      {/* Side Trapezium Shapes */}
      <div className="absolute left-0 top-1/4 w-20 h-64 z-0">
        <div className="w-full h-full bg-yellow-400 relative left-trapezium-main">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-4 bottom-4 left-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-8 left-1 right-1 h-px bg-black opacity-65"></div>
            <div className="absolute top-7 left-1 w-1 h-1 bg-black rounded-full opacity-70"></div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-1/4 w-20 h-64 z-0">
        <div className="w-full h-full bg-yellow-400 relative right-trapezium-main">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-4 bottom-4 right-2 w-px bg-black opacity-70"></div>
            <div className="absolute top-8 left-1 right-1 h-px bg-black opacity-65"></div>
            <div className="absolute top-7 right-1 w-1 h-1 bg-black rounded-full opacity-70"></div>
          </div>
        </div>
      </div>

      {/* FAQ Title */}
      <div className="text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-[5rem] lg:text-[6rem] xl:text-8xl 2xl:text-[8rem] font-bold text-white font-sddystopiandemo"
        >
          FAQ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto pb-8 text-lg text-white leading-relaxed font-mokoto"
        >
          Got questions about HackSpire 2025? We've got answers!
          <br />
          Find everything you need to know about registration, participation,
          and prizes.
        </motion.p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-6xl mx-auto space-y-3 md:space-y-6 relative z-10">
        {faqData.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden bg-gradient-to-br from-yellow-400/10 px-4 py-4 md:px-8 md:py-6 to-orange-500/10 backdrop-blur-sm border border-yellow-400/30 group hover:border-yellow-400/60 transition-all duration-300 z-20 faq-card"
              style={{
                clipPath:
                  "polygon(15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%, 0% 15px)",
              }}
            >
              {/* Orange border for cut corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-orange-400 opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-orange-400 opacity-100 transition-opacity duration-300"></div>
              {/* Cyberpunk Circuit Overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <div className="absolute top-2 left-2 w-8 h-px bg-yellow-400 opacity-60"></div>
                <div className="absolute top-2 left-2 w-px h-8 bg-yellow-400 opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-8 h-px bg-yellow-400 opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-px h-8 bg-yellow-400 opacity-60"></div>
              </div>

              <div style={{ position: "relative", zIndex: 9999 }}>
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="w-full px-4 md:px-8 text-left flex items-center justify-between group focus:outline-none hover:cursor-pointer faq-button"
                >
                  <h3
                    className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis md:whitespace-normal faq-question"
                    style={{ fontFamily: "'Mokoto Demo', monospace" }}
                  >
                    {item.question}
                  </h3>
                  <div className="ml-2 md:ml-6 flex-shrink-0">
                    {isExpanded(item.id) ? (
                      <ChevronUp className="w-5 h-5 md:w-8 md:h-8 text-yellow-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 md:w-8 md:h-8 text-gray-400 group-hover:text-yellow-400" />
                    )}
                  </div>
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  isExpanded(item.id)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 md:px-8 pb-4 md:pb-6">
                  <div className="border-t border-yellow-400/30 pt-4 md:pt-6">
                    <p
                      className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg faq-answer"
                      style={{ fontFamily: "'Mokoto Demo', monospace" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Code of Conduct Link */}
      <div className="flex justify-center mt-12 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center w-full"
        >
          <a
            href="https://fancy-brass-700.notion.site/HackSpire-2025-Code-of-Conduct-25b111e6784280b4b3d3e8c4d3ce4ba2"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-yellow-400/10 border border-yellow-400/30 hover:border-yellow-400 transition-colors duration-300 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span
              className="text-xl md:text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"
              style={{ fontFamily: "'Mokoto Demo', monospace" }}
            >
              Click to see CODE OF CONDUCT
            </span>
          </a>
        </motion.div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-4xl mx-auto mt-20 relative z-10">
        <div
          className="relative overflow-hidden bg-gradient-to-br from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 p-8 text-center group hover:border-yellow-400/60 transition-all duration-300"
          style={{
            clipPath:
              "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
          }}
        >
          {/* Cyberpunk Circuit Overlay */}
          <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            <div className="absolute top-2 left-2 w-12 h-px bg-yellow-400 opacity-60"></div>
            <div className="absolute top-2 left-2 w-px h-12 bg-yellow-400 opacity-60"></div>
            <div className="absolute bottom-2 right-2 w-12 h-px bg-yellow-400 opacity-60"></div>
            <div className="absolute bottom-2 right-2 w-px h-12 bg-yellow-400 opacity-60"></div>
          </div>

          <h3
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            Still have questions?
          </h3>
          <p
            className="text-yellow-300 mb-8 max-w-md mx-auto text-lg"
            style={{ fontFamily: "'Mokoto Demo', monospace" }}
          >
            Our team is here to help. Get in touch and we'll respond within 24
            hours.
          </p>
          <CyberButton href="/contact">
            <span className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6" />
              Contact Support
            </span>
          </CyberButton>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .cyber-input {
          clip-path: polygon(
            15px 0%,
            100% 0%,
            100% calc(100% - 15px),
            calc(100% - 15px) 100%,
            0% 100%,
            0% 15px
          );
        }

        .cyber-button {
          position: relative;
          overflow: hidden;
        }

        .cyber-button-background {
          clip-path: polygon(
            15px 0%,
            100% 0%,
            100% calc(100% - 15px),
            calc(100% - 15px) 100%,
            0% 100%,
            0% 15px
          );
        }

        .cyber-button-border {
          clip-path: polygon(
            15px 0%,
            100% 0%,
            100% calc(100% - 15px),
            calc(100% - 15px) 100%,
            0% 100%,
            0% 15px
          );
          z-index: -1;
        }

        .cyber-button-small {
          position: relative;
          overflow: hidden;
        }

        /* Mobile-specific FAQ optimizations */
        @media (max-width: 768px) {
          .faq-question {
            font-size: 0.875rem !important;
            line-height: 1.1 !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            font-weight: 600 !important;
            letter-spacing: -0.025em !important;
          }

          .faq-card {
            min-height: 56px !important;
            padding: 10px 16px !important;
            margin-bottom: 8px !important;
          }

          .faq-button {
            padding: 6px 16px !important;
            min-height: 40px !important;
          }

          .faq-answer {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
          }
        }

        /* Extra small mobile screens */
        @media (max-width: 480px) {
          .faq-question {
            font-size: 0.8rem !important;
            max-width: calc(100vw - 120px) !important;
          }

          .faq-card {
            padding: 8px 12px !important;
            min-height: 48px !important;
          }

          .faq-button {
            padding: 4px 12px !important;
            min-height: 36px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQSection;
