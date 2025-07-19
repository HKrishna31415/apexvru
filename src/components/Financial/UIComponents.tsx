import React from 'react';

export const InfoIcon: React.FC<{ tooltip: string }> = ({ tooltip }) => (
    <div className="group relative flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-gray-light text-black text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
            {tooltip}
        </div>
    </div>
);

export const Card: React.FC<{ title: string; description?: string; children: React.ReactNode; className?: string }> = ({ title, description, children, className = '' }) => (
    <div className={`bg-white rounded-lg shadow-xl p-6 border border-gray-light ${className}`}>
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            {description && <InfoIcon tooltip={description} />}
        </div>
        <div className="space-y-4">{children}</div>
    </div>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-gray-text mb-1">{label}</label>
        <input
            {...props}
            className="w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition disabled:bg-gray-200 disabled:cursor-not-allowed"
        />
    </div>
);

export const LinkedInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string; source: string; }> = ({ label, source, ...props }) => (
     <div>
        <label className="block text-sm font-medium text-gray-text mb-1">{label}</label>
        <div className="relative group">
             <input
                {...props}
                readOnly
                className="w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition disabled:bg-gray-200 disabled:cursor-not-allowed pr-8"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span role="img" aria-label="linked">🔗</span>
            </div>
             <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max p-2 bg-gray-200 text-gray-900 text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                Derived from: {source}
            </div>
        </div>
    </div>
);


export const ResultDisplay: React.FC<{ label: string; value: string; className?: string }> = ({ label, value, className = '' }) => (
    <div className={`bg-gray-100 p-3 rounded-md flex justify-between items-center ${className}`}>
        <span className="text-gray-900">{label}</span>
        <span className="text-brand-blue font-bold text-lg">{value}</span>
    </div>
);

export const Loader: React.FC = () => (
    <div className="flex justify-center items-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
    </div>
);