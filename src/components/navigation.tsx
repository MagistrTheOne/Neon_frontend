"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { id: "hero", label: "Главная" },
  { id: "models", label: "Модели" },
  { id: "features", label: "Характеристики" },
  { id: "contact", label: "Контакты" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Определяем активную секцию
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass-morphism backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white font-bold text-lg hover:text-cyan-400 transition-colors"
            >
              NEON QTG
            </button>
          </div>

          {/* Навигационные ссылки */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    activeSection === item.id
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-400"
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CTA кнопка */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="glass-morphism hover:glass-card text-white border-cyan-400/50 hover:border-cyan-400"
            >
              Связаться
            </Button>
          </div>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-cyan-400"
            >
              Меню
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
