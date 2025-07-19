
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { fetchFinancialData } from './services/financialDataService';
import { PublicCompanyData } from './types';

// --- Helper Functions ---
const formatCurrency = (
    value: number, 
    options: Intl.NumberFormatOptions = {}
): string => {
    const defaultOptions: Intl.NumberFormatOptions = {
        style: 'currency',
        currency: 'USD',
    };

    // If fractional digits aren't specified, decide based on value.
    if (options.minimumFractionDigits === undefined && options.maximumFractionDigits === undefined) {
        if (Math.abs(value) >= 1000 || value === 0) {
            defaultOptions.minimumFractionDigits = 0;
            defaultOptions.maximumFractionDigits = 0;
        } else {
            defaultOptions.minimumFractionDigits = 2;
            defaultOptions.maximumFractionDigits = 2;
        }
    }
    
    return new Intl.NumberFormat('en-US', { ...defaultOptions, ...options }).format(value);
};

// --- Default Values ---
const DEFAULTS = {
    LITERS_RECOVERED: '150',
    GAS_PRICE: '0.70',
    RECOVERY_SHARE: '20',
    NUM_MACHINES: '1',
    VRU_UNIT_COST: '0', // From client perspective, the investment is 0
};

// --- UI Helper Components ---

const InfoIcon: React.FC<{ tooltip: string }> = ({ tooltip }) => (
    <div className="group relative flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-gray-light text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
            {tooltip}
        </div>
    </div>
);

const Card: React.FC<{ title: string; description?: string; children: React.ReactNode; className?: string }> = ({ title, description, children, className = '' }) => (
    <div className={`bg-gray-medium rounded-lg shadow-xl p-6 border border-gray-light ${className}`}>
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            {description && <InfoIcon tooltip={description} />}
        </div>
        <div className="space-y-4">{children}</div>
    </div>
);

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-gray-text mb-1">{label}</label>
        <input
            {...props}
            className="w-full bg-gray-dark text-white border border-gray-light rounded-md p-2 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition disabled:bg-gray-light disabled:cursor-not-allowed"
        />
    </div>
);

const LinkedInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string; source: string; }> = ({ label, source, ...props }) => (
     <div>
        <label className="block text-sm font-medium text-gray-text mb-1">{label}</label>
        <div className="relative group">
             <input
                {...props}
                readOnly
                className="w-full bg-gray-dark text-white border border-gray-light rounded-md p-2 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition disabled:bg-gray-light disabled:cursor-not-allowed pr-8"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span role="img" aria-label="linked">🔗</span>
            </div>
             <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max p-2 bg-gray-light text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                Derived from: {source}
            </div>
        </div>
    </div>
);


const ResultDisplay: React.FC<{ label: string; value: string; className?: string }> = ({ label, value, className = '' }) => (
    <div className={`bg-gray-dark p-3 rounded-md flex justify-between items-center ${className}`}>
        <span className="text-gray-text">{label}</span>
        <span className="text-brand-blue font-bold text-lg">{value}</span>
    </div>
);

const Loader: React.FC = () => (
    <div className="flex justify-center items-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
    </div>
);

// --- Core Feature Components ---

const Header: React.FC = () => (
    <header className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Vapor Recovery Unit <span className="text-brand-blue">(VRU)</span>
        </h1>
        <h2 className="mt-2 text-2xl font-semibold text-gray-text">Financial Analysis Dashboard</h2>
    </header>
);

const VruIntro: React.FC = () => {
    const introText = "Unlock a new revenue stream while championing environmental responsibility. Our Vapor Recovery Units (VRUs) capture valuable gasoline vapors that would otherwise be lost, transforming a regulatory compliance need into a significant, zero-investment profit center. We handle the installation and maintenance; you gain saleable product and enhance your company's green credentials. This dashboard demonstrates the direct financial impact on your bottom line and stock valuation.";

    return (
        <div className="bg-navy/30 backdrop-blur-sm p-6 rounded-lg border border-brand-blue/30 shadow-2xl">
            <p className="text-lg text-gray-text text-center leading-relaxed">{introText}</p>
        </div>
    );
};

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

