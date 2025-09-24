"use client";

import { AnimatedCounter } from "@/components/animated-counter";
import { useTranslations } from 'next-intl';

const getStats = (t: any) => [
  {
    value: 4,
    label: t("stats.powers"),
    description: "От базового до космического"
  },
  {
    value: 5500000000000,
    label: t("stats.params"),
    description: "Максимальная конфигурация"
  },
  {
    value: 100000000000000,
    label: t("stats.cost"),
    description: "Инвестиции в будущее"
  },
  {
    value: 99.2,
    label: t("stats.acc"),
    description: "Производительность моделей"
  }
];

export function StatsSection() {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("stats.title")}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t("stats.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {getStats(t).map((stat, index) => (
            <div 
              key={index}
              className="glass-morphism p-6 sm:p-8 rounded-2xl text-center hover:glass-card transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter 
                    end={stat.value} 
                    duration={2500}
                    suffix={stat.label.includes("%") ? "%" : ""}
                    className="gradient-text"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
