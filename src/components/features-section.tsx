"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Quantum Topology",
    desc: "Advanced quantum embeddings revealing hidden geometric patterns.",
  },
  {
    title: "Vietoris–Rips Complex",
    desc: "High-dimensional structure mapping through simplicial geometry.",
  },
  {
    title: "Persistence Diagrams",
    desc: "Stability analysis of topological features across data manifolds.",
  },
  {
    title: "Weighted Projection",
    desc: "Feature prioritization based on geometric significance.",
  },
  {
    title: "Embedding Space",
    desc: "Optimized latent spaces for adaptive multimodal learning.",
  },
  {
    title: "Construct Embedding Space",
    desc: "ψ-space representation capturing multidimensional semantics.",
  },
  {
    title: "Compute Vietoris–Rips Complex",
    desc: "Topological clustering through simplicial connection graphs.",
  },
  {
    title: "Generate Persistence Diagrams",
    desc: "Track feature lifetimes to identify stable geometric invariants.",
  },
  {
    title: "Apply Weighted Projection",
    desc: "Project stable features into compressed quantum manifold.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative w-full py-24 bg-black text-white overflow-hidden border-t border-white/5"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-white tracking-tight">
            Quantum-Topological Engine
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Core filtration and structural analysis module powering future AI models
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card
              key={i}
              className="glass-morphism border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-lg font-light text-white mb-2 tracking-tight">
                  {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {f.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
