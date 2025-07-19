import React from 'react';
import type { Document } from './types';

interface DocumentCardProps {
  document: Document;
  onSelectDocument: (document: Document) => void;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document, onSelectDocument }) => {
  return (
    <div
        className="relative bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg group transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 cursor-pointer"
        onClick={() => onSelectDocument(document)}
      >
      <div className="relative z-10">
        <img src={document.thumbnailUrl} alt={document.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity rounded-t-lg" />
        <div className="p-4">
          <p className="text-xs text-cyan-400 font-mono tracking-wide mb-1 drop-shadow-[0_0_2px_theme(colors.cyan.400)]">{document.type}</p>
          <h3 className="text-lg font-bold text-gray-100 group-hover:text-white truncate">{document.title}</h3>
          <p className="text-sm text-gray-400 mt-2 h-10 overflow-hidden">{document.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;