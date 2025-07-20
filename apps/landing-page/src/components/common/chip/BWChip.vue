<template>
  <div
    class="inline-flex px-3 pt-[10px] pb-[7px] bg-denim text-white
    	text-chip rounded-circle max-w-[200px] text-ellipsis"
  >
    <span>{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
type Props = {
	label: string;
};

defineProps<Props>();
</script>
