/*
Función auxiliar para combinar clases de Tailwind de forma dinámica sin conflictos.
*/

import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases condicionales con clsx y resuelve conflictos de clases Tailwind con twMerge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}