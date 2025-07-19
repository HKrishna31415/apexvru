import React from 'react';

const iconStyles: React.CSSProperties = {
  width: '100%',
  height: '100%',
};

export const ComplianceIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyles}>
    <path className="shield-pulse" d="M32 2 L62 12 V32 C62 52 32 62 32 62 S2 52 2 32 V12 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path className="check-draw" d="M22 32 L29 39 L42 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const ProfitabilityIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyles}>
    {/* Faded bar chart in the background */}
    <g opacity="0.3">
      <rect x="14" y="34" width="10" height="20" rx="2" fill="currentColor" />
      <rect x="27" y="22" width="10" height="32" rx="2" fill="currentColor" />
      <rect x="40" y="10" width="10" height="44" rx="2" fill="currentColor" />
    </g>
    
    {/* Central, pulsing dollar sign */}
    <g className="profit-dollar-pulse">
      <text x="32" y="42" fill="white" fontSize="40" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">$</text>
    </g>
  </svg>
);


export const SafetyIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyles}>
    <path className="safety-pulse" d="M32 2 L62 12 V32 C62 52 32 62 32 62 S2 52 2 32 V12 Z" fill="currentColor" opacity="0.3" />
    <path d="M32 2 L62 12 V32 C62 52 32 62 32 62 S2 52 2 32 V12 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M26 32 H38 M32 26 V38" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const EfficiencyIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyles}>
        <g className="gear-spin" transform="translate(32 32)">
            <circle r="14" stroke="currentColor" strokeWidth="3" fill="none" />
            <circle cx="0" cy="0" r="5" fill="currentColor" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
                <rect key={a} transform={`rotate(${a})`} x="12.5" y="-3" width="7" height="6" fill="currentColor" rx="1.5"/>
            ))}
        </g>
    </svg>
);

export const PublicImageIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyles}>
        <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
        <path d="M2 32 A30 12 0 0 1 62 32 A30 12 0 0 1 2 32" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
        <path className="heart-pulse" fill="currentColor" d="M32 26 C 28 22, 20 24, 20 32 C 20 40, 32 48, 32 48 C 32 48, 44 40, 44 32 C 44 24, 36 22, 32 26 Z" />
    </svg>
);

export const ConservationIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyles}>
        <path className="wave1" d="M12 54 C 20 38, 44 38, 52 54" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M32 4 C 32 4, 22 20, 32 32 C 42 20, 32 4, 32 4 Z" fill="currentColor" className="arrow-up1" />
    </svg>
);

export const OdorReductionIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyles}>
        <path className="wave1" d="M10 24 Q 26 12, 42 24 T 74 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="5 10" />
        <path className="wave2" d="M10 40 Q 26 52, 42 40 T 74 40" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" strokeDasharray="5 10" />
    </svg>
);

export const FutureProofIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyles}>
        <path className="arrow-up1" d="M32 18 L22 28 H42 Z" fill="currentColor" />
        <path className="arrow-up2" d="M32 32 L22 42 H42 Z" fill="currentColor" opacity="0.7" />
        <path className="arrow-up3" d="M32 46 L22 56 H42 Z" fill="currentColor" opacity="0.4" />
    </svg>
);