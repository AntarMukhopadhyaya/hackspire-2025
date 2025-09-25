// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Send,
//   User,
//   Mail,
//   Phone,
//   Briefcase,
//   Globe,
//   Award,
//   Upload,
//   Image as ImageIcon,
//   X,
// } from "lucide-react";
// import CyberButton from "@/components/ui/CyberButton";
// import TurnstileWrapper from "@/components/ui/TurnstileWrapper";
// import { UploadButton } from "@/utils/uploadthing";
// // using UploadThing generated UploadButton via hidden wrapper + custom trigger
// import { toast } from "sonner";

// function JudgesForm() {
//   const [formData, setFormData] = useState({
//     // Core fields (always visible)
//     name: "",
//     email: "",
//     phone: "",
//     location: "",
//     currentRole: "",
//     primaryDomains: [] as string[],
//     previousJudging: "",
//     whyJudge: "",
//     qualifications: "",
//     availability: "",
//     timeCommitment: "",
//     judgingCriteria: [] as string[],

//     // Conditional research paper fields
//     hasResearchPaper: "", // Yes/No
//     researchPaperLink: "", // Only if hasResearchPaper is "Yes"

//     // Academic fields (only for professors/researchers)
//     university: "",
//     department: "",
//     yearsTeaching: "",
//     academicQualifications: "",
//     researchPublications: "",
//     hasScholarProfile: "", // Yes/No
//     scholarProfile: "", // Only if hasScholarProfile is "Yes"

//     // Industry fields (only for industry professionals/entrepreneurs)
//     company: "",
//     position: "",
//     yearsIndustry: "",
//     linkedin: "",
//     website: "",

//     profileImage: null as File | null,
//   });

//   const [profileImageUrl, setProfileImageUrl] = useState<string>("");
//   const [selectedFileName, setSelectedFileName] = useState<string>("");
//   const [isImageModalOpen, setIsImageModalOpen] = useState(false);
//   const [isImageLoading, setIsImageLoading] = useState(false);
//   const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
//   const [termsAccepted, setTermsAccepted] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [uploadSuccess, setUploadSuccess] = useState(false);
//   const uploadBtnWrapperRef = React.useRef<HTMLDivElement | null>(null);
//   const [turnstileToken, setTurnstileToken] = useState<string>("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showValidationWarning, setShowValidationWarning] = useState(false);

//   // Dropdown states
//   const [isPrimaryDomainsOpen, setIsPrimaryDomainsOpen] = useState(false);
//   const [isJudgingCriteriaOpen, setIsJudgingCriteriaOpen] = useState(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleMultiSelectToggle = (field: string, value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: (prev[field as keyof typeof prev] as string[]).includes(value)
//         ? (prev[field as keyof typeof prev] as string[]).filter(
//             (item) => item !== value
//           )
//         : [...(prev[field as keyof typeof prev] as string[]), value],
//     }));
//   };

//   const removeMultiSelectItem = (field: string, value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: (prev[field as keyof typeof prev] as string[]).filter(
//         (item) => item !== value
//       ),
//     }));
//   };

//   // Helper functions to determine what fields to show
//   const isAcademic = () => {
//     return [
//       "Professor",
//       "Associate Professor",
//       "Assistant Professor",
//       "Researcher",
//     ].includes(formData.currentRole);
//   };

//   const isIndustry = () => {
//     return ["Industry Professional", "Entrepreneur"].includes(
//       formData.currentRole
//     );
//   };

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         isPrimaryDomainsOpen &&
//         !(event.target as Element).closest(".primary-domains-dropdown")
//       ) {
//         setIsPrimaryDomainsOpen(false);
//       }
//       if (
//         isJudgingCriteriaOpen &&
//         !(event.target as Element).closest(".judging-criteria-dropdown")
//       ) {
//         setIsJudgingCriteriaOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isPrimaryDomainsOpen, isJudgingCriteriaOpen]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (isSubmitting) return;

//     setShowValidationWarning(true);

//     // Check if Turnstile verification is complete
//     if (!turnstileToken) {
//       toast.error("❌ Bot Verification Required", {
//         description: "Please complete the verification challenge.",
//         duration: 5000,
//       });
//       return;
//     }

//     if (!profileImageUrl) {
//       toast.error("❌ Profile Image Required", {
//         description: "Please upload a profile image before submitting.",
//         duration: 5000,
//       });
//       return;
//     }

//     if (!termsAccepted) {
//       toast.error("❌ Terms & Conditions Required", {
//         description: "Please accept the judge terms and conditions to proceed.",
//         duration: 5000,
//       });
//       return;
//     }

//     setShowValidationWarning(false);
//     setIsSubmitting(true);

//     try {
//       const submissionData = {
//         ...formData,
//         profileImageUrl: profileImageUrl,
//         turnstileToken: turnstileToken,
//       };

//       const response = await fetch("/api/submit-judge", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(submissionData),
//       });

//       const result = await response.json();

//       if (result.success) {
//         toast.success("🚀 Judge Application Submitted Successfully!", {
//           description:
//             "Welcome to the HackSpire 2025 judging panel! We'll be in touch soon.",
//           duration: 5000,
//         });

