import React from 'react';
import Hero from './../components/Gasoline/Hero';
import Comparison from './../components/Gasoline/ComparisonButton';
import styled from 'styled-components';
import QualityCheck from '../components/Gasoline/QualityCheck';
import ReportCard from '../components/Gasoline/ReportCard';
import { fetchReports } from '../services/reportService';
import { GasolineReport, QualityStatus } from '../types';
import PdfModal from '../components/ui/PdfModal';

const GasolineRecovery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = React.useState('');
  const [currentPdfTitle, setCurrentPdfTitle] = React.useState('');

  const openPdfModal = (pdfUrl: string, title: string) => {
    setCurrentPdfUrl(pdfUrl);
    setCurrentPdfTitle(title);
    setIsModalOpen(true);
  };

  const closePdfModal = () => {
    setIsModalOpen(false);
    setCurrentPdfUrl('');
    setCurrentPdfTitle('');
  };
  const [excellentReports, setExcellentReports] = React.useState<GasolineReport[]>([]);

  React.useEffect(() => {
    const getReports = async () => {
      const allReports = await fetchReports();
      const filteredReports = allReports.filter(report => report.status === QualityStatus.Excellent);
      setExcellentReports(filteredReports);
    };
    getReports();
  }, []);
  return (
    <div className="bg-[#1A202C] py-10">
      <main className="container mx-auto px-4">
        <Hero />
        <Comparison />
        <QualityCheck />
        {/* Real Sample Section Placeholder */}
        <div className="mt-10 mb-5 text-center text-white text-4xl font-extrabold tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">Real Sample Data</span>
        </div>

        <div className="mt-5">
        {excellentReports
          .filter(report => report.location === "Oakridge, CA")
          .map((report, index) => (
            <ReportCard key={report.id} report={report} index={index} openPdfModal={openPdfModal} />
          ))}
        </div>
      </main>
      <PdfModal
        isOpen={isModalOpen}
        onClose={closePdfModal}
        pdfUrl={currentPdfUrl}
        title={currentPdfTitle}
      />
    </div>
  );
};

export default GasolineRecovery;
