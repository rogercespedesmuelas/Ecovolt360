
import React from 'react';
import { Award, Timer, Layers } from 'lucide-react';

const Stats: React.FC = () => {
  const statItems = [
    { label: "ANYS D'EXPERIÈNCIA", value: '+25', icon: <Timer className="w-4 h-4" /> },
    { label: 'CERTIFICACIÓ', value: 'ISO 9001', icon: <Award className="w-4 h-4" /> },
    { label: 'DISPONIBILITAT', value: '24/7', icon: <Layers className="w-4 h-4" /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16 items-center">
      {statItems.map((item, idx) => (
        <div key={idx} className="flex flex-col gap-3 group">
          <div className="flex items-center gap-3">
             <div className="text-[#00d4ff]/40 group-hover:text-[#00d4ff] transition-colors">
               {item.icon}
             </div>
             <span className="text-4xl font-extrabold text-white group-hover:text-gradient transition-all duration-300">
               {item.value}
             </span>
          </div>
          <div className="h-px w-full bg-white/10 group-hover:bg-[#00d4ff]/30 transition-all duration-500"></div>
          <span className="text-[10px] font-black text-slate-500 tracking-[0.25em] uppercase">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
