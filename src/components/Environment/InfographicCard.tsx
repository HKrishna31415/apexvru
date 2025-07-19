import React, { useRef } from 'react';
import type { Benefit } from '../../types';
import { useOnScreen } from '../../hooks/useOnScreen';

interface InfographicCardProps {
  benefit: Benefit;
  index: number;
}

const InfographicCard: React.FC<InfographicCardProps> = ({ benefit, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const delay = index * 100;

  return (
    <div
      ref={ref}
      className={`bg-slate-800 p-8 rounded-xl border border-slate-700 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/50 ${isVisible ? 'opacity-100 translate-y-0 [transform:rotateX(0deg)]' : 'opacity-0 translate-y-10 [transform:rotateX(-20deg)]'}`}
      style={{ transitionDelay: `${delay}ms`, transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-900/50 text-emerald-400 mb-6">
        {benefit.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
      <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
    </div>
  );
};

export default InfographicCard;