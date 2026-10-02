import React from 'react';
import { ContactForm } from '../components/ContactForm';

/**
 * Sección que contiene el encabezado de Contacto y embebe el componente ContactForm.
 */
export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-12 sm:py-20 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-blue-400 font-bold tracking-wider text-[10px] sm:text-xs uppercase bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
            Hablemos
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
            Contactanos
          </h2>
          <p className="text-slate-400 text-xs sm:text-base mt-2 sm:mt-3 px-2">
            Dejanos tu consulta y nos pondremos en contacto con vos para asesorarte.
          </p>
        </div>

        {/* FORMULARIO DE CONTACTO */}
        <ContactForm />

      </div>
    </section>
  );
};