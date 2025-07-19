import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const generateData = () => Array.from({ length: 10 }, (_, i) => ({
  name: `${i * 10}s`,
  pressure: 80 + Math.random() * 20,
  flow: 250 + Math.random() * 50,
}));

export const HmiScreen: React.FC = () => {
    const [data, setData] = useState(generateData());
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const interval = setInterval(() => {
            setData(prevData => [...prevData.slice(1), {
                name: `${(parseInt(prevData[prevData.length-1].name) + 10)}s`,
                pressure: 80 + Math.random() * 20,
                flow: 250 + Math.random() * 50,
            }]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    if (!isClient) {
        return <div className="w-full h-96 bg-gray-800 animate-pulse rounded-lg" />;
    }

    return (
        <div className="bg-gray-800 border-4 border-gray-600 rounded-lg p-4 shadow-2xl select-none flex flex-col gap-4 h-full">
            {/* Live Trends */}
            <div className="bg-gray-900 p-2 rounded-md flex-grow flex flex-col">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2 flex-shrink-0">Live Trends</h3>
                <div className="flex-grow min-h-[200px]">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                            <XAxis dataKey="name" stroke="#a0aec0" />
                            <YAxis yAxisId="left" stroke="#38b2ac" label={{ value: 'PSI', angle: -90, position: 'insideLeft', fill: '#38b2ac' }}/>
                            <YAxis yAxisId="right" orientation="right" stroke="#63b3ed" label={{ value: 'SCFM', angle: 90, position: 'insideRight', fill: '#63b3ed' }}/>
                            <Tooltip contentStyle={{ backgroundColor: '#1a202c', border: '1px solid #4a5568' }}/>
                            <Area yAxisId="left" type="monotone" dataKey="pressure" stroke="#38b2ac" fill="#38b2ac" fillOpacity={0.3} />
                            <Area yAxisId="right" type="monotone" dataKey="flow" stroke="#63b3ed" fill="#63b3ed" fillOpacity={0.3}/>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* System Status */}
            <div className="bg-gray-900 p-4 rounded-md">
                 <h3 className="text-lg font-semibold text-cyan-300 mb-2">System Status</h3>
                 <div className="space-y-3">
                    <StatusIndicator label="Compressor" status="Online" />
                    <StatusIndicator label="Motor" status="Running" />
                 </div>
            </div>
        </div>
    )
}

const StatusIndicator: React.FC<{ label: string; status: "Online" | "Running" | "Open" | "Closed" | "Offline" | "Tripped" }> = ({ label, status }) => {
    const isGood = ["Online", "Running", "Open", "Closed"].includes(status);
    return (
        <div className="flex justify-between items-center group">
            <span className="text-gray-300">{label}</span>
            <div className="flex items-center gap-2">
                <span className={`font-bold ${isGood ? 'text-green-400' : 'text-red-500'}`}>{status}</span>
                <div className={`w-3 h-3 rounded-full ${isGood ? 'bg-green-500 animate-pulse' : 'bg-red-500'} group-hover:shadow-lg ${isGood ? 'group-hover:shadow-green-500/50' : 'group-hover:shadow-red-500/50'} transition-shadow`}></div>
            </div>
        </div>
    );
};