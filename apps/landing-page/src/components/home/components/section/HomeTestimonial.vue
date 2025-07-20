<template>
  <div class="pt-[109px] pb-[100px]">
    <div class="text-center">
      <span class="text-h3">Join 100,000+ amazing nonprofits,<br>
        organizations, and fundraisers on BetterWorld</span>
    </div>

    <div class="grid grid-cols-2 gap-x-[44px] gap-y-[42px] mt-[51px]">
      <TestimonialItem
        v-for="(item, index) in itemsLimited"
        :key="index"
        v-bind="item"
				:variant="variants[index]"
      />
    </div>
		
		<div class="flex flex-wrap justify-center gap-9 mt-17">
			<img
				v-for="item in 7"
				:key="item"
				alt="Brand"
				class="h-11 w-auto"
				:src="`/images/home/brand/brand_${item + 1}.png`"
			/>
		</div>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from 'src/types/Testimonial.ts';
import TestimonialItem from 'components/home/components/testimonial/TestimonialItem.vue';
import { useFetch } from 'src/utils/api.ts';
import { computed, ref } from 'vue';
import type { Pagination } from 'src/types/Panigation.ts';

const testimonials = ref<Testimonial[]>([])

const ITEM_LIMIT = 4;

const itemsLimited = computed(() => testimonials.value?.slice(0, ITEM_LIMIT));

const variants = ['light-pine', 'medium-pine', 'dark-salmon', 'light-salmon'] as const;

const init = async (): Promise<void> => {
	const response = await useFetch({
		endpoint: 'testimonials',
		method: 'GET',
	})

	const paginator: Pagination<Testimonial[]> = await response.json();
	
	testimonials.value = [...paginator.data];
}

init()
</script>
