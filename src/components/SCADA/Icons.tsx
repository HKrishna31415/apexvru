
import React from 'react';

interface IconProps {
  className?: string;
  children?: React.ReactNode;
}

const IconWrapper: React.FC<IconProps> = ({ className, children }) => (
  <div className={`relative ${className}`} style={{ filter: 'drop-shadow(0 10px 15px rgba(0, 255, 255, 0.1)) drop-shadow(0 4px 6px rgba(0, 255, 255, 0.07))' }}>
    {children}
  </div>
);

export const VruIcon: React.FC<IconProps> = ({ className }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="vruGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: '#67e8f9', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0e7490', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      <path d="M85,30 H15 C10,30 10,35 10,35 V65 C10,65 10,70 15,70 H85 C90,70 90,65 90,65 V35 C90,35 90,30 85,30 Z" fill="url(#vruGradient)" stroke="#a5f3fc" strokeWidth="1"/>
      <rect x="20" y="45" width="10" height="10" rx="2" fill="#a5f3fc" opacity="0.8"/>
      <rect x="35" y="45" width="10" height="10" rx="2" fill="#a5f3fc" opacity="0.8"/>
      <rect x="55" y="45" width="30" height="10" rx="2" fill="#22d3ee" opacity="0.6"/>
    </svg>
  </IconWrapper>
);

export const CloudIcon: React.FC<IconProps> = ({ className }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cloudGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
          <stop offset="0%" style={{ stopColor: '#a78bfa', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#6d28d9', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      <path d="M63.5 25C59.9 16.5 50.9 10 40 10C26.2 10 15 21.2 15 35C15 35.9 15.1 36.8 15.2 37.6C6.7 40.2 0 48.1 0 57.5C0 68.3 8.7 77 19.5 77H67.5C79.9 77 90 66.9 90 54.5C90 42.6 80.6 32.5 68.5 32.5C68.1 32.5 67.8 32.5 67.4 32.6C66.2 28.5 63.5 25 63.5 25Z" transform="translate(5, 10)" fill="url(#cloudGradient)" stroke="#d8b4fe" strokeWidth="1" />
    </svg>
  </IconWrapper>
);

export const TabletIcon: React.FC<IconProps> = ({ className, children }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tabletGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#38bdf8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="90" height="110" rx="10" fill="#1e293b"/>
      <rect x="10" y="10" width="80" height="100" rx="5" fill="#0f172a"/>
      <foreignObject x="10" y="10" width="80" height="100">
        {children}
      </foreignObject>
      <rect x="5" y="5" width="90" height="110" rx="10" stroke="url(#tabletGradient)" strokeWidth="2"/>
    </svg>
  </IconWrapper>
);

export const DataPacketIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
     <style>{`
        @keyframes data-packet-glow {
          0%, 100% {
            filter: drop-shadow(0 0 3px rgba(100, 220, 255, 0.7)) drop-shadow(0 0 8px rgba(100, 220, 255, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 6px rgba(150, 230, 255, 1)) drop-shadow(0 0 15px rgba(150, 230, 255, 0.7));
          }
        }
    `}</style>
    <div className="w-full h-full bg-cyan-300 rounded-full" style={{ filter: 'blur(4px)' }}></div>
    <svg viewBox="0 0 24 24" fill="currentColor" className="absolute inset-0 text-cyan-100" style={{animation: 'data-packet-glow 2s infinite ease-in-out'}}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59L7.41 13 9 11.41l2 2 5-5L17.59 10 11 16.59z"/>
    </svg>
  </div>
);

export const ConnectingLinesIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lineGradHorizontal" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#67e8f9" />
        <stop offset="50%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
      <style>
        {`
          @keyframes dash-flow {
            to {
              stroke-dashoffset: -100;
            }
          }
          .pulsing-line {
            stroke-dasharray: 8 12;
            animation: dash-flow 8s linear infinite;
          }
        `}
      </style>
    </defs>
    {/* Curved path from VRU (left-top) to Cloud (right-middle) */}
    <path className="pulsing-line" d="M 25 15 C 35 15, 65 50, 75 50" stroke="url(#lineGradHorizontal)" strokeWidth="0.5" strokeOpacity="0.7" />
    {/* Curved path from Cloud (right-middle) to Tablet (left-bottom) */}
    <path className="pulsing-line" d="M 75 50 C 65 50, 35 85, 25 85" stroke="url(#lineGradHorizontal)" strokeWidth="0.5" strokeOpacity="0.7" />
  </svg>
);

export const AnalyticsIcon: React.FC<IconProps> = ({ className }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-300">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  </IconWrapper>
);

export const SecurityIcon: React.FC<IconProps> = ({ className }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-300">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  </IconWrapper>
);

export const AlertsIcon: React.FC<IconProps> = ({ className }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-300">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  </IconWrapper>
);

export const ControlIcon: React.FC<IconProps> = ({ className }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-300">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  </IconWrapper>
);

export const GalleryPlaceholderIcon: React.FC<{ title: string; className?: string }> = ({ title, className }) => (
    <svg width="100%" height="100%" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pattern-checker" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="10" height="10" fill="#1e293b" />
          <rect x="10" y="0" width="10" height="10" fill="#293548" />
          <rect x="0" y="10" width="10" height="10" fill="#293548" />
          <rect x="10" y="10" width="10" height="10" fill="#1e293b" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-checker)" rx="4"/>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="bold" className="font-sans">
        {title}
      </text>
    </svg>
);

export const ScrollDownIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`text-slate-500 hover:text-cyan-300 transition-colors duration-300 ${className}`}>
     <style>
      {`
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .mouse-icon {
          animation: scroll-bounce 2s infinite ease-in-out;
        }
      `}
    </style>
    <svg width="32" height="52" viewBox="0 0 32 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="mouse-icon">
      <rect x="1" y="1" width="30" height="50" rx="15" stroke="currentColor" strokeWidth="2"/>
      <circle cx="16" cy="16" r="4" fill="currentColor"/>
    </svg>
    <span className="mt-2 text-sm uppercase tracking-widest">Scroll</span>
  </div>
);
