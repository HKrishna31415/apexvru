
import React from 'react';
import Manifesto from './ManifestoSection';
import { FaBuilding, FaLaptopCode, FaArrowRight, FaLeaf, FaDollarSign } from 'react-icons/fa';

const FaBuildingElement = FaBuilding as React.ElementType;
const FaLaptopCodeElement = FaLaptopCode as React.ElementType;
const FaArrowRightElement = FaArrowRight as React.ElementType;
const FaLeafElement = FaLeaf as React.ElementType;
const FaDollarSignElement = FaDollarSign as React.ElementType;

const PartnershipModel: React.FC = () => {
  return (
    <Manifesto>
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Our Performance Pledge</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          Our success is your success. We provide our cutting-edge technology at no upfront cost, sharing in the value we create together. This is our testament to its efficiency.
        </p>
        <a href="/Pledge" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold inline-block">
          Learn More About Our Pledge
        </a>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        {/* Step 1: Industrial Site */}
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-gray-800 border border-gray-700 rounded-full">
            <FaBuildingElement className="h-10 w-10 text-gray-400" />
          </div>
          <p className="mt-2 font-semibold text-white">Industrial Site</p>
          <p className="text-sm text-gray-500">Waste Emissions</p>
        </div>

        <FaArrowRightElement className="h-8 w-8 text-gray-600 rotate-90 md:rotate-0" />

        {/* Step 2: APEX VRU */}
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-gray-800 border border-indigo-500/50 rounded-full animate-pulse">
            <FaLaptopCodeElement className="h-10 w-10 text-indigo-400" />
          </div>
          <p className="mt-2 font-semibold text-white">APEX VRU</p>
          <p className="text-sm text-gray-500">Value Reclamation</p>
        </div>

        <FaArrowRightElement className="h-8 w-8 text-gray-600 rotate-90 md:rotate-0" />

        {/* Step 3: Outputs */}
        <div className="flex flex-col items-center gap-6">
          {/* Output A: Clean Air */}
          <div className="flex items-center gap-4 bg-gray-800/50 border border-gray-700/50 rounded-lg p-3">
            <div className="p-2 bg-teal-500/10 rounded-full">
              <FaLeafElement className="h-6 w-6 text-teal-400" />
            </div>
            <div>
              <p className="font-semibold text-white">Clean Air</p>
              <p className="text-sm text-gray-500">Environmental Compliance</p>
            </div>
          </div>
          
          {/* Output B: Shared Revenue */}
          <div className="flex items-center gap-4 bg-gray-800/50 border border-gray-700/50 rounded-lg p-3">
            <div className="p-2 bg-purple-500/10 rounded-full">
              <FaDollarSignElement className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="font-semibold text-white">Shared Revenue</p>
              <p className="text-sm text-gray-500">Client Profit & APEX Partnership</p>
            </div>
          </div>
        </div>
      </div>
    </Manifesto>
  );
};

export default PartnershipModel;
