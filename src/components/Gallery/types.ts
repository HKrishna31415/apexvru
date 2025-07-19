export enum ProjectPhase {
  DESIGN = 'Design & Engineering',
  MANUFACTURING = 'Manufacturing',
  ASSEMBLY = 'Assembly',
  COMMISSIONING = 'Field Commissioning',
  OPERATION = 'In Operation',
}

export interface Hotspot {
  x: number; // percentage from left (0-100)
  y: number; // percentage from top (0-100)
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string; // Optional: URL for a video asset
  hotspots?: Hotspot[]; // Optional: Array of interactive hotspots
  phase: ProjectPhase;
  product: string;
}