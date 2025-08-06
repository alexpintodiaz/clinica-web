import { useState, useCallback } from 'react';
import type { FormularioContacto } from '@/types';

const initialFormData: FormularioContacto = {
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
  motivo: '',
  mensaje: '',
  preferencia: 'telefono',
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormularioContacto>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSelectChange = useCallback((name: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setSubmitMessage('');
  }, []);

  const submitForm = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setSubmitMessage(
        '¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto contigo dentro de las próximas 24 horas.'
      );
      
      // Limpiar formulario después de envío exitoso
      setTimeout(() => {
        resetForm();
      }, 3000);
      
    } catch (error) {
      setSubmitMessage('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, resetForm]);

  return {
    formData,
    isSubmitting,
    submitMessage,
    handleInputChange,
    handleSelectChange,
    submitForm,
    resetForm,
  };
};
