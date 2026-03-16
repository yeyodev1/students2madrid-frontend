<script setup lang="ts">
import { ref } from 'vue';

const faqs = ref([
  {
    question: '¿Qué documentos necesito para una visa de estudios?',
    answer: 'Generalmente requieres pasaporte vigente, carta de admisión de un centro autorizado, seguro médico, acreditación de medios económicos y comprobante de alojamiento.',
    isOpen: false
  },
  {
    question: '¿Cuánto tiempo tarda el proceso de visado?',
    answer: 'El tiempo puede variar según el consulado, pero suele tardar entre 4 y 8 semanas. Recomendamos iniciar el trámite al menos 3 meses antes de tu viaje.',
    isOpen: false
  },
  {
    question: '¿Puedo trabajar con visa de estudiante en España?',
    answer: 'Sí, actualmente la ley permite trabajar hasta 30 horas semanales, siempre que el trabajo no interfiera con tus estudios.',
    isOpen: false
  }
]);

const toggle = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>

<template>
  <section class="faq">
    <div class="container">
      <h2 class="faq__title">Preguntas Frecuentes</h2>
      <div class="faq__list">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item" :class="{ 'faq-item--active': faq.isOpen }">
          <button class="faq-item__trigger" @click="toggle(index)" :aria-expanded="faq.isOpen">
            {{ faq.question }}
            <span class="faq-item__icon">
              <i class="fas" :class="faq.isOpen ? 'fa-minus' : 'fa-plus'"></i>
            </span>
          </button>
          
          <Transition name="expand">
            <div class="faq-item__content" v-show="faq.isOpen">
              <div class="faq-item__inner">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  padding: $spacing-xl 0;
  background-color: $color-white;

  &__title {
    text-align: center;
    margin-bottom: $spacing-lg;
    font-size: clamp(2rem, 5vw, 3rem);
    color: $color-secondary;
  }

  &__list {
    max-width: 800px;
    margin: 0 auto;
  }
}

.faq-item {
  margin-bottom: $spacing-sm;
  border: 1px solid $color-bg-light;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &--active {
    border-color: rgba($color-primary, 0.3);
    box-shadow: 0 20px 40px rgba($color-secondary, 0.05);
    background-color: rgba($color-bg-light, 0.3);
  }

  &__trigger {
    width: 100%;
    padding: $spacing-md;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    font-weight: 700;
    font-size: 1.15rem;
    color: $color-secondary;
    text-align: left;
    cursor: pointer;
    border: none;
    outline: none;

    &:hover {
      color: $color-primary;
      .faq-item__icon {
        background-color: rgba($color-primary, 0.1);
        transform: scale(1.1);
      }
    }
  }

  &__icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-bg-light;
    border-radius: 50%;
    transition: all 0.3s ease;
    flex-shrink: 0;
    margin-left: $spacing-md;

    i {
      font-size: 0.8rem;
    }
  }

  &__inner {
    padding: 0 $spacing-md $spacing-md;
    color: $color-text-muted;
    line-height: 1.8;
    font-size: 1.05rem;
  }
}

// Elite Expansion Transition
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 500px;
  opacity: 1;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
</style>
