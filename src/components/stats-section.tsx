"use client";

import { AnimatedCounter } from "@/components/animated-counter";

const getStats = () => [
  {
    value: 4,
    label: "Power Tiers",
    description: "From Core to Cosmic Scale",
  },
  {
    value: 5.5e12,
    label: "Parameters",
    description: "Maximum configuration",
  },
  {
    value: 50e6,
    label: "GPU Cluster",
    description: "Maximum compute capacity",
  },
  {
    value: 99.2,
    label: "Accuracy",
    description: "Model performance",
    suffix: "%",
  },
];

export function StatsSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black border-t border-white/5 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-white tracking-tight">
            Capabilities
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            The numbers that define the future of artificial intelligence
          </p>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {getStats().map((stat, index) => (
            <div
              key={index}
              className="p-8 lg:p-10 glass-morphism border border-white/10 hover:border-white/20 transition-all duration-300 text-center flex flex-col justify-center"
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-light mb-4 text-white tracking-tight">
                <AnimatedCounter
                  end={stat.value}
                  duration={2500}
                  suffix={stat.suffix || ""}
                />
              </div>
              <h3 className="text-base sm:text-lg font-light text-white mb-2 tracking-wide">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-400 font-light">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
