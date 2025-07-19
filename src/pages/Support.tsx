import React from 'react';
import Hero from '../components/Service/Hero';
import InteractiveTroubleshooting from '../components/Service/InteractiveTroubleshooting';
import GeneralFaq from '../components/Service/GeneralFaq';
import Locations from '../components/Service/Locations';
import ManifoldingImpact from '../components/Service/ManifoldingImpact';
import LeakTesting from '../components/Service/LeakTesting';
import GasolineTesting from '../components/Service/GasolineTesting';

const Support: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen font-sans">
      <Hero />
      <main className="px-4 py-16 sm:px-6 lg:px-8">
        <InteractiveTroubleshooting />
        <ManifoldingImpact />
        <LeakTesting />
        <GasolineTesting />
        <div className="max-w-7xl mx-auto mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
                <div className="lg:col-span-3">
                    <GeneralFaq />
                </div>
                <div className="lg:col-span-2">
                    <Locations />
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Support;
