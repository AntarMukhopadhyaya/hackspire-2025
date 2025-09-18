import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helpdesk & Support - HackSpire'25",
  description:
    "Get help and support for HackSpire'25. Find answers to frequently asked questions, contact our support team, and get assistance with registration, technical issues, and event queries.",
  keywords: [
    "HackSpire",
    "HackSpire'25",
    "HackSpire 25",
    "HackSpire 2025",
    "helpdesk",
    "support",
    "help center",
    "customer support",
    "technical support",
    "FAQ",
    "frequently asked questions",
    "contact support",
    "event support",
    "registration help",
    "technical issues",
    "troubleshooting",
    "FIEM ACM",
    "hackathon support",
    "participant help",
    "event assistance",
    "support ticket",
    "help documentation",
  ],
  openGraph: {
    title: "Helpdesk & Support - HackSpire'25",
    description:
      "Need help with HackSpire'25? Access our comprehensive support center for FAQs, technical assistance, and direct contact with our support team.",
    type: "website",
    siteName: "HackSpire'25",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helpdesk & Support - HackSpire'25",
    description:
      "Need help with HackSpire'25? Access our comprehensive support center for FAQs, technical assistance, and direct contact with our support team.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HelpdeskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
