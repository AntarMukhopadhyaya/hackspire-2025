import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/ui/Navbar";
import Footer from "@/components/Footer";

import LenisProvider from "@/components/ui/LenisProvider";
import PageTransition from "@/lib/PageTransition";
import RouteChangeAnimation from "@/lib/RouteChangeAnimation";
import { Toaster } from "@/components/ui/sonner";
import ConditionalAppLoader from "@/components/ui/ConditionalAppLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "HackSpire 2025 - Biggest Hackathon by FIEM ACM Student Chapter",
  description:
    "Join HackSpire 2025, the largest 24-hour hackathon organized by FIEM ACM Student Chapter. Build innovative solutions in AI, Blockchain, Cybersecurity, Agriculture, Robotics, Gaming, Healthcare, and Open Innovation. Future Institute of Engineering's premier hackathon event.",
  keywords: [
    "Hackspire",
    "Hackspire2025",
    "Hackathon",
    "Hackathons",
    "Hackathon 2025",
    "FIEM",
    "ACM",
    "Future Institute of Engineering",
    "FIEM ACM Student Chapter",
    "Biggest Hackathon",
    "HackSpire FIEM",
    "HackSpire ACM",
    "Largest Hackathon",
    "24 hour hackathon",
    "AI",
    "Artificial Intelligence",
    "Machine Learning",
    "Blockchain",
    "Web3",
    "DeFi",
    "Cybersecurity",
    "Digital Security",
    "Agriculture",
    "Smart Farming",
    "Robotics",
    "Automation",
    "Gaming",
    "AR/VR",
    "Healthcare",
    "Medical Technology",
    "Open Innovation",
    "Computer Vision",
    "Natural Language Processing",
    "Deep Learning",
    "Smart Contracts",
    "NFT",
    "DAO",
    "Threat Detection",
    "Encryption",
    "IoT",
    "Sensors",
    "Telemedicine",
    "Game Development",
    "Devfolio Hackathon",
  ],
  authors: [{ name: "FIEM ACM Student Chapter" }],
  creator: "FIEM ACM Student Chapter",
  publisher: "Future Institute of Engineering",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hackspire.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hackspire.tech",
    siteName: "HackSpire 2025",
    title: "HackSpire 2025 - Biggest Hackathon by FIEM ACM Student Chapter",
    description:
      "Join HackSpire 2025, the largest 24-hour hackathon organized by FIEM ACM Student Chapter. Build innovative solutions in AI, Blockchain, Cybersecurity, Agriculture, Robotics, Gaming, Healthcare, and Open Innovation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HackSpire 2025 - Biggest Hackathon by FIEM ACM Student Chapter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackSpire 2025 - Biggest Hackathon by FIEM ACM Student Chapter",
    description:
      "Join HackSpire 2025, the largest 24-hour hackathon organized by FIEM ACM Student Chapter. Build innovative solutions in AI, Blockchain, Cybersecurity, Agriculture, Robotics, Gaming, Healthcare, and Open Innovation.",
    images: ["/og-image.jpg"],
    creator: "@hackspire2025",
    site: "@hackspire2025",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Technology",
  classification: "Hackathon Event",
  other: {
    "theme-color": "#EAB308",
    "msapplication-TileColor": "#EAB308",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "HackSpire 2025",
    "application-name": "HackSpire 2025",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload only the most critical font */}
        <link
          rel="preload"
          href="/fonts/Distancia-500-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        {/* Prefetch particles resources */}
        <link rel="prefetch" href="/_next/static/chunks/pages/_app.js" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* PWA Manifest */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HackSpire 2025" />

        {/* Windows Tiles */}
        <meta name="msapplication-TileColor" content="#EAB308" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="HackSpire 2025 RSS Feed"
          href="/feed.xml"
        />

        {/* Structured Data for Hackathon Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "HackSpire 2025",
              description:
                "Join HackSpire 2025, the largest 24-hour hackathon organized by FIEM ACM Student Chapter. Build innovative solutions in AI, Blockchain, Cybersecurity, Agriculture, Robotics, Gaming, Healthcare, and Open Innovation.",
              startDate: "2025-01-01T00:00:00+05:30",
              endDate: "2025-01-02T00:00:00+05:30",
              location: {
                "@type": "Place",
                name: "Future Institute of Engineering",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Kolkata",
                  addressRegion: "West Bengal",
                  addressCountry: "IN",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "FIEM ACM Student Chapter",
                url: "https://hackspire.tech",
              },
              performer: {
                "@type": "Organization",
                name: "FIEM ACM Student Chapter",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              },
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              category: "Hackathon",
              keywords:
                "Hackathon, AI, Blockchain, Cybersecurity, Innovation, Technology",
            }),
          }}
        />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FIEM ACM Student Chapter",
              url: "https://hackspire.tech",
              logo: "https://hackspire.tech/logo.png",
              description:
                "FIEM ACM Student Chapter is dedicated to promoting computer science education and fostering innovation through events like HackSpire 2025.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                addressCountry: "IN",
              },
              sameAs: [
                "https://twitter.com/hackspire2025",
                "https://linkedin.com/company/hackspire2025",
                "https://instagram.com/hackspire2025",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Font loading script */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              // Immediate font loading to prevent FOUT
              (function() {
                if (typeof window !== 'undefined' && 'fonts' in document) {
                  Promise.all([
                    new FontFace('Distancia', "url('/fonts/Distancia-500-Regular.otf')", { weight: 'normal', display: 'swap' }).load()
                  ]).then(function(fonts) {
                    fonts.forEach(function(font) { document.fonts.add(font); });
                    document.documentElement.classList.add('fonts-loaded');
                  }).catch(function() {
                    document.documentElement.classList.add('fonts-loaded');
                  });
                }
              })();
            `,
          }}
        />

        <ConditionalAppLoader>
          <LenisProvider>
            <RouteChangeAnimation />
            <Navbar />

            {/* Global Cyberpunk Yellow Spotlight */}
            <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
              <div
                className="w-full h-full"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 40% at 20% 10%, rgba(234, 179, 8, 0.25) 0%, rgba(161, 98, 7, 0.15) 40%, rgba(120, 53, 15, 0.08) 70%, transparent 100%)",
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <PageTransition>{children}</PageTransition>
            </div>
            <Footer />
            <Toaster />
          </LenisProvider>
        </ConditionalAppLoader>

        {/* Devfolio SDK Script */}
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </body>
    </html>
  );
}
