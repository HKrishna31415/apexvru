import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { EconomyIcon } from './EconomyIcon';
import { EfficiencyIcon } from './EfficiencyIcon';
import { EnvironmentIcon } from './EnvironmentIcon';
import { UptimeIcon } from './UptimeIcon';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <motion.div 
    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 h-full"
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const HomeFeatures: React.FC = () => {
  const features = [
    {
      icon: <EfficiencyIcon />,
      title: 'Unmatched Efficiency',
      description: 'Our VRUs capture up to 99.9% of VOCs, turning emissions into revenue and protecting our planet.',
    },
    {
      icon: <EconomyIcon />,
      title: 'Instant Economic Upside',
      description: 'With zero upfront cost and a shared-revenue model, your profitability is guaranteed from day one.',
    },
    {
      icon: <EnvironmentIcon />,
      title: 'Environmental Stewardship',
      description: 'Exceed regulatory standards and showcase your commitment to a sustainable future.',
    },
    {
      icon: <UptimeIcon />,
      title: 'Engineered for Uptime',
      description: 'Built with industrial-grade components for maximum reliability and minimal maintenance.',
    },
  ];

  return (
    <section className="py-24 bg-gray-900 text-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Core Features & Benefits
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-16">
          Discover how our cutting-edge vapor recovery units provide unparalleled performance and value.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
        <div className="mt-20">
          <Link to="/technology">
              <motion.button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Technology
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                className="ml-4 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Sales
              </motion.button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;