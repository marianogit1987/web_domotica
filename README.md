# 🏠 VitalHome - Landing Page Promocional de Domótica

Una landing page moderna, responsiva y de alto rendimiento desarrollada para **VitalHome**, enfocada en la promoción de servicios de automatización de hogares y espacios corporativos. Construida con una **arquitectura por capas** desacoplada y un diseño visual en **Tema Oscuro (Dark Mode)**.

---

## 🛠️ Tecnologías y Librerías Utilizadas

El proyecto utiliza un stack tecnológico moderno optimizado para rendimiento y escalabilidad:

* **[React 18](https://react.dev/)**: Biblioteca principal para la construcción de interfaces de usuario.
* **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático para un código más robusto y mantenible.
* **[Vite](https://vitejs.dev/)**: Herramienta de construcción rápida (*build tool*) y servidor de desarrollo.
* **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework de CSS para estilos utilitarios responsivos.
* **[Lucide React](https://lucide.dev/)**: Conjunto de íconos vectoriales limpios y ligeros.

---

## 📂 Estructura de Directorios (Arquitectura por Capas)

El proyecto implementa una separación estricta de responsabilidades entre la lógica de datos y la interfaz de usuario:

```text
web_domotica/
├── public/                     # Recursos estáticos públicos
├── src/
│   ├── assets/                 # Recursos gráficos globales (Imágenes, logos)
│   │   └── images/
│   ├── logic/                  # CAPA DE LÓGICA (Independiente de la UI)
│   │   ├── data/               # Datos estáticos (companyData.ts, servicesData.ts)
│   │   └── models/             # Interfaces e interfaces de TypeScript (Service.ts, CompanyInfo.ts)
│   ├── presentation/           # CAPA DE PRESENTACIÓN (Interfaz visual)
│   │   ├── components/         # Componentes reutilizables (Navbar, ServiceCard, ContactForm, ContactModal, Footer)
│   │   ├── sections/           # Secciones principales (AboutUsSection, ServicesSection, ContactSection)
│   │   └── styles/             # Hojas de estilo globales
│   ├── App.tsx                 # Componente raíz de la aplicación
│   ├── main.tsx                # Punto de entrada de React
│   └── index.css               # Importación e inicialización de Tailwind CSS
├── package.json                # Gestión de dependencias y scripts
├── vite.config.ts              # Configuración de Vite y plugins
└── README.md                   # Documentación del proyecto


🚀 Guía de Instalación y Ejecución Local
Seguí estos sencillos pasos para clonar, instalar las dependencias y ejecutar el proyecto en tu entorno local:

1. Requisitos Previos
Asegúrate de tener instalado en tu equipo:

Node.js (versión 18.0 o superior)

npm (incluido junto con Node.js) o pnpm / yarn

2. Clonar o Descargar el Proyecto
Si estás utilizando Git, cloná el repositorio en tu máquina:

Bash
git clone [https://github.com/tu-usuario/web_domotica.git](https://github.com/tu-usuario/web_domotica.git)
O simplemente descargá y descomprimí el archivo .zip del proyecto en tu computadora.

3. Navegar a la Carpeta del Proyecto
Abre la terminal (CMD, PowerShell o Git Bash) y posicionate dentro de la carpeta:

Bash
cd web_domotica
4. Instalación de Dependencias e Instalación de Librerías
Para instalar automáticamente todas las librerías requeridas por el proyecto (react, typescript, tailwindcss, lucide-react, etc.), ejecutá:

Bash
npm install
(En caso de que estés agregando manualmente las librerías a un proyecto limpio desde cero, los comandos utilizados fueron):

Bash
# Instalación de librerías de UI e íconos
npm install lucide-react clsx tailwind-merge

# Instalación de Tailwind CSS v4 para Vite
npm install -D tailwindcss @tailwindcss/vite
5. Ejecutar el Servidor de Desarrollo
Una vez finalizada la instalación de paquetes, inicia el servidor local de Vite:

Bash
npm run dev
La terminal te devolverá una URL local (por ejemplo http://localhost:5173/). Abrí esa dirección en tu navegador web para visualizar la aplicación en tiempo real.

📦 Compilación para Producción (Build)
Para generar los archivos estáticos optimizados y listos para desplegar en producción (Vercel, Netlify, Firebase Hosting, etc.):

Bash
npm run build
Esto creará una carpeta optimizada llamada dist/ en la raíz del proyecto.

📱 Características Principales
🌙 Diseño Tema Oscuro (Dark Mode): Estética tecnológica en paletas Slate/Blue.

📱 Totalmente Responsivo: Menú hamburguesa interactivo en móviles y grillas adaptativas.

⚡ Despliegue de Información: Tarjetas de servicio compactas con opción de "Saber más".

💬 Modal de Contacto Interactivo: Formulario flotante desplegable desde cualquier botón de contacto.