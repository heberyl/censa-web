export const company = {
  name: 'CENSA',
  fullName: 'Construcciones Eléctricas del Noreste S.A.',
  tagline: 'Infraestructura eléctrica que no falla',
  description:
    'Especialistas en servicios de media tensión para la industria y el sector energético. Más de 15 años construyendo la infraestructura eléctrica que impulsa a Nuevo León.',
  address: {
    street: 'San Isaac 1201',
    colony: 'Residencial San Cristobal 3er Sector',
    city: 'San Nicolás de los Garza',
    state: 'Nuevo León',
    zip: '66478',
    country: 'México',
  },
  contact: {
    phone: '812 2358545',
    email: 'admon@censa.mx',
  },
  social: {
    facebook: '#',
    linkedin: '#',
    youtube:  '#',
  },
  stats: [
    { value: '+15', label: 'Años de experiencia' },
    { value: '+200', label: 'Proyectos completados' },
    { value: '0', label: 'Accidentes en operación' },
    { value: '24/7', label: 'Atención de emergencias' },
  ],
} as const;
