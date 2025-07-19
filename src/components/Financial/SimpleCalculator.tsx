import React from 'react';
import { Card, Input, ResultDisplay } from './UIComponents';
import { formatCurrency } from './utils';

interface SimpleCalculatorProps {
    gasPrice: string;
    setGasPrice: (val: string) => void;
    litersRecovered: string;
    setLitersRecovered: (val: string) => void;
    recoveryShare: string;
    setRecoveryShare: (val: string) => void;
    numMachines: string;
    setNumMachines: (val: string) => void;
    vruUnitCost: string;
    setVruUnitCost: (val: string) => void;
    clientAnnualRevenue: number;
    totalAnnualRevenue: number;
    totalInvestment: number;
    handleReset: () => void;
}

export const SimpleCalculator: React.FC<SimpleCalculatorProps> = ({ 
    gasPrice, setGasPrice, litersRecovered, setLitersRecovered, 
    recoveryShare, setRecoveryShare, numMachines, setNumMachines, 
    vruUnitCost, setVruUnitCost, clientAnnualRevenue, totalAnnualRevenue, 
    totalInvestment, handleReset 
}) => {
    const LITERS_TO_GALLONS = 0.264172;
    
    const formatRevenueValue = (clientValue: number, totalValue: number) => {
        return `${formatCurrency(clientValue)} (${formatCurrency(totalValue)} total)`;
    }

    return (
        <Card title="Simple VRU Revenue Calculator" description="Estimate your revenue share from recovered gasoline. Our company installs and maintains the VRU at no cost to you, simply sharing a percentage of the recovered product's value.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input label="Number of VRU Machines" type="number" value={numMachines} onChange={(e) => setNumMachines(e.target.value)} min="1" step="1" />
                <Input label="Client Investment ($)" type="number" value={vruUnitCost} onChange={(e) => setVruUnitCost(e.target.value)} min="0" />
                <div>
                    <Input label="Liters Recovered (per machine/day)" type="number" value={litersRecovered} onChange={(e) => setLitersRecovered(e.target.value)} />
                    <p className="text-xs text-gray-text mt-1">({((parseFloat(litersRecovered) || 0) * LITERS_TO_GALLONS).toFixed(2)} gallons)</p>
                </div>
                 <Input label="Gasoline Price ($/liter)" type="number" value={gasPrice} onChange={(e) => setGasPrice(e.target.value)} step="0.01" />
                <Input label="Client Revenue Share (%)" type="number" value={recoveryShare} onChange={(e) => setRecoveryShare(e.target.value)} min="0" max="100"/>
                <div className="md:col-span-1 flex items-end">
                     <button onClick={handleReset} className="w-full bg-gray-light hover:bg-brand-blue-dark text-white font-bold py-2 px-4 rounded-md transition duration-300">
                        Reset to Defaults
                    </button>
                </div>
            </div>
            <div className="mt-6 space-y-3">
                <ResultDisplay label="Client Annual Revenue (Total)" value={formatRevenueValue(clientAnnualRevenue, totalAnnualRevenue)} className="bg-brand-blue/20" />
                <ResultDisplay label="Total Client Investment" value={formatCurrency(totalInvestment)} />
            </div>
        </Card>
    );
};