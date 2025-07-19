
import React from 'react';
import type { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ title, icon, children, darkBackground }) => {
  const bgColorClass = darkBackground ? 'bg-black border-gray-700' : 'bg-white border-slate-200';
  const textColorClass = darkBackground ? 'text-gray-200' : 'text-black';
  const iconBgClass = darkBackground ? 'bg-gray-800 border-gray-600' : 'bg-white border-black';
  const proseTextColorClass = darkBackground ? 'prose-p:text-gray-200 prose-ul:text-gray-200' : 'prose-p:text-black prose-ul:text-black';

  return (
    <div className={`relative p-8 rounded-2xl shadow-md ${bgColorClass}`}>
      <div className="absolute -top-3 -left-3 w-12 h-12 bg-cyan-400/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-blue-600/10 rounded-full blur-xl"></div>
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full ${iconBgClass}`}>
          <span className={textColorClass}>{icon}</span>
        </div>
        <div className="flex-1">
          <h2 className={`text-2xl font-bold mb-4 ${textColorClass}`}>{title}</h2>
          <div className={`${proseTextColorClass} max-w-none`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;

export {};
