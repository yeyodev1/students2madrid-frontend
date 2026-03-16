<script setup lang="ts">
// Basic info component remains mostly static
</script>

<template>
  <div class="contact-info">
    <div class="contact-info__content">
      <span class="badge">Atención Personalizada</span>
      <h2 class="contact-info__title">Hablemos de tu futuro en <span>España</span></h2>
      <p class="contact-info__text">
        Sabemos que cada caso es único. Completa el formulario y un especialista en extranjería te guiará paso a paso.
      </p>
      
      <div class="contact-methods">
        <div class="method-item">
          <div class="method-item__icon"><i class="fas fa-envelope"></i></div>
          <div class="method-item__data">
            <span>Escríbenos</span>
            <a href="mailto:info@students2madrid.com">info@students2madrid.com</a>
          </div>
        </div>
        <div class="method-item">
          <div class="method-item__icon"><i class="fab fa-whatsapp"></i></div>
          <div class="method-item__data">
            <span>WhatsApp 24/7</span>
            <a href="#">Comenzar chat ahora</a>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-info__bg-pattern"></div>
  </div>
</template>

<style lang="scss" scoped>
.contact-info {
  background-color: $color-secondary;
  color: white;
  padding: $spacing-xl $spacing-lg;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: $breakpoint-lg) {
    padding: $spacing-lg;
  }

  &__content {
    position: relative;
    z-index: 2;
  }

  .badge {
    display: inline-block;
    background: rgba($color-accent, 0.2);
    color: $color-accent;
    padding: 6px 16px;
    border-radius: 100px;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: $spacing-md;
  }

  &__title {
    font-size: 3rem;
    line-height: 1.1;
    margin-bottom: $spacing-md;
    
    span { color: $color-primary; }

    @media (max-width: $breakpoint-sm) {
      font-size: 2.2rem;
    }
  }

  &__text {
    font-size: 1.1rem;
    opacity: 0.8;
    margin-bottom: $spacing-xl;
    max-width: 400px;
  }

  &__bg-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');
    opacity: 0.1;
    z-index: 1;
  }
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.method-item {
  display: flex;
  align-items: center;
  gap: $spacing-sm;

  &__icon {
    width: 48px;
    height: 48px;
    background: rgba(255,255,255,0.05);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: $color-primary;
  }

  &__data {
    display: flex;
    flex-direction: column;
    
    span {
      font-size: 0.8rem;
      opacity: 0.6;
      margin-bottom: 2px;
    }

    a {
      color: white;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s;
      &:hover { color: $color-primary; }
    }
  }
}
</style>