//         // Reset form
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           location: "",
//           currentRole: "",
//           primaryDomains: [],
//           previousJudging: "",
//           whyJudge: "",
//           qualifications: "",
//           availability: "",
//           timeCommitment: "",
//           judgingCriteria: [],
//           hasResearchPaper: "",
//           researchPaperLink: "",
//           university: "",
//           department: "",
//           yearsTeaching: "",
//           academicQualifications: "",
//           researchPublications: "",
//           hasScholarProfile: "",
//           scholarProfile: "",
//           company: "",
//           position: "",
//           yearsIndustry: "",
//           linkedin: "",
//           website: "",
//           profileImage: null,
//         });
//         setProfileImageUrl("");
//         setTermsAccepted(false);
//       } else {
//         throw new Error(result.error || "Submission failed");
//       }
//     } catch (error) {
//       console.error("Form submission error:", error);
//       toast.error("❌ Submission Failed", {
//         description:
//           "Something went wrong. Please try again or contact support.",
//         duration: 5000,
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen text-white py-20 px-4 relative bg-transparent">
//       {/* Background shapes */}
//       <div className="absolute left-0 top-1/4 w-20 h-64 z-0">
//         <div className="w-full h-full bg-yellow-400 relative left-trapezium-main">
//           <div className="absolute top-1/2 left-0 w-full h-8 bg-transparent transform -translate-y-1/2 left-trapezium-cut"></div>
//         </div>
//       </div>

//       <div className="absolute right-0 top-1/4 w-20 h-64 z-0">
//         <div className="w-full h-full bg-yellow-400 relative right-trapezium-main">
//           <div className="absolute top-1/2 right-0 w-full h-8 bg-transparent transform -translate-y-1/2 right-trapezium-cut"></div>
//         </div>
//       </div>

//       {/* Title */}
//       <div className="text-center mb-16 relative z-10">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] xl:text-8xl 2xl:text-[8rem] font-bold text-white font-sddystopiandemo"
//         >
//           Judges Form
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="text-center max-w-4xl mx-auto -mt-4 pb-8 text-sm sm:text-sm md:text-xl text-white leading-relaxed font-mokoto px-12 md:px-30"
//         >
//           Ready to evaluate the next generation of innovators?
//           <br />
//           Join our elite judging panel and shape the future of technology.
//           <br />
//           <span className="text-yellow-300">FIEM ACM Student Chapter</span> -
//           Evaluating excellence, recognizing innovation.
//           <br />
//           <span className="text-yellow-300">HackSpire 2025:</span>{" "}
//           <span className="text-white">31st Oct to 1st Nov 2025</span>
//         </motion.p>
//         <div className="flex justify-center mb-6">
//           <a
//             href="https://befitting-lens-774.notion.site/HackSpire-25-Event-Judging-Timeline-25ac78e1cf638000a419e7c2052d13e7?source=copy_link"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow hover:bg-yellow-500 transition-colors font-mokoto text-lg"
//           >
//             Click the judges & Mentors guidelines
//           </a>
//         </div>
//       </div>

//       {/* Form Container */}
//       <div
//         className="relative overflow-hidden from-yellow-400/20 max-w-4xl mx-auto mb-20 z-10 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 group bg-gradient-to-br flex flex-col justify-end p-8"
//         style={{
//           clipPath:
//             "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
//         }}
//       >
//         <div className="w-full flex flex-col justify-end h-full">
//           <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight break-words font-mokoto">
//             Join Our Judging Panel
//           </h3>
//           <p className="text-yellow-300 text-lg font-medium mb-6 leading-tight font-mokoto">
//             Evaluate innovative projects and recognize the next tech leaders!
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Core Personal Information */}
//             <div className="grid md:grid-cols-2 gap-6">
//               <motion.div
//                 whileFocus={{ scale: 1.02 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-white mb-2"
//                   style={{ fontFamily: "Poppins, sans-serif" }}
//                 >
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                   placeholder="Your full name"
//                   style={{
//                     fontFamily: "Poppins, sans-serif",
//                     clipPath:
//                       "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                   }}
//                 />
//               </motion.div>

//               <motion.div
//                 whileFocus={{ scale: 1.02 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-white mb-2"
//                   style={{ fontFamily: "Poppins, sans-serif" }}
//                 >
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                   placeholder="your@email.com"
//                   style={{
//                     fontFamily: "Poppins, sans-serif",
//                     clipPath:
//                       "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                   }}
//                 />
//               </motion.div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <motion.div
//                 whileFocus={{ scale: 1.02 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-white mb-2"
//                   style={{ fontFamily: "Poppins, sans-serif" }}
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                   placeholder="+91 1234567890"
//                   style={{
//                     fontFamily: "Poppins, sans-serif",
//                     clipPath:
//                       "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                   }}
//                 />
//               </motion.div>

//               <motion.div
//                 whileFocus={{ scale: 1.02 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <label
//                   htmlFor="location"
//                   className="block text-sm font-medium text-white mb-2"
//                   style={{ fontFamily: "Poppins, sans-serif" }}
//                 >
//                   Location/City
//                 </label>
//                 <input
//                   type="text"
//                   id="location"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                   placeholder="Your city, country"
//                   style={{
//                     fontFamily: "Poppins, sans-serif",
//                     clipPath:
//                       "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                   }}
//                 />
//               </motion.div>
//             </div>

//             {/* Current Role Selection */}
//             <div className="grid md:grid-cols-1 gap-6">
//               <motion.div
//                 whileFocus={{ scale: 1.02 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <label
//                   htmlFor="currentRole"
//                   className="block text-sm font-medium text-white mb-2"
//                   style={{ fontFamily: "Poppins, sans-serif" }}
//                 >
//                   Current Role *
//                 </label>
//                 <select
//                   id="currentRole"
//                   name="currentRole"
//                   value={formData.currentRole}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                   style={{
//                     fontFamily: "Poppins, sans-serif",
//                     clipPath:
//                       "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                   }}
//                 >
//                   <option value="">Select your role</option>
//                   <option value="Professor">Professor</option>
//                   <option value="Associate Professor">
//                     Associate Professor
//                   </option>
//                   <option value="Assistant Professor">
//                     Assistant Professor
//                   </option>
//                   <option value="Researcher">Researcher</option>
//                   <option value="Industry Professional">
//                     Industry Professional
//                   </option>
//                   <option value="Entrepreneur">Entrepreneur</option>
//                 </select>
//               </motion.div>
//             </div>

