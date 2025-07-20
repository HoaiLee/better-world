<!-- eslint-disable max-len -->
<template>
  <div class="shadow-100 rounded-box flex bg-white overflow-hidden">
    <div
      class="w-17 h-full  relative"
      :class="variant && variantColors[variant]"
    >
      <span
        class="absolute top-0 right-0 translate-x-[50%] translate-y-[100%]"
        :class="variant && variantTextColors[variant]"
      >
        <svg
          width="34"
          height="26"
          viewBox="0 0 34 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4 0.499994C10.6 4 7.2 7.79999 6.9 13.7C7.7 13.3 8.2 13.2 9.2 13.2C12.2 13.2 15 15.9 15 19.2C15 23.1 12.1 25.5 8.6 25.5C3.9 25.5 0.9 22 0.9 16.3C0.9 7.9 7 1.2 16.4 0.499994ZM18.5 16.3C18.5 7.9 24.6 1.2 34 0.499994C28.2 4 24.8 7.79999 24.5 13.7C25.3 13.3 25.8 13.2 26.8 13.2C29.8 13.2 32.6 15.9 32.6 19.2C32.6 23.1 29.7 25.5 26.2 25.5C21.5 25.5 18.5 22 18.5 16.3Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </div>

    <div class="py-6 sm:py-14 px-6 md:pl-11 md:pr-15 flex-1">
      <div v-html="quote" />

      <div class="mt-5">
        <span class="text-body2 font-bold">{{ author_name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from 'src/types/Testimonial.ts';

type Props = Testimonial & {
	variant?: | 'light-pine'
	| 'medium-pine'
	| 'light-salmon'
	| 'dark-salmon';
};

defineProps<Props>();

const variantColors = {
	'light-pine': 'bg-light-pine',
	'medium-pine': 'bg-medium-pine',
	'light-salmon': 'bg-light-salmon',
	'dark-salmon': 'bg-dark-salmon',
} as const;
const variantTextColors = {
	'light-pine': 'text-dark-pine',
	'medium-pine': 'text-light-pine',
	'light-salmon': 'text-dark-salmon',
	'dark-salmon': 'text-light-salmon',
} as const;
</script>
