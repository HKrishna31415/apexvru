import React from 'react';



export const EfficiencyIcon = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full overflow-visible"
      stroke="currentColor"
      fill="none"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="blue-purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>

      <defs>
        <linearGradient id="shimmer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <mask id="shimmer-mask">
          <rect x="0" y="0" width="100" height="100" fill="url(#shimmer-gradient)" className="animate-shine" style={{ transform: 'translateX(-100%)' }} />
        </mask>
      </defs>
      <g mask="url(#shimmer-mask)">
        <circle cx="50" cy="50" r="40" stroke="url(#blue-purple-gradient)" />
        <path d="M30 50 L45 65 L70 35" stroke="url(#blue-purple-gradient)" />
      </g>
    </svg>
  );
};
