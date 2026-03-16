<script setup lang="ts">
const props = defineProps({
  testimonials: {
    type: Array as () => { name: string; text: string; role: string; image: string }[],
    default: () => [
      {
        name: 'Carlos Rodríguez',
        role: 'Estudiante de Máster',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80',
        text: 'Gracias a Students2Madrid pude gestionar mi visa en tiempo récord. El asesoramiento fue impecable desde el primer día.'
      },
      {
        name: 'Elena Martínez',
        role: 'Residente en Madrid',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80',
        text: 'Increíble servicio para mi renovación de TIE. Te quitan un peso de encima con toda la burocracia.'
      }
    ]
  }
});
</script>

<template>
  <section class="testimonials">
    <div class="container">
      <h2 class="testimonials__title">Lo que dicen nuestros clientes</h2>
      <div class="testimonials__grid">
        <div v-for="(item, index) in testimonials" :key="index" class="testimonial-card">
          <div class="testimonial-card__header">
            <div class="testimonial-card__avatar">
              <img :src="item.image" :alt="item.name" />
            </div>
            <div class="testimonial-card__quote">
              <i class="fas fa-quote-left"></i>
            </div>
          </div>
          <p class="testimonial-card__text">{{ item.text }}</p>
          <div class="testimonial-card__author">
            <h4 class="testimonial-card__name">{{ item.name }}</h4>
            <span class="testimonial-card__role">{{ item.role }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  padding: $spacing-xl 0;
  background-color: $color-secondary;
  background-image: url('https://gostudyin.com/wp-content/uploads/2025/03/Testimonials-pattern.svg');
  background-size: cover;
  color: $color-white;

  &__title {
    text-align: center;
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: $spacing-lg;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-md;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.testimonial-card {
  background-color: rgba($color-white, 0.05);
  backdrop-filter: blur(5px);
  padding: $spacing-lg;
  border-radius: 20px;
  border: 1px solid rgba($color-white, 0.1);
  transition: $transition-base;

  &:hover {
    transform: translateY(-5px);
    background-color: rgba($color-white, 0.1);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-md;
  }

  &__avatar {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid $color-primary;
    }
  }

  &__quote {
    color: $color-primary;
    font-size: 1.5rem;
  }

  &__text {
    font-size: 1.1rem;
    font-style: italic;
    margin-bottom: $spacing-md;
    opacity: 0.9;
  }

  &__name {
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
  }

  &__role {
    font-size: 0.9rem;
    color: $color-primary;
    font-weight: 600;
  }
}
</style>
