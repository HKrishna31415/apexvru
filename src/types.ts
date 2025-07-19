import { IconType } from 'react-icons';
import React from 'react';

export enum DocumentType {
    PitchDeck = 'Pitch Deck',
    Financials = 'Financials',
    Report409A = '409A Report',
    CapTable = 'Cap Table',
  }
  
  export interface Document {
  id: string;
  type: DocumentType;
  title: string;
  date: string;
  version: string;
  thumbnailUrl?: string;
  description?: string;
}
  
  export interface TeamMember {
    id: string;
    name: string;
    title: string;
    bio: string;
    imageUrl: string;
  }
  
  export interface NewsArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  excerpt: string;
}
  

export interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  darkBackground?: boolean;
}

export enum QualityStatus {
  Excellent = 'Excellent',
  Good = 'Good',
  Pass = 'Pass',
  Warning = 'Warning',
}

export interface GasolineSample {
  country: string;
  octane: number;
}

export interface Certification {
  id: string;
  name: string;
  standard: string;
  status: 'active' | 'pending';
  pdfUrl: string;
  icon: React.ComponentType<any>;
}

export interface GasolineReport {
  id: string;
  location: string;
  date: string;
  octane: number;
  ethanolContent: number; // as percentage
  sedimentPPM: number; // parts per million
  status: QualityStatus;
  pdfUrl: string;
}

export interface QualityCheckItem {
  name: string;
  value: string;
  description: string;
  status: 'Pass';
}

export interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ScienceMethod {
  name: string;
  description: string;
}