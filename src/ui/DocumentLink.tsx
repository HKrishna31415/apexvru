import React from 'react';
import { Document, DocumentType } from '../types';
import { DocumentIcon, PresentationIcon, SpreadsheetIcon, DownloadIcon } from './IR-Icons';

interface DocumentLinkProps {
  document: Document;
}

const getIconForType = (type: DocumentType): React.ReactNode => {
  switch(type) {
    case DocumentType.PitchDeck:
      return <PresentationIcon className="h-6 w-6" />;
    case DocumentType.Financials:
      return <SpreadsheetIcon className="h-6 w-6" />;
    case DocumentType.Report409A:
      return <DocumentIcon className="h-6 w-6" />;
    case DocumentType.CapTable:
      return <SpreadsheetIcon className="h-6 w-6" />;
    default:
      return <DocumentIcon className="h-6 w-6" />;
  }
}

const DocumentLink: React.FC<DocumentLinkProps> = ({ document }) => {
  return (
    <div className="group flex items-center p-4 bg-brand-gray-950 rounded-lg border border-brand-gray-800 hover:border-brand-blue-700/50 hover:bg-brand-gray-900 transition-all duration-300">
      <div className="flex-shrink-0 mr-4">
        {getIconForType(document.type)}
      </div>
      <div className="flex-grow">
        <p className="font-semibold text-white">{document.title}</p>
        <p className="text-sm text-brand-gray-400">
          {document.date} &bull; v{document.version}
        </p>
      </div>
      <button className="ml-4 p-2 rounded-md bg-brand-gray-800 group-hover:bg-brand-blue-600 text-brand-gray-300 group-hover:text-white transition-colors duration-300 opacity-50 group-hover:opacity-100 cursor-not-allowed">
        <DownloadIcon className="h-5 w-5" />
        <span className="sr-only">Download {document.title}</span>
      </button>
    </div>
  );
};

export default DocumentLink;