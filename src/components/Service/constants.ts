import { VruComponent, FaqItem, Technician } from './types';

export const VRU_COMPONENTS: VruComponent[] = [
  {
    id: 'refrigerator',
    name: 'Refrigerator Unit',
    faqs: [
      { question: 'Why is my unit not cooling?', answer: 'Check the power supply and ensure the thermostat is set correctly. Clean the condenser coils if they are dirty.' },
      { question: 'What does a blinking red light mean?', answer: 'A blinking red light typically indicates a high-pressure fault. Power cycle the unit and check for any blockages in the system.' },
      { question: 'How often should I service the refrigerator?', answer: 'Annual servicing is recommended to ensure optimal performance and longevity.' },
    ],
  },
  {
    id: 'compressor',
    name: 'Compressor',
    faqs: [
      { question: 'The compressor is making a loud noise. What should I do?', answer: 'Loud noises can indicate a variety of issues, from loose bolts to internal damage. Power down the unit immediately and call a technician.' },
      { question: 'My compressor won\'t start.', answer: 'Check the circuit breaker and motor starter. It could also be a capacitor issue. Professional diagnosis is recommended.' },
    ],
  },
  {
    id: 'scrubber',
    name: 'Scrubber',
    faqs: [
      { question: 'How do I know when to change the scrubber medium?', answer: 'Monitor the pressure drop across the scrubber. A significant increase indicates it\'s time for a change.' },
      { question: 'What is the purpose of the scrubber?', answer: 'The scrubber removes impurities and liquids from the vapor stream before it enters the compressor, protecting the equipment.' },
    ],
  },
  {
    id: 'valves',
    name: 'Valves & Piping',
    faqs: [
      { question: 'I suspect a leak in the piping. How can I check?', answer: 'Use a soapy water solution on joints and connections. Bubbles will form at the site of a leak. Do not overtighten fittings.' },
      { question: 'A valve seems to be stuck. What are my options?', answer: 'Do not force it. Gentle tapping or applying a suitable lubricant might help. If it remains stuck, it may need to be replaced.' },
    ],
  },
   {
    id: 'control-panel',
    name: 'Control Panel',
    faqs: [
      { question: 'The display on my control panel is blank.', answer: 'First, verify the main power supply to the VRU. If power is present, check the internal fuse for the control panel.' },
      { question: 'Can I reset the system from the control panel?', answer: 'Most models have a system reset function. Consult your user manual for the specific sequence, as it can vary.' },
    ],
  },
  {
    id: 'pump',
    name: 'Pump',
    faqs: [
      { question: 'The pump is leaking. What should I do?', answer: 'Immediately shut down the system. Check the pump seals and gaskets for wear or damage. Replacement may be necessary.' },
      { question: 'The pump is not achieving the correct pressure.', answer: 'This could be due to a clog in the inlet/outlet, a worn impeller, or an air leak in the suction line. Inspect these areas carefully.' },
    ],
  },
  {
    id: 'motor',
    name: 'Motor',
    faqs: [
      { question: 'Why is the motor overheating?', answer: 'Overheating can be caused by poor ventilation, overloading, or low voltage. Ensure the motor\'s cooling fins are clean and there is adequate airflow.' },
      { question: 'The motor hums but won\'t start. What\'s the issue?', answer: 'This often points to a faulty starting capacitor or a problem with the centrifugal switch. This requires professional inspection.' },
    ],
  },
];

export const GENERAL_FAQS: FaqItem[] = [
    { question: 'What is a Vapor Recovery Unit (VRU)?', answer: 'A VRU is a system designed to capture and recover volatile organic compounds (VOCs) and other gas vapors that are released during various industrial processes, preventing them from escaping into the atmosphere.' },
    { question: 'What are the benefits of using a VRU?', answer: 'The primary benefits are environmental protection by reducing air pollution, improved safety by controlling flammable vapors, and economic savings by recovering valuable product that would otherwise be lost.' },
    { question: 'How often should a full system inspection be performed?', answer: 'We recommend a comprehensive system inspection by a certified technician at least once a year. High-usage units may require semi-annual inspections.' },
    { question: 'Can I perform maintenance myself?', answer: 'Basic tasks like cleaning and visual inspections can be done by trained site personnel. However, any work involving electrical components, refrigerant, or internal mechanics should be left to certified professionals.' },
];

export const TECHNICIANS: Technician[] = [
    { name: 'John Doe', location: 'Houston, TX', distance: '15 miles away', imageUrl: 'https://picsum.photos/seed/tech1/100/100' },
    { name: 'Jane Smith', location: 'Midland, TX', distance: '23 miles away', imageUrl: 'https://picsum.photos/seed/tech2/100/100' },
    { name: 'Carlos Gomez', location: 'Dallas, TX', distance: '45 miles away', imageUrl: 'https://picsum.photos/seed/tech3/100/100' },
];