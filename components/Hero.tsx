
import React from 'react';
import Stats from './Stats';
import FeaturedImage from './FeaturedImage';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit">
            <span className="w-2 h-2 bg-[#0088CC] rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Expertos en Baja y Media Tensión</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight uppercase">
            Serveis <span className="text-gradient">Industrials</span> de Confianza
          </h1>

          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            Especialistas en mantenimiento eléctrico, instalaciones a medida y soluciones energéticas para el sector industrial. Garantizamos eficiencia y seguridad en cada proyecto.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#servicios" className="group bg-[#0088CC] hover:bg-[#0077BB] text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2 transition-all blue-glow">
              Explorar Servicios
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="pt-12 border-t border-white/10">
            <Stats />
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative">
          <FeaturedImage />
          
          {/* Subtle dots pattern for decorative background */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
