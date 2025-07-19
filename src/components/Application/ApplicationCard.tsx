import React from 'react';
import { Application, ApplicationStat } from './types';

interface ApplicationCardProps {
  application: Application;
  animationDirection: 'left' | 'right';
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({ application, animationDirection }) => {
  const animationClass = animationDirection === 'left' ? 'animate-slide-left' : 'animate-slide-right';

  const isResearch = application.status === 'research';
  const isFeatured = application.id === 'gasoline-stations';

  const baseClasses = "rounded-xl overflow-hidden shadow-2xl shadow-black/30 transform transition-transform duration-300 w-full text-left";
  const interactiveClasses = isResearch ? "cursor-default" : "group-hover:scale-105";
  const statusClasses = isResearch ? "grayscale opacity-60" : "";
  const featuredClasses = isFeatured ? "ring-4 ring-cyan-400/70 animate-glow" : "";

  return (
    <div
      className={`${baseClasses} ${interactiveClasses} ${statusClasses} ${featuredClasses}`}
    >
      <div className="relative w-full h-80">
        {isResearch && (
          <div className="absolute top-4 right-4 bg-yellow-500/80 text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-lg">
            IN R&D
          </div>
        )}

        {/* Background Image Slider */}
        <div className={`absolute top-0 left-0 w-[200%] h-full flex ${animationClass}`}>
          <img src={application.image} alt="" className="w-1/2 h-full object-cover" />
          <img src={application.image} alt="" className="w-1/2 h-full object-cover" />
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 group-hover:backdrop-blur-sm transition-all duration-300 ease-in-out"></div>

        {/* Text Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-3xl font-bold text-white shadow-lg">{application.title}</h3>
          
          {/* Stats that appear on hover */}
          <div className={`mt-4 border-t-2 border-white/50 pt-4 transition-opacity duration-300 ease-in-out ${isResearch ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
            {application.stats.map((stat: ApplicationStat) => (
              <div key={stat.label} className="flex justify-between text-sm text-gray-200">
                <span className="font-semibold">{stat.label}:</span>
                <span className="font-light">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};