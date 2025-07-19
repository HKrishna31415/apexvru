
import React from 'react';
import Hero from '../components/Quote/Hero';
import InfoSection from '../components/Quote/InfoSection';
import '../styles/quote.css'

const GetAQuote: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        <Hero />
        <InfoSection />
      </main>
    </div>
  );
};

export default GetAQuote;
