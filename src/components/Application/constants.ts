
import { Application } from './types';

export const APPLICATIONS_DATA: Application[] = [
  {
    id: 'gasoline-stations',
    title: 'Gasoline Stations',
    image: 'https://images.unsplash.com/photo-1616326338099-33a35b17120a?q=80&w=1740&auto=format&fit=crop',
    description: 'Vapor Recovery Systems at gas stations are crucial for capturing gasoline vapors that escape during vehicle refueling and when fuel is delivered to underground storage tanks. This Stage I and Stage II recovery prevents ozone formation and recovers fuel.',
    stats: [
      { label: 'Stage II Recovery', value: '95% vapor capture' },
      { label: 'Air Quality', value: 'Reduces Benzene' },
      { label: 'Compliance', value: 'Clean Air Act' },
    ],
    status: 'active',
  },
  {
    id: 'storage-tanks',
    title: 'Storage Tanks',
    image: 'https://images.unsplash.com/photo-1584225012248-c515a5a14518?q=80&w=1740&auto=format&fit=crop',
    description: 'Storage tanks for volatile liquids emit vapors due to "breathing" from temperature changes and filling operations. A VRU connected to tank vents captures these emissions, reducing environmental impact, minimizing product loss, and helping facilities comply with clean air regulations.',
    stats: [
      { label: 'Breathing Loss Prevention', value: '95% effective' },
      { label: 'Payback Period', value: '1-3 Years' },
      { label: 'Odor Control', value: 'Significant Reduction' },
    ],
    status: 'active',
  },
  {
    id: 'truck-loading-racks',
    title: 'Truck Loading Racks',
    image: 'https://images.unsplash.com/photo-1621243542283-f3c3b6f8a8b1?q=80&w=1740&auto=format&fit=crop',
    description: 'Vapor Recovery Units at truck loading racks are essential for capturing volatile organic compounds (VOCs) released during the transfer of gasoline and other petroleum products. This not only prevents harmful emissions but also recovers valuable product that would otherwise be lost to the atmosphere.',
    stats: [
      { label: 'Emission Reduction', value: 'Up to 99%' },
      { label: 'Product Recovery', value: '~1-2 Gallons / 1000 gal loaded' },
      { label: 'Compliance', value: 'EPA & State Regulations' },
    ],
    status: 'research',
  },
  {
    id: 'marine-terminals',
    title: 'Marine Terminals',
    image: 'https://images.unsplash.com/photo-1549735372-c674c2f646e7?q=80&w=1858&auto=format&fit=crop',
    description: 'Marine loading operations involve massive volumes of product transfer, leading to significant potential for VOC emissions. VRUs at marine terminals are large-scale systems designed to handle high flow rates, ensuring environmental compliance and recovering large quantities of vaporized product during ship and barge loading.',
    stats: [
      { label: 'Flow Rate Capacity', value: '> 20,000 m³/hr' },
      { label: 'VOC Capture Efficiency', value: '> 98.5%' },
      { label: 'Safety Standard', value: 'USCG & IMO Certified' },
    ],
    status: 'research',
  },
  {
    id: 'railcar-loading',
    title: 'Railcar Loading',
    image: 'https://images.unsplash.com/photo-1590247074092-d99f0a8848d5?q=80&w=1740&auto=format&fit=crop',
    description: 'Similar to truck racks, railcar loading facilities benefit greatly from VRU technology. Capturing emissions from multiple railcars simultaneously requires robust and reliable systems that prevent air pollution and improve the overall efficiency and safety of the terminal.',
    stats: [
      { label: 'Multi-Spot Loading', value: 'Up to 20 cars' },
      { label: 'Recovery Tech', value: 'Carbon Adsorption' },
      { label: 'Operational Uptime', value: '99.9%+' },
    ],
    status: 'research',
  },
  {
    id: 'ethanol-alcohol-production',
    title: 'Ethanol & Alcohol Production',
    image: 'https://images.unsplash.com/photo-1562752216-4560d2b79a7a?q=80&w=1740&auto=format&fit=crop',
    description: 'The production and storage of ethanol and other alcohols generate significant VOC emissions. VRUs capture these vapors from fermentation tanks, distillation columns, and storage, improving air quality and recovering valuable product.',
    stats: [
      { label: 'Ethanol Recovery', value: 'Up to 99.5%' },
      { label: 'Application', value: 'Fermentation, Storage' },
      { label: 'Compliance', value: 'MACT Standards' },
    ],
    status: 'research',
  },
];
