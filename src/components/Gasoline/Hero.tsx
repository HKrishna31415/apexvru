import React, { useState, useEffect, useRef } from 'react';
import FuelDropIcon from './FuelDropIcon';

const Hero: React.FC = () => {
  const [path1, setPath1] = useState('');
  const [path2, setPath2] = useState('');
  const [path3, setPath3] = useState('');
  const animationFrameId = useRef<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState('');

  const waveFill = "url(#wave-gradient)";

  useEffect(() => {
    let frame = 0;

    const generateWavePath = (config: { amplitude: number; frequency: number; phase: number; yOffset: number }) => {
      const { amplitude, frequency, phase, yOffset } = config;
      const points = 10;
      const width = 1440;
      const height = 320;
      const step = width / points;

      let path = `M0,${yOffset}`;
      for (let i = 0; i <= points; i++) {
        const x = i * step;
        const y = yOffset + amplitude * Math.sin(x * frequency + phase);
        path += ` L${x},${y}`;
      }
      path += ` L${width},${height} L0,${height} Z`;
      return path;
    };

    const animate = () => {
      const speed = 0.05;
      frame += speed;

      setPath1(generateWavePath({ amplitude: 20, frequency: 0.0025, phase: frame, yOffset: 150 }));
      setPath2(generateWavePath({ amplitude: 30, frequency: 0.002, phase: frame + 1, yOffset: 160 }));
      setPath3(generateWavePath({ amplitude: 15, frequency: 0.003, phase: frame + 2, yOffset: 170 }));

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      if (!contentRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const rotateX = (clientY / innerHeight - 0.5) * -15;
      const rotateY = (clientX / innerWidth - 0.5) * 15;
      setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="wave-gradient" gradientTransform="rotate(24)">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-40 md:h-64 transform rotate-180">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full absolute bottom-0 left-0 opacity-50"><path d={path3} fill={waveFill} /></svg>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[90%] absolute bottom-0 left-0 opacity-60"><path d={path2} fill={waveFill} /></svg>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[80%] absolute bottom-0 left-0 opacity-70"><path d={path1} fill={waveFill} /></svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 md:h-64">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full absolute bottom-0 left-0 opacity-50"><path d={path1} fill={waveFill} /></svg>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[90%] absolute bottom-0 left-0 opacity-60"><path d={path2} fill={waveFill} /></svg>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[80%] absolute bottom-0 left-0 opacity-70"><path d={path3} fill={waveFill} /></svg>
        </div>
      </div>
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-white p-4 perspective">
        <div
          ref={contentRef}
          style={{ transform: transformStyle }}
          className="group transition-transform duration-200 ease-out flex flex-col items-center"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 animate-bobbing-drop">
            <FuelDropIcon 
              fill="url(#wave-gradient)" 
              className="w-full h-full drop-shadow-[0_5px_15px_rgba(251,191,36,0.4)]" 
            />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 leading-tight animate-fadeInUp delay-200">
              <span className="group-hover:text-shadow-glow transition-all duration-300">Fuel Reclaimed.</span>
              <br className="sm:hidden"/>{' '}
              <span className="group-hover:text-shadow-glow transition-all duration-300">Turn Emissions into Earnings.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl animate-fadeInUp delay-400">
              Our <strong className="text-amber-300 font-semibold">advanced vapor recovery systems</strong> transform emissions back into <strong className="text-amber-300 font-semibold">high-quality, usable gasoline</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
export {};