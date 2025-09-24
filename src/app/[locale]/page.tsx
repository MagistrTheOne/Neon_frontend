import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ModelsSection } from "@/components/models-section";
import { FeaturesSection } from "@/components/features-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  // Static metadata for each locale
  const metadataByLocale = {
    en: {
      title: "NEON QTG: Father of AI | A new class of neuromachines",
      description: "Revolutionary NEON QTG neuromachines — 4 power tiers from 7B to 5.5Q parameters.",
    },
    ru: {
      title: "NEON QTG: Отец ИИ | Новый вид нейромашин",
      description: "Революционные нейромашины NEON QTG — 4 уровня мощности от 7B до 5.5Q параметров.",
    },
    ae: {
      title: "NEON QTG — Enterprise GenAI for MENA",
      description: "On‑prem/hybrid AI platform engineered for compliance and cost efficiency.",
    },
  };

  const currentMeta = metadataByLocale[locale as keyof typeof metadataByLocale] || metadataByLocale.en;

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: "нейромашины, AI, искусственный интеллект, NEON QTG, MagistrTheOne",
    authors: [{ name: "MagistrTheOne" }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'ru': '/ru',
        'en-AE': '/ae',
      },
    },
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      type: "website",
      locale: locale === 'ae' ? 'en_AE' : locale === 'ru' ? 'ru_RU' : 'en_US',
    },
  };
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ModelsSection />
      <FeaturesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
