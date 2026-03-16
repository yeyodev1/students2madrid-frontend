<script setup lang="ts">
import { ref } from 'vue';
// @ts-ignore
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import ContactInfo from './Contact/ContactInfo.vue';
import ServiceSelector from './Contact/ServiceSelector.vue';
import UrgencySelector from './Contact/UrgencySelector.vue';
import { useContactForm } from '../composables/useContactForm';

const { formData, formStatus, handleSubmit } = useContactForm();
const phoneValid = ref(true);

const onPhoneInput = (_content: string, obj: any) => {
  phoneValid.value = obj.valid;
  if (obj.number) formData.phone = obj.number;
};

const urgencyOptions = [
  { value: 'baja', label: 'Sin prisa', color: '#ABF970' },
  { value: 'media', label: 'Próximos meses', color: '#FFD700' },
  { value: 'alta', label: 'Lo antes posible', color: '#EF2D4D' }
];

const serviceOptions = [
  'Visado de Estudios', 'Prórroga de Estancia', 'Autorización TIE', 
  'Arraigo / Residencia', 'Otros Trámites'
];
</script>

<template>
  <section id="contacto" class="contact-section">
    <div class="container">
      <div class="contact-wrapper">
        <ContactInfo />

        <div class="contact-form-container">
          <Transition name="fade-in" mode="out-in">
            <div v-if="formStatus === 'success'" class="success-state">
              <div class="success-state__icon"><i class="fas fa-check"></i></div>
              <h3>¡Mensaje Enviado!</h3>
              <p>Hemos recibido tus datos correctamente. Un asesor se pondrá en contacto contigo muy pronto.</p>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="modern-form">
              <div class="form-row">
                <div class="input-group">
                  <input v-model="formData.firstName" id="firstName" type="text" required placeholder=" ">
                  <label for="firstName">Nombre</label>
                </div>
                <div class="input-group">
                  <input v-model="formData.lastName" id="lastName" type="text" required placeholder=" ">
                  <label for="lastName">Apellido</label>
                </div>
              </div>

              <div class="input-group">
                <input v-model="formData.email" id="email" type="email" required placeholder=" ">
                <label for="email">Tu Correo Electrónico</label>
              </div>

              <div class="input-group tel-input-group">
                <vue-tel-input 
                  v-model="formData.phone" @input="onPhoneInput"
                  :dropdownOptions="{ showSearchBox: true, showDialCodeInList: true, showFlags: true }"
                  :inputOptions="{ placeholder: ' ', required: true }"
                  :autoFormat="true"
                  mode="international" defaultCountry="auto" class="elite-tel-input"
                />
                <label class="floating-label elite-tel-label">Teléfono / WhatsApp</label>
              </div>

              <ServiceSelector v-model="(formData.serviceType as string)" :options="serviceOptions" />
              <UrgencySelector v-model="(formData.urgency as string)" :options="urgencyOptions" />

              <div class="input-group">
                <textarea v-model="formData.message" id="message" required placeholder=" " rows="3"></textarea>
                <label for="message">¿En qué podemos ayudarte?</label>
              </div>

              <button type="submit" class="submit-btn" :class="{ 'submit-btn--loading': formStatus === 'loading' }" :disabled="formStatus === 'loading'">
                <span class="submit-btn__text">Enviar Solicitud</span>
                <div class="submit-btn__loader"></div>
              </button>

              <p v-if="formStatus === 'error'" class="error-msg fade-in">
                <i class="fas fa-exclamation-circle"></i> Ocurrió un error. Por favor intenta de nuevo.
              </p>
            </form>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-section {
  padding: $spacing-xl 0;
  background-color: #f0f2f5;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -20%; right: -10%;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba($color-primary, 0.05) 0%, transparent 70%);
    z-index: 0;
  }
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  background: white;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 50px 100px -20px rgba($color-secondary, 0.15);
  position: relative;
  z-index: 1;

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: 1fr;
    border-radius: 30px;
  }
}

.contact-form-container {
  padding: $spacing-xl $spacing-lg;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: $breakpoint-lg) { padding: $spacing-lg; }
}

.modern-form {
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-md;

    @media (max-width: $breakpoint-sm) {
      grid-template-columns: 1fr; gap: 0;
    }
  }
}

