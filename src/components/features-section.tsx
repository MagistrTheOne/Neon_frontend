"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Target,
  Layers,
  GitBranch,
  Filter,
  BarChart3,
  Atom
} from "lucide-react";
import { useTranslations } from 'next-intl';

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Квантовая топология",
    description: "Использование топологических методов для анализа и фильтрации данных в многомерном пространстве",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Vietoris-Rips комплекс",
    description: "Построение симплициальных комплексов для выявления топологических структур в данных",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Persistence диаграммы",
    description: "Визуализация топологических особенностей через анализ устойчивости гомологий",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Filter className="w-8 h-8" />,
    title: "Noise фильтрация",
    description: "Автоматическое удаление шума через persistence threshold для повышения качества данных",
    color: "from-pink-500 to-red-500"
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Взвешенное проецирование",
    description: "Интеллектуальное проецирование топологических признаков с учетом их важности",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Embedding пространство",
    description: "Создание многомерного пространства представлений для эффективного анализа данных",
    color: "from-orange-500 to-yellow-500"
  }
];

const algorithmSteps = [
  {
    step: 1,
    title: "Построить embedding space",
    description: "X = {|ψ_i⟩}",
    details: "Создание многомерного пространства представлений с использованием квантовых состояний"
  },
  {
    step: 2,
    title: "Вычислить Vietoris-Rips complex",
    description: "Топологический анализ",
    details: "Построение симплициальных комплексов для выявления структурных связей в данных"
  },
  {
    step: 3,
    title: "Рассчитать persistence diagram",
    description: "Анализ устойчивости",
    details: "Визуализация топологических особенностей через анализ устойчивости гомологий"
  },
  {
    step: 4,
    title: "Отфильтровать noise",
    description: "Persistence threshold",
    details: "Автоматическое удаление шума для повышения качества и точности анализа"
  },
  {
    step: 5,
    title: "Взвешенное проецирование",
    description: "Топологические features",
    details: "Интеллектуальное проецирование признаков с учетом их топологической важности"
  }
];

export function FeaturesSection() {
  const t = useTranslations();

  return (
    <section id="features" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">{t("features.title")}</span>
            <br />
            <span className="text-white">ФИЛЬТРАЦИИ</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            {t("features.desc")}
          </p>
        </div>
        
        <Tabs defaultValue="features" className="max-w-5xl mx-auto">
          <TabsList className="glass-morphism grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="features" className="text-sm sm:text-lg py-3 sm:py-4">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {t("features.tab.specs")}
            </TabsTrigger>
            <TabsTrigger value="algorithm" className="text-sm sm:text-lg py-3 sm:py-4">
              <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {t("features.tab.algo")}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="glass-card border-0 hover:scale-105 transition-all duration-500 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  <CardHeader className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="algorithm" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {algorithmSteps.map((step, index) => (
                  <Card 
                    key={step.step}
                    className="glass-card border-0 hover:scale-102 transition-all duration-300 group"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        {/* Step Number */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                            {step.step}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {step.title}
                          </h3>
                          <div className="mb-3">
                            <Badge 
                              variant="outline" 
                              className="glass-morphism text-cyan-400 border-cyan-400/50 px-4 py-1"
                            >
                              {step.description}
                            </Badge>
                          </div>
                          <p className="text-gray-400 leading-relaxed">
                            {step.details}
                          </p>
                        </div>
                        
                        {/* Arrow */}
                        {index < algorithmSteps.length - 1 && (
                          <div className="flex-shrink-0 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center">
                              <svg 
                                className="w-4 h-4 text-gray-400" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Algorithm Summary */}
              <Card className="glass-card border-0 mt-12">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white text-center">
                    <Atom className="w-8 h-8 inline-block mr-3" />
                    {t("features.result")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-gray-300 mb-6">
                    {t("features.result.desc")}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-morphism rounded-2xl p-6">
                      <Database className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                      <h4 className="text-lg font-semibold text-white mb-2">Высокая точность</h4>
                      <p className="text-gray-400 text-sm">99.7% точность фильтрации данных</p>
                    </div>
                    <div className="glass-morphism rounded-2xl p-6">
                      <Network className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <h4 className="text-lg font-semibold text-white mb-2">Быстрая обработка</h4>
                      <p className="text-gray-400 text-sm">В 1000x быстрее традиционных методов</p>
                    </div>
                    <div className="glass-morphism rounded-2xl p-6">
                      <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                      <h4 className="text-lg font-semibold text-white mb-2">Надежность</h4>
                      <p className="text-gray-400 text-sm">Устойчивость к шуму и помехам</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
