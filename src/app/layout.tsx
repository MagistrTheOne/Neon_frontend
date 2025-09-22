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
  title: "NEON QTG: Father of AI | Новый вид нейромашин",
  description: "Революционные нейромашины NEON QTG - 4 уровня мощности от 7B до 5.5Q параметров. Автор: MagistrTheOne | 2025 | Краснодар",
  keywords: "нейромашины, AI, искусственный интеллект, NEON QTG, MagistrTheOne",
  authors: [{ name: "MagistrTheOne" }],
  openGraph: {
    title: "NEON QTG: Father of AI",
    description: "Новый вид нейромашин - революция в области искусственного интеллекта",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
