import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download PPT Template - HackSpire'25",
  description:
    "Download the official HackSpire'25 PowerPoint presentation template. All participants must use this mandatory PPT template for their hackathon project presentations and submissions.",
  keywords: [
    "HackSpire",
    "HackSpire'25",
    "HackSpire 25",
    "HackSpire 2025",
    "PPT template",
    "PowerPoint template",
    "presentation template",
    "hackathon template",
    "project presentation",
    "PPT download",
    "PowerPoint download",
    "mandatory template",
    "official template",
    "hackathon presentation",
    "FIEM ACM",
    "presentation guidelines",
    "template download",
    "hackathon PPT",
    "project template",
    "presentation format",
  ],
  openGraph: {
    title: "Download PPT Template - HackSpire'25",
    description:
      "Download the official HackSpire'25 PowerPoint template. Mandatory for all participants to use in their hackathon project presentations.",
    type: "website",
    siteName: "HackSpire'25",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download PPT Template - HackSpire'25",
    description:
      "Download the official HackSpire'25 PowerPoint template. Mandatory for all participants to use in their hackathon project presentations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DownloadPPTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
