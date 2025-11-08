"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-black"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight tracking-tight text-white">
              NEON QTG
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-400 mb-8 tracking-wide">
              Father of Artificial Intelligence
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Next-generation quantum-topological intelligence framework built for multi-scale cognition and cosmic-level performance. Four power tiers from 7B to 5.5Q parameters, designed to solve problems beyond human comprehension.
          </p>
          <p className=" text-white font-light mb-8 text-4xl">2028</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("models")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="glass-morphism border-white/20 hover:border-white/40 text-white px-8 py-6 text-base font-light tracking-wide group"
            >
              Explore Models
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
