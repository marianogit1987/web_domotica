/*
Componente reutilizable para renderizar la tarjeta de cada uno de los servicios.
*/

import React, { useState } from 'react';
import type { Service } from '../../logic/models/Service';
import { Zap, Settings, Wrench, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onOpenContact?: () => void; // Prop opcional para abrir el modal de contacto
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'Zap':
      return <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />;
    case 'Settings':
      return <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />;
    case 'Wrench':
      return <Wrench className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />;
    default:
      return <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />;
  }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onOpenContact }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="p-2.5 sm:p-3 bg-blue-950/80 rounded-xl border border-blue-800/40">
            {renderIcon(service.iconName)}
          </div>
          <span className="text-xl sm:text-2xl font-black text-slate-600 group-hover:text-blue-400 transition-colors">
            {service.number}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
          {service.title}
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 mb-4 transition-colors focus:outline-none"
        >
          <span>{isExpanded ? 'Mostrar menos' : 'Saber más'}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {isExpanded && (
          <ul className="space-y-2.5 sm:space-y-3 mb-6 pt-3 border-t border-slate-700/50 animate-in fade-in duration-200">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* BOTÓN QUE ABRE DIRECTAMENTE EL MODAL */}
      <button
        onClick={onOpenContact}
        className="w-full py-2.5 px-4 bg-slate-700/60 hover:bg-blue-600 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm rounded-xl border border-slate-600 hover:border-blue-500 transition-all text-center block mt-4 focus:outline-none"
      >
        Consultar por este servicio
      </button>
    </div>
  );
};