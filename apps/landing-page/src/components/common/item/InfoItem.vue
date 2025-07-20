<template>
  <div class="flex flex-wrap items-center gap-2">
    <div class="rounded-circle p-2 bg-denim">
      <span class="text-white">
        <Component
          :is="icon"
          :size="11"
        />
      </span>
    </div>

    <span class="text-button text-denim">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import type { LucideIcon } from 'lucide-vue-next';

defineProps<{
	icon: LucideIcon;
	label: string;
}>();
</script>
