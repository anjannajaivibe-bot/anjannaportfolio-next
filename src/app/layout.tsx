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
    default: "Anjanna Margam | Retail Strategist & Digital Growth Leader",
    template: "%s | Anjanna Margam",
  },
  description:
    "Anjanna Margam is a retail planning, business growth and digital marketing consultant with 20+ years of experience across India and the Middle East.",
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
    title: "Anjanna Margam | Retail Strategist & Digital Growth Leader",
    description:
      "20+ years across retail planning, business growth, digital systems and real estate marketing in India and the Middle East.",
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
    title: "Anjanna Margam | Professional Portfolio",
    description:
      "Retail planning, business growth, digital systems and real estate marketing backed by 20+ years of experience.",
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
