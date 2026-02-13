
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-24 py-5 bg-white/5 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center gap-4">
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
            ECOVOLT<span className="text-[#00d4ff]">360</span>
          </span>
          <span className="text-[9px] font-bold tracking-[0.4em] text-gray-400 uppercase">
            Enginyeria Industrial
          </span>
        </div>
      </div>

      <ul className="hidden lg:flex items-center gap-12 text-[11px] font-extrabold text-gray-400 uppercase tracking-[0.2em]">
        <li><a href="#inicio" className="hover:text-[#00d4ff] transition-all duration-300 relative group">
          Inici
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00d4ff] group-hover:w-full transition-all duration-300"></span>
        </a></li>
        <li><a href="#servicios" className="hover:text-[#00d4ff] transition-all duration-300 relative group">
          Serveis
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00d4ff] group-hover:w-full transition-all duration-300"></span>
        </a></li>
        <li><a href="#proyectos" className="hover:text-[#00d4ff] transition-all duration-300 relative group">
          Projectes
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00d4ff] group-hover:w-full transition-all duration-300"></span>
        </a></li>
      </ul>

      <div className="flex items-center gap-6">
        <a href="#contacto" className="btn-primary text-slate-950 px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all">
          Contactar Ara
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
