import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./enhancements.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anjannaportfolio.jaivibe.com"),
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
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
