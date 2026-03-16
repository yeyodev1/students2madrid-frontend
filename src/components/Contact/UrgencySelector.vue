<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  options: {
    type: Array as () => { value: string; label: string; color: string }[],
    required: true,
  }
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="urgency-selector">
    <label class="urgency-label">Nivel de Urgencia</label>
    <div class="urgency-options">
      <button 
        v-for="opt in options" 
        :key="opt.value"
        type="button"
        class="urgency-btn"
        :class="{ active: modelValue === opt.value }"
        :style="{ '--opt-color': opt.color }"
        @click="emit('update:modelValue', opt.value)"
      >
        <span class="urgency-dot"></span>
        {{ opt.label }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.urgency-selector {
  margin-bottom: $spacing-lg;

  .urgency-label {
    display: block;
    font-size: 0.85rem;
    font-weight: 700;
    color: #999;
    margin-bottom: $spacing-sm;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .urgency-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-sm;
  }

  .urgency-btn {
    background: #f8f9fa;
    border: 1px solid #eee;
    padding: 12px 8px;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
    color: $color-secondary;
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    .urgency-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--opt-color);
      box-shadow: 0 0 10px var(--opt-color);
    }

    &:hover {
      background: white;
      border-color: var(--opt-color);
      transform: translateY(-2px);
      opacity: 1;
    }

    &.active {
      background: white;
      border-color: var(--opt-color);
      color: $color-secondary;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      border-width: 2px;
      opacity: 1;
    }
  }
}
</style>
