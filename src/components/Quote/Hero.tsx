import React from 'react';
import HeroBackground from './Herobackground';
import Bubble from './Bubble';

const Hero: React.FC = () => {
  return (
    // This is the main container that sets the scene.
    // It's a flex container to center the content.
    // `relative` establishes the stacking context for its children.
    <section className="relative h-screen w-full flex items-center justify-center bg-gray-900 overflow-hidden">
      <HeroBackground />
      <Bubble />
    </section>
  );
};

export default Hero;
