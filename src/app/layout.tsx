import type { Metadata } from "next";
import { Inter, Playfair_Display, Rajdhani } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sublime Sports Apparel | Digitizing, Patches & Custom Apparel",
  description:
    "Premium embroidery digitizing, custom patches, and sports apparel services. Precision-crafted designs with lasting quality for teams, brands, and businesses.",
  keywords: [
    "embroidery digitizing",
    "custom patches",
    "sports apparel",
    "custom uniforms",
    "vector art",
    "promotional products",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${rajdhani.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
