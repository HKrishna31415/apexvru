import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface FlowTextBubbleProps {
    text: string;
    position: { x: number; y: number };
    delay: number;
    bubbleNumber: number;
    className?: string;
}

const FlowTextBubble: React.FC<FlowTextBubbleProps> = ({ text, position, delay, bubbleNumber }) => {
    const bubbleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bubbleRef.current) {
            gsap.fromTo(bubbleRef.current, 
                { opacity: 0, scale: 0.8, y: position.y + 20 }, 
                { 
                    opacity: 1, 
                    scale: 1, 
                    y: position.y, 
                    duration: 0.8, 
                    delay: delay, 
                    ease: 'back.out(1.7)',
                    // Removed repeat and yoyo for single appearance
                }
            );
        }
    }, [delay, position.y]);

    return (
        <div
            ref={bubbleRef}
            style={{
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                background: 'rgb(243 244 246)', // Changed from rgba(255, 255, 255, 0.9)
                color: '#333',
                padding: '10px 15px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                maxWidth: '200px',
                textAlign: 'center',
                fontSize: '14px',
                pointerEvents: 'none', // Allow clicks to pass through
                opacity: 0, // Start invisible
                transform: 'translate(-50%, -50%)', // Center the bubble
                zIndex: 1000,
            }}
        >
            <div style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
                fontWeight: 'bold',
                zIndex: 1001,
            }}>
                {bubbleNumber}
            </div>
            {text}
        </div>
    );
};


interface FlowTextBubblesProps {
    className?: string;
}

const FlowTextBubbles: React.FC<FlowTextBubblesProps> = () => {
    const bubbles = [
        {
            text: "Fuel tank is filled via truck, petrol displaces vapor",
            position: { x: 400, y: 250 },
            delay: 0,
        },
        {
            text: "Fuel vapor is fed into the VRU",
            position: { x: 800, y: 230 },
            delay: 1.5,
        },
        {
            text: "VRU uses compression, separation, and condensation",
            position: { x: 800, y: 110 },
            delay: 3,
        },
        {
            text: "Vapor is turned into gasoline at 99% recovery efficiency rate",
            position: { x: 500, y: 200 },
            delay: 4.5,
        },
        {
            text: "Fuel is returned back to the tank. You make money.",
            position: { x: 500, y: 300 },
            delay: 6,
        },
    ];

    return (
        <>
            {bubbles.map((bubble, index) => (
                <FlowTextBubble
                    key={index}
                    text={bubble.text}
                    position={bubble.position}
                    delay={bubble.delay}
                    bubbleNumber={index + 1}
                />
            ))}
        </>
    );
};

export default FlowTextBubbles;