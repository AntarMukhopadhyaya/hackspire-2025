import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutContent from "@/components/LayoutContent";
import { LAYOUT_BODY_CLASSES } from "@/lib/styles";

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
  metadataBase: new URL("https://hackspire2025.com"),
  title: {
    default: "HackSpire 2025 - Premier Cyberpunk Hackathon Experience",
    template: "%s | HackSpire 2025",
  },
  description:
    "Join HackSpire 2025, the ultimate cyberpunk-themed hackathon. Build innovative solutions, connect with top developers, and compete for amazing prizes in our futuristic coding event.",
  keywords: [
    "hackathon",
    "cyberpunk",
    "coding",
    "programming",
    "developers",
    "innovation",
    "tech",
    "competition",
    "2025",
  ],
  authors: [{ name: "HackSpire Team" }],
  creator: "HackSpire Organization",
  publisher: "HackSpire Organization",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hackspire2025.com",
    title: "HackSpire 2025 - Premier Cyberpunk Hackathon Experience",
    description:
      "Join HackSpire 2025, the ultimate cyberpunk-themed hackathon. Build innovative solutions, connect with top developers, and compete for amazing prizes.",
    siteName: "HackSpire 2025",
    images: [
      {
        url: "/images/hackspire-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HackSpire 2025 - Cyberpunk Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackSpire 2025 - Premier Cyberpunk Hackathon Experience",
    description:
      "Join HackSpire 2025, the ultimate cyberpunk-themed hackathon experience.",
    images: ["/images/hackspire-twitter-image.jpg"],
    creator: "@hackspire2025",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Critical resource hints for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="//fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Preload critical fonts for better LCP */}
        <link
          rel="preload"
          href="/fonts/Distancia-500-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        {/* Prefetch non-critical resources */}
        <link rel="prefetch" href="/_next/static/chunks/pages/_app.js" />

        {/* PWA and mobile optimization */}
        <meta name="theme-color" content="#eab308" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${LAYOUT_BODY_CLASSES}`}
        suppressHydrationWarning
      >
        {/* Optimized font loading script for better FCP */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined' || !('fonts' in document)) return;

                // Load critical fonts immediately
                const fontPromises = [
                  new FontFace('Distancia', "url('/fonts/Distancia-500-Regular.otf')", {
                    weight: 'normal',
                    display: 'swap',
                    unicodeRange: 'U+0020-007F' // Basic Latin for performance
                  }).load()
                ];

                Promise.all(fontPromises)
                  .then(function(fonts) {
                    fonts.forEach(function(font) {
                      document.fonts.add(font);
                    });
                    document.documentElement.classList.add('fonts-loaded');
                  })
                  .catch(function() {
                    // Graceful fallback - show content even if fonts fail
                    document.documentElement.classList.add('fonts-loaded');
                  });
              })();
            `,
          }}
        />

        <LayoutContent>{children}</LayoutContent>
        {/* </AudioProvider> */}
      </body>
    </html>
  );
}
