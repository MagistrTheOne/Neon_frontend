"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GradientButton } from "@/components/gradient-button";
import { NeonText } from "@/components/neon-text";
import { ArrowRight, Zap, Brain, Cpu } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      
      {/* Static Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <Badge 
              variant="outline" 
              className="glass-morphism text-cyan-400 border-cyan-400/50 px-6 py-2 text-lg font-medium"
            >
              <Zap className="w-5 h-5 mr-2" />
              Революция в ИИ
            </Badge>
          </div>
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <NeonText variant="cyan" className="gradient-text">NEON</NeonText>
            <br />
            <span className="text-white">QTG</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-300 mb-6">
            Father of AI
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Новый вид нейромашин с 4 уровнями мощности — от 7B до 5.5Q параметров. 
            Будущее искусственного интеллекта уже здесь.
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            <div className="glass-card rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 hover:glass-morphism transition-all duration-300 group cursor-pointer">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <span className="text-xs sm:text-sm font-medium group-hover:text-white transition-colors">Квантовая топология</span>
            </div>
            <div className="glass-card rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 hover:glass-morphism transition-all duration-300 group cursor-pointer">
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-xs sm:text-sm font-medium group-hover:text-white transition-colors">Мульти-GPU архитектура</span>
            </div>
            <div className="glass-card rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 hover:glass-morphism transition-all duration-300 group cursor-pointer">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <span className="text-xs sm:text-sm font-medium group-hover:text-white transition-colors">Космическое превосходство</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <GradientButton 
            size="lg" 
            variant="primary"
            onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}
            className="group"
          >
            Исследовать модели
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </GradientButton>
        </div>
      </div>
      
    </section>
  );
}
