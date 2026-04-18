# Plan Maestro — Sitio Corporativo CENSA
> Sector eléctrico media tensión | Astro + GSAP | Calidad ejecutiva
> Fecha inicio: 2026-04-18

---

## 1. IDENTIDAD VISUAL Y DESIGN SYSTEM

### Paleta de color
| Token           | Hex       | Uso                                      |
|-----------------|-----------|------------------------------------------|
| `--red`         | `#CC0000` | Primary brand, CTAs, highlights          |
| `--black`       | `#0A0A0A` | Fondos oscuros, hero                     |
| `--gray-900`    | `#111111` | Secciones alternas oscuras               |
| `--gray-100`    | `#F2F2F2` | Fondos claros                            |
| `--white`       | `#FFFFFF` | Texto sobre oscuro, fondos               |
| `--amber`       | `#FFD100` | Acento eléctrico sutil (iconos, detalles)|

### Tipografía
| Rol         | Fuente               | Peso    | Uso                         |
|-------------|----------------------|---------|-----------------------------|
| Display     | Barlow Condensed     | 700/900 | Heroes, números grandes     |
| Heading     | Inter                | 600/700 | Títulos de sección          |
| Body        | Inter                | 400/500 | Párrafos, UI                |
| Mono/Técnica| JetBrains Mono       | 400     | Datos técnicos, specs       |

### Logo
- SVG vectorial extraído del PDF (silueta negra + "CEN" rojo + "SA" blanco)
- Versión light (para fondos oscuros): "SA" en blanco
- Versión dark (para fondos claros): "SA" en negro
- Favicon: ícono mínimo de la silueta

---

## 2. ARQUITECTURA DEL PROYECTO

