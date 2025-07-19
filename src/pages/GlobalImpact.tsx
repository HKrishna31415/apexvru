import React, { useState, useCallback } from 'react';
import { Installation } from '../components/Impact/types';
import { INSTALLATIONS } from '../components/Impact/constants';
import WorldMap from '../components/Impact/WorldMap';
import InstallationInfoCard from '../components/Impact/InstallationInfoCard';
import { PlusIcon, MinusIcon } from '../components/Impact/Icons';

const App: React.FC = () => {
  const [selectedInstallation, setSelectedInstallation] = useState<Installation | null>(null);
  const [position, setPosition] = useState({ coordinates: [0, 20] as [number, number], zoom: 1.5 });

  const handleSelectInstallation = useCallback((installation: Installation) => {
    setSelectedInstallation(installation);
    setPosition({ coordinates: installation.coordinates, zoom: 4 });
  }, []);

  const handleDeselectInstallation = useCallback(() => {
    setSelectedInstallation(null);
  }, []);

  const handleMoveEnd = (position: { coordinates: [number, number]; zoom: number }) => {
    setPosition(position)
  };

  const handleZoomIn = () => {
    if (position.zoom >= 8) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.2 }));
  };

  return (
    <main className="relative h-screen w-screen bg-gray-900 text-white overflow-hidden">
      <header className="absolute top-0 left-0 w-full p-4 z-20 flex justify-between items-center">
        <div className="bg-black/30 backdrop-blur-sm p-3 rounded-xl">
            <h1 className="text-xl md:text-2xl font-bold text-teal-300 tracking-wider">
              Global Installations Dashboard
            </h1>
            <p className="text-xs md:text-sm text-gray-300">
                {selectedInstallation ? `Viewing: ${selectedInstallation.name}` : "Select a location to view details"}
            </p>
        </div>
      </header>

      <WorldMap
        installations={INSTALLATIONS}
        onSelectInstallation={handleSelectInstallation}
        selectedInstallation={selectedInstallation}
        position={position}
        onMoveEnd={handleMoveEnd}
      />
      
      <InstallationInfoCard
        installation={selectedInstallation}
        onClose={handleDeselectInstallation}
      />

      <div className="absolute bottom-4 left-4 z-10 flex flex-col space-y-2">
        <button
          onClick={handleZoomIn}
          className="p-2 bg-gray-800/60 backdrop-blur-sm rounded-full text-gray-300 hover:bg-teal-400/20 hover:text-white transition-colors"
          aria-label="Zoom in"
        >
          <PlusIcon className="w-6 h-6" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-2 bg-gray-800/60 backdrop-blur-sm rounded-full text-gray-300 hover:bg-teal-400/20 hover:text-white transition-colors"
          aria-label="Zoom out"
        >
          <MinusIcon className="w-6 h-6" />
        </button>
      </div>
    </main>
  );
};

export default App;