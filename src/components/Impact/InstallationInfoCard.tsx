import React from 'react';
import { Installation } from './types';
import { CloseIcon, StatusIcon } from './Icons';

interface InstallationInfoCardProps {
  installation: Installation | null;
  onClose: () => void;
}

const InstallationInfoCard: React.FC<InstallationInfoCardProps> = ({ installation, onClose }) => {
  const cardClasses = `
    absolute top-1/2 right-4 -translate-y-1/2
    w-[380px] max-w-[90vw] h-auto max-h-[90vh]
    bg-gray-800/60 backdrop-blur-xl border border-teal-400/20 rounded-2xl shadow-2xl shadow-black/50
    flex flex-col
    transform transition-all duration-300 ease-out
    ${installation ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
  `;
  
  const getStatusColor = (status: Installation['status']) => {
    switch (status) {
      case 'Operational':
        return 'text-green-400';
      case 'Under Construction':
        return 'text-purple-400';
      case 'Planned':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className={cardClasses}>
      {installation && (
        <>
          <div className="flex-shrink-0 p-5 pr-12">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">{installation.name}</h2>
            <p className="text-md text-gray-300">{installation.city}</p>
          </div>

          <div className="flex-grow overflow-y-auto px-5 pb-5">
            <div className="space-y-4 text-gray-200">
                <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                    <span className="font-semibold text-gray-400">Status</span>
                    <div className={`flex items-center gap-2 font-bold ${getStatusColor(installation.status)}`}>
                        <StatusIcon status={installation.status} className="w-5 h-5"/>
                        <span>{installation.status}</span>
                    </div>
                </div>
                 <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                    <span className="font-semibold text-gray-400">Capacity</span>
                    <span className="font-bold text-white">{installation.capacity} Machine(s) Installed</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-400 mb-1">Details</h4>
                  <p className="text-sm leading-relaxed bg-black/20 p-3 rounded-lg">
                    {installation.description}
                  </p>
                </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close details"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
};

export default InstallationInfoCard;