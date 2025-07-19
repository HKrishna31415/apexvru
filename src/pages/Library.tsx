
import React, { useState, useMemo, useCallback } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Library/Sidebar';
import DocumentGrid from '../components/Library/DocumentGrid';
import DocumentViewer from '../components/Library/DocumentViewer';
import SearchBar from '../components/Library/SearchBar';
import type { Document } from '../components/Library/types';
import { CATEGORIES, DOCUMENTS } from '../components/Library/constants';

const Library: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0].id);
  const [viewingDocument, setViewingDocument] = useState<Document | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocuments = useMemo(() => {
    let docs = DOCUMENTS;

    // Filter by category first
    if (selectedCategory !== 'all') {
      docs = docs.filter(doc => doc.category === selectedCategory);
    }

    // Then filter by search query
    if (searchQuery.trim() !== '') {
      const lowerCaseQuery = searchQuery.toLowerCase();
      docs = docs.filter(doc =>
        doc.title.toLowerCase().includes(lowerCaseQuery) ||
        doc.description.toLowerCase().includes(lowerCaseQuery)
      );
    }

    return docs;
  }, [selectedCategory, searchQuery]);

  const handleSelectDocument = useCallback((doc: Document) => {
    setViewingDocument(doc);
  }, []);

  const handleCloseViewer = useCallback(() => {
    setViewingDocument(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <div className="flex-grow flex relative">
        <Sidebar
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pt-20 md:pt-8 overflow-y-auto grid-background flex flex-col">
          <div className="mb-6">
            <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
          </div>
          <div className="flex-grow">
            <DocumentGrid
              documents={filteredDocuments}
              onSelectDocument={handleSelectDocument}
            />
          </div>
        </main>
      </div>
      {viewingDocument && (
        <DocumentViewer
          document={viewingDocument}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
};

export default Library;