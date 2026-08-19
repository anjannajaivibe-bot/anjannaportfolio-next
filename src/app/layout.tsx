import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import VentureEnhancer from "./VentureEnhancer";
import "./globals.css";
import "./enhancements.css";
import "./venture-enhancements.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const SITE_URL = "https://anjannaportfolio.jaivibe.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Anjanna Margam | Marketing Executive, Retail Strategy & Digital Growth",
    template: "%s | Anjanna Margam",
  },
  description:
    "Anjanna Margam is a Marketing Executive with nearly three decades of experience across multinational retail planning, digital growth, entrepreneurship and business transformation.",
  keywords: [
    "Anjanna Margam",
    "Marketing Executive Hyderabad",
    "retail planning consultant",
    "merchandise planning consultant",
    "digital growth strategist",
    "real estate marketing professional",
    "business transformation",
  ],
  authors: [{ name: "Anjanna Margam", url: "/" }],
  creator: "Anjanna Margam",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Anjanna Margam | Marketing Executive & Digital Growth Strategist",
    description:
      "Nearly three decades across multinational retail planning, commercial strategy, entrepreneurship and modern digital execution.",
    url: "/",
    siteName: "Anjanna Margam Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Anjanna Margam, Marketing Executive, Retail Strategy and Digital Growth",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjanna Margam | Marketing Executive & Digital Growth Strategist",
    description:
      "Multinational retail planning, commercial strategy and digital growth backed by nearly three decades of professional experience.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "22dab12206c3b2eb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Anjanna Margam",
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        jobTitle: "Marketing Executive",
        description:
          "Marketing executive with experience in retail planning, commercial strategy, digital growth, entrepreneurship and business transformation.",
        knowsAbout: [
          "Retail merchandise planning",
          "Marketing strategy",
          "Digital growth",
          "Real estate marketing",
          "Business transformation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Anjanna Margam Portfolio",
        publisher: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en-IN",
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: "Anjanna Margam Professional Portfolio",
        mainEntity: { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
        <VentureEnhancer />
      </body>
    </html>
  );
}
