import React from 'react';
// Importación de tipos e íconos de Lucide React
import type { Service } from '../../logic/models/Service';
import { X, CheckCircle2, PhoneCall } from 'lucide-react';

interface ServiceDetailModalProps {
  service: Service | null;   // Servicio seleccionado o null si el modal está cerrado
  onClose: () => void;       // Función para cerrar el modal de detalle
  onOpenContact: () => void; // Función para abrir el modal de contacto
}

/**
 * Modal flotante emergente para mostrar la información completa del servicio seleccionado.
 */
export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenContact,
}) => {
  // Si no hay un servicio seleccionado, no renderizamos nada
  if (!service) return null;

  // Manejador para abrir el formulario de contacto directamente desde el modal de detalle
  const handleContactClick = () => {
    onClose();        // Cierra la ventana de detalle
    onOpenContact();  // Abre la ventana de contacto
  };

  return (
    // FONDO OSCURO SEMITRANSPARENTE (OVERLAY)
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* CAPA CLICKABLE DE FONDO PARA CERRAR AL HACER CLIC AFUERA */}
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* VENTANA DEL MODAL */}
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* ENCABEZADO CON NÚMERO, TÍTULO Y BOTÓN DE CIERRE */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 font-extrabold text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Servicio {service.number}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all focus:outline-none cursor-pointer"
            aria-label="Cerrar detalle"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* DESCRIPCIÓN DETALLADA */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* LISTA COMPLETA DE CARACTERÍSTICAS INCLUIDAS */}
        <div className="mb-8">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Lo que incluye este servicio:
          </h4>
          <ul className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* BOTÓN DIRECTO A CONSULTA/CONTACTO */}
        <button
          onClick={handleContactClick}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 px-6 rounded-xl shadow-md transition-all focus:outline-none cursor-pointer"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Consultar por este servicio</span>
        </button>

      </div>

    </div>
  );
};