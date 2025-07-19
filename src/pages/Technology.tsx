import React from 'react';
import VRUScene from '../components/Technology/VRUScene';
import { Sidebar } from '../components/Technology/Sidebar';
import { useVRUStore } from '../store/useVRUStore';

const Technology: React.FC = () => {
  const { isSidebarOpen, closeSidebar, selectedPart } = useVRUStore();

  return (
    <div className="w-full bg-gray-900 text-white">
      <div className="h-screen relative">
        <div className="absolute inset-0">
            <VRUScene />
        </div>
        <header className="absolute top-0 left-0 p-4 md:p-6 z-20 w-full flex justify-between items-center pointer-events-none">
          <h1 className="text-xl md:text-3xl font-bold text-white drop-shadow-lg">
            Interactive VRU Explorer
          </h1>
        </header>
        
        <Sidebar 
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          component={selectedPart}
        />
      </div>
      <div className="relative bg-gray-800 p-8 min-h-screen">
        <h2 className="text-3xl font-bold text-white">More content here</h2>
        <div style={{height: "1000px"}}></div> {/* to test scrolling */}
      </div>
    </div>
  );
}

export default Technology;