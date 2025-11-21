// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cnip.be"),
  title: {
    default: "CNIP | Marketing Bureau Gent | Paid Advertising, SEO & Social Media",
    template: "%s | CNIP",
  },
  description:
    "Boutique marketing bureau in Gent met 23 jaar expertise in video productie, SEO, social media en marketing automation. 50K+ volgers voor Hof van Cleve. 51+ keywords top 3 voor Willems Veranda. HubSpot Gold Partner.",
  keywords: [
    "marketing bureau gent",
    "video productie gent",
    "SEO bureau gent",
    "social media marketing",
    "marketing automation",
    "HubSpot partner",
    "boutique agency gent",
    "premium marketing",
  ],
  authors: [{ name: "CNIP" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // let op: dit zijn de *met streepje* keys die Next verwacht
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://cnip.be/",
    siteName: "CNIP",
    title: "CNIP | Marketing Bureau Gent | Video, SEO & Social Media sinds 2002",
    description:
      "Boutique marketing bureau in Gent met 23 jaar expertise. Van 0 naar 50k volgers voor Hof van Cleve en 51+ keywords top 3 voor Willems Veranda.",
    images: [
      {
        url: "https://cnip.be/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CNIP Marketing Bureau Gent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CNIP | Marketing Bureau Gent | 23 Jaar Expertise",
    description:
      "Boutique marketing bureau Gent. 50K+ volgers voor Hof van Cleve. 51+ keywords top 3. HubSpot Gold Partner.",
    images: ["https://cnip.be/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cnip.be/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl-BE">
      <body>{children}</body>
    </html>
  );
}
