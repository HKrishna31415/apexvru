import React from 'react';
import EnergyTrilemmaChart from './EnergyTrilemmaChart';

const EnergyTrilemmaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Addressing the Energy Trilemma</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            VRU technology provides a balanced solution, making significant improvements across the three core pillars of the global energy challenge.
          </p>
        </div>
        <div className="mt-24">
            <EnergyTrilemmaChart />
        </div>
      </div>
    </section>
  );
};

export default EnergyTrilemmaSection;