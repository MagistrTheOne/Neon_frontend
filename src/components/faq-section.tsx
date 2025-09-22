"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  {
    question: "Что такое NEON QTG?",
    answer: "NEON QTG - это новый вид нейромашин, использующих квантовую топологию и продвинутые алгоритмы фильтрации для достижения беспрецедентной производительности в области искусственного интеллекта."
  },
  {
    question: "Какие модели доступны?",
    answer: "Доступны 4 уровня моделей: NEON-QTG-7B (6.2B параметров), NEON-QTG-30B (23.6B параметров), NEON-QTG-100B (100B параметров) и NEON-QTG-5.5Q (5.5Q параметров)."
  },
  {
    question: "Когда будут доступны модели?",
    answer: "NEON-QTG-7B уже готова к продакшену (2025), NEON-QTG-30B планируется на 2025-2026, NEON-QTG-100B на 2026-2027, а NEON-QTG-5.5Q на 2050+."
  },
  {
    question: "Как работает алгоритм фильтрации?",
    answer: "Алгоритм использует построение embedding space, вычисление Vietoris-Rips complex, расчет persistence diagram и фильтрацию noise через persistence threshold с взвешенным проецированием топологических features."
  },
  {
    question: "Какая стоимость моделей?",
    answer: "Стоимость варьируется от $18K для базовой модели до $100T для максимальной конфигурации, в зависимости от уровня мощности и требований к инфраструктуре."
  },
  {
    question: "Как связаться с автором?",
    answer: "Вы можете связаться с MagistrTheOne по email: maxonyushko71@gmail.com или через социальные сети GitHub, LinkedIn и Twitter."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о NEON QTG и нейромашинах
          </p>
        </div>

        <div className="glass-morphism rounded-2xl p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
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
