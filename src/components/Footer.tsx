import React from 'react';

const Footer: React.FC<{ isGasolineRecoveryPage?: boolean; isEnvironmentalPage?: boolean; isLawPage?: boolean }> = ({ isGasolineRecoveryPage, isEnvironmentalPage, isLawPage }) => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-x-12 gap-y-12">
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            {isGasolineRecoveryPage ? (
              <img src="/images/gasoline-apex-vertical.svg" alt="APEX Energy Logo" className="h-40 mb-6" />
            ) : isEnvironmentalPage ? (
              <img src="/images/environmental-apex-vertical.svg" alt="APEX Energy Logo" className="h-40 mb-6" />
            ) : isLawPage ? (
              <img src="/images/law-apex-vertical.svg" alt="APEX Energy Logo" className="h-40 mb-6" />
            ) : (
              <img src="/images/vertical-apex.svg" alt="APEX Energy Logo" className="h-40 mb-6" />
            )}
            <p className="text-gray-400 text-center md:text-left">Innovation in Efficiency.</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold mb-4 text-lg">Our Platform</h3>
            <ul className="space-y-2">
              <li><a href="/process" className="hover:text-blue-400 transition-colors">The Process</a></li>
              <li><a href="/technology" className="hover:text-blue-400 transition-colors">Technology</a></li>
              <li><a href="/scada" className="hover:text-blue-400 transition-colors">SCADA Platform</a></li>
              <li><a href="/applications" className="hover:text-blue-400 transition-colors">Applications</a></li>
              <li><a href="/support" className="hover:text-blue-400 transition-colors">Service & Support</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/library" className="hover:text-blue-400 transition-colors">Technical Library</a></li>
              <li><a href="/compliance" className="hover:text-blue-400 transition-colors">Compliance & Certs</a></li>
              <li><a href="/gallery" className="hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="/knowledge" className="hover:text-blue-400 transition-colors">Knowledge Base</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold mb-4 text-lg">Why Us?</h3>
            <ul className="space-y-2">
              <li><a href="/environmental-impact" className="hover:text-blue-400 transition-colors">Environmental Impact</a></li>
              <li><a href="/financial-advantage" className="hover:text-blue-400 transition-colors">Financial Advantage</a></li>
              <li><a href="/global-impact" className="hover:text-blue-400 transition-colors">Global Impact</a></li>
              <li><a href="/gasoline-recovery" className="hover:text-blue-400 transition-colors">Gasoline Recovery</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
             <h3 className="font-bold mb-4 text-lg">Company</h3>
             <ul className="space-y-2">
               <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
               <li><a href="/IR" className="hover:text-blue-400 transition-colors">Investor Relations</a></li>
               <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
               <li><a href="/legal" className="hover:text-blue-400 transition-colors">Legal Information</a></li>
             </ul>
           </div>
         </div>
        <div className="mt-8 pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 APEX Energy. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/legal" className="hover:text-white transition-colors">Legal Information</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>Made with ❤️ from the US and the GCC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;