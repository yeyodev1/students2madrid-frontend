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
  background-color: $color-white;

  &--reverse {
    .feature__container {
      flex-direction: row-reverse;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-lg;

    @media (min-width: $breakpoint-md) {
      flex-direction: row;
    }
  }

  &__image-wrapper {
    flex: 1;
    width: 100%;
    
    img {
      width: 100%;
      height: auto;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      object-fit: cover;
    }
  }

  &__content {
    flex: 1;
    width: 100%;
  }

  &__title {
    font-size: clamp(2rem, 5vw, 3rem);
    color: $color-secondary;
    margin-bottom: $spacing-md;
  }

  &__description {
    font-size: 1.1rem;
    color: $color-text-muted;
    margin-bottom: $spacing-md;
  }

  &__bullets {
    margin-top: $spacing-md;
  }

  &__bullet {
    display: flex;
    align-items: flex-start;
    gap: $spacing-sm;
    margin-bottom: $spacing-sm;
    font-weight: 500;
  }

  &__icon {
    color: $color-primary;
    margin-top: 0.2rem;
  }
}
</style>
