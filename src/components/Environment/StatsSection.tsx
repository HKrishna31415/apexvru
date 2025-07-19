import React, { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import StatCounter from './StatCounter';

const Stat = ({
  label,
  suffix,
  prefix,
  decimals,
  isVisible,
  startDate,
  initialValue,
  ratePerSecond,
}: {
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  isVisible: boolean;
  startDate?: string;
  initialValue?: number;
  ratePerSecond?: number;
}) => {
  return (
    <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
      <div className="text-4xl md:text-5xl font-black text-emerald-400">
        {isVisible && (
          <StatCounter
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
            startDate={startDate}
            initialValue={initialValue}
            ratePerSecond={ratePerSecond}
          />
        )}
      </div>
      <p className="mt-2 text-lg text-slate-300">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Stat
            label="Gallons Recovered"
            prefix=""
            suffix="+"
            decimals={0}
            isVisible={isVisible}
            startDate="2025-07-09T00:00:00Z"
            initialValue={100000}
            ratePerSecond={0.1}
          />
          <Stat
            label="Liters Recovered"
            prefix=""
            suffix="+"
            decimals={0}
            isVisible={isVisible}
            startDate="2025-07-09T00:00:00Z"
            initialValue={100000 * 3.78541}
            ratePerSecond={0.1 * 3.78541}
          />
          <Stat
            label="Tons of CO2 Reduced"
            suffix="+"
            isVisible={isVisible}
            startDate="2025-07-09T00:00:00Z"
            initialValue={15000}
            ratePerSecond={0.001}
          />
          <Stat
            label="Sites Deployed"
            suffix="+"
            isVisible={isVisible}
            startDate="2025-07-09T00:00:00Z"
            initialValue={500}
            ratePerSecond={0.00000001}
          />
        </div>
      </div>
    </section>
  );
};

const ComplianceStats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.2 });

  return (
    <div ref={ref} className="py-20 sm:py-28 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Proven Performance &amp; Compliance</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">VRUs are a reliable, field-tested solution for meeting environmental regulations and enhancing operational safety.</p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Stat
            isVisible={isVisible}
            label="Typical VOC Capture Rate"
            suffix="%"
            startDate="2025-07-09T00:00:00Z"
            initialValue={95}
            ratePerSecond={0.000001}
          />
          <Stat
            isVisible={isVisible}
            label="Tons of CO2e Reduced Annually*"
            suffix="+"
            startDate="2025-07-09T00:00:00Z"
            initialValue={50000}
            ratePerSecond={0.01}
          />
          <Stat
            isVisible={isVisible}
            label="Power per Barrel Recovered"
            prefix="<"
            suffix=" kWh"
            decimals={1}
            startDate="2025-07-09T00:00:00Z"
            initialValue={2}
            ratePerSecond={0.0000001}
          />
          <Stat
            isVisible={isVisible}
            label="Meets EPA & State Regulations"
            suffix="%"
            startDate="2025-07-09T00:00:00Z"
            initialValue={100}
            ratePerSecond={0.00000001}
          />
        </div>
        <p className="text-center text-slate-500 mt-12 text-sm">* Figure represents typical results for mid-to-large scale industrial operations.</p>
      </div>
    </div>
  );
};

export { StatsSection, ComplianceStats };