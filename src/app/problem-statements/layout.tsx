import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Problem Statements - HackSpire'25",
  description:
    "Explore the official problem statements for HackSpire'25. Find challenge prompts across AI, Blockchain, Cybersecurity, Robotics, Healthcare, and other tracks to build your hackathon project.",
  keywords: [
    "HackSpire",
    "HackSpire'25",
    "HackSpire 25",
    "HackSpire 2025",
    "problem statements",
    "challenge prompts",
    "hackathon problems",
    "project ideas",
    "AI challenges",
    "blockchain",
    "cybersecurity",
    "robotics",
    "healthcare",
    "innovation",
    "FIEM ACM",
    "hackathon tracks",
  ],
  openGraph: {
    title: "Problem Statements - HackSpire'25",
    description:
      "Explore the official problem statements for HackSpire'25 across multiple tracks and domains to help you choose and build your project.",
    type: "website",
    siteName: "HackSpire'25",
  },
  twitter: {
    card: "summary_large_image",
    title: "Problem Statements - HackSpire'25",
    description:
      "Browse HackSpire'25 problem statements and challenge prompts across AI, Blockchain, Cybersecurity, Robotics, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProblemStatementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