```
censa-web/
├── public/
│   ├── assets/
│   │   ├── logo/          # SVG logo variantes
│   │   ├── images/        # WebP optimizadas
│   │   ├── videos/        # Placeholders MP4 (semana 2: reales)
│   │   └── icons/         # SVG íconos sector eléctrico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer, Nav
│   │   ├── sections/      # Una carpeta por sección del sitio
│   │   ├── ui/            # Button, Card, Badge, Modal
│   │   └── animations/    # GSAP wrappers reutilizables
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro    # Single page (scroll)
│   ├── styles/
│   │   ├── global.css     # Tailwind base + CSS custom props
│   │   └── animations.css # Keyframes CSS nativos
│   ├── data/
│   │   ├── services.ts    # Datos de servicios
│   │   ├── projects.ts    # Datos de proyectos
│   │   └── company.ts     # Info empresa (contacto, etc.)
│   └── utils/
│       └── gsap.ts        # GSAP config + helpers
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

---

## 3. STACK TECNOLÓGICO

### Core
| Librería              | Versión  | Justificación                              |
|-----------------------|----------|--------------------------------------------|
| Astro                 | 4.x      | SSG, performance, zero JS por defecto      |
| TypeScript            | 5.x      | Type safety en data layer                  |
| Tailwind CSS          | 4.x      | Utility-first, design tokens nativos       |

### Animaciones & Motion
| Librería              | Versión  | Uso                                        |
|-----------------------|----------|--------------------------------------------|
| GSAP                  | 3.x      | Animaciones scroll-driven profesionales    |
| @gsap/ScrollTrigger   | 3.x      | Pin sections, scrub, parallax              |
| Lenis                 | 1.x      | Smooth scroll cinematico                   |
| Astro View Transitions| built-in | Transiciones entre rutas (si multipage)    |

### SEO & Performance
| Librería              | Uso                                              |
|-----------------------|--------------------------------------------------|
| @astrojs/sitemap      | Sitemap.xml automático                           |
| astro-seo             | Meta tags, OG, Twitter cards                    |
| @astrojs/image / sharp| Optimización automática WebP + AVIF             |

### Deploy
| Herramienta           | Uso                                              |
|-----------------------|--------------------------------------------------|
| Cloudflare Pages      | Hosting estático, CDN global, HTTPS automático   |
| Wrangler CLI          | Deploy local → Cloudflare                        |

---

## 4. SECCIONES DEL SITIO (Estructura completa)

### 4.1 HEADER / NAV (fijo, glassmorphism sobre scroll)
- Logo CENSA (SVG)
- Links: Inicio, Servicios, Proyectos, Nosotros, Contacto
- CTA Button: "Solicitar Servicio" (rojo)
- Comportamiento: transparente en hero → sólido oscuro al hacer scroll

### 4.2 HERO SECTION
- **Tipo:** Full viewport, video placeholder de fondo (loop, muted)
- **Overlay:** Gradiente oscuro sobre video
- **Contenido:**
  - Badge: "Especialistas en Media Tensión"
  - H1: "Infraestructura eléctrica que no falla"
  - Subtext: Descripción ejecutiva de CENSA
  - CTAs: "Ver Servicios" + "Contactar"
  - Scroll indicator animado
- **Motion:** Fade-in staggered de texto al cargar, parallax sutil en scroll

### 4.3 WHY CHOOSE US (Por qué elegirnos)
- **Layout:** Grid 5 columnas (desktop) / 2 cols (mobile)
- **5 Pilares:**
  1. +15 años de experiencia
  2. Certificación NOM y CFE
  3. Respuesta de emergencia 24/7
  4. Cobertura regional Nuevo León
  5. Cero accidentes en operación
- **Motion:** Cards con reveal al entrar en viewport (stagger GSAP)

### 4.4 NUESTROS SERVICIOS
- **Layout:** Tabs interactivos + panel de detalle con imagen
- **6 Servicios:**
  1. Instalación de líneas media tensión
  2. Mantenimiento preventivo y correctivo
  3. Subestaciones eléctricas
  4. Respuesta a emergencias
  5. Ingeniería y proyectos
  6. Inspección y pruebas
- **Motion:** Transición suave entre tabs, imagen con scale-in

### 4.5 PROCESO DE TRABAJO
- **Layout:** 4 pasos numerados en línea horizontal (desktop) / vertical (mobile)
- **Pasos:**
  - 01 → Evaluación y diagnóstico
  - 02 → Ingeniería y planeación
  - 03 → Ejecución certificada
  - 04 → Entrega y garantía
- **Motion:** Línea progresiva animada que conecta los pasos (scroll-driven)

### 4.6 PROYECTOS REALIZADOS
- **Layout:** Grid de cards 3 columnas con imagen + datos técnicos
- **3 Proyectos placeholder:**
  - Proyecto industrial (voltaje, km de línea, año)
  - Proyecto infraestructura urbana
  - Proyecto subestación comercial
- **Motion:** Cards con parallax sutil, hover con elevación

### 4.7 CERTIFICACIONES Y NORMAS
- **Layout:** Row de logos/badges de certificaciones
- **Contenido:** NOM-001-SEDE, CFE, STPS, ISO (si aplica)
- **Motion:** Fade-in horizontal al entrar en viewport

### 4.8 TESTIMONIALES
- **Layout:** Carousel / slider con cita + nombre + empresa
- **Motion:** Transición slide suave, auto-play

### 4.9 CTA FINAL ("Inicia tu proyecto")
- **Diseño:** Sección de fondo oscuro/rojo, texto grande
- **Copy:** "¿Tienes un proyecto de media tensión? Hablemos."
- **CTAs:** "Contactar ahora" + datos de contacto directos
- **Motion:** Reveal cinematico al entrar

### 4.10 FOOTER
- Logo + descripción breve
- Links: Menú principal + Legales
- Dirección: San Isaac 1201, San Nicolás de los Garza, N.L.
- Tel: 812 2358545 | Email: admon@censa.mx
- Copyright

---

## 5. ANIMACIONES Y MOTION — ESPECIFICACIÓN

### Principios
- **Propósito primero:** cada animación refuerza jerarquía o guía la atención
- **Performance:** solo will-change en elementos críticos, GPU-accelerated transforms
- **Accesibilidad:** `prefers-reduced-motion` respetado en todos los keyframes

### Implementación por tipo

#### Scroll-driven (GSAP ScrollTrigger)
```
- Hero parallax: background-y a 0.3x de scroll speed
- Section reveals: opacity 0→1 + translateY 40px→0 con scrub
- Process line: scaleX 0→1 sincronizado con scroll
- Counter numbers: incremento animado al entrar en viewport
```

#### Microinteracciones (CSS + GSAP hover)
```
- Nav links: underline slide desde izquierda
- Botones CTA: scale 1→1.04 + sombra roja
- Cards: translateY -8px + border-top rojo en hover
- Tab activo: indicador slide suave
```

#### Entrada de página (Astro View Transitions)
```
- Fade global entre rutas
- Hero content: slide-up cinematico al load
```

#### Smooth scroll (Lenis)
```
- lerp: 0.08 (cinematico, no demasiado lento)
- wheelMultiplier: 1.2
- Integrado con GSAP ticker
```

---

## 6. SEO — ESPECIFICACIÓN

### Meta tags (por página)
- `<title>` único y descriptivo
- `<meta description>` 150-160 chars
- Open Graph: og:title, og:description, og:image, og:url
- Twitter Card: summary_large_image
- Canonical URL
- lang="es" en `<html>`

### Datos estructurados (JSON-LD)
- `Organization`: nombre, url, logo, contacto, sameAs redes
- `LocalBusiness`: dirección, teléfono, horario
- `Service`: para cada servicio principal

### Técnico
- Sitemap.xml automático (@astrojs/sitemap)
- robots.txt
- Imágenes con alt descriptivo
- Semantic HTML: `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Preload de fuentes críticas
- Lazy load en imágenes fuera de viewport

### Keywords target (sector eléctrico Nuevo León)
- "empresa eléctrica media tensión Monterrey"
- "mantenimiento subestaciones Nuevo León"
- "instalación líneas media tensión"
- "servicios eléctricos industriales CFE"

---

## 7. COPY / CONTENIDO — PLAN DE GENERACIÓN

