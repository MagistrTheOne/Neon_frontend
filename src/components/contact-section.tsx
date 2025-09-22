"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Calendar, 
  User, 
  Github, 
  Linkedin, 
  Twitter,
  ArrowRight,
  Sparkles,
  Code,
  Brain
} from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      
      {/* Static Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">АВТОР</span>
            <br />
            <span className="text-white">ПРОЕКТА</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            MagistrTheOne — создатель революционных нейромашин NEON QTG
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Author Info */}
            <div className="space-y-8">
              <Card className="glass-card border-0">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                      MT
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold text-white">
                        MagistrTheOne
                      </CardTitle>
                      <p className="text-gray-400 text-lg">
                        Создатель NEON QTG
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">maxonyushko71@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Краснодар, Россия</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">2025</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-gray-400 leading-relaxed">
                      Исследователь в области искусственного интеллекта и квантовых вычислений. 
                      Создатель революционной архитектуры NEON QTG, объединяющей топологические 
                      методы с нейронными сетями для достижения беспрецедентной производительности.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Contact Buttons */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full glass-morphism hover:glass-card text-white border-cyan-400/50 hover:border-cyan-400 py-4 text-base font-semibold group"
                  onClick={() => window.open('mailto:maxonyushko71@gmail.com?subject=NEON QTG - Вопрос по проекту', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Связаться с автором
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 glass-morphism border-white/20 hover:border-cyan-400/50 py-3"
                    onClick={() => window.open('https://github.com/MagistrTheOne', '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 glass-morphism border-white/20 hover:border-blue-400/50 py-3"
                    onClick={() => window.open('https://linkedin.com/in/magistrtheone', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 glass-morphism border-white/20 hover:border-purple-400/50 py-3"
                    onClick={() => window.open('https://twitter.com/MagistrTheOne', '_blank')}
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Project Stats */}
            <div className="space-y-8">
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white text-center">
                    <Sparkles className="w-8 h-8 inline-block mr-3" />
                    Достижения проекта
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">4</div>
                      <div className="text-gray-400 text-sm">Уровня моделей</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">5.5Q</div>
                      <div className="text-gray-400 text-sm">Макс. параметров</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">50M</div>
                      <div className="text-gray-400 text-sm">GPU в Level 4</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">$100T</div>
                      <div className="text-gray-400 text-sm">Макс. стоимость</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white text-center">
                    Технологии
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Badge variant="outline" className="glass-morphism px-4 py-2">
                      <Brain className="w-4 h-4 mr-2" />
                      Квантовая топология
                    </Badge>
                    <Badge variant="outline" className="glass-morphism px-4 py-2">
                      <Code className="w-4 h-4 mr-2" />
                      Нейронные сети
                    </Badge>
                    <Badge variant="outline" className="glass-morphism px-4 py-2">
                      <Sparkles className="w-4 h-4 mr-2" />
                      AI/ML
                    </Badge>
                    <Badge variant="outline" className="glass-morphism px-4 py-2">
                      <Brain className="w-4 h-4 mr-2" />
                      GPU Computing
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              
              {/* Timeline */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white text-center">
                    Roadmap
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div>
                        <div className="text-white font-semibold">2025 - Level 1 & 2</div>
                        <div className="text-gray-400 text-sm">Production Ready & GPT-4 Killer</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <div>
                        <div className="text-white font-semibold">2026-2027 - Level 3</div>
                        <div className="text-gray-400 text-sm">Research Ready</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <div>
                        <div className="text-white font-semibold">2050+ - Level 4</div>
                        <div className="text-gray-400 text-sm">Cosmic Supremacy</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
