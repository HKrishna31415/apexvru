
import React from 'react';
import { DocumentType, Document, TeamMember, NewsArticle } from '../types';
import DocumentLink from '../ui/DocumentLink';
import { DownloadIcon, ExternalLinkIcon } from '../ui/IR-Icons';
import ThreeScene from '../components/ThreeScene';

const documents: Document[] = [
  { id: 'd1', type: DocumentType.PitchDeck, title: 'Series A Pitch Deck', date: 'Oct 15, 2024', version: 'v3.2' },
  { id: 'd2', type: DocumentType.CapTable, title: 'Capitalization Table', date: 'Sep 30, 2024', version: 'q3-final' },
  { id: 'd3', type: DocumentType.Report409A, title: 'Valuation Report (409A)', date: 'Sep 01, 2024', version: 'fy2024' },
  { id: 'd4', type: DocumentType.Financials, title: 'Q3 Financial Statements', date: 'Oct 05, 2024', version: 'q3-audited' },
];

const team: TeamMember[] = [
    { id: 't1', name: 'Eleanor Vance', title: 'Founder & CEO', bio: 'Pioneering vapor recovery technology with over 15 years of experience in the energy sector.', imageUrl: 'https://picsum.photos/id/237/400/400' },
    { id: 't2', name: 'Marcus Thorne', title: 'Chief Technology Officer', bio: 'Lead architect of our proprietary capture system and a visionary in sustainable engineering.', imageUrl: 'https://picsum.photos/id/238/400/400' },
    { id: 't3', name: 'Isabella Chen', title: 'Chief Financial Officer', bio: 'Expert in scaling high-growth startups and managing capital for strategic expansion.', imageUrl: 'https://picsum.photos/id/239/400/400' },
    { id: 't4', name: 'Javier Rios', title: 'VP of Operations', bio: 'Streamlining deployment and operations to ensure maximum efficiency and client satisfaction.', imageUrl: 'https://picsum.photos/id/240/400/400' },
];

const news: NewsArticle[] = [
    { id: 'n1', title: 'APEX Energy Secures $25M Series A Funding to Expand Vapor Recovery Tech', source: 'TechCrunch', date: 'Oct 22, 2024', url: '#', excerpt: 'The funding round, led by Future Ventures, will accelerate the deployment of APEX’s innovative solutions across North America.' },
    { id: 'n2', title: 'How APEX Energy is Turning a Climate Problem into a Market Solution', source: 'Bloomberg Green', date: 'Oct 10, 2024', url: '#', excerpt: 'An in-depth look at the technology and business model that positions APEX at the forefront of the sustainable energy transition.' },
    { id: 'n3', title: 'CEO Eleanor Vance Named a "Top 30 Under 30" in Energy', source: 'Forbes', date: 'Sep 15, 2024', url: '#', excerpt: 'Our founder and CEO is recognized for her leadership and groundbreaking work in combating industrial emissions.' },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(member => (
              <div key={member.id} className="text-center">
                <img className="mx-auto h-32 w-32 rounded-full object-cover border-2 border-brand-gray-800" src={member.imageUrl} alt={member.name} />
                <h3 className="mt-6 text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-brand-blue-400">{member.title}</p>
                <p className="mt-2 text-sm text-brand-gray-400">{member.bio}</p>
              </div>
            ))}
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
