
import { GasolineReport, QualityStatus } from '../types';

const mockReports: GasolineReport[] = [
  {
    id: 'REP-001',
    location: 'Oakridge, CA',
    date: '2024-07-28',
    octane: 91,
    ethanolContent: 9.8,
    sedimentPPM: 3,
    status: QualityStatus.Excellent,
    pdfUrl: '/pdfs/sample-report-oakridge.pdf',
  },
  {
    id: 'REP-002',
    location: 'Maple Creek, TX',
    date: '2024-07-28',
    octane: 87,
    ethanolContent: 10.1,
    sedimentPPM: 5,
    status: QualityStatus.Good,
    pdfUrl: '/pdfs/sample-report-maplecreek.pdf',
  },
  {
    id: 'REP-003',
    location: 'Pine Ridge, FL',
    date: '2024-07-27',
    octane: 89,
    ethanolContent: 10.0,
    sedimentPPM: 7,
    status: QualityStatus.Pass,
    pdfUrl: '/pdfs/sample-report-pineridge.pdf',
  },
  {
    id: 'REP-004',
    location: 'Cedar Falls, NV',
    date: '2024-07-27',
    octane: 93,
    ethanolContent: 8.5,
    sedimentPPM: 2,
    status: QualityStatus.Excellent,
    pdfUrl: '/pdfs/sample-report-cedarfalls.pdf',
  },
  {
    id: 'REP-005',
    location: 'Willow Creek, WA',
    date: '2024-07-26',
    octane: 86,
    ethanolContent: 14.8,
    sedimentPPM: 12,
    status: QualityStatus.Warning,
    pdfUrl: '/pdfs/sample-report-willowcreek.pdf',
  },
  {
    id: 'REP-006',
    location: 'Birchwood, CO',
    date: '2024-07-26',
    octane: 87,
    ethanolContent: 9.9,
    sedimentPPM: 6,
    status: QualityStatus.Good,
    pdfUrl: '/pdfs/sample-report-birchwood.pdf',
  }
];

export const fetchReports = (): Promise<GasolineReport[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockReports);
    }, 1500); // Simulate network delay
  });
};
