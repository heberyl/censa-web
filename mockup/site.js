/* ─────────────────────────────────────────────────────────
   CENSA mockup · Site template
   A single HTML generator that renders the full site.
   Used 6 times (3 themes × 2 viewports) inside iframes.
   ───────────────────────────────────────────────────────── */

// Shared data (mirrors real Astro data files)
const DATA = {
  services: [
    { id:'instalacion', n:'01', t:'Instalación de Líneas de MT', sub:'Media Tensión',
      desc:'Diseño, suministro e instalación de líneas aéreas y subterráneas de media tensión conforme a CFE y NOM-001-SEDE. Calidad, seguridad y cumplimiento normativo en cada proyecto.',
      features:['Líneas aéreas 6 kV — 34.5 kV','Cables subterráneos XLPE','Herrajes certificados','Pruebas de puesta en servicio'],
      specs:[{l:'Voltaje',v:'34.5 kV'},{l:'Tipo',v:'Aérea / Subt.'},{l:'Norma',v:'NOM-001'}] },
    { id:'mantenimiento', n:'02', t:'Mantenimiento Preventivo y Correctivo', sub:'Mantenimiento',
      desc:'Programas de mantenimiento para líneas, subestaciones y equipos eléctricos. Minimizamos tiempos de paro y maximizamos la vida útil de sus activos.',
      features:['Termografía infrarroja','Pruebas eléctricas a equipos','Limpieza y reapriete','Reportes técnicos detallados'],
      specs:[{l:'Ciclo',v:'6-12 meses'},{l:'Técnicas',v:'14+'},{l:'Reporte',v:'48h'}] },
    { id:'subestaciones', n:'03', t:'Subestaciones Eléctricas', sub:'Subestaciones',
      desc:'Construcción, modernización y mantenimiento de subestaciones de distribución. Desde ingeniería básica hasta puesta en marcha, con equipos de alta calidad.',
      features:['Subestaciones aéreas y en caseta','Transformadores hasta 5 MVA','Tableros de protección','Puesta en servicio certificada'],
      specs:[{l:'Capacidad',v:'5 MVA'},{l:'Tipos',v:'3'},{l:'Puesta',v:'Cert.'}] },
    { id:'emergencias', n:'04', t:'Respuesta a Emergencias 24/7', sub:'Emergencias',
      desc:'Atención a emergencias eléctricas las 24 horas, los 365 días del año. Cuadrillas especializadas y equipamiento completo para restaurar el suministro rápido.',
      features:['Tiempo de respuesta < 2h','Cuadrillas especializadas','EPP certificado','Coordinación con CFE'],
      specs:[{l:'Respuesta',v:'< 2h'},{l:'Disponible',v:'24/7'},{l:'Cobertura',v:'N.L.'}] },
    { id:'ingenieria', n:'05', t:'Ingeniería y Proyectos', sub:'Ingeniería',
      desc:'Desarrollo de proyectos ejecutivos de ingeniería eléctrica, desde anteproyecto hasta planos constructivos y gestión de permisos.',
      features:['Estudios de factibilidad','Diseño de redes','Gestión de permisos CFE','Supervisión de obras'],
      specs:[{l:'Permisos',v:'CFE+STPS'},{l:'Proyectos',v:'200+'},{l:'As-built',v:'Incl.'}] },
    { id:'inspeccion', n:'06', t:'Inspección y Pruebas', sub:'Inspección',
      desc:'Inspecciones técnicas y pruebas de laboratorio a equipos eléctricos de MT. Dictámenes STPS y NOM-001-SEDE para regularización de instalaciones.',
      features:['Aislamiento y rigidez','Resistencia a tierra','Verificación protecciones','Dictámenes STPS/ANCE'],
      specs:[{l:'Pruebas',v:'18+'},{l:'Norma',v:'NOM-001'},{l:'Dictamen',v:'48h'}] },
  ],
  projects: [
    { id:'p1', cat:'Industrial', loc:'Parque Ind. Apodaca, N.L.', year:'2024',
      t:'Red de Distribución Industrial', d:'Red de media tensión para parque industrial con 18 usuarios. Subestación principal + 4.2 km de línea aérea + medición centralizada.',
      voltage:'13.2 kV', capacity:'2.5 MVA', tags:['MT','Industrial','Subestación'] },
    { id:'p2', cat:'Comercial', loc:'San Nicolás, N.L.', year:'2023',
      t:'Subestación Centro Comercial', d:'Subestación en caseta para plaza comercial de 35,000 m². Transformador 1 MVA + tablero de protecciones + UPS estático 160 kVA.',
      voltage:'6.6 kV', capacity:'1.0 MVA', tags:['Subestación','Comercial'] },
    { id:'p3', cat:'Infraestructura', loc:'Guadalupe, N.L.', year:'2024',
      t:'Línea Subterránea Urbana', d:'Línea subterránea de MT para regularización de red urbana habitacional. Cable XLPE 13.2 kV + 3 cámaras de transformación + telemedición.',
      voltage:'13.2 kV', capacity:'3.8 km', tags:['Subterráneo','Urbano'] },
  ],
  certs: [
    { abbr:'NOM', n:'NOM-001-SEDE', d:'Instalaciones eléctricas' },
    { abbr:'CFE', n:'CFE Proveedor',  d:'Comisión Federal de Electricidad' },
    { abbr:'STPS', n:'STPS',           d:'Seguridad y salud en el trabajo' },
    { abbr:'ANCE', n:'ANCE',           d:'Verificación de instalaciones' },
    { abbr:'ISO',  n:'ISO 9001',       d:'Gestión de calidad' },
  ],
  testimonials: [
    { i:'R', n:'Ing. Roberto Garza', r:'Gerente de Mantenimiento', c:'Industrias del Noreste S.A.',
      q:'CENSA realizó la instalación completa de nuestra red de distribución interna en menos tiempo del estimado, sin interrupciones en nuestra operación. La coordinación con CFE fue impecable.' },
    { i:'L', n:'Arq. Laura Martínez', r:'Dir. de Operaciones', c:'Desarrolladora Plaza Norte',
      q:'Contratamos a CENSA para el mantenimiento anual de subestaciones y superaron expectativas. Reportes técnicos detallados y observaciones atendidas en tiempo récord.' },
    { i:'C', n:'Lic. Carlos Hernández', r:'Director General', c:'Logística Express MTY',
      q:'Tuvimos una falla de MT un domingo por la noche y CENSA respondió en menos de 90 minutos. Restauraron el servicio antes del turno del lunes.' },
  ],
  stats: [
    { v:'+15', l:'Años de experiencia' },
    { v:'+200', l:'Proyectos completados' },
    { v:'0', l:'Accidentes en operación' },
    { v:'24/7', l:'Atención de emergencias' },
  ],
  nav: ['Servicios','Proceso','Proyectos','Certificaciones','Contacto'],
};

