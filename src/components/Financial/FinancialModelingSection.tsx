import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchFinancialData } from './services/financialDataService';
import { PublicCompanyData } from './types';
import { Card, Input, LinkedInput, Loader, ResultDisplay } from './UIComponents';
import { formatCurrency } from './utils';

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

export const FinancialModelingSection: React.FC<FinancialModelingProps> = ({ 
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
            <h2 className="text-3xl font-bold text-center text-black mb-2">Advanced Financial Modeling</h2>
            <p className="text-center text-gray-900 mb-8">Analyze the impact of the VRU project on your company's stock. All models use your annual revenue share from the calculator above.</p>

            <div className="bg-gray-medium p-4 rounded-lg border border-gray-light mb-8 sticky top-4 z-20 backdrop-blur-sm bg-opacity-80">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex-grow w-full md:w-auto">
                       <Input label="Fetch Public Company Data" className="text-black" value={ticker} onChange={(e) => setTicker(e.target.value)} placeholder="Enter Ticker (e.g., AAPL, XOM)"/>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <button onClick={handleFetchData} disabled={isLoading || isExporting} className="flex-1 bg-brand-blue hover:bg-brand-blue-dark text-black font-bold py-2 px-6 rounded-md transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
                            {isLoading ? 'Fetching...' : 'Fetch Data'}
                        </button>
                        <button onClick={handleExportCsv} disabled={isLoading || isExporting} className="flex-1 bg-gray-light hover:bg-brand-blue-dark text-black font-bold py-2 px-4 rounded-md transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
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

    const { dcfValue, yearlyCashFlows } = useMemo(() => {
        const w = (parseFloat(wacc) || 0) / 100;
        const flows: { year: number; value: number }[] = [{ year: 0, value: -totalInvestment }];
        let sumOfDiscountedCashFlows = 0;

        if (w <= 0) {
            for (let t = 1; t <= LIFESPAN_YEARS; t++) {
                flows.push({ year: t, value: projectAnnualProfit });
            }
            return { dcfValue: (projectAnnualProfit * LIFESPAN_YEARS) - totalInvestment, yearlyCashFlows: flows };
        }
        
        for (let t = 1; t <= LIFESPAN_YEARS; t++) {
            const discountedValue = projectAnnualProfit / Math.pow(1 + w, t);
            sumOfDiscountedCashFlows += discountedValue;
            flows.push({ year: t, value: discountedValue });
        }

        return { dcfValue: sumOfDiscountedCashFlows - totalInvestment, yearlyCashFlows: flows };
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
            {/* Placeholder for DCF Chart */}
            <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={yearlyCashFlows}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="year" stroke="#333333" />
                        <YAxis stroke="#333333" tickFormatter={(value) => formatCurrency(value)} dx={-10} />
                        <Tooltip formatter={(value: any) => formatCurrency(Number(value))} contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #cccccc', color: '#333333' }} itemStyle={{ color: '#333333' }} labelStyle={{ color: '#333333' }} />
                        <Legend />
                        <Bar dataKey="value" fill="#1a73e8" name="Discounted Cash Flow" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
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
             { name: 'Bear Case (-20% P/E)', price: currentPrice + (basePriceIncrease * 0.8), pe: peRatio * 0.8, color: 'bg-blue-200' },
             { name: 'Base Case', price: currentPrice + basePriceIncrease, pe: peRatio, color: 'bg-blue-500' },
             { name: 'Bull Case (+20% P/E)', price: currentPrice + (basePriceIncrease * 1.2), pe: peRatio * 1.2, color: 'bg-purple-500' },
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
                    <div className="absolute left-0 bottom-12 top-4 text-xs text-gray-700 flex flex-col justify-between pl-4 text-right w-20">
                        <span>{formatPrice(maxPrice)}</span>
                        <span>{formatPrice(minPrice + priceRange/2)}</span>
                        <span>{formatPrice(minPrice)}</span>
                    </div>

                    {/* Current Price Line */}
                    <div className="absolute w-[calc(100%-3rem)] right-4 border-t-2 border-red-500 border-dashed" style={{ bottom: `calc(${getBarHeight(data.currentPrice)}% + 3rem)` }}>
                         <span className="absolute -top-5 right-0 text-sm font-medium text-red-400 bg-gray-medium px-1">
                            Current: {formatPrice(data.currentPrice)}
                         </span>
                    </div>
                    
                    {data.scenarios.map(scenario => (
                        <div key={scenario.name} className="flex-1 flex flex-col items-center justify-end h-full group">
                            <div className="text-gray-900 font-bold text-sm mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{formatPrice(scenario.price)}</div>
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
                <div className="absolute bottom-0 h-12 w-[calc(100%-3rem)] right-4 flex justify-around items-start">
                    {data.scenarios.map(scenario => (
                         <div key={scenario.name} className="flex-1 text-center text-xs text-gray-700 px-1">
                            <p className="font-bold">{scenario.name.split('(')[0]}</p>
                            <p>({scenario.name.split('(')[1] || `P/E: ${scenario.pe.toFixed(1)}`})</p>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};