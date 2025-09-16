import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracks - HackSpire'25",
  description:
    "Explore HackSpire'25's exciting tracks including AI & Machine Learning, Blockchain & Web3, Cybersecurity, Agriculture, Robotics, Gaming, Healthcare, and Open Innovation. Choose your track and build innovative solutions.",
  keywords: [
    "HackSpire",
    "HackSpire'25",
    "HackSpire 25",
    "HackSpire 2025",
    "hackathon tracks",
    "tracks",
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
    "FIEM ACM",
    "hackathon themes",
  ],
  openGraph: {
    title: "Tracks - HackSpire'25",
    description:
      "Explore 8 exciting tracks at HackSpire'25: AI, Blockchain, Cybersecurity, Agriculture, Robotics, Gaming, Healthcare, and Open Innovation. Choose your track and build the future.",
    type: "website",
    siteName: "HackSpire'25",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tracks - HackSpire'25",
    description:
      "Explore 8 exciting tracks at HackSpire'25: AI, Blockchain, Cybersecurity, Agriculture, Robotics, Gaming, Healthcare, and Open Innovation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TracksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
