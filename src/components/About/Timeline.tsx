import React from 'react';
import ManifestoSection from './ManifestoSection';

type TimelineColor = keyof typeof colorClasses;

const timelineData: {
  year: string;
  title: string;
  description: string;
  color: TimelineColor;
}[] = [
  {
    year: "2015",
    title: "APEX Energy Founded",
    description: "Our journey begins with a mission to identify and eliminate waste in the energy sector.",
    color: "purple",
  },
  {
    year: "2017",
    title: "First-Gen VRU Deployed",
    description: "Successfully launched our first Vapor Recovery Unit, setting a new benchmark for efficiency.",
    color: "indigo",
  },
  {
    year: "2019",
    title: "Launch of IoT-Enabled Monitoring",
    description: "Integrated smart IoT sensors into our systems for real-time performance tracking and optimization.",
    color: "blue",
  },
  {
    year: "2021",
    title: "Expansion into International Markets",
    description: "Began deploying solutions globally, helping international partners meet stricter environmental standards.",
    color: "teal",
  },
  {
    year: "2023",
    title: "Next-Gen Compact VRU Unveiled",
    description: "Introduced a smaller, more powerful, and more cost-effective VRU for a wider range of applications.",
    color: "fuchsia",
  },
];

const colorClasses = {
    purple: 'border-purple-500',
    indigo: 'border-indigo-500',
    blue: 'border-blue-500',
    teal: 'border-teal-500',
    fuchsia: 'border-fuchsia-500',
} as const;

const Timeline: React.FC = () => {
  return (
    <ManifestoSection>
      <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">A Journey of Innovation</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our history is defined by milestones in efficiency and a relentless drive to redefine what's possible in energy conservation.
          </p>
      </div>
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 w-2 h-full bg-gray-800 shadow-md inset-0 top-0 left-1/2 -translate-x-1/2"></div>
        {timelineData.map((item, index) => (
          <div key={index} className="relative z-10">
            <div className={`timeline-marker h-8 w-8 rounded-full bg-gray-900 border-4 ${colorClasses[item.color]} absolute left-1/2 -translate-y-4 -translate-x-1/2 flex items-center justify-center`}>
              <div className={`h-3 w-3 bg-${item.color}-500 rounded-full`}></div>
            </div>
            
            <div className={`timeline-item flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'} ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-gray-800/50 border border-gray-700/50 p-6 rounded-lg shadow-lg">
                      <p className={`font-display text-2xl font-bold text-${item.color}-400`}>{item.year}</p>
                      <h3 className="font-bold text-xl mb-1 text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ManifestoSection>
  );
};

export default Timeline;
