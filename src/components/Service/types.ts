export interface FaqItem {
  question: string;
  answer: string;
}

export interface VruComponent {
  id: string;
  name: string;
  faqs: FaqItem[];
}

export interface Technician {
  name: string;
  location: string;
  distance: string;
  imageUrl: string;
}
