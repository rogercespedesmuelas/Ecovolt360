
import React from 'react';
import { Zap, Activity, Sun, CheckCircle2, ChevronRight } from 'lucide-react';

const servicesList = [
  {
    title: 'Instal·lacions Industrials',
    desc: 'Projectes d\'alta complexitat en Baixa i Mitja tensió amb enginyeria de precisió.',
    icon: <Zap className="w-8 h-8" />,
    features: ['Sistemes de Potència', 'Quadres Intel·ligents', 'Control Industrial']
  },
  {
    title: 'Manteniment Avançat',
    desc: 'Diagnòstic predictiu mitjançant termografia IR i anàlisi de xarxes en temps real.',
    icon: <Activity className="w-8 h-8" />,
    features: ['Monitorització 24/7', 'Auditoria Elèctrica', 'Intervenció Ràpida']
  },
  {
    title: 'Sostenibilitat Industrial',
    desc: 'Implementació d\'infraestructura fotovoltaica i solucions d\'eficiència energètica.',
    icon: <Sun className="w-8 h-8" />,
    features: ['Plaques Fotovoltaiques', 'Gestió de Demanda', 'ROI Energètic']
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 lg:py-48 px-6 lg:px-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 mb-24">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#00d4ff]"></span>
            <span className="text-[#00d4ff] text-[11px] font-black uppercase tracking-[0.4em]">Portafoli de Solucions</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-tight">
            Excel·lència en <br />
            <span className="text-gradient">Enginyeria 360°</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {servicesList.map((service, idx) => (
            <div key={idx} className="glass-panel p-12 rounded-[3rem] flex flex-col gap-10 group hover:bg-white/[0.05] transition-all duration-500">
              <div className="w-20 h-20 bg-white/5 text-[#00d4ff] rounded-[1.5rem] flex items-center justify-center group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-all duration-500 border border-white/10 group-hover:scale-110 shadow-xl group-hover:shadow-[#00d4ff]/20">
                {service.icon}
              </div>
              
              <div className="flex flex-col gap-5">
                <h3 className="text-3xl font-extrabold text-white uppercase tracking-tight leading-none group-hover:text-[#00d4ff] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-4 mt-auto">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-slate-300 uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-all">
                    <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" />
                    {f}
                  </li>
                ))}
              </ul>
              
              <button className="mt-8 text-white text-[10px] font-black uppercase tracking-widest flex items-center justify-between group/btn border-t border-white/10 pt-8 hover:text-[#00d4ff] transition-colors">
                Detalls del Servei
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
