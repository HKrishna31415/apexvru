import React, { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

const HowItWorksSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, { threshold: 0.4 });

    return (
        <section id="how-it-works" className="py-20 sm:py-28 bg-white text-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How A VRU Works</h2>
                    <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">An automated process turns harmful vapor into valuable liquid.</p>
                </div>

                <div ref={ref} className="relative p-4 md:p-8 rounded-lg bg-white border border-slate-200 shadow-lg">
                    <style>
                        {`
                        .draw-animation { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw-path 2s ease-out forwards; }
                        @keyframes draw-path { to { stroke-dashoffset: 0; } }

                        .fade-in-animation { opacity: 0; animation: fade-in 1s ease-in forwards; }
                        @keyframes fade-in { to { opacity: 1; } }

                        .pulse-animation { animation: pulse 2s infinite ease-in-out; }
                        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); } }
                        
                        .flow-dot {
                            offset-path: path('M 125 250 Q 125 150, 300 150');
                            animation: ${isVisible ? 'flow 3s linear forwards' : 'none'};
                            opacity: 0;
                        }
                         .flow-dot-return {
                            offset-path: path('M 350 220 Q 250 240, 160 260');
                             animation: ${isVisible ? 'flow 3s linear forwards' : 'none'};
                             opacity: 0;
                        }
                        @keyframes flow {
                            0% { opacity: 1; offset-distance: 0%; }
                            90% { opacity: 1; }
                            100% { opacity: 0; offset-distance: 100%; }
                        }
                        `}
                    </style>
                    <svg viewBox="0 0 800 400" className="w-full h-auto font-sans">
                        
                        {/* 1. Storage Tank */}
                        <g className={isVisible ? 'fade-in-animation' : ''} style={{animationDelay: '0s'}}>
                            <rect x="50" y="250" width="150" height="100" rx="10" ry="10" className="fill-gray-200 stroke-gray-400" strokeWidth="2" />
                            <text x="125" y="305" textAnchor="middle" className="fill-slate-800 font-semibold text-lg">Storage Tank</text>
                            <text x="125" y="240" textAnchor="middle" className="fill-amber-300 font-bold text-sm">VAPORS</text>
                        </g>

                        {/* 2. Vapor Path to VRU */}
                        <path d="M 125 250 Q 125 150, 300 150" className={`fill-none stroke-emerald-500/50 stroke-2 ${isVisible ? 'draw-animation' : ''}`} style={{animationDelay: '0.5s'}}/>
                        <circle r="4" className="fill-emerald-400 flow-dot" style={{ animationDelay: '1s' }} />
                        <g className={isVisible ? 'fade-in-animation' : ''} style={{animationDelay: '1s'}}>
                          <text x="160" y="180" className="fill-emerald-600 text-sm font-bold">1. Vapors Captured</text>
                        </g>
                        
                        {/* 3. VRU */}
                        <g transform-origin="center" className={`${isVisible ? 'fade-in-animation' : ''} ${isVisible ? 'pulse-animation' : ''}`} style={{animationDelay: '1.5s', transformBox: 'fill-box'}}>
                            <rect x="300" y="100" width="200" height="120" rx="10" ry="10" className="fill-blue-500 stroke-blue-700" strokeWidth="2" />
                            <text x="400" y="145" textAnchor="middle" className="fill-white font-semibold text-lg">Vapor Recovery Unit</text>
                            <text x="400" y="170" textAnchor="middle" className="fill-blue-200 text-sm">(Compression & Cooling)</text>
                            <text x="400" y="195" textAnchor="middle" className="fill-blue-200 text-sm font-bold">2. VAPOR PROCESSED</text>
                        </g>
                        
                        {/* 4. Clean Air Out */}
                        <path d="M 400 100 L 400 50" className={`fill-none stroke-gray-400 stroke-2 ${isVisible ? 'draw-animation' : ''}`} style={{animationDelay: '2.5s'}} />
                        <g className={isVisible ? 'fade-in-animation' : ''} style={{animationDelay: '3s'}}>
                          <text x="410" y="70" className="fill-gray-600 text-sm font-bold">4. Clean Air Vented</text>
                          <path d="M 400 50 l -5 -5 m 5 5 l 5 -5" stroke="#6b7280" strokeWidth="2" />
                        </g>

                        {/* 5. Liquid Return Path */}
                        <path d="M 350 220 Q 250 240, 160 260" className={`fill-none stroke-blue-500/50 stroke-2 ${isVisible ? 'draw-animation' : ''}`} style={{animationDelay: '3.5s'}} />
                        <circle r="4" className="fill-blue-400 flow-dot-return" style={{ animationDelay: '4s' }} />

                        <g className={isVisible ? 'fade-in-animation' : ''} style={{animationDelay: '4s'}}>
                          <text x="220" y="250" className="fill-blue-600 text-sm font-bold">3. Liquid Returned</text>
                          <path d="M 160 260 l -5 -5 m 5 5 l -5 5" stroke="#2563eb" strokeWidth="2" />
                        </g>

                    </svg>
                </div>
            </div>
        </section>
    );
}

export default HowItWorksSection;