import React, { useState } from 'react';
import VaporCloud from './VaporCloud';
import FanIcon from './FanIcon';
import FlowAnimation from './FlowAnimation';
import VRUFlow from './VRUFlow';
import FlowTextBubbles from './FlowTextBubbles';

type SceneState = 'polluted' | 'transitioning' | 'clean';

const HomeHero: React.FC = () => {
    const [sceneState, setSceneState] = useState<SceneState>('polluted');
    const [showCleanContent, setShowCleanContent] = useState<boolean>(false);

    const handleCleanAir = () => {
        if (sceneState === 'polluted') {
            setSceneState('transitioning');
            setTimeout(() => {
                setSceneState('clean');
            }, 3500); // Duration of the clearing animation
            
            setTimeout(() => {
                setShowCleanContent(true);
            }, 3800); // A bit after the scene is clean for text to appear
        }
    };
    
    const backgroundStyle: React.CSSProperties = {
        backgroundImage: `url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop)`,
    };

    return (
        <>
            <main className="relative w-screen h-screen bg-gray-900 overflow-hidden">
            {/* Background Image */}
            <div 
                style={backgroundStyle} 
                className={`absolute inset-0 bg-cover bg-center transition-all duration-[3000ms] ease-in-out
                ${sceneState === 'polluted' ? 'blur-md grayscale brightness-50 saturate-50' : 'blur-none grayscale-0 brightness-100 saturate-100'}`}
            />
            
            {/* Vapor Cloud - unmounts when clean */}
            {sceneState !== 'clean' && <VaporCloud isTransitioning={sceneState === 'transitioning'} />}
            
            {/* Fan Icon Container - visible only during transition */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-opacity duration-500
                ${sceneState === 'transitioning' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <FanIcon className="text-white/70 w-48 h-48 animate-fan-spin" />
            </div>
            
            {/* Content Overlay */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center p-8 bg-black/40">
                <div className="relative h-40 w-full max-w-4xl flex items-center justify-center">
                   {/* Polluted State Text */}
                    <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000
                        ${!showCleanContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-shadow">
                            Lost Vapor is Lost Profit.
                        </h1>
                        <p className="mt-4 text-lg md:text-2xl max-w-3xl text-shadow-md">
                            Every year, millions of dollars in product evaporate into thin air. We help you capture it.
                        </p>
                    </div>

                    {/* Clean State Text */}
                    <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000
                        ${showCleanContent ? 'opacity-100' : 'opacity-0'}`}
                    >
                         <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-shadow text-white">
                           Problem Solved. Profit Recaptured.
                        </h1>
                        <p className="mt-4 text-lg md:text-2xl max-w-3xl text-shadow-md">
                            Our Stage III VRU technology delivers 99.9% vapor recovery, guaranteed.
                        </p>
                    </div>
                </div>
                
                {/* Buttons Container */}
                <div className="relative mt-12 w-full min-h-20 flex items-center justify-center">
                    {/* Initial/Transitioning Button */}
                     <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${sceneState !== 'polluted' ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100'}`}>
                        <button 
                            onClick={handleCleanAir}
                            disabled={sceneState !== 'polluted'}
                            className="px-12 py-5 text-xl font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl shadow-lg shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-400/50 animate-gradient disabled:opacity-75 disabled:scale-100 disabled:cursor-wait"
                        >
                           CLEAN THE AIR
                        </button>
                    </div>
                    
                    {/* Final State Buttons */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col sm:flex-row gap-4 transition-opacity duration-1000 delay-300
                        ${showCleanContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <a href="/process" className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg shadow-lg shadow-blue-500/40 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-400/50 transition-all animate-gradient">
                            How it Works?
                        </a>
                        <a href="/technology" className="px-8 py-3 text-lg font-semibold bg-transparent border-2 border-white hover:bg-white/10 rounded-lg shadow-lg transform hover:scale-105 transition-all">
                            Technology Breakdown
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .text-shadow { text-shadow: 0 2px 5px rgba(0,0,0,0.6); }
                .text-shadow-md { text-shadow: 0 1px 4px rgba(0,0,0,0.8); }
                @keyframes gradient-flow {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                  background-size: 200% 200%;
                  animation: gradient-flow 4s ease infinite;
                }
                @keyframes fan-spin-kf {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                .animate-fan-spin {
                  animation: fan-spin-kf 0.4s linear infinite;
                }
                .gradient-text {
                    background: linear-gradient(to right, #007bff, #6f42c1);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </main>

            <section className="w-screen py-16 bg-gray-100 text-gray-800 flex flex-col items-center justify-center px-4">
                <VRUFlow />
            </section>

            {/* Story and Testimonial Section - Re-added */}
            <section className="w-screen py-16 bg-white text-gray-800 flex flex-col items-center justify-center px-4">
                <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Hear From Our Partners</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <p className="text-lg italic mb-4">"Apex Energy's VRU system has revolutionized our operations. We've seen a significant increase in recovered product and a dramatic reduction in emissions. Their support is unparalleled!"</p>
                        <p className="font-semibold text-right">- John Doe, Operations Manager</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <p className="text-lg italic mb-4">"The ROI was almost immediate. Beyond the financial benefits, knowing we're contributing to a cleaner environment with Apex Energy's technology is incredibly rewarding."</p>
                        <p className="font-semibold text-right">- Jane Smith, CEO</p>
                    </div>
                </div>
                <a href="/contact" className="mt-12 px-12 py-5 text-xl font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl shadow-lg shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-400/50 animate-gradient">Get Your Story Started</a>
            </section>
        </>
    );
};

export default HomeHero;