<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageRight: {
    type: Boolean,
    default: false,
  },
  bullets: {
    type: Array as () => string[],
    default: () => [],
  }
});
</script>

<template>
  <section class="feature" :class="{ 'feature--reverse': imageRight }">
    <div class="container feature__container">
      <div class="feature__image-wrapper">
        <img :src="image" :alt="title" class="feature__image" />
      </div>
      <div class="feature__content">
        <h2 class="feature__title">{{ title }}</h2>
        <p class="feature__description">{{ description }}</p>
        <ul v-if="bullets.length" class="feature__bullets">
          <li v-for="(bullet, index) in bullets" :key="index" class="feature__bullet">
            <i class="fas fa-check-circle feature__icon"></i>
            {{ bullet }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.feature {
  padding: $spacing-xl 0;
  position: relative;
  overflow: hidden;

  &:nth-child(even) {
    background: rgba($color-primary, 0.02);
  }

  &--reverse {
    .feature__container {
      @media (min-width: $breakpoint-md) {
        flex-direction: row-reverse;
      }
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-xl;
    position: relative;
    z-index: 2;

    @media (min-width: $breakpoint-md) {
      flex-direction: row;
      gap: 100px;
    }
  }

  &__image-wrapper {
    flex: 1;
    width: 100%;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      right: 20px;
      bottom: 20px;
      border: 2px solid $color-primary;
      border-radius: 30px;
      z-index: -1;
      opacity: 0.3;
      
      @media (max-width: $breakpoint-md) {
        display: none;
      }
    }
    
    img {
      width: 100%;
      height: 400px;
      border-radius: 30px;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
      object-fit: cover;
      transition: $transition-base;
      
      @media (max-width: $breakpoint-md) {
        height: 300px;
        border-radius: 20px;
      }

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  &__content {
    flex: 1.2;
    width: 100%;
    
    @media (max-width: $breakpoint-md) {
      text-align: center;
    }
  }

  &__title {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    color: $color-secondary;
    line-height: 1.1;
    margin-bottom: $spacing-md;
    font-weight: 800;

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: $color-primary;
      margin-top: $spacing-sm;
      border-radius: 2px;
      
      @media (max-width: $breakpoint-md) {
        margin: $spacing-sm auto;
      }
    }
  }

  &__description {
    font-size: 1.2rem;
    line-height: 1.6;
    color: $color-text-muted;
    margin-bottom: $spacing-lg;
    
    @media (max-width: $breakpoint-md) {
      font-size: 1.1rem;
    }
  }

  &__bullets {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: $spacing-md;
    margin-top: $spacing-lg;
    
    @media (max-width: $breakpoint-md) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__bullet {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    font-weight: 600;
    color: $color-secondary;
    padding: $spacing-sm $spacing-md;
    background: $color-white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;

    &:hover {
      transform: translateX(10px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      
      @media (max-width: $breakpoint-md) {
        transform: scale(1.05);
      }
    }
  }

  &__icon {
    color: $color-primary;
    font-size: 1.2rem;
  }
}
</style>