Todo el copy será generado en español adaptado al sector eléctrico industrial:

| Sección         | Contenido a generar                                    |
|-----------------|--------------------------------------------------------|
| Hero            | Tagline + H1 + subtext ejecutivo (3-4 líneas)          |
| Why Us          | 5 pilares con título + descripción corta (2 líneas)    |
| Servicios       | 6 servicios con nombre + descripción técnica + icono   |
| Proceso         | 4 pasos con título + descripción metodológica          |
| Proyectos       | 3 proyectos ficticios con datos técnicos realistas     |
| Testimoniales   | 3 testimonios de clientes (roles: gerente, director)   |
| CTA Final       | Headline + subtext + urgencia                          |
| SEO texts       | Meta descriptions, alt texts, JSON-LD                  |

---

## 8. CONFIGURACIÓN DE CLAUDE (settings.json)

### Plugins habilitados
- `frontend-design`: para generación de componentes UI de calidad
- Considerar activar hooks para auto-format y lint post-edición

### CLAUDE.md del proyecto (a crear)
```markdown
# CENSA Web — Claude Config
- Stack: Astro 4, Tailwind 4, GSAP 3, TypeScript
- Idioma del código: inglés (variables, componentes)
- Idioma del copy: español (contenido visible)
- Animaciones siempre con prefers-reduced-motion
- Imágenes: siempre WebP + alt en español
- No crear archivos extra sin necesidad
- Componentes Astro: Islands solo cuando hay interactividad real
```

---

## 9. CONFIGURACIÓN CLOUDFLARE PAGES

### Archivos a crear
- `wrangler.toml` — configuración del proyecto
- `_headers` en `/public` — cache headers, security headers
- `_redirects` en `/public` — reglas de redirect (www → non-www, etc.)

### Build settings en Cloudflare
```
Build command: npm run build
Build output directory: dist
Node.js version: 20.x
```

### Headers de seguridad (`_headers`)
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=()
```

---

## 10. ROADMAP SEMANA 1 — ORDEN DE EJECUCIÓN

### Día 1 — Setup y fundamentos
- [ ] Init proyecto Astro + TypeScript
- [ ] Configurar Tailwind CSS v4
- [ ] Instalar GSAP, Lenis, astro-seo, @astrojs/sitemap
- [ ] Crear CLAUDE.md del proyecto
- [ ] BaseLayout.astro con SEO base
- [ ] Design tokens en CSS custom properties
- [ ] Fuentes (Barlow Condensed + Inter via @fontsource)

### Día 2 — Header + Hero
- [ ] Componente Header/Nav (sticky, glassmorphism)
- [ ] Hero section (video placeholder, texto animado)
- [ ] Integrar Lenis smooth scroll
- [ ] Hero entry animation (GSAP)

### Día 3 — Secciones Why + Services + Process
- [ ] WhyUs component (grid de pilares)
- [ ] Services component (tabs interactivos)
- [ ] WorkProcess component (línea animada)
- [ ] ScrollTrigger reveals para las 3 secciones

### Día 4 — Projects + Certifications + Testimonials
- [ ] Projects grid con cards
- [ ] Certifications badges row
- [ ] Testimonials carousel
- [ ] Animaciones de entrada para cada sección

### Día 5 — CTA + Footer + SEO
- [ ] CTA final section
- [ ] Footer completo con datos reales
- [ ] JSON-LD Organization + LocalBusiness
- [ ] Meta tags completos
- [ ] Sitemap + robots.txt

### Día 6 — Polish y optimización
- [ ] Revisar todas las animaciones (timing, easing)
- [ ] Optimizar imágenes (WebP, lazy load)
- [ ] Responsive review (mobile, tablet, desktop)
- [ ] Performance audit (Lighthouse)
- [ ] prefers-reduced-motion en todos los componentes

### Día 7 — Preparación deploy
- [ ] Wrangler config + Cloudflare setup
- [ ] Variables de entorno si aplica
- [ ] Test build producción
- [ ] Preview deploy en Cloudflare Pages
- [ ] Entrega de preview al cliente

---

## 11. ASSETS PLACEHOLDER — SEMANA 1

### Videos (placeholder)
- Hero background: `hero-bg.mp4` — video stock de trabajadores eléctricos o subestación
- Sugerencia fuente: Pexels, Pixabay (libres de derechos)

### Imágenes
- Proyectos: 3 imágenes de infraestructura eléctrica (subestaciones, postes, líneas)
- Servicios: 6 imágenes técnicas por servicio
- Proceso: 4 imágenes de etapas de trabajo
- Formato: WebP, min 1200px ancho

### Íconos (inline SVG)
- Set eléctrico: cable, subestación, casco, voltímetro, torre HV, herramienta

---

## NOTAS FINALES

- El sitio es 100% estático — cero backend, cero base de datos
- Formulario de contacto: usar Cloudflare Web3Forms o Formspree (sin backend)
- Analytics: Cloudflare Web Analytics (privacy-first, sin cookies)
- Dominio: pendiente definir (¿censa.mx ya existe?)
