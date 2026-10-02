/*
Sección que presenta a la empresa, su visión y su misión.
*/

import React from 'react';
import { COMPANY_DATA } from '../../logic/data/companyData';
import { Target, Compass } from 'lucide-react';

/**
 * Sección institucional con paddings y tamaños de texto optimizados para celulares.
 */
export const AboutUsSection: React.FC = () => {
  return (
    // 'py-12 sm:py-20': Reducimos el espaciado vertical en pantallas chicas (py-12) y lo aumentamos en medianas/grandes (py-20)
    <section id="quienes-somos" className="py-12 sm:py-20 bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* ETIQUETA SUPERIOR */}
        <span className="text-blue-400 font-bold tracking-wider text-[10px] sm:text-xs uppercase bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
          Sobre Nosotros
        </span>
        
        {/* TÍTULO ADAPTATIVO ('text-2xl sm:text-4xl') */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
          ¿Quiénes Somos?
        </h2>

        {/* DESCRIPCIÓN AJUSTADA */}
        <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-14 px-2">
          {COMPANY_DATA.description}
        </p>

        {/* TARJETAS MISIÓN Y VISIÓN (En móvil ocupan 1 columna full-width, en escritorio 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
          
          {/* TARJETA MISIÓN */}
          <div className="bg-slate-800/80 p-6 sm:p-8 rounded-2xl border-l-4 border-blue-500 border-y border-r border-slate-700/50 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-900/50 text-blue-400 rounded-lg border border-blue-800/50">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Nuestra Misión</h3>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {COMPANY_DATA.mission}
            </p>
          </div>

          {/* TARJETA VISIÓN */}
          <div className="bg-slate-800/80 p-6 sm:p-8 rounded-2xl border-l-4 border-emerald-500 border-y border-r border-slate-700/50 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-emerald-900/50 text-emerald-400 rounded-lg border border-emerald-800/50">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Nuestra Visión</h3>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {COMPANY_DATA.vision}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};