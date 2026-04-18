export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 'instalacion',
    title: 'Instalación de Líneas de Media Tensión',
    shortTitle: 'Instalación MT',
    description:
      'Diseño, suministro e instalación de líneas aéreas y subterráneas de media tensión conforme a las normas CFE y NOM-001-SEDE. Garantizamos calidad, seguridad y cumplimiento normativo en cada proyecto.',
    features: [
      'Líneas aéreas 6 kV — 34.5 kV',
      'Cables subterráneos XLPE',
      'Herrajes y accesorios certificados',
      'Pruebas de puesta en servicio',
    ],
    icon: 'cable',
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento Preventivo y Correctivo',
    shortTitle: 'Mantenimiento',
    description:
      'Programas de mantenimiento preventivo y correctivo para líneas, subestaciones y equipos eléctricos. Minimizamos tiempos de paro y maximizamos la vida útil de sus activos eléctricos.',
    features: [
      'Termografía infrarroja',
      'Pruebas eléctricas a equipos',
      'Limpieza y reapriete de conexiones',
      'Reportes técnicos detallados',
    ],
    icon: 'wrench',
  },
  {
    id: 'subestaciones',
    title: 'Subestaciones Eléctricas',
    shortTitle: 'Subestaciones',
    description:
      'Construcción, modernización y mantenimiento de subestaciones eléctricas de distribución. Desde la ingeniería básica hasta la puesta en marcha, con equipos de alta calidad y seguridad.',
    features: [
      'Subestaciones aéreas y en caseta',
      'Transformadores hasta 5 MVA',
      'Tableros de protección y medición',
      'Puesta en servicio certificada',
    ],
    icon: 'substation',
  },
  {
    id: 'emergencias',
    title: 'Respuesta a Emergencias',
    shortTitle: 'Emergencias 24/7',
    description:
      'Servicio de atención a emergencias eléctricas las 24 horas, los 365 días del año. Contamos con cuadrillas especializadas y equipamiento completo para restaurar el suministro en el menor tiempo posible.',
    features: [
      'Tiempo de respuesta < 2 horas',
      'Cuadrillas especializadas disponibles',
      'Equipo de protección personal certificado',
      'Coordinación con CFE y protección civil',
    ],
    icon: 'bolt',
  },
  {
    id: 'ingenieria',
    title: 'Ingeniería y Proyectos',
    shortTitle: 'Ingeniería',
    description:
      'Desarrollo de proyectos ejecutivos de ingeniería eléctrica, desde el anteproyecto hasta los planos constructivos y gestión de permisos ante CFE, STPS y dependencias municipales.',
    features: [
      'Estudios de factibilidad',
      'Diseño de redes de distribución',
      'Gestión de permisos CFE',
      'Supervisión de obras',
    ],
    icon: 'blueprint',
  },
  {
    id: 'inspeccion',
    title: 'Inspección y Pruebas',
    shortTitle: 'Inspección',
    description:
      'Inspecciones técnicas y pruebas de laboratorio a equipos eléctricos de media tensión. Emitimos dictámenes técnicos que cumplen con las normas STPS y NOM-001-SEDE para regularización de instalaciones.',
    features: [
      'Pruebas de aislamiento y rigidez dieléctrica',
      'Medición de resistencia de puesta a tierra',
      'Verificación de protecciones',
      'Dictámenes para STPS y ANCE',
    ],
    icon: 'inspect',
  },
];
