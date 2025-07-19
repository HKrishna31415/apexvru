import React from 'react';
import '../../styles/icon-animation.css';

// Path for the heartbeat line. Estimated length is ~90 units.
const heartbeatPath = "M20 55 H 35 L 43 45 L 51 65 L 59 50 H 80";

export const UptimeIcon: React.FC = () => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full overflow-visible"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="blue-purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#A78BFA" />
      </linearGradient>
    </defs>
    <g 
      className="text-indigo-400" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Shield Outline */}
      <path
        d="M50 10 L90 30 V 60 C 90 80, 50 100, 50 100 C 50 100, 10 80, 10 60 V 30 Z"
        stroke="url(#blue-purple-gradient)"
        className="opacity-30"
      />
      
      {/* Faint background line to show the path */}
      <path d={heartbeatPath} className="opacity-20" />

      {/* Animated, scrolling heartbeat pulse */}
      <path d={heartbeatPath} className="animate-scroll-line" />
    </g>
  </svg>
);
