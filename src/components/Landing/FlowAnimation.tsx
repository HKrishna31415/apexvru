import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import FlowTextBubbles from './FlowTextBubbles';

const NUM_DOTS_PATH_1 = 15;
 const NUM_DOTS_PATH_2 = 15;
 const NUM_DOTS_PATH_3 = 10;

const FlowAnimation: React.FC = () => {
    // A ref to the main container for scoping animations if needed
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Register the MotionPathPlugin with GSAP
        gsap.registerPlugin(MotionPathPlugin);

        // Animation for the first flow: Truck to Storage Tank
        gsap.to(".dot-path-1", {
            motionPath: {
                path: "#flowPath1",
                align: "#flowPath1",
                alignOrigin: [0.5, 0.5], // Center the dot on the path
            },
            transformOrigin: "50% 50%",
            duration: 6, // Slower flow from the truck
            ease: "none",
            repeat: -1,
            // Stagger animation start times for each dot to create a "flow"
            stagger: {
                each: 0.3, // Time between each dot's animation start
                repeat: -1, // Repeat the stagger infinitely
            },
        });

        // Animation for the second flow: Storage Tank to Machine
        gsap.to(".dot-path-2", {
            motionPath: {
                path: "#flowPath2",
                align: "#flowPath2",
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
            },
            transformOrigin: "50% 50%",
            duration: 5, // Faster flow to the machine
            ease: "none",
            repeat: -1,
            stagger: {
                each: 0.3,
                repeat: -1,
            },
        });

        // Animation for the third flow: Machine back to Storage Tank
        gsap.to(".dot-path-3", {
            motionPath: {
                path: "#flowPath3",
                align: "#flowPath3",
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
            },
            transformOrigin: "50% 50%",
            duration: 6, // Duration for flowPath3
            ease: "none",
            repeat: -1,
            stagger: {
                each: 0.3,
                repeat: -1,
            },
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div ref={containerRef} className="relative w-[700px] h-[630px] overflow-hidden rounded-xl shadow-2xl bg-gray-100">
            <img 
                src="/images/VRU-System.png" 
                alt="Supply chain diagram with a truck, storage tank, and machine" 
                className="w-full h-full object-cover" 
            />
            <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 700 630"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Define the animation paths. They are invisible but used by GSAP. */}
                {/* Path 1: From the truck to the large storage tank */}
                <path id="flowPath1" d="M 245 168 Q 302.4 126, 430.5 360.5" stroke="none" />
                
                {/* Path 2: From the large storage tank to the machine */}
                <path id="flowPath2" d="M 584.5 346.5 Q 686 266, 630 245" stroke="none" />

                {/* Path 3: From the machine back to the storage tank (or another relevant point) */}
                <path id="flowPath3" d="M 507.5 203 Q 385 210, 360.5 430.5" stroke="none" />

                {/* Generate dots for the first path */}
                {/* Generate dots for the first path */}
                 {Array.from({ length: NUM_DOTS_PATH_1 }).map((_, index) => (
                     <circle 
                         key={`p1-${index}`} 
                         className="dot-path-1" 
                         cx="0" 
                         cy="0" 
                         r="6" 
                         fill="#3b82f6" // Blue color
                         filter="url(#glow)"
                     />
                 ))}

                {/* Generate dots for the second path */}
                {Array.from({ length: NUM_DOTS_PATH_2 }).map((_, index) => (
                    <circle 
                        key={`p2-${index}`} 
                        className="dot-path-2" 
                        cx="0" 
                        cy="0" 
                        r="6" 
                        fill="#a855f7" // Purple color to match storage tank accent
                        filter="url(#glow)"
                    />
                ))}

                {/* Generate dots for the third path */}
                {Array.from({ length: NUM_DOTS_PATH_3 }).map((_, index) => (
                    <circle 
                        key={`p3-${index}`} 
                        className="dot-path-3" 
                        cx="0" 
                        cy="0" 
                        r="6" 
                        fill="#c084fc" // Lavender color for the return flow
                        filter="url(#glow)"
                    />
                ))}
                
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default FlowAnimation;