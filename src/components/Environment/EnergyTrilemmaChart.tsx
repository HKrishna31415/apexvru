import React, { useRef, useState, useEffect } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);

const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M11 20A7 7 0 0 1 4 13c0-3.9 3.1-7 7-7 2.2 0 4.2 1 5.5 2.5L20 6" />
        <path d="M12 10v10" />
    </svg>
);

const BoltIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M13 2L3 14h9l-1 8l10-12h-9l1-8z" />
    </svg>
);

type Pillar = 'security' | 'sustainability' | 'equity';

const pillarData = {
    security: { impact: '+', title: 'ENERGY SECURITY', color: 'orange', description: 'Improves energy security by reducing the frequency of gasoline deliveries to service stations. This creates a more resilient fuel supply chain, less dependent on constant transportation and less vulnerable to disruptions.' },
    sustainability: { impact: '+', title: 'ENVIRONMENTAL SUSTAINABILITY', color: 'green', description: 'Improves energy sustainability by capturing harmful VOC emissions that contribute to smog and climate change. Recovered vapors are repurposed, reducing waste and the carbon footprint of the fuel cycle.' },
    equity: { impact: '+++', title: 'ENERGY EQUITY', color: 'blue', description: 'Improves energy equity by conserving valuable gasoline that would otherwise be lost to evaporation. This efficiency can contribute to stabilizing fuel prices, making energy more affordable for all communities.' },
};

const InfoModal = ({ pillar, onClose }: { pillar: Pillar, onClose: () => void }) => {
    const data = pillarData[pillar];
    const colorMap: Record<typeof pillarData[Pillar]['color'], string> = {
        orange: 'bg-orange-500',
        green: 'bg-green-600',
        blue: 'bg-blue-500'
    };
    
    return (
        <div 
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg shadow-2xl max-w-md w-full text-slate-700 transform transition-all animate-in zoom-in-95"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`flex justify-between items-center p-4 rounded-t-lg text-white ${colorMap[data.color]}`}>
                    <h3 className="text-xl font-bold">{data.title}</h3>
                    <button onClick={onClose} className="text-2xl font-bold leading-none hover:opacity-75">&times;</button>
                </div>
                <div className="p-6">
                    <p className="text-base leading-relaxed">{data.description}</p>
                </div>
            </div>
        </div>
    )
}

const impactToScore = (impact: string) => {
    switch (impact) {
        case '+': return 30;
        case '++': return 60;
        case '+++': return 90;
        default: return 0;
    }
}

