# CENSA Web — Guía de desarrollo para Claude

## Proyecto
Sitio corporativo para CENSA, empresa de servicios eléctricos media tensión.
Sector: industrial eléctrico | Audiencia: ejecutivos B2B | País: México (Nuevo León)

## Stack (NO cambiar sin validar)
- **Framework:** Astro 4.x (SSG, static)
- **Styling:** Tailwind CSS 4.x con custom properties CSS
- **Animaciones:** GSAP 3 + ScrollTrigger + Lenis (smooth scroll)
- **Transiciones:** Astro View Transitions API
- **SEO:** astro-seo + @astrojs/sitemap
- **Deploy:** Cloudflare Pages

## Reglas de código
- Lenguaje de variables/componentes: **inglés**
- Lenguaje del copy/contenido visible: **español**
- TypeScript estricto en archivos `.ts` y `.tsx`
- Componentes Astro: usar Islands (`client:load` / `client:visible`) SOLO cuando hay interactividad real
- Imágenes: siempre WebP + atributo `alt` descriptivo en español
- Animaciones: siempre incluir bloque `prefers-reduced-motion` para accesibilidad

## Paleta de colores (tokens)
```
--color-red: #CC0000       /* Brand primary */
--color-black: #0A0A0A     /* Fondos oscuros */
--color-gray-900: #111111  /* Secciones alternas */
--color-gray-100: #F2F2F2  /* Fondos claros */
--color-white: #FFFFFF     /* Texto sobre oscuro */
--color-amber: #FFD100     /* Acento eléctrico */
```

## Tipografía
- Display: Barlow Condensed (700, 900) — heroes y números grandes
- Heading/Body: Inter (400, 500, 600, 700)
- Mono: JetBrains Mono (400) — datos técnicos

## Datos reales del cliente
- Dirección: San Isaac 1201, Residencial San Cristobal 3er Sector, 66478 San Nicolás de los Garza, N.L.
- Teléfono: 812 2358545
- Email: admon@censa.mx

## Referencia de diseño
https://cipres-web.vercel.app/ — estructura y nivel de motion de referencia

## Lo que NO hacer
- No crear archivos de documentación extra (solo CLAUDE.md y PLAN-MAESTRO.md)
- No agregar librerías sin revisar si GSAP o CSS nativo puede hacer lo mismo
- No usar React/Vue — Astro puro, HTML/CSS/JS vanilla en Islands si necesario
- No agregar backend, APIs ni base de datos — sitio 100% estático
- No inventar datos de contacto — usar siempre los datos reales del cliente
- No hacer commit sin validar con el usuario primero
