
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-industrial-gradient">
      {/* Decorative background element */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 -z-10" 
           style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      
      <footer className="bg-[#04080F] py-12 px-6 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-black tracking-tighter text-white">
              ECOVOLT <span className="text-[#00D1FF]">360</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              SERVEIS INDUSTRIALS
            </span>
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2024 Ecovolt 360. Tots els drets reservats. Innovació per a un futur industrial segur.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-[#00D1FF] transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-[#00D1FF] transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
