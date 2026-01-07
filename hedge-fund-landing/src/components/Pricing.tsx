"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Disclaimer } from "./Disclaimer";

const plans = [
  {
    name: "СТАРТОВЫЙ ЗАВОД",
    price: "$299",
    period: "разово",
    features: ["Установка", "Базовые роботы", "Бектесты"],
    recommended: false,
  },
  {
    name: "ПРО",
    price: "$149",
    period: "/мес",
    features: ["Всё из Старт", "Мониторинг 24/7", "Техподдержка"],
    recommended: true,
  },
  {
    name: "ПРЕМИУМ",
    price: "$299",
    period: "/мес",
    features: ["Всё из Про", "Полная оптимизация", "Кастомные роботы", "Индивидуальный дашборд"],
    recommended: false,
  },
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Что входит в услугу
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                plan.recommended 
                  ? "bg-blue-900/20 border-blue-500/50 shadow-xl shadow-blue-500/10" 
                  : "bg-slate-800/50 border-slate-700"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">
                  Популярный выбор
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                plan.recommended
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-slate-700 hover:bg-slate-600 text-white"
              }`}>
                Заказать
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-12">
           <Disclaimer />
        </div>
      </div>
    </section>
  );
};

