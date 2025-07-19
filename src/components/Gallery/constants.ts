import { Project, ProjectPhase } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Precision TIG Welding',
    description: 'Our certified welders perform high-precision TIG welds on all pressure vessels and piping, ensuring maximum integrity and leak-free operation for the lifespan of the unit. This macro shot showcases the clean, strong bead quality we demand.',
    imageUrl: 'https://picsum.photos/seed/tigweld/1200/900',
    phase: ProjectPhase.MANUFACTURING,
    product: 'VRU-500 Chassis',
  },
  {
    id: 2,
    title: 'Compressor Core Unit',
    description: 'A close-up of the robust VRU-750X compressor, the heart of our system. Engineered for high efficiency and reliability in demanding environments, it features a proprietary lubrication system and vibration dampeners.',
    imageUrl: 'https://picsum.photos/seed/compressor/1200/900',
    phase: ProjectPhase.MANUFACTURING,
    product: 'VRU-750X Compressor',
  },
  {
    id: 3,
    title: 'Control Panel Internals',
    description: 'Cleanliness and organization are paramount. This view inside the main control panel highlights the meticulous wiring, clearly labeled components, and ample space for airflow and maintenance, ensuring safe and reliable automation.',
    imageUrl: 'https://picsum.photos/seed/panel/1200/900',
    phase: ProjectPhase.ASSEMBLY,
    product: 'SmartControl Panel v4',
    hotspots: [
      { x: 30, y: 40, title: 'PLC Controller', description: 'The brain of the operation, running custom logic for optimal performance and safety shutdowns.' },
      { x: 55, y: 65, title: 'Variable Frequency Drive (VFD)', description: 'Precisely controls motor speed, saving energy and reducing mechanical wear on the compressor.' },
      { x: 75, y: 30, title: 'Terminal Blocks & Wiring', description: 'All wiring is cleanly routed and labeled for easy diagnostics and field servicing.' },
    ]
  },
  {
    id: 4,
    title: 'Unit 360° View',
    description: 'A complete view of the packaged VRU-500 unit, ready for shipment. The compact, skid-mounted design allows for easy transportation and a minimal footprint on-site. All components are easily accessible for routine checks.',
    imageUrl: 'https://picsum.photos/seed/360view/1200/900',
    phase: ProjectPhase.ASSEMBLY,
    product: 'VRU-500 Packaged Unit',
  },
  {
    id: 5,
    title: 'Assembly Process',
    description: 'Our state-of-the-art facility utilizes lean manufacturing principles to assemble units efficiently and to the highest quality standards. This process ensures every component is installed and tested correctly.',
    imageUrl: 'https://picsum.photos/seed/timelapse/1200/900',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    phase: ProjectPhase.ASSEMBLY,
    product: 'Full System Assembly',
  },
  {
    id: 6,
    title: 'On-Site Commissioning',
    description: "Our expert field technicians commission a new unit at a client's facility. This critical phase involves system startups, safety checks, performance tuning, and operator training to ensure a seamless integration.",
    imageUrl: 'https://picsum.photos/seed/fieldwork/1200/900',
    phase: ProjectPhase.COMMISSIONING,
    product: 'VRU-1000 Installation',
  },
  {
    id: 7,
    title: 'SmartSCADA Interface',
    description: 'The operator-friendly interface of our SmartSCADA application. It provides real-time monitoring of pressures, temperatures, and flow rates, with historical data logging, remote control capabilities, and automated alarm notifications.',
    imageUrl: 'https://picsum.photos/seed/scada/1200/900',
    phase: ProjectPhase.OPERATION,
    product: 'SmartSCADA v3',
  },
];