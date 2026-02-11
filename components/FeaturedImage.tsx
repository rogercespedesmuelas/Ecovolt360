
import React from 'react';

const FeaturedImage: React.FC = () => {
  return (
    <div className="relative rounded-[40px] overflow-hidden border border-white/10 group">
      {/* Main Industrial Image */}
      <img 
        src="https://picsum.photos/seed/electrician/1200/1200" 
        alt="Ingeniería Eléctrica Industrial" 
        className="w-full h-auto aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Overlay Badge - Bottom */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-glass p-5 rounded-2xl flex items-center gap-4 border border-white/20">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 21.75c-2.676 0-5.216-.584-7.499-1.632.249-1.563 1.205-2.887 2.503-3.606a11.962 11.962 0 019.992 0c1.298.719 2.254 2.043 2.503 3.606A11.955 11.955 0 0112 21.75z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white uppercase tracking-tight">Certificación ISO 9001:2015</span>
            <span className="text-xs text-gray-400">Garantía de Calidad Estándar Internacional</span>
          </div>
        </div>
      </div>

      {/* Glow Effect behind image */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 to-transparent opacity-60"></div>
    </div>
  );
};

export default FeaturedImage;
