import React, { useState, useEffect } from 'react';
import { Play, RotateCw } from './Icons';

type AnimationStep = 'idle' | 'inlet' | 'separation' | 'postSeparation' | 'condensation' | 'return' | 'complete';

export const InteractiveDiagram: React.FC = () => {
  const [step, setStep] = useState<AnimationStep>('idle');

  const stepDurations = {
    idle: 0,
    inlet: 2000,
    separation: 2500,
    postSeparation: 2000,
    condensation: 2500,
    return: 2000,
    complete: 0,
  };
  
  const isAnimating = step !== 'idle' && step !== 'complete';

  useEffect(() => {
    if (!isAnimating) return;

    const sequence: AnimationStep[] = ['inlet', 'separation', 'postSeparation', 'condensation', 'return', 'complete'];
    const currentStepIndex = sequence.indexOf(step);
    
    if (currentStepIndex === -1 || currentStepIndex === sequence.length - 1) return;

    const nextStep = sequence[currentStepIndex + 1];
    const timer = setTimeout(() => {
      setStep(nextStep);
    }, stepDurations[step]);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, isAnimating]);


  const startAnimation = () => {
    if (!isAnimating) {
      setStep('inlet');
    }
  };

  const resetAnimation = () => {
    setStep('idle');
  };

  const getPipeVisuals = (activeSteps: AnimationStep[], vaporType: 'dirty' | 'clean' | 'liquid', elementType: 'path' | 'particle') => {
      let colorClass = '';
      const baseColor = elementType === 'path' ? 'stroke-white' : 'fill-white';
      
      switch(vaporType) {
          case 'dirty': colorClass = elementType === 'path' ? 'stroke-yellow-400 text-yellow-400' : 'fill-yellow-400 text-yellow-400'; break;
          case 'clean': colorClass = elementType === 'path' ? 'stroke-indigo-400 text-indigo-400' : 'fill-indigo-400 text-indigo-400'; break;
          case 'liquid': colorClass = elementType === 'path' ? 'stroke-purple-500 text-purple-500' : 'fill-purple-500 text-purple-500'; break;
      }

      if (activeSteps.includes(step)) {
          return `${colorClass} glow`;
      }
      return `${baseColor}`;
  };


  return (
    <section className="p-6 md:p-8 rounded-2xl shadow-lg border border-white bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-black">How It Works: An Animated View</h2>
        <div className="flex space-x-2">
          <button
            onClick={startAnimation}
            disabled={isAnimating}
            className="flex items-center px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
          >
            <Play className="mr-2" /> Start
          </button>
          <button
            onClick={resetAnimation}
            className="flex items-center px-4 py-2 bg-slate-500 text-white font-semibold rounded-lg shadow-md hover:bg-slate-600 transition-colors"
          >
            <RotateCw className="mr-2" /> Reset
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg flex justify-center items-center">
        <svg viewBox="0 0 450 250" className="w-full h-auto">
          {/* Legend */}
          <g transform="translate(320 15)">
            <circle cx="0" cy="0" r="4" fill="#FBBF24" />
            <text x="10" y="4" className="text-[0.6rem] fill-black">VOC Vapor (Retentate)</text>
            <circle cx="0" cy="15" r="4" fill="#6366f1" />
            <text x="10" y="19" className="text-[0.6rem] fill-black">Clean Air (Permeate)</text>
            <circle cx="0" cy="30" r="4" fill="#A855F7" />
            <text x="10" y="34" className="text-[0.6rem] fill-black">Liquid (Condensate)</text>
          </g>

          {/* Pipes */}
          <path d="M20 120 h60" strokeWidth="10" strokeLinecap="round" className={`transition-all duration-500 ${getPipeVisuals(['inlet', 'separation'], 'dirty', 'path')}`} />
          <path d="M120 70 v-30" strokeWidth="10" strokeLinecap="round" className={`transition-all duration-500 ${getPipeVisuals(['postSeparation'], 'clean', 'path')}`} />
          <path d="M160 120 h40" strokeWidth="10" strokeLinecap="round" className={`transition-all duration-500 ${getPipeVisuals(['postSeparation', 'condensation'], 'dirty', 'path')}`} />
          <path d="M240 180 v23 h60" strokeWidth="10" strokeLinecap="round" className={`transition-all duration-500 ${getPipeVisuals(['return'], 'liquid', 'path')}`} />

          {/* Components */}
          <text x="10" y="105" className="text-sm fill-black font-semibold">Vapor Inlet</text>
          
          {/* Membrane Unit */}
          <g>
            <rect x="80" y="70" width="80" height="100" rx="8" fill="#ffffff" stroke="#475569" strokeWidth="2" />
            <path d="M120 70 v 100" stroke="#64748b" strokeDasharray="4 4" strokeWidth="2" />
            <text x="70" y="60" className="text-sm fill-black font-semibold">Membrane Unit</text>
          </g>

          {/* Air Vent */}
          <g>
            <path d="M120 40 v-10 h-10 l10 -10 l10 10 h-10" strokeWidth="2" stroke="#6366f1" fill="none" opacity={step === 'postSeparation' ? 1 : 0.3} />
            <text x="90" y="15" className="text-xs fill-black font-semibold">Air Vent</text>
          </g>

          {/* Condenser */}
          <g>
            <rect x="200" y="70" width="80" height="110" rx="8" fill="#ffffff" stroke="#0ea5e9" strokeWidth="2" />
            <path d="M220 85 c 0 15 20 15 20 30 s -20 15 -20 30" stroke="#0ea5e9" strokeWidth="2.5" fill="none" />
            <path d="M220 85 q 15 20 0 40 t 0 40" stroke="#60a5fa" strokeWidth="2" fill="none" className="opacity-0"/>
             <text x="210" y="60" className="text-sm fill-black font-semibold">Condenser</text>
            <path d="M240 90 a15 10 0 0 1 0 20" stroke="#3b82f6" strokeWidth="2" fill="none" opacity={step === 'condensation' ? 1 : 0} >
                <animateTransform attributeName="transform" type="rotate" from="0 240 120" to="360 240 120" dur="2s" repeatCount="indefinite" />
            </path>
          </g>
          
          {/* Storage Tank */}
          <g>
            <path d="M300 203 V 225 a 30 8 0 0 0 60 0 V 203" fill="#ffffff" stroke="#475569" strokeWidth="2" />
            <ellipse cx="330" cy="203" rx="30" ry="8" fill="#ffffff" stroke="#475569" strokeWidth="2" />
            <path d="M305 220 a 25 5 0 0 0 50 0 v 0 a 25 5 0 0 0 -50 0 z" fill="#a855f7" fillOpacity="0.7" transform-origin="center"
              style={{ transform: (step === 'return' || step === 'complete') ? 'scaleY(0.8)' : 'scaleY(0)', transformBox: 'fill-box', transition: 'transform 1s ease-in-out' }}
            />
            <text x="295" y="245" className="text-sm fill-black font-semibold">Storage Tank</text>
          </g>

          {/* Animated Particles */}
          <g className={`transition-opacity duration-500 ${['inlet'].includes(step) ? 'opacity-100' : 'opacity-0'}`}>
            <circle cx="20" cy="120" r="3" className={getPipeVisuals(['inlet'], 'dirty', 'particle')}>
              <animateMotion dur="2s" begin="0s" fill="freeze" path="M0,0 h60" />
            </circle>
          </g>
          <g className={`transition-opacity duration-500 ${['postSeparation'].includes(step) ? 'opacity-100' : 'opacity-0'}`}>
            <circle cx="120" cy="70" r="3" className={getPipeVisuals(['postSeparation'], 'clean', 'particle')}>
              <animateMotion dur="2s" begin="0s" fill="freeze" path="M0,0 v-30" />
            </circle>
            <circle cx="160" cy="120" r="3" className={getPipeVisuals(['postSeparation'], 'dirty', 'particle')}>
              <animateMotion dur="2s" begin="0s" fill="freeze" path="M0,0 h40" />
            </circle>
          </g>
          <g className={`transition-opacity duration-500 ${['return'].includes(step) ? 'opacity-100' : 'opacity-0'}`}>
            <circle cx="240" cy="180" r="3" className={getPipeVisuals(['return'], 'liquid', 'particle')}>
              <animateMotion dur="2s" begin="0s" fill="freeze" path="M0,0 v23 h60" />
            </circle>
          </g>
        </svg>
      </div>
    </section>
  );
};

const style = document.createElement('style');
style.innerHTML = `
  @keyframes glow-animation {
    0% { filter: drop-shadow(0 0 2px currentColor); }
    50% { filter: drop-shadow(0 0 8px currentColor); }
    100% { filter: drop-shadow(0 0 2px currentColor); }
  }
  .glow {
    animation: glow-animation 2s infinite ease-in-out;
  }
`;
document.head.appendChild(style);