//             {/* Conditional Fields Based on Role */}
//             {isAcademic() && (
//               <>
//                 <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6 space-y-6">
//                   <h4
//                     className="text-xl font-bold text-blue-400"
//                     style={{ fontFamily: "Poppins, sans-serif" }}
//                   >
//                     Academic Information
//                   </h4>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <motion.div
//                       whileFocus={{ scale: 1.02 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <label
//                         htmlFor="university"
//                         className="block text-sm font-medium text-white mb-2"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         University/Institution *
//                       </label>
//                       <input
//                         type="text"
//                         id="university"
//                         name="university"
//                         value={formData.university}
//                         onChange={handleInputChange}
//                         required={isAcademic()}
//                         className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                         placeholder="Your university or institution"
//                         style={{
//                           fontFamily: "Poppins, sans-serif",
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       />
//                     </motion.div>

//                     <motion.div
//                       whileFocus={{ scale: 1.02 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <label
//                         htmlFor="department"
//                         className="block text-sm font-medium text-white mb-2"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         Department
//                       </label>
//                       <input
//                         type="text"
//                         id="department"
//                         name="department"
//                         value={formData.department}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                         placeholder="Computer Science, Engineering, etc."
//                         style={{
//                           fontFamily: "Poppins, sans-serif",
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       />
//                     </motion.div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <motion.div
//                       whileFocus={{ scale: 1.02 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <label
//                         htmlFor="yearsTeaching"
//                         className="block text-sm font-medium text-white mb-2"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         Years of Teaching/Research Experience *
//                       </label>
//                       <select
//                         id="yearsTeaching"
//                         name="yearsTeaching"
//                         value={formData.yearsTeaching}
//                         onChange={handleInputChange}
//                         required={isAcademic()}
//                         className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                         style={{
//                           fontFamily: "Poppins, sans-serif",
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       >
//                         <option value="">Select experience</option>
//                         <option value="1-3 years">1-3 years</option>
//                         <option value="3-5 years">3-5 years</option>
//                         <option value="5-10 years">5-10 years</option>
//                         <option value="10-15 years">10-15 years</option>
//                         <option value="15+ years">15+ years</option>
//                       </select>
//                     </motion.div>

//                     <motion.div
//                       whileFocus={{ scale: 1.02 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <label
//                         htmlFor="academicQualifications"
//                         className="block text-sm font-medium text-white mb-2"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         Academic Qualifications
//                       </label>
//                       <input
//                         type="text"
//                         id="academicQualifications"
//                         name="academicQualifications"
//                         value={formData.academicQualifications}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                         placeholder="PhD, Master's, Bachelor's, etc."
//                         style={{
//                           fontFamily: "Poppins, sans-serif",
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       />
//                     </motion.div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <motion.div
//                       whileFocus={{ scale: 1.02 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <label
//                         htmlFor="researchPublications"
//                         className="block text-sm font-medium text-white mb-2"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         Number of Research Publications
//                       </label>
//                       <input
//                         type="text"
//                         id="researchPublications"
//                         name="researchPublications"
//                         value={formData.researchPublications}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                         placeholder="e.g., 15 papers"
//                         style={{
//                           fontFamily: "Poppins, sans-serif",
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       />
//                     </motion.div>

//                     <motion.div
//                       whileFocus={{ scale: 1.02 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <label
//                         htmlFor="hasScholarProfile"
//                         className="block text-sm font-medium text-white mb-2"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         Do you have a Google Scholar Profile?
//                       </label>
//                       <select
//                         id="hasScholarProfile"
//                         name="hasScholarProfile"
//                         value={formData.hasScholarProfile}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                         style={{
//                           fontFamily: "Poppins, sans-serif",
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       >
//                         <option value="">Select an option</option>
//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     </motion.div>
//                   </div>

//                   {formData.hasScholarProfile === "Yes" && (
//                     <motion.div
//                       whileFocus={{ scale: 1.02 }}
//                       transition={{ duration: 0.2 }}
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                     >
//                       <label
//                         htmlFor="scholarProfile"
//                         className="block text-sm font-medium text-white mb-2"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         Google Scholar Profile *
//                       </label>
//                       <input
//                         type="url"
//                         id="scholarProfile"
//                         name="scholarProfile"
//                         value={formData.scholarProfile}
//                         onChange={handleInputChange}
//                         required={formData.hasScholarProfile === "Yes"}
//                         className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                         placeholder="https://scholar.google.com/citations?user=..."
//                         style={{
//                           fontFamily: "Poppins, sans-serif",
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       />
//                     </motion.div>
//                   )}
//                 </div>
//               </>
//             )}

//             {isIndustry() && (
//               <>
//                 <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-6 space-y-6">
//                   <h4
//                     className="text-xl font-bold text-green-400"
//                     style={{ fontFamily: "Poppins, sans-serif" }}
//                   >
//                     Professional Information
//                   </h4>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <motion.div
//                       whileFocus={{ scale: 1.02 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <label
//                         htmlFor="company"
//                         className="block text-sm font-medium text-white mb-2"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         Company/Organization *
//                       </label>
//                       <input
//                         type="text"
//                         id="company"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleInputChange}
//                         required={isIndustry()}
//                         className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                         placeholder="Your company name"
//                         style={{
//                           fontFamily: "Poppins, sans-serif",
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       />
//                     </motion.div>

