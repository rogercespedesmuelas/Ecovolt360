
import React from 'react';
import { Send, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-32 lg:py-48 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto glass-panel rounded-[4rem] overflow-hidden">
        <div className="grid lg:grid-cols-2">
          
          {/* Info Side */}
          <div className="p-12 lg:p-24 bg-white/[0.02] flex flex-col gap-16 border-r border-white/10">
            <div className="flex flex-col gap-6">
              <h2 className="text-5xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                Iniciem el vostre <br />
                <span className="text-gradient">Proper Projecte</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-sm">
                Solucions a mida per a les necessitats més exigents de la indústria. Consultoria tècnica sense compromís.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00d4ff] group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1 italic">Contacte Directe</div>
                  <div className="text-xl font-bold text-white tracking-tight">+34 930 456 789</div>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00d4ff] group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1 italic">Correu Corporatiu</div>
                  <div className="text-xl font-bold text-white tracking-tight">info@ecovolt360.com</div>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00d4ff] group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1 italic">Seu Central</div>
                  <div className="text-xl font-bold text-white tracking-tight">Carrer Industrial 45, Barcelona</div>
                </div>
              </div>
            </div>

            <a href="#" className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors group">
              Obrir a Google Maps
              <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Form Side */}
          <div className="p-12 lg:p-24 flex flex-col justify-center">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Empresa / Nom</label>
                  <input 
                    type="text" 
                    placeholder="Escriu aquí..." 
                    className="bg-white/5 border border-white/10 rounded-3xl p-6 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]/20 transition-all text-white placeholder-slate-700 font-bold"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Email de contacte</label>
                  <input 
                    type="email" 
                    placeholder="email@corporatiu.com" 
                    className="bg-white/5 border border-white/10 rounded-3xl p-6 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]/20 transition-all text-white placeholder-slate-700 font-bold"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Tipus de Servei</label>
                <select className="bg-white/5 border border-white/10 rounded-3xl p-6 focus:outline-none focus:border-[#00d4ff] transition-all text-white font-bold appearance-none cursor-pointer">
                  <option className="bg-[#020617]">Instal·lacions Industrials</option>
                  <option className="bg-[#020617]">Manteniment Predictiu</option>
                  <option className="bg-[#020617]">Energies Renovables</option>
                  <option className="bg-[#020617]">Altres consultes</option>
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Descripció del Projecte</label>
                <textarea 
                  rows={4}
                  placeholder="Detalla breument les teves necessitats..." 
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 focus:outline-none focus:border-[#00d4ff] transition-all text-white placeholder-slate-700 font-bold resize-none"
                ></textarea>
              </div>

              <button className="btn-primary text-slate-950 p-6 rounded-3xl font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 mt-4 text-sm group">
                Enviar Sol·licitud
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
