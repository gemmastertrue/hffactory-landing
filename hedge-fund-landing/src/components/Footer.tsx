"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    budget: "",
    market: "crypto",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for submission logic (e.g., Telegram API)
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          <div id="contact-form">
            <h2 className="text-3xl font-bold mb-6">Получить расчёт стоимости</h2>
            <p className="text-gray-400 mb-8">
              Оставьте заявку, и мы подготовим индивидуальное предложение под ваши задачи.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Имя</label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Telegram</label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.telegram}
                  onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                  placeholder="@username"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Бюджет ($)</label>
                  <input
                    type="text"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="1000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Рынок</label>
                  <select
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                    value={formData.market}
                    onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                  >
                    <option value="crypto">Криптовалюты</option>
                    <option value="forex">Forex</option>
                    <option value="stocks">Акции</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-4"
              >
                Отправить заявку
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: support@tech-hedge.fund</li>
                <li>Telegram: @tech_hedge_support</li>
              </ul>
            </div>
            
            <div className="mt-8 md:mt-0">
              <h3 className="text-xl font-bold mb-4">Документы</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-blue-400">Условия использования</a></li>
                <li><a href="#" className="hover:text-blue-400">Дисклеймер о рисках</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-gray-500">
          <p>© 2024 Tech Hedge Fund. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

