import React, { useState } from 'react';
import { CheckIcon, XIcon } from './gasoline-constants';
import ElectricButton from './ElectricButton';


const FeatureItem: React.FC<{ icon: React.ReactNode; title: React.ReactNode; description: string }> = ({ icon, title, description }) => (
    <li className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">{icon}</div>
        <div>
            <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
            <p className="text-slate-600">{description}</p>
        </div>
    </li>
);

const OurSystemCard: React.FC = () => (
    <div className="border-2 border-amber-500 rounded-2xl p-8 shadow-2xl bg-white flex flex-col h-full">
        <h3 className="text-2xl font-bold text-gray-900">Our Advanced System</h3>
        <p className="mt-2 text-slate-600">The pinnacle of vapor recovery technology.</p>
        <ul className="mt-8 space-y-6 flex-1">
            <FeatureItem
                icon={<CheckIcon className="h-6 w-6 text-green-500" />}
                title={<><strong>250x</strong> Return on Energy</>}
                description="Our system is incredibly efficient, generating 250 times the energy it consumes."
            />
            <FeatureItem
                icon={<CheckIcon className="h-6 w-6 text-green-500" />}
                title={<><strong>5x</strong> Better Than Competitors</>}
                description="Outperforms the nearest competitor by a factor of five, maximizing your reclaimed fuel."
            />
            <FeatureItem
                icon={<CheckIcon className="h-6 w-6 text-green-500" />}
                title="99.9% Recovery Rate"
                description="Capture virtually all valuable vapor, ensuring minimal waste and maximum earnings."
            />
        </ul>
        <p className="mt-6 text-xs text-slate-500 italic">
            *Performance metrics for our new Ascent A-200 models. Not applicable to GEVLR models.
        </p>
        <a href="/technical-specs" className="mt-4 block w-full text-center rounded-lg bg-amber-500 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-amber-600 transition-colors">
            Learn More
        </a>
    </div>
);

const CompetitorCard: React.FC = () => (
    <div className="border border-slate-200 rounded-2xl p-8 shadow-lg bg-white flex flex-col h-full">
        <h3 className="text-2xl font-bold text-gray-500">Standard Competitors</h3>
        <p className="mt-2 text-slate-500">The conventional, less effective alternative.</p>
        <ul className="mt-8 space-y-6 flex-1">
            <FeatureItem
                icon={<XIcon className="h-6 w-6 text-red-500" />}
                title={<>Up to <strong>50x</strong> Return on Energy</>}
                description="Standard systems offer significantly lower energy efficiency, impacting your bottom line."
            />
            <FeatureItem
                icon={<XIcon className="h-6 w-6 text-red-500" />}
                title="Standard Performance"
                description="Limited by older technology, leaving valuable fuel vapors and potential revenue behind."
            />
            <FeatureItem
                icon={<XIcon className="h-6 w-6 text-red-500" />}
                title="~85-95% Recovery Rate"
                description="A noticeable percentage of vapor is lost, directly translating to lost income."
            />
        </ul>
        <div className="mt-10 block w-full text-center rounded-lg bg-slate-200 px-6 py-3 text-lg font-semibold text-slate-500">
            The Old Way
        </div>
    </div>
);

const Comparison: React.FC = () => {
  const [isPoweredUp, setIsPoweredUp] = useState(false);
  const [isIgniting, setIsIgniting] = useState(false);

  const handleIgnite = () => {
    if (isIgniting) return;
    setIsIgniting(true);
    setTimeout(() => {
        setIsPoweredUp(true);
    }, 3000); // Wait for button animation to finish
  };

  return (
    <section className="py-20 sm:py-28 w-full animate-gradient-animation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-amber-200 tracking-wider uppercase">Unmatched Performance</h2>
          <p className="mt-2 text-3xl font-black text-white tracking-tight sm:text-4xl">
            Why We're The Clear Choice
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-200">
            Our technology doesn't just compete. It defines a new standard for efficiency and profitability.
          </p>
        </div>
        
        <div className="mt-16 relative min-h-[520px]">
            {/* Initial State: Only competitor card and button are visible */}
            <div className={`transition-opacity duration-500 ${isPoweredUp ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-lg">
                        <CompetitorCard />
                    </div>
                    <div className="mt-12 text-center">
                        <ElectricButton
                            onClick={handleIgnite}
                            isAnimating={isIgniting}
                            disabled={isIgniting}
                            aria-label="Ignite the comparison to reveal our advanced system"
                            aria-controls="comparison-cards-final"
                            aria-expanded={isPoweredUp}
                        >
                            Upgrade
                        </ElectricButton>
                    </div>

                </div>
            </div>

            {/* Final State: Both cards appear side-by-side */}
             <div 
                id="comparison-cards-final"
                className={`absolute top-0 left-0 w-full transition-opacity duration-700 ease-in-out ${isPoweredUp ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-hidden={!isPoweredUp}
            >
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
                    <div className={`transition-all duration-700 ease-out ${isPoweredUp ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <OurSystemCard />
                    </div>
                    <div className={`transition-all duration-700 ease-out delay-100 ${isPoweredUp ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                       <CompetitorCard />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
export {};