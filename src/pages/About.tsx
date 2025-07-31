import React from 'react';
import Header from '../components/Header';
import ManifestoSection from '../components/About/ManifestoSection';
import Timeline from '../components/About/Timeline';
import PartnershipModel from '../components/About/Partnership';
import { Sparkles, ChevronDown, CloseIcon } from '../components/About/Icons';

import { leadershipTeam, advisors } from '../data/leadershipData';


const About: React.FC = () => {
  const [expandedPerson, setExpandedPerson] = React.useState<string | null>(null);
  const [selectedAdvisor, setSelectedAdvisor] = React.useState<(typeof advisors[0]) | null>(null);
  
  const handleToggle = (id: string) => {
    setExpandedPerson(expandedPerson === id ? null : id);
  };

  const openAdvisorModal = (advisor: typeof advisors[0]) => {
    setSelectedAdvisor(advisor);
  };

  const closeAdvisorModal = () => {
    setSelectedAdvisor(null);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 antialiased relative overflow-x-hidden">
      <Header />
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center px-6 pt-24 md:pt-32 selection:bg-indigo-500 selection:text-white">
        <header className="w-full max-w-4xl py-16 md:py-24 text-center">
          <ManifestoSection>
<h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">About APEX ENERGY</h1>
            <p className="mt-4 text-lg text-gray-400">Pioneering Efficiency. Eliminating Waste.</p>
          </ManifestoSection>
        </header>

        <div className="w-full max-w-4xl space-y-32 md:space-y-48">
          <ManifestoSection>
            <p className="text-2xl md:text-3xl leading-relaxed text-gray-300">
              In every stage of energy production and distribution, potential is lost. We see this not as an inevitability, but as an opportunity for innovation. Our focus is on the unseen waste—the fugitive emissions, the inefficient processes—and engineering sophisticated solutions to reclaim that value.
            </p>
          </ManifestoSection>

          <ManifestoSection>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 text-center">Intelligent Vapor Recovery</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300 text-center max-w-3xl mx-auto">
              Our flagship contribution is in the field of <span className="text-purple-400 font-medium">vapor recovery equipment</span>. We design and deploy state-of-the-art VRUs that do more than meet compliance—they create economic and environmental value by capturing emissions and converting them back into usable resources.
            </p>
          </ManifestoSection>

          <PartnershipModel />
          
          <Timeline />
          
          <ManifestoSection>
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">Our Leadership</h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                {leadershipTeam.map((person) => (
                  <div 
                    key={person.id} 
                    onClick={() => handleToggle(person.id)}
                    className={`bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 transition-all duration-300 hover:scale-105 cursor-pointer ${person.hoverClasses}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-display text-2xl font-bold ${person.textClass}`}>{person.name}</h3>
                        <p className="text-indigo-300 text-sm font-medium">{person.title}</p>
                      </div>
                      <ChevronDown expanded={expandedPerson === person.id} className="h-6 w-6 text-gray-500 mt-1" />
                    </div>
                    <p className="mt-4 text-gray-400">{person.shortDescription}</p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedPerson === person.id ? 'max-h-96 mt-4 pt-4 border-t border-gray-700' : 'max-h-0'}`}>
                      <p className="text-gray-300">{person.longDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ManifestoSection>

          <ManifestoSection>
             <div className="text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">Strategic Advisors</h2>
                <div className="flex justify-center space-x-8">
                    {advisors.map((advisor) => (
                        <div key={advisor.id} className="text-center group" onClick={() => openAdvisorModal(advisor)}>
                            <div className="w-24 h-24 bg-gray-700/50 border-2 border-gray-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:border-indigo-500 group-hover:scale-110">
                                <span className="font-bold text-3xl text-gray-500 group-hover:text-indigo-400 transition-colors duration-300">{advisor.name.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                            <p className="mt-3 text-sm font-medium text-gray-400">{advisor.name}</p>
                        </div>
                    ))}
                </div>
            </div>
          </ManifestoSection>
          
          <ManifestoSection>
            <div className="border-l-4 border-indigo-500 pl-6 py-4">
               <p className="text-2xl md:text-3xl font-medium text-gray-200">Our mission is to engineer a world where energy potential is fully realized, driving industrial progress without waste.</p>
            </div>
          </ManifestoSection>
          
          <ManifestoSection>
            <div className="text-center py-16">
              <Sparkles className="h-12 w-12 text-indigo-500 mx-auto mb-6" />
              <h3 className="font-display text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                We don't just manage energy. We maximize it.
              </h3>
              <p className="mt-4 text-gray-500">APEX is not the summit. It is the vantage point from which we see the next peak.</p>
            </div>
          </ManifestoSection>
        </div>
      </main>

      {/* Advisor Modal */}
      {selectedAdvisor && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={closeAdvisorModal}
        >
            <div 
                className="bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-8 max-w-lg w-full m-4 relative animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={closeAdvisorModal} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
                    <CloseIcon className="h-6 w-6" />
                </button>
                <h3 className="font-display text-3xl font-bold text-indigo-400">{selectedAdvisor.name}</h3>
                <p className="text-indigo-300 text-sm font-medium mb-4">{selectedAdvisor.title}</p>
                <p className="text-gray-300 leading-relaxed">{selectedAdvisor.bio}</p>
            </div>
        </div>
      )}
    </div>
  );
};

export default About;