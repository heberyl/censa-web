export interface City {
  slug: string;
  name: string;
  state: string;
  titleSeo: string;
  metaDescription: string;
  intro: string;
  highlight: string;
  image: string;
  imageAlt: string;
}

export const cities: City[] = [
  {
    slug: 'monterrey',
    name: 'Monterrey',
    state: 'Nuevo León',
    titleSeo: 'Servicios Eléctricos de Media Tensión en Monterrey',
    metaDescription:
      'Contratista eléctrico MT en Monterrey, N.L. Instalación de redes, subestaciones industriales, mantenimiento preventivo y emergencias 24/7. Homologado CFE y NOM-001-SEDE.',
    intro:
      'CENSA presta servicios de ingeniería y construcción eléctrica de media tensión en Monterrey y su zona metropolitana. Con más de 15 años atendiendo proyectos industriales en la ciudad, conocemos las exigencias del Centro de Trabajo CFE y los parques industriales del norte, norte-poniente y sur de la ciudad.',
    highlight:
      'Atendemos los corredores industriales de Monterrey, incluyendo parques del municipio en las carreteras a Saltillo, a Laredo y a Reynosa.',
    image: '/images/hero-servicios.jpg',
    imageAlt: 'Instalación de redes eléctricas de media tensión en zona industrial de Monterrey',
  },
  {
    slug: 'apodaca',
    name: 'Apodaca',
    state: 'Nuevo León',
    titleSeo: 'Contratista Eléctrico MT en Apodaca, Nuevo León',
    metaDescription:
      'Servicios eléctricos de media tensión en Apodaca, N.L. Instalación MT, subestaciones, mantenimiento preventivo y emergencias en parques industriales. Contratista certificado CFE.',
    intro:
      'Apodaca concentra uno de los mayores polos de manufactura automotriz y aeroespacial de México. CENSA tiene experiencia directa en los parques industriales de Apodaca, donde hemos ejecutado proyectos de instalación MT, subestaciones de potencia y mantenimiento preventivo para plantas de clase mundial.',
    highlight:
      'Presencia en parques industriales de Apodaca: PIIT, Stiva, Finsa Norte y el corredor aeroespacial cerca del aeropuerto internacional.',
    image: '/images/servicio-01-instalacion-mt.jpg',
    imageAlt: 'Red eléctrica de media tensión en parque industrial de Apodaca, Nuevo León',
  },
  {
    slug: 'san-nicolas-de-los-garza',
    name: 'San Nicolás de los Garza',
    state: 'Nuevo León',
    titleSeo: 'Instalación Media Tensión San Nicolás de los Garza',
    metaDescription:
      'Instalación de redes de media tensión en San Nicolás de los Garza, N.L. Subestaciones eléctricas industriales, mantenimiento y emergencias 24/7. CENSA — sede en San Nicolás.',
    intro:
      'Nuestra oficina se ubica en San Nicolás de los Garza, lo que nos permite atender con la mayor rapidez cualquier proyecto o emergencia eléctrica en el municipio. Conocemos la infraestructura industrial de San Nicolás, sus parques y desarrollos, y trabajamos directamente con el Centro de Trabajo CFE de la zona.',
    highlight:
      'Sede de CENSA en San Nicolás de los Garza. Atendemos zonas industriales de Av. Universidad, Federalismo y el corredor de Carretera a Laredo.',
    image: '/images/subestacion-industrial.jpg',
    imageAlt: 'Subestación eléctrica industrial en San Nicolás de los Garza instalada por CENSA',
  },
  {
    slug: 'santa-catarina',
    name: 'Santa Catarina',
    state: 'Nuevo León',
    titleSeo: 'Subestaciones Eléctricas en Santa Catarina, N.L.',
    metaDescription:
      'Construcción y mantenimiento de subestaciones eléctricas en Santa Catarina, Nuevo León. Instalación MT llave en mano, emergencias 24/7. Contratista homologado CFE.',
    intro:
      'Santa Catarina alberga importantes zonas industriales con alta demanda de infraestructura eléctrica de media tensión. CENSA ha desarrollado proyectos de subestaciones y redes MT para el sector manufacturero de Santa Catarina, coordinando con CFE y cumpliendo los estándares de las plantas de clase mundial que operan en el municipio.',
    highlight:
      'Experiencia en el corredor industrial de Santa Catarina a lo largo de la carretera a Saltillo y las zonas industriales del Libramiento Poniente.',
    image: '/images/servicio-03-subestaciones.jpg',
    imageAlt: 'Subestación eléctrica industrial instalada por CENSA en Santa Catarina, N.L.',
  },
  {
    slug: 'escobedo',
    name: 'General Escobedo',
    state: 'Nuevo León',
    titleSeo: 'Mantenimiento Eléctrico Industrial en Escobedo, N.L.',
    metaDescription:
      'Mantenimiento preventivo de instalaciones eléctricas MT en General Escobedo, Nuevo León. Termografía, pruebas dieléctricas, emergencias. Contratista certificado CFE.',
    intro:
      'General Escobedo ha crecido como uno de los municipios industriales más dinámicos del AMM. CENSA ofrece mantenimiento preventivo y correctivo de instalaciones eléctricas de media tensión en Escobedo, con programas anuales y semestrales que garantizan la continuidad operativa de las plantas industriales del municipio.',
    highlight:
      'Atención a parques industriales de Escobedo: Finsa, Prologis y el corredor industrial de Av. Abraham Lincoln.',
    image: '/images/servicio-02-mantenimiento.jpg',
    imageAlt: 'Mantenimiento eléctrico preventivo en planta industrial de General Escobedo, N.L.',
  },
];
