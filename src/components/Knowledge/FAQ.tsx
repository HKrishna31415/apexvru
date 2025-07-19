
import React, { useState, useCallback } from 'react';
import { FAQ_DATA } from './constants';
import type { FAQItem } from '../../types';
import { ChevronDown, HelpCircle } from './Icons';

export const FAQ: React.FC = () => {
  const [faqs] = useState<FAQItem[]>(
    FAQ_DATA.map((item, index) => ({
      id: index,
      question: item.question,
      answer: item.answer,
    }))
  );
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = useCallback((id: number) => {
    setOpenId(prevId => (prevId === id ? null : id));
  }, []);

  return (
    <section className="p-6 md:p-8 rounded-2xl shadow-lg border border-white bg-white">
      <div className="flex items-center mb-6">
        <div className="text-indigo-600 mr-4"><HelpCircle /></div>
        <h2 className="text-2xl md:text-3xl font-bold text-black">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-4">
        {faqs.map(faq => (
          <div key={faq.id} className="border border-slate-200 rounded-lg overflow-hidden">
            <button
              onClick={() => handleToggle(faq.id)}
              className="w-full flex justify-between items-center p-5 text-left font-semibold text-black hover:bg-gray-100 focus:outline-none"
            >
              <span>{faq.question}</span>
              <ChevronDown className={`transform transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`transition-all duration-500 ease-in-out ${openId === faq.id ? 'max-h-screen' : 'max-h-0'}`}
              style={{ transitionProperty: 'max-height, padding' }}
            >
              <div className="p-5 border-t border-slate-200">
                 <div className="prose prose-indigo max-w-none text-black">
                    <p dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br />') }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
