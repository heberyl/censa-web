export interface Service {
  slug: string;
  id: string;
  num: string;
  title: string;
  titleSeo: string;
  subtitle: string;
  description: string;
  descriptionLong: string;
  features: string[];
  image: string;
  imageAlt: string;
  icon: string;
  metaDescription: string;
  faqItems: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'instalacion-mt',
    id: 'instalacion-mt',
    num: '01',
    title: 'Instalación MT',
    titleSeo: 'Instalación de Redes de Media Tensión en Nuevo León',
    subtitle: 'Redes de media tensión llave en mano',
    description:
      'Diseño y montaje de redes de media tensión bajo norma CFE y NOM-001-SEDE. Tendido aéreo y subterráneo, postería, herrajes y conexiones certificadas.',
    descriptionLong:
      'Ejecutamos proyectos integrales de instalación de redes eléctricas de media tensión (1 kV a 35 kV) para la industria del noreste de México. Desde el levantamiento de campo y el diseño de ingeniería hasta la puesta en marcha y entrega as-built, nuestras cuadrillas certificadas trabajan bajo los estándares de la CFE y la NOM-001-SEDE. Atendemos tendido aéreo con postería metálica y de concreto tipo CFE, instalación subterránea con ducto y cable MV-90, conexiones con perno de cobre certificadas, herrajes de suspensión y retención, y pruebas dieléctricas de aceptación previas a la energización.',
    features: [
      'Tendido aéreo y subterráneo',
      'Postería metálica y de concreto',
      'Herrajes CFE certificados',
      'Pruebas dieléctricas de aceptación',
      'Entrega de planos as-built',
      'Coordinación directa con CFE',
    ],
    image: '/images/servicio-01-instalacion-mt.jpg',
    imageAlt: 'Instalación de red eléctrica de media tensión en zona industrial de Nuevo León',
    icon: `<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>`,
    metaDescription:
      'Instalación de redes eléctricas de media tensión en Nuevo León. Tendido aéreo y subterráneo, postería CFE, pruebas dieléctricas. Contratista homologado CFE y NOM-001-SEDE.',
    faqItems: [
      {
        q: '¿Cuánto tiempo toma un proyecto de instalación de red MT?',
        a: 'Depende del alcance: una línea de distribución de 1-2 km con postería tarda entre 4 y 8 semanas. Proyectos subterráneos en parques industriales pueden requerir de 8 a 16 semanas, incluyendo ingeniería, suministro y pruebas de aceptación con CFE.',
      },
      {
        q: '¿Qué normas rigen la instalación de media tensión en México?',
        a: 'Las instalaciones MT deben cumplir la NOM-001-SEDE (Instalaciones Eléctricas), las especificaciones técnicas de la CFE (RAMT, CFE-GDMTH, etc.) y la normativa de la STPS en materia de seguridad e higiene en obra. CENSA cuenta con personal certificado en todas estas normas.',
      },
      {
        q: '¿CENSA realiza la tramitación ante la CFE para interconexión?',
        a: 'Sí. Como contratista homologado ante la CFE, gestionamos directamente los trámites de interconexión, permisos de obra en vía pública y la coordinación con el centro de trabajo CFE correspondiente para la energización del proyecto.',
      },
    ],
  },
  {
    slug: 'mantenimiento-preventivo',
    id: 'mantenimiento',
    num: '02',
    title: 'Mantenimiento Preventivo',
    titleSeo: 'Mantenimiento Preventivo Instalaciones Eléctricas MT Nuevo León',
    subtitle: 'Programas para prolongar la vida útil',
    description:
      'Termografía, limpieza de aislamiento, pruebas dieléctricas y ajustes en celdas y tableros. Reportes técnicos con evidencia fotográfica.',
    descriptionLong:
      'Nuestros programas de mantenimiento preventivo están diseñados para maximizar la vida útil y la confiabilidad de tus instalaciones eléctricas de media tensión. Realizamos inspección termográfica infrarroja para detectar puntos calientes en conexiones y equipos, limpieza de aisladores y bushings, medición de resistencia de contactos, pruebas de rigidez dieléctrica, revisión de protecciones y relés, ajuste de conexiones y terminales. Entregamos un reporte técnico completo con evidencia fotográfica, lecturas de medición y recomendaciones priorizadas por nivel de riesgo.',
    features: [
      'Termografía infrarroja',
      'Pruebas de rigidez dieléctrica',
      'Limpieza de aisladores y bushings',
      'Ajuste de conexiones y terminales',
      'Inspección de celdas MT y tableros',
      'Reporte técnico con fotos y firmas',
    ],
    image: '/images/servicio-02-mantenimiento.jpg',
    imageAlt: 'Técnico CENSA realizando mantenimiento preventivo con termografía en subestación',
    icon: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>`,
    metaDescription:
      'Mantenimiento preventivo de instalaciones eléctricas MT en Nuevo León. Termografía infrarroja, pruebas dieléctricas, limpieza de aislamiento. Contratista certificado CFE.',
    faqItems: [
      {
        q: '¿Con qué frecuencia se recomienda el mantenimiento preventivo en media tensión?',
        a: 'La NOM-001-SEDE establece revisión anual como mínimo. En ambientes industriales con polvo, humedad elevada o alta temperatura — como fundidoras, plantas cementeras o zonas costeras — recomendamos inspecciones semestrales para prevenir fallas por contaminación del aislamiento.',
      },
      {
        q: '¿Qué detecta la termografía infrarroja que no se ve a simple vista?',
        a: 'La cámara termográfica detecta incrementos de temperatura en conexiones flojas, cables sobrecargados, bornes oxidados o contactos deteriorados antes de que provoquen una falla catastrófica. Es la herramienta más eficiente para el mantenimiento predictivo en instalaciones eléctricas.',
      },
      {
        q: '¿Es necesario dejar sin energía la instalación durante el mantenimiento?',
        a: 'Algunos trabajos requieren desenergización parcial (limpieza de celdas, pruebas dieléctricas), mientras que la termografía puede hacerse con el equipo energizado. Coordinamos los tiempos de paro con tu área de mantenimiento para minimizar el impacto en la producción.',
      },
    ],
  },
  {
    slug: 'subestaciones-electricas',
    id: 'subestaciones',
    num: '03',
    title: 'Subestaciones Eléctricas',
    titleSeo: 'Subestaciones Eléctricas Industriales Nuevo León',
    subtitle: 'Diseño, construcción y puesta en marcha',
    description:
      'Ingeniería, suministro e instalación de subestaciones industriales. Transformadores de potencia, celdas de media tensión, protecciones y SCADA.',
    descriptionLong:
      'Desarrollamos proyectos integrales de subestaciones eléctricas industriales desde la ingeniería conceptual hasta la puesta en servicio con CFE. Nuestro alcance incluye estudios de cortocircuito y coordinación de protecciones, diseño de obra civil y electromecánico, suministro e instalación de transformadores de potencia (hasta 5 MVA), celdas de media tensión blindadas, sistemas de medición CFE, protecciones de sobrecorriente y diferencial, tableros de distribución, sistemas de tierras físicas y pararrayos, y puesta en marcha con pruebas de aceptación. Entregamos manuales de operación y capacitación al personal del cliente.',
    features: [
      'Ingeniería básica y de detalle',
      'Transformadores hasta 5 MVA',
      'Celdas de media tensión blindadas',
      'Sistemas de protección y medición CFE',
      'Puesta en marcha y energización',
      'Manuales de operación y capacitación',
    ],
    image: '/images/servicio-03-subestaciones.jpg',
    imageAlt: 'Subestación eléctrica industrial de media tensión instalada por CENSA en Nuevo León',
    icon: `<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,
    metaDescription:
      'Diseño e instalación de subestaciones eléctricas industriales en Nuevo León. Transformadores, celdas MT, protecciones, puesta en marcha CFE. Contratista homologado.',
    faqItems: [
      {
        q: '¿Cuánto cuesta una subestación eléctrica industrial?',
        a: 'El costo varía significativamente según la capacidad, el nivel de tensión y el equipamiento. Una subestación de 500 kVA a 23 kV puede oscilar entre $800,000 y $2,000,000 MXN incluyendo ingeniería, suministro e instalación. Ofrecemos evaluación y cotización sin costo para tu proyecto específico.',
      },
      {
        q: '¿Cuánto tiempo tarda la construcción de una subestación eléctrica?',
        a: 'Un proyecto típico de 1-2 MVA requiere entre 10 y 18 semanas: 3-4 semanas de ingeniería y tramitación, 4-6 semanas de suministro de equipos y 3-8 semanas de instalación y puesta en marcha, dependiendo de la complejidad y disponibilidad de equipos.',
      },
      {
        q: '¿Qué incluye la puesta en marcha de una subestación?',
        a: 'La puesta en marcha incluye pruebas de aislamiento de transformadores, ajuste y prueba de relés de protección, verificación de secuencia de fases, medición de resistencia de tierra, pruebas funcionales de celdas, verificación de medición CFE y coordinación con el centro de trabajo CFE para la energización oficial.',
      },
    ],
  },
  {
    slug: 'emergencias-24-7',
    id: 'emergencias',
    num: '04',
    title: 'Emergencias 24/7',
    titleSeo: 'Atención de Emergencias Eléctricas 24/7 Nuevo León',
    subtitle: 'Respuesta en menos de 2 horas',
    description:
      'Cuadrillas certificadas disponibles todo el año para atender fallas críticas en redes MT, subestaciones y equipos de distribución. Sin tiempos de espera.',
    descriptionLong:
      'Contamos con cuadrillas certificadas en disponibilidad permanente para atender fallas eléctricas críticas en el área metropolitana de Monterrey y zona industrial de Nuevo León. Respondemos en menos de 2 horas con el equipo y los materiales necesarios para diagnóstico, reparación de urgencia o bypass temporal. Atendemos fallas en líneas de media tensión, subestaciones, transformadores de potencia, celdas y equipos de distribución. Tras resolver la emergencia entregamos un informe técnico con causa raíz, acciones realizadas y recomendaciones preventivas para evitar recurrencia.',
    features: [
      'Disponibilidad 24 h / 7 días / 365 días',
      'Respuesta < 2 h en zona metropolitana',
      'Diagnóstico en sitio con equipo propio',
      'Reparación definitiva o bypass temporal',
      'Coordinación directa con CFE',
      'Informe técnico post-emergencia',
    ],
    image: '/images/servicio-04-emergencias.jpg',
    imageAlt: 'Cuadrilla CENSA atendiendo emergencia eléctrica nocturna en planta industrial',
    icon: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
    metaDescription:
      'Emergencias eléctricas 24/7 en Nuevo León. Respuesta en menos de 2 horas para fallas en redes MT, subestaciones y distribución. Contratista certificado CFE disponible siempre.',
    faqItems: [
      {
        q: '¿En cuánto tiempo pueden llegar ante una emergencia eléctrica?',
        a: 'Garantizamos presencia en sitio en menos de 2 horas para cualquier punto del área metropolitana de Monterrey (Monterrey, Apodaca, Escobedo, San Nicolás, Santa Catarina, García, San Pedro). Para municipios fuera del AMM el tiempo de respuesta puede variar; contáctanos para confirmar cobertura.',
      },
      {
        q: '¿Qué tipo de fallas eléctricas atienden en emergencia?',
        a: 'Atendemos fallas en líneas aéreas y subterráneas de media tensión, fallas en transformadores de potencia, disparo de protecciones sin causa aparente, fallas en celdas de media tensión, apertura de interruptores y reconectadores, y cualquier interrupción no programada del suministro eléctrico industrial.',
      },
      {
        q: '¿Es necesario tener un contrato previo para solicitar atención de emergencia?',
        a: 'No. Atendemos emergencias tanto a clientes con contrato de mantenimiento como a empresas sin relación previa con CENSA. Llama directamente al +52 81 2235-8545 disponible las 24 horas y una cuadrilla saldrá de inmediato.',
      },
    ],
  },
  {
    slug: 'ingenieria-electrica',
    id: 'ingenieria',
    num: '05',
    title: 'Ingeniería Eléctrica',
    titleSeo: 'Ingeniería Eléctrica Industrial y Consultoría MT Nuevo León',
    subtitle: 'Estudios, diseño y consultoría',
    description:
      'Estudios de cortocircuito, coordinación de protecciones, flujos de potencia y diseño de sistemas MT/BT. Avalados por ingenieros certificados en la NOM.',
    descriptionLong:
      'Nuestro equipo de ingeniería especializada proporciona estudios técnicos y diseño de sistemas eléctricos para la industria de Nuevo León. Realizamos estudios de cortocircuito para dimensionamiento de protecciones, coordinación de protecciones (relés de sobrecorriente, diferencial y distancia), análisis de flujos de potencia y regulación de tensión, diseño de sistemas MT/BT con memorias de cálculo NOM, peritajes eléctricos para dictamen normativo y consultoría para proyectos de expansión y eficiencia energética. Toda nuestra ingeniería está firmada por ingenieros con cédula profesional vigente, lo que le da validez legal ante CFE y las autoridades regulatorias.',
    features: [
      'Estudios de cortocircuito',
      'Coordinación de protecciones',
      'Flujos de potencia y carga',
      'Diseño de sistemas MT/BT con memorias NOM',
      'Peritajes eléctricos',
      'Consultoría para expansión y eficiencia',
    ],
    image: '/images/servicio-05-ingenieria.jpg',
    imageAlt: 'Ingeniero CENSA realizando estudios de coordinación de protecciones eléctricas',
    icon: `<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>`,
    metaDescription:
      'Ingeniería eléctrica industrial en Nuevo León: estudios de cortocircuito, coordinación de protecciones, diseño MT/BT, peritajes. Ingenieros con cédula vigente.',
    faqItems: [
      {
        q: '¿Qué es un estudio de cortocircuito y para qué sirve?',
        a: 'Un estudio de cortocircuito calcula las corrientes máximas que pueden circular durante una falla en el sistema eléctrico. Sus resultados son indispensables para seleccionar correctamente interruptores, fusibles y cables, y para ajustar las protecciones de tal forma que la falla se despeje sin daños en equipos adyacentes.',
      },
      {
        q: '¿Con qué software realizan los estudios de ingeniería eléctrica?',
        a: 'Utilizamos software especializado reconocido por la industria: ETAP para análisis de sistemas de potencia (cortocircuito, flujos, coordinación de protecciones) y AutoCAD Electrical para el diseño de planos unilineales y de detalle. Los entregables incluyen modelos editables y reportes en PDF firmados.',
      },
      {
        q: '¿Pueden elaborar las memorias de cálculo requeridas por la NOM-001-SEDE?',
        a: 'Sí. Las memorias de cálculo que elaboramos incluyen todos los elementos requeridos por la NOM-001-SEDE: cálculo de conductores, protecciones, caídas de tensión, sistema de tierras y factor de potencia. Están firmadas por ingeniero con cédula profesional, lo que las convierte en documentos técnicos válidos ante cualquier autoridad.',
      },
    ],
  },
];