//                     <motion.div
//                       whileFocus={{ scale: 1.02 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <label
//                         htmlFor="position"
//                         className="block text-sm font-medium text-white mb-2"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         Position/Title *
//                       </label>
//                       <input
//                         type="text"
//                         id="position"
//                         name="position"
//                         value={formData.position}
//                         onChange={handleInputChange}
//                         required={isIndustry()}
//                         className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                         placeholder="CTO, Senior Engineer, Founder, etc."
//                         style={{
//                           fontFamily: "Poppins, sans-serif",
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       />
//                     </motion.div>
//                   </div>

//                   <div className="grid md:grid-cols-1 gap-6">
//                     <motion.div
//                       whileFocus={{ scale: 1.02 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <label
//                         htmlFor="yearsIndustry"
//                         className="block text-sm font-medium text-white mb-2"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         Years of Industry Experience *
//                       </label>
//                       <select
//                         id="yearsIndustry"
//                         name="yearsIndustry"
//                         value={formData.yearsIndustry}
//                         onChange={handleInputChange}
//                         required={isIndustry()}
//                         className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                         style={{
//                           fontFamily: "Poppins, sans-serif",
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       >
//                         <option value="">Select experience</option>
//                         <option value="1-3 years">1-3 years</option>
//                         <option value="3-5 years">3-5 years</option>
//                         <option value="5-10 years">5-10 years</option>
//                         <option value="10-15 years">10-15 years</option>
//                         <option value="15+ years">15+ years</option>
//                       </select>
//                     </motion.div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <motion.div
//                       whileFocus={{ scale: 1.02 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <label
//                         htmlFor="linkedin"
//                         className="block text-sm font-medium text-white mb-2"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         LinkedIn Profile
//                       </label>
//                       <input
//                         type="url"
//                         id="linkedin"
//                         name="linkedin"
//                         value={formData.linkedin}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                         placeholder="https://linkedin.com/in/yourprofile"
//                         style={{
//                           fontFamily: "Poppins, sans-serif",
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       />
//                     </motion.div>

//                     <motion.div
//                       whileFocus={{ scale: 1.02 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <label
//                         htmlFor="website"
//                         className="block text-sm font-medium text-white mb-2"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         Professional Website
//                       </label>
//                       <input
//                         type="url"
//                         id="website"
//                         name="website"
//                         value={formData.website}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                         placeholder="https://yourwebsite.com"
//                         style={{
//                           fontFamily: "Poppins, sans-serif",
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       />
//                     </motion.div>
//                   </div>
//                 </div>
//               </>
//             )}

//             {/* Research Paper Section - Conditional for ALL judges */}
//             <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg p-6 space-y-6">
//               <h4
//                 className="text-xl font-bold text-purple-400"
//                 style={{ fontFamily: "Poppins, sans-serif" }}
//               >
//                 Research Publications
//               </h4>

//               <motion.div
//                 whileFocus={{ scale: 1.02 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <label
//                   htmlFor="hasResearchPaper"
//                   className="block text-sm font-medium text-white mb-2"
//                   style={{ fontFamily: "Poppins, sans-serif" }}
//                 >
//                   Do you have research papers or publications? *
//                 </label>
//                 <select
//                   id="hasResearchPaper"
//                   name="hasResearchPaper"
//                   value={formData.hasResearchPaper}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                   style={{
//                     fontFamily: "Poppins, sans-serif",
//                     clipPath:
//                       "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                   }}
//                 >
//                   <option value="">Select an option</option>
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </select>
//               </motion.div>

//               {formData.hasResearchPaper === "Yes" && (
//                 <motion.div
//                   whileFocus={{ scale: 1.02 }}
//                   transition={{ duration: 0.2 }}
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                 >
//                   <label
//                     htmlFor="researchPaperLink"
//                     className="block text-sm font-medium text-white mb-2"
//                     style={{ fontFamily: "Poppins, sans-serif" }}
//                   >
//                     Research Paper Social Link *
//                   </label>
//                   <input
//                     type="url"
//                     id="researchPaperLink"
//                     name="researchPaperLink"
//                     value={formData.researchPaperLink}
//                     onChange={handleInputChange}
//                     required={formData.hasResearchPaper === "Yes"}
//                     className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                     placeholder="https://linkedin.com/posts/your-research-paper or social media link"
//                     style={{
//                       fontFamily: "Poppins, sans-serif",
//                       clipPath:
//                         "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                     }}
//                   />
//                   <p
//                     className="text-xs text-gray-400 mt-2"
//                     style={{ fontFamily: "Poppins, sans-serif" }}
//                   >
//                     Share a social media link showcasing your research papers or
//                     publications
//                   </p>
//                 </motion.div>
//               )}
//             </div>

