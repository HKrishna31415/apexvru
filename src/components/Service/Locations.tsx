import React from 'react';
import * as Constants from './constants';
import type { Technician } from './types';

const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.1.4-.223.654-.369.625-.36.942-.596 1.141-.822.212-.236.355-.49.462-.75.122-.289.172-.612.148-1.012-.03-.495-.145-1.124-.34-2.021-.188-.87-.43-1.895-.732-2.995l-.013-.042a10.994 10.994 0 0 0-1.034-2.324C10.392 3.48 10.217 3.25 10 3s-.217.25-.392.48a10.994 10.994 0 0 0-1.034 2.324l-.013.042c-.302 1.1-.544 2.125-.732 2.995-.195.897-.31 1.526-.34 2.021-.024.399.026.723.148 1.012.107.26.25.514.462.75.199.226.516.462 1.141.822.254.146.468.27.654.369a5.741 5.741 0 0 0 .281.14l.018.008.006.003zM10 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" clipRule="evenodd" />
  </svg>
);


const TechnicianCard: React.FC<{ technician: Technician }> = ({ technician }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-slate-800/60 rounded-lg border border-slate-700/50">
      <img src={technician.imageUrl} alt={technician.name} className="w-16 h-16 rounded-full object-cover border-2 border-slate-600" />
      <div>
        <h4 className="font-bold text-white">{technician.name}</h4>
        <p className="text-sm text-slate-300 flex items-center">
          <MapPinIcon className="w-4 h-4 mr-1 text-blue-400" />
          {technician.location}
        </p>
        <p className="text-xs text-slate-400">{technician.distance}</p>
      </div>
    </div>
  );
};


const Locations: React.FC = () => {
  return (
    <section id="locations" className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50">
      <h2 className="text-3xl font-bold text-white mb-2">Nearest Technicians</h2>
      <p className="text-blue-200 mb-8">Expert help is just around the corner. Find a certified professional near you.</p>
      <div className="space-y-4">
        {Constants.TECHNICIANS.map((tech, index) => (
          <TechnicianCard key={index} technician={tech} />
        ))}
      </div>
       <button className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300">
        Contact a Service Rep
      </button>
    </section>
  );
};

export default Locations;
