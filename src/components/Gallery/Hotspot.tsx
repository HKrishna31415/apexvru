import React, { useState } from 'react';
import { Hotspot as HotspotType } from './types';

interface HotspotProps {
  hotspot: HotspotType;
}

const Hotspot: React.FC<HotspotProps> = ({ hotspot }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const hotspotStyle = {
    left: `${hotspot.x}%`,
    top: `${hotspot.y}%`,
  };

  return (
    <div
      className="absolute"
      style={hotspotStyle}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      <div className="relative transform -translate-x-1/2 -translate-y-1/2">
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-cyan-400"
          aria-label={`More information about ${hotspot.title}`}
          aria-describedby={`tooltip-${hotspot.x}-${hotspot.y}`}
        >
          <div className="absolute w-full h-full rounded-full bg-cyan-500/50 animate-pulse-dot" />
          <div className="relative w-3 h-3 rounded-full bg-cyan-300" />
        </button>
        {isTooltipVisible && (
          <div
            id={`tooltip-${hotspot.x}-${hotspot.y}`}
            role="tooltip"
            className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-64 max-w-[85vw] p-4 bg-slate-900/95 backdrop-blur-md text-white rounded-lg shadow-2xl ring-1 ring-slate-700/50 animate-fade-in-up pointer-events-none z-10"
          >
            <h4 className="font-bold text-base text-cyan-300 mb-1.5">{hotspot.title}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{hotspot.description}</p>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0 -mb-2 border-x-8 border-x-transparent border-t-8 border-t-slate-900/95" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotspot;