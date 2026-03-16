import { ref, reactive } from 'vue';
import { ghlService, type GHLContactPayload } from '../services/ghl.service';

export function useContactForm() {
  const formStatus = ref<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formData = reactive<GHLContactPayload>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    urgency: 'media',
    serviceType: ''
  });

  const handleSubmit = async () => {
    formStatus.value = 'loading';
    
    const fullNote = `
--- NUEVA SOLICITUD ---
Nombre: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Teléfono: ${formData.phone}
Servicio: ${formData.serviceType || 'No especificado'}
Urgencia: ${formData.urgency?.toUpperCase()}
Mensaje: ${formData.message || 'Sin mensaje adicional'}
----------------------
    `.trim();

    const payload: GHLContactPayload = {
      ...formData,
      notes: fullNote,
      tags: [formData.urgency || 'media', formData.serviceType || 'general']
    };

    try {
      await ghlService.sendContact(payload);
      formStatus.value = 'success';
    } catch (error) {
      formStatus.value = 'error';
      setTimeout(() => { formStatus.value = 'idle'; }, 5000);
    }
  };

  return {
    formData,
    formStatus,
    handleSubmit
  };
}
