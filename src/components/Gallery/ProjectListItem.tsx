import React from 'react';
import { Project } from './types';

interface ProjectListItemProps {
  project: Project;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const ProjectListItem = React.forwardRef<HTMLLIElement, ProjectListItemProps>(
  ({ project, isSelected, onSelect }, ref) => {
    const selectedClasses = isSelected
      ? 'bg-slate-700/50 border-l-4 border-cyan-400'
      : 'border-l-4 border-transparent hover:bg-slate-800/50 hover:border-cyan-600/50';

    return (
      <li
        ref={ref}
        onClick={() => onSelect(project.id)}
        className={`flex items-center p-4 cursor-pointer transition-all duration-200 ease-in-out border-b border-slate-800/50 ${selectedClasses}`}
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-16 h-12 object-cover rounded-md mr-4 flex-shrink-0 border border-slate-700"
        />
        <div className="overflow-hidden">
          <h3 className="text-sm font-semibold text-slate-100 truncate">{project.title}</h3>
          <p className="text-xs text-slate-400">{project.phase}</p>
        </div>
      </li>
    );
  }
);

ProjectListItem.displayName = 'ProjectListItem';

export default ProjectListItem;
