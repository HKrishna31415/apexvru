import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html, Text, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useVRUStore } from '../../store/useVRUStore';
import { PARTS, ComponentID } from './constants';
import type { Part } from './types';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

  const Annotation: React.FC<{ part: Part, children?: React.ReactNode }> = ({ part, children }) => {
  const selectPart = useVRUStore(state => state.selectPart);
  const selectedPart = useVRUStore(state => state.selectedPart);
  const isXRayMode = useVRUStore(state => state.isXRayMode);
  const isSelected = selectedPart?.name === part.name;

  const handleClick = () => {
    if (!isSelected) {
      selectPart(part);
    }
  };

  return (
    <>
      <Html position={part.position} center>
        <div 
          className={`flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 bg-opacity-75 cursor-pointer transition-all duration-300
                      hover:bg-opacity-100 hover:scale-110 shadow-lg border-2 border-cyan-300 ${isSelected ? 'animate-pulse' : ''}`}
          onClick={handleClick}
          aria-label={`Select ${part.name}`}
          role="button"
        >
          <span className="text-white text-2xl font-bold leading-none select-none">+</span>
        </div>
      </Html>
      {children}
    </>
  );
};



const VruModel: React.FC = () => {
  const partsById = useMemo(() => new Map(PARTS.map(p => [p.id, p])), []);
  const isXRayMode = useVRUStore(state => state.isXRayMode);

  return (
    <group>
      {/* Vacuum Pump */}
      <Annotation part={partsById.get(ComponentID.VACUUM_PUMP)!}>
        <group position={partsById.get(ComponentID.VACUUM_PUMP)!.position}>
          <mesh position={[0, 0.2, 0]}>
              <boxGeometry args={[1, 1, 1.2]} />
              <meshStandardMaterial color="#666666" transparent={isXRayMode} opacity={isXRayMode ? 0.3 : 1} />
          </mesh>
          <mesh position={[0, 0.9, 0]}>
              <cylinderGeometry args={[0.3, 0.3, 0.4, 32]} />
              <meshStandardMaterial color="#777777" transparent={isXRayMode} opacity={isXRayMode ? 0.3 : 1} />
          </mesh>
          <Text position={[0, 1.4, 0]} fontSize={0.2} color="white" anchorX="center">Vacuum Pump</Text>
        </group>
      </Annotation>

      {/* Scrubber */}
      <Annotation part={partsById.get(ComponentID.SCRUBBER)!}>
        <group position={partsById.get(ComponentID.SCRUBBER)!.position}>
          <mesh>
            <cylinderGeometry args={[0.6, 0.6, 2.5, 32]} />
            <meshStandardMaterial color="#c0c0c0" transparent={isXRayMode} opacity={isXRayMode ? 0.3 : 1} />
          </mesh>
          <Text position={[0, 1.8, 0]} fontSize={0.2} color="white" anchorX="center">Scrubber</Text>
        </group>
      </Annotation>

      {/* Compressor */}
      <Annotation part={partsById.get(ComponentID.COMPRESSOR)!}>
        <group position={partsById.get(ComponentID.COMPRESSOR)!.position}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.5, 1, 1.5]} />
            <meshStandardMaterial color="#a9a9a9" transparent={isXRayMode} opacity={isXRayMode ? 0.3 : 1} />
          </mesh>
           <mesh position={[0, 0.7, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.5, 32]} />
            <meshStandardMaterial color="#888888" transparent={isXRayMode} opacity={isXRayMode ? 0.3 : 1} />
          </mesh>
          <Text position={[0, 1.2, 0]} fontSize={0.2} color="white" anchorX="center">Compressor</Text>
        </group>
      </Annotation>
      
      {/* Motor */}
      <Annotation part={partsById.get(ComponentID.MOTOR)!}>
        <group position={partsById.get(ComponentID.MOTOR)!.position}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
            <meshStandardMaterial color="#555555" transparent={isXRayMode} opacity={isXRayMode ? 0.3 : 1} />
          </mesh>
          <Text position={[0, 0.8, 0]} fontSize={0.2} color="white" anchorX="center">Motor</Text>
        </group>
      </Annotation>

      {/* Cooling Unit */}
      <Annotation part={partsById.get(ComponentID.COOLING_UNIT)!}>
        <group position={partsById.get(ComponentID.COOLING_UNIT)!.position}>
          <mesh>
            <boxGeometry args={[1.5, 1, 1.5]} />
            <meshStandardMaterial color="#b0c4de" transparent={isXRayMode} opacity={isXRayMode ? 0.3 : 1} />
          </mesh>
          <mesh position={[0, 0, 0.76]}>
              <circleGeometry args={[0.4, 32]} />
              <meshStandardMaterial color="#333" side={THREE.DoubleSide} transparent={isXRayMode} opacity={isXRayMode ? 0.3 : 1} />
          </mesh>
          <Text position={[0, 0.8, 0]} fontSize={0.2} color="white" anchorX="center">Cooling Unit</Text>
        </group>
      </Annotation>
      
      {/* PLC Control Panel */}
      <Annotation part={partsById.get(ComponentID.CONTROL_SYSTEM)!}>
        <group position={partsById.get(ComponentID.CONTROL_SYSTEM)!.position}>
          <mesh>
            <boxGeometry args={[0.8, 0.6, 0.3]} />
            <meshStandardMaterial color="#4a5568" transparent={isXRayMode} opacity={isXRayMode ? 0.3 : 1} />
          </mesh>
          <mesh position={[0, 0, 0.16]}>
             <boxGeometry args={[0.7, 0.5, 0.05]} />
             <meshStandardMaterial 
                color="#1a202c" 
                emissive="#00ffff" 
                emissiveIntensity={0.2} 
                toneMapped={false}
                transparent={isXRayMode} opacity={isXRayMode ? 0.3 : 1}
              />
          </mesh>
          <Text position={[0, 0.5, 0]} fontSize={0.2} color="white" anchorX="center">PLC</Text>
        </group>
      </Annotation>

      {/* Oil Pump */}
      <Annotation part={partsById.get(ComponentID.OIL_PUMP)!}>
        <group position={partsById.get(ComponentID.OIL_PUMP)!.position}>
          <mesh>
            <boxGeometry args={[0.6, 0.4, 0.6]} />
            <meshStandardMaterial color="#8B4513" transparent={isXRayMode} opacity={isXRayMode ? 0.3 : 1} />
          </mesh>
          <Text position={[0, 0.4, 0]} fontSize={0.2} color="white" anchorX="center">Oil Pump</Text>
        </group>
      </Annotation>
    </group>
  );
};

