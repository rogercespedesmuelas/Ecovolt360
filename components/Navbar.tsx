
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-24 py-6 bg-[#0A0F1C]/80 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black tracking-tighter text-white">
            ECOVOLT <span className="text-[#0088CC]">360</span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
            SERVEIS INDUSTRIALS
          </span>
        </div>
      </div>

      <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
        <li><a href="#inicio" className="hover:text-[#0088CC] transition-colors uppercase tracking-wider">Inicio</a></li>
        <li><a href="#servicios" className="hover:text-[#0088CC] transition-colors uppercase tracking-wider">Servicios</a></li>
        <li><a href="#proyectos" className="hover:text-[#0088CC] transition-colors uppercase tracking-wider">Proyectos</a></li>
        <li><a href="#contacto" className="hover:text-[#0088CC] transition-colors uppercase tracking-wider">Contacto</a></li>
      </ul>

      <button className="bg-[#0088CC] hover:bg-[#0077BB] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20">
        Ponerse en contacto
      </button>
    </nav>
  );
};

export default Navbar;
