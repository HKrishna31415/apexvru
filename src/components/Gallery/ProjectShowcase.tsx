import React from 'react';
import { Project, ProjectPhase, Hotspot } from './types';
import { WrenchScrewdriverIcon, CheckBadgeIcon, BeakerIcon } from './Icons';
import HotspotComponent from './Hotspot';

const PhaseIcon: React.FC<{ phase: ProjectPhase }> = ({ phase }) => {
    switch (phase) {
        case ProjectPhase.MANUFACTURING:
        case ProjectPhase.ASSEMBLY:
            return <WrenchScrewdriverIcon className="w-5 h-5 mr-2 text-sky-300" />;
        case ProjectPhase.COMMISSIONING:
        case ProjectPhase.OPERATION:
            return <CheckBadgeIcon className="w-5 h-5 mr-2 text-emerald-300" />;
        case ProjectPhase.DESIGN:
        default:
            return <BeakerIcon className="w-5 h-5 mr-2 text-indigo-300" />;
    }
};

const ProjectShowcase: React.FC<{ project: Project | undefined }> = ({ project }) => {
  if (!project) {
    return (
      <main className="w-full lg:w-4/5 h-auto lg:h-full flex items-center justify-center bg-slate-800">
        <p className="text-slate-400">Select a project to see the details.</p>
      </main>
    );
  }

  const MediaContent = () => (
    <>
      {project.videoUrl ? (
        <video
          key={project.id}
          src={project.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover animate-fade-in"
        />
      ) : (
        <img
          key={project.id}
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover animate-fade-in"
        />
      )}
    </>
  );

  return (
    <main className="w-full lg:w-4/5 h-auto lg:h-full flex flex-col bg-black flex-shrink-0">
      <div className="relative bg-black w-full h-[40vh] sm:h-[50vh] lg:h-2/5">
        <MediaContent />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
         {project.hotspots && project.hotspots.map((hotspot: Hotspot, index: number) => (
            <HotspotComponent key={`${project.id}-hotspot-${index}`} hotspot={hotspot} />
        ))}
      </div>
      <div className="h-auto lg:h-3/5 p-6 md:p-8 bg-black text-white flex flex-col justify-center border-t border-slate-800/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4 sm:gap-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-2 sm:space-x-4 sm:gap-0">
                <div className="flex items-center bg-slate-800/70 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-slate-300 ring-1 ring-slate-700/50">
                    <PhaseIcon phase={project.phase} />
                    <span>{project.phase}</span>
                </div>
                <div className="bg-cyan-900/50 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-cyan-300 ring-1 ring-cyan-400/20">
                    {project.product}
                </div>
            </div>
        </div>
        <p className="text-slate-300 text-sm md:text-base max-w-4xl leading-relaxed">
          {project.description}
        </p>
      </div>
    </main>
  );
};

export default ProjectShowcase;