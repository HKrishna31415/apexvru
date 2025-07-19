
import React from 'react';
import { QuoteForm } from './QuoteForm';
import { CheckIcon, ArrowRightIcon } from './icons';

const InfoSection: React.FC = () => {
    const features = [
        "Gasoline Recovery",
        "Carbon Capture",
        "Reduce Emissions",
        "Highly Profitable",
        "Increased Safety",
    ];

    return (
        <section id="quote-form" className="w-full bg-gradient-to-br from-blue-700 via-purple-800 to-indigo-900 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Side: Information */}
                <div className="text-white">
                    <p className="font-semibold text-blue-300 mb-2">IMPROVING THE PERFORMANCE OF GAS STATIONS</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Increase Revenue With<br/>The Power Of Vapor Recovery
                    </h2>
                    <p className="text-gray-200 mb-8 max-w-xl">
                        The average gas station in car reliant countries sells over 400,000L of gasoline per month. At this volume the machine is still far more profitable than market returns regardless of conditions for evaporation and recovery.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                        {features.map((feature, index) => (
                           <li key={index} className="flex items-center">
                               <CheckIcon className="h-6 w-6 text-cyan-400 mr-3 flex-shrink-0" />
                               <span className="font-medium">{feature}</span>
                           </li>
                        ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a href="/process" className="bg-white text-blue-700 rounded-lg py-3 px-6 font-bold flex items-center justify-center w-full sm:w-auto hover:bg-gray-200 transition-colors transform hover:scale-105">
                            How It Works
                            <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a href="/applications" className="border-2 border-white rounded-lg py-3 px-6 font-bold flex items-center justify-center w-full sm:w-auto hover:bg-white/10 transition-colors transform hover:scale-105">
                            Use Cases
                        </a>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full">
                    <QuoteForm />
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
