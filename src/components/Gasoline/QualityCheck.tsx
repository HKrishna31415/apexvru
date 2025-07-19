import React, { useState, useEffect } from 'react';
import { QualityCheckItem, GasolineSample } from '../../types';
import { DropletIcon, ShieldCheckIcon, ChevronRightIcon, RefreshIcon, GlobeIcon } from './Icon';
import QualityDetailModal from './QualityDetailModal';
import AnimatedCheckmark from './AnimatedCheckmark';

const samples: GasolineSample[] = [
  { country: 'Saudi Arabia', octane: 91 },
  { country: 'USA', octane: 93 },
  { country: 'Germany', octane: 98 },
  { country: 'Japan', octane: 100 },
  { country: 'Saudi Arabia', octane: 95 },
  { country: 'UAE', octane: 98 },
  { country: 'Jordan', octane: 90 },
  { country: 'Brazil', octane: 87 },
  { country: 'Kuwait', octane: 95 },
  { country: 'UK', octane: 97 },
  { country: 'Oman', octane: 95 },
  { country: 'Australia', octane: 95 },
];


const generateQualityChecks = (octane: number): QualityCheckItem[] => [
  { name: 'Octane Rating', value: `${octane}`, status: 'Pass', description: `Octane rating measures a fuel's ability to resist "knocking" or "pinging" during combustion. A rating of ${octane} indicates high stability, suitable for high-performance engines.` },
  { name: 'Vapor Pressure', value: '9.0 PSI', status: 'Pass', description: 'Reid Vapor Pressure (RVP) indicates how easily the fuel evaporates at a given temperature. The value must be within a specific range to ensure proper engine start and performance in different climates.' },
  { name: 'Sediment', value: '< 1 PPM', status: 'Pass', description: 'This test checks for solid impurities like dirt, rust, or other particles. A low value (less than 1 part per million) ensures fuel system components are not clogged or damaged.' },
  { name: 'Ethanol Content', value: '9.8%', status: 'Pass', description: 'Measures the percentage of ethanol blended into the gasoline. Most standard vehicles are designed for fuels containing up to 10% ethanol (E10).' },
  { name: 'Sulfur Content', value: '< 10 PPM', status: 'Pass', description: 'High sulfur levels in gasoline can harm emission control systems and contribute to air pollution. A value below 10 PPM meets modern ultra-low-sulfur fuel standards.' },
];


const QualityCheck: React.FC = () => {
  const [testKey, setTestKey] = useState(0);
  const [currentSampleIndex, setCurrentSampleIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isOutputVisible, setIsOutputVisible] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [modalData, setModalData] = useState<QualityCheckItem | null>(null);

  const currentSample = samples[currentSampleIndex];
  const qualityChecks = generateQualityChecks(currentSample.octane);

  useEffect(() => {
    setIsInputVisible(false);
    setVisibleItems([]);
    setIsOutputVisible(false);

    const inputTimer = setTimeout(() => setIsInputVisible(true), 100);
    const timers = qualityChecks.map((_, index) =>
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, 600 + index * 200)
    );
    const outputTimer = setTimeout(() => {
      setIsOutputVisible(true);
    }, 600 + qualityChecks.length * 200);

    return () => {
      clearTimeout(inputTimer);
      timers.forEach(clearTimeout);
      clearTimeout(outputTimer);
    };
  }, [testKey]);

  const handleAnalyzeNewSample = () => {
    setCurrentSampleIndex(prev => (prev + 1) % samples.length);
    setTestKey(prev => prev + 1);
  };
  
  const handleOpenModal = (item: QualityCheckItem) => {
    setModalData(item);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <>
      <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 md:gap-0 items-center">
              {/* Input Card */}
              <div className={`col-span-1 md:col-span-3 transition-all duration-700 ease-out ${isInputVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 ring-1 ring-slate-700/50 h-full flex flex-col justify-center items-center text-center">
                      <p className="font-semibold text-slate-400 mb-2">INPUT SAMPLE</p>
                       <div className="flex items-center text-slate-400 my-3">
                        <GlobeIcon className="h-5 w-5 mr-2" />
                        <span>{currentSample.country}</span>
                      </div>
                      <DropletIcon className="h-16 w-16"/>
                      <h3 className="text-xl font-bold text-white mt-4">Gasoline</h3>
                      <p className="text-lg text-slate-300">{currentSample.octane} Octane</p>
                  </div>
              </div>

              {/* Arrow Connector */}
              <div className="hidden md:flex justify-center items-center col-span-1">
                   <ChevronRightIcon className={`w-10 h-10 text-slate-600 transition-opacity duration-500 delay-500 ${isInputVisible ? 'opacity-100' : 'opacity-0'}`} />
              </div>

              {/* Analysis Card */}
              <div className="col-span-1 md:col-span-3">
                  <div className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 ring-1 ring-slate-700/50">
                      <h3 className="text-center font-semibold text-slate-400 mb-4">QUALITY ANALYSIS</h3>
                      <ul className="space-y-3">
                          {qualityChecks.map((item, index) => (
                             <li 
                                key={item.name} 
                                className={`flex items-center justify-between transition-all duration-500 ease-out rounded-md p-2 -mx-2 cursor-pointer hover:bg-slate-700/50 ${visibleItems.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                onClick={() => handleOpenModal(item)}
                                aria-label={`View details for ${item.name}`}
                                role="button"
                              >
                                  <span className="text-slate-300">{item.name}</span>
                                  <div className="flex items-center space-x-2">
                                      <span className="font-mono text-slate-200 text-sm">{item.value}</span>
                                      <AnimatedCheckmark start={visibleItems.includes(index)} />
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>

              {/* Arrow Connector */}
               <div className="hidden md:flex justify-center items-center col-span-1">
                   <ChevronRightIcon className={`w-10 h-10 text-slate-600 transition-opacity duration-500 ${isOutputVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: isOutputVisible ? '0ms' : '1500ms'}} />
              </div>

              {/* Output Card */}
              <div className={`col-span-1 md:col-span-3 transition-all duration-700 ease-out ${isOutputVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}>
                   <div className="bg-green-900/20 backdrop-blur-md rounded-lg p-6 ring-1 ring-green-500/50 h-full flex flex-col justify-center items-center text-center shadow-lg shadow-green-500/10">
                      <p className="font-semibold text-green-300 mb-2">VERIFIED OUTPUT</p>
                      <ShieldCheckIcon className="h-16 w-16 text-green-400 my-4"/>
                      <h3 className="text-xl font-bold text-white">Quality Certified</h3>
                      <p className="text-lg text-slate-300">{currentSample.octane} Octane</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="mt-16 mb-12 flex justify-center items-center">
        <button 
          onClick={handleAnalyzeNewSample}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-400 to-orange-500 group-hover:from-yellow-400 group-hover:to-orange-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-yellow-800/80 transition-all duration-300 ease-in-out"
        >
          <span className="relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <RefreshIcon className="w-5 h-5 mr-2" />
            Analyze New Sample
          </span>
        </button>
      </div>
      {modalData && <QualityDetailModal item={modalData} onClose={handleCloseModal} />}
    </>
  );
};

export default QualityCheck;