.input-group {
  position: relative;
  margin-bottom: $spacing-lg;

  input, textarea {
    width: 100%;
    padding: 14px 0;
    font-size: 1.1rem;
    color: $color-secondary;
    border: none;
    border-bottom: 2px solid #eee;
    background: transparent;
    transition: all 0.3s;
    font-family: inherit;

    &:focus { outline: none; border-color: $color-primary; }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: -12px;
      font-size: 0.85rem;
      color: $color-primary;
      font-weight: 700;
    }
  }

  textarea { resize: none; }
}

.tel-input-group {
  margin-bottom: $spacing-lg;
  
  :deep(.elite-tel-input) {
    border: none;
    border-bottom: 2px solid #eee;
    border-radius: 0;
    box-shadow: none;
    background: transparent;
    transition: all 0.3s;
    
    &:focus-within {
      border-color: $color-primary;
    }

    .vti__dropdown {
      padding: 0 12px 0 0;
      border-radius: 0;
      background: transparent;
      transition: all 0.2s;
      
      &:hover { background: rgba($color-primary, 0.05); }
      &.open { background: transparent; }
    }

    .vti__dropdown-list {
      border: 1px solid #eee;
      border-top: none;
      border-radius: 0 0 16px 16px;
      box-shadow: 0 15px 40px rgba(0,0,0,0.1);
      background: white;
      margin-top: 1px;
      padding: 10px 0;
      width: 300px;
      z-index: 1000;
      
      &.below {
        top: calc(100% + 1px);
      }
    }

    .vti__searchbar {
      margin: 8px 12px 12px;
      border: 1px solid #eee;
      border-radius: 10px;
      padding: 12px;
      font-size: 0.9rem;
      outline: none;
      font-family: inherit;
      width: calc(100% - 24px);
      
      &:focus {
        border-color: $color-primary;
        box-shadow: 0 0 0 3px rgba($color-primary, 0.1);
      }
    }

    .vti__dropdown-item {
      padding: 12px 16px;
      font-size: 0.95rem;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 12px;
      
      &:hover, &.vti__dropdown-item--highlight {
        background-color: #f8f9fa;
        color: $color-primary;
      }

      .vti__flag { margin-right: 0; }
      strong { font-weight: 500; }
    }

    .vti__input {
      padding: 14px 0;
      font-size: 1.1rem;
      color: $color-secondary;
      background: transparent;
      font-family: inherit;
      border: none;
      outline: none;

      &::placeholder { color: transparent; }
    }
  }

  .elite-tel-label {
    top: -14px;
    font-size: 0.85rem;
    color: $color-primary;
    font-weight: 700;
    pointer-events: none;
  }
}

.floating-label {
  position: absolute;
  top: 14px; left: 0;
  color: #999;
  font-size: 1.1rem;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 5;
}

.submit-btn {
  width: 100%;
  padding: 18px;
  background-color: $color-primary;
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba($color-primary, 0.2);

  &:hover:not(:disabled) {
    background-color: color-mix(in srgb, $color-primary, black 10%);
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba($color-primary, 0.3);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    box-shadow: none;
  }

  &__loader {
    position: absolute;
    top: 50%; left: 50%;
    width: 24px; height: 24px;
    margin: -12px 0 0 -12px;
    border: 3px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: rotate 0.8s infinite linear;
    display: none;
  }

  &--loading {
    .submit-btn__text { visibility: hidden; }
    .submit-btn__loader { display: block; }
  }
}

@keyframes rotate { to { transform: rotate(360deg); } }

.success-state {
  text-align: center;
  padding: $spacing-lg;

  &__icon {
    width: 80px; height: 80px;
    background: $color-accent;
    color: white;
    font-size: 2.5rem;
    display: flex;
    align-items: center; justify-content: center;
    border-radius: 50%;
    margin: 0 auto $spacing-md;
    animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  h3 { font-size: 2rem; color: $color-secondary; margin-bottom: $spacing-sm; }
  p { color: $color-text-muted; font-size: 1.1rem; }
}

@keyframes scaleIn { from { transform: scale(0); } to { transform: scale(1); } }
.error-msg { color: $color-primary; font-size: 0.9rem; margin-top: $spacing-sm; text-align: center; font-weight: 500; }
.fade-in { animation: fadeIn 0.5s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>
