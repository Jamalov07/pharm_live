<script setup></script>
<template>
  <div
    class="intro h-[630px] w-full relative font-[Roboto] mb-[450px] md:mb-40"
  >
    <div class="absol w-[100%] absolute top-0 h-[100%]"></div>
    <div class="relative h-full z-10 container flex justify-start items-center">
      <div class="flex flex-col gap-4 w-full lg:w-2/5 px-2 sm:px-4 lg:px-0">
        <div>
          <img src="../../assets/icons/Logo.svg" alt="logo" />
        </div>
        <div class="text-[#32313E] text-[28px] lg:text-[34px] font-bold">
          Lorem ipsum dolor sit amet consectetur. Ligula rhoncus sit id vel sed
          etiam ultricies. Id ac et odio nisi.
        </div>
        <p class="text-[#545360] text-[16px]">
          Lorem ipsum dolor sit amet consectetur. Ligula rhoncus sit id vel sed
          etiam ultricies. Id ac et odio nisi.
        </p>
      </div>
    </div>
    <div class="container relative z-10 -top-20 px-2 sm:px-4 lg:px-0">
      <div
        class="lg:h-[160px] w-[94%] lg:w-full absolute stat rounded-[30px] bg-white py-[20px] md:px-[70px] md:py-[50px] flex flex-col md:flex-row justify-between items-center gap-y-3"
      >
        <div class="flex flex-col items-center">
          <h1 class="text-[#40B75B] text-[28px] font-bold">11 056 +</h1>
          <p class="text-[#545360] text-[15px]">medicine</p>
        </div>
        <hr
          class="w-[120px] md:w-[70px] h-[2px] rotate-0 md:rotate-90 bg-[#E5F0EF] border-[#E5F0EF]"
        />
        <div class="flex flex-col items-center">
          <h1 class="text-[#40B75B] text-[28px] font-bold">3 654 +</h1>
          <p class="text-[#545360] text-[15px]">customers</p>
        </div>
        <hr
          class="w-[120px] md:w-[70px] h-[2px] rotate-0 md:rotate-90 bg-[#E5F0EF] border-[#E5F0EF]"
        />
        <div class="flex flex-col items-center">
          <h1 class="text-[#40B75B] text-[28px] font-bold">11</h1>
          <p class="text-[#545360] text-[15px]">filials</p>
        </div>
        <hr
          class="w-[120px] md:w-[70px] h-[2px] rotate-0 md:rotate-90 bg-[#E5F0EF] border-[#E5F0EF]"
        />
        <div class="flex flex-col items-center">
          <h1 class="text-[#40B75B] text-[28px] font-bold">24/7</h1>
          <p class="text-[#545360] text-[15px]">working time</p>
        </div>
        <hr
          class="w-[120px] md:w-[70px] h-[2px] rotate-0 md:rotate-90 bg-[#E5F0EF] border-[#E5F0EF]"
        />
        <div class="flex flex-col items-center">
          <h1 class="text-[#40B75B] text-[28px] font-bold">1%</h1>
          <p class="text-[#545360] text-[15px]">cashback</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.intro {
  background-image: url(../../assets/images/Rectangle160.png);
  background-size: cover;
}

.absol {
  background: linear-gradient(
    90deg,
    #e9f3f2 38.71%,
    rgba(233, 243, 242, 0) 100%
  );
}

.stat {
  box-shadow: 0px 27px 90px rgba(35, 114, 53, 0.1);
}
</style>
