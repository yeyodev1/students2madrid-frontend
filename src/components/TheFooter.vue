<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <h2 class="footer__logo">Students<span>2</span>Madrid</h2>
          <p class="footer__tagline">Asesoramiento legal y educativo internacional de alta gama.</p>
        </div>
        
        <div class="footer__contact">
          <h3 class="footer__title">Contacto</h3>
          <p>Solar 1, Manzana 31, Parroquia Tarqui</p>
          <p>Guayaquil, Ecuador</p>
          <a href="tel:042296618" class="footer__link">(04) 229-6618</a>
          <a href="mailto:info@students2madrid.com" class="footer__link">info@students2madrid.com</a>
        </div>

        <div class="footer__social">
          <h3 class="footer__title">Síguenos</h3>
          <div class="footer__icons">
            <a href="https://www.instagram.com/students2madrid/" target="_blank" class="footer__icon-btn">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/34691374482" target="_blank" class="footer__icon-btn">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer__bottom">
        <p>&copy; {{ currentYear }} Students2Madrid. RUC: 0919918920001</p>
        <p class="footer__disclaimer">Asesoramiento y representación jurídica oficial.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $color-secondary;
  color: $color-white;
  padding: $spacing-lg 0 $spacing-md;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-lg;
    margin-bottom: $spacing-lg;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: 2fr 1fr 1fr;
    }
  }

  &__logo {
    font-size: 2rem;
    margin-bottom: $spacing-sm;
    span {
      color: $color-primary;
    }
  }

  &__tagline {
    opacity: 0.7;
    max-width: 300px;
  }

  &__title {
    font-size: 1.2rem;
    margin-bottom: $spacing-md;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &__link {
    display: block;
    margin-bottom: $spacing-xs;
    opacity: 0.8;
    &:hover {
      opacity: 1;
      color: $color-primary;
    }
  }

  &__icons {
    display: flex;
    gap: $spacing-sm;
  }

  &__icon-btn {
    width: 45px;
    height: 45px;
    background-color: rgba($color-white, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    &:hover {
      background-color: $color-primary;
    }
  }

  &__bottom {
    border-top: 1px solid rgba($color-white, 0.1);
    padding-top: $spacing-md;
    text-align: center;
    font-size: 0.8rem;
    opacity: 0.6;
  }

  &__disclaimer {
    margin-top: $spacing-xs;
  }
}
</style>
