import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HamburgerIcon from './HamburgerIcon';

gsap.registerPlugin(ScrollTrigger);

const Header: React.FC<{ isGasolineRecoveryPage?: boolean; isEnvironmentalPage?: boolean; isLawPage?: boolean }> = ({ isGasolineRecoveryPage, isEnvironmentalPage, isLawPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    gsap.from('.header', {
      scrollTrigger: {
        start: 'top top',
        end: '+=100',
        toggleClass: { targets: '.header', className: 'scrolled' }
      }
    });
  }, []);

  return (
    <header className="header fixed w-full z-50 bg-white bg-opacity-40 backdrop-blur-xl border-b border-gray-200 border-opacity-40">
      <nav className="w-full px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              {isGasolineRecoveryPage ? (
                <>
                  <img src="/images/gasolineapex.svg" alt="Gasoline Apex Logo" className="h-10 w-auto" />
                  <img src="/images/APEX-Energy-text.svg" alt="Apex Energy Text Logo" className="h-6 w-auto" />
                </>
              ) : isEnvironmentalPage ? (
                <>
                  <img src="/images/environmentalapex.svg" alt="Environmental Apex Logo" className="h-10 w-auto" />
                  <img src="/images/APEX-Energy-text.svg" alt="Apex Energy Text Logo" className="h-6 w-auto" />
                </>
              ) : isLawPage ? (
                <>
                  <img src="/images/lawapex.svg" alt="Law Apex Logo" className="h-10 w-auto" />
                  <img src="/images/APEX-Energy-text.svg" alt="Apex Energy Text Logo" className="h-6 w-auto" />
                </>
              ) : (
                <>
                  <img src="/images/Apex-favicon.svg" alt="Apex Energy Favicon" className="h-10 w-auto" />
                  <img src="/images/APEX-Energy-text.svg" alt="Apex Energy Text Logo" className="h-6 w-auto" />
                </>
              )}
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-black hover:text-blue-600 transition-colors flex items-center">Our Platform <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div className="absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="pt-2 py-1" role="menu">
                      <a href="/process"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">The Process</a>
                      <a href="/technology"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">Technology</a>
                      <a href="/scada"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">SCADA Platform</a>
                      <a href="/gallery"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">Gallery</a>
                      <a href="/support"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">Service & Support</a>
                      <a href="/library"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">Technical Library</a>
                      <a href="/compliance"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">Compliance & Certs</a>
                      <a href="/applications"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">Applications</a>
                      <a href="/knowledge"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">Knowledge Base</a>
                    </div>
                  </div>
              </div>
              
              <div className="relative group">
                <button className="text-black hover:text-blue-600 transition-colors flex items-center">Why Us? <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div className="absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="pt-2 py-1" role="menu">

                      <a href="/financial-advantage"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">Financial Advantage</a>
                      <a href="/global-impact"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">Global Impact</a>
                    </div>
                  </div>
              </div>
              <a href="/gasoline-recovery" className="text-black hover:text-blue-600 transition-colors">Gasoline Recovery</a>
              <a href="/environmental-impact" className="text-black hover:text-blue-600 transition-colors">Environmental</a>
              
              <div className="relative group">
                <button className="text-black hover:text-blue-600 transition-colors flex items-center">Company <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div className="absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="pt-2 py-1" role="menu">
                      <a href="/about"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">About Us</a>
                      <a href="/IR"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">Investor Relations</a>
                      <a href="/contact"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">Contact</a>
                      <a href="/legal"
                         className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                         role="menuitem">Legal</a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="text-black hover:text-blue-600 transition-colors">Client Login</a>
            <a href="/quote"
               className={`text-white px-6 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ${isGasolineRecoveryPage ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700' : isEnvironmentalPage ? 'bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800' : isLawPage ? 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'}`}
               >Request a Quote</a>
          </div>

          <div className="md:hidden flex items-center">
            <HamburgerIcon isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-xl border-b border-gray-200 border-opacity-40 py-4">
          <div className="flex flex-col items-center space-y-4">
            {/* Our Platform Mobile Submenu */}
            <div className="relative group w-full text-center">
              <button className="text-black hover:text-blue-600 transition-colors flex items-center justify-center w-full py-2" onClick={() => { /* Toggle submenu visibility if needed */ }}>Our Platform <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
              <div className="flex flex-col items-center space-y-2 pt-2 pb-1">
                <a href="/process" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>The Process</a>
                <a href="/technology" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>Technology</a>
                <a href="/scada" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>SCADA Platform</a>
                <a href="/gallery" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>Gallery</a>
                <a href="/support" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>Service & Support</a>
                <a href="/library" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>Technical Library</a>
                <a href="/compliance" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>Compliance & Certs</a>
                <a href="/applications" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>Applications</a>
                <a href="/knowledge" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>Knowledge Base</a>
              </div>
            </div>

            {/* Why Us? Mobile Submenu */}
            <div className="relative group w-full text-center">
              <button className="text-black hover:text-blue-600 transition-colors flex items-center justify-center w-full py-2" onClick={() => { /* Toggle submenu visibility if needed */ }}>Why Us? <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
              <div className="flex flex-col items-center space-y-2 pt-2 pb-1">
                <a href="/financial-advantage" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>Financial Advantage</a>
                <a href="/global-impact" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>Global Impact</a>
              </div>
            </div>

            <a href="/gasoline-recovery" className="text-black hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Gasoline Recovery</a>
            <a href="/environmental-impact" className="text-black hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Environmental</a>

            {/* Company Mobile Submenu */}
            <div className="relative group w-full text-center">
              <button className="text-black hover:text-blue-600 transition-colors flex items-center justify-center w-full py-2" onClick={() => { /* Toggle submenu visibility if needed */ }}>Company <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
              <div className="flex flex-col items-center space-y-2 pt-2 pb-1">
                <a href="/about" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>About Us</a>
                <a href="/IR" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>Investor Relations</a>
                <a href="/contact" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>Contact</a>
                <a href="/legal" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full" onClick={toggleMobileMenu}>Legal</a>
              </div>
            </div>

            <a href="/login" className="text-black hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Client Login</a>
            <a href="/quote"
               className={`text-white px-6 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ${isGasolineRecoveryPage ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700' : isEnvironmentalPage ? 'bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800' : isLawPage ? 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'}`}
               onClick={toggleMobileMenu}>Request a Quote</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);