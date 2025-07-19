import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-slate-800 p-3 rounded-full">
          {icon}
        </div>
        <h4 className="text-xl font-bold text-white">{title}</h4>
      </div>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};