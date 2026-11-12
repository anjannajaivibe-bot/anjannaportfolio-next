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
    default: "Anjanna Margam | Retail Merchandise Planning & Digital Strategy",
    template: "%s | Anjanna Margam",
  },
  description:
    "Anjanna Margam brings retail planning experience from Max Fashion (2004–2015) and Beside Group LLC (2015–2020), plus digital growth work through JaiVibe and Sri Supraja Infracon.",
  keywords: [
    "Anjanna Margam",
    "retail merchandise planning professional",
    "retail planning consultant",
    "merchandise planning consultant",
    "digital growth strategist",
    "real estate marketing professional",
    "business systems consulting",
  ],
  authors: [{ name: "Anjanna Margam", url: "/" }],
  creator: "Anjanna Margam",
  publisher: "Anjanna Margam",
  applicationName: "Anjanna Margam Portfolio",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Anjanna Margam | Merchandise Planning & Digital Growth",
    description:
      "Merchandise planning at Max Fashion and Beside Group LLC, with commercial analysis, digital strategy and website projects through JaiVibe.",
    url: "/",
    siteName: "Anjanna Margam Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Anjanna Margam, Retail Merchandise Planning and Digital Growth",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjanna Margam | Merchandise Planning & Digital Growth",
    description:
      "Merchandise planning, sales and buying budgets, forecasting and stock management, followed by practical digital marketing and business systems work.",
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
          url: `${SITE_URL}/images/anjanna-portfolio-portrait.jpg`,
          contentUrl: `${SITE_URL}/images/anjanna-portfolio-portrait.jpg`,
          caption: "Anjanna Margam",
        },
        jobTitle: "Real Estate & Digital Marketing Strategist; Retail Merchandise Planning Professional",
        email: "mailto:anjumargams@gmail.com",
        telephone: "+91 96407 53929",
        description:
          "Retail merchandise planning experience at Max Fashion (Saudi Arabia, 2004–2015) and Beside Group LLC (Dubai, 2015–2020; six-market portfolio representing 119 stores). Founder of JaiVibe and Real Estate & Digital Marketing Strategist at Sri Supraja Infracon.",
        worksFor: [
          { "@type": "Organization", name: "JaiVibe", url: "https://jaivibe.com/" },
          { "@type": "Organization", name: "Sri Supraja Infracon", url: "https://srisuprajainfracon.com/" },
        ],
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
        description: "Professional portfolio covering international retail merchandise planning, commercial analysis, websites, SEO and CRM workflows.",
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