// SVG icons
const ICO = {
  arrow: `<svg class="arr" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  phone: `<svg viewBox="0 0 20 20" width="18" height="18" fill="none"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  mail:  `<svg viewBox="0 0 20 20" width="18" height="18" fill="none"><path d="M2.94 4h14.12A1.94 1.94 0 0119 5.94v8.12A1.94 1.94 0 0117.06 16H2.94A1.94 1.94 0 011 14.06V5.94A1.94 1.94 0 012.94 4z" stroke="currentColor" stroke-width="1.5"/><path d="M1 5.5l9 6 9-6" stroke="currentColor" stroke-width="1.5"/></svg>`,
  pin:   `<svg viewBox="0 0 20 20" width="18" height="18" fill="none"><path d="M10 2C6.686 2 4 4.686 4 8c0 4.875 6 10 6 10s6-5.125 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" stroke="currentColor" stroke-width="1.5"/></svg>`,
  wa:    `<svg class="wa" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.88 11.9L4 20l4.22-1.1a7.94 7.94 0 003.82.97h.01A7.94 7.94 0 0020 11.94a7.88 7.88 0 00-2.4-5.62zm-5.55 12.2a6.6 6.6 0 01-3.36-.92l-.24-.14-2.5.66.67-2.44-.16-.25a6.58 6.58 0 01-1-3.49 6.6 6.6 0 016.6-6.6 6.56 6.56 0 014.67 1.94 6.56 6.56 0 011.93 4.67 6.6 6.6 0 01-6.6 6.57zm3.62-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.84-.3-1.6-.98-.6-.53-1-1.18-1.11-1.38-.11-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.11.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.44-1.07-.61-1.46-.16-.39-.32-.33-.44-.34H9.18c-.13 0-.35.05-.53.25s-.7.68-.7 1.66.72 1.92.82 2.05c.1.13 1.42 2.16 3.44 3.03 1.2.52 1.67.56 2.27.47.37-.05 1.17-.48 1.34-.94.17-.46.17-.86.12-.94-.05-.08-.18-.13-.38-.23z"/></svg>`,
  chev:  `<svg viewBox="0 0 16 16" width="14" height="14" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  bolt:  `<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  shield:`<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M12 2l9 3v6c0 5.25-3.75 9.75-9 11-5.25-1.25-9-5.75-9-11V5l9-3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  grid:  `<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="1.6"/><rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="1.6"/><rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="1.6"/></svg>`,
};

// Placeholder image blocks with iconographic content (electric/industrial themed)
function phBlock(label, variant = 'a') {
  const variants = {
    a: `
      <div class="ph" data-label="${label}" style="position:absolute;inset:0">
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;opacity:.5">
          <g fill="none" stroke="rgba(0,0,0,.35)" stroke-width="1.5">
            <path d="M20 240 L60 40 L100 240 L140 40 L180 240" />
            <path d="M200 260 L240 60 L280 260 L320 60 L360 260" />
            <circle cx="60" cy="40" r="5" fill="rgba(0,0,0,.3)"/>
            <circle cx="140" cy="40" r="5" fill="rgba(0,0,0,.3)"/>
            <circle cx="240" cy="60" r="5" fill="rgba(0,0,0,.3)"/>
            <circle cx="320" cy="60" r="5" fill="rgba(0,0,0,.3)"/>
            <path d="M30 50 L190 50 M210 70 L370 70" stroke-dasharray="3,4"/>
          </g>
        </svg>
      </div>`,
    b: `
      <div class="ph" data-label="${label}" style="position:absolute;inset:0">
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;opacity:.45">
          <g fill="none" stroke="rgba(0,0,0,.35)" stroke-width="1.4">
            <rect x="60" y="80" width="280" height="160" />
            <rect x="90" y="110" width="100" height="100" />
            <rect x="210" y="110" width="100" height="100" />
            <path d="M100 110 L100 70 M140 110 L140 70 M220 110 L220 70 M260 110 L260 70"/>
            <path d="M20 240 L380 240"/>
            <circle cx="140" cy="160" r="18"/>
            <circle cx="260" cy="160" r="18"/>
          </g>
        </svg>
      </div>`,
    c: `
      <div class="ph" data-label="${label}" style="position:absolute;inset:0">
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;opacity:.45">
          <g fill="none" stroke="rgba(0,0,0,.35)" stroke-width="1.4">
            <path d="M200 30 L140 90 L170 90 L170 200 L230 200 L230 90 L260 90 Z" fill="rgba(0,0,0,.15)"/>
            <path d="M40 230 L360 230 M80 230 L80 270 M320 230 L320 270" />
            <path d="M120 130 L100 160 L130 160 L110 195" stroke-width="2"/>
          </g>
        </svg>
      </div>`,
    d: `
      <div class="ph" data-label="${label}" style="position:absolute;inset:0">
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;opacity:.5">
          <g fill="none" stroke="rgba(0,0,0,.35)" stroke-width="1.3">
            <path d="M40 200 Q 120 120, 200 160 T 360 120" stroke-width="2"/>
            <path d="M40 220 L360 220" />
            <circle cx="100" cy="172" r="4" fill="rgba(0,0,0,.3)"/>
            <circle cx="200" cy="160" r="4" fill="rgba(0,0,0,.3)"/>
            <circle cx="300" cy="130" r="4" fill="rgba(0,0,0,.3)"/>
            <path d="M120 60 L130 100 L115 100 L125 140" stroke="rgba(204,0,0,.5)" stroke-width="2"/>
          </g>
        </svg>
      </div>`,
    e: `
      <div class="ph" data-label="${label}" style="position:absolute;inset:0">
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;opacity:.45">
          <g fill="none" stroke="rgba(0,0,0,.35)" stroke-width="1.3">
            <rect x="40" y="40" width="320" height="220"/>
            <path d="M40 110 L360 110 M40 180 L360 180 M110 40 L110 260 M290 40 L290 260"/>
            <circle cx="200" cy="145" r="20" fill="rgba(204,0,0,.35)"/>
            <text x="200" y="150" text-anchor="middle" fill="rgba(0,0,0,.5)" font-family="monospace" font-size="10">0.2s</text>
          </g>
        </svg>
      </div>`,
  };
  return variants[variant] || variants.a;
}

// Site renderer
function renderSite(opts = {}) {
  const { mobile = false } = opts;
  const s = DATA;
  const wrap = mobile ? 'mobile-inner' : 'wrap-inner';

  return `
<div class="site ${mobile?'is-mobile':''}">
  <!-- Splash -->
  <div class="splash">
    <div class="mark"><span class="r">CEN</span><span class="sa">SA</span></div>
    <div class="bar"></div>
  </div>

  <!-- Floating WhatsApp -->
  <a class="fab" href="#">
    ${ICO.wa}
    <div>
      <div style="line-height:1">WhatsApp</div>
      <div class="live">En línea · 9-19h</div>
    </div>
  </a>

  <!-- Header -->
  <header class="hdr">
    <div class="${wrap}" style="display:flex;align-items:center;justify-content:space-between;gap:1rem;width:100%;">
      <a class="logo" href="#">
        <span class="r">CEN</span><span class="sa">SA</span>
      </a>
      <nav>
        ${s.nav.map(n => `<a href="#">${n}</a>`).join('')}
      </nav>
      <button class="btn btn-primary cta">Cotizar</button>
      <div class="burger"><span></span><span></span><span></span></div>
    </div>
  </header>

  <!-- Hero (3 variants, toggled by tabs) -->
  <section class="hero-host" style="position:relative">
    <div class="hero-picker">
      <button data-hv="1" class="active">V1 · Editorial</button>
      <button data-hv="2">V2 · Full-bleed</button>
      <button data-hv="3">V3 · Técnico</button>
    </div>

    <!-- V1 -->
    <div class="hero v1" data-hv="1">
      <div class="${wrap}">
        <div class="inner">
          <div class="L">
            <div class="kicker rv"><span class="bullet"></span> 15+ años · Nuevo León</div>
            <h1 class="display rv">
              Infraestructura<br/>
              eléctrica que<br/>
              <em>no falla.</em>
            </h1>
            <p class="rv">Especialistas en media tensión para industria y energía. Ingeniería, instalación y mantenimiento con cumplimiento normativo CFE y NOM-001-SEDE.</p>
            <div class="ctas rv">
              <a class="btn btn-primary" href="#">Solicitar diagnóstico ${ICO.arrow}</a>
              <a class="btn btn-ghost" href="#">Ver proyectos</a>
            </div>
          </div>
          <div class="R rv rt">
            <div class="photo">${phBlock('Linea aérea · 13.2 kV', 'a')}
              <div class="arrow">${ICO.arrow}</div>
              <div class="tag"><span>Proyecto · Apodaca N.L.</span><span>2024</span></div>
            </div>
          </div>
        </div>
        <div class="strip rv-stagger">
          ${s.stats.map(x => `<div class="cell"><div class="v"><em data-counter="${x.v}">${x.v}</em></div><div class="l">${x.l}</div></div>`).join('')}
        </div>
      </div>
    </div>

    <!-- V2 -->
    <div class="hero v2" data-hv="2" style="display:none">
      <div class="bg"><div class="glow"></div></div>
      <div class="corner">
        <div class="l">Servicio de emergencia</div>
        <div class="v">+52 81·2235·8545</div>
        <div class="live">Respondiendo · 24/7</div>
      </div>
      <div class="${wrap} content">
        <div class="kicker rv"><span class="bullet"></span> Construcciones Eléctricas del Noreste</div>
        <h1 class="display rv">Energía que <em>nunca<br/>se apaga.</em></h1>
        <p class="R rv">Diseñamos, construimos y mantenemos infraestructura de media tensión para la industria más exigente de Nuevo León.</p>
        <div class="ctas rv">
          <a class="btn btn-primary" href="#">Diagnóstico gratis ${ICO.arrow}</a>
          <a class="btn btn-ghost" style="color:#fff;border-color:rgba(255,255,255,.4)" href="#">Ver servicios</a>
        </div>
      </div>
      <div class="scroll-down">Scroll<div class="line"></div></div>
    </div>

    <!-- V3 -->
    <div class="hero v3" data-hv="3" style="display:none">
      <div class="${wrap}">
        <div class="inner">
          <div class="L">
            <div class="kicker rv"><span class="bullet"></span> Ingeniería eléctrica · Especialistas MT</div>
            <h1 class="display rv">Construimos la red que <em>impulsa</em> al norte de México.</h1>
            <p class="sub rv">Equipo certificado, protocolos STPS clase mundial y respuesta 24/7 en todo Nuevo León.</p>
            <div class="ctas rv">
              <a class="btn btn-primary" href="#">Cotizar proyecto ${ICO.arrow}</a>
              <a class="btn btn-ghost" href="#">Descargar capacidad técnica</a>
            </div>
            <div class="spec rv-stagger">
              <div class="cell"><div class="l">Voltaje típico</div><div class="v">6 – 34.5 kV</div></div>
              <div class="cell"><div class="l">Capacidad máx.</div><div class="v">5 MVA</div></div>
              <div class="cell"><div class="l">Tiempo resp.</div><div class="v">&lt; 2 h</div></div>
            </div>
          </div>
          <div class="R rv rt">
            <div class="hud">
              <div class="corners"><span>LAT 25.74°N</span><span>LON 100.27°W</span></div>
              <div class="center">SE-03<br/>EN LÍNEA<small>SAN NICOLÁS · 13.2 kV · 2.5 MVA</small></div>
              <div class="bottom"><div class="reticle"></div><span>STATUS · NOMINAL</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why us -->
  <section class="why">
    <div class="${wrap}">
      <div class="grid">
        <div class="L">
          <div class="kicker rv"><span class="bullet"></span> Por qué CENSA</div>
          <h2 class="display rv">No compites<br/>con <em>el corte</em>.</h2>
          <p class="rv">Tu operación depende de que la energía fluya. Nosotros existimos para que nunca te detengas.</p>
          <div class="anchor-stat rv">
            <div class="v"><span data-counter="99.98">99.98</span>%</div>
            <div class="l">Disponibilidad en proyectos entregados</div>
          </div>
        </div>
        <div class="R rv-stagger">
          <div class="pillar">
            <div class="n">01</div>
            <div>
              <div class="t">Ingeniería certificada</div>
              <div class="d">Cálculo, planos y memorias que cumplen NOM-001-SEDE al 100%.</div>
            </div>
            <div class="arr">${ICO.chev}</div>
          </div>
          <div class="pillar">
            <div class="n">02</div>
            <div>
              <div class="t">Gestión CFE integral</div>
              <div class="d">Nos encargamos de permisos, coordinación y maniobras. Tú solo operas.</div>
            </div>
            <div class="arr">${ICO.chev}</div>
          </div>
          <div class="pillar">
            <div class="n">03</div>
            <div>
              <div class="t">Cero accidentes</div>
              <div class="d">15 años de operación con protocolo STPS y EPP certificado.</div>
            </div>
            <div class="arr">${ICO.chev}</div>
          </div>
          <div class="pillar">
            <div class="n">04</div>
            <div>
              <div class="t">Emergencias &lt; 2h</div>
              <div class="d">Cuadrillas dedicadas 24/7 para restaurar tu MT antes del siguiente turno.</div>
            </div>
            <div class="arr">${ICO.chev}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section class="srv">
    <div class="${wrap}">
      <div class="head">
        <div>
          <div class="kicker rv"><span class="bullet"></span> Servicios</div>
          <h2 class="display rv">Todo el ciclo de<br/><em>media tensión</em>, bajo un mismo techo.</h2>
        </div>
        <p class="mini rv">Desde el diagnóstico hasta la puesta en servicio certificada. Cada disciplina la ejecuta un especialista acreditado.</p>
      </div>

      <div class="layout rv">
        <div class="list">
          ${s.services.map((sv,i) => `
            <button class="s-item ${i===0?'active':''}" data-srv="${i}">
              <span class="n">${sv.n}</span>
              <span class="t">${sv.sub}</span>
              <span class="arr">${ICO.chev}</span>
            </button>
          `).join('')}
        </div>
        <div class="panel">
          <div class="img">${phBlock('Servicio · Media Tensión', 'b')}
            <div class="hud"><span>// ${s.services[0].sub.toUpperCase()}</span><span>CENSA · 01</span></div>
          </div>
          <div class="txt">
            <h3 data-t="title">${s.services[0].t}</h3>
            <p data-t="desc">${s.services[0].desc}</p>
            <ul data-t="features">
              ${s.services[0].features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <div class="specs" data-t="specs">
              ${s.services[0].specs.map(sp => `<div class="s"><div class="l">${sp.l}</div><div class="v">${sp.v}</div></div>`).join('')}
            </div>
            <a class="more" href="#">Ver ficha técnica ${ICO.arrow}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section class="prj">
    <div class="${wrap}">
      <div class="head">
        <div>
          <div class="kicker rv"><span class="bullet"></span> Proyectos realizados</div>
          <h2 class="display rv">Resultados reales.<br/><em>Impacto real.</em></h2>
        </div>
        <div class="filter rv">
          <button class="active">Todos</button>
          <button>Industrial</button>
          <button>Comercial</button>
          <button>Infraestructura</button>
        </div>
      </div>
      <div class="grid rv-stagger">
        ${s.projects.map((p,i) => `
          <article class="card">
            <div class="img">${phBlock(p.t, ['a','c','d'][i])}
              <div class="cat">${p.cat}</div>
              <div class="year">${p.year}</div>
            </div>
            <div class="body">
              <div class="loc">${ICO.pin} ${p.loc}</div>
              <h3>${p.t}</h3>
              <p>${p.d}</p>
              <div class="specs">
                <div class="s"><div class="l">Voltaje</div><div class="v">${p.voltage}</div></div>
                <div class="s"><div class="l">Capacidad</div><div class="v">${p.capacity}</div></div>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
      <div class="view-all"><a class="btn btn-ghost" href="#">Ver todo el portafolio ${ICO.arrow}</a></div>
    </div>
  </section>

  <!-- Certifications -->
  <section class="cert">
    <div class="${wrap}">
      <div class="inner rv">
        <div class="ttl">Certificaciones y normas</div>
        <div class="row">
          ${s.certs.map(c => `
            <div class="cc">
              <div class="abbr">${c.abbr}</div>
              <div class="nm">${c.n}</div>
              <div class="dc">${c.d}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="tst">
    <div class="${wrap}">
      <div class="lead">
        <div>
          <div class="kicker rv"><span class="bullet"></span> Testimonios</div>
          <h2 class="display rv">Lo que dicen nuestros <em>clientes</em>.</h2>
        </div>
        <p class="rv" style="color:var(--mute)">Operadores, directores y responsables de mantenimiento que confían su continuidad operativa a CENSA.</p>
      </div>
      <div class="featured rv">
        <div class="img">${phBlock('Cliente · Industrias del Noreste', 'b')}
          <div class="logo">Industrias del Noreste</div>
        </div>
        <div class="body">
          <div class="metric">
            <div class="v">72h</div>
            <div class="l">de instalación sin detener la planta de producción</div>
          </div>
          <blockquote>"${s.testimonials[0].q}"</blockquote>
          <div class="author">
            <div class="av">${s.testimonials[0].i}</div>
            <div class="info">
              <div class="n">${s.testimonials[0].n}</div>
              <div class="r">${s.testimonials[0].r} · ${s.testimonials[0].c}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="more rv-stagger">
        ${s.testimonials.slice(1).map(t => `
          <div class="mini">
            <blockquote>"${t.q}"</blockquote>
            <div class="author">
              <div class="av">${t.i}</div>
              <div>
                <div class="n">${t.n}</div>
                <div class="r">${t.r} · ${t.c}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section class="ct">
    <div class="${wrap}">
      <div class="grid">
        <div>
          <div class="kicker rv"><span class="bullet"></span> Contacto</div>
          <h2 class="display rv">¿Tienes un proyecto<br/>de <em>media tensión</em>?<br/>Hablemos.</h2>
          <p class="intro rv">Cuéntanos tu proyecto y nuestro equipo de ingeniería te contactará en menos de 24 horas con una evaluación inicial sin costo.</p>

          <div class="details rv-stagger">
            <div class="i"><div class="ic">${ICO.phone}</div><div><div class="l">Teléfono</div><div class="v">+52 81·2235·8545</div></div></div>
            <div class="i"><div class="ic">${ICO.mail}</div><div><div class="l">Correo</div><div class="v">admon@censa.mx</div></div></div>
            <div class="i"><div class="ic">${ICO.pin}</div><div><div class="l">Oficinas</div><div class="v">San Isaac 1201, San Nicolás de los Garza, N.L.</div></div></div>
          </div>

          <div class="emergency rv">
            <div>
              <div class="lbl"><span class="tick"></span>Emergencia 24/7</div>
              <div class="num">81·1122·0000</div>
            </div>
            <div style="margin-left:auto;font-size:.8rem;color:var(--mute)">Respuesta garantizada &lt; 2h en el AMM.</div>
          </div>

          <!-- Coverage map -->
          <div class="map rv">
            <div class="mhd">
              <h4>Zona de cobertura</h4>
              <span class="tag">Nuevo León · AMM</span>
            </div>
            <div class="viz" id="mapviz-${mobile?'m':'d'}">
              <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%">
                <defs>
                  <pattern id="grid-${mobile?'m':'d'}" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" stroke-width=".5" opacity=".12"/>
                  </pattern>
                </defs>
                <rect width="400" height="225" fill="url(#grid-${mobile?'m':'d'})"/>
                <!-- Abstract NL shape -->
                <path d="M60 60 Q100 30 160 40 Q220 20 280 50 Q340 60 360 110 Q340 180 280 190 Q200 200 140 180 Q70 170 60 120 Z"
                      fill="currentColor" opacity=".08" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
                <!-- Cities (dots) -->
                <g>
                  <circle cx="200" cy="115" r="6" fill="var(--accent)"/>
                  <circle cx="200" cy="115" r="12" fill="none" stroke="var(--accent)" stroke-width="1.2" opacity=".5">
                    <animate attributeName="r" from="8" to="22" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" from=".6" to="0" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <text x="200" y="105" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" letter-spacing=".12em" fill="currentColor">MONTERREY</text>

                  <circle cx="235" cy="95" r="3.5" fill="var(--accent)"/>
                  <text x="240" y="90" font-family="JetBrains Mono, monospace" font-size="7" fill="currentColor" opacity=".75">SAN NICOLÁS</text>

                  <circle cx="270" cy="130" r="3.5" fill="var(--accent)"/>
                  <text x="278" y="134" font-family="JetBrains Mono, monospace" font-size="7" fill="currentColor" opacity=".75">APODACA</text>

                  <circle cx="235" cy="150" r="3.5" fill="var(--accent)"/>
                  <text x="240" y="158" font-family="JetBrains Mono, monospace" font-size="7" fill="currentColor" opacity=".75">GUADALUPE</text>

                  <circle cx="165" cy="145" r="3.5" fill="var(--accent)"/>
                  <text x="160" y="160" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="7" fill="currentColor" opacity=".75">STA. CATARINA</text>

                  <circle cx="160" cy="95" r="3.5" fill="var(--accent)"/>
                  <text x="155" y="90" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="7" fill="currentColor" opacity=".75">ESCOBEDO</text>
                </g>
                <!-- Lines from HQ -->
                <g stroke="var(--accent)" stroke-width="1" opacity=".4" fill="none" stroke-dasharray="2,3">
                  <line x1="200" y1="115" x2="235" y2="95"/>
                  <line x1="200" y1="115" x2="270" y2="130"/>
                  <line x1="200" y1="115" x2="235" y2="150"/>
                  <line x1="200" y1="115" x2="165" y2="145"/>
                  <line x1="200" y1="115" x2="160" y2="95"/>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <div class="card rv rt">
            <div class="hd">
              <h3>Solicitar cotización</h3>
              <span class="sla">Respuesta &lt; 24h</span>
            </div>
            <form class="form" onsubmit="event.preventDefault(); alert('Demo: enviado');">
              <div><label>Nombre</label><input type="text" placeholder="Juan Rodríguez" required/></div>
              <div><label>Empresa</label><input type="text" placeholder="Mi Empresa S.A."/></div>
              <div><label>Correo</label><input type="email" placeholder="correo@empresa.com" required/></div>
              <div><label>Teléfono</label><input type="tel" placeholder="81 1234 5678"/></div>
              <div class="full"><label>Servicio requerido</label>
                <select>
                  <option>Seleccionar servicio...</option>
                  ${s.services.map(sv => `<option>${sv.t}</option>`).join('')}
                </select>
              </div>
              <div class="full"><label>Descripción del proyecto</label>
                <textarea placeholder="Voltaje, capacidad, ubicación, plazos…"></textarea>
              </div>
              <div class="full submit">
                <span class="note">Al enviar aceptas nuestro aviso de privacidad.</span>
                <button class="btn btn-primary" type="submit">Enviar ${ICO.arrow}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="ft">
    <div class="${wrap}">
      <div class="g">
        <div>
          <div class="logo"><span class="r">CEN</span><span class="sa">SA</span></div>
          <p>Construcciones Eléctricas del Noreste S.A. · Infraestructura eléctrica que no falla. Más de 15 años construyendo la red que impulsa Nuevo León.</p>
        </div>
        <div>
          <h4>Servicios</h4>
          <ul>${s.services.slice(0,5).map(sv => `<li><a href="#">${sv.sub}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h4>Compañía</h4>
          <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Proyectos</a></li>
            <li><a href="#">Certificaciones</a></li>
            <li><a href="#">Carreras</a></li>
            <li><a href="#">Prensa</a></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li>+52 81·2235·8545</li>
            <li>admon@censa.mx</li>
            <li>San Isaac 1201,<br/>San Nicolás de los Garza, N.L.</li>
          </ul>
        </div>
      </div>
      <div class="copy">
        <span>© 2025 CENSA · Todos los derechos reservados</span>
        <span>NOM-001-SEDE · STPS · ANCE · ISO 9001</span>
      </div>
    </div>
  </footer>
</div>
`;
}

// Runtime behaviors inside each instance (iframe or element)
function wireSite(root) {
  // Reveal on scroll (uses viewport = root's scroll container)
  const viewport = root.closest('.viewport') || root;
  const rvs = root.querySelectorAll('.rv, .rv-stagger');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { root: viewport, threshold: 0.12 });
  rvs.forEach(el => io.observe(el));

  // Counters
  const counters = root.querySelectorAll('[data-counter]');
  const cio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target; if (el.__counted) return; el.__counted = true;
      const target = el.getAttribute('data-counter');
      const num = parseFloat(target.replace(/[^\d.]/g,''));
      if (isNaN(num)) { el.textContent = target; return; }
      const hasPlus = target.includes('+');
      const decimals = (target.split('.')[1] || '').length;
      const dur = 1400; const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start)/dur, 1);
        const e2 = 1 - Math.pow(1-p, 3);
        const v = num * e2;
        el.textContent = (hasPlus ? '+' : '') + v.toFixed(decimals);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
    });
  }, { root: viewport, threshold: 0.3 });
  counters.forEach(el => cio.observe(el));

  // Hero picker
  const heroBtns = root.querySelectorAll('.hero-picker button');
  heroBtns.forEach(b => b.addEventListener('click', () => {
    heroBtns.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    const v = b.dataset.hv;
    root.querySelectorAll('.hero[data-hv]').forEach(h => h.style.display = (h.dataset.hv === v) ? '' : 'none');
  }));

  // Services selector
  const items = root.querySelectorAll('.srv .s-item');
  const panel = root.querySelector('.srv .panel');
  items.forEach((btn,i) => btn.addEventListener('click', () => {
    items.forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    const sv = DATA.services[i];
    panel.querySelector('[data-t="title"]').textContent = sv.t;
    panel.querySelector('[data-t="desc"]').textContent  = sv.desc;
    panel.querySelector('[data-t="features"]').innerHTML = sv.features.map(f => `<li>${f}</li>`).join('');
    panel.querySelector('[data-t="specs"]').innerHTML = sv.specs.map(sp => `<div class="s"><div class="l">${sp.l}</div><div class="v">${sp.v}</div></div>`).join('');
    panel.querySelector('.img .hud span:first-child').textContent = '// ' + sv.sub.toUpperCase();
    panel.querySelector('.img .hud span:last-child').textContent  = 'CENSA · ' + sv.n;
  }));

  // Project filter (visual only)
  const fbtns = root.querySelectorAll('.prj .filter button');
  fbtns.forEach(b => b.addEventListener('click', () => {
    fbtns.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
  }));
}

// Expose
window.CENSA = { renderSite, wireSite, DATA };
