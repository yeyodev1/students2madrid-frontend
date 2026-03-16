<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isMobileMatch = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const handleResize = () => {
  isMobileMatch.value = window.innerWidth <= 992; // $breakpoint-md equivalent
  if (!isMobileMatch.value) isMobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
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

      <Transition name="mobile-fade">
        <nav v-if="isMobileMenuOpen || !isMobileMatch" class="header__nav" :class="{ 'header__nav--open': isMobileMenuOpen }">
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
      </Transition>

      <button 
        class="header__toggle" 
        :class="{ 'header__toggle--active': isMobileMenuOpen }" 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle Menu"
      >
        <span class="header__toggle-line"></span>
        <span class="header__toggle-line"></span>
        <span class="header__toggle-line"></span>
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
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba($color-secondary, 0.98);
      backdrop-filter: blur(15px);
      padding: 100px $spacing-lg $spacing-xl;
      z-index: -1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  &__nav-list {
    display: flex;
    align-items: center;
    gap: $spacing-md;

    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      gap: $spacing-lg;
      width: 100%;
      text-align: center;
    }

    a {
      color: $color-white;
      font-weight: 500;
      font-size: 1rem;
      transition: $transition-base;
      
      @media (max-width: $breakpoint-md) {
        font-size: 1.8rem;
        font-weight: 700;
      }

      &:hover {
        color: $color-primary;
        transform: translateY(-2px);
      }
    }
  }

  &__toggle {
    display: none;
    background: transparent;
    border: none;
    width: 30px;
    height: 24px;
    position: relative;
    cursor: pointer;
    z-index: 1100;

    @media (max-width: $breakpoint-md) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &-line {
      display: block;
      width: 100%;
      height: 2px;
      background-color: $color-white;
      border-radius: 10px;
      transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
      transform-origin: center;
    }

    &--active {
      .header__toggle-line:nth-child(1) {
        transform: translateY(11px) rotate(45deg);
      }
      .header__toggle-line:nth-child(2) {
        opacity: 0;
        transform: translateX(-20px);
      }
      .header__toggle-line:nth-child(3) {
        transform: translateY(-11px) rotate(-45deg);
      }
    }
  }
}

// Vue Transitions
.mobile-fade-enter-active,
.mobile-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-fade-enter-from,
.mobile-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.btn--sm {
  padding: 0.6rem 1.5rem;
  font-size: 0.8rem;
}
</style>
