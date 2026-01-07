"use client";

import { motion } from "framer-motion";
import { ClipboardList, Code2, Server, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Бриф и анализ",
    description: "Изучаем ваши задачи и требования к торговле",
  },
  {
    icon: Code2,
    title: "Проектирование",
    description: "Разработка архитектуры и бектесты стратегий",
  },
  {
    icon: Server,
    title: "Установка",
    description: "Развертывание на ваших счетах и серверах",
  },
  {
    icon: Rocket,
    title: "Запуск",
    description: "Старт торговли и постоянное техсопровождение",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Как это работает
        </h2>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-blue-900/20">
                <step.icon className="w-10 h-10 text-blue-400" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-sm border-4 border-slate-900">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

