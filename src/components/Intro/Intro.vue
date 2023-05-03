<script setup></script>
<template>
  <div class="intro h-[630px] w-full relative font-[Roboto] mb-40">
    <div class="absol w-[100%] absolute top-0 h-[100%]"></div>
    <div class="relative h-full z-10 container flex justify-start items-center">
      <div class="flex flex-col gap-4 w-2/5">
        <div>
          <img src="../../assets/icons/Logo.svg" alt="logo" />
        </div>
        <div class="text-[#32313E] text-[34px] font-bold">
          Lorem ipsum dolor sit amet consectetur. Ligula rhoncus sit id vel sed
          etiam ultricies. Id ac et odio nisi.
        </div>
        <p class="text-[#545360] text-[16px]">
          Lorem ipsum dolor sit amet consectetur. Ligula rhoncus sit id vel sed
          etiam ultricies. Id ac et odio nisi.
        </p>
      </div>
    </div>
    <div class="container relative z-10 -top-20">
      <div
        class="h-[160px] w-full absolute stat rounded-[30px] bg-white px-[70px] py-[50px] flex justify-between"
      >
        <div>
          <h1 class="text-[#40B75B] text-[28px] font-bold">11 056 +</h1>
          <p class="text-[#545360] text-[15px]">medicine</p>
        </div>
        <div class="h-full w-[2px] bg-[#E5F0EF]"></div>
        <div>
          <h1 class="text-[#40B75B] text-[28px] font-bold">3 654 +</h1>
          <p class="text-[#545360] text-[15px]">customers</p>
        </div>
        <div class="h-full w-[2px] bg-[#E5F0EF]"></div>
        <div>
          <h1 class="text-[#40B75B] text-[28px] font-bold">11</h1>
          <p class="text-[#545360] text-[15px]">filials</p>
        </div>
        <div class="h-full w-[2px] bg-[#E5F0EF]"></div>
        <div>
          <h1 class="text-[#40B75B] text-[28px] font-bold">24/7</h1>
          <p class="text-[#545360] text-[15px]">working time</p>
        </div>
        <div class="h-full w-[2px] bg-[#E5F0EF]"></div>
        <div>
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
