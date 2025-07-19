
export interface Installation {
  id: string;
  name: string;
  city: string;
  coordinates: [number, number]; // [longitude, latitude]
  status: 'Operational' | 'Under Construction' | 'Planned';
  capacity: number; // in MW
  description: string;
}
