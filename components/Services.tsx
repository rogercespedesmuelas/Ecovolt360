
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="bg-[#F3F4F6] py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#1F2937] mb-4 uppercase tracking-tight">Servicios Eléctricos</h2>
          <p className="text-lg text-[#4B5563] max-w-3xl">
            Mantenimiento eléctrico e instalación de baja tensión. Termografías y predictivo.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          
          {/* Service Card 1: Mantenimiento */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-[3rem] overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
                alt="Mantenimiento Eléctrico" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-[3rem] p-12 lg:p-20 flex flex-col justify-center items-start shadow-sm">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#1F2937] mb-6 leading-tight">
                Mantenimiento Eléctrico de Baja Tensión
              </h3>
              <p className="text-lg text-[#4B5563] mb-8 leading-relaxed">
                Realizamos el mantenimiento preventivo y correctivo para garantizar la seguridad y eficiencia de sus instalaciones eléctricas.
              </p>
              <button className="bg-[#4FA3D1] hover:bg-[#4392BC] text-white px-8 py-3 rounded-2xl font-bold transition-all transform hover:scale-105">
                Ponerse en contacto
              </button>
            </div>
          </div>

          {/* Service Card 2: Instalaciones */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white rounded-[3rem] p-12 lg:p-20 flex flex-col justify-center items-start shadow-sm order-2 lg:order-1">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#1F2937] mb-6 leading-tight">
                Instalaciones Eléctricas
              </h3>
              <p className="text-lg text-[#4B5563] mb-8 leading-relaxed">
                Ofrecemos instalaciones eléctricas a medida, adaptadas a las necesidades específicas de su industria.
              </p>
              <button className="bg-[#4FA3D1] hover:bg-[#4392BC] text-white px-8 py-3 rounded-2xl font-bold transition-all transform hover:scale-105">
                Ponerse en contacto
              </button>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-sm order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                alt="Instalaciones Eléctricas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
