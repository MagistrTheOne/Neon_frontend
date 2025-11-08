import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ModelsSection } from "@/components/models-section";
import { FeaturesSection } from "@/components/features-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export const metadata = {
  title: "NEON QTG: Father of AI | Revolutionary Neuromachines",
  description: "Discover NEON QTG — the neuromachine that represents a quantum leap in artificial intelligence. Four power tiers from 7B to 5.5Q parameters, designed to solve problems beyond human comprehension.",
  keywords: "neuromachines, AI, artificial intelligence, NEON QTG, quantum computing, machine learning, quantum topology, MagistrTheOne",
  authors: [{ name: "MagistrTheOne" }],
  openGraph: {
    title: "NEON QTG: Father of AI | Revolutionary Neuromachines",
    description: "Discover NEON QTG — the neuromachine that represents a quantum leap in artificial intelligence.",
    type: "website",
    locale: "en_US",
    siteName: "NEON QTG",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEON QTG - Father of AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEON QTG: Father of AI | Revolutionary Neuromachines",
    description: "Discover NEON QTG — the neuromachine that represents a quantum leap in artificial intelligence.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ModelsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
