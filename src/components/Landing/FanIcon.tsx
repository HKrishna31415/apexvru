import React from 'react';

export {};

interface FanIconProps {
  className?: string;
  style?: React.CSSProperties;
}

const FanIcon: React.FC<FanIconProps> = ({ className, style }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      style={style}
    >
      {/* 
        This group centers the fan blades and allows for easy rotation.
        Each path creates one blade using a bezier curve for a modern look.
        The transform="rotate(...)" spins the subsequent blades into position.
      */}
      <g transform="translate(12, 12)">
        <path d="M 0 -9 C 5 -9, 5 0, 0 0 Z" />
        <path d="M 0 -9 C 5 -9, 5 0, 0 0 Z" transform="rotate(120)" />
        <path d="M 0 -9 C 5 -9, 5 0, 0 0 Z" transform="rotate(240)" />
      </g>
    </svg>
  );
};

export default FanIcon;
