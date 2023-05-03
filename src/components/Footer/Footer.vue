<script setup></script>
<template>
  <div class="font-[Roboto]">
    <div class="bg-[#E9F3F2]">
      <div class="container text-[#545360] text-[15px]">
        <div class="h-[150px] flex justify-between items-center">
          <div>
            <img src="../../assets/icons/Logo.svg" alt="logo" />
          </div>
          <ul class="flex justify-between items-center w-1/4">
            <li>
              <router-link to="/">Advantages</router-link>
            </li>
            <li>
              <router-link to="/about">About us</router-link>
            </li>
            <li>
              <router-link to="/comments">Comments</router-link>
            </li>
            <li>
              <router-link to="/contacts">Contacts</router-link>
            </li>
          </ul>
          <ul class="flex justify-between items-center w-[30%]">
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
            <li>
              <div
                class="w-12 h-12 rounded-full border border-[#40B75B] p-2 flex justify-center items-center"
              >
                <i
                  class="bx bxl-twitter px-2 py-1 text-xl bg-[#40B75B] text-white rounded-full block"
                ></i>
              </div>
            </li>
            <li>
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
    <div class="bg-[#40B75B] text-white">
      <div class="container h-[54px] flex justify-between items-center">
        <div>© 2023 Все права защищены. OOO “Viento group”</div>
        <div class="flex justify-between items-center w-1/5">
          <div>Разработка сайта:</div>
          <h1 class="text-2xl font-thin">Viento</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
