/*
Menú de navegación fijo en la parte superior con links a cada sección.
*/

import React, { useState } from 'react';
// Importación de íconos desde Lucide React
import { PhoneCall, Menu, X } from 'lucide-react';

// Importación subiendo 2 niveles hasta la carpeta assets
import icon_app from '../../assets/images/icon_app.png';

interface NavbarProps {
  onOpenContact: () => void; // Función para abrir el modal de contacto
}

/**
 * Componente Navbar adaptado con disparador para el modal de contacto.
 */
export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  // Estado local para controlar el menú hamburguesa en móviles
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función auxiliar para abrir el contacto y cerrar el menú móvil si estaba abierto
  const handleContactClick = () => {
    setIsMenuOpen(false);
    onOpenContact();
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-20 flex items-center justify-between">
        
        {/* LOGO OFICIAL VITALHOME */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src={icon_app} 
              alt="VitalHome Logo" 
              className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-transform hover:scale-105" 
            />
          </a>
        </div>

        {/* ENLACES DE NAVEGACIÓN EN ESCRITORIO */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-slate-300 text-sm">
          <li>
            <a href="#quienes-somos" className="hover:text-blue-400 transition-colors">
              Quiénes Somos
            </a>
          </li>
          <li>
            <a href="#servicios" className="hover:text-blue-400 transition-colors">
              Servicios
            </a>
          </li>
        </ul>

        {/* BOTÓN DE CONTACTO EN ESCRITORIO */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={handleContactClick}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl font-medium text-sm shadow-md shadow-blue-500/25 transition-all focus:outline-none"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Contactar</span>
          </button>
        </div>

        {/* BOTÓN HAMBURGUESA PARA MÓVILES */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none rounded-lg bg-slate-800/60"
          aria-label="Abrir menú"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </nav>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <a
            href="#quienes-somos"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-blue-400 font-medium border-b border-slate-800/50 text-sm"
          >
            Quiénes Somos
          </a>
          <a
            href="#servicios"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-blue-400 font-medium border-b border-slate-800/50 text-sm"
          >
            Servicios
          </a>
          
          {/* BOTÓN DE CONTACTO EN MENÚ MÓVIL */}
          <button
            onClick={handleContactClick}
            className="flex items-center justify-center gap-2 w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-xl font-medium text-sm shadow-md shadow-blue-500/20 transition-all focus:outline-none"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Contactar</span>
          </button>
        </div>
      )}
    </header>
  );
};