const VaporFlow: React.FC = () => {
  const isXRayMode = useVRUStore(state => state.isXRayMode);
  const points = useMemo(() => [
    new THREE.Vector3(PARTS[0].position[0], PARTS[0].position[1] + 0.5, PARTS[0].position[2]), // Vacuum Pump outlet
    new THREE.Vector3(PARTS[1].position[0], PARTS[1].position[1] - 1.2, PARTS[1].position[2]), // Scrubber inlet
    new THREE.Vector3(PARTS[1].position[0], PARTS[1].position[1] + 1.2, PARTS[1].position[2]), // Scrubber outlet
    new THREE.Vector3(PARTS[2].position[0], PARTS[2].position[1] + 0.5, PARTS[2].position[2]), // Compressor inlet
    new THREE.Vector3(PARTS[2].position[0], PARTS[2].position[1] - 0.5, PARTS[2].position[2]), // Compressor outlet
    new THREE.Vector3(PARTS[3].position[0], PARTS[3].position[1] + 0.2, PARTS[3].position[2]), // Motor inlet
    new THREE.Vector3(PARTS[3].position[0], PARTS[3].position[1] - 0.2, PARTS[3].position[2]), // Motor outlet
    new THREE.Vector3(PARTS[4].position[0], PARTS[4].position[1] + 0.5, PARTS[4].position[2]), // Cooling Unit inlet
    new THREE.Vector3(PARTS[4].position[0], PARTS[4].position[1] - 0.5, PARTS[4].position[2]), // Cooling Unit outlet
    new THREE.Vector3(PARTS[5].position[0], PARTS[5].position[1] + 0.2, PARTS[5].position[2]), // PLC Control Panel inlet
    new THREE.Vector3(PARTS[6].position[0], PARTS[6].position[1] + 0.2, PARTS[6].position[2]), // Oil Pump inlet
  ], []);

  return isXRayMode ? (
    <group>
      <Line points={points} color="#00ffff" lineWidth={5} transparent opacity={0.7} />
      <AnimatedDots points={points} />
    </group>
  ) : null;
};

