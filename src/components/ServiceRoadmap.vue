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
  background: linear-gradient(135deg, rgba($color-primary, 0.05) 0%, rgba($color-secondary, 0.05) 100%);
  padding: $spacing-xl 0;
  border-radius: 60px;
  margin: $spacing-xl $spacing-sm;
  position: relative;
  overflow: hidden;

  @media (max-width: $breakpoint-md) {
    border-radius: 40px;
    padding: $spacing-xl $spacing-md;
  }

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba($color-primary, 0.1) 0%, transparent 70%);
    z-index: 0;
  }

  &__title {
    text-align: center;
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    color: $color-secondary;
    margin-bottom: $spacing-xl;
    font-weight: 800;
    position: relative;
    z-index: 1;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-lg;
    position: relative;
    z-index: 1;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__step {
    background-color: $color-white;
    padding: $spacing-lg;
    border-radius: 30px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid rgba($color-primary, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
      border-color: $color-primary;
    }
  }

  &__number {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, $color-primary 0%, darken($color-primary, 10%) 100%);
    color: $color-white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.5rem;
    margin-bottom: $spacing-md;
    transform: rotate(-10deg);
    box-shadow: 0 10px 20px rgba($color-primary, 0.3);
  }

  &__step-title {
    font-size: 1.4rem;
    color: $color-secondary;
    margin-bottom: $spacing-sm;
    font-weight: 700;
  }

  &__step-description {
    font-size: 1rem;
    line-height: 1.6;
    color: $color-text-muted;
  }
}
</style>
