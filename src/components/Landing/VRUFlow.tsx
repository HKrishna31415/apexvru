import React from 'react';
import FlowAnimation from './FlowAnimation';
import FlowTextBubbles from './FlowTextBubbles';

const VRUFlow: React.FC = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-4 sm:p-6 md:p-8 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Supply Chain Flow Animation
        </h1>

      </div>
        <div className="relative w-screen h-screen overflow-hidden bg-gray-100 flex items-center justify-center">
             <FlowAnimation />
             <FlowTextBubbles className="hidden md:block" />
             <div className="absolute top-1/2 right-16 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg text-sm">
                <h3 className="font-bold mb-2">Key:</h3>
                <div className="flex items-center mb-1">
                    <span className="w-4 h-4 rounded-full bg-blue-500 mr-2"></span>
                    <span>Fuel from the truck</span>
                </div>
                <div className="flex items-center mb-1">
                    <span className="w-4 h-4 rounded-full bg-purple-500 mr-2"></span>
                    <span>Vapor flowing into the machine</span>
                </div>
                <div className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-purple-300 mr-2"></span>
                    <span>Fuel returning to the tank</span>
                </div>
            </div>
         </div>

    </main>
  );
};

export default VRUFlow;
