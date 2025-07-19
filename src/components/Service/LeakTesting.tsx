import React from 'react';

const LeakTesting: React.FC = () => {
  return (
    <section id="leak-testing" className="py-16 bg-gray-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Leak Testing</h2>
        <p className="text-lg mb-4">
          Leak testing is a critical procedure for ensuring the integrity and safety of Vapor Recovery Units (VRUs) and associated infrastructure. Unaddressed leaks can lead to significant environmental emissions, safety hazards, and financial losses due to product evaporation.
        </p>
        <p className="text-lg mb-4">
          Our comprehensive leak testing services utilize advanced techniques and equipment to detect even the smallest leaks in your VRU system. This includes:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Pressure decay testing to identify system leaks.</li>
          <li>Sniffing and soap bubble tests for pinpointing leak locations.</li>
          <li>Infrared camera inspections for non-invasive leak detection.</li>
          <li>Regular maintenance checks to prevent future leaks.</li>
        </ul>
        <p className="text-lg">
          By proactively identifying and repairing leaks, we help you maintain regulatory compliance, reduce product loss, and ensure a safer operating environment. Our certified technicians provide detailed reports and recommendations for any necessary repairs.
        </p>
      </div>
    </section>
  );
};

export default LeakTesting;