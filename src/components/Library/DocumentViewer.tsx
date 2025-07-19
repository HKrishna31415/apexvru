
import React, { useEffect } from 'react';
import type { Document } from './types';

interface DocumentViewerProps {
  document: Document;
  onClose: () => void;
}

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const DocumentViewer: React.FC<DocumentViewerProps> = ({ document, onClose }) => {
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900/50 border border-cyan-400/30 rounded-lg shadow-[0_0_30px_rgba(34,211,238,0.3)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-cyan-400/20 flex-shrink-0">
          <div>
            <p className="text-sm text-cyan-400 font-mono tracking-wide drop-shadow-[0_0_2px_theme(colors.cyan.400)]">{document.type}</p>
            <h2 className="text-2xl font-bold text-gray-100">{document.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:bg-cyan-400/20 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_5px_theme(colors.cyan.400)]"
            aria-label="Close document viewer"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>

        <div className="p-6 overflow-y-auto">
          <img src={document.thumbnailUrl.replace('/400/300', '/800/600')} alt={document.title} className="w-full h-auto max-h-[50vh] object-contain rounded-md mb-6" />
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">Description</h3>
          <p className="text-gray-300 mb-6">{document.description}</p>
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">Content Preview</h3>
          <div className="text-gray-400 space-y-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
            <p>Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DocumentViewer;
