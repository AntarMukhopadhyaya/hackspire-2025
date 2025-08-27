import { Metadata } from "next";
import TracksClient from "./ThemeClient";

export const metadata: Metadata = {
  title: "Tracks & Themes",
  description:
    "Explore HackSpire 2025's 8 exciting tracks: AI & Machine Learning, Blockchain & Web3, Cybersecurity, Agriculture & Smart Farming, Robotics & IoT, Gaming & AR/VR, Healthcare & MedTech, and Open Innovation. Choose your track and build innovative solutions.",
  keywords: [
    "hackathon tracks",
    "AI track",
    "blockchain track",
    "cybersecurity track",
    "agriculture track",
    "robotics track",
    "gaming track",
    "healthcare track",
    "open innovation",
    "machine learning",
    "web3",
    "smart farming",
    "IoT",
    "AR/VR",
    "medtech",
  ],
  openGraph: {
    title: "HackSpire 2025 Tracks & Themes",
    description:
      "Explore 8 exciting tracks at HackSpire 2025: AI, Blockchain, Cybersecurity, Agriculture, Robotics, Gaming, Healthcare, and Open Innovation.",
    url: "https://hackspire.tech/tracks",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "HackSpire 2025 Tracks & Themes",
      },
    ],
  },
  twitter: {
    title: "HackSpire 2025 Tracks & Themes",
    description:
      "Explore 8 exciting tracks at HackSpire 2025: AI, Blockchain, Cybersecurity, Agriculture, Robotics, Gaming, Healthcare, and Open Innovation.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/tracks",
  },
};

export default function TracksPage() {
  return <TracksClient />;
}
