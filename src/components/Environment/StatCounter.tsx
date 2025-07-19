import React, { useEffect, useState } from 'react';

interface StatCounterProps {
  to?: number; // 'to' is now optional as we'll calculate the value
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  startDate?: string; // New prop for the start date
  initialValue?: number; // New prop for the initial value at startDate
  ratePerSecond?: number; // New prop for the rate of increase per second
}

const StatCounter: React.FC<StatCounterProps> = ({
  to,
  prefix = '',
  suffix = '',
  duration = 2000,
  decimals,
  startDate,
  initialValue,
  ratePerSecond = 1 // Default rate of 1 unit per second
}) => {
  const [count, setCount] = useState(0);

  // Determine if the counter should be a float based on 'to' or 'decimals'
  const isFloat = decimals !== undefined && decimals > 0 || (to !== undefined && to % 1 !== 0);
  const effectiveDecimals = isFloat ? (decimals !== undefined ? decimals : 1) : 0;

  useEffect(() => {
    let animationFrameId: number;

    const calculateAndSetCount = () => {
      if (startDate && initialValue !== undefined) {
        const startDateTime = new Date(startDate).getTime();
        const currentTime = new Date().getTime();
        const elapsedSeconds = (currentTime - startDateTime) / 1000;
        const calculatedValue = initialValue + (elapsedSeconds * ratePerSecond);

        if (isFloat) {
          setCount(parseFloat(calculatedValue.toFixed(effectiveDecimals)));
        } else {
          setCount(Math.floor(calculatedValue));
        }
      } else if (to !== undefined) {
        // Fallback to original 'to' prop animation if startDate/initialValue not provided
        // This part would need a full animation logic if 'to' is still used for animation
        // For now, we'll just set it directly if no continuous update is needed.
        if (isFloat) {
          setCount(parseFloat(to.toFixed(effectiveDecimals)));
        } else {
          setCount(Math.floor(to));
        }
      }
      animationFrameId = requestAnimationFrame(calculateAndSetCount);
    };

    animationFrameId = requestAnimationFrame(calculateAndSetCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [to, startDate, initialValue, ratePerSecond, isFloat, effectiveDecimals]);
  
  const formatNumber = (num: number) => {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: effectiveDecimals,
        maximumFractionDigits: effectiveDecimals,
      }).format(num);
  }

  return <span>{prefix}{isFloat ? formatNumber(count) : new Intl.NumberFormat('en-US').format(count)}{suffix}</span>;
};

export default StatCounter;