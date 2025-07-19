import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const FuelDropIcon: React.FC<IconProps> = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 384 512"
      {...props}
    >
      <path 
        d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.8 0 192 0s19.4 4.2 25.4 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192z" 
      />
    </svg>
  );
};

export default FuelDropIcon;
export {};