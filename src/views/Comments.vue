<script setup>
import Plus from "../components/Icons/Plus.vue";
import Swiper from "../components/Swiper/Swiper.vue";
import swiperNew from "../components/Swiper/swiperNew.vue";
</script>
<template>
  <div class="bg-white h-[540px] w-full font-[Roboto]">
    <div class="container">
      <div class="relative text-center py-2">
        <Plus class="top-4 left-[58%] right-[40%] w-6 h-6" />
        <h1 class="text-[28px] lg:text-[34px] text-[#32313E] font-bold">
          {{ $t('comments') }}
        </h1>
      </div>
      <!-- <Swiper /> -->
      <swiperNew />
    </div>
  </div>
</template>
<style></style>
