import type { Metadata, Viewport } from "next";
import { Fredoka, Outfit, VT323 } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["200", "300", "400", "500"], variable: "--font-outfit", display: "swap" });
const fredoka = Fredoka({ subsets: ["latin"], weight: "600", variable: "--font-fredoka", display: "swap" });
const vt323 = VT323({ subsets: ["latin"], weight: ["400"], variable: "--font-vt323", display: "swap" });

const description = "Independent Amazon & Marketplace Consultant. Practical support with Vendor and Seller Central, catalog content and European marketplaces.";

export const metadata: Metadata = {
  title: "Marketplace Journal",
  applicationName: "Marketplace Journal",
  description,
  openGraph: { title: "Marketplace Journal", description, siteName: "Marketplace Journal", type: "website" },
  twitter: { card: "summary", title: "Marketplace Journal", description },
};
export const viewport: Viewport = { themeColor: "#050505", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${fredoka.variable} ${vt323.variable}`}>
      <body>{children}</body>
    </html>
  );
}
