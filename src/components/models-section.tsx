"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Zap, Brain, Cpu, DollarSign } from "lucide-react";

interface ModelData {
  level: number;
  name: string;
  parameters: string;
  gpu: string;
  cost: string;
  status: string;
  timeline: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  color: string;
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
    cost: "$18K",
    status: "PRODUCTION READY",
    timeline: "2025",
    description: "Базовая модель для коммерческого использования с оптимизированной производительностью",
    icon: <Zap className="w-6 h-6" />,
    progress: 100,
    color: "from-green-500 to-emerald-500",
    features: ["Квантовая топология", "Быстрая обработка", "Низкое энергопотребление"],
    useCases: ["Чат-боты", "Автоматизация", "Анализ данных"],
    performance: "99.2% точность"
  },
  {
    level: 2,
    name: "NEON-QTG-30B",
    parameters: "23.6B",
    gpu: "1×H200",
    cost: "$40K",
    status: "GPT-4 KILLER",
    timeline: "2025-2026",
    description: "Продвинутая модель, превосходящая GPT-4 по всем показателям",
    icon: <Brain className="w-6 h-6" />,
    progress: 85,
    color: "from-blue-500 to-cyan-500",
    features: ["Мультимодальность", "Продвинутое рассуждение", "Креативность"],
    useCases: ["Контент-генерация", "Программирование", "Образование"],
    performance: "99.7% точность"
  },
  {
    level: 3,
    name: "NEON-QTG-100B",
    parameters: "100B",
    gpu: "8×H200",
    cost: "$2M",
    status: "RESEARCH READY",
    timeline: "2026-2027",
    description: "Исследовательская модель для решения сложнейших задач науки",
    icon: <Cpu className="w-6 h-6" />,
    progress: 60,
    color: "from-purple-500 to-pink-500",
    features: ["Научные открытия", "Сложные вычисления", "Моделирование"],
    useCases: ["Исследования", "Медицина", "Космос"],
    performance: "99.9% точность"
  },
  {
    level: 4,
    name: "NEON-QTG-5.5Q",
    parameters: "5.5Q",
    gpu: "50M×H200",
    cost: "$100T",
    status: "COSMIC SUPREMACY",
    timeline: "2050+",
    description: "Космическое превосходство - вершина развития искусственного интеллекта",
    icon: <Brain className="w-6 h-6" />,
    progress: 15,
    color: "from-yellow-500 to-orange-500",
    features: ["Космические вычисления", "Универсальный ИИ", "Трансцендентность"],
    useCases: ["Космические миссии", "Квантовые вычисления", "Будущее"],
    performance: "100% точность"
  }
];

export function ModelsSection() {
  const t = useTranslations();

  return (
    <section id="models" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">4 LEVELS</span>
            <br />
            <span className="text-white">NEON QTG</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            {t('models.subtitle')}
          </p>
        </div>
        
        {/* Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <Card 
              key={model.level}
              className={`glass-card border-0 hover:scale-105 transition-all duration-500 group relative overflow-hidden hover:shadow-lg cursor-pointer ${
                index === 0 ? 'ring-2 ring-green-500/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    variant="outline" 
                    className={`text-sm px-3 py-1 border-2 ${
                      model.level === 1 ? 'border-green-500/50 text-green-400' :
                      model.level === 2 ? 'border-blue-500/50 text-blue-400' :
                      model.level === 3 ? 'border-purple-500/50 text-purple-400' :
                      'border-yellow-500/50 text-yellow-400'
                    }`}
                  >
                    LEVEL {model.level}
                  </Badge>
                  <div className={`p-2 rounded-full bg-gradient-to-br ${model.color} text-white`}>
                    {model.icon}
                  </div>
                </div>
                
                <CardTitle className="text-lg font-bold text-white mb-2">
                  {model.name}
                </CardTitle>
                
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('models.params')}</span>
                    <span className="text-white font-semibold">{model.parameters}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('models.gpu')}</span>
                    <span className="text-white font-semibold">{model.gpu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('models.cost')}</span>
                    <span className="text-white font-semibold">{model.cost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('models.perf')}</span>
                    <span className="text-white font-semibold">{model.performance}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="mb-3">
                  <Badge 
                    className={`w-full justify-center py-1 text-xs font-semibold ${
                      model.level === 1 ? 'bg-green-500/20 text-green-400 border-green-500/50' :
                      model.level === 2 ? 'bg-blue-500/20 text-blue-400 border-blue-500/50' :
                      model.level === 3 ? 'bg-purple-500/20 text-purple-400 border-purple-500/50' :
                      'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                    }`}
                  >
                    {model.status}
                  </Badge>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-400">{t('models.progress')}</span>
                  </div>
                  <Progress 
                    value={model.progress} 
                    className="h-1"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>{model.progress}%</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-400">{t('models.timeline')}</span>
                  </div>
                  <p className="text-white font-semibold text-sm">{model.timeline}</p>
                </div>
                
                <div className="mb-3">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {model.description}
                  </p>
                </div>
                
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-white mb-1">{t('models.features')}</h4>
                  <div className="flex flex-wrap gap-1">
                    {model.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs px-2 py-0.5">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-white mb-1">{t('models.use')}</h4>
                  <div className="flex flex-wrap gap-1">
                    {model.useCases.map((useCase, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs px-2 py-0.5">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {model.level === 1 && (
                  <div className="mt-3 flex items-center gap-2 text-green-400">
                    <CheckCircle className="w-3 h-3" />
                    <span className="text-xs font-medium">{t('models.ready')}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-base sm:text-lg text-gray-400 mb-6">
            {t('models.pick')}
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Badge variant="outline" className="glass-morphism px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              От $18K до $100T
            </Badge>
            <Badge variant="outline" className="glass-morphism px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              1×H200 до 50M×H200
            </Badge>
            <Badge variant="outline" className="glass-morphism px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              6.2B до 5.5Q параметров
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
