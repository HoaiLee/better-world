<template>
	<div
		class="flex flex-col w-full bg-white rounded px-4 py-[9px]
  	shadow transition-shadow focus-within:[&>label]:text-[rgba(58,_78,_97,_0.35)]"
	>
		<label
			v-if="label"
			class="flex items-center text-label gap-x-0.5 text-denim duration-200 transition-all"
			:class="[
				labelClass,
				{
					// 'text-red-700': errorMessage
				}
			]"
		>
      <span class="flex items-center gap-x-1">
        {{ label }}
        <span
					v-if="required"
					class="text-dark-salmon"
				>*</span>
      </span>
		</label>
		
		<slot/>
		
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
