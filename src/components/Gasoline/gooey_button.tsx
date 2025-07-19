
import React from 'react';

interface GooeyButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    children: React.ReactNode;
}


const GooeyButton: React.FC<GooeyButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <>
      {/* Tailwind CSS is loaded via CDN in the HTML, so no import needed here. */}
      {/* Custom styles for animations and specific pseudo-classes not easily done with Tailwind */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

        .button-p-text-shadow {
          text-shadow: 0 0 10px rgba(255, 165, 0, 0.7);
        }

        .button:not([disabled]) .button-p:hover + .liquid span:not(.bg) {
          animation-play-state: running;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          80%,
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes move {
          0%,
          100% {
            transform: translateX(0) translateY(0) scale(1);
          }
          20% {
            transform: translateX(-8px) translateY(-4px) scale(1.1);
          }
          40% {
            transform: translateX(8px) translateY(8px) scale(0.9);
          }
          60% {
            transform: translateX(-8px) translateY(4px) scale(1.1);
          }
          80% {
            transform: translateX(5px) translateY(-8px) scale(0.9);
          }
        }

        @media (pointer: coarse), (pointer: none) {
          .liquid-span-child-span {
            background: transparent !important; /* Override inline style */
          }
        }
        `}
      </style>

      <button
        onClick={onClick}
        disabled={disabled}
        className="button bg-transparent border-none relative flex items-center justify-center flex-col disabled:cursor-not-allowed disabled:opacity-60 transition-opacity"
      >
        <div className="button-p w-[200px] h-[60px] z-10 text-xl text-white text-center cursor-pointer mx-auto flex items-center justify-center font-semibold transition-all duration-300 ease-in-out button-p-text-shadow tracking-wide select-none
                      hover:scale-110 active:scale-100">
          {children}
        </div>
        <div className="liquid w-[150px] h-[200px] absolute inset-0" style={{ filter: 'url(#gooey)' }}>
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              style={{
                '--i': i,
                top: '1px',
                left: `${-35 + (i === 1 ? 15 : i === 0 ? -5 : i === 2 ? -15 : i === 3 ? 55 : i === 4 ? 75 : i === 5 ? 85 : 0)}px`, /* Adjusting left based on original CSS */
                animation: `rotate 2.5s ease infinite`,
                animationDelay: `calc(0.15s * ${i})`,
                animationPlayState: 'paused',
              } as React.CSSProperties}
              className="absolute w-full h-full block"
            >
              <span
                style={{
                  animation: `move 6s ease-in-out infinite`,
                  animationDelay: `calc(0.2s * ${i})`,
                  background: 'rgb(255, 140, 0)',
                }}
                className="liquid-span-child-span w-[50px] h-[50px] block m-auto rounded-full"
              >
                <span
                  style={{
                    background: 'linear-gradient(#FFD700, #FF8C00)',
                  }}
                  className="absolute left-[calc(50%-20px)] top-0 w-[40px] h-[40px] rounded-full shadow-[0_0_30px_hsl(0,0%,69%)]"
                ></span>
              </span>
            </span>
          ))}
          {/* Background span */}
          <span className="bg animate-none absolute top-[1px] w-full h-full block">
            <span
              style={{
                background: 'linear-gradient(#FFD700, #FF8C00)',
              }}
              className="liquid-span-child-span w-[150px] h-[50px] absolute left-[calc(50%-40px)] rounded-[20px] shadow-[0_0_30px_hsl(0,0%,69%)]"
            ></span>
          </span>
        </div>
        <svg className="w-0 h-0">
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 20 -10"
            ></feColorMatrix>
          </filter>
        </svg>
      </button>
    </>
  );
};


export default GooeyButton;
