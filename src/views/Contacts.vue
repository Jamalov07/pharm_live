<script setup>
import Plus from "../components/Icons/Plus.vue";
import Map from "../components/Map/Map.vue";
</script>
<template>
  <div class="container lg:h-[800px] font-[Roboto]">
    <div class="bg-[#F8F8F8] p-3 py-10">
      <div class="relative text-center py-2">
        <Plus class="top-4 left-[58%] right-[40%] w-6 h-6" />
        <h1 class="text-[28px] lg:text-[34px] text-[#32313E] font-bold">
          {{ $t('contacts') }}
        </h1>
      </div>
      <div
        class="flex w-full justify-between items-center flex-col lg:flex-row gap-y-8"
      >
        <div class="flex gap-3 text-center items-center flex-col lg:flex-row">
          <div class="rounded-[16px] boxshadow p-5 bg-[#40B75B]">
            <img class="w-5 h-5" src="../assets/icons/location.svg" alt="img" />
          </div>
          <div
            class="flex flex-col gap-1 justify-start items-center lg:items-start"
          >
            <h1 class="text-[#545360] text-[20px] font-semibold">{{ $t("address") }}</h1>
              <p class="text-[#545360]">105A Buyuk Ipak Yo'li, Tashkent</p>
          </div>
        </div>

        <div class="flex gap-3 text-center items-center flex-col lg:flex-row">
          <div class="rounded-[16px] boxshadow p-5 bg-[#40B75B]">
            <img class="w-5 h-5" src="../assets/icons/call.svg" alt="img" />
          </div>
          <div
            class="flex flex-col gap-1 justify-start items-center lg:items-start"
          >
            <h1 class="text-[#545360] text-[20px] font-semibold">{{ $t("phone") }}</h1>
            <p class="text-[#545360]">+998977000707</p>
          </div>
        </div>
        <div class="flex gap-3 text-center items-center flex-col lg:flex-row">
          <div class="rounded-[16px] boxshadow p-5 bg-[#40B75B]">
            <img class="w-5 h-5" src="../assets/icons/sms.png" alt="img" />
          </div>
          <div
            class="flex flex-col gap-1 justify-start items-center lg:items-start"
          >
            <h1 class="text-[#545360] text-[20px] font-semibold">{{ $t('email') }}</h1>
            <p class="text-[#545360]">pharmlive@gmail.com</p>
          </div>
        </div>
      </div>
      <Map />
    </div>
  </div>
</template>
<style scoped>
.boxshadow {
  box-shadow: 0px 6px 30px rgba(64, 183, 91, 0.2);
}
</style>
