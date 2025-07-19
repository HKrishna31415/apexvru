
import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import { InteractiveDiagram } from '../components/Knowledge/InteractiveDiagram';
import { FAQ } from '../components/Knowledge/FAQ';

import { Lightbulb, Atom, TestTube, Factory, Leaf, HandCoins } from '../components/Knowledge/Icons';
import { SECTIONS } from '../components/Knowledge/constants';
import { ScienceMethod } from '../types';

const KnowledgeBase: React.FC = () => {
  const { introduction, science, components, applications, benefits } = SECTIONS;

  return (
    <div className="min-h-screen font-sans text-black">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          
          <Section title={introduction.title} icon={<Lightbulb />}>
            <p className="text-lg leading-relaxed text-slate-700">{introduction.content}</p>
          </Section>

          <InteractiveDiagram />

          <Section title={science.title} icon={<Atom />}>
            <p className="mb-6 text-slate-700 leading-relaxed">{science.content}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {science.methods.map((method: ScienceMethod, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 transition-shadow duration-300">
                  <h3 className="font-bold text-lg text-indigo-600 mb-2">{method.name}</h3>
                  <p className="text-slate-600">{method.description}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title={components.title} icon={<TestTube />}>
             <p className="mb-6 text-slate-700 leading-relaxed">{components.content}</p>
             <ul className="list-disc list-inside space-y-3 text-slate-700">
              {components.items.map((item, index) => (
                <li key={index}><span className="font-semibold text-slate-800">{item.name}:</span> {item.description}</li>
              ))}
            </ul>
          </Section>

          <Section title={applications.title} icon={<Factory />}>
            <p className="mb-6 text-slate-700 leading-relaxed">{applications.content}</p>
            <div className="flex flex-wrap gap-4">
              {applications.examples.map((example, index) => (
                <span key={index} className={`text-sm font-medium px-4 py-2 rounded-full border border-slate-200 ${example === 'Gasoline Dispensing Stations' ? 'bg-indigo-600 text-white font-bold' : 'bg-white text-indigo-800'}`}>{example}</span>
              ))}
            </div>
          </Section>
          
          <Section title={benefits.title} icon={<div className="flex space-x-2"><Leaf className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600" /><HandCoins className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"/></div>}>
            <p className="mb-6 text-slate-700 leading-relaxed">{benefits.content}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 p-6 rounded-xl">
                <h3 className="font-bold text-xl text-violet-800 mb-2">Environmental</h3>
                <ul className="list-disc list-inside space-y-2 text-violet-700">
                  {benefits.environmental.map((benefit, index) => <li key={index}>{benefit}</li>)}
                </ul>
              </div>
              <div className="bg-white border border-slate-200 p-6 rounded-xl">
                <h3 className="font-bold text-xl text-indigo-800 mb-2">Economic</h3>
                 <ul className="list-disc list-inside space-y-2 text-indigo-700">
                  {benefits.economic.map((benefit, index) => <li key={index}>{benefit}</li>)}
                </ul>
              </div>
            </div>
          </Section>

          <FAQ />
        </div>
      </main>

    </div>
  );
};

export default KnowledgeBase;