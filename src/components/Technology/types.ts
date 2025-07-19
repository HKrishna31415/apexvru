export interface Part {
  id: string;
  name: string;
  position: [number, number, number];
  focusPoint: [number, number, number];
  /** The base description sent to the AI for expansion. */
  description: string;
  /** Detailed information, potentially populated by the AI. */
  info: string;
  specs: { [key: string]: string | number };
  pdfLink: string;
}
