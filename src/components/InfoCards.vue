<script setup lang="ts">
const infoItems = [
  {
    title: 'Visado de Estudiante',
    icon: 'fa-graduation-cap',
    description: 'Gestión integral para tu primera estancia por estudios, movilidad de alumnos o prácticas.'
  },
  {
    title: 'Prórroga de Estancia',
    icon: 'fa-history',
    description: 'Tramitamos la renovación de tu estancia por estudios para que sigas formándote sin interrupciones.'
  },
  {
    title: 'Autorización TIE',
    icon: 'fa-id-card',
    description: 'Te asesoramos en la obtención de tu tarjeta física tras la concesión de tu resolución.'
  },
  {
    title: 'Arraigo y Residencia',
    icon: 'fa-user-shield',
    description: 'Expertos en todo tipo de arraigos (social, laboral, formación) y cambio a residencia de trabajo.'
  }
];
</script>

<template>
  <section class="info-grid">
    <div class="container">
      <div class="info-grid__header">
        <h2 class="info-grid__title">Expertos en Derecho de Extranjería</h2>
        <p class="info-grid__subtitle">Tu tranquilidad legal en España es nuestra prioridad absoluta. Gestionamos cada detalle de tu migración.</p>
      </div>
      <div class="info-grid__wrapper">
        <div v-for="(item, index) in infoItems" :key="index" class="info-card">
          <div class="info-card__icon">
            <i class="fas" :class="item.icon"></i>
          </div>
          <h3 class="info-card__title">{{ item.title }}</h3>
          <p class="info-card__description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.info-grid {
  padding: $spacing-xl 0;
  background-color: $color-soft-mint;

  &__header {
    text-align: center;
    margin-bottom: $spacing-lg;
  }

  &__title {
    font-size: clamp(2rem, 5vw, 2.8rem);
    color: $color-secondary;
    margin-bottom: $spacing-xs;
  }

  &__subtitle {
    font-size: 1.2rem;
    color: $color-text-muted;
    max-width: 600px;
    margin: 0 auto;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $spacing-md;
  }
}

.info-card {
  background-color: $color-white;
  padding: $spacing-lg;
  border-radius: $border-radius-md;
  box-shadow: 0 10px 30px rgba($color-secondary, 0.03);
  transition: $transition-base;
  text-align: center;
  border: 1px solid rgba($color-secondary, 0.05);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba($color-secondary, 0.08);
  }

  &__icon {
    width: 60px;
    height: 60px;
    background-color: rgba($color-primary, 0.1);
    color: $color-primary;
    border-radius: $border-radius-sm;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto $spacing-md;
    font-size: 1.5rem;
  }

  &__title {
    font-size: 1.3rem;
    margin-bottom: $spacing-sm;
    color: $color-secondary;
  }

  &__description {
    color: $color-text-muted;
    line-height: 1.6;
  }
}
</style>
