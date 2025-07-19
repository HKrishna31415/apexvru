import React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div
      className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 flex flex-col items-center text-center opacity-0 animate-fade-in-up group"
      style={{ animationDelay: delay }}
    >
      <div className="h-32 w-32 mb-4 flex items-center justify-center text-sky-400 transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
};