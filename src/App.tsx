import React, { useState } from 'react';
import { Navbar } from './presentation/components/Navbar';
import { AboutUsSection } from './presentation/sections/AboutUsSection';
import { ServicesSection } from './presentation/sections/ServicesSection';
import { ContactModal } from './presentation/components/ContactModal';
import { Footer } from './presentation/components/Footer';

/**
 * Componente principal (Punto de entrada de la interfaz).
 * Ensambla el Navbar, la sección Quiénes Somos, los Servicios y el Footer.
 */
export const App: React.FC = () => {

  // Estado global para controlar si el modal de contacto está visible
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Funciones para abrir y cerrar el modal
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Navbar que recibe la función para desplegar el modal */}
      <Navbar onOpenContact={openContact} />

      {/* 2. Contenido principal del sitio */}
      <main>
        <AboutUsSection />
        {/* Sección de servicios vinculada también al modal */}
        <ServicesSection onOpenContact={openContact} />
      </main>

      {/* 3. Pie de página y contacto */}
      <Footer />
      {/* Modal Desplegable de Contacto */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default App;