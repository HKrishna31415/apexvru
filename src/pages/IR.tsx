
import React from 'react';
import { DocumentType, Document, NewsArticle } from '../types';
import { leadershipTeam, advisors } from '../data/leadershipData';
import DocumentLink from '../ui/DocumentLink';
import { DownloadIcon, ExternalLinkIcon } from '../ui/IR-Icons';
import ThreeScene from '../components/ThreeScene';

const documents: Document[] = [
  { id: 'd1', type: DocumentType.PitchDeck, title: 'Series A Pitch Deck', date: 'Oct 15, 2024', version: 'v3.2' },
  { id: 'd2', type: DocumentType.CapTable, title: 'Capitalization Table', date: 'Sep 30, 2024', version: 'q3-final' },
  { id: 'd3', type: DocumentType.Report409A, title: 'Valuation Report (409A)', date: 'Sep 01, 2024', version: 'fy2024' },
  { id: 'd4', type: DocumentType.Financials, title: 'Q3 Financial Statements', date: 'Oct 05, 2024', version: 'q3-audited' },
];



const news: NewsArticle[] = [
    { id: 'n2', title: 'How APEX Energy is Turning a Climate Problem into a Market Solution', source: 'Internal', date: 'August 1st, 2025', url: '/news/climate-solution', excerpt: 'An in-depth look at the technology and business model that positions APEX at the forefront of the sustainable energy transition.' },
];

const StatCard: React.FC<{ title: string; value: string; }> = ({ title, value }) => (
    <div className="bg-brand-gray-950 p-6 rounded-xl border border-brand-gray-800">
        <p className="text-sm font-medium text-brand-gray-400">{title}</p>
        <p className="text-3xl font-bold text-white mt-1">{value}</p>
    </div>
);


const InvestorRelations: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-brand-gray-950 py-32 sm:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <ThreeScene />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter mt-4">
            Investing in a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-brand-blue-500">Cleaner Future</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-brand-gray-300">
            APEX Energy is revolutionizing the energy industry with cutting-edge vapor recovery solutions, turning emissions into economic opportunities.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-brand-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <StatCard title="YOY Growth" value="320%" />
                <StatCard title="Market Share" value="12%" />
                <StatCard title="Emissions Reduced" value="8.2M Tons" />
            </div>
        </div>
      </section>

      {/* Investor Document Portal */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">Investor Document Portal</h2>
            <p className="mt-3 text-lg text-brand-gray-300">
              Access confidential materials for due diligence. All documents are subject to the terms of our Non-Disclosure Agreement.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map(doc => <DocumentLink key={doc.id} document={doc} />)}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 sm:py-24 bg-brand-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">Our Leadership</h2>
            <p className="mt-3 text-lg text-brand-gray-300">
              Driven by a team of industry veterans and innovators committed to sustainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {leadershipTeam.map((person) => (
              <div 
                key={person.id} 
                className={`bg-brand-gray-800/50 p-6 rounded-lg border border-brand-gray-700/50 transition-all duration-300 hover:scale-105 cursor-pointer ${person.hoverClasses}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`font-display text-2xl font-bold ${person.textClass}`}>{person.name}</h3>
                    <p className="text-brand-blue-300 text-sm font-medium">{person.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-brand-gray-400">{person.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advisors */}
      <section className="py-16 sm:py-24 bg-brand-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">Strategic Advisors</h2>
            <div className="flex justify-center space-x-8">
              {advisors.map((advisor) => (
                <div key={advisor.id} className="text-center group">
                  <div className="w-24 h-24 bg-brand-gray-700/50 border-2 border-brand-gray-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:border-brand-blue-500 group-hover:scale-110">
                    <span className="font-bold text-3xl text-brand-gray-500 group-hover:text-brand-blue-400 transition-colors duration-300">{advisor.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <p className="mt-3 text-sm font-medium text-brand-gray-400">{advisor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsroom Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">Newsroom</h2>
            <p className="mt-3 text-lg text-brand-gray-300">
              APEX Energy News
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-8">
            {news.map(article => (
              <a 
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer" 
                className="block p-6 bg-brand-gray-950 rounded-lg border border-brand-gray-800 hover:border-brand-blue-700/50 hover:bg-brand-gray-900 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold text-brand-blue-400">{article.source} &bull; {article.date}</p>
                    <h3 className="mt-2 text-lg font-bold text-white group-hover:text-brand-blue-300 transition-colors">{article.title}</h3>
                    <p className="mt-2 text-brand-gray-300">{article.excerpt}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 pt-1">
                      <ExternalLinkIcon className="h-6 w-6 text-brand-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-brand-gray-950">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">Investor Inquiries</h2>
          <p className="mt-4 text-lg text-brand-gray-300">
            For questions regarding investment opportunities, please reach out to our investor relations team.
          </p>
          <div className="mt-8">
            <a 
              href="mailto:ir@apexenergy.inc"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 hover:from-brand-blue-600 hover:to-brand-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Investor Relations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorRelations;
