import React from 'react';
import type { Part } from './types';
import { CloseIcon, PaperclipIcon } from './icons';

import { HmiScreen } from './HmiScreen';
import { ComponentID } from './constants';

export const Sidebar: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    component: Part | null;
}> = ({ isOpen, onClose, component }) => {

  if (!component) return null;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-1/3 xl:w-1/4 bg-gray-800/80 backdrop-blur-lg shadow-2xl transition-transform duration-500 ease-in-out z-60 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      aria-labelledby="sidebar-title"
    >
      <div className="flex flex-col h-full pt-20">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center flex-shrink-0">
          <h2 id="sidebar-title" className="text-xl font-bold text-cyan-400">{component.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close sidebar">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 flex-grow overflow-y-auto">
          <div className="min-h-[6rem] mb-4">
              <p className="text-gray-300 whitespace-pre-wrap">{component.description}</p>
          </div>
          
          {component.id === ComponentID.CONTROL_SYSTEM ? (
            <div className="h-[450px]">
              <HmiScreen />
            </div>
          ) : (
            <div className="bg-gray-900/50 p-3 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Key Specifications</h3>
              <ul className="space-y-1 text-sm">
                {Object.entries(component.specs).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="text-gray-400">{key}:</span>
                    <span className="text-white font-medium">{String(value)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-700 flex-shrink-0 mb-[64px]">
            <a
                href={component.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
                <PaperclipIcon className="w-5 h-5" />
                View Spec Sheet (PDF)
            </a>
        </div>

      </div>
    </div>
  );
};