import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ThreeScene from './components/ThreeScene';
import About from './pages/About';
import InvestorRelations from './pages/IR';
import Contact from './pages/Contact';
import TheProcess from './pages/TheProcess';
import Technology from './pages/Technology';
import SCADAPlatform from './pages/SCADAPlatform';
import Applications from './pages/Applications';
import Support from './pages/Support';
import Library from './pages/Library';
import Compliance from './pages/Compliance';
import Gallery from './pages/Gallery';
import ROICalculator from './pages/ROICalculator';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import EnvironmentalImpact from './pages/EnvironmentalImpact';
import FinancialAdvantage from './pages/FinancialAdvantage';
import GlobalImpact from './pages/GlobalImpact';
import GasolineRecovery from './pages/GasolineRecovery';
import Legal from './pages/Legal';
import Pledge from './pages/Pledge';
import GetAQuote from './pages/GetAQuote';
import KnowledgeBase from './pages/KnowledgeBase';
import ClimateSolution from './pages/news/ClimateSolution';
import HomeHero from './components/Landing/HomeHero';
import VRUFlow from './components/Landing/VRUFlow';
import Ticker from './components/Landing/Ticker';



const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isGasolineRecoveryPage = location.pathname === '/gasoline-recovery';
  const isEnvironmentalPage = location.pathname === '/environmental-impact';
  const isLawPage = location.pathname === '/IR' || location.pathname === '/legal';
  const showThreeScene = location.pathname === '/IR';

  return (
    <div className="flex flex-col min-h-screen text-black">
      <Header isGasolineRecoveryPage={isGasolineRecoveryPage} isEnvironmentalPage={isEnvironmentalPage} isLawPage={isLawPage} />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer isGasolineRecoveryPage={isGasolineRecoveryPage} isEnvironmentalPage={isEnvironmentalPage} isLawPage={isLawPage} />
    </div>
  );
};

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomeHero />
            <Ticker />
          </Layout>
        } />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/IR" element={<Layout><InvestorRelations /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/process" element={<Layout><TheProcess /></Layout>} />
        <Route path="/technology" element={<Layout><Technology /></Layout>} />
        <Route path="/scada" element={<Layout><SCADAPlatform /></Layout>} />
        <Route path="/applications" element={<Layout><Applications /></Layout>} />
        <Route path="/support" element={<Layout><Support /></Layout>} />
        <Route path="/library" element={<Layout><Library /></Layout>} />
        <Route path="/compliance" element={<Layout><Compliance /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/roi-calculator" element={<Layout><ROICalculator /></Layout>} />
        <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />
        <Route path="/environmental-impact" element={<Layout><EnvironmentalImpact /></Layout>} />
        <Route path="/financial-advantage" element={<Layout><FinancialAdvantage /></Layout>} />
        <Route path="/global-impact" element={<Layout><GlobalImpact /></Layout>} />
        <Route path="/gasoline-recovery" element={<Layout><GasolineRecovery /></Layout>} />
        <Route path="/legal" element={<Layout><Legal /></Layout>} />
        <Route path="/Pledge" element={<Layout><Pledge /></Layout>} />
        <Route path="/quote" element={<Layout><GetAQuote /></Layout>} />
        <Route path="/knowledge" element={<Layout><KnowledgeBase /></Layout>} />
        <Route path="/news/climate-solution" element={<Layout><ClimateSolution /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;