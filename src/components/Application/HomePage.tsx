import React from 'react';
import { ApplicationCard } from './ApplicationCard';
import * as Constants from './constants';
import { Application } from './types';

interface HomePageProps {
  onCardClick: (app: Application, element: HTMLElement) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onCardClick }) => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white p-4 mt-24 sm:p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
          VRU Applications
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          Explore the various industrial applications of Vapor Recovery Units. Hover over a card to see key benefits and click to learn more.
        </p>
      </header>
      <main>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {Constants.APPLICATIONS_DATA.map((app: Application, index: number) => {
            const card = (
              <ApplicationCard
                application={app}
                animationDirection={index % 2 === 0 ? 'left' : 'right'}
              />
            );

            if (app.status === 'research') {
              return <div key={app.id}>{card}</div>;
            }

            return (
               <button
                key={app.id}
                onClick={(e) => onCardClick(app, e.currentTarget)}
                className="block text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl"
                aria-label={`View details for ${app.title}`}
              >
                {card}
              </button>
            );
          })}
        </div>
      </main>
      <footer className="text-center mt-16 text-gray-500 text-sm">
        <p>Vapor Recovery Unit Showcase | Interactive Experience</p>
      </footer>
    </div>
  );
};