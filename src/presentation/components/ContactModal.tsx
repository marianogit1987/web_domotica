import React from 'react';
// Importación del ícono de cierre y del formulario de contacto
import { X } from 'lucide-react';
import { ContactForm } from './ContactForm';

// Props para controlar la visibilidad del modal desde componentes padres
interface ContactModalProps {
  isOpen: boolean;        // Indica si el modal debe mostrarse
  onClose: () => void;    // Función para cerrar el modal
}

/**
 * Componente Modal emergente para el Formulario de Contacto.
 */
export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  // Si el modal no está abierto, no renderizamos nada en el DOM
  if (!isOpen) return null;

  return (
    // CONTENEDOR PRINCIPAL / FONDO OSCURO SEMITRANSPARENTE (OVERLAY)
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* CAPA DE FONDO CLICKABLE PARA CERRAR EL MODAL AL HACER CLIC AFUERA */}
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* CAJA DEL MODAL DE CONTACTO */}
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto">
        
        {/* ENCABEZADO DEL MODAL CON BOTÓN DE CIERRE */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-20 backdrop-blur-md">
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Contactanos
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-all focus:outline-none"
            aria-label="Cerrar formulario"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CUERPO DEL MODAL QUE CONTIENE EL FORMULARIO */}
        <div className="p-4 sm:p-6">
          <ContactForm />
        </div>

      </div>

    </div>
  );
};