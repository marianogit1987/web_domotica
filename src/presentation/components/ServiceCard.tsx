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
      return <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />;
    case 'Settings':
      return <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />;
    case 'Wrench':
      return <Wrench className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />;
    default:
      return <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />;
  }
};

/**
 * Tarjeta compacta con tamaño estático que activa el modal emergente.
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onOpenContact,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
      <div>
        {/* ENCABEZADO */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="p-2.5 sm:p-3 bg-blue-50 rounded-xl border border-blue-100">
            {renderIcon(service.iconName)}
          </div>
          <span className="text-xl sm:text-2xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">
            {service.number}
          </span>
        </div>

        {/* TÍTULO Y DESCRIPCIÓN CORTA */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
          {service.title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* BOTÓN 'SABER MÁS' QUE ACTIVA EL MODAL EMERGENTE */}
        <button
          type="button"
          onClick={() => onSelectService(service)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none cursor-pointer"
        >
          <span>Saber más</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* BOTÓN DE CONSULTA ALINEADO AL FONDO */}
      <button
        type="button"
        onClick={onOpenContact}
        className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all text-center block mt-6 focus:outline-none cursor-pointer shadow-sm"
      >
        Consultar por este servicio
      </button>
    </div>
  );
};