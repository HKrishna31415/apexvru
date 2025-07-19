import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const CascadeText = ({ text, className }: { text: string; className: string }) => {
    return (
        <h1 className={className}>
            {text.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                    {word.split('').map((char, charIndex) => (
                        <span 
                            key={`${wordIndex}-${charIndex}`} 
                            className={`inline-block transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                            style={{ transitionDelay: `${100 + (wordIndex * 50) + (charIndex * 30)}ms` }}
                        >
                            {char}
                        </span>
                    ))}
                    {wordIndex < text.split(' ').length - 1 && '\u00A0'}
                </span>
            ))}
        </h1>
    );
  };

  return (
    <section 
      className="relative min-h-screen flex items-center pt-32 pb-16 px-4 overflow-hidden animated-gradient-background"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center gap-12">
            <div className={`relative z-10 text-center lg:text-left lg:col-span-1 xl:col-span-2 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-x-5'}`}>
                <CascadeText 
                    text="Cleaner Air, Smarter Recovery" 
                    className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white" 
                />
                <p className={`mt-4 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-200 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '800ms'}}>
                  Vapor Recovery Units capture harmful emissions at the source, converting fugitive vapors back into valuable resources. This technology is a cornerstone for cleaner industrial processes and a healthier planet.
                </p>
            </div>
            <div className={`flex items-center justify-center lg:col-span-1 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-x-5'}`} style={{transitionDelay: '400ms'}}>
              <div className="w-full h-full max-w-full transform lg:scale-150 xl:scale-175">
                 <DotLottieReact
                    src="https://lottie.host/41326200-9e06-44a9-a50a-0de9422521ae/JJwCcTLohM.lottie"
                    autoplay
                    segment={[300, 511]} // Start at frame 300, assuming 1000 total frames. Adjust as needed.
                  />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;