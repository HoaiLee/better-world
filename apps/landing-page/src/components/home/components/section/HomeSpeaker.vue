<!-- eslint-disable max-len -->
<template>
  <div class="pb-[123px]">
    <div class="flex justify-center">
      <div class="rounded-circle border-[19px] border-light-salmon relative">
        <img
          :src="'/images/home/speakers/sample.png'"
          alt="Author"
          width="129"
          height="192"
          class="w-[190px] h-[190px] z-10"
        >

        <div class="absolute top-0 left-0 z-100 -translate-x-15">
          <div class="flex gap-1">
            <div class="h-[14px] w-[14px] bg-[rgba(242,_236,_230,_0.7)] rounded-circle" />

            <div class="h-[14px] w-20 bg-[rgba(242,_236,_230,_0.7)] rounded-circle" />
          </div>

          <div>
            <div class="flex gap-1 mt-1 justify-end">
              <div class="h-6 w-18 bg-light-salmon rounded-circle" />
            </div>

            <div class="flex gap-1 mt-1 justify-end">
              <div class="h-[14px] w-20 bg-[rgba(242,_236,_230,_0.6)] rounded-circle" />

              <div class="h-[14px] w-[14px] bg-[rgba(242,_236,_230,_0.6)] rounded-circle" />
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 right-0 z-100 translate-x-[50%]">
          <BWChip :label="speaker?.name || 'Name'" />
        </div>
      </div>
    </div>

    <div class="mt-[29px] text-center">
      <span class="text-h3">About the speaker, {{ speaker?.name || 'Name' }}</span>
    </div>

    <div class="flex flex-col gap-[22px] text-center max-w-[783px] mx-auto mt-4">
      <p class="text-subtitle1">
        Placerat torquent porttitor augue at semper penatibus lobortis semper. Proin ridiculus blandit sit mus fames sed
        tortor etiam. Eget inceptos volutpat finibus enim; dignissim pellentesque. Dolor erat inceptos odio nibh
        cubilia; nostra turpis enim ad. Posuere sem dignissim mollis orci fermentum sollicitudin mattis. Vel torquent et
        enim odio morbi taciti.
      </p>

      <p class="text-subtitle1">
        Dolor erat inceptos odio nibh cubilia; nostra turpis enim ad. Posuere sem dignissim mollis orci!
      </p>

      <p class="text-subtitle1">
        Proin ridiculus blandit sit mus fames sed tortor etiam. Eget inceptos volutpat finibus enim; dignissim
        pellentesque. Dolor erat inceptos odio nibh cubilia; nostra turpis enim ad.
        Posuere sem dignissim mollis orci fermentum sollicitudin mattis.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import BWChip from 'components/common/chip/BWChip.vue';
import { useFetch } from 'src/utils/api.ts';
import type { Pagination } from 'src/types/Panigation.ts';
import { ref } from 'vue';

const speaker = ref<Speaker>();

const init = async (): Promise<void> => {
	const response = await useFetch({
		endpoint: 'speakers',
		method: 'GET',
	})
	
	const paginator: Pagination<Speaker[]> = await response.json();
	
	speaker.value = paginator.data[0];
}

init()
</script>
