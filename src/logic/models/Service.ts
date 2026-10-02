/**
 * Modelo de TypeScript para los servicios.
 * Garantiza que todos los servicios tengan el mismo formato de datos.
 */
export interface Service {
  id: string;          // Identificador único (ej: "service-1")
  number: string;      // Número descriptivo para la tarjeta (ej: "01")
  title: string;       // Título principal del servicio
  description: string; // Explicación breve de qué consiste el servicio
  features: string[];  // Lista de características clave o puntos destacados
  iconName: string;    // Nombre del ícono de Lucide React a utilizar
}