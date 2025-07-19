
import React, { useState, useMemo } from 'react';
import { SimpleCalculator } from '../components/Financial/SimpleCalculator';
import { FinancialModelingSection } from '../components/Financial/FinancialModelingSection';
import Footer from '../components/Footer';

// --- Default Values ---
const DEFAULTS = {
    LITERS_RECOVERED: '150',
    GAS_PRICE: '0.70',
    RECOVERY_SHARE: '20',
    NUM_MACHINES: '1',
    VRU_UNIT_COST: '0', // From client perspective, the investment is 0
};

const FinancialAdvantage: React.FC = () => {
    // State for Simple Calculator
    const [gasPrice, setGasPrice] = useState(DEFAULTS.GAS_PRICE);
    const [litersRecovered, setLitersRecovered] = useState(DEFAULTS.LITERS_RECOVERED);
    const [recoveryShare, setRecoveryShare] = useState(DEFAULTS.RECOVERY_SHARE);
    const [numMachines, setNumMachines] = useState(DEFAULTS.NUM_MACHINES);
    const [vruUnitCost, setVruUnitCost] = useState(DEFAULTS.VRU_UNIT_COST);
    
    // State for interconnected values
    const [dcfNpv, setDcfNpv] = useState(0);

    const handleReset = () => {
        setGasPrice(DEFAULTS.GAS_PRICE);
        setLitersRecovered(DEFAULTS.LITERS_RECOVERED);
        setRecoveryShare(DEFAULTS.RECOVERY_SHARE);
        setNumMachines(DEFAULTS.NUM_MACHINES);
        setVruUnitCost(DEFAULTS.VRU_UNIT_COST);
    };

    const { clientAnnualRevenue, totalAnnualRevenue, totalInvestment } = useMemo(() => {
        const price = parseFloat(gasPrice) || 0;
        const liters = parseFloat(litersRecovered) || 0;
        const sharePercent = parseFloat(recoveryShare) || 0;
        const machines = parseInt(numMachines, 10) || 0;
        const unitCost = parseFloat(vruUnitCost) || 0;

        const share = sharePercent / 100;
        if (share < 0 || share > 1) return { clientAnnualRevenue: 0, totalAnnualRevenue: 0, totalInvestment: 0 };
        
        const totalDaily = price * liters * machines;
        const clientDaily = totalDaily * share;
        
        return { 
            clientAnnualRevenue: clientDaily * 365,
            totalAnnualRevenue: totalDaily * 365,
            totalInvestment: machines * unitCost
        };
    }, [gasPrice, litersRecovered, recoveryShare, numMachines, vruUnitCost]);

    const simpleCalculatorInputs = {
        gasPrice, litersRecovered, recoveryShare, numMachines, vruUnitCost, totalAnnualRevenue
    };

    return (
        <div className="relative min-h-screen bg-gray-dark text-white font-sans antialiased flex flex-col">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center pt-24 pb-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">Financial Advantage</h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">Unlock the significant economic benefits of our Vapor Recovery Unit (VRU) technology.</p>
                </div>
            </div>
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
                <SimpleCalculator 
                    gasPrice={gasPrice} setGasPrice={setGasPrice}
                    litersRecovered={litersRecovered} setLitersRecovered={setLitersRecovered}
                    recoveryShare={recoveryShare} setRecoveryShare={setRecoveryShare}
                    numMachines={numMachines} setNumMachines={setNumMachines}
                    vruUnitCost={vruUnitCost} setVruUnitCost={setVruUnitCost}
                    clientAnnualRevenue={clientAnnualRevenue}
                    totalAnnualRevenue={totalAnnualRevenue}
                    totalInvestment={totalInvestment}
                    handleReset={handleReset}
                />
                <FinancialModelingSection 
                    projectAnnualProfit={clientAnnualRevenue} 
                    totalInvestment={totalInvestment}
                    dcfNpv={dcfNpv}
                    setDcfNpv={setDcfNpv}
                    simpleCalculatorInputs={simpleCalculatorInputs}
                />
            </main>
        </div>
    );
}

export default FinancialAdvantage;