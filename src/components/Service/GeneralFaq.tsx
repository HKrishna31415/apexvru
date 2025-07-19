import React, { useState } from 'react';
import * as Constants from './constants';
import { FaqItem } from './types';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const AccordionItem: React.FC<{ faq: FaqItem; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-700/50">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5">
        <span className="font-semibold text-slate-100 text-lg">{faq.question}</span>
        <ChevronDownIcon className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="pb-5 text-slate-300">{faq.answer}</p>
      </div>
    </div>
  );
};


const GeneralFaq: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const handleAccordionClick = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section id="faq">
      <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
      <p className="text-blue-200 mb-8">Find answers to common questions about VRU systems and maintenance.</p>
      <div className="space-y-2">
        {Constants.GENERAL_FAQS.map((faq, index) => (
          <AccordionItem 
            key={index} 
            faq={faq}
            isOpen={openAccordion === index}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default GeneralFaq;
