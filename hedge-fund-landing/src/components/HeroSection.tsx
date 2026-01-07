"use client";

import { motion } from "framer-motion";
import { Settings, BarChart3, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const scrollToForm = () => {
    const form = document.getElementById("contact-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Лимитированное предложение: -20% на установку</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ваш личный <span className="text-blue-400">хедж-фонд</span>.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Техническая часть под ключ
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
            Автоматизированная торговая инфраструктура + техсопровождение. 
            <span className="block mt-2 font-semibold text-white">Без управления вашими деньгами.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToForm}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25"
            >
              Рассчитать стоимость
            </button>
            <button 
              onClick={() => window.open('https://t.me/your_telegram', '_blank')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold transition-all backdrop-blur-sm"
            >
              Записаться на консультацию
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-500/20 rounded-full blur-2xl" />
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-8 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <Settings className="w-8 h-8 text-blue-400 mb-2" />
                  <div className="text-sm text-gray-400">Infrastructure</div>
                  <div className="text-lg font-bold text-green-400">Active</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <BarChart3 className="w-8 h-8 text-green-400 mb-2" />
                  <div className="text-sm text-gray-400">Uptime</div>
                  <div className="text-lg font-bold text-white">99.9%</div>
                </div>
              </div>
              <div className="h-48 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-center">
                {/* Simplified Chart Graphic */}
                <svg className="w-full h-full p-4" viewBox="0 0 100 50">
                  <path
                    d="M0 40 Q 25 35 40 20 T 80 10 T 100 5"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 40 Q 25 35 40 20 T 80 10 T 100 5 L 100 50 L 0 50 Z"
                    fill="url(#gradient)"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

