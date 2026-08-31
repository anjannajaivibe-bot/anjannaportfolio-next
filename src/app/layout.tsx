import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import VentureEnhancer from "./VentureEnhancer";
import "./globals.css";
import "./enhancements.css";
import "./venture-enhancements.css";
import "./spacing-fixes.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const SITE_URL = "https://anjannaportfolio.jaivibe.com";
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFILE_ID = `${SITE_URL}/#profilepage`;

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
  publisher: "Anjanna Margam",
  applicationName: "Anjanna Margam Portfolio",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
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
        "@id": PERSON_ID,
        name: "Anjanna Margam",
        url: SITE_URL,
        image: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#portrait`,
          url: `${SITE_URL}/images/anjanna-margam.jpg`,
          contentUrl: `${SITE_URL}/images/anjanna-margam.jpg`,
          caption: "Anjanna Margam",
        },
        jobTitle: "Marketing Executive",
        email: "mailto:anjumargams@gmail.com",
        telephone: "+91 96407 53929",
        description:
          "Marketing executive with experience in multinational retail planning, commercial strategy, digital growth, entrepreneurship and business transformation.",
        worksFor: {
          "@type": "Organization",
          name: "Sri Supraja Infracon",
          url: "https://srisuprajainfracon.com/",
        },
        sameAs: [
          "https://www.linkedin.com/in/anjanna-margam-b8076241",
          "https://www.jaivibe.com/",
          "https://digitalmarketing.jaivibe.com/",
        ],
        knowsAbout: [
          "Retail merchandise planning",
          "Open-to-buy planning",
          "Sales forecasting",
          "Inventory allocation and replenishment",
          "Commercial strategy",
          "Marketing strategy",
          "Digital growth",
          "Search engine optimization",
          "Performance marketing",
          "CRM workflows",
          "Lead management",
          "Business analytics",
          "Real estate marketing",
          "Hospitality marketing",
          "Business transformation",
        ],
        subjectOf: {
          "@type": "DigitalDocument",
          name: "Anjanna Margam Consulting Resume",
          url: `${SITE_URL}/Anjanna_Margam_Consulting_Resume.pdf`,
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: "Anjanna Margam Portfolio",
        description: "Professional portfolio covering retail strategy, commercial planning, digital growth and business transformation.",
        publisher: { "@id": PERSON_ID },
        about: { "@id": PERSON_ID },
        inLanguage: "en-IN",
      },
      {
        "@type": "ProfilePage",
        "@id": PROFILE_ID,
        url: SITE_URL,
        name: "Anjanna Margam Professional Portfolio",
        description: "Professional profile, career history, capabilities, selected work and contact information for Anjanna Margam.",
        mainEntity: { "@id": PERSON_ID },
        about: { "@id": PERSON_ID },
        isPartOf: { "@id": WEBSITE_ID },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
        {children}
        <VentureEnhancer />
      </body>
    </html>
  );
}
