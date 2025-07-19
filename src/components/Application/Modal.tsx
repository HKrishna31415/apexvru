
import React, { useEffect, useRef, useState } from 'react';
import { Application } from './types';
import { BackArrowIcon } from './BackArrowIcon';


interface ModalProps {
  app: Application;
  isVisible: boolean;
  onClose: () => void;
  onExited: () => void;
}

export const Modal: React.FC<ModalProps> = ({ app, isVisible, onClose, onExited }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [question, setQuestion] = useState('');


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!isVisible) {
      // Reset AI state when modal is hidden
      setQuestion('');
    } else {
       modalRef.current?.focus();
    }
  }, [isVisible]);

  const handleTransitionEnd = () => {
    if (!isVisible) {
      onExited();
    }
  };



  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onTransitionEnd={handleTransitionEnd}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative z-10 w-full h-full max-w-5xl max-h-[90vh] flex flex-col bg-gray-900/50 rounded-xl overflow-hidden shadow-2xl outline-none"
      >
        <div className="flex-shrink-0 w-full h-1/3 relative">
          <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
        </div>
        
        <div className="flex-grow p-6 md:p-8 text-white overflow-y-auto">
            <button 
              onClick={onClose}
              className="absolute top-4 left-4 inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors group z-20 bg-black/30 p-2 rounded-full"
              aria-label="Close details"
            >
              <BackArrowIcon className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <div className="relative -mt-16">
              <h1 id="modal-title" className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-200">
                {app.title}
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {app.description}
              </p>

              <div className="border-t border-gray-600 pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">Key Statistics & Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {app.stats.map(stat => (
                    <div key={stat.label} className="bg-white/10 p-4 rounded-lg">
                      <p className="text-sm text-blue-300 font-semibold">{stat.label}</p>
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>


            </div>
        </div>
      </div>
    </div>
  );
};