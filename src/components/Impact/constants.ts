
import { Installation } from './types';

export const INSTALLATIONS: Installation[] = [
  {
    id: 'saudi-arabia-operational',
    name: 'Saudi Arabia Vapor Recovery Units',
    city: 'Saudi Arabia',
    coordinates: [46.738586, 24.774265],
    status: 'Operational',
    capacity: 10,
    description: '10 operational gasoline vapor recovery units across Saudi Arabia.'
  },
  {
    id: 'amman-01',
    name: 'Amman Vapor Recovery Unit',
    city: 'Amman, Jordan',
    coordinates: [35.930359, 31.963158],
    status: 'Operational',
    capacity: 1,
    description: 'An operational gasoline vapor recovery unit in Amman, Jordan. SGS certified to 0.5% of throughput.'
  },
  {
    id: 'manama-01',
    name: 'Manama Vapor Recovery Unit',
    city: 'Manama, Bahrain',
    coordinates: [50.586050, 26.228516],
    status: 'Under Construction',
    capacity: 1,
    description: 'A gasoline vapor recovery unit under construction in Manama, Bahrain.'
  },
  {
    id: 'riyadh-planned-01',
    name: 'Riyadh Planned Vapor Recovery Unit',
    city: 'Riyadh, Saudi Arabia',
    coordinates: [46.738586, 24.774265],
    status: 'Under Construction',
    capacity: 1,
    description: 'A planned gasoline vapor recovery unit in Riyadh, Saudi Arabia.'
  },
  {
    id: 'mumbai-01',
    name: 'Mumbai Planned Vapor Recovery Unit',
    city: 'Mumbai, India',
    coordinates: [72.877426, 19.076090],
    status: 'Planned',
    capacity: 1,
    description: 'A planned gasoline vapor recovery unit in Mumbai, India.'
  },
  {
    id: 'sao-paulo-01',
    name: 'São Paulo Planned Vapor Recovery Unit',
    city: 'São Paulo, Brazil',
    coordinates: [-46.6333, -23.5505],
    status: 'Planned',
    capacity: 1,
    description: 'A planned gasoline vapor recovery unit in São Paulo, Brazil.'
  },
  {
    id: 'slo-01',
    name: 'San Luis Obispo Planned Vapor Recovery Unit',
    city: 'San Luis Obispo, USA',
    coordinates: [-120.680656, 35.270378],
    status: 'Planned',
    capacity: 1,
    description: 'A planned gasoline vapor recovery unit in San Luis Obispo, USA.'
  },
  {
    id: 'mexico-city-01',
    name: 'Mexico City Planned Vapor Recovery Unit',
    city: 'Mexico City, Mexico',
    coordinates: [-99.125519, 19.451054],
    status: 'Planned',
    capacity: 1,
    description: 'A planned gasoline vapor recovery unit in Mexico City, Mexico.'
  },
  {
    id: 'azerbaijan-01',
    name: 'Azerbaijan Planned Vapor Recovery Unit',
    city: 'Baku, Azerbaijan',
    coordinates: [47.5769, 40.1431],
    status: 'Planned',
    capacity: 1,
    description: 'A planned gasoline vapor recovery unit in Baku, Azerbaijan.'
  },
  {
    id: 'georgia-01',
    name: 'Georgia Planned Vapor Recovery Unit',
    city: 'Tbilisi, Georgia',
    coordinates: [43.3714, 42.3208],
    status: 'Planned',
    capacity: 1,
    description: 'A planned gasoline vapor recovery unit in Tbilisi, Georgia.'
  }
];

export const MAP_GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
