import React from 'react';
import Header from '../components/Header';
import '../styles/pledge.css';
import HeroSection from '../components/Pledge/HeroSection';
import PledgeDetails from '../components/Pledge/PledgeDetails';
import AnimatedDiagram from '../components/Pledge/AnimatedDiagram';

const Pledge: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-16">
        <HeroSection />
        <PledgeDetails />
        <div className="mt-20 md:mt-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Our Partnership Model in Action</h2>
          <p className="text-center text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            This diagram illustrates how our success is directly linked to yours. We invest in the technology, so you can reap the rewards risk-free.
          </p>
          <AnimatedDiagram />
        </div>
      </main>
    </div>
  );
};

export default Pledge;
