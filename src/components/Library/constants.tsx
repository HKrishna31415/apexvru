
import React from 'react';
import type { Category, Document } from './types';
import { DocumentType } from './types';

// HeroIcons SVGs as React Components
const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);

const CpuChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V8.25a2.25 2.25 0 0 0-2.25-2.25H8.25a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25Zm0-12h10.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 .75-.75Z" />
  </svg>
);

const WrenchScrewdriverIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83M11.42 15.17l.75-.75a3.75 3.75 0 0 0-5.303-5.303l-.75.75m2.652 4.562L5.5 13.5m0 0l-1.5-1.5M5.5 13.5l1.5-1.5m0 0l-1.5-1.5m1.5 1.5l1.5 1.5m-5.303-5.303L3.75 6.75l-1.5-1.5m1.5 1.5L5.25 8.25" />
  </svg>
);

const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
  </svg>
);

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'All Documents', icon: WrenchScrewdriverIcon},
  { id: 'manuals', name: 'Manuals', icon: BookOpenIcon },
  { id: 'schematics', name: 'Schematics', icon: CpuChipIcon },
  { id: 'certificates', name: 'Certificates', icon: ShieldCheckIcon },
];

export const DOCUMENTS: Document[] = [
  {
    id: 'doc-01',
    title: 'Cryo-Engine Maintenance',
    type: DocumentType.Manual,
    category: 'manuals',
    thumbnailUrl: 'https://picsum.photos/seed/doc01/400/300',
    description: 'Comprehensive guide to maintaining the Series-8 cryo-propulsion engines.'
  },
  {
    id: 'doc-02',
    title: 'Fusion Core Power Schematic',
    type: DocumentType.Schematic,
    category: 'schematics',
    thumbnailUrl: 'https://picsum.photos/seed/doc02/400/300',
    description: 'Detailed power distribution schematics for the tokamak fusion core.'
  },
  {
    id: 'doc-03',
    title: 'Cert-2042-A: Hull Integrity',
    type: DocumentType.Certificate,
    category: 'certificates',
    thumbnailUrl: 'https://picsum.photos/seed/doc03/400/300',
    description: 'Compliance certificate for micro-fractures in the primary hull plating.'
  },
  {
    id: 'doc-04',
    title: 'Navigation Systems Handbook',
    type: DocumentType.Manual,
    category: 'manuals',
    thumbnailUrl: 'https://picsum.photos/seed/doc04/400/300',
    description: 'User manual for the FTL jump-drive navigation and plotting system.'
  },
  {
    id: 'doc-05',
    title: 'Life Support Oxygenator Circuit',
    type: DocumentType.Schematic,
    category: 'schematics',
    thumbnailUrl: 'https://picsum.photos/seed/doc05/400/300',
    description: 'Circuit diagrams for the emergency atmospheric oxygenator.'
  },
    {
    id: 'doc-06',
    title: 'Grav-Plating Calibration',
    type: DocumentType.Manual,
    category: 'manuals',
    thumbnailUrl: 'https://picsum.photos/seed/doc06/400/300',
    description: 'Step-by-step instructions for calibrating the artificial gravity plating.'
  },
  {
    id: 'doc-07',
    title: 'Main Comm-Array Wiring',
    type: DocumentType.Schematic,
    category: 'schematics',
    thumbnailUrl: 'https://picsum.photos/seed/doc07/400/300',
    description: 'Wiring and signal flow for the subspace communications array.'
  },
    {
    id: 'doc-08',
    title: 'Cert-2044-C: Software v3.1',
    type: DocumentType.Certificate,
    category: 'certificates',
    thumbnailUrl: 'https://picsum.photos/seed/doc08/400/300',
    description: 'Validation certificate for the primary flight control computer software v3.1.'
  },
];
