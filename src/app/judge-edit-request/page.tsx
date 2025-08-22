"use client";

import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import CyberButton from "@/components/ui/CyberButton";
import { useSearchParams } from "next/navigation";

function JudgeEditRequestInner() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [judgeData, setJudgeData] = useState<{
    email: string;
    name: string;
  } | null>(null);
  const [editMessage, setEditMessage] = useState("");
  const [isValidating, setIsValidating] = useState(true);
  const [isValidToken, setIsValidToken] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Hide navbar for this page by adding a class to body
    document.body.classList.add("hide-navbar");

    // Get data from URL parameters
    const validateParams = () => {
      const email = searchParams.get("email");
      const name = searchParams.get("name");

      if (!email || !name) {
        setIsValidating(false);
        setIsValidToken(false);
        return;
      }

      setJudgeData({
        email: decodeURIComponent(email),
        name: decodeURIComponent(name),
      });
      setIsValidToken(true);
      setIsValidating(false);
    };

    validateParams();

    // Cleanup: show navbar when component unmounts
    return () => {
      document.body.classList.remove("hide-navbar");
    };
  }, [searchParams]);

  const handleEditRequest = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting || !judgeData || !editMessage.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/judge-edit-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          judgeEmail: judgeData?.email,
          judgeName: judgeData?.name,
          editMessage: editMessage.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("⚖️ Edit Request Sent!", {
          description:
            "Our team will contact you soon to help with your changes.",
          duration: 5000,
        });
        setEditMessage(""); // Clear the message field
      } else {
        toast.error("❌ Request Failed", {
          description:
            result.error || "Something went wrong. Please try again.",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("❌ Network Error", {
        description: "Please check your connection and try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading state while validating token
  if (isValidating) {
    return (
      <div className="min-h-screen text-white py-20 px-4 relative bg-transparent">
        <div className="flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-2xl mx-auto text-center"
          >
            <div
              className="relative bg-black/90 border-2 border-yellow-400 p-8 overflow-hidden"
              style={{
                clipPath:
                  "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
              }}
            >
              <div className="relative z-10">
                <h1
                  className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 font-mokoto"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Validating Access
                </h1>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-gray-300">
                    Decrypting secure token...
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Show error state for invalid token
  if (!isValidToken) {
    return (
      <div className="min-h-screen text-white py-20 px-4 relative bg-transparent">
        <div className="flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-2xl mx-auto text-center"
          >
            <div
              className="relative bg-black/90 border-2 border-red-400 p-8 overflow-hidden"
              style={{
                clipPath:
                  "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
              }}
            >
              <div className="relative z-10">
                <h1
                  className="text-4xl md:text-5xl font-bold text-red-400 mb-6 font-mokoto"
                  style={{ fontFamily: "'Mokoto Demo', monospace" }}
                >
                  Access Denied
                </h1>
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg">
                    Invalid or expired access token. This link may have expired
                    or been used already.
                  </p>
                  <p className="text-gray-400">
                    Please use the link from your original confirmation email,
                    or contact support if you need assistance.
                  </p>
                  <a
                    href="/"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 font-bold transition-colors duration-200"
                    style={{
                      clipPath:
                        "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                    }}
                  >
                    Return to Homepage
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white py-20 px-4 relative bg-transparent">
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto text-center"
        >
          {/* Cyberpunk Container */}
          <div
            className="relative bg-black/90 border-2 border-yellow-400 p-8 overflow-hidden"
            style={{
              clipPath:
                "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
            }}
          >
            {/* Circuit Overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-8 h-px bg-yellow-400"></div>
              <div className="absolute top-4 left-4 w-px h-8 bg-yellow-400"></div>
              <div className="absolute bottom-4 right-4 w-8 h-px bg-yellow-400"></div>
              <div className="absolute bottom-4 right-4 w-px h-8 bg-yellow-400"></div>
            </div>

            <div className="relative z-10">
              <h1
                className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 font-mokoto"
                style={{ fontFamily: "'Mokoto Demo', monospace" }}
              >
                Judge Edit Request
              </h1>

              <div className="space-y-6">
                <div className="bg-yellow-400/10 border border-yellow-400/30 p-6 rounded-lg">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Hello, {judgeData?.name}!
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Please describe what changes you'd like to make to your
                    judge application.
                  </p>
                </div>

                <form onSubmit={handleEditRequest} className="space-y-6">
                  <div className="text-left">
                    <label
                      htmlFor="editMessage"
                      className="block text-sm font-medium text-white mb-3"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      What would you like to edit? *
                    </label>
                    <textarea
                      id="editMessage"
                      name="editMessage"
                      value={editMessage}
                      onChange={(e) => setEditMessage(e.target.value)}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300 resize-none"
                      placeholder="Please describe the changes you'd like to make to your judge application (e.g., update contact information, change technical domains, modify qualifications, update experience, etc.)"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        clipPath:
                          "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
                      }}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <CyberButton
                      type="submit"
                      disabled={isSubmitting || !editMessage.trim()}
                      className="flex items-center gap-2 px-8 py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          Sending Request...
                        </>
                      ) : (
                        <>Send Edit Request</>
                      )}
                    </CyberButton>

                    <a
                      href="/"
                      className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 font-bold transition-colors duration-200"
                      style={{
                        clipPath:
                          "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                      }}
                    >
                      Cancel
                    </a>
                  </div>
                </form>

                <div className="bg-black/40 border border-gray-600 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">
                    What happens next?
                  </h3>
                  <ul className="text-gray-300 text-left space-y-2">
                    <li>
                      • Our team will receive your edit request with your
                      message
                    </li>
                    <li>• We'll contact you within 24 hours via email</li>
                    <li>
                      • We'll help you make the requested changes to your judge
                      application
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function JudgeEditRequest() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JudgeEditRequestInner />
    </Suspense>
  );
}
