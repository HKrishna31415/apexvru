import React, { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

interface SDG {
  number: number;
  title: string;
  description: string;
  color: string;
}

const sdgData: SDG[] = [
  {
    number: 13,
    title: 'Climate Action',
    description: 'Directly mitigates climate change by capturing potent greenhouse gases like methane.',
    color: '#4C9F38'
  },
  {
    number: 11,
    title: 'Sustainable Cities',
    description: 'Reduces air pollution (smog), leading to healthier and more sustainable communities.',
    color: '#F99D26'
  },
  {
    number: 12,
    title: 'Responsible Production',
    description: 'Prevents product waste by converting vapor back to a usable state, promoting circular economy principles.',
    color: '#BF8B2E'
  },
  {
    number: 7,
    title: 'Affordable & Clean Energy',
    description: 'Recovered hydrocarbons are a ready-to-use energy source, reducing the need for new extraction.',
    color: '#FCC30B'
  },
];

const SDGCard: React.FC<{ sdg: SDG; isVisible: boolean, index: number }> = ({ sdg, isVisible, index }) => {
    const delay = index * 150;
    return (
        <div 
            className={`bg-slate-800 rounded-lg p-6 flex flex-col items-center text-center border-t-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ borderColor: sdg.color, transitionDelay: `${delay}ms` }}
        >
            <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center font-black text-2xl text-white" style={{ backgroundColor: sdg.color }}>
                {sdg.number}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{sdg.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{sdg.description}</p>
        </div>
    );
};


const SDGSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, { threshold: 0.2 });

    return (
        <section ref={ref} className="py-20 sm:py-28 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Aligned with Global Goals</h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
                        VRU technology actively contributes to the United Nations Sustainable Development Goals (SDGs), making it a key player in global sustainability.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sdgData.map((sdg, index) => (
                        <SDGCard key={sdg.number} sdg={sdg} isVisible={isVisible} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SDGSection;
