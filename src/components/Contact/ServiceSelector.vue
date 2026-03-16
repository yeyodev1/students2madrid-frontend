<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  options: {
    type: Array as () => string[],
    required: true,
  }
});

const emit = defineEmits(['update:modelValue']);

const showDropdown = ref(false);

const selectOption = (opt: string) => {
  emit('update:modelValue', opt);
  showDropdown.value = false;
};
</script>

<template>
  <div class="input-group custom-select-group">
    <div 
      class="custom-select" 
      :class="{ 'custom-select--open': showDropdown, 'custom-select--has-value': modelValue }"
      @click="showDropdown = !showDropdown"
    >
      <div class="custom-select__trigger">
        <span>{{ modelValue }}</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <Transition name="slide-up">
        <div v-if="showDropdown" class="custom-select__options">
          <div 
            v-for="opt in options" 
            :key="opt" 
            class="custom-select__option"
            :class="{ 'custom-select__option--selected': modelValue === opt }"
            @click.stop="selectOption(opt)"
          >
            {{ opt }}
          </div>
        </div>
      </Transition>
    </div>
    <label v-if="!modelValue && !showDropdown" class="floating-label">Tipo de Trámite</label>
  </div>
</template>

<style lang="scss" scoped>
.custom-select-group {
  position: relative;
  z-index: 10;
}

.custom-select {
  width: 100%;
  padding: 12px 0;
  min-height: 54px;
  font-size: 1.1rem;
  color: $color-secondary;
  border-bottom: 2px solid #eee;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  display: flex;
  align-items: center;

  &__trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    span {
      min-height: 1.2em;
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 20px;
      font-weight: 500;
      color: $color-secondary;
      animation: fadeInShort 0.3s ease-out;
    }

    i {
      font-size: 0.8rem;
      transition: transform 0.3s;
      color: #999;
    }
  }

  &--open, &--has-value {
    border-color: $color-primary;
  }

  &--open {
    .custom-select__trigger i {
      transform: rotate(180deg);
      color: $color-primary;
    }
  }

  &__options {
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    width: 100%;
    background: white;
    border-radius: 0 0 16px 16px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
    border: 1px solid #eee;
    border-top: none;
    z-index: 100;
  }

  &__option {
    padding: 14px 20px;
    transition: all 0.2s;
    font-size: 1rem;
    color: $color-secondary;

    &:hover {
      background-color: #f8f9fa;
      color: $color-primary;
    }

    &--selected {
      background-color: rgba($color-primary, 0.05);
      color: $color-primary;
      font-weight: 700;
    }
  }
}

.floating-label {
  position: absolute;
  top: 14px;
  left: 0;
  color: #999;
  font-size: 1.1rem;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 5;
}

@keyframes fadeInShort {
  from { opacity: 0; transform: translateX(-5px); }
  to { opacity: 1; transform: translateX(0); }
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
