
import React, { useState, useEffect } from 'react';
import { GasolineReport, QualityStatus } from '../../types';
import { LocationIcon, CalendarIcon, BeakerIcon, DropletIcon, TestTubeIcon } from './Icon';

interface ReportCardProps {
  report: GasolineReport;
  index: number;
  openPdfModal: (pdfUrl: string, title: string) => void;
}

const statusStyles: { [key in QualityStatus]: { badge: string; ring: string; text: string; shadow: string } } = {
  [QualityStatus.Excellent]: {
    badge: 'bg-green-500/20 text-green-300',
    ring: 'ring-green-500/50',
    text: 'text-green-400',
    shadow: 'hover:shadow-green-500/20',
  },
  [QualityStatus.Good]: {
    badge: 'bg-sky-500/20 text-sky-300',
    ring: 'ring-sky-500/50',
    text: 'text-sky-400',
    shadow: 'hover:shadow-sky-500/20',
  },
  [QualityStatus.Pass]: {
    badge: 'bg-yellow-500/20 text-yellow-300',
    ring: 'ring-yellow-500/50',
    text: 'text-yellow-400',
    shadow: 'hover:shadow-yellow-500/20',
  },
  [QualityStatus.Warning]: {
    badge: 'bg-red-500/20 text-red-300',
    ring: 'ring-red-500/50',
    text: 'text-red-400',
    shadow: 'hover:shadow-red-500/20',
  },
};

const ReportCard: React.FC<ReportCardProps> = ({ report, index, openPdfModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const style = statusStyles[report.status];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`
        bg-slate-800/50 backdrop-blur-md rounded-lg p-6 ring-1 ring-slate-700/50
        transition-all duration-500 ease-out transform mx-auto max-w-sm
        hover:scale-105 hover:-translate-y-1 hover:ring-cyan-400/50 hover:shadow-2xl ${style.shadow}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-mono text-cyan-400">{report.id}</p>
          <div className="flex items-center mt-1">
            <LocationIcon className="h-4 w-4 text-slate-400 mr-2" />
            <h2 className="text-lg font-bold text-slate-200">{report.location}</h2>
          </div>
          <div className="flex items-center text-sm text-slate-400 mt-1">
             <CalendarIcon className="h-4 w-4 mr-2" />
             <span>{report.date}</span>
          </div>
        </div>
        <div className={`px-3 py-1 text-sm font-semibold rounded-full ${style.badge} ring-1 ${style.ring}`}>
          {report.status}
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-slate-700/50 grid grid-cols-2 gap-x-4 gap-y-5">
        <button
          onClick={() => openPdfModal(report.pdfUrl, `Sample Report: ${report.location}`)}
          className="col-span-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 mt-4"
        >
          View Sample Report
        </button>
        <div className="flex items-center">
          <DropletIcon className="h-6 w-6 text-cyan-400" />
          <div className="ml-3">
            <p className="text-sm text-slate-400">Octane</p>
            <p className="text-xl font-semibold text-white">{report.octane}</p>
          </div>
        </div>

        <div className="flex items-center">
          <BeakerIcon className="h-6 w-6 text-cyan-400" />
          <div className="ml-3">
            <p className="text-sm text-slate-400">Ethanol</p>
            <p className="text-xl font-semibold text-white">{report.ethanolContent}%</p>
          </div>
        </div>
        
        <div className="flex items-center col-span-2">
          <TestTubeIcon className="h-6 w-6 text-cyan-400" />
          <div className="ml-3">
            <p className="text-sm text-slate-400">Sediment</p>
            <p className="text-xl font-semibold text-white">{report.sedimentPPM} <span className="text-sm font-normal text-slate-400">PPM</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
export {};