//             {/* Primary Technical Domains - Always visible */}
//             <div className="grid md:grid-cols-1 gap-6">
//               <motion.div
//                 whileFocus={{ scale: 1.02 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <label
//                   htmlFor="primaryDomains"
//                   className="block text-sm font-medium text-white mb-2"
//                   style={{ fontFamily: "Poppins, sans-serif" }}
//                 >
//                   Primary Technical Domains *
//                 </label>
//                 <div className="w-full relative primary-domains-dropdown">
//                   <div className="flex flex-wrap gap-2 mb-3">
//                     {formData.primaryDomains.map((domain) => (
//                       <div
//                         key={domain}
//                         className="flex items-center gap-2 px-3 py-2 bg-yellow-400 text-black rounded-lg font-mokoto text-sm"
//                         style={{
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       >
//                         <span>{domain}</span>
//                         <button
//                           type="button"
//                           onClick={() =>
//                             removeMultiSelectItem("primaryDomains", domain)
//                           }
//                           className="w-4 h-4 flex items-center justify-center hover:bg-black/20 rounded-full transition-colors"
//                         >
//                           ×
//                         </button>
//                       </div>
//                     ))}
//                   </div>

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setIsPrimaryDomainsOpen(!isPrimaryDomainsOpen)
//                     }
//                     className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300 flex items-center justify-between"
//                     style={{
//                       fontFamily: "Poppins, sans-serif",
//                       clipPath:
//                         "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                     }}
//                   >
//                     <span
//                       className={
//                         formData.primaryDomains.length === 0
//                           ? "text-gray-400"
//                           : "text-white"
//                       }
//                     >
//                       {formData.primaryDomains.length === 0
//                         ? "Select your primary technical domains"
//                         : `${formData.primaryDomains.length} domain${
//                             formData.primaryDomains.length === 1 ? "" : "s"
//                           } selected`}
//                     </span>
//                     <svg
//                       className={`w-5 h-5 transition-transform duration-300 ${
//                         isPrimaryDomainsOpen ? "rotate-180" : ""
//                       }`}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </button>

//                   {isPrimaryDomainsOpen && (
//                     <div className="absolute top-full left-0 right-0 mt-1 bg-black/90 border-2 border-yellow-400/50 rounded-lg z-50 max-h-60 overflow-y-auto">
//                       {[
//                         "Web Development",
//                         "Mobile App Development",
//                         "AI/Machine Learning",
//                         "Data Science",
//                         "Blockchain",
//                         "Cybersecurity",
//                         "Cloud Computing",
//                         "DevOps",
//                         "UI/UX Design",
//                         "Game Development",
//                         "IoT",
//                         "AR/VR",
//                         "Fintech",
//                         "Healthtech",
//                         "Edtech",
//                         "E-commerce",
//                         "Social Impact",
//                         "Hardware",
//                         "Robotics",
//                         "Open Source",
//                       ].map((domain) => (
//                         <button
//                           key={domain}
//                           type="button"
//                           onClick={() =>
//                             handleMultiSelectToggle("primaryDomains", domain)
//                           }
//                           className={`w-full px-4 py-3 text-left hover:bg-yellow-400/20 transition-colors ${
//                             formData.primaryDomains.includes(domain)
//                               ? "bg-yellow-400/30 text-yellow-400"
//                               : "text-white"
//                           }`}
//                           style={{ fontFamily: "Poppins, sans-serif" }}
//                         >
//                           {domain}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </div>

//             {/* Previous Judging Experience */}
//             <motion.div
//               whileFocus={{ scale: 1.02 }}
//               transition={{ duration: 0.2 }}
//             >
//               <label
//                 htmlFor="previousJudging"
//                 className="block text-sm font-medium text-white mb-2"
//                 style={{ fontFamily: "Poppins, sans-serif" }}
//               >
//                 Recent Hackathon Judging Experience *
//               </label>
//               <select
//                 id="previousJudging"
//                 name="previousJudging"
//                 value={formData.previousJudging}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                 style={{
//                   fontFamily: "Poppins, sans-serif",
//                   clipPath:
//                     "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                 }}
//               >
//                 <option value="">Select your recent judging experience</option>
//                 <option value="First time judge">First time judge</option>
//                 <option value="1-2 hackathons">1-2 hackathons</option>
//                 <option value="3-5 hackathons">3-5 hackathons</option>
//                 <option value="5-10 hackathons">5-10 hackathons</option>
//                 <option value="10+ hackathons">10+ hackathons</option>
//                 <option value="Professional competitions">
//                   Professional competitions
//                 </option>
//                 <option value="Academic competitions">
//                   Academic competitions
//                 </option>
//               </select>
//             </motion.div>

//             {/* Why Judge */}
//             <motion.div
//               whileFocus={{ scale: 1.02 }}
//               transition={{ duration: 0.2 }}
//             >
//               <label
//                 htmlFor="whyJudge"
//                 className="block text-sm font-medium text-white mb-2"
//                 style={{ fontFamily: "Poppins, sans-serif" }}
//               >
//                 Why do you want to judge at HackSpire 2025? *
//               </label>
//               <textarea
//                 id="whyJudge"
//                 name="whyJudge"
//                 value={formData.whyJudge}
//                 onChange={handleInputChange}
//                 required
//                 rows={3}
//                 className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300 resize-none"
//                 placeholder="Share your motivation for judging and what you hope to contribute to the hackathon..."
//                 style={{
//                   fontFamily: "Poppins, sans-serif",
//                   clipPath:
//                     "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                 }}
//               />
//             </motion.div>

//             {/* Qualifications */}
//             <motion.div
//               whileFocus={{ scale: 1.02 }}
//               transition={{ duration: 0.2 }}
//             >
//               <label
//                 htmlFor="qualifications"
//                 className="block text-sm font-medium text-white mb-2"
//                 style={{ fontFamily: "Poppins, sans-serif" }}
//               >
//                 Relevant Qualifications & Experience *
//               </label>
//               <textarea
//                 id="qualifications"
//                 name="qualifications"
//                 value={formData.qualifications}
//                 onChange={handleInputChange}
//                 required
//                 rows={4}
//                 className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300 resize-none"
//                 placeholder="Describe your professional background, achievements, and what makes you qualified to judge hackathon projects..."
//                 style={{
//                   fontFamily: "Poppins, sans-serif",
//                   clipPath:
//                     "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                 }}
//               />
//             </motion.div>

