<script setup lang="ts">
import { computed } from 'vue';
import type { BaseInputProps } from 'src/types/BaseInput.ts';

const model = defineModel<boolean | string | null | undefined>();

// eslint-disable-next-line vue/no-unused-properties
defineProps<BaseInputProps>();

const computedClasses = computed(() => [
	model.value
		? 'checkbox-focus-shadow'
		: '',
]);
</script>

<!-- eslint-disable max-len -->
<template>
  <div>
    <label
      class="flex items-center gap-x-3 cursor-pointer group"
      @click="model = !model"
    >
      <div
        class="bw-checkbox bg-white w-5 h-5 shrink-0 flex items-center justify-center rounded-[3px] transition-all duration-300"
        :class="computedClasses"
      >
				<svg
					:class="[
						{
							'w-0': !model,
							'w-3': model,
						},
						'transition-all duration-200 easy-out',
					]"
					width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
				>
					<rect width="12" height="12" rx="2" fill="#05E100"/>
				</svg>
			</div>

      <span
        v-if="label"
        class="text-body"
      >{{ label }}</span>

      <input
        type="checkbox"
        :checked="!!model"
        class="h-0 w-0 hidden"
        :disabled="!!disabled"
        @change="() => model = !model"
      >
    </label>
  </div>
</template>

<style scoped>
.bw-checkbox {
	box-shadow: 0px 1.5px 1.5px 0px #00000017, 0px 1px 3px 0px #0000000A;
}
</style>
