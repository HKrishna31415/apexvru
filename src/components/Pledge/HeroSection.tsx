import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center py-16 md:py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white animate-fade-in-up">
        The <span className="text-gradient">APEX</span> Performance Pledge
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        We're revolutionizing the energy industry by removing financial barriers and demonstrating ultimate confidence in our technology. Our performance is our promise, and our partnership is your profit.
      </p>
    </section>
  );
};

export default HeroSection;

export {};