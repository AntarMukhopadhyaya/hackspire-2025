import { NextResponse } from "next/server";

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>HackSpire 2025 - Biggest Hackathon by FIEM ACM Student Chapter</title>
    <description>Latest updates and announcements about HackSpire 2025, the largest 24-hour hackathon organized by FIEM ACM Student Chapter.</description>
    <link>https://hackspire.tech</link>
    <atom:link href="https://hackspire.tech/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>60</ttl>
    
    <item>
      <title>HackSpire 2025 Registration Now Open!</title>
      <description>Join the biggest hackathon of 2025! Registration is now open for HackSpire 2025, organized by FIEM ACM Student Chapter.</description>
      <link>https://hackspire.tech</link>
      <guid>https://hackspire.tech/registration-open</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <category>Announcement</category>
    </item>
    
    <item>
      <title>Explore Innovation Tracks at HackSpire 2025</title>
      <description>Discover the exciting innovation tracks including AI, Blockchain, Cybersecurity, Agriculture, Robotics, Gaming, Healthcare, and Open Innovation.</description>
      <link>https://hackspire.tech/tracks</link>
      <guid>https://hackspire.tech/tracks</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <category>Information</category>
    </item>
    
    <item>
      <title>Meet the Crew Behind HackSpire 2025</title>
      <description>Get to know the amazing team organizing HackSpire 2025 and learn about their vision for the biggest hackathon event.</description>
      <link>https://hackspire.tech/crews</link>
      <guid>https://hackspire.tech/crews</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <category>Team</category>
    </item>
    
    <item>
      <title>Collaboration Opportunities at HackSpire 2025</title>
      <description>Explore partnership and collaboration opportunities with HackSpire 2025, the premier hackathon event of the year.</description>
      <link>https://hackspire.tech/collabs</link>
      <guid>https://hackspire.tech/collabs</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <category>Partnership</category>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
