/*
Sección que presenta a la empresa, su visión y su misión.
*/

import React from 'react';
import { COMPANY_DATA } from '../../logic/data/companyData';
import { Target, Compass } from 'lucide-react';

/**
 * Sección Quiénes Somos con fondo blanco y tarjetas de Misión/Visión con bordes definidos.
 */
export const AboutUsSection: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-12 sm:py-20 bg-white text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* BADGE */}
        <span className="text-blue-600 font-bold tracking-wider text-[10px] sm:text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Sobre Nosotros
        </span>
        
        {/* TÍTULO */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 sm:mt-4 mb-4 sm:mb-6">
          ¿Quiénes Somos?
        </h2>

        {/* DESCRIPCIÓN */}
        <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-14 px-2">
          {COMPANY_DATA.description}
        </p>

        {/* TARJETAS MISIÓN Y VISIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
          
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border-l-4 border-blue-600 border-y border-r border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">Nuestra Misión</h3>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {COMPANY_DATA.mission}
            </p>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border-l-4 border-emerald-500 border-y border-r border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">Nuestra Visión</h3>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {COMPANY_DATA.vision}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};