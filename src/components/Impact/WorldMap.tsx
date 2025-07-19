import React, { memo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import { Installation } from './types';
import { MAP_GEO_URL } from './constants';

interface WorldMapProps {
  installations: Installation[];
  onSelectInstallation: (installation: Installation) => void;
  selectedInstallation: Installation | null;
  position: { coordinates: [number, number]; zoom: number };
  onMoveEnd: (position: { coordinates: [number, number]; zoom: number }) => void;
}

const getStatusColor = (status: Installation['status']): string => {
  switch (status) {
    case 'Operational':
      return '#4ade80'; // Tailwind green-400
    case 'Under Construction':
      return '#a78bfa'; // Tailwind purple-400
    case 'Planned':
      return '#60a5fa'; // Tailwind blue-400
    default:
      return '#9ca3af'; // Tailwind gray-400
  }
};

const WorldMap: React.FC<WorldMapProps> = ({ installations, onSelectInstallation, selectedInstallation, position, onMoveEnd }) => {
  return (
    <div className="w-full h-full">
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
        className="w-full h-full"
      >
        <ZoomableGroup 
          center={position.coordinates} 
          zoom={position.zoom}
          onMoveEnd={onMoveEnd}
          style={{ transition: 'transform 400ms ease-out' }}
          minZoom={1}
          maxZoom={8}
        >
          <Geographies geography={MAP_GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#1f2937', // gray-800
                      stroke: '#374151', // gray-700
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    hover: {
                      fill: '#374151', // gray-700
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#4b5563', // gray-600
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {installations.map((inst) => {
            const isSelected = selectedInstallation?.id === inst.id;
            const color = isSelected ? '#f0fdfa' : getStatusColor(inst.status);

            return (
                <Marker key={inst.id} coordinates={inst.coordinates}>
                    <g
                        onClick={() => onSelectInstallation(inst)}
                        className="cursor-pointer group"
                        style={{ pointerEvents: 'auto' }}
                    >
                        {/* Glow effect for selected item */}
                        {isSelected && (
                          <circle r={12} fill={color} className="opacity-30" />
                        )}
                        {/* Central Dot */}
                        <circle r={4} fill={color} className="group-hover:fill-white transition-colors" />
                        
                        {/* Pulsing ring */}
                        <circle
                            r={6}
                            fill="transparent"
                            stroke={color}
                            strokeWidth={1.5}
                            className="pulse-animation group-hover:stroke-white transition-colors"
                        />
                         <text
                            textAnchor="middle"
                            y={-15}
                            className={`fill-current text-gray-200 text-[8px] font-bold transition-opacity duration-300 pointer-events-none ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                        >
                            {inst.name}
                        </text>
                    </g>
                </Marker>
            )
          })}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(WorldMap);