import React, { useState, useCallback } from 'react';
import * as Constants from './constants';
import type { VruComponent, FaqItem } from './types';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const AccordionItem: React.FC<{ faq: FaqItem; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-700">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left py-4 px-1">
        <span className="font-semibold text-slate-200">{faq.question}</span>
        <ChevronDownIcon className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="pb-4 px-1 text-slate-300">{faq.answer}</p>
      </div>
    </div>
  );
};


const TroubleshootingSidebar: React.FC<{ component: VruComponent | null; onClose: () => void }> = ({ component, onClose }) => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const handleAccordionClick = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className={`absolute top-0 right-0 h-full w-full md:w-2/5 lg:w-1/3 bg-slate-800/80 backdrop-blur-lg shadow-2xl transition-transform duration-500 ease-in-out ${component ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">{component?.name}</h3>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-700 transition-colors">
                    <XIcon className="w-6 h-6 text-slate-300" />
                </button>
            </div>
            <div className="overflow-y-auto flex-grow pr-2">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Common Issues & FAQs</h4>
                {component?.faqs.map((faq, index) => (
                    <AccordionItem 
                        key={index} 
                        faq={faq} 
                        isOpen={openAccordion === index}
                        onClick={() => handleAccordionClick(index)}
                    />
                ))}
            </div>
           </div>
        </div>
    );
};

const VruSchematic: React.FC<{ onSelectComponent: (componentId: string) => void }> = ({ onSelectComponent }) => {
  const SchematicPart: React.FC<{ id: string; name: string; className: string }> = ({ id, name, className }) => (
    <button
      onClick={() => onSelectComponent(id)}
      className={`border-2 border-blue-400/50 bg-slate-700/50 hover:bg-blue-500/50 hover:border-blue-300 transition-all duration-300 rounded-lg flex items-center justify-center p-4 text-center font-semibold text-white shadow-md min-h-[100px] ${className}`}
    >
      {name}
    </button>
  );

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-slate-800/50 rounded-xl border border-slate-700">
      <div className="grid grid-cols-4 gap-4">
        <SchematicPart id="refrigerator" name="Refrigerator Unit" className="col-span-4" />
        <SchematicPart id="control-panel" name="Control Panel" className="col-span-4" />
        <SchematicPart id="scrubber" name="Scrubber" className="col-span-2" />
        <SchematicPart id="compressor" name="Compressor" className="col-span-2" />
        <SchematicPart id="motor" name="Motor" className="col-span-1" />
        <SchematicPart id="pump" name="Pump" className="col-span-1" />
        <SchematicPart id="valves" name="Valves & Piping" className="col-span-2" />
      </div>
    </div>
  );
};


const InteractiveTroubleshooting: React.FC = () => {
    const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);

    const handleSelectComponent = useCallback((componentId: string) => {
        setSelectedComponentId(componentId);
    }, []);

    const handleCloseSidebar = useCallback(() => {
        setSelectedComponentId(null);
    }, []);

    const selectedComponent = Constants.VRU_COMPONENTS.find(c => c.id === selectedComponentId) || null;

    return (
        <section id="troubleshooting" className="py-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Interactive Troubleshooting Guide</h2>
                <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-12">Click on a component in the diagram below to access specific FAQs and troubleshooting steps. Our self-service guide helps you diagnose issues quickly.</p>
            </div>
            <div className="max-w-5xl mx-auto relative overflow-hidden rounded-lg shadow-2xl">
                <VruSchematic onSelectComponent={handleSelectComponent} />
                <TroubleshootingSidebar component={selectedComponent} onClose={handleCloseSidebar} />
            </div>
        </section>
    );
};

export default InteractiveTroubleshooting;