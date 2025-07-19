import React from 'react';

const GasolineTesting: React.FC = () => {
  return (
    <section id="gasoline-testing" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Gasoline Testing and Octane Boosters</h2>
        <p className="text-lg mb-4">
          Gasoline quality is paramount for engine performance and environmental compliance. Regular testing of gasoline ensures it meets industry standards and specifications, preventing issues like engine knocking, reduced fuel efficiency, and increased emissions.
        </p>
        <p className="text-lg mb-4">
          Our services include comprehensive gasoline testing, analyzing key parameters such as octane rating, vapor pressure, and composition. This helps identify potential issues and ensures the fuel handled by your VRU systems is of optimal quality.
        </p>
        <h3 className="text-2xl font-bold mb-3">Impact of Octane Boosters</h3>
        <p className="text-lg mb-4">
          Octane boosters are additives designed to increase the octane rating of gasoline, which measures a fuel's resistance to knocking or pre-ignition during combustion. While they can improve engine performance in certain high-compression engines, their impact on VRU systems and overall fuel quality needs consideration.
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>**Chemical Composition**: Some octane boosters contain volatile organic compounds (VOCs) that can alter the vapor characteristics of gasoline, potentially affecting VRU efficiency and emissions.</li>
          <li>**System Compatibility**: Certain additives might not be compatible with VRU components, leading to material degradation or operational issues over time.</li>
          <li>**Regulatory Compliance**: The use of octane boosters must comply with local and national environmental regulations regarding fuel composition and emissions.</li>
        </ul>
        <p className="text-lg">
          We provide insights into how various fuel additives, including octane boosters, can influence your VRU operations and help you maintain compliance while optimizing performance.
        </p>
      </div>
    </section>
  );
};

export default GasolineTesting;