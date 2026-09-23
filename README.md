<div align="center">
  <img src="src/images/Logo.png" alt="SKY FUSSION ANALYTICS" width="190" />

  # SKY FUSSION ANALYTICS

  **Datos hídricos convertidos en decisiones inteligentes.**

  Plataforma web para analizar, visualizar y anticipar escenarios relacionados con la gestión del agua.

  <p>
    <a href="https://github.com/EdwarIbague23/SKYFUSSION-LANDING-PAGE">Repositorio</a>
    ·
    <a href="#instalación">Instalación</a>
    ·
    <a href="#despliegue">Despliegue</a>
  </p>
</div>

---

## Sobre el proyecto

**SKY FUSSION ANALYTICS** es una landing page futurista para presentar una solución de gestión hídrica inteligente dirigida a entidades públicas, organizaciones ambientales, universidades y equipos que necesitan convertir información hidrológica en acciones más claras y oportunas.

La experiencia comunica el problema, la propuesta de valor, el impacto, las funcionalidades, las tecnologías, el modelo de negocio, los aliados y el equipo detrás de la solución.

## Lo que incluye

- Hero principal con propuesta de valor y dashboard visual.
- Métricas animadas de impacto y monitoreo.
- Explicación del proyecto, la problemática y el objetivo.
- Catálogo inteligente, predicción operativa, seguridad y gestión institucional.
- Stack tecnológico de la solución.
- Modelo de negocio con SaaS, licenciamiento, consultoría, marketplace y alianzas.
- Secciones de aliados y equipo multidisciplinario.
- Formulario de solicitud de demo.
- Menú hamburguesa responsive con logo y navegación por secciones.
- Diseño adaptable para móvil, tablet y escritorio.

## Experiencia visual

La interfaz combina una identidad tecnológica con una lectura clara y profesional:

- Animación de entrada global.
- Reveals al hacer scroll.
- Contadores y gráficos animados.
- Hover states y microinteracciones.
- Paneles tipo glassmorphism con contraste accesible.
- Fondo atmosférico con grid, auroras y brillos controlados.
- Animaciones reducidas automáticamente con `prefers-reduced-motion`.
- Menú móvil rápido, sólido y con scroll interno.

## Tecnologías

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111827" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-13-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Lucide React
- React Icons
- JavaScript / JSX

## Instalación

Requisitos: [Node.js](https://nodejs.org/) y npm.

```bash
git clone https://github.com/EdwarIbague23/SKYFUSSION-LANDING-PAGE.git
cd SKYFUSSION-LANDING-PAGE
npm install
```

## Desarrollo

Inicia el servidor local con:

```bash
npm run dev
```

Vite mostrará la URL local, normalmente:

```text
http://localhost:5173
```

## Validación y producción

Generar el build de producción:

```bash
npm run build
```

Previsualizar el build:

```bash
npm run preview
```

Ejecutar ESLint:

```bash
npm run lint
```

## Despliegue

El proyecto está preparado para publicar el build mediante `gh-pages`:

```bash
npm run deploy
```

El comando ejecuta el build y publica la carpeta `dist` en la rama de despliegue configurada.

## Estructura

```text
src/
├── components/
│   ├── About.jsx
│   ├── BusinessModel.jsx
│   ├── Contact.jsx
│   ├── Features.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Partners.jsx
│   ├── StatsCounter.jsx
│   ├── Team.jsx
│   └── TechStack.jsx
├── hooks/
│   ├── useCountUp.js
│   └── useScrollAnimation.js
├── images/
├── App.jsx
├── index.css
└── main.jsx
```

## Guía rápida para el equipo

Después de clonar el proyecto:

```bash
npm install
npm run dev
```

Para preparar una versión publicable:

```bash
npm run build
```

La carpeta `node_modules` no se versiona y se genera localmente con `npm install`. La carpeta `dist` tampoco se versiona porque se crea automáticamente durante el build.

## Equipo

Proyecto desarrollado por el equipo de **SKY FUSSION ANALYTICS** para presentar una solución tecnológica orientada a la gestión inteligente y sostenible del agua.

---

<div align="center">
  <sub>SKY FUSSION ANALYTICS · Gestión hídrica inteligente</sub>
</div>
