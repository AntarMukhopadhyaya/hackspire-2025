import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Assets - HackSpire'25",
  description:
    "Access HackSpire'25 brand assets, logos, fonts, and design guidelines for official use.",
  keywords: [
    "HackSpire",
    "HackSpire'25",
    "HackSpire 2025",
    "brand assets",
    "logos",
    "fonts",
    "design guidelines",
    "hackathon branding",
    "FIEM ACM",
    "brand kit",
  ],
  openGraph: {
    title: "Brand Assets - HackSpire'25",
    description:
      "Access HackSpire'25 brand assets, logos, fonts, and design guidelines for official use.",
    type: "website",
    siteName: "HackSpire'25",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Assets - HackSpire'25",
    description:
      "Access HackSpire'25 brand assets, logos, fonts, and design guidelines for official use.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BrandAssetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
