
import React from 'react';
import DocumentCard from './DocumentCard';
import type { Document } from './types';

interface DocumentGridProps {
  documents: Document[];
  onSelectDocument: (document: Document) => void;
}

const DocumentGrid: React.FC<DocumentGridProps> = ({ documents, onSelectDocument }) => {
  if (documents.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>No documents found. Try adjusting your search or category.</p>
      </div>
    );
  }
  
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 rounded-xl overflow-hidden shadow-2xl shadow-cyan-400/30">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-50 blur-3xl animate-pulse"></div>
      {documents.map((doc, index) => (
        <DocumentCard
          key={doc.id}
          document={doc}
          onSelectDocument={onSelectDocument}
        />
      ))}
    </div>
  );
};

export default DocumentGrid;