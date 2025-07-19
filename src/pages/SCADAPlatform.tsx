
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import { VruIcon, CloudIcon, TabletIcon, DataPacketIcon, ConnectingLinesIcon, AnalyticsIcon, SecurityIcon, AlertsIcon, ControlIcon, GalleryPlaceholderIcon, ScrollDownIcon } from '../components/SCADA/Icons';
import { DashboardUI } from '../components/SCADA/DashboardUI';
import { ParticleBackground } from '../components/SCADA/ParticleBackground';
import VruContainer from '../components/Gasoline/VruContainer';

const StoryBlock = React.forwardRef<HTMLDivElement, { children: React.ReactNode; 'data-scene-index': number; align: 'left' | 'right' }>(({ children, 'data-scene-index': sceneIndex, align }, ref) => (
  <div ref={ref} className="h-screen flex items-center" data-scene-index={sceneIndex}>
    <div className={`w-full md:w-1/2 max-w-xl p-8 ${align === 'right' ? 'md:ml-auto' : 'md:mr-auto'}`}>
      {children}
    </div>
  </div>
));

const DataTrail: React.FC<{ isActive: boolean; pathKey: string; startX: string; endX: string; startY: string; endY: string; numDots?: number; duration?: number }> = ({ isActive, pathKey, startX, endX, startY, endY, numDots = 40, duration = 1.5 }) => {
  if (!isActive) return null;

  const dots = Array.from({ length: numDots }).map((_, i) => {
    const progress = i / (numDots - 1);
    const animationDelay = `${i * (duration / numDots) * 0.9}s`;

    const curveAmount = Math.sin(progress * Math.PI); 
    const controlYOffset = -15; 

    const yPosition = `calc((${startY}) + ((${endY}) - (${startY})) * ${progress} + ${curveAmount * controlYOffset}vh)`;
    
    return (
      <div
        key={`${pathKey}-${i}`}
        className="absolute w-1.5 h-1.5 bg-cyan-400/80 rounded-full trail-dot"
        style={{
          top: yPosition,
          left: `calc(${startX} + (${endX} - ${startX}) * ${progress})`,
          transform: 'translate(-50%, -50%)',
          animationDelay,
          animationDuration: `${duration * 1.2}s`, 
        }}
      />
    );
  });

  return <>{dots}</>;
};


