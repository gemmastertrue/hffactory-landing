import React from 'react';

export const Disclaimer = () => {
  return (
    <div className="text-xs text-gray-400 mt-4 p-4 border border-red-900/30 rounded bg-red-900/10">
      <p className="text-red-400 font-semibold mb-1">Отказ от ответственности:</p>
      <p>
        Услуги носят технический характер. Не являются инвестиционным консультированием или доверительным управлением.
        Прошлые результаты не гарантируют будущих доходов. Торговля на финансовых рынках сопряжена с рисками.
      </p>
    </div>
  );
};

