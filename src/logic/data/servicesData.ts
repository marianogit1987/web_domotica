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
    title: 'Instalación y Configuración Domótica',
    description: 'Nos encargamos de la instalación física y vinculación de todos los dispositivos inteligentes en tu hogar u oficina.',
    features: [
      'Iluminación inteligente y dimerización',
      'Cerraduras digitales y control de accesos',
      'Termostatos y climatización automatizada',
      'Configuración de Hubs y centrales domóticas'
    ],
    iconName: 'Zap' // Ícono de rayo/energía de Lucide
  },
  {
    id: 'service-2',
    number: '02',
    title: 'Diseño de Automatizaciones a Medida',
    description: 'Creamos escenas y rutinas inteligentes personalizadas adaptadas a tus horarios, preferencias y estilo de vida.',
    features: [
      'Modos "Cine", "Noche", "Fuera de Casa" o "Bienvenida"',
      'Automatización según sensores de presencia y temperatura',
      'Optimización de consumo eléctrico y ahorro energético',
      'Integración con asistentes de voz (Alexa, Google Assistant)'
    ],
    iconName: 'Settings' // Ícono de engranaje/configuración de Lucide
  },
  {
    id: 'service-3',
    number: '03',
    title: 'Soporte, Mantenimiento y Asesoramiento',
    description: 'Acompañamiento continuo para que tu sistema domótico funcione siempre al 100% y sin interrupciones.',
    features: [
      'Asesoramiento técnico pre y post venta',
      'Mantenimiento preventivo y actualización de firmware',
      'Soporte para nuestra App Móvil y plataformas integradas',
      'Diagnóstico y resolución de incidencias en red local'
    ],
    iconName: 'Wrench' // Ícono de herramienta/soporte de Lucide
  }
];