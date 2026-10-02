import React, { useState } from 'react';
// Importación del ícono de envío desde Lucide React
import { Send, CheckCircle2 } from 'lucide-react';

/**
 * Componente del Formulario de Contacto.
 * Gestiona el estado local de los campos e imita un flujo de envío exitoso.
 */
export const ContactForm: React.FC = () => {
  // Estado local para almacenar los datos ingresados por el usuario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
  });

  // Estado para indicar si el formulario fue enviado con éxito
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Manejador de cambios en los inputs/textarea
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Manejador del envío del formulario (submit)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Aquí podrías integrar en el futuro un servicio de email o Firebase (ej: EmailJS, Netlify Forms, etc.)
    console.log('Datos enviados:', formData);
    
    // Mostramos la pantalla de éxito
    setIsSubmitted(true);

    // Limpiamos los campos
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      mensaje: ''
    });
  };

  // Si ya se envió el formulario, mostramos un mensaje de confirmación
  if (isSubmitted) {
    return (
      <div className="bg-slate-800/90 border border-slate-700/60 rounded-2xl p-8 text-center shadow-xl animate-in fade-in duration-300">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-emerald-950/80 rounded-full border border-emerald-800/50">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado con éxito!</h3>
        <p className="text-slate-300 text-sm mb-6">
          Gracias por contactarte con nosotros. Nos comunicaremos a la brevedad.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-slate-700/60 hover:bg-slate-600 text-slate-200 text-xs font-semibold py-2 px-4 rounded-xl transition-all"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800/90 border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4 sm:space-y-6"
    >
      {/* FILA 1: NOMBRE Y APELLIDO (1 columna en móvil, 2 en escritorio) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        
        {/* CAMPO NOMBRE */}
        <div>
          <label htmlFor="nombre" className="block text-xs font-medium text-slate-300 mb-1.5">
            Nombre <span className="text-blue-400">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: Mariano"
            className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* CAMPO APELLIDO */}
        <div>
          <label htmlFor="apellido" className="block text-xs font-medium text-slate-300 mb-1.5">
            Apellido <span className="text-blue-400">*</span>
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            required
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Ej: Pérez"
            className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>

      </div>

      {/* FILA 2: CORREO ELECTRÓNICO */}
      <div>
        <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
          Correo Electrónico <span className="text-blue-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="ejemplo@correo.com"
          className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
        />
      </div>

      {/* FILA 3: MENSAJE O COMENTARIO */}
      <div>
        <label htmlFor="mensaje" className="block text-xs font-medium text-slate-300 mb-1.5">
          Comentario o Mensaje <span className="text-blue-400">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Contanos sobre tu proyecto o consulta sobre domótica..."
          className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
        ></textarea>
      </div>

      {/* BOTÓN DE ENVÍO */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 px-6 rounded-xl shadow-lg shadow-blue-500/20 transition-all"
      >
        <Send className="w-4 h-4" />
        <span>Enviar Mensaje</span>
      </button>

    </form>
  );
};