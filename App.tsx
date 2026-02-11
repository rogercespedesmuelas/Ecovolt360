
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-[40%] right-[-5%] w-[30%] h-[30%] bg-emerald-600/10 blur-[120px] rounded-full -z-10"></div>
      
      <Navbar />
      <Hero />
      <Services />
      
      <footer className="bg-[#0A0F1C] py-12 px-6 lg:px-24 border-t border-white/5 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="text-xl font-black tracking-tighter text-white">
            ECOVOLT <span className="text-[#0088CC]">360</span>
          </span>
          <p className="text-gray-500 text-sm">© 2024 Ecovolt 360 Serveis Industrials. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
