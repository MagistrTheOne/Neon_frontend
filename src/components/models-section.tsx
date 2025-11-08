"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ModelData {
  level: number;
  name: string;
  parameters: string;
  gpu: string;
  status: string;
  timeline: string;
  description: string;
  features: string[];
  useCases: string[];
  performance: string;
}

const models: ModelData[] = [
  {
    level: 1,
    name: "NEON-QTG-7B",
    parameters: "6.2B",
    gpu: "1×H200",
    status: "Production Ready",
    timeline: "2025",
    description:
      "Entry-level production model optimized for commercial deployment and efficiency.",
    features: ["Quantum Topology", "Fast Inference", "Energy Efficient"],
    useCases: ["Chatbots", "Automation", "Data Analytics"],
    performance: "99.2% accuracy",
  },
  {
    level: 2,
    name: "NEON-QTG-30B",
    parameters: "23.6B",
    gpu: "1×H200",
    status: "GPT-4 Benchmark Surpassed",
    timeline: "2025–2026",
    description:
      "Advanced multimodal model surpassing GPT-4 benchmarks with superior reasoning and creativity.",
    features: ["Multimodal Reasoning", "Context Expansion", "Creativity"],
    useCases: ["Content Generation", "Code", "Education"],
    performance: "99.7% accuracy",
  },
  {
    level: 3,
    name: "NEON-QTG-100B",
    parameters: "100B",
    gpu: "8×H200",
    status: "Research Ready",
    timeline: "2026–2027",
    description:
      "Research-grade foundation model designed for scientific computation and high-dimensional modeling.",
    features: ["Scientific Modeling", "Complex Reasoning", "Quantum Simulation"],
    useCases: ["Research", "Healthcare", "Aerospace"],
    performance: "99.9% accuracy",
  },
  {
    level: 4,
    name: "NEON-QTG-5.5Q",
    parameters: "5.5Q",
    gpu: "50M×H200",
    status: "Cosmic Supremacy",
    timeline: "2050+",
    description:
      "The final evolution — a universal quantum intelligence enabling interstellar computation.",
    features: ["Cosmic Computation", "Universal AGI", "Transcendence"],
    useCases: ["Quantum Research", "Cosmic Missions", "Next-Gen AI"],
    performance: "100% accuracy",
  },
];

export function ModelsSection() {
  return (
    <section
      id="models"
      className="relative w-full py-24 bg-black text-white overflow-hidden border-t border-white/5"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-white tracking-tight">
            Models
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Quantum-topological intelligence models built for every scale — from production systems to cosmic computation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {models.map((model) => (
            <Card
              key={model.level}
              className="glass-morphism border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-light text-gray-400 tracking-wider uppercase">
                    Level {model.level}
                  </span>
                </div>
                <CardTitle className="text-xl font-light text-white mb-2 tracking-tight">
                  {model.name}
                </CardTitle>
                <p className="text-sm font-light text-gray-400 mb-4">
                  {model.status}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-light">Parameters</span>
                    <span className="text-white font-light">{model.parameters}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-light">GPU</span>
                    <span className="text-white font-light">{model.gpu}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-light">Performance</span>
                    <span className="text-white font-light">{model.performance}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-light">Timeline</span>
                    <span className="text-white font-light">{model.timeline}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-300 leading-relaxed font-light mb-4">
                    {model.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-light text-gray-400 mb-2 uppercase tracking-wider">
                      Features
                    </h4>
                    <ul className="space-y-1">
                      {model.features.map((f, i) => (
                        <li key={i} className="text-sm text-gray-300 font-light">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-light text-gray-400 mb-2 uppercase tracking-wider">
                      Applications
                    </h4>
                    <ul className="space-y-1">
                      {model.useCases.map((u, i) => (
                        <li key={i} className="text-sm text-gray-300 font-light">
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
