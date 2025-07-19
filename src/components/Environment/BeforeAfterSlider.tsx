import React, { useState, useRef, useEffect } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

const BeforeAfterSlider: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(containerRef, { threshold: 0.2 });
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    
    const handleMove = (clientX: number) => {
        if (!isDragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const width = rect.width;
        let percentage = (x / width) * 100;
        percentage = Math.max(0, Math.min(100, percentage));
        setSliderPosition(percentage);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
    
    const handleTouchStart = () => setIsDragging(true);
    const handleTouchEnd = () => setIsDragging(false);
    const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

    useEffect(() => {
        if (!isDragging) return;
        
        const handleUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleUp);
        window.addEventListener('touchend', handleUp);
        
        return () => {
            window.removeEventListener('mouseup', handleUp);
            window.removeEventListener('touchend', handleUp);
        };
    }, [isDragging]);

    const beforeImage = 'https://images.unsplash.com/photo-1524169358666-79f22534BC6e?q=80&w=1920&fit=crop';
    const afterImage = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&fit=crop';

    return (
        <>
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <filter id="hazyCloudFilter">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                    <feComponentTransfer in="blur" result="adjustedBlur">
                        <feFuncR type="linear" slope="1.2" intercept="0.05" />
                        <feFuncG type="linear" slope="1.2" intercept="0.05" />
                        <feFuncB type="linear" slope="1.2" intercept="0.05" />
                    </feComponentTransfer>
                    <feTurbulence type="fractalNoise" baseFrequency="0.02 0.05" numOctaves="2" result="noise" />
                    <feComposite in="noise" in2="SourceGraphic" operator="arithmetic" k1="0" k2="0.4" k3="0.6" k4="0" result="compositeResult"/>
                    <feBlend in="adjustedBlur" in2="compositeResult" mode="screen" />
                </filter>
            </svg>
            <section className={`py-20 sm:py-28 bg-slate-900 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={containerRef}>
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">From Haze to Harmony</h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">See the transformative impact of clean air technology.</p>
                </div>
                <div 
                    ref={containerRef}
                    className="relative w-full max-w-5xl mx-auto aspect-video rounded-lg overflow-hidden select-none cursor-ew-resize border-4 border-slate-700"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onTouchMove={handleTouchMove}
                >
                    <img
                        src={afterImage}
                        alt="Clean cityscape"
                        className="absolute inset-0 w-full h-full object-cover"
                        draggable={false}
                    />
                    <div
                        className="absolute inset-0 w-full h-full overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <img
                            src={beforeImage}
                            alt="Hazy cityscape"
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ filter: 'url(#hazyCloudFilter)' }}
                            draggable={false}
                        />
                    </div>
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white/80 pointer-events-none"
                        style={{ left: `calc(${sliderPosition}% - 2px)` }}
                    >
                        <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-full bg-white/80 border-4 border-slate-800 flex items-center justify-center shadow-2xl">
                            <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default BeforeAfterSlider;