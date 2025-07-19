
import React, { useState } from 'react';
import type { Category } from './types';

interface SidebarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        {isOpen ? '✕' : '☰'}
      </button>
      <aside className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 w-64 bg-gray-900/30 border-r border-cyan-400/20 p-4 flex-shrink-0 transition-transform duration-300 ease-in-out z-40`}>
      <h2 className="text-lg font-semibold text-gray-400 mb-6 font-mono tracking-wider">CATEGORIES</h2>
      <nav>
        <ul>
          {categories.map((category) => {
            const isActive = category.id === selectedCategory;
            const Icon = category.icon;

            return (
              <li key={category.id} className="mb-2">
                <button
                  onClick={() => {
                    onSelectCategory(category.id);
                    setIsOpen(false); // Close sidebar on category selection for mobile
                  }}
                  className={`w-full flex items-center p-3 rounded-lg text-left transition-all duration-300 group ${
                    isActive
                      ? 'bg-cyan-400/20 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                      : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <Icon className={`h-6 w-6 mr-4 transition-all duration-300 ${
                      isActive
                        ? 'text-cyan-300 drop-shadow-[0_0_3px_theme(colors.cyan.300)]'
                        : 'text-gray-500 group-hover:text-cyan-400'
                    }`} />
                  <span className={`flex-1 font-medium ${isActive ? '' : 'group-hover:drop-shadow-[0_0_2px_theme(colors.cyan.400)]'}`}>{category.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;
