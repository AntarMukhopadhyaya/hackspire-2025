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

function ClientRedirect() {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSe5opmZjIf1LM_9lM8m1f2kqmlSOFWdbI3uh1adsK1AMpgqSA/viewform?usp=sharing&ouid=105135097797986051672&rtpof=true&sd=true";

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.href = "${formUrl}";`,
        }}
      />
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">
          <h1
            className="text-2xl font-bold mb-4 text-white"
            style={{ fontFamily: "Mokoto Demo, sans-serif" }}
          >
            HackSpire'25 - PPT Submission
          </h1>
          <p
            className="mb-4 text-white"
            style={{ fontFamily: "Mokoto Demo, sans-serif" }}
          >
            Redirecting to submission form...
          </p>
          <p
            className="text-sm text-white"
            style={{ fontFamily: "Mokoto Demo, sans-serif" }}
          >
            If you are not redirected automatically,{" "}
            <a
              href={formUrl}
              className="text-white underline hover:text-gray-300"
            >
              click here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default function PPTSubmissionPage() {
  return <ClientRedirect />;
}
