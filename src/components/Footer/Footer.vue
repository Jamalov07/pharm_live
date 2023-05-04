<script setup></script>
<template>
  <div class="font-[Roboto]">
    <div class="bg-[#E9F3F2] py-4 px-2 sm:px-4 lg:px-4">
      <div class="container text-[#545360] text-[15px]">
        <div
          class="h-[240px] lg:h-[100px] flex justify-between items-center flex-col lg:flex-row"
        >
          <div>
            <img src="../../assets/icons/Logo.svg" alt="logo" />
          </div>
          <ul
            class="flex justify-between items-center flex-col lg:flex-row w-full h-[140px] lg:h-auto lg:w-1/4"
          >
            <li>
              <router-link to="/"> {{ $t("advantages") }} </router-link>
            </li>
            <li>
              <router-link to="/about"> {{ $t("about_us") }} </router-link>
            </li>
            <li>
              <router-link to="/comments"> {{ $t("comments") }} </router-link>
            </li>
            <li>
              <router-link to="/contacts"> {{ $t("contacts") }} </router-link>
            </li>
          </ul>
          <ul
            class="flex justify-around lg:justify-between items-center w-full lg:w-[30%]"
          >
            <li>
              <div
                class="w-12 h-12 rounded-full border border-[#40B75B] p-2 flex justify-center items-center"
              >
                <i
                  class="bx bxl-telegram px-2 py-1 text-xl bg-[#40B75B] text-white rounded-full block"
                ></i>
              </div>
            </li>
            <li>
              <div
                class="w-12 h-12 rounded-full border border-[#40B75B] p-2 flex justify-center items-center"
              >
                <i
                  class="bx bxl-facebook px-2 py-1 text-xl bg-[#40B75B] text-white rounded-full block"
                ></i>
              </div>
            </li>
            <li>
              <div
                class="w-12 h-12 rounded-full border border-[#40B75B] p-2 flex justify-center items-center"
              >
                <i
                  class="bx bxl-instagram px-2 py-1 text-xl bg-[#40B75B] text-white rounded-full block"
                ></i>
              </div>
            </li>
            <li class="hidden lg:block">
              <div
                class="w-12 h-12 rounded-full border border-[#40B75B] p-2 flex justify-center items-center"
              >
                <i
                  class="bx bxl-twitter px-2 py-1 text-xl bg-[#40B75B] text-white rounded-full block"
                ></i>
              </div>
            </li>
            <li class="hidden lg:block">
              <div
                class="w-12 h-12 rounded-full border border-[#40B75B] p-2 flex justify-center items-center"
              >
                <i
                  class="bx bxl-whatsapp px-2 py-1 text-xl bg-[#40B75B] text-white rounded-full block"
                ></i>
              </div>
            </li>
            <li>
              <div
                class="w-12 h-12 rounded-full border border-[#40B75B] p-2 flex justify-center items-center"
              >
                <i
                  class="bx bxl-youtube px-2 py-1 text-xl bg-[#40B75B] text-white rounded-full block"
                ></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="bg-[#40B75B] min-h-[54px] flex justify-center items-center text-white px-2 sm:px-4 lg:px-4"
    >
      <div
        class="container text-center lg:p-0 p-4 flex justify-between lg:flex-row flex-col items-center gap-6 lg:gap-0"
      >
        <div>{{ $t("footer_p") }}</div>
        <div class="flex justify-between items-center gap-2 lg:w-1/5">
          <div>{{ $t("footer_p_2") }}</div>
          <h1 class="text-2xl font-thin">Viento</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
ul > li > div {
  cursor: pointer;
}
</style>
