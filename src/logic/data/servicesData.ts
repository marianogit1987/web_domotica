import type { Service } from '../models/Service';

/**
 * Arreglo con la información de los 3 servicios ofrecidos.
 * Esta capa está desacoplada de la vista, por lo que en el futuro
 * estos datos podrían venir de una API REST o Firebase.
 */
export const SERVICES_DATA: Service[] = [
  {
    id: 'service-1',
    number: '01',
    title: 'Autonomía',
    description: 'Servicio de asistencia básica para adultos mayores que mantienen un alto grado de independencia.',
    features: [
      'Incorporación herramientas de detección de eventos',
      'Comunicación y seguimiento de rutinas',
      'Mayor seguridad en el hogar',
      'Configuración de Hubs y centrales domóticas'
    ],
    iconName: 'Zap' // Ícono de rayo/energía de Lucide
  },
  {
    id: 'service-2',
    number: '02',
    title: 'Acompañamiento',
    description: 'Servicio de asistencia ampliada para personas que requieren mayor supervisión y apoyo.',
    features: [
      'Incorpora mayores capacidades de monitoreo',
      'automatización y comunicación con el entorno familiar',
      'Optimización de consumo eléctrico y ahorro energético',
      'Adaptación a una mayor necesidad de acompañamiento.'
    ],
    iconName: 'Settings' // Ícono de engranaje/configuración de Lucide
  },
  {
    id: 'service-3',
    number: '03',
    title: 'Cuidado Inteligente',
    description: 'Servicio avanzado para personas que requieren un nivel elevado de asistencia en el hogar.',
    features: [
      'Integra un ecosistema tecnológico más completo',
      'Manteniendo como principios la privacidad, la seguridad y el respeto por la persona',
      'Soporte para nuestra App Móvil y plataformas integradas',
      'Diagnóstico y resolución de incidencias en red local'
    ],
    iconName: 'Wrench' // Ícono de herramienta/soporte de Lucide
  }
];