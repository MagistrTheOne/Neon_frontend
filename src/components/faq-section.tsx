"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is NEON QTG?",
    answer: "NEON QTG is a revolutionary neuromachine platform that represents a new class of AI systems. It features 4 power tiers ranging from 7B to 5.5Q parameters, designed to handle everything from core computational tasks to cosmic-scale operations."
  },
  {
    question: "How does NEON QTG differ from traditional AI models?",
    answer: "Unlike traditional AI models that are limited by hardware constraints and sequential processing, NEON QTG neuromachines operate on a quantum-inspired parallel processing architecture. This allows for unprecedented computational efficiency and problem-solving capabilities."
  },
  {
    question: "What are the power tiers of NEON QTG?",
    answer: "NEON QTG comes in 4 distinct power tiers: Core (7B parameters), Quantum (70B parameters), Transcendent (700B parameters), and Cosmic (5.5Q parameters). Each tier is optimized for specific use cases and computational requirements."
  },
  {
    question: "Is NEON QTG available for commercial use?",
    answer: "NEON QTG is currently in development phase. We are working with select enterprise partners and will announce commercial availability timelines as we progress through testing and optimization phases."
  },
  {
    question: "What makes NEON QTG 'the father of AI'?",
    answer: "NEON QTG represents a fundamental paradigm shift in artificial intelligence. Its quantum-inspired architecture and massive parameter counts enable it to tackle problems that were previously considered impossible, setting the foundation for the next generation of AI systems."
  },
  {
    question: "How much investment is required for NEON QTG development?",
    answer: "The total projected investment for NEON QTG development is $100 quadrillion, distributed across research, development, infrastructure, and deployment phases. This represents the most ambitious AI project in history."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 overflow-hidden bg-black border-t border-white/5">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Everything you need to know about NEON QTG and our revolutionary AI platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-morphism border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-base sm:text-lg font-light text-white pr-4 tracking-tight">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6">
                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-gray-400 mb-4 font-light">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-light text-sm"
          >
            Contact us
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
}