const AnimatedDots: React.FC<{ points: THREE.Vector3[] }> = ({ points }) => {
  const { isXRayMode } = useVRUStore();
  const dotRefs = useRef<THREE.Mesh[]>([]);
  const pathLength = useMemo(() => {
    let length = 0;
    for (let i = 0; i < points.length - 1; i++) {
      length += points[i].distanceTo(points[i + 1]);
    }
    return length;
  }, [points]);

  useFrame((state) => {
    if (!isXRayMode) return;

    const time = state.clock.getElapsedTime();
    const speed = 0.5;
    const dotCount = 10;
    const segmentLengths = points.map((p, i, arr) => i === 0 ? 0 : p.distanceTo(arr[i - 1]));
    const cumulativeLengths = segmentLengths.map((_, i, arr) => arr.slice(0, i + 1).reduce((a, b) => a + b, 0));

    dotRefs.current.forEach((dot, index) => {
      const offset = (time * speed + index * (pathLength / dotCount)) % pathLength;
      let currentLength = 0;
      let segmentIndex = 0;

      for (let i = 0; i < points.length - 1; i++) {
        const segmentStart = cumulativeLengths[i];
        const segmentEnd = cumulativeLengths[i + 1];

        if (offset >= segmentStart && offset <= segmentEnd) {
          segmentIndex = i;
          const segmentProgress = (offset - segmentStart) / (segmentEnd - segmentStart);
          dot.position.lerpVectors(points[i], points[i + 1], segmentProgress);

          // Color change logic
          if (segmentIndex < 8) { // Before Cooling Unit outlet
            (dot.material as THREE.MeshBasicMaterial).color.set("red");
          } else { // After Cooling Unit outlet
            (dot.material as THREE.MeshBasicMaterial).color.set("blue");
          }
          break;
        }
      }
    });
  });

  return (
    <group>
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} ref={el => el && (dotRefs.current[i] = el)}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="red" />
        </mesh>
      ))}
    </group>
  );
};

const tempPos = new THREE.Vector3();
const tempFocus = new THREE.Vector3();

const CameraRig: React.FC = () => {
    const { camera } = useThree();
    const { cameraFocus, cameraPosition, selectedPart } = useVRUStore();

    useFrame((state, delta) => {
        const d = Math.min(delta, 0.1); 
        const controls = state.controls as OrbitControlsImpl;

        if (selectedPart && selectedPart.id === ComponentID.MOTOR) {
            const time = state.clock.getElapsedTime();
            const focus = tempFocus.set(...cameraFocus);
            const radius = 4;
            const y = cameraPosition[1];

            const x = focus.x + Math.sin(time * 0.3) * radius;
            const z = focus.z + Math.cos(time * 0.3) * radius;

            camera.position.lerp(tempPos.set(x, y, z), d * 2);
        } else {
            camera.position.lerp(tempPos.set(...cameraPosition), d * 3);
        }

        if (controls) {
            controls.target.lerp(tempFocus.set(...cameraFocus), d * 3);
            controls.update();
        }
    });

    return <OrbitControls makeDefault enableZoom={true} enablePan={true} />;
};


const VRUScene: React.FC = () => {
    return (
        <Canvas camera={{ fov: 60, position: [0, 2, 8] }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 10, 7.5]} intensity={1.5} castShadow />
            <VruModel />
            {PARTS.map(part => (
                <Annotation key={part.id} part={part} />
            ))}
            <VaporFlow />
            <CameraRig />
            <gridHelper args={[20, 20, '#444', '#888']} position={[0, -1.5, 0]} />

        </Canvas>
    );
};



export default VRUScene;