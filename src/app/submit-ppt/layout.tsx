import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HackSpire'25 - PPT Submission",
  description:
    "Welcome to the HackSpire'25 PPT Submission Portal. Submit your presentation for the hackathon here.",
  openGraph: {
    title: "HackSpire'25 - PPT Submission",
    description:
      "Welcome to the HackSpire'25 PPT Submission Portal. Submit your presentation for the hackathon here.",
    images: [
      {
        url: "/submission-preview.png",
        width: 1200,
        height: 630,
        alt: "HackSpire'25 PPT Submission Portal",
      },
    ],
    siteName: "HackSpire'25",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HackSpire'25 - PPT Submission",
    description:
      "Welcome to the HackSpire'25 PPT Submission Portal. Submit your presentation for the hackathon here.",
    images: ["/submission-preview.png"],
  },
};

export default function SubmitPPTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
