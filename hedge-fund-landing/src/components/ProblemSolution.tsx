"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    "Ручная торговля отнимает время",
    "Сложная настройка роботов и серверов",
    "Постоянные сбои и необходимость доработки",
    "Нет понимания, почему стратегия перестала работать",
  ];

  const solutions = [
    "Готовая инфраструктура \"под ключ\"",
    "Автоматический мониторинг 24/7",
    "Регулярная оптимизация роботов",
    "Понятные отчёты и техподдержка",
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-red-900/10 border border-red-900/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8" />
              Проблемы трейдера
            </h3>
            <ul className="space-y-4">
              {problems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-900/10 border border-green-900/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8" />
              Наше решение
            </h3>
            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

