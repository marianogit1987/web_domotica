/*
Función auxiliar para combinar clases de Tailwind de forma dinámica sin conflictos.
*/

// Importación de tipos desde clsx utilizando 'import type'
import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Función de utilidad para fusionar clases condicionales de Tailwind CSS de forma limpia.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}