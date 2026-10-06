import React from 'react';
// Importación de tipos e íconos
import type { Service } from '../../logic/models/Service';
import { X, CheckCircle2, PhoneCall } from 'lucide-react';

interface ServiceDetailModalProps {
  service: Service | null;   // Servicio seleccionado o null
  onClose: () => void;       // Función para cerrar el modal
  onOpenContact: () => void; // Función para abrir el modal de contacto
}

/**
 * Modal flotante que muestra las características completas de un servicio seleccionado.
 */
export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenContact,
}) => {
  // Si no hay servicio seleccionado, no renderizamos nada
  if (!service) return null;

  const handleContactClick = () => {
    onClose();        // Cierra el modal de detalle
    onOpenContact();  // Abre el modal de contacto
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* CAPA DE FONDO CLICKABLE */}
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* CONTENEDOR DEL MODAL */}
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        
        {/* ENCABEZADO CON BOTÓN DE CIERRE */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-extrabold text-sm uppercase bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/50">
              Servicio {service.number}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-all focus:outline-none"
            aria-label="Cerrar detalle"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* DESCRIPCIÓN */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* LISTA COMPLETA DE CARACTERÍSTICAS */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Lo que incluye este servicio:
          </h4>
          <ul className="space-y-3 bg-slate-800/50 p-4 rounded-xl border border-slate-800">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* BOTÓN DE ACCIÓN / CONTACTO */}
        <button
          onClick={handleContactClick}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 px-6 rounded-xl shadow-lg shadow-blue-500/20 transition-all focus:outline-none"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Consultar por este servicio</span>
        </button>

      </div>

    </div>
  );
};