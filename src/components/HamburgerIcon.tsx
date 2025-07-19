import React from 'react';

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 focus:outline-none"
      aria-label="Toggle mobile menu"
    >
      <div
        className={`w-8 h-1 bg-black rounded transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}
      ></div>
      <div
        className={`w-8 h-1 bg-black rounded transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
      ></div>
      <div
        className={`w-8 h-1 bg-black rounded transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
      ></div>
    </button>
  );
};

export default HamburgerIcon;