import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy - HackSpire'25",
  description:
    "Security policy and guidelines for HackSpire'25. Learn about our data protection, privacy measures, and security protocols to ensure a safe hackathon experience.",
  keywords: [
    "HackSpire",
    "HackSpire'25",
    "HackSpire 25",
    "HackSpire 2025",
    "security policy",
    "data protection",
    "privacy policy",
    "security guidelines",
    "data security",
    "hackathon security",
    "participant safety",
    "cybersecurity",
    "data privacy",
    "security protocols",
    "FIEM ACM",
    "information security",
    "digital safety",
    "security measures",
    "data handling",
    "security compliance",
  ],
  openGraph: {
    title: "Security Policy - HackSpire'25",
    description:
      "Learn about HackSpire'25 security policies, data protection measures, and guidelines to ensure a safe and secure hackathon experience.",
    type: "website",
    siteName: "HackSpire'25",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Policy - HackSpire'25",
    description:
      "Learn about HackSpire'25 security policies, data protection measures, and guidelines to ensure a safe and secure hackathon experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
