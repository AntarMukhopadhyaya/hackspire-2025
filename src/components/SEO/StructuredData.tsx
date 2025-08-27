import Script from "next/script";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "HackSpire 2025",
    description:
      "Join HackSpire 2025, the largest 25-hour hackathon organized by FIEM ACM Student Chapter. Build innovative solutions in AI, Blockchain, Cybersecurity, Agriculture, Robotics, Gaming, Healthcare, and Open Innovation.",
    startDate: "2025-03-15T09:00:00+05:30",
    endDate: "2025-03-16T10:00:00+05:30",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Future Institute of Engineering and Management",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sonarpur Station Road",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700150",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "FIEM ACM Student Chapter",
      url: "https://hackspire.tech",
      logo: "https://hackspire.tech/og-image.svg",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://hackspire.tech",
    },
    image: "https://hackspire.tech/og-image.svg",
    url: "https://hackspire.tech",
    sameAs: [
      "https://twitter.com/hackspire2025",
      "https://instagram.com/hackspire2025",
    ],
    keywords:
      "hackathon, AI, blockchain, cybersecurity, agriculture, robotics, gaming, healthcare, FIEM, ACM, programming, innovation",
    category: "Technology",
    audience: {
      "@type": "Audience",
      audienceType: "Students, Developers, Programmers, Innovators",
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
