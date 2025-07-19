import React, { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const flow = keyframes`
  0% { transform: translateX(-150%); opacity: 0.5; }
  40% { opacity: 1; }
  60% { transform: translate(0, -15px) scale(0.6); background-color: #34d399; }
  100% { transform: translate(150%, -30px) scale(0.3); opacity: 0; background-color: #34d399; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const ozonePulse = keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.5); }
  50% { transform: scale(1.05); box-shadow: 0 0 30px 15px rgba(34, 211, 238, 0); }
`;

// Keyframes for the "Improves Safety" shield animation
const shieldPulseOnImpact = keyframes`
  0%, 49% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
  55% { transform: scale(1.1); box-shadow: 0 0 25px 15px rgba(34, 197, 94, 0.5); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
`;

const sparkTravel = keyframes`
  0% { transform: translate(80px, -80px) rotate(0deg) scale(0); opacity: 0; }
  45% { transform: translate(15px, -15px) rotate(180deg) scale(1); opacity: 1; }
  49.9% { opacity: 1; }
  50% { transform: translate(10px, -10px) rotate(180deg) scale(1.2); opacity: 0; } /* Impact point */
  100% { opacity: 0; }
`;


// Styled Components for Animated Icons
const PollutionWrapper = styled.div<{ isVisible: boolean }>`
  position: relative; width: 150px; height: 150px;
  .filter-box {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 40px; height: 80px;
    background: linear-gradient(to right, #1e293b, #334155);
    border: 2px solid #475569;
    border-radius: 8px;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.4);
  }
  .particle {
    position: absolute; left: 50%;
    width: 10px; height: 10px; border-radius: 50%;
    background-color: #f59e0b; /* amber-500 */
    animation: ${({ isVisible }) => isVisible ? flow : 'none'} 2.5s linear infinite;
  }
`;
const PollutionAnimation = ({ isVisible }: { isVisible: boolean }) => (
  <PollutionWrapper isVisible={isVisible}>
    <div className="filter-box" />
    <div className="particle" style={{top: '30%', animationDelay: '0s'}} />
    <div className="particle" style={{top: '50%', animationDelay: '-1.2s'}} />
    <div className="particle" style={{top: '70%', animationDelay: '-0.6s'}} />
  </PollutionWrapper>
);

const GasMolecule = styled.div<{ isVisible: boolean }>`
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${({ isVisible }) => isVisible ? pulse : 'none'} 3s ease-in-out infinite;
    svg {
        width: 100%;
        height: 100%;
        overflow: visible;
    }
    .bond { stroke: #64748b; stroke-width: 4; }
    .carbon { fill: #0f172a; stroke: #334155; stroke-width: 2; }
    .hydrogen { fill: #cbd5e1; }
`;
const ConservationAnimation = ({ isVisible }: { isVisible: boolean }) => (
    <GasMolecule isVisible={isVisible}>
      {/* Simplified Octane Molecule */}
      <svg viewBox="0 0 100 60">
        <line className="bond" x1="10" y1="30" x2="30" y2="30" />
        <line className="bond" x1="30" y1="30" x2="50" y2="30" />
        <line className="bond" x1="50" y1="30" x2="70" y2="30" />
        <line className="bond" x1="70" y1="30" x2="90" y2="30" />
        <circle className="carbon" cx="10" cy="30" r="6" />
        <circle className="carbon" cx="30" cy="30" r="6" />
        <circle className="carbon" cx="50" cy="30" r="6" />
        <circle className="carbon" cx="70" cy="30" r="6" />
        <circle className="carbon" cx="90" cy="30" r="6" />
        <circle className="hydrogen" cx="0" cy="30" r="3" />
        <circle className="hydrogen" cx="100" cy="30" r="3" />
        <circle className="hydrogen" cx="30" cy="18" r="3" />
        <circle className="hydrogen" cx="30" cy="42" r="3" />
        <circle className="hydrogen" cx="50" cy="18" r="3" />
        <circle className="hydrogen" cx="50" cy="42" r="3" />
        <circle className="hydrogen" cx="70" cy="18" r="3" />
        <circle className="hydrogen" cx="70" cy="42" r="3" />
      </svg>
    </GasMolecule>
);

const OzoneWrapper = styled.div<{ isVisible: boolean }>`
  position: relative; width: 150px; height: 150px;
  .shield {
    position: absolute; inset: 0;
    border: 5px solid #06b6d4;
    border-radius: 50%;
    animation: ${({ isVisible }) => isVisible ? ozonePulse : 'none'} 2.5s ease-in-out infinite;
  }
  .precursor {
     position: absolute;
     width: 10px; height: 10px; border-radius: 50%; background: #f43f5e;
     opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
     transition: opacity 0.5s ease-in;
  }
`;
const OzoneAnimation = ({ isVisible }: { isVisible: boolean }) => (
    <OzoneWrapper isVisible={isVisible}>
        <div className="shield" />
        <div className="precursor" style={{top: '15%', left: '15%', transitionDelay: '0.2s'}} />
        <div className="precursor" style={{top: '80%', left: '20%', transitionDelay: '0.4s'}} />
        <div className="precursor" style={{top: '25%', left: '75%', transitionDelay: '0.6s'}} />
    </OzoneWrapper>
);


const SafetyWrapper = styled.div<{ isVisible: boolean }>`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .shield {
    position: relative;
    width: 90px;
    height: 100px;
    background: linear-gradient(45deg, #10b981, #22c55e); /* emerald-500 to green-500 */
    clip-path: path('M0 0 H90 V70 C90 95, 65 100, 45 100 C25 100, 0 95, 0 70 Z');
    border: 3px solid #6ee7b7; /* green-300 */
    z-index: 2;
    animation: ${({ isVisible }) => (isVisible ? shieldPulseOnImpact : 'none')} 2.5s ease-out infinite;

    &::after {
      content: '';
      position: absolute;
      top: 45%;
      left: 50%;
      width: 20px;
      height: 40px;
      border: solid white;
      border-width: 0 8px 8px 0;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

  .spark {
    position: absolute;
    width: 25px;
    height: 25px;
    z-index: 1;
    
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #f59e0b; /* amber-500 */
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      animation: ${({ isVisible }) => isVisible ? sparkTravel : 'none'} 2.5s ease-in-out infinite;
    }
  }
`;

const SafetyAnimation = ({ isVisible }: { isVisible: boolean }) => (
    <SafetyWrapper isVisible={isVisible}>
        <div className="shield"></div>
        <div className="spark"></div>
    </SafetyWrapper>
);


const AnimatedBenefitCard = ({ benefit, isVisible, index }: { benefit: any, isVisible: boolean, index: number }) => {
    const delay = index * 200;
    return (
        <div className={`flex flex-col items-center text-center p-6 md:p-8 rounded-lg bg-slate-800 border border-slate-700 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms` }}>
            <div className="h-40 flex items-center justify-center">
                {benefit.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mt-4">{benefit.title}</h3>
            <p className="text-slate-400 mt-2 leading-relaxed text-base">{benefit.description}</p>
        </div>
    );
};

const BenefitsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.1 });
  
  const benefitsData = [
      { icon: <PollutionAnimation isVisible={isVisible} />, title: 'Reduces Air Pollution', description: 'Filters over 95% of Volatile Organic Compounds (VOCs) and other harmful vapors before they enter the atmosphere.' },
      { icon: <ConservationAnimation isVisible={isVisible} />, title: 'Conserves Resources', description: 'Recovers valuable hydrocarbon vapors and converts them back into usable liquid products, preventing resource waste.' },
      { icon: <OzoneAnimation isVisible={isVisible} />, title: 'Prevents Ozone Formation', description: 'By capturing VOCs, VRUs help prevent the formation of ground-level ozone (smog), a major component of air pollution.' },
      { icon: <SafetyAnimation isVisible={isVisible} />, title: 'Improves Safety', description: 'Reduces the risk of fire and explosion by minimizing flammable vapor concentrations at industrial sites.' }
  ];

  return (
    <section id="benefits" ref={ref} className="py-20 sm:py-28 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">A Shield For Our Planet</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">VRUs deliver a powerful combination of environmental protection, resource conservation, and improved safety.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefitsData.map((benefit, index) => (
            <AnimatedBenefitCard key={index} benefit={benefit} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;