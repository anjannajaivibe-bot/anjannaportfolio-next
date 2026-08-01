import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anjannaportfolio.jaivibe.com"),
  title: {
    default: "Anjanna Margam | Global Retail Strategy & Digital Growth",
    template: "%s | Anjanna Margam",
  },
  description:
    "Anjanna Margam is a retail strategy and digital growth leader with 20+ years of multinational experience in commercial planning and business transformation.",
  keywords: [
    "Anjanna Margam",
    "retail planning consultant",
    "merchandise planning consultant",
    "digital growth strategist",
    "real estate marketing consultant",
    "Hyderabad business consultant",
  ],
  authors: [{ name: "Anjanna Margam", url: "/" }],
  creator: "Anjanna Margam",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Anjanna Margam | Global Retail Strategy & Digital Growth",
    description:
      "20+ years of multinational retail planning, commercial leadership, entrepreneurship and modern digital growth.",
    url: "/",
    siteName: "Anjanna Margam Portfolio",
    images: [
      {
        url: "/images/anjanna-margam.jpg",
        width: 1080,
        height: 1477,
        alt: "Anjanna Margam",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjanna Margam | Global Commerce Intelligence",
    description:
      "Multinational retail planning, commercial leadership and digital growth backed by more than 20 years of experience.",
    images: ["/images/anjanna-margam.jpg"],
  },
  robots: { index: true, follow: true },
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
