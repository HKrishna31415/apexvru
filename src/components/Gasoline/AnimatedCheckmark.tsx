import React from 'react';

interface AnimatedCheckmarkProps {
  start: boolean;
}

const AnimatedCheckmark: React.FC<AnimatedCheckmarkProps> = ({ start }) => {
  return (
    <svg className="w-6 h-6" viewBox="0 0 52 52">
      <circle 
        className={`transition-stroke duration-500 ease-in-out ${start ? 'stroke-green-500/30' : 'stroke-slate-700'}`}
        cx="26" 
        cy="26" 
        r="25" 
        fill="none" 
        strokeWidth="3" 
      />
      {start && (
        <path 
          className="stroke-green-400"
          strokeDasharray="100" 
          strokeDashoffset="100"
          style={{ animation: 'draw-check 0.6s 0.3s ease-out forwards' }}
          fill="none" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M14 27l8 8 16-16" 
        />
      )}
    </svg>
  );
};

export default AnimatedCheckmark;
