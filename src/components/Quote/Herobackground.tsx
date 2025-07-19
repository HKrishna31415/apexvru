import React from 'react';

const HeroBackground: React.FC = () => {
  // Using a smaller, more manageable number of particles for performance.
  const particles = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Layer 1: The Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.adsttc.com/media/images/515d/dcf6/b3fc/4bc5/2600/0149/large_jpg/Socar_Mcdonalds_05.jpg?1365105906')"
        }}
      />

      {/* Layer 2: Particles that float above the image but behind content */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((_, i) => (
          <div
            key={i}
            className="particle" // Assuming you have .particle CSS for animation
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBackground;