//             {/* Availability */}
//             <motion.div
//               whileFocus={{ scale: 1.02 }}
//               transition={{ duration: 0.2 }}
//             >
//               <label
//                 htmlFor="availability"
//                 className="block text-sm font-medium text-white mb-2"
//                 style={{ fontFamily: "Poppins, sans-serif" }}
//               >
//                 Availability for Judging *
//               </label>
//               <select
//                 id="availability"
//                 name="availability"
//                 value={formData.availability}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                 style={{
//                   fontFamily: "Poppins, sans-serif",
//                   clipPath:
//                     "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                 }}
//               >
//                 <option value="">Select your availability</option>
//                 <option value="Full Event (2-3 days)">
//                   Full Event (2-3 days)
//                 </option>
//                 <option value="Final Day Only">Final Day Only</option>
//                 <option value="Virtual Judging">Virtual Judging</option>
//                 <option value="Specific Sessions">Specific Sessions</option>
//                 <option value="Flexible">Flexible</option>
//               </select>
//             </motion.div>

//             {/* Time Commitment */}
//             <motion.div
//               whileFocus={{ scale: 1.02 }}
//               transition={{ duration: 0.2 }}
//             >
//               <label
//                 htmlFor="timeCommitment"
//                 className="block text-sm font-medium text-white mb-2"
//                 style={{ fontFamily: "Poppins, sans-serif" }}
//               >
//                 Expected Time Commitment *
//               </label>
//               <select
//                 id="timeCommitment"
//                 name="timeCommitment"
//                 value={formData.timeCommitment}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300"
//                 style={{
//                   fontFamily: "Poppins, sans-serif",
//                   clipPath:
//                     "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                 }}
//               >
//                 <option value="">Select time commitment</option>
//                 <option value="2-4 hours">2-4 hours</option>
//                 <option value="4-6 hours">4-6 hours</option>
//                 <option value="6-8 hours">6-8 hours</option>
//                 <option value="Full day (8+ hours)">Full day (8+ hours)</option>
//                 <option value="Multiple days">Multiple days</option>
//               </select>
//             </motion.div>

//             {/* Judging Criteria */}
//             <div className="grid md:grid-cols-1 gap-6">
//               <motion.div
//                 whileFocus={{ scale: 1.02 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <label
//                   htmlFor="judgingCriteria"
//                   className="block text-sm font-medium text-white mb-2"
//                   style={{ fontFamily: "Poppins, sans-serif" }}
//                 >
//                   Preferred Judging Criteria *
//                 </label>
//                 <div className="w-full relative judging-criteria-dropdown">
//                   <div className="flex flex-wrap gap-2 mb-3">
//                     {formData.judgingCriteria.map((criteria) => (
//                       <div
//                         key={criteria}
//                         className="flex items-center gap-2 px-3 py-2 bg-yellow-400 text-black rounded-lg font-mokoto text-sm"
//                         style={{
//                           clipPath:
//                             "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                         }}
//                       >
//                         <span>{criteria}</span>
//                         <button
//                           type="button"
//                           onClick={() =>
//                             removeMultiSelectItem("judgingCriteria", criteria)
//                           }
//                           className="w-4 h-4 flex items-center justify-center hover:bg-black/20 rounded-full transition-colors"
//                         >
//                           ×
//                         </button>
//                       </div>
//                     ))}
//                   </div>

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setIsJudgingCriteriaOpen(!isJudgingCriteriaOpen)
//                     }
//                     className="w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300 flex items-center justify-between"
//                     style={{
//                       fontFamily: "Poppins, sans-serif",
//                       clipPath:
//                         "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
//                     }}
//                   >
//                     <span
//                       className={
//                         formData.judgingCriteria.length === 0
//                           ? "text-gray-400"
//                           : "text-white"
//                       }
//                     >
//                       {formData.judgingCriteria.length === 0
//                         ? "Select your preferred judging criteria"
//                         : `${formData.judgingCriteria.length} criteria selected`}
//                     </span>
//                     <svg
//                       className={`w-5 h-5 transition-transform duration-300 ${
//                         isJudgingCriteriaOpen ? "rotate-180" : ""
//                       }`}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </button>

//                   {isJudgingCriteriaOpen && (
//                     <div className="absolute top-full left-0 right-0 mt-1 bg-black/90 border-2 border-yellow-400/50 rounded-lg z-50 max-h-60 overflow-y-auto">
//                       {[
//                         "Technical Innovation",
//                         "Code Quality",
//                         "User Experience",
//                         "Business Viability",
//                         "Social Impact",
//                         "Presentation Skills",
//                         "Team Collaboration",
//                         "Problem Solving",
//                         "Creativity & Originality",
//                         "Implementation Completeness",
//                         "Scalability",
//                         "Market Potential",
//                         "Design Aesthetics",
//                         "Technical Difficulty",
//                         "Real-world Applicability",
//                       ].map((criteria) => (
//                         <button
//                           key={criteria}
//                           type="button"
//                           onClick={() =>
//                             handleMultiSelectToggle("judgingCriteria", criteria)
//                           }
//                           className={`w-full px-4 py-3 text-left hover:bg-yellow-400/20 transition-colors ${
//                             formData.judgingCriteria.includes(criteria)
//                               ? "bg-yellow-400/30 text-yellow-400"
//                               : "text-white"
//                           }`}
//                           style={{ fontFamily: "Poppins, sans-serif" }}
//                         >
//                           {criteria}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </div>

