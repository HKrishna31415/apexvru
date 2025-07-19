import React from 'react';
import { useEffect, useRef } from 'react';
import { Project } from './types';
import ProjectListItem from './ProjectListItem';

interface ProjectListProps {
  projects: Project[];
  selectedProjectId: number;
  onSelectProject: (id: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, selectedProjectId, onSelectProject }) => {
  const itemRefs = useRef<Map<number, HTMLLIElement | null>>(new Map());

  useEffect(() => {
    const selectedElement = itemRefs.current.get(selectedProjectId);
    if (selectedElement) {
      selectedElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [selectedProjectId]);

  return (
    <aside className="w-full lg:w-1/5 bg-slate-900/70 backdrop-blur-sm lg:border-l border-slate-700/50 h-auto lg:h-full flex flex-col pt-24">
      <div className="p-4 border-t lg:border-t-0 border-b border-slate-700/50 flex-shrink-0">
        <h2 className="text-xl font-bold text-white">Our Work</h2>
        <p className="text-sm text-slate-400">Select a project to view details.</p>
      </div>
      <ul className="flex flex-col lg:overflow-y-auto">
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            ref={(node) => {
              if (node) {
                itemRefs.current.set(project.id, node);
              } else {
                itemRefs.current.delete(project.id);
              }
            }}
            project={project}
            isSelected={project.id === selectedProjectId}
            onSelect={onSelectProject}
          />
        ))}
      </ul>
    </aside>
  );
};

export default ProjectList;