const SCADA: React.FC = () => {
  const [scene, setScene] = useState(-1); // Start at -1 for hero
  const [subScene, setSubScene] = useState(0);

  const sceneRefs = [
    useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  
  const journeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sceneIndex = parseInt(entry.target.getAttribute('data-scene-index') || '-1');
            if (sceneIndex === -1) setScene(-1);
            else if (sceneIndex === 0) setScene(0);
            else if (sceneIndex === 1) setScene(1);
            else if (sceneIndex === 2) setScene(2);
            else if (sceneIndex >= 3 && sceneIndex <= 5) {
              setScene(3);
              setSubScene(sceneIndex - 3);
            } else if (sceneIndex === 6) setScene(4);
          }
        });
      },
      { threshold: 0.6 }
    );
    
    // Observe the journey container to set scene to 0 when it starts
    const journeyObserver = new IntersectionObserver(
        (entries) => {
            if(entries[0].isIntersecting) {
                if (scene < 0) setScene(0);
            } else {
                setScene(-1);
            }
        },
        { threshold: 0.1 }
    );


    sceneRefs.forEach(ref => { if (ref.current) observer.observe(ref.current); });
    if (journeyRef.current) journeyObserver.observe(journeyRef.current);

    return () => { 
        sceneRefs.forEach(ref => { if (ref.current) observer.unobserve(ref.current); }); 
        if (journeyRef.current) journeyObserver.unobserve(journeyRef.current);
    };
  }, [scene]);

  const verticalOffset = '35vh';
  const vruLeft = '25%';
  const cloudLeft = '75%';
  const tabletLeft = '25%';

  const getVisualsTransform = () => {
    let yTransform = '0';
    let scale = '1';
    
    if (scene <= 0) yTransform = `calc(0px + ${verticalOffset})`;
    else if (scene === 1) yTransform = '0';
    else if (scene >= 2 && scene < 4) {
      yTransform = `calc(0px - ${verticalOffset})`;
      if (scene === 3) {
         scale = '1.3'; // Prominently scale up the tablet
      }
    }
    else if (scene === 4) {
      yTransform = '0';
      scale = '0.75';
    }

    return `translateY(${yTransform}) scale(${scale})`;
  };
  
  const getIconClass = (iconScene: number | number[], subIcon: boolean = false) => {
    const scenes = Array.isArray(iconScene) ? iconScene : [iconScene];
    const isActive = scenes.includes(scene) || (subIcon && scene === 3);
    const isFinalScene = scene === 4;

    let opacity = 'opacity-0';
    let transform = 'scale-90';

    if (isActive || isFinalScene) {
      opacity = 'opacity-100';
      transform = 'scale-100';
    } else if (scene > -1) {
        opacity = 'opacity-30';
    }
    
    return `transition-all duration-1000 ease-in-out ${opacity} ${transform}`;
  };


  const dataPacketStyles = (): React.CSSProperties => {
    const vruPos = { top: `calc(50% - ${verticalOffset})`, left: vruLeft };
    const cloudPos = { top: '50%', left: cloudLeft };
    const tabletPos = { top: `calc(50% + ${verticalOffset})`, left: tabletLeft };

    let currentPos = vruPos;
    let opacity = 0;

    if(scene === 0) {
      currentPos = vruPos;
      opacity = 1;
    } else if (scene === 1) {
      currentPos = cloudPos;
      opacity = 1;
    } else if (scene === 2 || scene === 3) {
      currentPos = tabletPos;
      opacity = 1;
    } else {
      currentPos = tabletPos;
      opacity = 0;
    }

    return { 
      top: currentPos.top,
      left: currentPos.left,
      opacity: opacity, 
      transform: 'translate(-50%, -50%)',
      transition: 'top 1.5s ease-in-out, left 1.5s ease-in-out, opacity 0.5s ease-in-out' 
    };
  };

  return (
    <div className="bg-slate-900 text-slate-200 font-sans selection:bg-cyan-300 selection:text-slate-900">
      <style>{`
        @keyframes trail-dot-fade { 0% { opacity: 1; transform: scale(1.2); } 100% { opacity: 0; transform: scale(0.3); } }
        .trail-dot { animation-name: trail-dot-fade; animation-timing-function: ease-out; animation-fill-mode: forwards; }
      `}</style>
      
      <Header />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center relative px-4 overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-300 mb-4" style={{textShadow: '0 0 15px rgba(100, 220, 255, 0.5), 0 0 5px rgba(100, 220, 255, 0.7)'}}>Data is the Difference.</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl">Our PinnacleOS platform transforms physical performance into actionable digital intelligence.</p>
          <div className="absolute top-full mt-20">
            <a href="#journey" aria-label="Scroll to discover">
              <ScrollDownIcon />
            </a>
          </div>
        </div>
      </section>
      
      {/* Container for the entire experience */}
      <div id="journey" ref={journeyRef} className="relative">
        {/* Sticky Visuals Pane (Full Width) */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="relative w-full h-full transition-transform duration-1000 ease-in-out" style={{ transform: getVisualsTransform() }}>
            
            {/* Icons are positioned absolutely with fixed horizontal positions */}
            <div className={`absolute ${getIconClass(0)}`} style={{ top: `calc(50% - ${verticalOffset})`, left: vruLeft, transform: 'translate(-50%, -50%)' }}>
              <VruIcon className={`w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48`} />
            </div>

            <div className={`absolute ${getIconClass(1)}`} style={{ top: '50%', left: cloudLeft, transform: 'translate(-50%, -50%)' }}>
              <CloudIcon className={`w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56`} />
            </div>

            <div className={`absolute ${getIconClass([2,3], true)}`} style={{ top: `calc(50% + ${verticalOffset})`, left: tabletLeft, transform: 'translate(-50%, -50%)' }}>
              <TabletIcon className={`w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]`}>
                <DashboardUI highlightTrend={scene === 3 && subScene === 0} pulseAlarm={scene === 3 && subScene === 1} highlightControl={scene === 3 && subScene === 2} />
              </TabletIcon>
            </div>
            
            {/* Data Packet */}
            <div style={dataPacketStyles()}>
              <DataPacketIcon className="w-10 h-10" />
            </div>

            {/* Data Trails now handle X and Y */}
            <DataTrail
              isActive={scene === 1}
              pathKey="vru-to-cloud"
              startX={vruLeft} endX={cloudLeft}
              startY={`calc(50% - ${verticalOffset})`} endY={'50%'}
            />
            <DataTrail
              isActive={scene === 2 || scene === 3}
              pathKey="cloud-to-tablet"
              startX={cloudLeft} endX={tabletLeft}
              startY={'50%'} endY={`calc(50% + ${verticalOffset})`}
            />

            {/* Connecting Lines */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${scene === 4 ? 'opacity-100' : 'opacity-0'}`}>
              <ConnectingLinesIcon className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Scrolling Text Content */}
        <div className="relative" style={{height: '700vh'}}>
          <StoryBlock ref={sceneRefs[0]} data-scene-index={0} align="right">
            <h1 className="text-5xl font-bold text-cyan-300 mb-4">Data is the Difference.</h1>
            <p className="text-lg text-slate-300">Our PinnacleOS platform transforms physical performance into actionable digital intelligence.</p>
          </StoryBlock>

          <StoryBlock ref={sceneRefs[1]} data-scene-index={1} align="left">
            <h2 className="text-3xl font-bold text-cyan-300 mb-2">Step 1: Secure Cloud Processing</h2>
            <p className="text-lg text-slate-300">Real-time operational data is encrypted and transmitted securely to our cloud infrastructure for analysis.</p>
          </StoryBlock>

          <StoryBlock ref={sceneRefs[2]} data-scene-index={2} align="right">
            <h2 className="text-3xl font-bold text-cyan-300 mb-2">Step 2: Instant Visualization</h2>
            <p className="text-lg text-slate-300">See your entire operation at a glance. We process millions of data points into a simple, intuitive dashboard accessible on any device.</p>
          </StoryBlock>

          <StoryBlock ref={sceneRefs[3]} data-scene-index={3} align="right">
            <h3 className="text-3xl font-bold text-cyan-300 mb-2">Historical Trend Analysis</h3>
            <p className="text-lg text-slate-300">Track performance over time to identify patterns and optimize operations.</p>
          </StoryBlock>

          <StoryBlock ref={sceneRefs[4]} data-scene-index={4} align="right">
            <h3 className="text-3xl font-bold text-cyan-300 mb-2">Predictive Maintenance Alerts</h3>
            <p className="text-lg text-slate-300">Get notified of potential issues before they cause downtime, with AI-powered alerts.</p>
          </StoryBlock>
          
          <StoryBlock ref={sceneRefs[5]} data-scene-index={5} align="right">
            <h3 className="text-3xl font-bold text-cyan-300 mb-2">Real-Time Control</h3>
            <p className="text-lg text-slate-300">Adjust setpoints and manage your assets directly from the dashboard.</p>
          </StoryBlock>

          <StoryBlock ref={sceneRefs[6]} data-scene-index={6} align="right">
            <h1 className="text-5xl font-bold text-cyan-300 mb-4">A Complete Loop of Control.</h1>
            <p className="text-lg text-slate-300">From hardware to cloud to your hands, PinnacleOS gives you unparalleled insight and control over your assets.</p>
          </StoryBlock>
        </div>
      </div>
      
      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-2 text-cyan-300">Powerful Features. Unprecedented Control.</h2>
          <p className="text-lg text-slate-400 mb-16 max-w-3xl mx-auto">PinnacleOS is more than a monitoring tool—it's a comprehensive asset management platform designed for performance and reliability.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
              <SecurityIcon className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">End-to-End Security</h3>
              <p className="text-slate-400">Data is encrypted in transit and at rest, ensuring your operational information remains confidential and secure.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
              <AnalyticsIcon className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
              <p className="text-slate-400">Leverage historical and real-time data to uncover trends, optimize efficiency, and improve performance.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
              <AlertsIcon className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Intelligent Alerts</h3>
              <p className="text-slate-400">Customizable, AI-powered alerts notify you of anomalies and potential failures before they happen.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
              <ControlIcon className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Remote Control</h3>
              <p className="text-slate-400">Manage your assets from anywhere. Adjust settings, initiate commands, and respond to events in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-slate-800/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-2 text-cyan-300">See It In Action</h2>
          <p className="text-lg text-slate-400 mb-16 max-w-3xl mx-auto">Explore the PinnacleOS interface and see how our platform provides clarity and control over complex operations.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="aspect-video bg-slate-800/50 rounded-lg border border-slate-700 p-2 hover:border-cyan-400 transition-colors duration-300"><GalleryPlaceholderIcon title="Main Dashboard View"/></div>
            <div className="aspect-video bg-slate-800/50 rounded-lg border border-slate-700 p-2 hover:border-cyan-400 transition-colors duration-300"><GalleryPlaceholderIcon title="Asset Detail & Trends"/></div>
            <div className="aspect-video bg-slate-800/50 rounded-lg border border-slate-700 p-2 hover:border-cyan-400 transition-colors duration-300"><GalleryPlaceholderIcon title="Mobile Alert Interface"/></div>
            <div className="aspect-video bg-slate-800/50 rounded-lg border border-slate-700 p-2 hover:border-cyan-400 transition-colors duration-300"><GalleryPlaceholderIcon title="Geospatial Asset Map"/></div>
            <div className="aspect-video bg-slate-800/50 rounded-lg border border-slate-700 p-2 hover:border-cyan-400 transition-colors duration-300"><GalleryPlaceholderIcon title="Reporting & Analytics"/></div>
            <div className="aspect-video bg-slate-800/50 rounded-lg border border-slate-700 p-2 hover:border-cyan-400 transition-colors duration-300"><GalleryPlaceholderIcon title="VRU Hardware"/></div>
          </div>
        </div>
      </section>
      

    </div>
  );
};

export default SCADA;