const EnergyTrilemmaChart = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, { threshold: 0.3 });
    const [activeModal, setActiveModal] = useState<Pillar | null>(null);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActiveModal(null);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    const size = 500;
    const center = { x: size / 2, y: size / 2 };
    
    const vertices = {
        top: { x: 250, y: 50 },
        left: { x: 77, y: 350 },
        right: { x: 423, y: 350 },
    };

    const getPointForScore = (score: number, vertex: {x:number, y:number}) => {
        const factor = score / 100;
        const x = center.x + (vertex.x - center.x) * factor;
        const y = center.y + (vertex.y - center.y) * factor;
        return { x, y };
    };

    const dataPoints = {
        top: getPointForScore(impactToScore(pillarData.security.impact), vertices.top),
        left: getPointForScore(impactToScore(pillarData.sustainability.impact), vertices.left),
        right: getPointForScore(impactToScore(pillarData.equity.impact), vertices.right),
    };

    const dataPolygonPoints = `${dataPoints.top.x},${dataPoints.top.y} ${dataPoints.left.x},${dataPoints.left.y} ${dataPoints.right.x},${dataPoints.right.y}`;
    const centerStr = `${center.x},${center.y}`;
    
    return (
        <>
            {activeModal && <InfoModal pillar={activeModal} onClose={() => setActiveModal(null)} />}
            <div ref={ref} className="w-full max-w-md lg:max-w-xl mx-auto relative px-8 sm:px-12 md:px-16 py-24" style={{aspectRatio: '1 / 1'}}>
                <svg viewBox="0 0 500 500" className="w-full h-full absolute top-0 left-0">
                    <defs>
                        <linearGradient id="gradOrangeGreen" x1="50%" y1="0%" x2="10%" y2="80%">
                            <stop offset="0%" stopColor="#f99d26" />
                            <stop offset="100%" stopColor="#4c9f38" />
                        </linearGradient>
                        <linearGradient id="gradGreenBlue" x1="10%" y1="80%" x2="90%" y2="80%">
                            <stop offset="0%" stopColor="#4c9f38" />
                            <stop offset="100%" stopColor="#00A9E0" />
                        </linearGradient>
                        <linearGradient id="gradBlueOrange" x1="90%" y1="80%" x2="50%" y2="0%">
                            <stop offset="0%" stopColor="#00A9E0" />
                            <stop offset="100%" stopColor="#f99d26" />
                        </linearGradient>
                    </defs>
                    
                    {/* Structure */}
                    <polygon points={`${vertices.top.x},${vertices.top.y} ${vertices.left.x},${vertices.left.y} ${vertices.right.x},${vertices.right.y}`} fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="2" />
                    <line x1={center.x} y1={center.y} x2={vertices.top.x} y2={vertices.top.y} stroke="#f99d26" strokeWidth="1" strokeDasharray="3 3"/>
                    <line x1={center.x} y1={center.y} x2={vertices.left.x} y2={vertices.left.y} stroke="#4c9f38" strokeWidth="1" strokeDasharray="3 3"/>
                    <line x1={center.x} y1={center.y} x2={vertices.right.x} y2={vertices.right.y} stroke="#00A9E0" strokeWidth="1" strokeDasharray="3 3"/>

                    {/* Data Area */}
                    <g style={{ transformOrigin: `${center.x}px ${center.y}px`, transition: 'transform 1s cubic-bezier(0.25, 1, 0.5, 1)', transform: isVisible ? 'scale(1)' : 'scale(0)' }}>
                        <polygon points={`${centerStr} ${dataPoints.top.x},${dataPoints.top.y} ${dataPoints.left.x},${dataPoints.left.y}`} fill="url(#gradOrangeGreen)" fillOpacity="0.75" />
                        <polygon points={`${centerStr} ${dataPoints.left.x},${dataPoints.left.y} ${dataPoints.right.x},${dataPoints.right.y}`} fill="url(#gradGreenBlue)" fillOpacity="0.75" />
                        <polygon points={`${centerStr} ${dataPoints.right.x},${dataPoints.right.y} ${dataPoints.top.x},${dataPoints.top.y}`} fill="url(#gradBlueOrange)" fillOpacity="0.75" />
                        <polygon points={dataPolygonPoints} fill="none" stroke="#ffffff" strokeWidth="2.5" />
                    </g>
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-full h-full relative">
                        {/* Top Label */}
                        <div onClick={() => setActiveModal('security')} className="absolute top-[5%] left-1/2 -translate-x-1/2 -translate-y-[50%] sm:-translate-y-[50%] text-center w-4/5 sm:w-3/5 md:w-2/5 cursor-pointer group">
                             <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Click icon for info</div>
                            <div className="font-black text-slate-800 text-2xl sm:text-3xl text-orange-500 mb-1">{pillarData.security.impact}</div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-1 sm:mb-2 shadow-lg transition-transform pulse-icon-animation"> <LockIcon /> </div>
                            <div className="text-orange-500 font-bold tracking-wide text-[10px] sm:text-xs md:text-sm">{pillarData.security.title}</div>
                        </div>
                        
                        {/* Left Label */}
                        <div onClick={() => setActiveModal('sustainability')} className="absolute bottom-[10%] sm:bottom-[10%] left-0 -translate-x-[50%] xs:-translate-x-[45%] sm:-translate-x-[40%] text-center w-4/5 sm:w-3/5 md:w-2/5 cursor-pointer group">
                             <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Click icon for info</div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-1 sm:mb-2 shadow-lg transition-transform pulse-icon-animation"> <LeafIcon /> </div>
                            <div className="text-green-600 font-bold tracking-wide text-[10px] sm:text-xs md:text-sm leading-tight">ENVIRONMENTAL<br/>SUSTAINABILITY</div>
                            <div className="font-black text-slate-800 text-2xl sm:text-3xl text-green-600">{pillarData.sustainability.impact}</div>
                        </div>
                        
                        {/* Right Label */}
                        <div onClick={() => setActiveModal('equity')} className="absolute bottom-[10%] sm:bottom-[10%] right-0 translate-x-[50%] xs:translate-x-[45%] sm:translate-x-[40%] text-center w-4/5 sm:w-3/5 md:w-2/5 cursor-pointer group">
                             <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Click icon for info</div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-1 sm:mb-2 shadow-lg transition-transform pulse-icon-animation"> <BoltIcon /> </div>
                            <div className="text-blue-500 font-bold tracking-wide text-[10px] sm:text-xs md:text-sm">{pillarData.equity.title}</div>
                            <div className="font-black text-slate-800 text-2xl sm:text-3xl text-blue-500">{pillarData.equity.impact}</div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-slate-500 mt-4 text-sm font-semibold mb-0">Click an icon to learn more</p>
        </>
    );
};

export default EnergyTrilemmaChart;