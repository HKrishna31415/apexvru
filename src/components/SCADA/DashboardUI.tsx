
import React from 'react';

interface DashboardUIProps {
  highlightTrend?: boolean;
  pulseAlarm?: boolean;

  highlightControl?: boolean;
}

export const DashboardUI: React.FC<DashboardUIProps> = ({ highlightTrend = false, pulseAlarm = false, highlightControl = false }) => {
  const isAnyHighlightActive = highlightTrend || pulseAlarm || highlightControl;
  const getGroupOpacity = (isThisGroupActive: boolean) => (isAnyHighlightActive && !isThisGroupActive) ? 0.3 : 1;
  
  return (
    <div className="w-full h-full p-2 text-slate-400">
      <svg width="100%" height="100%" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .trend-path {
              stroke-dasharray: 500;
              stroke-dashoffset: 500;
              animation: draw-in 1.5s ease-out forwards;
            }

            @keyframes draw-in {
              to {
                stroke-dashoffset: 0;
              }
            }
            
            .pulse {
              animation: pulse-anim 1.5s infinite ease-in-out;
            }
            
            @keyframes pulse-anim {
              0%, 100% {
                transform: scale(1);
                filter: drop-shadow(0 0 2px #f87171);
              }
              50% {
                transform: scale(1.15);
                filter: drop-shadow(0 0 8px #ef4444);
              }
            }

            .pulse-control {
              animation: pulse-control-anim 1.5s infinite ease-in-out;
            }

            @keyframes pulse-control-anim {
               0%, 100% { 
                 fill: #3b82f6; 
                 transform: scale(1);
               }
               50% { 
                 fill: #93c5fd; 
                 transform: scale(1.05);
               }
            }
          `}
        </style>

        {/* Header */}
        <text x="5" y="10" fontSize="6" fill="#e2e8f0" fontWeight="bold">VRU-74 Dashboard</text>

        {/* KPI Boxes */}
        <g opacity={getGroupOpacity(false)} className="transition-opacity duration-500">
          <rect x="5" y="15" width="32" height="15" rx="2" fill="#1e293b" />
          <text x="7" y="21" fontSize="3" fill="#94a3b8">Pressure</text>
          <text x="18" y="28" fontSize="6" fill="#67e8f9" fontWeight="bold">102.3</text>
          
          <rect x="43" y="15" width="32" height="15" rx="2" fill="#1e293b" />
          <text x="45" y="21" fontSize="3" fill="#94a3b8">Flow Rate</text>
          <text x="56" y="28" fontSize="6" fill="#67e8f9" fontWeight="bold">85.6</text>
        </g>

        {/* Trend Graph */}
        <g opacity={getGroupOpacity(highlightTrend)} className="transition-opacity duration-500">
          <rect x="5" y="35" width="70" height="25" rx="2" fill="#1e293b" />
          <path
            className={highlightTrend ? 'trend-path' : ''}
            d="M 10 55 C 20 40, 30 40, 40 45 S 60 50, 70 43"
            stroke="#22d3ee"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <text x="7" y="41" fontSize="3" fill="#94a3b8">Performance Trend</text>
        </g>
        
        {/* Alerts Section */}
        <g opacity={getGroupOpacity(pulseAlarm)} className="transition-opacity duration-500">
          <rect x="5" y="65" width="34" height="28" rx="2" fill="#1e293b" />
          <text x="8" y="71" fontSize="3.5" fill="#e2e8f0">Alerts</text>
          <g 
            className={pulseAlarm ? 'pulse' : ''}
            style={{ transformOrigin: '12px 82px' }}
          >
            <circle cx="12" cy="82" r="2.5" fill="#f87171" />
            <text x="18" y="83" fontSize="3" fill="#fca5a5" fontWeight="bold">High Vibration</text>
          </g>
        </g>

        {/* Controls Section */}
        <g opacity={getGroupOpacity(highlightControl)} className="transition-opacity duration-500">
          <rect x="41" y="65" width="34" height="28" rx="2" fill="#1e293b" />
          <text x="44" y="71" fontSize="3.5" fill="#e2e8f0">Controls</text>
          <g>
            <rect x="46" y="77" width="24" height="10" rx="2" className={highlightControl ? 'pulse-control' : ''} fill="#3b82f6"/>
            <text x="58" y="83" fontSize="3" fill="white" textAnchor="middle" fontWeight="bold">ADJUST</text>
          </g>
        </g>

      </svg>
    </div>
  );
};
