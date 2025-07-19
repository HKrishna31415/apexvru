
import React from 'react';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100">
      <div className="flex items-center mb-4 md:mb-6">
        <div className="text-indigo-600 mr-4">{icon}</div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};
