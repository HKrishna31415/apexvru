import React, { useState, useMemo, useCallback } from 'react';
import ProjectShowcase from '../components/Gallery/ProjectShowcase';
import ProjectList from '../components/Gallery/ProjectList';
import { PROJECTS_DATA } from '../components/Gallery/constants';
import { Project } from '../components/Gallery/types';
import '../styles/gallery.css';

const Gallery: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number>(PROJECTS_DATA[0].id);

  const handleSelectProject = useCallback((id: number) => {
    setSelectedProjectId(id);
  }, []);

  const selectedProject = useMemo(() => {
    const project = PROJECTS_DATA.find(p => p.id === selectedProjectId);
    console.log('Selected Project:', project);
    return project;
  }, [selectedProjectId]);

  console.log('PROJECTS_DATA:', PROJECTS_DATA);
  console.log('Initial selectedProjectId:', selectedProjectId);

  return (
    <div className="min-h-screen w-full bg-slate-900 text-white flex flex-col lg:flex-row font-sans">
      <ProjectShowcase project={selectedProject} />
      <ProjectList 
        projects={PROJECTS_DATA}
        selectedProjectId={selectedProjectId}
        onSelectProject={handleSelectProject}
      />
    </div>
  );
};

export default Gallery;