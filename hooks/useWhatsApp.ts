import { useCallback } from 'react';
import { createWhatsAppUrl, WHATSAPP_MESSAGES, CONTACT_INFO } from '@/lib/constants';

export const useWhatsApp = () => {
  const sendGeneralMessage = useCallback(() => {
    const url = createWhatsAppUrl(WHATSAPP_MESSAGES.general);
    window.open(url, '_blank');
  }, []);

  const sendProductMessage = useCallback((productName: string) => {
    const message = WHATSAPP_MESSAGES.product(productName);
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank');
  }, []);

  const sendServiceMessage = useCallback((serviceName: string) => {
    const message = WHATSAPP_MESSAGES.service(serviceName);
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank');
  }, []);

  const sendAdviceMessage = useCallback(() => {
    const url = createWhatsAppUrl(WHATSAPP_MESSAGES.advice);
    window.open(url, '_blank');
  }, []);

  const sendCustomMessage = useCallback((message: string) => {
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank');
  }, []);

  const callEmergency = useCallback(() => {
    window.open(`tel:${CONTACT_INFO.phone.emergency}`, '_self');
  }, []);

  const callMain = useCallback(() => {
    window.open(`tel:${CONTACT_INFO.phone.main}`, '_self');
  }, []);

  return {
    sendGeneralMessage,
    sendProductMessage,
    sendServiceMessage,
    sendAdviceMessage,
    sendCustomMessage,
    callEmergency,
    callMain,
  };
};
