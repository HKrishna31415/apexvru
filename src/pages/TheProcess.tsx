
import React, { useState, useRef } from 'react';
import { HeroAnimation } from './../components/Benefits/HeroAnimation';
import { FeatureCard } from './../components/Benefits/FeatureCard';
import Modal from '../components/Modal';
import {
  Zap,
  Cpu,
  ShieldCheck,
  Scaling,
  Gauge,
  Leaf,
} from './../components/Benefits/Icons';
import { BenefitCard } from './../components/Benefits/BenefitCard';
import { 
  ComplianceIcon,
  ProfitabilityIcon,
  SafetyIcon,
  EfficiencyIcon,
  PublicImageIcon,
  ConservationIcon,
  OdorReductionIcon,
  FutureProofIcon
} from './../components/Benefits/BenefitIcons';


const TheProcess: React.FC = () => {
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToFeatures = () => {
    featuresSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-sky-400" />,
      title: 'High Efficiency Recovery',
      description: 'Achieves >99.5% VOC recovery, exceeding environmental standards and maximizing product reclaim.',
      delay: '100ms',
    },
    {
      icon: <Cpu className="w-8 h-8 text-sky-400" />,
      title: 'Fully Automated PLC Control',
      description: 'Smart logic system optimizes performance in real-time, requiring minimal operator intervention.',
      delay: '200ms',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-sky-400" />,
      title: 'Low Maintenance Design',
      description: 'Engineered with durable, corrosion-resistant materials for extended operational life and reliability.',
      delay: '300ms',
    },
    {
      icon: <Scaling className="w-8 h-8 text-sky-400" />,
      title: 'Compact & Scalable Footprint',
      description: 'Modular design allows for easy integration into existing sites and future capacity expansion.',
      delay: '400ms',
    },
    {
      icon: <Gauge className="w-8 h-8 text-sky-400" />,
      title: 'Real-Time Monitoring',
      description: 'Intuitive HMI dashboard provides live data on performance, efficiency, and system health.',
      delay: '500ms',
    },
    {
      icon: <Leaf className="w-8 h-8 text-sky-400" />,
      title: 'Eco-Friendly Operation',
      description: 'Significantly reduces greenhouse gas emissions and helps achieve sustainability goals.',
      delay: '600ms',
    },
  ];

  const benefits = [
    {
      icon: <ComplianceIcon />,
      title: "Environmental Compliance",
      description: "Exceed regulatory standards and avoid penalties by capturing over 99.5% of VOCs."
    },
    {
      icon: <ProfitabilityIcon />,
      title: "Increased Profitability",
      description: "Convert captured vapors back into saleable product for a rapid return on investment."
    },
    {
      icon: <SafetyIcon />,
      title: "Enhanced Site Safety",
      description: "Reduce flammable vapor concentrations in the workplace, creating a safer environment."
    },
    {
      icon: <EfficiencyIcon />,
      title: "Operational Efficiency",
      description: "Fully automated system runs 24/7 with minimal operator input, freeing up personnel."
    },
    {
      icon: <PublicImageIcon />,
      title: "Positive Public Image",
      description: "Demonstrate corporate responsibility and build a greener brand image."
    },
    {
      icon: <ConservationIcon />,
      title: "Product Conservation",
      description: "Minimize operational losses by recovering valuable product that would otherwise be lost."
    },
    {
      icon: <OdorReductionIcon />,
      title: "Reduced Odor Complaints",
      description: "Mitigate nuisance odors from venting, improving community relations."
    },
    {
      icon: <FutureProofIcon />,
      title: "Future-Proof Investment",
      description: "Scalable, modular design meets today's needs and adapts for tomorrow's growth."
    }
  ];


  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 font-sans antialiased overflow-x-hidden">

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800"></div>
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500 rounded-full filter blur-3xl animate-pulse-light animation-delay-4000"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse-light"></div>
          </div>
          <div className="container mx-auto px-6 grid md:grid-cols-10 items-center relative z-10">
            <div className="text-center md:text-left md:col-span-4">
              <p className="text-sky-400 font-semibold mb-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>NEXT-GENERATION VAPOR RECOVERY</p>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Capture More. <br />Emit Less.
              </h2>
              <p className="text-lg text-slate-400 mx-auto md:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                Our state-of-the-art Vapor Recovery Unit (VRU) combines unmatched efficiency with intelligent automation to turn emissions into revenue and ensure environmental compliance.
              </p>
              <div className="flex justify-center md:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <button 
                  onClick={scrollToFeatures}
                  className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Explore Features
                </button>
                <button 
                  onClick={openModal}
                  className="bg-transparent border-2 border-slate-600 hover:bg-slate-700 hover:border-slate-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="w-full h-full flex items-center justify-center md:col-span-6">
              <HeroAnimation />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          id="features" 
          ref={featuresSectionRef}
          className="relative py-20 overflow-hidden features-background"
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold text-white">Core Features</h3>
                    <p className="text-slate-400 mt-2">Engineered for performance, reliability, and ease of use.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard 
                            key={index} 
                            icon={feature.icon} 
                            title={feature.title} 
                            description={feature.description}
                            delay={feature.delay}
                        />
                    ))}
                </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-white">Unlock Tangible Value</h3>
              <p className="text-slate-400 mt-2 max-w-2xl mx-auto">From regulatory peace of mind to a stronger bottom line, AuraVRU delivers benefits that resonate across your entire operation.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  delay={`${index * 100}ms`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe 
              className="w-full h-96"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
              title="Apex VRU Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TheProcess;