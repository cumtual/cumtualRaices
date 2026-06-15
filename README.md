
<p align="center">
  <img src="public/favicon.svg" alt="Cumtual Logo" width="80" />
</p>

<h1 align="center">Bienes Raíces</h1>

<p align="center">
  Plataforma web profesional para la venta y renta de propiedades inmobiliarias.
  <br />
  Construida con <strong>Astro 5</strong>, <strong>React 19</strong> y <strong>Tailwind CSS</strong>.
  <br />
  <br />
  <a href="https://github.com/luismtnez/bienesraices"><strong>Explorar documentación »</strong></a>
  <br />
  <br />
  <img src="https://img.shields.io/badge/Astro-5.0.5-BC52EE?style=for-the-badge&logo=astro" alt="Astro 5" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express-4.21-000000?style=for-the-badge&logo=express" alt="Express" />
</p>

---

## 📸 Capturas de Pantalla

<p align="center">
  <img src="public/imgConvertidas/anuncio1.webp" alt="Vista previa del proyecto" width="800" />
</p>

<p align="center">
  <em>Página principal con listado de propiedades, hero section y testimonios.</em>
</p>

---

## 🏗️ Tech Stack

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| [Astro](https://astro.build) | 5.0.5 | Framework principal (SSR + Static Generation) |
| [React](https://react.dev) | 19.0.0 | Componentes interactivos (menú móvil, slider) |
| [Tailwind CSS](https://tailwindcss.com) | 3.4.16 | Estilos utilitarios |
| [TypeScript](https://www.typescriptlang.org) | — | Tipado estricto |
| [Express](https://expressjs.com) | 4.21.2 | Servidor SSR para producción |
| [Nano Stores](https://github.com/nanostores/nanostores) | 0.11.3 | Estado global (menú hamburguesa) |
| [AOS](https://michalsnik.github.io/aos/) | 2.3.4 | Animaciones al hacer scroll |
| [Sharp](https://sharp.pixelplumbing.com) | — | Conversión de imágenes a WebP |

---

## ✨ Funcionalidades

- **🏠 Catálogo de propiedades** — Listado de casas y departamentos con imágenes, descripciones y precios
- **📄 Páginas dinámicas** — Ruta `/casas/[id]` con detalle completo de cada propiedad usando Markdown + frontmatter
- **📱 Diseño responsive** — Navegación adaptable: menú desktop + menú hamburguesa con slider lateral en móvil
- **🎨 Animaciones suaves** — Scroll animado con la librería AOS (fade, flip, zoom)
- **🔄 Transiciones de página** — Navegación sin recarga gracias al `ClientRouter` de Astro
- **🖼️ Imágenes optimizadas** — Conversión automática a WebP para mejor rendimiento
- **❌ Página 404 personalizada** — Experiencia de usuario incluso en errores
- **⚙️ SSR en producción** — Servidor Express listo para deploy en cualquier hosting Node.js

---

## 📂 Estructura del Proyecto

```
bienesRaices/
├── public/
│   ├── favicon.svg                  # Favicon
│   └── imgConvertidas/              # Imágenes en WebP (20 archivos)
├── src/
│   ├── assets/img/                  # Assets fuente (SVGs, imágenes originales)
│   ├── components/
│   │   ├── Header.astro             # Header con navegación + logo Cumtual
│   │   ├── Footer.astro             # Footer con redes sociales
│   │   ├── CumtualSVG.astro         # Logo Cumtual en SVG inline
│   │   ├── BurguerMenu.tsx          # Menú hamburguesa (React)
│   │   ├── Slider.tsx               # Panel lateral móvil (React)
│   │   └── MenuStore.ts             # Estado global del menú (NanoStore)
│   ├── content/
│   │   ├── casas/                   # Colección de propiedades (Markdown)
│   │   │   ├── casa-con-alberca.md
│   │   │   ├── casa-de-lujo-en-lago.md
│   │   │   └── casa-terminados-de-lujo.md
│   │   └── config.ts                # Schema de colecciones con Zod
│   ├── layouts/
│   │   └── Layout.astro             # Layout principal (meta, fuentes, AOS)
│   ├── pages/
│   │   ├── index.astro              # Página principal
│   │   ├── 404.astro                # Página de error personalizada
│   │   └── casas/[id].astro         # Detalle dinámico de propiedad
│   ├── styles/
│   │   └── globals.css              # Estilos globales + Tailwind
│   └── utils/
│       └── aos.js                   # Inicialización de AOS
├── astro.config.mjs                 # Configuración de Astro
├── tailwind.config.mjs              # Configuración de Tailwind (+ colores personalizados)
├── tsconfig.json                    # TypeScript strict mode
├── convertirImagen.js               # Script para convertir imágenes a WebP
├── run-server.mjs                   # Servidor Express para producción
└── package.json
```

---

## 🧭 Rutas del Sitio

| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/` | `src/pages/index.astro` | Página principal: hero, propiedades, blog, testimonios |
| `/casas/[id]` | `src/pages/casas/[id].astro` | Detalle de cada propiedad (generación estática con `getStaticPaths`) |
| `/404` | `src/pages/404.astro` | Página de error 404 personalizada |

### Navegación (Header)

| Enlace | Sección |
|--------|---------|
| Inicio | Home |
| Nosotros | Sobre la empresa |
| Anuncios | Listado de propiedades |
| Blog | Artículos y noticias |
| Contacto | Formulario de contacto |

---

## 📦 Dependencias

### Producción

| Paquete | Versión |
|---------|---------|
| `astro` | ^5.0.5 |
| `react` | ^19.0.0 |
| `react-dom` | ^19.0.0 |
| `@astrojs/react` | ^4.1.0 |
| `@astrojs/tailwind` | ^5.1.3 |
| `@astrojs/node` | ^9.0.0 |
| `tailwindcss` | ^3.4.16 |
| `express` | ^4.21.2 |
| `nanostores` | ^0.11.3 |
| `@nanostores/react` | ^0.8.2 |
| `aos` | ^2.3.4 |
| `@types/react` | ^19.0.1 |
| `@types/react-dom` | ^19.0.2 |

### Desarrollo

| Paquete | Versión |
|---------|---------|
| `@tailwindcss/typography` | ^0.5.15 |
| `@types/aos` | ^3.0.7 |

---

## 🚀 Comenzar

### Prerrequisitos

- Node.js 18+
- npm 9+

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/bienesraices.git
cd bienesraices

# Instalar dependencias
npm install

# (Opcional) Instalar Sharp para convertir imágenes a WebP
npm install sharp
```

### Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:4321](http://localhost:4321) en el navegador.

### Producción

```bash
# Construir el sitio
npm run build

# Iniciar servidor SSR con Express
node run-server.mjs
```

El servidor correrá en `http://localhost:3000` (o en el puerto definido por la variable de entorno `$PORT`).

---

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compila el sitio para producción en `dist/` |
| `npm run preview` | Previsualiza la build de producción |
| `npm run astro` | Ejecuta comandos CLI de Astro |
| `node convertirImagen.js` | Convierte imágenes JPG/PNG a WebP |
| `node run-server.mjs` | Inicia servidor Express con SSR |

---

## 🖼️ Conversión de Imágenes

El script `convertirImagen.js` usa **Sharp** para convertir imágenes de `src/assets/img/` a formato **WebP** y guardarlas en `public/imgConvertidas/`.

```bash
node convertirImagen.js
```

> **Nota:** Sharp no viene incluido en `package.json`. Instálalo manualmente con `npm install sharp`.

---

## 📝 Gestión de Contenido

Las propiedades se administran mediante **Astro Content Collections**. Cada propiedad es un archivo Markdown en `src/content/casas/` con frontmatter:

```yaml
---
title: "Casa con alberca"
author: "Luis Martinez"
img: "anuncio3.webp"
description: "Casa con alberca en zona muy exclusiva de la ciudad, a precio de remate."
---
```

Para agregar una nueva propiedad, solo crea un nuevo archivo `.md` en `src/content/casas/` con los campos requeridos.

### Schema (Zod)

```typescript
const casas = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    description: z.string(),
  }),
});
```

---

## 🎨 Personalización

### Colores de Marca

| Nombre | Hex | Uso |
|--------|-----|-----|
| `green-cumtual` | `#04E95F` | Botones, hover, enlaces |
| `blue-cumtual` | `#007BEA` | Títulos, autores |
| `bg-gray-cumtual` | `#191A1E` | Fondos oscuros |

### Fuentes

- **Montserrat** — Títulos y encabezados (Google Fonts)
- **Roboto** — Texto body (Google Fonts)

---

## ☁️ Deployment

El proyecto genera un build SSR en `dist/` listo para ser servido con el archivo `run-server.mjs`.

### Opciones de hosting

- **Vercel** — Compatible con Astro SSR
- **Railway / Render** — Servidores Node.js
- **DigitalOcean / VPS** — Con PM2 para gestión de procesos
- **Netlify** — Con adaptador de Astro para Netlify Functions

### Variables de Entorno

| Variable | Descripción | Default |
|----------|-------------|---------|
| `PORT` | Puerto del servidor Express | `3000` |

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit your changes (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es propiedad de **Cumtual**.

---

## 👨‍💻 Autor

**Luis Martinez**

<p align="center">
  <img src="src/assets/img/logo.svg" alt="Cumtual" width="150" />
</p>

---

<p align="center">
  Hecho con ❤️ por <a href="https://cumtual.com">Cumtual</a>
</p>
