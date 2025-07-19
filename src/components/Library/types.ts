
import type { FC, SVGProps } from 'react';

export enum DocumentType {
  Manual = 'Technical Manual',
  Schematic = 'Schematic Diagram',
  Certificate = 'Certificate',
}

export interface Document {
  id: string;
  title: string;
  type: DocumentType;
  category: string;
  thumbnailUrl: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}
