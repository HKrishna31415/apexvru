
import React, { useState, useCallback, useRef } from 'react';
import VruContainer from './VruContainer';
import { PlayIcon, RefreshCwIcon } from './icons';
import GooeyButton from './gooey_button';

const App: React.FC = () => {
    const [ourFill, setOurFill] = useState(0);
    const [competitorFill, setCompetitorFill] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const animationFrameId = useRef<number | null>(null);

    const startAnimation = useCallback(() => {
        if (isAnimating) return;

        setIsAnimating(true);
        setIsFinished(false);
        setOurFill(0);
        setCompetitorFill(0);

        const animationDuration = 5000; // 5 seconds for our VRU to fill
        let startTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!startTime) {
                startTime = timestamp;
            }
            const elapsedTime = timestamp - startTime;
            const progress = Math.min(1, elapsedTime / animationDuration);

            setOurFill(progress * 100);
            setCompetitorFill(progress * 20); // Competitor is 5x less efficient

            if (progress < 1) {
                animationFrameId.current = requestAnimationFrame(animate);
            } else {
                setOurFill(100);
                setCompetitorFill(20);
                setIsAnimating(false);
                setIsFinished(true);
            }
        };

        animationFrameId.current = requestAnimationFrame(animate);
    }, [isAnimating]);

    const handleButtonClick = () => {
        if (isAnimating) return;
        
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
        startAnimation();
    };


    return (
        <div className="min-h-screen text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
            <main className="w-full max-w-6xl mx-auto flex flex-col items-center">
                <header className="text-center mb-10 md:mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                        Unmatched Efficiency
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-400 max-w-3xl">
                        Our advanced Vapor Recovery Unit is not just better—it's <span className="font-bold text-yellow-400">5x more efficient</span> than standard competitor models. See the difference in real-time.
                    </p>
                </header>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-16">
                    <VruContainer
                        label="Our Advanced VRU"
                        fillPercentage={ourFill}
                        baseColor="cyan"
                    />
                    <VruContainer
                        label="Standard Competitor VRU"
                        fillPercentage={competitorFill}
                        baseColor="orange"
                    />
                </div>

                <div className="flex flex-col items-center">
                    <GooeyButton
                        onClick={handleButtonClick}
                        disabled={isAnimating}
                    >
                         <span className="relative flex items-center justify-center gap-3">
                            {isFinished ? (
                                <>
                                    <RefreshCwIcon className="w-6 h-6" />
                                    Run Again
                                </>
                            ) : (
                                <>
                                    <PlayIcon className="w-6 h-6" />
                                    Start Comparison
                                </>
                            )}
                        </span>
                    </GooeyButton>

                    {isAnimating && (
                        <p className="mt-4 text-slate-400 text-sm animate-pulse">
                            Demonstration in progress...
                        </p>
                    )}
                </div>
            </main>
    
            <footer className="w-full max-w-6xl mx-auto text-center mt-16 text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Your Company Inc. All rights reserved.</p>
            </footer>
        </div>
    );
};


export default App;