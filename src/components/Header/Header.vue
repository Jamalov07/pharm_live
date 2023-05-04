<script setup>
import { ref } from "vue";
const { t, locale } = useI18n({ useScope: "global" });
import { useI18n } from "vue-i18n";

let isMenuOpen = ref(false);
const select = ref("" || localStorage.getItem("lang"));
function toggleModal() {
  isMenuOpen.value = !isMenuOpen.value;
}

const switchLang = () => {
  locale.value = select.value;
  localStorage.setItem("lang", select.value);
};

function updateLang(lang) {
  locale.value = lang;
  select.value = lang;
  localStorage.setItem("lang", select.value);
}

function check(lang) {
return localStorage.getItem("lang") === lang;
}
</script>
<template>
  <div class="fixed top-0 right-0 left-0 z-50 bg-white px-2 sm:px-4 lg:px-4">
    <div class="container h-[70px]">
      <nav class="flex justify-between items-center text-[15px] font-[Roboto]">
        <div class="py-[10px]">
          <router-link to="/">
            <img src="../../assets/icons/Logo.svg" alt="logo" />
          </router-link>
        </div>
        <ul class="hidden lg:flex justify-between w-[30%] text-[#545360]">
          <li>
            <router-link to="/"> {{ $t("advantages") }} </router-link>
          </li>
          <li>
            <router-link to="/about">{{ $t("about_us") }}</router-link>
          </li>
          <li>
            <router-link to="/comments"> {{ $t("comments") }} </router-link>
          </li>
          <li>
            <router-link to="/contacts"> {{ $t("contacts") }} </router-link>
          </li>
        </ul>
        <div class="hidden lg:flex justify-between items-center">
          <button
            class="rounded-[30px] bg-[#40B75B] py-[14px] px-[20px] text-white flex justify-between items-center w-[166px] h-[48px]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3083 15.2748C18.3083 15.5748 18.2417 15.8832 18.1 16.1832C17.9583 16.4832 17.775 16.7665 17.5333 17.0332C17.125 17.4832 16.675 17.8082 16.1667 18.0165C15.6667 18.2248 15.125 18.3332 14.5417 18.3332C13.6917 18.3332 12.7833 18.1332 11.825 17.7248C10.8667 17.3165 9.90832 16.7665 8.95832 16.0748C7.99999 15.3748 7.09166 14.5998 6.22499 13.7415C5.36666 12.8748 4.59166 11.9665 3.89999 11.0165C3.21666 10.0665 2.66666 9.1165 2.26666 8.17484C1.86666 7.22484 1.66666 6.3165 1.66666 5.44984C1.66666 4.88317 1.76666 4.3415 1.96666 3.8415C2.16666 3.33317 2.48332 2.8665 2.92499 2.44984C3.45832 1.92484 4.04166 1.6665 4.65832 1.6665C4.89166 1.6665 5.12499 1.7165 5.33332 1.8165C5.54999 1.9165 5.74166 2.0665 5.89166 2.28317L7.82499 5.00817C7.97499 5.2165 8.08332 5.40817 8.15832 5.5915C8.23332 5.7665 8.27499 5.9415 8.27499 6.09984C8.27499 6.29984 8.21666 6.49984 8.09999 6.6915C7.99166 6.88317 7.83332 7.08317 7.63332 7.28317L6.99999 7.9415C6.90832 8.03317 6.86666 8.1415 6.86666 8.27484C6.86666 8.3415 6.87499 8.39984 6.89166 8.4665C6.91666 8.53317 6.94166 8.58317 6.95832 8.63317C7.10832 8.90817 7.36666 9.2665 7.73332 9.69984C8.10832 10.1332 8.50832 10.5748 8.94166 11.0165C9.39166 11.4582 9.82499 11.8665 10.2667 12.2415C10.7 12.6082 11.0583 12.8582 11.3417 13.0082C11.3833 13.0248 11.4333 13.0498 11.4917 13.0748C11.5583 13.0998 11.625 13.1082 11.7 13.1082C11.8417 13.1082 11.95 13.0582 12.0417 12.9665L12.675 12.3415C12.8833 12.1332 13.0833 11.9748 13.275 11.8748C13.4667 11.7582 13.6583 11.6998 13.8667 11.6998C14.025 11.6998 14.1917 11.7332 14.375 11.8082C14.5583 11.8832 14.75 11.9915 14.9583 12.1332L17.7167 14.0915C17.9333 14.2415 18.0833 14.4165 18.175 14.6248C18.2583 14.8332 18.3083 15.0415 18.3083 15.2748Z"
                fill="white"
              />
            </svg>
            <p>(71) 200 0707</p>
          </button>

          <div class="w-[114px] py-[14px] px-[20px]">
            <select
              @change="switchLang"
              v-model="select"
              name="langs"
              id="langs"
              class="border-0 cursor-pointer ring-0 focus:ring-0 text-[#40B75b] p-2"
            >
              <option :selected="check('uz')" value="uz">{{ $t("uz") }}</option>
              <option :selected="check('en')" value="en">{{ $t("en") }}</option>
              <option :selected="check('ru')" value="ru">
                <div>{{ $t("ru") }}</div>
              </option>
            </select>
          </div>
        </div>
        <div
          class="cursor-pointer bg-[#40B75B] my-[10px] flex lg:hidden justify-center items-center rounded-md"
        >
          <i
            v-if="!isMenuOpen"
            @click="toggleModal"
            class="bx bx-menu text-2xl text-white px-2 py-1"
          ></i>
          <i
            v-if="isMenuOpen"
            @click="toggleModal"
            class="bx bx-x text-2xl text-white px-2 py-1"
          ></i>
        </div>
      </nav>
    </div>
  </div>
  <div
    :class="[isMenuOpen ? 'block' : 'hidden']"
    class="h-[340px] lg:hidden w-full bg-white fixed top-[70px] z-40 font-[Roboto]"
  >
    <div class="flex justify-center items-center">
      <div class="flex flex-col gap-6">
        <ul
          class="flex flex-col gap-6 justify-between items-center text-[#545360]"
        >
          <li>
            <router-link @click="(e) => (isMenuOpen = false)" to="/">
              {{ $t("advantages") }}
            </router-link>
          </li>
          <li>
            <router-link @click="(e) => (isMenuOpen = false)" to="/about">{{
              $t("about_us")
            }}</router-link>
          </li>
          <li>
            <router-link @click="(e) => (isMenuOpen = false)" to="/comments">
              {{ $t("comments") }}
            </router-link>
          </li>
          <li>
            <router-link @click="(e) => (isMenuOpen = false)" to="/contacts">
              {{ $t("contacts") }}
            </router-link>
          </li>
        </ul>
        <button
          class="rounded-[30px] mx-auto bg-[#40B75B] py-[14px] px-[20px] text-white flex justify-between items-center w-[166px] h-[48px]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3083 15.2748C18.3083 15.5748 18.2417 15.8832 18.1 16.1832C17.9583 16.4832 17.775 16.7665 17.5333 17.0332C17.125 17.4832 16.675 17.8082 16.1667 18.0165C15.6667 18.2248 15.125 18.3332 14.5417 18.3332C13.6917 18.3332 12.7833 18.1332 11.825 17.7248C10.8667 17.3165 9.90832 16.7665 8.95832 16.0748C7.99999 15.3748 7.09166 14.5998 6.22499 13.7415C5.36666 12.8748 4.59166 11.9665 3.89999 11.0165C3.21666 10.0665 2.66666 9.1165 2.26666 8.17484C1.86666 7.22484 1.66666 6.3165 1.66666 5.44984C1.66666 4.88317 1.76666 4.3415 1.96666 3.8415C2.16666 3.33317 2.48332 2.8665 2.92499 2.44984C3.45832 1.92484 4.04166 1.6665 4.65832 1.6665C4.89166 1.6665 5.12499 1.7165 5.33332 1.8165C5.54999 1.9165 5.74166 2.0665 5.89166 2.28317L7.82499 5.00817C7.97499 5.2165 8.08332 5.40817 8.15832 5.5915C8.23332 5.7665 8.27499 5.9415 8.27499 6.09984C8.27499 6.29984 8.21666 6.49984 8.09999 6.6915C7.99166 6.88317 7.83332 7.08317 7.63332 7.28317L6.99999 7.9415C6.90832 8.03317 6.86666 8.1415 6.86666 8.27484C6.86666 8.3415 6.87499 8.39984 6.89166 8.4665C6.91666 8.53317 6.94166 8.58317 6.95832 8.63317C7.10832 8.90817 7.36666 9.2665 7.73332 9.69984C8.10832 10.1332 8.50832 10.5748 8.94166 11.0165C9.39166 11.4582 9.82499 11.8665 10.2667 12.2415C10.7 12.6082 11.0583 12.8582 11.3417 13.0082C11.3833 13.0248 11.4333 13.0498 11.4917 13.0748C11.5583 13.0998 11.625 13.1082 11.7 13.1082C11.8417 13.1082 11.95 13.0582 12.0417 12.9665L12.675 12.3415C12.8833 12.1332 13.0833 11.9748 13.275 11.8748C13.4667 11.7582 13.6583 11.6998 13.8667 11.6998C14.025 11.6998 14.1917 11.7332 14.375 11.8082C14.5583 11.8832 14.75 11.9915 14.9583 12.1332L17.7167 14.0915C17.9333 14.2415 18.0833 14.4165 18.175 14.6248C18.2583 14.8332 18.3083 15.0415 18.3083 15.2748Z"
              fill="white"
            />
          </svg>
          <p>(71) 200 0707</p>
        </button>

        <div
          class="w-full flex justify-between text-[#32313E] text-[16px] gap-10"
        >
          <label
            for="ru"
            @click="updateLang('ru')"
            class="flex cursor-pointer items-center gap-2"
          >
            <p>{{ $t("ru") }}</p>
            <div
              class="w-4 h-4 rounded-full border border-[#40b75b] flex justify-center items-center"
            >
              <div
                :class="[check('ru') ? 'block' : 'hidden']"
                class="rounded-full h-[10px] w-[10px] bg-[#40b75b]"
              ></div>
            </div>
          </label>
          <label
            for="en"
            @click="updateLang('en')"
            class="flex items-center cursor-pointer gap-2"
          >
            <p>{{ $t("en") }}</p>
            <div
              class="w-4 h-4 rounded-full border border-[#40b75b] flex justify-center items-center"
            >
              <div
                :class="[check('en') ? 'block' : 'hidden']"
                class="rounded-full h-[10px] w-[10px] bg-[#40b75b]"
              ></div>
            </div>
          </label>
          <label
            @click="updateLang('uz')"
            for="uz"
            class="flex cursor-pointer items-center gap-2"
          >
            <p>{{ $t("uz") }}</p>
            <div
              class="w-4 h-4 rounded-full border border-[#40b75b] flex justify-center items-center"
            >
              <div
                :class="[check('uz') ? 'block' : 'hidden']"
                class="rounded-full h-[10px] w-[10px] bg-[#40b75b]"
              ></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.router-link-active {
  color: #40b75b;
}
</style>
