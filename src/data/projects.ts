export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  voltage: string;
  capacity: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'proyecto-industrial-apodaca',
    title: 'Red de Distribución Industrial',
    category: 'Industrial',
    location: 'Parque Industrial Apodaca, N.L.',
    voltage: '13.2 kV',
    capacity: '2.5 MVA',
    year: '2024',
    description:
      'Diseño e instalación de red de distribución de media tensión para parque industrial con 18 usuarios. Incluye subestación principal, 4.2 km de línea aérea y sistema de medición centralizada.',
    image: '/assets/images/proyecto-industrial.webp',
    tags: ['Media Tensión', 'Industrial', 'Subestación'],
  },
  {
    id: 'proyecto-comercial-monterrey',
    title: 'Subestación Centro Comercial',
    category: 'Comercial',
    location: 'San Nicolás de los Garza, N.L.',
    voltage: '6.6 kV',
    capacity: '1.0 MVA',
    year: '2023',
    description:
      'Construcción de subestación eléctrica en caseta para plaza comercial de 35,000 m². Transformador de 1 MVA, tablero de protecciones y sistema de respaldo por UPS estático de 160 kVA.',
    image: '/assets/images/proyecto-comercial.webp',
    tags: ['Subestación', 'Comercial', 'Respaldo'],
  },
  {
    id: 'proyecto-infraestructura-urbana',
    title: 'Línea Subterránea Urbana',
    category: 'Infraestructura',
    location: 'Guadalupe, N.L.',
    voltage: '13.2 kV',
    capacity: '3.8 km',
    year: '2024',
    description:
      'Instalación de línea subterránea de media tensión para regularización de red urbana en zona habitacional. Cable tipo XLPE 13.2 kV, 3 cámaras de transformación y sistema de telemedición.',
    image: '/assets/images/proyecto-urbano.webp',
    tags: ['Subterráneo', 'Urbano', 'Regularización'],
  },
];
