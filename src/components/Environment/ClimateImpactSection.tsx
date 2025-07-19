import React, { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import N2O4Icon from './n2o4';
import AtmosphereIcon from './loader-shield';


const ClimateImpactSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, { threshold: 0.2 });

    const transitionClass = (delay: string) => `transition-all duration-1000 ${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

    return (
        <section ref={ref} className="py-20 sm:py-28 bg-slate-800/50">
            <div className="container mx-auto px-4">
                <div className={`text-center mb-16 ${transitionClass('delay-0')}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Directly Combating Climate Change</h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">VRU technology is a critical tool in the fight against potent greenhouse gases and atmospheric damage.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className={`flex flex-col items-center text-center p-8 rounded-lg bg-slate-800 border border-slate-700 h-full ${transitionClass('delay-200')}`}>
                         <N2O4Icon isVisible={isVisible} />
                         <h3 className="text-2xl font-bold text-white mt-4">Inhibits Smog Formation (N₂O₄)</h3>
                         <p className="text-slate-400 mt-2 leading-relaxed">VRUs capture VOCs & NOx. These compounds not only form smog but also act as greenhouse gases that trap heat in the atmosphere. Preventing their release is key for cleaner air and a stable climate.</p>
                    </div>
                     <div className={`flex flex-col items-center justify-center text-center p-8 rounded-lg bg-slate-800 border border-slate-700 h-full ${transitionClass('delay-400')}`}>
                         <div className="relative w-[200px] h-[200px] flex items-center justify-center">
                            <AtmosphereIcon isVisible={isVisible} />
                         </div>
                         <h3 className="text-2xl font-bold text-white mt-4">Protecting Our Atmosphere</h3>
                         <p className="text-slate-400 mt-2 leading-relaxed">By capturing Volatile Organic Compounds (VOCs), VRUs reduce the formation of ground-level ozone (smog) and protect the vital stratospheric ozone layer.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClimateImpactSection;