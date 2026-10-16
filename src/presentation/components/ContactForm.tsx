import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

/**
 * Componente del Formulario de Contacto en tema claro.
 */
export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    setIsSubmitted(true);
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      mensaje: ''
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center shadow-sm animate-in fade-in duration-300">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-emerald-100 rounded-full">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">¡Mensaje enviado con éxito!</h3>
        <p className="text-slate-600 text-sm mb-6">
          Gracias por contactarte con nosotros. Nos comunicaremos a la brevedad.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold py-2 px-4 rounded-xl transition-all cursor-pointer"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 sm:space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Nombre <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: Mariano"
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
          />
        </div>

        <div>
          <label htmlFor="apellido" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Apellido <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            required
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Ej: Pérez"
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Correo Electrónico <span className="text-blue-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="ejemplo@correo.com"
          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Comentario o Mensaje <span className="text-blue-600">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Contanos sobre tu proyecto o consulta..."
          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 px-6 rounded-xl shadow-md transition-all cursor-pointer"
      >
        <Send className="w-4 h-4" />
        <span>Enviar Mensaje</span>
      </button>
    </form>
  );
};