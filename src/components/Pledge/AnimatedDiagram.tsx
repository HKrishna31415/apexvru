import React, { useState, useEffect } from 'react';


const AnimatedDiagram: React.FC = () => {
  const [step, setStep] = useState(0);
  const [vruAtStartOfStep0, setVruAtStartOfStep0] = useState(true);
  const totalSteps = 4;
  const stepDuration = 5000; // ms per step

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % totalSteps);
    }, stepDuration);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    // This effect handles the animation for step 0
    if (step === 0) {
      setVruAtStartOfStep0(true); // Reset to start position
      const timer = setTimeout(() => {
        setVruAtStartOfStep0(false); // Trigger animation to end position
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [step]);


  const getStepIndicator = (s: number) => {
    const isActive = step === s;
    const isPast = step > s || (step === 0 && s === totalSteps - 1);
    return `w-1/4 h-2 rounded-full transition-all duration-500 ${isActive ? 'bg-indigo-400' : isPast ? 'bg-indigo-800' : 'bg-slate-600'}`;
  }

  const stepDescriptions = [
    "Step 1: We provide and install our VRU at your site, free of charge.",
    "Step 2: The VRU is placed at the center of operations to capture emissions.",
    "Step 3: Captured emissions are converted into a valuable new revenue stream.",
    "Step 4: We share the success. You get a new profit stream, and we get paid."
  ];
  
  const particleCount = 20;

  return (
    <div className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 md:p-8 flex flex-col">
      <div className="w-full h-4 rounded-full flex items-center justify-center space-x-2 mb-4">
        {[0, 1, 2, 3].map(s => <div key={s} className={getStepIndicator(s)} />)}
      </div>
      <div className="text-center h-12 mb-4">
        <p className="text-indigo-200 transition-opacity duration-500">{stepDescriptions[step]}</p>
      </div>

      <div className="relative flex-grow w-full min-h-[350px] md:min-h-[400px]">
        {/* === STATIC NODES === */}
        <div className="absolute bottom-0 left-4 md:left-10 flex flex-col items-center w-24 md:w-32">
          <div className="p-4 bg-slate-700 rounded-full border-2 border-slate-600">

          </div>
          <span className="text-blue-400">APEX Energy</span>
        </div>
        <div className="absolute bottom-0 right-4 md:right-10 flex flex-col items-center w-24 md:w-32">
          <div className="p-4 bg-slate-700 rounded-full border-2 border-slate-600">

          </div>
          <span className="mt-2 text-lg font-bold text-center">Your Site</span>
        </div>

        {/* === DYNAMIC ELEMENTS === */}

        {/* 1. VRU Icon - single source of truth for position and visibility */}
        <div
          className={`absolute transition-all ease-in-out
            ${step === 0 ? 'duration-[3000ms]' : 'duration-1000'}
            ${step >= 1 ? 'top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'top-1/3'}
            ${step === 0 ? (vruAtStartOfStep0 ? 'left-[15%]' : 'left-1/2 -translate-x-1/2') : ''}
          `}
        >

        </div>

        {/* 2. Emissions for step 1 */}
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${step === 1 ? 'opacity-100' : 'opacity-0'}`}>

        </div>
        
        {/* 3. Value Generation for step 2 */}
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>

        </div>
        
        {/* 4. Particle animation for step 3 */}
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10 pointer-events-none`}>
            {/* Conditionally render particles only when step is 3 to re-trigger animation */}
            {step === 3 && Array.from({ length: particleCount }).map((_, i) => (
              <React.Fragment key={i}>
                {/* To APEX */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full"
                     style={{ animation: `travel-particle-apex 2s ease-in forwards`, animationDelay: `${i * 0.1}s` }} />
                {/* To Client */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"
                     style={{ animation: `travel-particle-client 2s ease-in forwards`, animationDelay: `${i * 0.1}s` }} />
              </React.Fragment>
            ))}
            <div className={`absolute w-full bottom-32 transition-opacity duration-500 ${step === 3 ? 'opacity-100' : 'opacity-0'}`}>
                <p className="absolute bottom-0 left-4 md:left-12 font-semibold text-blue-300 whitespace-nowrap">Our Shared Profit</p>
                <p className="absolute bottom-0 right-2 md:right-8 font-semibold text-pink-300 whitespace-nowrap">New Revenue Stream</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedDiagram;