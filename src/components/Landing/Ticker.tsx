
import React, { useState, useEffect } from 'react';

// --- Constants ---
// A fixed starting point in time (January 1, 2024, 00:00:00 UTC)
const START_TIMESTAMP_MS = 1751366400000;
// The value of the ticker at the START_TIMESTAMP_MS
const START_VALUE = 100000.0;
// The amount the ticker should increase over a 24-hour period
const INCREASE_PER_DAY = 1000.0;
// The number of milliseconds in a day
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
// The rate of increase per millisecond
const INCREASE_PER_MILLISECOND = INCREASE_PER_DAY / MILLISECONDS_PER_DAY;

// --- Helper Component ---
// To avoid redefining on each render of App
const TickerDisplay: React.FC<{ value: number }> = ({ value }) => {
  const formattedValue = value.toLocaleString('en-US', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });

  const [integerPart, fractionalPart] = formattedValue.split('.');

  return (
    <div className="font-mono text-center" aria-live="polite" aria-atomic="true">
      <span className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white">
        {integerPart}
      </span>
      <span className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-cyan-400">
        .{fractionalPart}
      </span>
    </div>
  );
};

const Ticker: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<number>(() => {
    // Initialize state with the correct current value to avoid initial flicker
    const elapsedTimeMs = Date.now() - START_TIMESTAMP_MS;
    return START_VALUE + (elapsedTimeMs * INCREASE_PER_MILLISECOND);
  });

  useEffect(() => {
    let animationFrameId: number;

    const tick = () => {
      const elapsedTimeMs = Date.now() - START_TIMESTAMP_MS;
      const newValue = START_VALUE + (elapsedTimeMs * INCREASE_PER_MILLISECOND);
      setCurrentValue(newValue);
      animationFrameId = requestAnimationFrame(tick);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(tick);

    // Cleanup function to cancel the animation frame when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 px-2 py-1 select-none">
        <div className="w-full max-w-4xl mx-auto p-2 md:p-3 bg-gray-800/50 rounded-xl shadow-xl border border-cyan-400/20 backdrop-blur-sm">
            <header className="text-center mb-6">
                <h1 className="text-xl md:text-3xl font-light text-cyan-300 tracking-wider">Total gasoline saved for clients</h1>
            </header>
            <main>
                <TickerDisplay value={currentValue} />
            </main>
        </div>
    </div>
  );
};

export default Ticker;
