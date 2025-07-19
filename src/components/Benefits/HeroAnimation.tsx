import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const HeroAnimation: React.FC = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/de6abd82-4f3d-4b69-b114-f2fe9ef6ee62/eMGOoEYo2o.lottie"
      loop
      autoplay
      width={1280}
      height={720}
      className="w-full h-auto"
    />
  );
};
