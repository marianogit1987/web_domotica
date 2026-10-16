import React from 'react';
// Importación del ícono de cierre y del formulario de contacto
import { X } from 'lucide-react';
import { ContactForm } from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;        // Indica si el modal debe mostrarse
  onClose: () => void;    // Función para cerrar el modal
}

/**
 * Componente Modal emergente para el Formulario de Contacto en tema claro/oscuro combinado.
 */
export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  // Si no está abierto, no renderizamos nada en el DOM
  if (!isOpen) return null;

  return (
    // OVERLAY SEMITRANSPARENTE
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* CAPA CLICKABLE DE FONDO */}
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* CAJA DEL MODAL DE CONTACTO EN FONDO BLANCO */}
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto">
        
        {/* ENCABEZADO DEL MODAL CON TEMA OSCURO PARA COINCIDIR CON EL NAVBAR */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-20">
          <h2 className="text-lg sm:text-xl font-bold">
            Contactanos
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all focus:outline-none cursor-pointer"
            aria-label="Cerrar formulario"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CUERPO DEL MODAL */}
        <div className="p-4 sm:p-6 bg-white">
          <ContactForm />
        </div>

      </div>

    </div>
  );
};