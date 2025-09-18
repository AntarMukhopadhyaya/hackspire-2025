"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Users, AlertTriangle } from "lucide-react";

export default function SecurityPolicyPage() {
  const securitySections = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Protection",
      content: [
        "All participant data is encrypted using industry-standard AES-256 encryption",
        "Personal information is stored securely and accessed only by authorized personnel",
        "We implement multi-factor authentication for all administrative access",
        "Regular security audits and vulnerability assessments are conducted",
      ],
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privacy & Confidentiality",
      content: [
        "Project submissions and ideas remain confidential during judging",
        "Participant contact information is never shared with third parties",
        "All communication channels are monitored for inappropriate content",
        "Data retention policies ensure information is deleted after the event period",
      ],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure Security",
      content: [
        "Our servers are hosted on secure, certified cloud infrastructure",
        "DDoS protection and firewall systems are in place",
        "Real-time monitoring and incident response procedures are active",
        "Regular backups ensure data recovery in case of emergencies",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Participant Safety",
      content: [
        "Code of conduct strictly prohibits harassment and discrimination",
        "Moderation teams monitor all communication channels 24/7",
        "Incident reporting system for immediate response to security concerns",
        "Safe environment policies ensure inclusive participation for everyone",
      ],
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Intellectual Property",
      content: [
        "All project ideas and code remain the property of participants",
        "Judges and mentors sign non-disclosure agreements",
        "No unauthorized recording or sharing of project demonstrations",
        "Clear guidelines on open-source vs proprietary code usage",
      ],
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Incident Response",
      content: [
        "24/7 security team available during the hackathon event",
        "Immediate response protocol for security breaches or violations",
        "Clear escalation procedures for different types of incidents",
        "Post-incident analysis and reporting to improve future security",
      ],
    },
  ];

  const contactInfo = [
    {
      title: "Security Team",
      email: "acmfiem@gmail.com",
      description: "Report security vulnerabilities or incidents",
    },
    {
      title: "Data Protection Officer",
      email: "acmfiem@gmail.com",
      description: "Questions about data handling and privacy",
    },
    {
      title: "Emergency Contact",
      email: "acmfiem@gmail.com",
      description: "Urgent security matters during the event",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <Shield className="w-12 h-12 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mokoto">
              <span className="text-yellow-400">SECURITY</span>
              <span className="text-white"> POLICY</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Your safety and privacy are our top priorities. Learn about our
            comprehensive security measures and how we protect participants
            during HackSpire'25.
          </motion.p>
        </div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 mb-12 text-center"
        >
          <p className="text-yellow-400 font-semibold">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-gray-300 text-sm mt-1">
            Effective Date: January 1, 2025 | Version 2.0
          </p>
        </motion.div>

        {/* Security Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securitySections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-yellow-400">{section.icon}</div>
                <h3 className="text-2xl font-bold font-mokoto text-white">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="bg-gray-900/70 border border-gray-700 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold font-mokoto text-yellow-400 mb-6 text-center">
            Security Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {contact.title}
                </h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-medium"
                >
                  {contact.email}
                </a>
                <p className="text-gray-400 text-sm mt-2">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
            <p className="text-center text-gray-300">
              <strong className="text-yellow-400">Emergency Response:</strong>
              For immediate security concerns during the event, contact our 24/7
              security hotline or approach any event organizer wearing a yellow
              badge.
            </p>
          </div>
        </motion.div>

        {/* Compliance Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-bold font-mokoto text-yellow-400 mb-4">
            Compliance & Standards
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            HackSpire'25 follows industry best practices and complies with
            applicable data protection regulations including GDPR guidelines. We
            are committed to maintaining the highest standards of security and
            privacy for all participants.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-full text-sm">
              ISO 27001 Aligned
            </span>
            <span className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-full text-sm">
              GDPR Compliant
            </span>
            <span className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-full text-sm">
              SOC 2 Type II
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
