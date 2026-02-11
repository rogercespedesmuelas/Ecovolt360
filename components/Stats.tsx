
import React from 'react';

const Stats: React.FC = () => {
  const statItems = [
    { label: 'PROYECTOS COMPLETADOS', value: '250+' },
    { label: 'RÉCORD DE SEGURIDAD', value: '100%' },
    { label: 'SOPORTE TÉCNICO', value: '24/7' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-12">
      {statItems.map((item, idx) => (
        <div key={idx} className="flex flex-col gap-1">
          <span className="text-3xl font-bold">{item.value}</span>
          <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
