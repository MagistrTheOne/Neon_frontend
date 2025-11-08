import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEON QTG: Father of AI | Revolutionary Neuromachines",
  description: "Discover NEON QTG — the neuromachine that represents a quantum leap in artificial intelligence. Four power tiers from 7B to 5.5Q parameters.",
  keywords: "neuromachines, AI, artificial intelligence, NEON QTG, quantum computing, machine learning",
  authors: [{ name: "MagistrTheOne" }],
  creator: "MagistrTheOne",
  publisher: "NEON QTG",
  robots: "index, follow",
  openGraph: {
    title: "NEON QTG: Father of AI | Revolutionary Neuromachines",
    description: "Discover NEON QTG — the neuromachine that represents a quantum leap in artificial intelligence.",
    type: "website",
    locale: "en_US",
    siteName: "NEON QTG",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEON QTG: Father of AI | Revolutionary Neuromachines",
    description: "Discover NEON QTG — the neuromachine that represents a quantum leap in artificial intelligence.",
    creator: "@MagistrTheOne",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
