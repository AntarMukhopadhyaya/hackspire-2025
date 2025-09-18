import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct - HackSpire'25",
  description:
    "Read the HackSpire'25 Code of Conduct. Our commitment to creating a safe, inclusive, and respectful environment for all participants, mentors, judges, and organizers.",
  keywords: [
    "HackSpire",
    "HackSpire'25",
    "HackSpire 25",
    "HackSpire 2025",
    "code of conduct",
    "community guidelines",
    "hackathon rules",
    "participant behavior",
    "inclusive environment",
    "anti-harassment",
    "diversity and inclusion",
    "respectful conduct",
    "event policies",
    "community standards",
    "FIEM ACM",
    "hackathon etiquette",
    "professional behavior",
    "safe space",
    "participant guidelines",
    "event rules",
  ],
  openGraph: {
    title: "Code of Conduct - HackSpire'25",
    description:
      "Learn about HackSpire'25 Code of Conduct. Our commitment to fostering a safe, inclusive, and respectful hackathon environment for everyone.",
    type: "website",
    siteName: "HackSpire'25",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code of Conduct - HackSpire'25",
    description:
      "Learn about HackSpire'25 Code of Conduct. Our commitment to fostering a safe, inclusive, and respectful hackathon environment for everyone.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CodeOfConductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
