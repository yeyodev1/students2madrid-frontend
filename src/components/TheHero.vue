<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: 'Visados y Gestión de Estudios en España'
  },
  subtitle: {
    type: String,
    required: false,
    default: 'Expertos en asesoría legal estudiantil y trámites migratorios para Europa'
  }
});
</script>

<template>
  <section class="hero">
    <div class="hero__overlay"></div>
    <div class="container hero__content">
      <h1 class="hero__title">
        {{ title }}
      </h1>
      <p class="hero__subtitle">
        {{ subtitle }}
      </p>
      <div class="hero__actions">
        <a href="#contacto" class="btn btn--primary">Agendar Asesoría</a>
        <a href="#servicios" class="btn btn--secondary">Ver Servicios</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(rgba($color-secondary, 0.75), rgba($color-secondary, 0.45)), url('https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 0 0 $border-radius-lg $border-radius-lg;
  color: $color-white;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // Overlay already handled by linear-gradient in background-image
  }

  &__content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    animation: fadeIn 1s ease-out;
  }

  &__title {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    margin-bottom: $spacing-md;
    text-wrap: balance;
    line-height: 1.1;
  }

  &__subtitle {
    font-size: clamp(1.1rem, 3vw, 1.5rem);
    margin-bottom: $spacing-lg;
    opacity: 0.95;
    max-width: 600px;
  }

  &__actions {
    display: flex;
    gap: $spacing-sm;
    flex-wrap: wrap;
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.1rem 2.8rem;
  border-radius: 50px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  transition: $transition-base;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);

  &--primary {
    background-color: $color-primary;
    color: $color-white;

    &:hover {
      background-color: color-mix(in srgb, $color-primary, black 15%);
      transform: translateY(-3px);
      box-shadow: 0 15px 30px rgba($color-primary, 0.3);
    }
  }

  &--secondary {
    border: 2px solid $color-white;
    color: $color-white;
    backdrop-filter: blur(5px);

    &:hover {
      background-color: $color-white;
      color: $color-secondary;
      transform: translateY(-3px);
    }
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
