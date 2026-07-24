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
    "Professional portfolio of Anjanna Margam, a retail strategist, digital growth leader and entrepreneur with experience across India and the Gulf.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Anjanna Margam | Retail Strategist & Digital Growth Leader",
    description:
      "From retail planning across the Gulf to digital growth and real estate marketing in India.",
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
      "Retail strategy, digital growth, entrepreneurship and real estate marketing.",
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
