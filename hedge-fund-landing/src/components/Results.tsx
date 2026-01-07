"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Disclaimer } from "./Disclaimer";

export const Results = () => {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Результаты и отзывы
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Что говорят клиенты</h3>
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <Quote className="w-6 h-6 text-blue-400 mb-3" />
                <p className="text-gray-300 mb-4 italic">
                  "Отличная инфраструктура. Забыл про постоянные перезагрузки сервера и настройку терминалов. Всё работает как часы."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-600 rounded-full" />
                  <div>
                    <div className="font-bold">Клиент #{i}</div>
                    <div className="text-xs text-gray-500">Алготрейдер</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats & Chart */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Наши показатели</h3>
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-2xl">
              <div className="h-64 mb-6 relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800 flex items-end">
                {/* Simulated Chart */}
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <path
                    d="M0 250 C 50 240, 100 200, 150 210 C 200 220, 250 150, 300 160 C 350 170, 400 100, 450 110 C 500 120, 550 50, 600 60 L 600 256 L 0 256 Z"
                    fill="url(#equity-gradient)"
                    opacity="0.3"
                  />
                  <path
                    d="M0 250 C 50 240, 100 200, 150 210 C 200 220, 250 150, 300 160 C 350 170, 400 100, 450 110 C 500 120, 550 50, 600 60"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                    className="drop-shadow-lg"
                  />
                  <defs>
                    <linearGradient id="equity-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700/30 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime системы</div>
                </div>
                <div className="bg-slate-700/30 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-400">&lt; 15%</div>
                  <div className="text-sm text-gray-400">Средний Drawdown</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Disclaimer />
      </div>
    </section>
  );
};