//             {/* Profile Image Upload - Improved UX using UploadThing */}
//             <motion.div
//               whileFocus={{ scale: 1.02 }}
//               transition={{ duration: 0.2 }}
//               className="w-full mb-8"
//             >
//               <div className="flex flex-col items-center gap-4 w-full">
//                 <label
//                   className="block text-sm font-medium text-white mb-3 text-center"
//                   style={{ fontFamily: "Poppins, sans-serif" }}
//                 >
//                   Profile Image *
//                 </label>
//                 <div className="profile-image-upload w-full flex flex-col items-center">
//                   <div className="w-full max-w-3xl">
//                     <div className="flex items-center justify-center w-full">
//                       <div className="flex-shrink-0 flex items-center gap-2">
//                         {/* Hidden UploadButton - hidden via inline style to ensure no extra visible button */}
//                         <div
//                           ref={uploadBtnWrapperRef}
//                           style={{ display: "none" }}
//                         >
//                           <UploadButton
//                             endpoint="profileImageUploader"
//                             onUploadProgress={(progress: number) => {
//                               setIsUploading(true);
//                               setUploadProgress(Math.round(progress));
//                             }}
//                             onClientUploadComplete={(res: any) => {
//                               if (res && res[0]) {
//                                 const url =
//                                   res[0].ufsUrl || res[0].url || res[0].appUrl;
//                                 setProfileImageUrl(url);
//                                 setSelectedFileName(
//                                   res[0].name || "image_uploaded"
//                                 );
//                                 setIsUploading(false);
//                                 setUploadProgress(100);
//                                 setUploadSuccess(true);
//                                 toast.success("Image uploaded");
//                               } else {
//                                 setIsUploading(false);
//                                 setUploadProgress(0);
//                                 setUploadSuccess(false);
//                               }
//                             }}
//                             onUploadError={(error: Error) => {
//                               console.error("Upload Error:", error);
//                               toast.error(`Upload failed: ${error.message}`);
//                               setProfileImageUrl("");
//                               setSelectedFileName("");
//                               setIsUploading(false);
//                               setUploadProgress(0);
//                               setUploadSuccess(false);
//                             }}
//                             appearance={{
//                               button:
//                                 "bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-3 font-mokoto transition-colors duration-200 rounded-none",
//                               container: "p-0 h-full",
//                             }}
//                           />
//                         </div>

//                         {/* Visible custom label button that triggers the hidden UploadButton */}
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setUploadSuccess(false);
//                             setUploadProgress(0);
//                             setIsUploading(true);

//                             const wrapper = uploadBtnWrapperRef.current;
//                             if (wrapper) {
//                               const btn = wrapper.querySelector("button");
//                               const input =
//                                 wrapper.querySelector("input[type=file]");
//                               if (btn) (btn as HTMLButtonElement).click();
//                               else if (input)
//                                 (input as HTMLInputElement).click();
//                             }
//                           }}
//                           className="bg-yellow-400 text-black px-6 py-3 font-mokoto transition-colors duration-200 rounded relative z-50 hover:bg-yellow-500"
//                         >
//                           <span className="uppercase font-mokoto text-sm">
//                             {isUploading
//                               ? `Uploading ${uploadProgress}%`
//                               : uploadSuccess
//                               ? "Image uploaded"
//                               : "Upload image"}
//                           </span>
//                         </button>
//                       </div>
//                     </div>
//                     <p className="text-xs text-gray-400 mt-3 font-mokoto text-center">
//                       Upload a professional photo (JPG, PNG, GIF - Max 4MB)
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Terms and Conditions */}
//             <motion.div
//               whileFocus={{ scale: 1.02 }}
//               transition={{ duration: 0.2 }}
//               className="flex items-start gap-4 p-6 bg-yellow-400/10 border border-yellow-400/30 rounded-lg relative z-20"
//             >
//               <div className="flex items-center gap-3 relative z-30">
//                 <input
//                   type="checkbox"
//                   id="termsAccepted"
//                   checked={termsAccepted}
//                   onChange={(e) => setTermsAccepted(e.target.checked)}
//                   className="w-5 h-5 bg-black/60 border-2 border-yellow-400/50 rounded focus:outline-none focus:border-yellow-400 accent-yellow-400 relative z-40 cursor-pointer"
//                 />
//                 <label
//                   htmlFor="termsAccepted"
//                   className="text-white text-sm cursor-pointer relative z-30"
//                   style={{ fontFamily: "Poppins, sans-serif" }}
//                 >
//                   I accept the{" "}
//                   <button
//                     type="button"
//                     onClick={() => setIsTermsModalOpen(true)}
//                     className="text-yellow-400 hover:text-yellow-300 underline transition-colors bg-transparent border-none cursor-pointer relative z-40 p-1 hover:bg-yellow-400/10 rounded"
//                   >
//                     Judge Terms and Conditions
//                   </button>{" "}
//                   and commit to fair and constructive evaluation of all
//                   projects.
//                 </label>
//               </div>
//             </motion.div>

//             {/* Turnstile Bot Protection */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//               className="flex justify-center mb-8"
//             >
//               <TurnstileWrapper
//                 onVerify={(token) => setTurnstileToken(token)}
//                 onError={() => {
//                   setTurnstileToken("");
//                   toast.error("Verification failed. Please try again.");
//                 }}
//                 onExpire={() => {
//                   setTurnstileToken("");
//                   toast.warning("Verification expired. Please verify again.");
//                 }}
//                 className="w-full max-w-sm"
//               />
//             </motion.div>

//             {/* Submit Button */}
//             <div className="pt-6 flex justify-center">
//               <CyberButton
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-auto px-12 py-4"
//               >
//                 {isSubmitting ? (
//                   <div className="flex items-center justify-center space-x-2">
//                     <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//                     <span>Submitting Application...</span>
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-center space-x-2">
//                     <Send className="w-5 h-5" />
//                     <span>Submit Judge Application</span>
//                   </div>
//                 )}
//               </CyberButton>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Image Modal */}
//       {isImageModalOpen && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
//           <div className="relative max-w-2xl max-h-[90vh] overflow-hidden">
//             <button
//               onClick={() => setIsImageModalOpen(false)}
//               className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
//               aria-label="Close image preview"
//               title="Close image preview"
//             >
//               <X className="w-6 h-6 text-white" />
//             </button>
//             <img
//               src={profileImageUrl}
//               alt="Profile Preview"
//               className="max-w-full max-h-full object-contain rounded-lg"
//             />
//           </div>
//         </div>
//       )}

