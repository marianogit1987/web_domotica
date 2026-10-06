/*
Componente reutilizable para renderizar la tarjeta de cada uno de los servicios.
*/

import React from 'react';
import type { Service } from '../../logic/models/Service';
import { Zap, Settings, Wrench, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onSelectService: (service: Service) => void;
  onOpenContact: () => void;
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

/**
 * Tarjeta de servicio compacta con altura uniforme.
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onOpenContact,
}) => {
  return (
    <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between h-full group">
      <div>
        {/* ENCABEZADO */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="p-2.5 sm:p-3 bg-blue-950/80 rounded-xl border border-blue-800/40">
            {renderIcon(service.iconName)}
          </div>
          <span className="text-xl sm:text-2xl font-black text-slate-600 group-hover:text-blue-400 transition-colors">
            {service.number}
          </span>
        </div>

        {/* TÍTULO Y DESCRIPCIÓN */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
          {service.title}
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* BOTÓN 'SABER MÁS' QUE ABRE EL MODAL */}
        <button
          type="button"
          onClick={() => onSelectService(service)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors focus:outline-none cursor-pointer"
        >
          <span>Saber más</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* BOTÓN DE CONSULTA DIRECTA */}
      <button
        type="button"
        onClick={onOpenContact}
        className="w-full py-2.5 px-4 bg-slate-700/60 hover:bg-blue-600 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm rounded-xl border border-slate-600 hover:border-blue-500 transition-all text-center block mt-6 focus:outline-none cursor-pointer"
      >
        Consultar por este servicio
      </button>
    </div>
  );
};