import React, { useState } from 'react';
import { FaCertificate, FaIndustry, FaCheckCircle, FaFlask, FaLeaf, FaCar, FaShieldAlt, FaGlobe, FaEuroSign } from 'react-icons/fa';
import Header from '../components/Header';
import Section from '../components/Section';
import { ShieldCheck } from '../components/constants';
import type { Certification } from '../types';

const certifications: Certification[] = [
  {
    id: 'iso9001',
    name: 'ISO 9001:2015',
    standard: 'Quality Management',
    status: 'active',
    pdfUrl: 'https://www.iso.org/iso-9001-quality-management.html',
    icon: FaCertificate as React.ComponentType<any>,
  },
  {
    id: 'atex',
    name: 'ATEX Directive',
    standard: 'Explosive Atmospheres',
    status: 'active',
    pdfUrl: '#',
    icon: FaIndustry as React.ComponentType<any>,
  },
  {
    id: 'sgs',
    name: 'SGS Certified',
    standard: 'Inspection & Certification',
    status: 'active',
    pdfUrl: '#',
    icon: FaCheckCircle as React.ComponentType<any>,
  },
  {
    id: 'api',
    name: 'API Spec Q1',
    standard: 'Petroleum Industry Quality',
    status: 'pending',
    pdfUrl: '#',
    icon: FaFlask as React.ComponentType<any>,
  },
  {
    id: 'epa',
    name: 'EPA Compliance',
    standard: 'Environmental Protection',
    status: 'pending',
    pdfUrl: '#',
    icon: FaLeaf as React.ComponentType<any>,
  },
  {
    id: 'carb',
    name: 'CARB Compliant',
    standard: 'Air Resources Board',
    status: 'pending',
    pdfUrl: '#',
    icon: FaCar as React.ComponentType<any>,
  },
  {
    id: 'ul',
    name: 'UL Listed',
    standard: 'Safety Certification',
    status: 'pending',
    pdfUrl: '#',
    icon: FaShieldAlt as React.ComponentType<any>,
  },
  {
    id: 'intertek',
    name: 'Intertek ETL',
    standard: 'Quality Assurance',
    status: 'pending',
    pdfUrl: '#',
    icon: FaGlobe as React.ComponentType<any>,
  },
  {
    id: 'ce',
    name: 'CE Marking',
    standard: 'European Conformity',
    status: 'pending',
    pdfUrl: '#',
    icon: FaEuroSign as React.ComponentType<any>,
  },
];

const Compliance: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <div className="relative min-h-screen w-full bg-black text-gray-200 font-sans antialiased overflow-x-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax]">
          <div className="absolute top-1/2 left-1/2 w-full h-full animate-[spin_20s_linear_infinite]">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-blue-700/10 rounded-full blur-[150px]"></div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
              Compliance & Certifications
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              Our products are designed to meet the highest industry standards for compliance and safety. Explore our certifications and our commitment to regulatory excellence.
            </p>
            <div className="mt-8">
              <a href="/legal" className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200">
                View Legal Hub
              </a>
            </div>
          </div>

          <Section title="Wall of Trust" icon={<ShieldCheck />} darkBackground>
            <p className="text-gray-400 mb-8">
              We adhere to the highest global standards for quality, safety, and environmental management. Our certifications are a testament to our unwavering commitment to excellence. Click a badge to view the documentation.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
              {certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <button
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    className="group flex flex-col items-center p-4 bg-gray-900/50 hover:bg-gray-800/60 rounded-lg border border-transparent hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="w-24 h-24 mb-4 flex items-center justify-center text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                      <Icon className={`w-16 h-16 transition-all duration-300 ${cert.status === 'active' ? 'text-cyan-400' : 'text-gray-600'}`} />
                    </div>
                    <p className="font-semibold text-white">{cert.name}</p>
                    <p className={`text-sm ${cert.status === 'active' ? 'text-cyan-400' : 'text-gray-500'}`}>{cert.status === 'active' ? 'Active' : 'Pending'}</p>
                  </button>
                );
              })}
            </div>
          </Section>
        </main>
      </div>

      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-lg shadow-2xl shadow-black/50 flex flex-col animate-[slideUp_0.4s_ease-out]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50 flex-shrink-0">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedCert.name}</h3>
                <p className="text-sm text-cyan-400">{selectedCert.standard}</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)} 
                className="text-gray-500 hover:text-white transition-colors text-3xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
            <div className="flex-grow p-1 sm:p-2 overflow-y-auto">
              {selectedCert.status === 'active' ? (
                <iframe 
                  src={selectedCert.pdfUrl} 
                  className="w-full h-full border-0 rounded-b-lg" 
                  title={`${selectedCert.name} Document`}
                ></iframe>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                  <div className="w-16 h-16 mb-4 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white">Certification Pending</h4>
                  <p className="text-gray-400 mt-2 max-w-md">
                    Documentation for {selectedCert.name} is currently undergoing final review. It will be available here immediately upon approval.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Compliance;