//       {/* FIEM Location Map Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 1.0 }}
//         className="max-w-4xl mx-auto mb-16 relative z-10"
//       >
//         <div
//           className="relative overflow-hidden from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 group bg-gradient-to-br flex flex-col justify-end p-8"
//           style={{
//             clipPath:
//               "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
//           }}
//         >
//           <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-sddystopiandemo text-center">
//             Find Us at FIEM
//           </h3>
//           <p className="text-yellow-300 text-lg font-medium mb-6 text-center font-mokoto">
//             Future Institute of Engineering and Management
//           </p>

//           {/* Map Container */}
//           <div className="w-full h-64 md:h-80 mb-6 rounded-lg overflow-hidden border-2 border-yellow-400/30">
//             <iframe
//               src="https://www.google.com/maps?q=Future+Institute+of+Engineering+and+Management,CCV8%2B85M+Sonarpur+Station+Rd+Mission+Pally+Narendrapur+Rajpur+Sonarpur+West+Bengal+700150&z=17&output=embed"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Google Maps showing Future Institute of Engineering and Management location"
//             ></iframe>
//           </div>
//         </div>
//       </motion.div>

//       {/* Visit Our Podium Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 1.2 }}
//         className="text-center relative z-10 mb-16"
//       >
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-sddystopiandemo">
//             Ready to Judge Innovation?
//           </h2>
//           <p className="text-lg md:text-xl text-gray-300 mb-6 font-mokoto">
//             Join our panel of expert judges and evaluate the next generation of
//             tech innovators
//           </p>
//           <div className="inline-block">
//             <div className="flex flex-col sm:flex-row items-center gap-4">
//               <a
//                 href="https://hackspire.tech"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-mokoto text-lg"
//               >
//                 <span>Visit our podium</span>
//                 <Globe className="w-5 h-5" />
//               </a>

//               <span className="text-gray-400 hidden sm:block">•</span>

//               <a
//                 href="mailto:acmfiem@gmail.com"
//                 className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-mokoto text-lg"
//               >
//                 <span>Contact us</span>
//                 <Mail className="w-5 h-5" />
//               </a>

//               <span className="text-gray-400 hidden sm:block">•</span>

//               <a
//                 href="tel:7074757878"
//                 className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-mokoto text-lg"
//               >
//                 <span>7074757878</span>
//                 <Phone className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Terms Modal */}
//       {isTermsModalOpen && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
//           <div className="bg-black/90 border-2 border-yellow-400/50 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h3
//                 className="text-xl font-bold text-yellow-400"
//                 style={{ fontFamily: "Poppins, sans-serif" }}
//               >
//                 Judge Terms and Conditions
//               </h3>
//               <button
//                 onClick={() => setIsTermsModalOpen(false)}
//                 className="w-8 h-8 bg-red-500/20 hover:bg-red-500/30 rounded-full flex items-center justify-center transition-colors"
//                 aria-label="Close terms and conditions"
//                 title="Close terms and conditions"
//               >
//                 <X className="w-5 h-5 text-white" />
//               </button>
//             </div>
//             <div
//               className="text-white space-y-4 text-sm leading-relaxed"
//               style={{ fontFamily: "Poppins, sans-serif" }}
//             >
//               <p>
//                 By accepting these terms, you agree to serve as a judge for
//                 HackSpire 2025 and commit to:
//               </p>
//               <ul className="list-disc list-inside space-y-2 ml-4">
//                 <li>
//                   Evaluate all projects fairly and without bias based on
//                   technical merit, innovation, and presentation quality
//                 </li>
//                 <li>
//                   Maintain confidentiality of all project details and judging
//                   discussions
//                 </li>
//                 <li>
//                   Provide constructive feedback to participants when requested
//                 </li>
//                 <li>
//                   Be available for the agreed judging time slots during the
//                   event
//                 </li>
//                 <li>
//                   Follow the judging criteria and guidelines provided by the
//                   organizers
//                 </li>
//                 <li>
//                   Declare any conflicts of interest with participating teams
//                 </li>
//                 <li>
//                   Represent HackSpire 2025 professionally during the event
//                 </li>
//                 <li>Have published research papers and provide social proof</li>
//               </ul>
//               <p>
//                 The organizers reserve the right to remove judges who do not
//                 adhere to these terms or professional standards.
//               </p>
//             </div>
//             <div className="mt-6 flex justify-end">
//               <button
//                 onClick={() => setIsTermsModalOpen(false)}
//                 className="px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors font-mokoto"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default JudgesForm;

"use client";

import { useEffect } from "react";

function JudgesForm() {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="min-h-screen text-white py-20 px-4 relative bg-transparent flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl mx-auto">
        <img
          src="https://ik.imagekit.io/k2pkqd50y/Web%20Assets/Session_Bot-removebg-preview.png?updatedAt=1758439935808"
          alt="Session Bot"
          className="w-65 h-65 mx-auto mb-2 object-contain"
        />
        <h1 className="text-6xl font-bold text-white mb-4 font-sddystopiandemo">
          Session Has Expired
        </h1>
        <p className="text-xl text-gray-300 font-mokoto">
          The Judges registration session has ended. Thank you for your interest
          in HackSpire'25!
        </p>
      </div>
    </div>
  );
}

export default JudgesForm;
