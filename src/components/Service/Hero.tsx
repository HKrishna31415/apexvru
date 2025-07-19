import React, { useState, useEffect } from 'react';

const ScrollDownIndicator: React.FC = () => (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="animate-bounce bg-white/20 p-2 w-10 h-10 ring-1 ring-slate-200/20 backdrop-blur-md rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </div>
);

const Hero: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const baseStyle = "transition-all duration-1000 ease-in-out";
    const hiddenStyle = "opacity-0 -translate-y-4";
    const visibleStyle = "opacity-100 translate-y-0";

    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/9JJq9o4Q6EE?autoplay=1&loop=1&mute=1&controls=0&playlist=9JJq9o4Q6EE"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
                ></iframe>
            </div>
            
            <div className="absolute inset-0 bg-slate-900/70"></div>
            
            <div className="relative z-10 text-center px-4">
                <h1 className={`${baseStyle} ${isMounted ? visibleStyle : hiddenStyle} text-5xl md:text-7xl font-bold text-white text-glow mb-4`}>
                    VRU Service Pro
                </h1>
                <p className={`${baseStyle} ${isMounted ? visibleStyle : hiddenStyle} transition-delay-300 text-lg md:text-xl text-blue-200 max-w-2xl mx-auto`}>
                    Peak Performance. Uninterrupted Operation. Your trusted partner in Vapor Recovery Unit maintenance and troubleshooting.
                </p>
            </div>
            <ScrollDownIndicator />
        </div>
    );
};

export default Hero;