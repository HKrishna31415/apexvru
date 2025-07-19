
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

export {};

interface VaporCloudProps {
  isTransitioning: boolean;
}

const VaporCloud: React.FC<VaporCloudProps> = ({ isTransitioning }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef(isTransitioning);
  
  // Refs for Three.js objects and animation state
  const particlesRef = useRef<THREE.Points | null>(null);
  const windRef = useRef({ x: 0, y: 0 });
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationFrameId = useRef<number>(0);

  // Effect to trigger GSAP animations on transition
  useEffect(() => {
    if (isTransitioning && particlesRef.current) {
      // Animate the wind force, making particles accelerate off-screen
      gsap.to(windRef.current, {
        x: 7, // Horizontal force of the wind
        y: -0.5, // Slight downward drift
        duration: 3.5, // Match the scene transition duration
        ease: 'power2.in',
      });

      // Animate the opacity of the entire cloud to fade it out
      gsap.to(particlesRef.current.material, {
        opacity: 0,
        duration: 3, // Fade out slightly faster than they blow away
        ease: 'power1.inOut',
      });
    }
  }, [isTransitioning]);

  // Keep a ref updated for the animation loop
  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  // Main Three.js setup effect
  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 300;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    rendererRef.current = renderer;
    currentMount.appendChild(renderer.domElement);

    const particlesCount = 8000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const velocities = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 1000;
        positions[i3 + 1] = (Math.random() - 0.5) * 600;
        positions[i3 + 2] = (Math.random() - 0.5) * 600;
        
        velocities[i3] = (Math.random() - 0.5) * 0.2;
        velocities[i3 + 1] = (Math.random() - 0.5) * 0.2;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: 0x999999,
        size: 1.8,
        transparent: true,
        opacity: 0.6,
        blending: THREE.NormalBlending,
    });
    
    const particles = new THREE.Points(geometry, material);
    particlesRef.current = particles; // Store in ref
    scene.add(particles);

    const animate = () => {
        animationFrameId.current = requestAnimationFrame(animate);
        
        const currentParticles = particlesRef.current;
        const currentRenderer = rendererRef.current;
        const currentCamera = cameraRef.current;
        if (!currentParticles || !currentRenderer || !currentCamera) return;

        const posAttribute = currentParticles.geometry.getAttribute('position') as THREE.BufferAttribute;

        if (isTransitioningRef.current) {
            // Apply the GSAP-driven wind force when transitioning
            for (let i = 0; i < particlesCount; i++) {
                const currentX = posAttribute.getX(i);
                const currentY = posAttribute.getY(i);
                
                // Add wind force and a little bit of turbulence
                const newX = currentX + windRef.current.x + (Math.random() - 0.5) * 2;
                const newY = currentY + windRef.current.y + (Math.random() - 0.5);

                posAttribute.setX(i, newX);
                posAttribute.setY(i, newY);
            }
        } else {
            // Default idle churning animation
            for (let i = 0; i < particlesCount; i++) {
                const i3 = i * 3;
                posAttribute.setX(i, posAttribute.getX(i) + velocities[i3]);
                posAttribute.setY(i, posAttribute.getY(i) + velocities[i3 + 1]);

                if (posAttribute.getX(i) > 500 || posAttribute.getX(i) < -500) velocities[i3] *= -1;
                if (posAttribute.getY(i) > 300 || posAttribute.getY(i) < -300) velocities[i3 + 1] *= -1;
            }
        }
        
        posAttribute.needsUpdate = true;
        currentRenderer.render(scene, currentCamera);
    };
    
    animate();

    const handleResize = () => {
      const camera = cameraRef.current;
      const renderer = rendererRef.current;
      if (currentMount && renderer && camera) {
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId.current);
        if (currentMount && renderer.domElement) {
           try {
              currentMount.removeChild(renderer.domElement);
           } catch(e) {
             // ignore if already removed.
           }
        }
        renderer.dispose();
        geometry.dispose();
        material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-10 pointer-events-none" />;
};

export default VaporCloud;
