"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-24 bg-black text-white border-t border-white/5"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-white tracking-tight">
            Contact
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Collaborations, research inquiries, and partnership opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <Card className="glass-morphism border border-white/10">
            <CardHeader>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl font-light">
                  MT
                </div>
                <div>
                  <CardTitle className="text-2xl font-light text-white tracking-tight">
                    MagistrTheOne
                  </CardTitle>
                  <p className="text-gray-400 text-sm font-light">
                    AI Architect & Founder, NULLXES
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300 text-sm font-light">
                    maxonyushko71@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300 text-sm font-light">Krasnodar, Russia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300 text-sm font-light">2025</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  Researcher in quantum computing and neural architectures. Exploring new intersections of topological mathematics and generative AI systems to redefine computational intelligence.
                </p>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="w-full glass-morphism border-white/20 hover:border-white/40 py-4 text-white font-light tracking-wide group"
                onClick={() =>
                  window.open(
                    "mailto:maxonyushko71@gmail.com?subject=Inquiry%20-%20NULLXES%20AI%20Project",
                    "_blank"
                  )
                }
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Directly
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 glass-morphism border-white/10 hover:border-white/20 py-3 font-light"
                  onClick={() =>
                    window.open("https://github.com/MagistrTheOne", "_blank")
                  }
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 glass-morphism border-white/10 hover:border-white/20 py-3 font-light"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/magistrtheone",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 glass-morphism border-white/10 hover:border-white/20 py-3 font-light"
                  onClick={() =>
                    window.open("https://twitter.com/MagistrTheOne", "_blank")
                  }
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="glass-morphism border border-white/10">
              <CardHeader>
                <CardTitle className="text-xl font-light text-white text-center tracking-tight">
                  Key Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-light text-white mb-1">4</div>
                    <p className="text-gray-400 text-sm font-light">Model Levels</p>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-white mb-1">5.5Q</div>
                    <p className="text-gray-400 text-sm font-light">Parameters</p>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-white mb-1">50M</div>
                    <p className="text-gray-400 text-sm font-light">GPUs in L4 Cluster</p>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-white mb-1">99.2%</div>
                    <p className="text-gray-400 text-sm font-light">Accuracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-morphism border border-white/10">
              <CardHeader>
                <CardTitle className="text-xl font-light text-white text-center tracking-tight">
                  Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                  <div>
                    <div className="text-white font-light text-sm">2025 – Level 1–2</div>
                    <div className="text-gray-400 text-xs font-light">
                      Production-grade & GPT-4 benchmark surpassed
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                  <div>
                    <div className="text-white font-light text-sm">2026–2027 – Level 3</div>
                    <div className="text-gray-400 text-xs font-light">Research-ready</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                  <div>
                    <div className="text-white font-light text-sm">2050+ – Level 4</div>
                    <div className="text-gray-400 text-xs font-light">
                      Cosmic-scale computation
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
