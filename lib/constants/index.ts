// Información de contacto
export const CONTACT_INFO = {
  phone: {
    main: '+58 (212) 555-0123',
    emergency: '+58 (212) 555-0124',
    whatsapp: '582125550123'
  },
  email: {
    main: 'consultas@dramargaritareina.com',
    appointments: 'citas@dramargaritareina.com'
  },
  address: {
    street: 'Av. Principal 123, Piso 5, Consultorio 502',
    building: 'Centro Médico Caracas',
    city: 'Caracas 1050, Venezuela'
  },
  schedule: {
    weekdays: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    saturday: 'Sábados: 9:00 AM - 2:00 PM',
    sunday: 'Domingos: Cerrado'
  }
} as const;

// URLs de WhatsApp
export const createWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${CONTACT_INFO.phone.whatsapp}?text=${encodeURIComponent(message)}`;
};

// Mensajes predeterminados
export const WHATSAPP_MESSAGES = {
  general: 'Hola! Me gustaría agendar una consulta con la Dra. Margarita Reina. ¿Podrían ayudarme con la disponibilidad?',
  product: (productName: string) => `Hola! Me interesa el producto: ${productName}. ¿Podrían darme más información sobre disponibilidad y cómo adquirirlo?`,
  service: (serviceName: string) => `Hola! Me interesa el servicio: ${serviceName}. ¿Podrían darme más información y disponibilidad?`,
  advice: 'Hola! Me gustaría recibir asesoría personalizada sobre productos y tratamientos. ¿Cuándo podemos agendar una consulta?'
} as const;
