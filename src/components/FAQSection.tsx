import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import Link from 'next/link';

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
    answer: "HackSpire 2025 is a revolutionary hackathon that brings together the brightest minds in technology. Our event combines cutting-edge challenges with collaborative innovation, providing participants with 48 hours to build groundbreaking solutions using the latest technologies.",
    category: "General"
  },
  {
    id: 2,
    question: "How do I register for the hackathon?",
    answer: "Registration is simple! Visit our registration portal, fill out the application form, and submit your team details. Early bird registration is open until March 1st, 2025. Teams can have 2-4 members, and individual participants will be matched with teams.",
    category: "Registration"
  },
  {
    id: 3,
    question: "What are the system requirements and tech stack?",
    answer: "Participants can use any programming language, framework, or technology stack. We provide cloud credits for AWS, Azure, and GCP. High-speed internet, power outlets, and workstations are available on-site. Bring your own laptop and development environment.",
    category: "Technical"
  },
  {
    id: 4,
    question: "Is there a mobile app or online platform?",
    answer: "Yes! We have a dedicated HackSpire mobile app for real-time updates, team communication, mentor booking, and submission tracking. The app is available on both iOS and Android platforms and includes AR features for venue navigation.",
    category: "Technical"
  },
  {
    id: 5,
    question: "What are the participation fees and prizes?",
    answer: "Registration is completely free! We offer over ₹5 lakhs in prizes including cash rewards, internship opportunities, startup funding, and cutting-edge tech gadgets. Special category prizes are available for AI/ML, blockchain, and sustainability tracks.",
    category: "Prizes"
  },
  {
    id: 6,
    question: "Can I participate remotely or is it in-person only?",
    answer: "HackSpire 2025 is primarily an in-person event in Kolkata, but we also offer a hybrid track for remote participants. Remote teams get access to virtual mentorship, online workshops, and can present their projects via video calls.",
    category: "Participation"
  },
  {
    id: 7,
    question: "What kind of mentorship and support is available?",
    answer: "We have 50+ industry experts, startup founders, and tech leaders as mentors. Mentorship sessions are available 24/7 during the hackathon. We also provide technical workshops, API documentation, and dedicated support channels for each track.",
    category: "Support"
  },
  {
    id: 8,
    question: "How is intellectual property and data security handled?",
    answer: "All participants retain full ownership of their intellectual property. We follow strict data protection guidelines and provide secure development environments. NDAs are available for teams working on sensitive projects, and all submissions are kept confidential.",
    category: "Legal & Security"
  },
  {
    id: 9,
    question: "Can I collaborate with participants from other teams?",
    answer: "Cross-team collaboration is encouraged during networking sessions and workshops. However, final submissions must be from your registered team. We facilitate knowledge sharing through our community Discord server and collaborative spaces.",
    category: "Collaboration"
  },
  {
    id: 10,
    question: "What happens after the hackathon ends?",
    answer: "Winners get access to our exclusive alumni network, incubation programs, and investor connections. All participants receive certificates, and outstanding projects may be featured in tech publications. We also host quarterly meetups for continued networking.",
    category: "Post-Event"
  }
];

const FAQSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (id: number) => {
    console.log('Clicked FAQ item:', id);
    setExpandedItems(prev => {
      if (prev.includes(id)) {
        console.log('Closing item:', id);
        return prev.filter(item => item !== id);
      } else {
        console.log('Opening item:', id);
        return [...prev, id];
      }
    });
  };

  const isExpanded = (id: number) => expandedItems.includes(id);


  return (
    <div className="min-h-screen text-white py-20 px-4 relative bg-black">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <style>
            {Array.from({ length: 50 })
              .map((_, i) => {
                const delay = Math.random() * 5;
                const duration = 3 + Math.random() * 4;
                return `.matrix-column-${i} {
                left: ${i * 2}%;
                animation-delay: ${delay}s;
                animation-duration: ${duration}s;
              }`;
              })
              .join("\n")}
          </style>

          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`absolute top-0 text-green-400 font-mono text-xs leading-none matrix-column-animated matrix-column-${i}`}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="opacity-70">
                  {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

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
          className="text-4xl md:text-5xl font-bold text-white font-sddystopiandemo"
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
          Find everything you need to know about registration, participation, and prizes.
        </motion.p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-6xl mx-auto space-y-6 relative z-10">
        {
          faqData.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden bg-gradient-to-br from-yellow-400/10 px-8 py-6 to-orange-500/10 backdrop-blur-sm border border-yellow-400/30 group hover:border-yellow-400/60 transition-all duration-300 z-20"
                style={{
                  clipPath: "polygon(15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%, 0% 15px)",
                }}
              >
                {/* Cyberpunk Circuit Overlay */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <div className="absolute top-2 left-2 w-8 h-px bg-yellow-400 opacity-60"></div>
                  <div className="absolute top-2 left-2 w-px h-8 bg-yellow-400 opacity-60"></div>
                  <div className="absolute bottom-2 right-2 w-8 h-px bg-yellow-400 opacity-60"></div>
                  <div className="absolute bottom-2 right-2 w-px h-8 bg-yellow-400 opacity-60"></div>
                </div>

<div  style={{ position: 'relative', zIndex: 9999 }}>
  <button
                  onClick={() => toggleExpanded(item.id)}
                  className="w-full px-8 text-left flex items-center justify-between group focus:outline-none hover:cursor-pointer"
                >
                    <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300"
                        style={{ fontFamily: "'Mokoto Demo', monospace" }}>
                      {item.question}
                    </h3>
                  <div className="ml-6">
                    {isExpanded(item.id) ? (
                      <ChevronUp className="w-8 h-8 text-yellow-400" />
                    ) : (
                      <ChevronDown className="w-8 h-8 text-gray-400 group-hover:text-yellow-400" />
                    )}
                  </div>
                </button>
</div>
                
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isExpanded(item.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="border-t border-yellow-400/30 pt-6">
                      <p className="text-gray-300 leading-relaxed text-base lg:text-lg"
                         style={{ fontFamily: "'Mokoto Demo', monospace" }}>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          }
        )}
      </div>

      {/* Contact CTA */}
      <div className="max-w-4xl mx-auto mt-20 relative z-10">
        <div
          className="relative overflow-hidden bg-gradient-to-br from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 p-8 text-center group hover:border-yellow-400/60 transition-all duration-300"
          style={{
            clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
          }}
        >
          {/* Cyberpunk Circuit Overlay */}
          <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            <div className="absolute top-2 left-2 w-12 h-px bg-yellow-400 opacity-60"></div>
            <div className="absolute top-2 left-2 w-px h-12 bg-yellow-400 opacity-60"></div>
            <div className="absolute bottom-2 right-2 w-12 h-px bg-yellow-400 opacity-60"></div>
            <div className="absolute bottom-2 right-2 w-px h-12 bg-yellow-400 opacity-60"></div>
          </div>

          <h3 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Mokoto Demo', monospace" }}>
            Still have questions?
          </h3>
          <p className="text-yellow-300 mb-8 max-w-md mx-auto text-lg" style={{ fontFamily: "'Mokoto Demo', monospace" }}>
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <button className="cyber-button relative overflow-hidden px-12 py-4 font-bold transition-all duration-300 transform hover:scale-105">
            <div className="cyber-button-background absolute inset-0 bg-yellow-400"></div>
            <div className="cyber-button-border absolute -inset-1 bg-orange-500"></div>
            <Link href="/contact" className="relative z-10 text-black flex items-center gap-3 mx-auto" style={{ fontFamily: "'Mokoto Demo', monospace" }}>
              <HelpCircle className="w-6 h-6" />
              Contact Support
            </Link>
          </button>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .matrix-column-animated {
          animation: matrix-fall linear infinite;
        }

        @keyframes matrix-fall {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

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
      `}</style>
    </div>
  );
};

export default FAQSection;