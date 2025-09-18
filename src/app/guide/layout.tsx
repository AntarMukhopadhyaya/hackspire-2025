import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hackathon Guide - HackSpire'25",
  description:
    "Complete guide for HackSpire'25 participants. Get all the information you need including rules, guidelines, submission process, judging criteria, and tips for a successful hackathon experience.",
  keywords: [
    "HackSpire",
    "HackSpire'25",
    "HackSpire 25",
    "HackSpire 2025",
    "hackathon guide",
    "hackathon rules",
    "hackathon guidelines",
    "submission process",
    "judging criteria",
    "hackathon tips",
    "participant guide",
    "hackathon handbook",
    "competition rules",
    "hackathon instructions",
    "FIEM ACM",
    "hackathon preparation",
    "team formation",
    "project guidelines",
    "hackathon process",
    "participant handbook",
  ],
  openGraph: {
    title: "Hackathon Guide - HackSpire'25",
    description:
      "Complete guide for HackSpire'25 participants. Rules, guidelines, submission process, and everything you need for a successful hackathon experience.",
    type: "website",
    siteName: "HackSpire'25",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hackathon Guide - HackSpire'25",
    description:
      "Complete guide for HackSpire'25 participants. Rules, guidelines, submission process, and everything you need for a successful hackathon experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
