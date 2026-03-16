<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '¿Listo para empezar tu camino a España?',
  },
  ctaText: {
    type: String,
    default: 'Hablar con un asesor',
  }
});
</script>

<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-section__content">
        <h2 class="cta-section__title">{{ title }}</h2>
        <p class="cta-section__description">
          Obtén una asesoría personalizada hoy mismo y despeja todas tus dudas sobre el proceso migratorio.
        </p>
        <a href="https://wa.me/34691374482" class="btn btn--primary btn--lg">
          {{ ctaText }}
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cta-section {
  padding: $spacing-xl 0;
  background-color: $color-secondary;
  background-image: url('https://gostudyin.com/wp-content/uploads/2025/03/cta-pattern.svg');
  background-size: cover;
  text-align: center;
  color: $color-white;

  &__content {
    max-width: 700px;
    margin: 0 auto;
  }

  &__title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: $spacing-md;
  }

  &__description {
    font-size: 1.2rem;
    opacity: 0.8;
    margin-bottom: $spacing-lg;
  }
}

.btn--lg {
  padding: 1.2rem 3rem;
  font-size: 1rem;
}
</style>
