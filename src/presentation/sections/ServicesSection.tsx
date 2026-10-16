/*
Sección que maqueta la grilla con los 3 servicios.
*/

import React, { useState } from 'react';
import type { Service } from '../../logic/models/Service';
import { SERVICES_DATA } from '../../logic/data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceDetailModal } from '../components/ServiceDetailModal';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

/**
 * Sección de servicios con integración del modal emergente.
 */
export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  // Estado local para almacenar qué servicio fue seleccionado para el modal
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="servicios" className="py-12 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-blue-600 font-bold tracking-wider text-[10px] sm:text-xs uppercase bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
            Lo Que Ofrecemos
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Nuestros Servicios
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-2 sm:mt-3 max-w-xl mx-auto px-2">
            Soluciones integrales de automatización diseñadas para llevar el confort y la eficiencia a tu espacio.
          </p>
        </div>

        {/* GRILLA DE TARJETAS PERFECTAMENTE ALINEADAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {SERVICES_DATA.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onSelectService={(srv) => setSelectedService(srv)}
              onOpenContact={onOpenContact} 
            />
          ))}
        </div>

      </div>

      {/* VENTANA EMERGENTE / MODAL CON LA INFORMACIÓN COMPLETA */}
      <ServiceDetailModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};