/*
Pie de página con enlaces de navegación, datos de contacto y derechos reservados.
*/

import React from 'react';

/**
 * Pie de página minimalista.
 * Muestra únicamente el mensaje de derechos reservados con el año actual.
 */
export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-slate-950 text-slate-500 py-8 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 text-center text-xs sm:text-sm font-medium">
        © {new Date().getFullYear()} HogarInteligente. Todos los derechos reservados.
      </div>
    </footer>
  );
};