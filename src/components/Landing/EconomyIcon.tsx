
import React from 'react';

export const EconomyIcon: React.FC = () => (
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
    <g stroke="url(#blue-purple-gradient)">
      {/* Arrow */}
      <path d="M50 85 V 15" strokeWidth="8" className="animate-grow" style={{ transformOrigin: 'bottom' }} />
      <path d="M35 30 L 50 15 L 65 30" className="animate-grow" style={{ transformOrigin: 'center', animationDelay: '0.2s' }} />
    </g>
    <g fill="url(#blue-purple-gradient)" stroke="none">
      {/* Floating Coins */}
      <circle cx="35" cy="70" r="5" className="animate-float-up" />
      <circle cx="65" cy="60" r="6" className="animate-float-up" style={{ animationDelay: '0.5s' }} />
      <circle cx="40" cy="45" r="4" className="animate-float-up" style={{ animationDelay: '1.2s' }} />
      <circle cx="70" cy="30" r="5" className="animate-float-up" style={{ animationDelay: '1.8s' }} />
    </g>
  </svg>
);