const SimpleCalculator: React.FC<SimpleCalculatorProps> = ({
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

interface FinancialModelingProps {
    projectAnnualProfit: number;
    totalInvestment: number;
    dcfNpv: number;
    setDcfNpv: (value: number) => void;
    simpleCalculatorInputs: {
        gasPrice: string;
        litersRecovered: string;
        recoveryShare: string;
        numMachines: string;
        vruUnitCost: string;
        totalAnnualRevenue: number;
    };
}

const FinancialModelingSection: React.FC<FinancialModelingProps> = ({ 
    projectAnnualProfit, totalInvestment, dcfNpv, setDcfNpv, simpleCalculatorInputs
}) => {
    const [ticker, setTicker] = useState<string>('AAPL');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isExporting, setIsExporting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [apiData, setApiData] = useState<PublicCompanyData | null>(null);
    
    // State for financial model inputs, with defaults
    const [marketCap, setMarketCap] = useState('1000000000');
    const [netIncome, setNetIncome] = useState('100000000');
    const [sharesOutstanding, setSharesOutstanding] = useState('100000000');
    const [peRatio, setPeRatio] = useState('25');
    const [currentPrice, setCurrentPrice] = useState('150');
    const [synergyBoost, setSynergyBoost] = useState('10');
    const [epsIncrease, setEpsIncrease] = useState<number>(0);
    const [wacc, setWacc] = useState('8.5');

    const handleFetchData = useCallback(async () => {
        if (!ticker) {
            setError('Please enter a ticker symbol.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setApiData(null);
        try {
            const result = await fetchFinancialData(ticker);
            if (result) {
                setApiData(result);
            } else {
                setError('Failed to fetch data. The ticker might be invalid or the API response was empty.');
            }
        } catch (e: any) {
            setError(e.message || 'An unexpected error occurred.');
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }, [ticker]);

    useEffect(() => {
        handleFetchData();
    }, []); 

    useEffect(() => {
        if (apiData) {
            setMarketCap(apiData.marketCap.toString());
            setNetIncome((apiData.eps * apiData.sharesOutstanding).toString());
            setSharesOutstanding(apiData.sharesOutstanding.toString());
            setCurrentPrice(apiData.stockPrice.toString());
            if (apiData.eps > 0) {
                setPeRatio((apiData.stockPrice / apiData.eps).toFixed(2));
            }
        }
    }, [apiData]);

    const handleExportCsv = () => {
        setIsExporting(true);
        
        const data = [];
        data.push(['Category', 'Metric', 'Value']);
        data.push(['---PROJECT ASSUMPTIONS---']);
        data.push(['Project', 'Number of VRU Machines', simpleCalculatorInputs.numMachines]);
        data.push(['Project', 'Liters Recovered (per day/machine)', simpleCalculatorInputs.litersRecovered]);
        data.push(['Project', 'Gasoline Price ($/liter)', simpleCalculatorInputs.gasPrice]);
        data.push(['Project', 'Client Revenue Share (%)', simpleCalculatorInputs.recoveryShare]);
        data.push(['Project', 'Client Investment ($)', simpleCalculatorInputs.vruUnitCost]);
        data.push(['---PROJECT RESULTS---']);
        data.push(['Project Results', 'Client Annual Revenue ($)', projectAnnualProfit]);
        data.push(['Project Results', 'Total Annual Revenue ($)', simpleCalculatorInputs.totalAnnualRevenue]);
        data.push(['Project Results', 'Total Client Investment ($)', totalInvestment]);

        data.push(['---COMPANY DATA---']);
        if (apiData) {
            data.push(['Company', 'Ticker', apiData.ticker]);
            data.push(['Company', 'Name', `"${apiData.companyName}"`]);
            data.push(['Company', 'Stock Price ($)', apiData.stockPrice]);
        }
        data.push(['Company', 'Market Cap ($)', parseFloat(marketCap)]);
        data.push(['Company', 'Net Income ($)', parseFloat(netIncome)]);
        data.push(['Company', 'Shares Outstanding', parseFloat(sharesOutstanding)]);
        data.push(['Company', 'P/E Ratio', parseFloat(peRatio)]);
        
        data.push(['---FINANCIAL MODELS---']);
        data.push(['DCF', 'WACC (%)', parseFloat(wacc)]);
        data.push(['DCF', 'Project NPV ($)', dcfNpv]);
        data.push(['EPS', 'EPS Increase ($)', epsIncrease]);
        
        const mc = parseFloat(marketCap) || 0;
        const boost = (parseFloat(synergyBoost) || 0) / 100;
        const synergyValue = mc * boost;
        const totalValueAdded = synergyValue + dcfNpv;
        data.push(['Market Cap Impact', 'New Market Cap ($)', mc + totalValueAdded]);
        
        const priceIncrease = epsIncrease * (parseFloat(peRatio) || 0);
        data.push(['Price Target', 'Implied Stock Price Increase ($)', priceIncrease]);
        data.push(['Price Target', 'New Stock Price Target ($)', (parseFloat(currentPrice) || 0) + priceIncrease]);

        const csvContent = "data:text/csv;charset=utf-8," + data.map(e => e.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `vru_financial_analysis_${ticker || 'report'}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsExporting(false);
    };


    return (
        <section className="mt-12">
            <h2 className="text-3xl font-bold text-center text-white mb-2">Advanced Financial Modeling</h2>
            <p className="text-center text-gray-text mb-8">Analyze the impact of the VRU project on your company's stock. All models use your annual revenue share from the calculator above.</p>

            <div className="bg-gray-medium p-4 rounded-lg border border-gray-light mb-8 sticky top-4 z-20 backdrop-blur-sm bg-opacity-80">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex-grow w-full md:w-auto">
                       <Input label="Fetch Public Company Data" value={ticker} onChange={(e) => setTicker(e.target.value)} placeholder="Enter Ticker (e.g., AAPL, XOM)"/>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <button onClick={handleFetchData} disabled={isLoading || isExporting} className="flex-1 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-2 px-6 rounded-md transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
                            {isLoading ? 'Fetching...' : 'Fetch Data'}
                        </button>
                        <button onClick={handleExportCsv} disabled={isLoading || isExporting} className="flex-1 bg-gray-light hover:bg-brand-blue-dark text-white font-bold py-2 px-4 rounded-md transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
                            {isExporting ? 'Exporting...' : 'Export to Excel (.csv)'}
                        </button>
                    </div>
                </div>
                {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
            </div>
            
            {isLoading && <Loader />}
            
            <div id="export-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <DcfCalculator onNpvChange={setDcfNpv} totalInvestment={totalInvestment} projectAnnualProfit={projectAnnualProfit} wacc={wacc} setWacc={setWacc}/>
                  <EpsCalculator 
                      netIncome={netIncome}
                      setNetIncome={setNetIncome}
                      sharesOutstanding={sharesOutstanding}
                      setSharesOutstanding={setSharesOutstanding}
                      projectAnnualProfit={projectAnnualProfit} 
                      onEpsIncreaseChange={setEpsIncrease} 
                  />
                  <MarketCapCalculator 
                       marketCap={marketCap}
                       setMarketCap={setMarketCap}
                       synergyBoost={synergyBoost}
                       setSynergyBoost={setSynergyBoost}
                       dcfNpv={dcfNpv} 
                  />
                  <EpsPriceTargetCalculator 
                       peRatio={peRatio}
                       setPeRatio={setPeRatio}
                       currentPrice={currentPrice}
                       setCurrentPrice={setCurrentPrice}
                       epsIncrease={epsIncrease} 
                  />
                  <StockPriceImpactChart initialData={apiData} epsIncrease={epsIncrease} />
              </div>
            </div>
        </section>
    );
};

// --- Sub-Components for FinancialModelingSection ---

const DcfCalculator: React.FC<{ onNpvChange: (npv: number) => void, totalInvestment: number, projectAnnualProfit: number, wacc: string, setWacc: (v: string) => void }> = ({ onNpvChange, totalInvestment, projectAnnualProfit, wacc, setWacc }) => {
    const LIFESPAN_YEARS = 15;

    const dcfValue = useMemo(() => {
        const w = (parseFloat(wacc) || 0) / 100;
        
        if (w <= 0) return 0 - totalInvestment;
        
        let sumOfDiscountedCashFlows = 0;
        for (let t = 1; t <= LIFESPAN_YEARS; t++) {
            sumOfDiscountedCashFlows += projectAnnualProfit / Math.pow(1 + w, t);
        }

        return sumOfDiscountedCashFlows - totalInvestment;
    }, [totalInvestment, projectAnnualProfit, wacc]);

    useEffect(() => {
        onNpvChange(dcfValue);
    }, [dcfValue, onNpvChange]);

    return (
        <Card title="Discounted Cash Flow (DCF)" description={`Values the project based on its expected cash flows over a ${LIFESPAN_YEARS}-year lifespan, discounted to their present value.`}>
            <LinkedInput label="Client Investment ($)" source="Simple Calculator" type="text" value={formatCurrency(totalInvestment)} />
            <LinkedInput label="Annual Revenue from Project ($)" source="Simple Calculator" type="text" value={formatCurrency(projectAnnualProfit)} />
            <Input label="WACC (%)" type="number" value={wacc} onChange={(e) => setWacc(e.target.value)} />
            <ResultDisplay label="Project NPV" value={formatCurrency(dcfValue)} />
        </Card>
    );
};

const EpsCalculator: React.FC<{ 
    netIncome: string;
    setNetIncome: (val: string) => void;
    sharesOutstanding: string;
    setSharesOutstanding: (val: string) => void;
    projectAnnualProfit: number, 
    onEpsIncreaseChange: (increase: number) => void 
}> = ({ netIncome, setNetIncome, sharesOutstanding, setSharesOutstanding, projectAnnualProfit, onEpsIncreaseChange }) => {
    
    const { oldEps, newEps, increase } = useMemo(() => {
        const ni = parseFloat(netIncome) || 0;
        const s = parseFloat(sharesOutstanding) || 1;
        const p = projectAnnualProfit || 0;
        
        const oldEps = s > 0 ? ni / s : 0;
        const newEps = s > 0 ? (ni + p) / s : 0;
        const increase = newEps - oldEps;
        return { oldEps, newEps, increase };
    }, [netIncome, sharesOutstanding, projectAnnualProfit]);
    
    useEffect(() => {
        onEpsIncreaseChange(increase);
    }, [increase, onEpsIncreaseChange]);

    return (
        <Card title="EPS Increase Analysis" description="Calculates the positive impact the project's revenue has on a company's Earnings Per Share.">
            <Input label="Current Net Income ($)" type="number" value={netIncome} onChange={(e) => setNetIncome(e.target.value)} />
            <Input label="Shares Outstanding" type="number" value={sharesOutstanding} onChange={(e) => setSharesOutstanding(e.target.value)} />
            <LinkedInput label="Annual Revenue from Project ($)" source="Simple Calculator" type="text" value={formatCurrency(projectAnnualProfit)} />
            <ResultDisplay label="Current EPS" value={`$${oldEps.toFixed(4)}`} />
            <ResultDisplay label="New EPS" value={`$${newEps.toFixed(4)}`} />
            <ResultDisplay label="EPS Increase" value={`+$${increase.toFixed(4)}`} className="bg-brand-blue/20" />
        </Card>
    );
};

const EpsPriceTargetCalculator: React.FC<{ 
    peRatio: string;
    setPeRatio: (val: string) => void;
    currentPrice: string;
    setCurrentPrice: (val: string) => void;
    epsIncrease: number 
}> = ({ peRatio, setPeRatio, currentPrice, setCurrentPrice, epsIncrease }) => {

    const { priceIncrease, newPriceTarget } = useMemo(() => {
        const pe = parseFloat(peRatio) || 0;
        const price = parseFloat(currentPrice) || 0;

        const priceIncreaseCalc = epsIncrease * pe;
        const newPriceTargetCalc = price + priceIncreaseCalc;

        return { priceIncrease: priceIncreaseCalc, newPriceTarget: newPriceTargetCalc };
    }, [peRatio, currentPrice, epsIncrease]);

    return (
        <Card title="EPS-Based Price Target" description="Estimates the potential impact on the stock price by applying the company's P/E ratio to the project's EPS increase.">
            <Input label="Current P/E Ratio" type="number" value={peRatio} onChange={(e) => setPeRatio(e.target.value)} />
            <Input label="Current Stock Price ($)" type="number" value={currentPrice} onChange={(e) => setCurrentPrice(e.target.value)} />
            <LinkedInput label="EPS Increase from Project ($)" source="EPS Increase Analysis" type="number" value={epsIncrease.toFixed(4)} readOnly />
            <ResultDisplay label="Implied Stock Price Increase" value={`${priceIncrease >= 0 ? '+' : ''}${formatCurrency(priceIncrease, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
            <ResultDisplay label="New Stock Price Target" value={formatCurrency(newPriceTarget, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} className="bg-brand-blue/20" />
        </Card>
    );
};


const MarketCapCalculator: React.FC<{ 
    marketCap: string;
    setMarketCap: (val: string) => void;
    synergyBoost: string;
    setSynergyBoost: (val: string) => void;
    dcfNpv: number 
}> = ({ marketCap, setMarketCap, synergyBoost, setSynergyBoost, dcfNpv }) => {

    const { newMarketCap, increase } = useMemo(() => {
        const mc = parseFloat(marketCap) || 0;
        const boost = (parseFloat(synergyBoost) || 0) / 100;
        
        const synergyValue = mc * boost;
        const totalValueAdded = synergyValue + dcfNpv;
        
        const newMc = mc + totalValueAdded;
        const inc = mc > 0 ? (totalValueAdded / mc) * 100 : 0;
        
        return { newMarketCap: newMc, increase: inc };
    }, [marketCap, dcfNpv, synergyBoost]);
    
    return (
        <Card title="Market Capitalization Impact" description="Estimates the project's total impact on market cap, including the tangible NPV and intangible goodwill from positive PR.">
            <Input label="Current Market Cap ($)" type="number" value={marketCap} onChange={e => setMarketCap(e.target.value)} />
            <Input label="Goodwill/Synergy Boost (%)" type="number" value={synergyBoost} onChange={e => setSynergyBoost(e.target.value)} />
            <LinkedInput label="Project NPV ($)" source="DCF Calculator" type="text" value={formatCurrency(dcfNpv)} />
            <ResultDisplay label="New Market Cap" value={formatCurrency(newMarketCap)} />
            <ResultDisplay label="Total Impact" value={`${increase > 0 ? '+' : ''}${increase.toFixed(4)}%`} />
        </Card>
    );
};

const StockPriceImpactChart: React.FC<{ initialData: PublicCompanyData | null, epsIncrease: number }> = ({ initialData, epsIncrease }) => {
    const data = useMemo(() => {
        if (!initialData || initialData.eps <= 0) {
            return null;
        }

        const currentPrice = initialData.stockPrice;
        const peRatio = initialData.stockPrice / initialData.eps;
        const basePriceIncrease = epsIncrease * peRatio;
        
        const scenarios = [
             { name: 'Bear Case (-20% P/E)', price: currentPrice + (basePriceIncrease * 0.8), pe: peRatio * 0.8, color: 'bg-yellow-500' },
             { name: 'Base Case', price: currentPrice + basePriceIncrease, pe: peRatio, color: 'bg-brand-blue' },
             { name: 'Bull Case (+20% P/E)', price: currentPrice + (basePriceIncrease * 1.2), pe: peRatio * 1.2, color: 'bg-green-500' },
        ];

        return { currentPrice, scenarios };
    }, [initialData, epsIncrease]);

    if (!data) {
        return (
            <Card title="Stock Price Impact Scenarios" description="Shows the potential stock price after project implementation, based on different market P/E ratio sentiments." className="lg:col-span-2">
                <div className="text-center text-gray-text p-4 h-72 flex items-center justify-center">
                    Data from company search and EPS calculation is needed to populate this chart.
                </div>
            </Card>
        );
    }
    
    const allPrices = [data.currentPrice, ...data.scenarios.map(s => s.price)];
    const minPrice = Math.min(...allPrices) * 0.98;
    const maxPrice = Math.max(...allPrices) * 1.02;
    const priceRange = maxPrice - minPrice;

    const getBarHeight = (price: number) => {
        if (priceRange <= 0) return 0;
        return ((price - minPrice) / priceRange) * 100;
    };
    
    const formatPrice = (value: number) => formatCurrency(value, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <Card title="Stock Price Impact Scenarios" description="Shows the potential stock price after project implementation, based on different market P/E ratio sentiments." className="lg:col-span-2">
            <div className="relative h-72 w-full pt-4 pr-4 pb-12 pl-12">
                <div className="h-full w-full flex justify-around items-end gap-4 border-l border-b border-gray-light">
                    {/* Y-Axis labels */}
                    <div className="absolute left-0 bottom-12 top-4 -translate-x-[110%] text-xs text-gray-900 flex flex-col justify-between pr-1 text-right w-12">
                        <span>{formatPrice(maxPrice)}</span>
                        <span>{formatPrice(minPrice + priceRange/2)}</span>
                        <span>{formatPrice(minPrice)}</span>
                    </div>

                    {/* Current Price Line */}
                    <div className="absolute w-[calc(100%-3rem)] right-4 border-t-2 border-red-500 border-dashed" style={{ bottom: `calc(${getBarHeight(data.currentPrice)}% + 3rem)` }}>
                         <span className="absolute -top-5 right-0 text-sm font-medium text-red-600 bg-gray-100 px-1">
                            Current: {formatPrice(data.currentPrice)}
                         </span>
                    </div>
                    
                    {data.scenarios.map(scenario => (
                        <div key={scenario.name} className="flex-1 flex flex-col items-center justify-end h-full group">
                            <div className="text-white font-bold text-sm mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{formatPrice(scenario.price)}</div>
                            <div 
                                className={`w-3/4 ${scenario.color} hover:opacity-80 transition-all duration-300 rounded-t-md`} 
                                style={{ height: `${getBarHeight(scenario.price)}%` }}
                                title={`${scenario.name}: ${formatPrice(scenario.price)}`}
                            >
                            </div>
                        </div>
                    ))}
                </div>
                 {/* X-Axis Labels */}
                <div className="absolute bottom-0 h-12 w-[calc(100%-3rem)] right-4 flex justify-around items-start text-gray-900">
                    {data.scenarios.map(scenario => (
                         <div key={scenario.name} className="flex-1 text-center text-xs text-gray-text px-1">
                            <p className="font-bold">{scenario.name.split('(')[0]}</p>
                            <p>({scenario.name.split('(')[1] || `P/E: ${scenario.pe.toFixed(1)}`})</p>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

// --- Main App Component ---

const App: React.FC = () => {
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
        <div className="bg-gray-dark min-h-screen font-sans">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <Header />
                <main className="mt-8 space-y-12">
                    <VruIntro />
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
                <footer className="text-center text-gray-500 mt-16 pb-8">
                    <p>Financial data is for illustrative purposes only. All calculations are simplified models.</p>
                    <p>&copy; {new Date().getFullYear()} VRU Financial Analysis. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default App;