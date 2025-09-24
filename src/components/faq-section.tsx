"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from 'next-intl';

const getFaqData = (t: any) => [
  {
    question: t("faq.q1"),
    answer: t("faq.a1")
  },
  {
    question: t("faq.q2"),
    answer: t("faq.a2")
  },
  {
    question: t("faq.q3"),
    answer: t("faq.a3")
  },
  {
    question: t("faq.q4"),
    answer: t("faq.a4")
  },
  {
    question: t("faq.q5"),
    answer: t("faq.a5")
  },
  {
    question: t("faq.q6"),
    answer: t("faq.a6")
  }
];

export function FAQSection() {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="glass-morphism rounded-2xl p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            {getFaqData(t).map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-b-0">
                <AccordionTrigger className="text-left text-white hover:text-cyan-400 py-4 text-base sm:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm sm:text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
