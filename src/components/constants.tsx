
import React from 'react';

// Updated to modern Heroicons v2 for a cleaner look
export const ShieldCheck: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.6-3.75" />
  </svg>
);

// Replaced 'Gavel' with Heroicons 'building-library' for a more professional and foundational look for "Terms of Service"
export const Gavel: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
  </svg>
);

// Replaced with a clean and universally understood icon from the Lucide icon pack
export const Cookie: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 8.5v.01"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 15.5v.01"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v.01"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 16v.01"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12v.01"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5v.01"/>
  </svg>
);

// Replaced 'Atom' with Heroicons 'cube-transparent' for a more abstract and futuristic feel that complements the logo
export const Atom: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);

// Updated to modern Heroicons v2 for a cleaner look
export const Info: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
);

export const LogoIcon: React.FC = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// --- Certification Icons ---
// Sourced from professional icon sets and optimized for the web.

// A professional, seal-like icon for ISO 9001, representing quality and certification.
export const ISO9001Icon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.99 15.122l-2.822-2.822a1 1 0 0 0-1.414 1.414l3.528 3.528a1 1 0 0 0 1.414 0l7.071-7.07a1 1 0 0 0-1.414-1.414L9.99 15.122z"/>
    </svg>
);

// A clean version of the American Petroleum Institute (API) monogram, symbolizing industry standards.
export const APIIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
        <line x1="9.5" y1="7" x2="9.5" y2="17" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14.5" y1="7" x2="14.5" y2="17" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

// The official U.S. Environmental Protection Agency (EPA) logo, representing environmental stewardship.
export const EPAIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.89 4.26l.95-1.64c.22-.38.71-.53.94-.22l.22.12c.22.38.07.86-.32 1.1l-.95 1.64c-.22.38-.7.53-.94.22l-.22-.12c-.22-.38-.07-.86.32-1.1zm3.78 0c.39-.24.54-.72.32-1.1l-.22-.12c-.23-.31-.72-.46-.94-.22l-.95 1.64c-.39.24-.54.72-.32 1.1l.22.12c.23.31.72.46.94.22l.95-1.64zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm5.74 2.89l-1.64-.95c-.38-.22-.53-.71-.22-.94l.12-.22c.38-.22.86-.07 1.1.32l1.64.95c.38.22.53.7.22.94l-.12.22c-.31.23-.79.08-1.1-.32zm-11.48 0c-.31.39-.79.54-1.1.32l-.12-.22c-.31-.23-.46-.71-.22-.94l1.64-.95c.24-.39.72-.54 1.1-.32l.12.22c.31.23.46.71.22.94l-1.64.95zm.01-7.78L4.26 8.12c-.38-.22-.86-.07-1.1.32l-.12.22c-.31.23-.46.71-.22.94l1.64.95c.24.39.72.54 1.1-.32l.12-.22c.31-.23.46-.71.22-.94l-1.64-.95zM19.74 8.11l-1.64.95c-.38.22-.86.07-1.1-.32l-.12-.22c-.31-.23-.46-.71-.22-.94l1.64-.95c.24-.39.72-.54 1.1-.32l.12.22c.31.23.46.71.22.94z"/>
    </svg>
);

// The ATEX directive symbol (Ex), indicating safety for use in explosive atmospheres.
export const ATEXIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.15 5.86L13.7 2.39a3.29 3.29 0 0 0-3.39 0L3.85 5.86a3.3 3.3 0 0 0-1.7 2.86v6.56a3.3 3.3 0 0 0 1.7 2.86l6.46 3.47a3.29 3.29 0 0 0 3.39 0l6.46-3.47a3.3 3.3 0 0 0 1.7-2.86V8.72a3.3 3.3 0 0 0-1.7-2.86Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12.25 15.25h-3.5V8.75h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.75 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.75 12.25l2.5 3M13.75 15.25l2.5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// Simplified California Air Resources Board (CARB) icon.
export const CARBIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.5 13.5v-1.25a.75.75 0 0 1 .75-.75h2.5c2.07 0 3.75-1.68 3.75-3.75S13.82 6.25 11.75 6.25h-2.5a.75.75 0 0 0-.75.75v1.25h3.5v1.5h-3.5v1.5h2.25v1.5H8.5v1.5z"/>
    </svg>
);

// Underwriters Laboratories (UL) Listed Mark.
export const ULIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
        <path d="M9 8.5v4.5a3 3 0 0 0 6 0V8.5" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

// SGS certification mark.
export const SGSIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.75 12.5h-3.5c-.83 0-1.5-.67-1.5-1.5V10c0-1.66 1.34-3 3-3h2c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-1.5v.5h1.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5z"/>
    </svg>
);

// Intertek ETL certification mark.
export const IntertekIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
        <path d="M8 12h8" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 8v8" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 8H8v2.5" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

// CE Mark for European Conformity.
export const CEIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.58 6.5C13.84 5.56 11.66 5 9.5 5 5.36 5 2 8.36 2 12.5S5.36 20 9.5 20c2.16 0 4.34-.56 6.08-1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 12.5C22 8.36 18.64 5 14.5 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
