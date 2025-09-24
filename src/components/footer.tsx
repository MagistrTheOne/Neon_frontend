"use client";

import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Calendar, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  <span className="gradient-text">NEON</span>
                  <span className="text-white"> QTG</span>
                </h3>
                <p className="text-gray-400 text-lg">
                  Father of AI
                </p>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Революционные нейромашины нового поколения. 
                Будущее искусственного интеллекта уже здесь.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Контакты</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-400">maxonyushko71@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">Краснодар, Россия</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">© 2025 MagistrTheOne</span>
                </div>
              </div>
            </div>
            
            {/* Project Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Проект</h4>
              <div className="space-y-3">
                <Badge variant="outline" className="glass-morphism w-full justify-start">
                  4 уровня нейромашин
                </Badge>
                <Badge variant="outline" className="glass-morphism w-full justify-start">
                  От 7B до 5.5Q параметров
                </Badge>
                <Badge variant="outline" className="glass-morphism w-full justify-start">
                  Квантовая топология
                </Badge>
                <Badge variant="outline" className="glass-morphism w-full justify-start">
                  Космическое превосходство
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-white/10 mb-8"></div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-2">
                Создано с <Heart className="w-4 h-4 inline-block text-red-500 mx-1" /> 
                MagistrTheOne в Краснодаре
              </p>
              <p className="text-sm text-gray-500">
                NEON QTG — революция в области искусственного интеллекта
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <Badge variant="outline" className="glass-morphism text-xs sm:text-sm">
                Production Ready
              </Badge>
              <Badge variant="outline" className="glass-morphism text-xs sm:text-sm">
                GPT-4 Killer
              </Badge>
              <Badge variant="outline" className="glass-morphism text-xs sm:text-sm">
                Research Ready
              </Badge>
              <Badge variant="outline" className="glass-morphism text-xs sm:text-sm">
                Cosmic Supremacy
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
