
import React from 'react';

export const EnvironmentIcon: React.FC = () => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    stroke="currentColor"
    fill="none"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <g className="animate-grow" style={{ transformOrigin: 'center' }}>
      {/* Outer circle */}
      <circle cx="50" cy="50" r="40" className="text-emerald-400/40 animate-pulse-ring" />

      {/* Leaf */}
      <path
        d="M50,80 C 30,70 30,40 50,20 C 70,40 70,70 50,80 Z"
        className="text-emerald-400/80 fill-current"
        stroke="none"
      />
       {/* Stem */}
      <path d="M50,80 V 50" className="text-emerald-300"/>
    </g>
  </svg>
);
