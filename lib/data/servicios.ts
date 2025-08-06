import type { ServiciosData, CategoriaServicio } from '@/types';

export const servicios: ServiciosData = {
  maxilofacial: [
    {
      id: 1,
      nombre: "Implantes Dentales",
      imagen: "/dental-implants.png",
      descripcion:
        "Reemplazo de dientes perdidos con implantes de titanio de última generación. Procedimiento mínimamente invasivo con técnicas de cirugía guiada por computadora para resultados precisos y duraderos.",
      duracion: "1-2 horas",
      recuperacion: "7-14 días",
      precio: "Desde $800",
    },
    {
      id: 2,
      nombre: "Cirugía Ortognática",
      imagen: "/orthognathic-surgery.png",
      descripcion:
        "Corrección quirúrgica de deformidades maxilofaciales y maloclusiones severas. Mejora la función masticatoria, respiratoria y la estética facial de manera integral.",
      duracion: "3-5 horas",
      recuperacion: "4-6 semanas",
      precio: "Consultar",
    },
    {
      id: 3,
      nombre: "Extracción de Cordales",
      imagen: "/wisdom-teeth.png",
      descripcion:
        "Extracción quirúrgica de muelas del juicio impactadas o problemáticas. Utilizamos técnicas mínimamente invasivas para reducir el dolor y acelerar la recuperación.",
      duracion: "30-60 minutos",
      recuperacion: "3-7 días",
      precio: "Desde $200",
    },
    {
      id: 4,
      nombre: "Cirugía Reconstructiva Facial",
      imagen: "/facial-reconstruction.png",
      descripcion:
        "Reconstrucción de defectos faciales por trauma, cáncer o malformaciones congénitas. Restauramos tanto la función como la estética facial con técnicas avanzadas.",
      duracion: "2-6 horas",
      recuperacion: "2-8 semanas",
      precio: "Consultar",
    },
    {
      id: 5,
      nombre: "Tratamiento de ATM",
      imagen: "/tmj-treatment.png",
      descripcion:
        "Diagnóstico y tratamiento de trastornos de la articulación temporomandibular. Aliviamos el dolor, mejoramos la función mandibular y corregimos problemas de mordida.",
      duracion: "1-2 horas",
      recuperacion: "1-2 semanas",
      precio: "Desde $400",
    },
    {
      id: 6,
      nombre: "Cirugía de Quistes y Tumores",
      imagen: "/cyst-surgery.png",
      descripcion:
        "Extirpación quirúrgica de quistes y tumores benignos en la región maxilofacial. Procedimientos precisos con preservación de estructuras importantes.",
      duracion: "1-3 horas",
      recuperacion: "1-3 semanas",
      precio: "Consultar",
    },
  ],
  esteticos: [
    {
      id: 7,
      nombre: "Lifting Facial",
      imagen: "/facelift.png",
      descripcion:
        "Rejuvenecimiento facial completo que elimina la flacidez y redefine los contornos. Técnicas avanzadas para resultados naturales y duraderos.",
      duracion: "3-4 horas",
      recuperacion: "2-3 semanas",
      precio: "Desde $3,500",
    },
    {
      id: 8,
      nombre: "Rinoplastia",
      imagen: "/rhinoplasty.png",
      descripcion:
        "Cirugía estética y funcional de la nariz. Mejoramos la forma, tamaño y proporción nasal mientras preservamos o mejoramos la función respiratoria.",
      duracion: "2-3 horas",
      recuperacion: "2-4 semanas",
      precio: "Desde $2,800",
    },
    {
      id: 9,
      nombre: "Bichectomía",
      imagen: "/buccal-fat-removal.png",
      descripcion:
        "Extracción de las bolsas de Bichat para definir los pómulos y crear un rostro más esculpido. Procedimiento mínimamente invasivo con resultados inmediatos.",
      duracion: "45-60 minutos",
      recuperacion: "1-2 semanas",
      precio: "Desde $1,200",
    },
    {
      id: 10,
      nombre: "Mentoplastia",
      imagen: "/chin-surgery.png",
      descripcion:
        "Cirugía de mentón para mejorar la proyección y forma del mentón. Armonizamos el perfil facial y mejoramos la proporción entre nariz, labios y mentón.",
      duracion: "1-2 horas",
      recuperacion: "2-3 semanas",
      precio: "Desde $2,000",
    },
    {
      id: 11,
      nombre: "Armonización Facial",
      imagen: "/facial-harmonization.png",
      descripcion:
        "Tratamiento integral que combina diferentes técnicas para lograr un equilibrio perfecto entre todas las estructuras faciales.",
      duracion: "2-3 horas",
      recuperacion: "1-2 semanas",
      precio: "Desde $1,800",
    },
    {
      id: 12,
      nombre: "Rejuvenecimiento Facial",
      imagen: "/facial-rejuvenation.png",
      descripcion:
        "Combinación de técnicas quirúrgicas y no quirúrgicas para revertir los signos del envejecimiento y restaurar la juventud facial.",
      duracion: "2-4 horas",
      recuperacion: "2-4 semanas",
      precio: "Desde $2,500",
    },
  ],
  dermatologicos: [
    {
      id: 13,
      nombre: "Botox",
      imagen: "/botox-treatment.png",
      descripcion:
        "Aplicación de toxina botulínica para eliminar arrugas de expresión. Tratamiento rápido y efectivo para frente, entrecejo y patas de gallo.",
      duracion: "15-30 minutos",
      recuperacion: "Inmediata",
      precio: "Desde $300",
    },
    {
      id: 14,
      nombre: "Rellenos Dérmicos",
      imagen: "/dermal-fillers.png",
      descripcion:
        "Ácido hialurónico de alta calidad para restaurar volumen, definir contornos y eliminar arrugas. Resultados inmediatos y naturales.",
      duracion: "30-45 minutos",
      recuperacion: "24-48 horas",
      precio: "Desde $400",
    },
    {
      id: 15,
      nombre: "Peeling Químico",
      imagen: "/chemical-peel.png",
      descripcion:
        "Exfoliación profunda para renovar la piel, eliminar manchas, cicatrices y mejorar la textura. Diferentes intensidades según las necesidades.",
      duracion: "30-60 minutos",
      recuperacion: "3-7 días",
      precio: "Desde $150",
    },
    {
      id: 16,
      nombre: "Mesoterapia Facial",
      imagen: "/mesotherapy.png",
      descripcion:
        "Microinyecciones de vitaminas, minerales y ácido hialurónico para hidratar, nutrir y rejuvenecer la piel desde el interior.",
      duracion: "30-45 minutos",
      recuperacion: "24 horas",
      precio: "Desde $200",
    },
    {
      id: 17,
      nombre: "Hidrafacial",
      imagen: "/hydrafacial.png",
      descripcion:
        "Tratamiento facial de limpieza profunda, exfoliación e hidratación. Tecnología de vanguardia para una piel radiante y saludable.",
      duracion: "45-60 minutos",
      recuperacion: "Inmediata",
      precio: "Desde $120",
    },
    {
      id: 18,
      nombre: "Tratamientos Anti-edad",
      imagen: "/anti-aging.png",
      descripcion:
        "Protocolos personalizados que combinan diferentes tecnologías para combatir el envejecimiento y mantener una piel joven y saludable.",
      duracion: "60-90 minutos",
      recuperacion: "24-48 horas",
      precio: "Desde $250",
    },
  ],
};

export const categoriasServicios = [
  { id: "maxilofacial" as CategoriaServicio, nombre: "Cirugía Maxilofacial", icono: "🦷", descripcion: "Procedimientos especializados en estructuras faciales y dentales" },
  { id: "esteticos" as CategoriaServicio, nombre: "Estéticos", icono: "✨", descripcion: "Cirugías y tratamientos para realzar tu belleza natural" },
  { id: "dermatologicos" as CategoriaServicio, nombre: "Dermatológicos", icono: "💆", descripcion: "Tratamientos avanzados para el cuidado y rejuvenecimiento de la piel" },
];
