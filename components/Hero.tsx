
import React from 'react';
import Stats from './Stats';
import { ArrowRight, Zap, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-44 pb-24 lg:pt-64 lg:pb-40 px-6 lg:px-24 max-w-[1440px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full w-fit backdrop-blur-md">
            <Zap className="w-4 h-4 text-[#00d4ff] fill-[#00d4ff]/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00d4ff]">Estàndards de Gamma Alta</span>
          </div>

          <h1 className="text-6xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tighter uppercase text-white">
            Innovació <br />
            <span className="text-gradient blue-glow-text">Elèctrica</span> <br />
            Industrial
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 max-w-lg leading-relaxed font-medium">
            Projectes d'enginyeria d'alta precisió. Transformem la infraestructura energètica amb tecnologia d'última generació i seguretat certificada.
          </p>

          <div className="flex flex-wrap gap-6 mt-4">
            <a href="#servicios" className="group btn-primary text-slate-950 px-10 py-5 rounded-2xl text-[13px] font-black uppercase tracking-[0.15em] flex items-center gap-4">
              Explorar Serveis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contacto" className="px-10 py-5 rounded-2xl text-[13px] font-black uppercase tracking-[0.15em] text-white border border-white/10 hover:bg-white/5 transition-all backdrop-blur-sm">
              Saber-ne Més
            </a>
          </div>

          <div className="mt-12">
            <Stats />
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative group">
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-slate-900">
            <img 
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200" 
              alt="Industrial Precision Engineering" 
              className="w-full aspect-[4/5] object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>
          </div>
          
          {/* Decorative Floating Element */}
          <div className="absolute -bottom-10 -right-10 z-20 glass-panel p-8 rounded-[2rem] border-white/20 hidden lg:block">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-[#00d4ff] rounded-2xl flex items-center justify-center text-slate-950 shadow-lg shadow-[#00d4ff]/20">
                <Shield className="w-8 h-8" />
              </div>
              <div className="pr-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Garantia</div>
                <div className="text-xl font-extrabold text-white tracking-tight uppercase italic">Estandard ISO</div>
              </div>
            </div>
          </div>

          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#00d4ff]/5 blur-[120px] rounded-full -z-10"></div>
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 border border-white/10 backdrop-blur-md rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
