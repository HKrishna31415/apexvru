import React from 'react';
import { GiReceiveMoney, GiPayMoney, GiPlantRoots } from 'react-icons/gi';


interface DetailCardProps {
  icon: string;
  title: string;
  description: string;
}

const iconsMap: { [key: string]: React.ElementType } = {
  GiReceiveMoney: GiReceiveMoney as React.ElementType,
  GiPayMoney: GiPayMoney as React.ElementType,
  GiPlantRoots: GiPlantRoots as React.ElementType,
};

const DetailCard: React.FC<DetailCardProps> = ({ icon, title, description }) => {
  const IconComponent = iconsMap[icon];
  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-300 ease-in-out border border-slate-700">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-700 mb-6 border-2 border-indigo-500">
        {IconComponent && React.createElement(IconComponent, { className: "h-8 w-8 text-indigo-400" })}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

const PledgeDetails: React.FC = () => {
  const details = [
    {
      icon: 'GiReceiveMoney',
      title: 'Zero Upfront Cost',
      description: 'We install our sophisticated Vapor Recovery Units at your industrial site with no capital expenditure required from you. The financial risk is on us.',
    },
    {
      icon: 'GiPayMoney',
      title: 'Shared Success',
      description: "Our success is directly tied to yours. We don't get paid unless our technology performs. We simply take a percentage of the profits from the fuel our VRU recovers.",
    },
    {
      icon: 'GiPlantRoots',
      title: 'Mutual Benefit',
      description: 'You reduce waste, achieve environmental compliance, and gain a new revenue stream without any initial investment. We succeed only when you do.',
    },
  ];

  return (
    <section className="mt-16">
      <div className="grid md:grid-cols-3 gap-8">
        {details.map((detail, index) => (
          <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
             <DetailCard {...detail} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PledgeDetails;

export {};