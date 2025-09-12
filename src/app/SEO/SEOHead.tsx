import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "event";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export default function SEOHead({
  title = "HackSpire'25 - Biggest Hackathon by FIEM ACM Student Chapter",
  description = "Join HackSpire'25, the largest 25-hour hackathon organized by FIEM ACM Student Chapter. Build innovative solutions in AI, Blockchain, Cybersecurity, Agriculture, Robotics, Gaming, Healthcare, and Open Innovation.",
  keywords = [],
  image = "/og-image.svg",
  url = "https://hackspire.tech",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "FIEM ACM Student Chapter",
  section,
  tags = [
    "hackspire",
    "hackspire'25",
    "hackathon",
    "FIEM",
    "ACM",
    "biggest hackathon",
    "24 hour hackathon",
    "Future Institute of Engineering",
    "programming",
    "innovation",
  ],
}: SEOHeadProps) {
  const defaultKeywords = [
    "Hackspire",
    "Hackspire'25",
    "Hackathon",
    "FIEM ACM Student Chapter",
    "Biggest Hackathon",
    "25 hour hackathon",
    "24 hour hackathon",
    "Future Institute of Engineering",
    "ACM",
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(", ")} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="HackSpire'25" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@hackspire'25" />
      <meta name="twitter:creator" content="@hackspire'25" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      {/* Article specific meta tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      {type === "article" && section && (
        <meta property="article:section" content={section} />
      )}
      {type === "article" &&
        tags.length > 0 &&
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
      {/* Schema.org structured data for event */}
      {type === "event" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: title,
              description: description,
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
            }),
          }}
        />
      )}
    </Head>
  );
}
