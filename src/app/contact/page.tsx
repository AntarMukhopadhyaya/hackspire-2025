import React from "react";
import ContactClient from "./ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with HackSpire'25 organizers. Contact FIEM ACM Student Chapter for sponsorship opportunities, partnership inquiries, media coverage, or general questions about the hackathon.",
  keywords: [
    "contact hackspire",
    "hackspire contact",
    "fiem acm contact",
    "hackathon contact",
    "sponsorship inquiry",
    "partnership",
    "media inquiry",
    "hackspire support",
    "hackathon organizers",
    "kolkata hackathon contact",
    "student chapter contact",
  ],
  authors: [{ name: "FIEM ACM Student Chapter" }],
  creator: "FIEM ACM Student Chapter",
  publisher: "Future Institute of Engineering",
  openGraph: {
    title: "Contact HackSpire'25",
    description:
      "Get in touch with HackSpire'25 organizers for sponsorship, partnerships, media inquiries, or general questions.",
    url: "https://hackspire.tech/contact",
    siteName: "HackSpire'25",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Contact HackSpire'25 - Get in Touch",
        type: "image/svg+xml",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact HackSpire'25",
    description:
      "Get in touch with HackSpire'25 organizers for sponsorship, partnerships, media inquiries, or general questions.",
    images: ["/og-image.svg"],
    creator: "@acmfiem",
    site: "@acmfiem",
  },
  alternates: {
    canonical: "/contact",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Contact",
};

const ContactPage = () => {
  return <ContactClient />;
};

export default ContactPage;
