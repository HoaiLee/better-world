<template>
  <HomeLayout>
    <div class="bg-light-pine relative overflow-hidden">
      <HomeHeader />

      <div class="container w-full z-100 relative mt-18 pb-12">
        <div class="w-full flex-col flex md:flex-row gap-5 justify-between">
          <HomeLiveWebinar class="flex-1 md:max-w-[520px] h-fit" />

          <HomeJoinUsForm class="flex-1 md:max-w-[542px] h-fit" />
        </div>
      </div>

      <div class="h-[100px]" />

      <div
        class="absolute h-[420px] w-[200%] bg-white rounded-[70%]
			bottom-0 right-0 left-0 -translate-x-[25%] translate-y-[25%]"
      />
    </div>

    <div class="bg-white">
      <div class="container ">
        <HomeSpeaker />
      </div>
    </div>

    <div class="bg-light-denim">
      <div class="container">
        <HomeTestimonial />
      </div>
    </div>

    <HomeFooter />
  </HomeLayout>
</template>

<script setup lang="ts">
import HomeLayout from 'components/home/components/layout/HomeLayout.vue';
import HomeLiveWebinar from 'components/home/components/section/HomeLiveWebinar.vue';
import HomeJoinUsForm from 'components/home/components/section/HomeJoinUsForm.vue';
import HomeHeader from 'components/home/components/layout/HomeHeader.vue';
import HomeFooter from 'components/home/components/layout/HomeFooter.vue';
import HomeSpeaker from 'components/home/components/section/HomeSpeaker.vue';
import HomeTestimonial from 'components/home/components/section/HomeTestimonial.vue';
</script>
