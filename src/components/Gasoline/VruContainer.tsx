
import React, { useState, useEffect, useRef } from 'react';

interface VruContainerProps {
    label: string;
    fillPercentage: number;
    baseColor: 'cyan' | 'orange';
}

const colorMap = {
    cyan: { // Golden gradient for our efficient model
        glow: 'shadow-[0_0_25px_10px_rgba(255,215,0,0.4)]', // Gold glow
        wave1: 'rgba(184, 134, 11, 0.8)',   // Dark Goldenrod (bottom layer)
        wave2: 'rgba(218, 165, 32, 0.6)',   // Goldenrod (middle layer)
        wave3: 'rgba(255, 215, 0, 0.4)',   // Bright Gold (top layer)
        text: 'text-yellow-400',
    },
    orange: { // "Pale Yellow" for the less efficient competitor
        glow: 'shadow-[0_0_15px_5px_rgba(255,223,0,0.3)]',
        wave1: 'rgba(250, 240, 190, 0.5)',
        wave2: 'rgba(255, 235, 150, 0.4)',
        wave3: 'rgba(255, 255, 224, 0.3)',
        text: 'text-yellow-300',
    }
};

const VruContainer: React.FC<VruContainerProps> = ({ label, fillPercentage, baseColor }) => {
    const [phase, setPhase] = useState(0);
    const animFrameId = useRef<number | null>(null);
    const theme = colorMap[baseColor];

    useEffect(() => {
        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            setPhase(elapsed * 0.0015);
            animFrameId.current = requestAnimationFrame(animate);
        };
        animFrameId.current = requestAnimationFrame(animate);
        return () => {
            if (animFrameId.current) {
                cancelAnimationFrame(animFrameId.current);
            }
        };
    }, []);

    const svgWidth = 100;
    const svgHeight = 100;
    const surfaceY = svgHeight - (fillPercentage / 100 * svgHeight);

    const getWavePath = (amplitude: number, frequency: number, phaseOffset: number): string => {
        let d = `M 0,${surfaceY}`;
        const segments = 20;
        for (let i = 0; i <= segments; i++) {
            const x = (i / segments) * svgWidth;
            const angle = phase * frequency + phaseOffset + (i / segments) * Math.PI * 2;
            const y = surfaceY + Math.sin(angle) * amplitude;
            d += ` L ${x},${y}`;
        }
        d += ` L ${svgWidth},${svgHeight} L 0,${svgHeight} Z`;
        return d;
    };

    const path1 = getWavePath(2.5, 3, 0);
    const path2 = getWavePath(2, 5, 2);
    const path3 = getWavePath(1.5, 7, 1);

    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-bold text-slate-200">{label}</h2>
            <div className={`relative w-full max-w-xs h-96 bg-slate-700/30 border-2 border-slate-600 rounded-xl overflow-hidden transition-shadow duration-500 ${fillPercentage > 1 ? theme.glow : ''}`}>
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d={path3} fill={theme.wave3} />
                    <path d={path2} fill={theme.wave2} />
                    <path d={path1} fill={theme.wave1} />
                </svg>

                <div className="absolute inset-0 border-4 border-slate-800 rounded-xl pointer-events-none"></div>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-black ${theme.text} opacity-80 transition-opacity duration-300 ${fillPercentage > 10 ? 'opacity-0' : ''}`}>
                    {Math.round(fillPercentage)}<span className="text-4xl">%</span>
                </div>
            </div>
             <p className={`text-2xl font-bold ${theme.text} transition-opacity duration-300 ${fillPercentage > 0 ? 'opacity-100' : 'opacity-0'}`}>
                {fillPercentage.toFixed(1)}% Recovered
            </p>
        </div>
    );
};

export default VruContainer;