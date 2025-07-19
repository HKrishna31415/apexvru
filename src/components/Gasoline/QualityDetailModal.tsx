import React, { useState, useEffect } from 'react';
import { XIcon } from './Icon';
import { QualityCheckItem } from '../../types';

interface QualityDetailModalProps {
  item: QualityCheckItem;
  onClose: () => void;
}

const QualityDetailModal: React.FC<QualityDetailModalProps> = ({ item, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
               handleClose();
           }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 200); // Allow animation to finish
    };

  return (
    <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true"></div>
      <div
        className={`bg-slate-800 rounded-lg ring-1 ring-slate-700/50 shadow-2xl shadow-slate-950/50 w-full max-w-md m-auto z-10 transition-all duration-200 ease-out
                    ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
                <h2 id="modal-title" className="text-xl font-bold text-white">{item.name}</h2>
                <p className="text-sm font-mono text-cyan-400 mt-1">Standard: Pass ({item.value})</p>
            </div>
            <button 
                onClick={handleClose} 
                className="text-slate-500 hover:text-slate-300 transition-colors"
                aria-label="Close details"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-4 text-slate-300 leading-relaxed">
            <p>{item.description}</p>
          </div>
        </div>
        <div className="px-6 py-3 bg-slate-900/50 rounded-b-lg">
             <button onClick={handleClose} className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">
                Close
             </button>
        </div>
      </div>
    </div>
  );
};

export default QualityDetailModal;
