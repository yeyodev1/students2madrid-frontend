<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="container header__container">
      <div class="header__logo">
        <a href="/">
          Students<span>2</span>Madrid
        </a>
      </div>

      <nav class="header__nav" :class="{ 'header__nav--open': isMobileMenuOpen }">
        <ul class="header__nav-list">
          <li><a href="#inicio" @click="isMobileMenuOpen = false">Inicio</a></li>
          <li><a href="#servicios" @click="isMobileMenuOpen = false">Servicios</a></li>
          <li><a href="#proceso" @click="isMobileMenuOpen = false">Proceso</a></li>
          <li><a href="#contacto" @click="isMobileMenuOpen = false">Contacto</a></li>
          <li class="header__nav-cta">
            <a href="#contacto" class="btn btn--primary btn--sm">Agendar</a>
          </li>
        </ul>
      </nav>

      <button class="header__toggle" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <i class="fas" :class="isMobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: $spacing-md 0;
  transition: $transition-base;

  &--scrolled {
    background-color: rgba($color-secondary, 0.95);
    backdrop-filter: blur(10px);
    padding: $spacing-sm 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-size: 1.5rem;
    font-weight: 900;
    color: $color-white;
    
    span {
      color: $color-primary;
    }
  }

  &__nav {
    @media (max-width: $breakpoint-md) {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: $color-secondary;
      padding: $spacing-md;
      display: none;

      &--open {
        display: block;
      }
    }
  }

  &__nav-list {
    display: flex;
    align-items: center;
    gap: $spacing-md;

    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      align-items: flex-start;
    }

    a {
      color: $color-white;
      font-weight: 500;
      &:hover {
        color: $color-primary;
      }
    }
  }

  &__toggle {
    display: none;
    color: $color-white;
    font-size: 1.5rem;

    @media (max-width: $breakpoint-md) {
      display: block;
    }
  }
}

.btn--sm {
  padding: 0.6rem 1.5rem;
  font-size: 0.8rem;
}
</style>
