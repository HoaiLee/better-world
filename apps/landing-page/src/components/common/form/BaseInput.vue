<template>
  <div
    class="flex flex-col w-full bg-white rounded px-4 py-[9px]
  	shadow transition-shadow focus-within:shadow-[0_0_0_2px_rgba(0,123,255,0.5)]"
  >
    <label
      v-if="label"
      class="flex items-center text-label gap-x-0.5 text-denim"
      :class="labelClass"
    >
      <span class="flex items-center gap-x-1">
        {{ label }}
        <span
          v-if="required"
          class="text-dark-salmon"
        >*</span>
      </span>
    </label>

    <slot />

    <div
      v-if="errorMessage"
      class="flex items-center text-label text-red-700"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BaseInputProps } from 'src/types/BaseInput.ts';

// eslint-disable-next-line vue/no-unused-properties
defineProps<BaseInputProps>();
</script>
