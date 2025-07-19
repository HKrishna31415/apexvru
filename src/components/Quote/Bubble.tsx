import React from 'react';

const Bubble: React.FC = () => {
  return (
    // This div is the positioning context for the bubble and the text.
    // It has a higher z-index to ensure it appears on top of the background.
    <div className="relative z-10 flex items-center justify-center w-full h-full">
      <div className="relative w-[550px] h-[550px] md:w-[650px] md:h-[650px] flex items-center justify-center">
        
        {/* The liquid bubble with a "frosted glass" effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 animate-liquid-morph bg-opacity-70 backdrop-blur-lg rounded-full"></div>
        
        {/* The text and button content */}
        <div className="relative text-white text-center flex flex-col items-center p-8">
          <p className="tracking-[0.2em] text-sm md:text-base font-light mb-4 opacity-90">VAPOR RECOVERY</p>
          <h1 className="text-5xl md:text-7xl font-thin leading-tight mb-8">
            Save Oil Save<br />The Planet
          </h1>
          <a
            href="#quote-form"
            className="border-2 border-white rounded-full py-3 px-8 text-white font-semibold hover:bg-white hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Get A Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bubble;