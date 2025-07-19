import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Environment/Hero';
import BeforeAfterSlider from '../components/Environment/BeforeAfterSlider';
import BenefitsSection from '../components/Environment/BenefitsSection';
import ClimateImpactSection from '../components/Environment/ClimateImpactSection';
import { StatsSection, ComplianceStats } from '../components/Environment/StatsSection';
import EquivalentsSection from '../components/Environment/EquivalentsSection';

import SDGSection from '../components/Environment/SDGSection';
import EnergyTrilemmaSection from '../components/Environment/EnergyTrilemmaSection';
import Footer from '../components/Footer';
import '../styles/environmental.css';

const EnvironmentalImpact: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <BeforeAfterSlider />
        <BenefitsSection />
        <ClimateImpactSection />

        <StatsSection />
        <EquivalentsSection />
        <SDGSection />
        <EnergyTrilemmaSection />
      </main>

    </div>
  );
};

export default EnvironmentalImpact;