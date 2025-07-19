import React, { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import StatCounter from './StatCounter';
import CssTree from './tree';


const EquivalentsSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, { threshold: 0.1 });

    return (
        <section ref={ref} className="py-20 sm:py-28 bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl md:text-4xl font-bold text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        A World of Difference
                    </h2>
                    <p className={`mt-4 text-lg text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        Visualizing the annual environmental contribution of a typical VRU system.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-12 items-center justify-center">
                    
                    <div className={`p-8 rounded-lg bg-slate-800/50 border border-slate-700 transition-all duration-1000 max-w-4xl mx-auto w-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h3 className="text-2xl font-bold text-white text-center mb-4">Like Planting a Forest</h3>
                        <div className={`relative h-64 md:h-80 flex justify-center items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '300ms'}}>
                            <div className="scale-[1.5] md:scale-[2]">
                                <CssTree />
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <div className="text-4xl md:text-5xl font-black text-emerald-400">
                                {isVisible && <StatCounter to={2.3} suffix="M+" decimals={1}/>}
                            </div>
                            <p className="mt-2 text-lg text-slate-300">Trees Worth of CO₂ Absorption</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default EquivalentsSection;