<script setup lang="ts">
const props = defineProps({
  steps: {
    type: Array as () => { number: string; title: string; description: string }[],
    required: true,
  },
  sectionTitle: {
    type: String,
    default: 'Tu proceso de visado en 4 pasos',
  }
});
</script>

<template>
  <section class="roadmap">
    <div class="container">
      <h2 class="roadmap__title">{{ sectionTitle }}</h2>
      <div class="roadmap__grid">
        <div v-for="step in steps" :key="step.number" class="roadmap__step">
          <div class="roadmap__number">{{ step.number }}</div>
          <h3 class="roadmap__step-title">{{ step.title }}</h3>
          <p class="roadmap__step-description">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.roadmap {
  background-color: $color-accent;
  padding: $spacing-xl 0;
  border-radius: 40px;
  margin: $spacing-lg $spacing-sm;

  @media (min-width: $breakpoint-md) {
    margin: $spacing-xl auto;
    padding: $spacing-xl 2rem;
  }

  &__title {
    text-align: center;
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: $color-secondary;
    margin-bottom: $spacing-lg;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-lg;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__step {
    background-color: $color-white;
    padding: $spacing-md;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: $transition-base;

    &:hover {
      transform: translateY(-5px);
    }
  }

  &__number {
    width: 40px;
    height: 40px;
    background-color: $color-primary;
    color: $color-white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    margin-bottom: $spacing-sm;
  }

  &__step-title {
    font-size: 1.25rem;
    color: $color-secondary;
    margin-bottom: $spacing-sm;
  }

  &__step-description {
    font-size: 0.9rem;
    color: $color-text-muted;
  }
}
</style>
