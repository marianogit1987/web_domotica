/*
Sección que maqueta la grilla con los 3 servicios.
*/

import React from 'react';
import { SERVICES_DATA } from '../../logic/data/servicesData';
import { ServiceCard } from '../components/ServiceCard';

interface ServicesSectionProps {
  onOpenContact?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="servicios" className="py-12 sm:py-20 bg-slate-950 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-blue-400 font-bold tracking-wider text-[10px] sm:text-xs uppercase bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/50">
            Lo Que Ofrecemos
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
            Nuestros Servicios
          </h2>
          <p className="text-slate-400 text-xs sm:text-base mt-2 sm:mt-3 max-w-xl mx-auto px-2">
            Soluciones integrales de automatización diseñadas para llevar el confort y la eficiencia a tu espacio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} onOpenContact={onOpenContact} />
          ))}
        </div>

      </div>
    </section>
  );
};