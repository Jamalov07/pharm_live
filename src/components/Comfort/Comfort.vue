<script setup>
import Comfortcard from "../Card/Comfortcard.vue";
</script>
<template>
  <div class="mt-28 bg-white font-[Roboto]">
    <div class="flex flex-col justify-center items-center gap-y-5 container">
      <h1 class="text-[34px] text-[#32313E] font-bold">Our advantages</h1>
      <div class="w-full h-[727px] flex justify-between ml-40">
        <div class="relative h-full w-1/2">
          <div
            class="absolute w-[800px] secondphone h-[600px] -right-60 top-40"
          ></div>
          <img
            class="absolute top-20 right-44 z-20 h-[500px] w-[240px]"
            src="../../assets/images/MockUp.png"
            alt="img"
          />

          <div
            class="absolute w-[800px] firstphone -left-[120px] top-48 h-[600px]"
          ></div>
          <img
            class="absolute top-48 left-0 z-20 h-[500px] w-[240px]"
            src="../../assets/images/MockUp.png"
            alt="img"
          />
        </div>
        <div class="h-full flex items-center w-1/2">
          <div class="h-2/3 w-2/3 flex flex-col justify-between">
            <h1 class="text-[#32313E] text-[28px] font-bold">Buy online</h1>
            <p class="text-[#545360] text-[16px]">
              Преимущества покупок в интернете и какие удобства это дает вам!
            </p>
            <ul
              class="h-[70%] flex flex-col text-[#545360] text-[16px] justify-between"
            >
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/Vector.svg"
                    alt="img"
                  />
                </div>
                <h1>Помогает сэкономить время</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/truck-time.svg"
                    alt="img"
                  />
                </div>
                <h1>Использование службы доставки</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/box-tick.svg"
                    alt="img"
                  />
                </div>
                <h1>Предварительный заказ лекарств</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/book.svg"
                    alt="img"
                  />
                </div>
                <h1>Подробная информация о препарате</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="h-[727px] w-full bg-[#E9F3F2] relative overflow-hidden">
      <img
        class="absolute top-0 left-0"
        src="../../assets/images/freepik--background-complete--inject-12.png"
        alt="img"
      />
      <img
        class="absolute -bottom-20 -right-20 w-[600px] h-[600px]"
        src="../../assets/images/freepik--background-complete--inject-12.png"
        alt="img"
      />

      <div class="w-full h-full container flex justify-between items-center">
        <div class="h-full flex items-center w-1/2">
          <div class="h-2/3 w-2/3 flex flex-col justify-between">
            <h1 class="text-[#32313E] text-[28px] font-bold">Buy online</h1>
            <p class="text-[#545360] text-[16px]">
              Преимущества покупок в интернете и какие удобства это дает вам!
            </p>
            <ul
              class="h-[70%] flex flex-col text-[#545360] text-[16px] justify-between"
            >
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/Vector.svg"
                    alt="img"
                  />
                </div>
                <h1>Помогает сэкономить время</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/truck-time.svg"
                    alt="img"
                  />
                </div>
                <h1>Использование службы доставки</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/box-tick.svg"
                    alt="img"
                  />
                </div>
                <h1>Предварительный заказ лекарств</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/book.svg"
                    alt="img"
                  />
                </div>
                <h1>Подробная информация о препарате</h1>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-1/2 relative z-10">
          <img src="../../assets/images/iPhone 13 Pro.png" alt="" />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="h-[727px] w-full bg-white">
      <div class="flex items-center h-full container justify-between">
        <!--  -->
        <div class="w-[45%] h-full relative">
          <div class="relative h-full w-full newbike">
            <div class="absolute left-[10%] top-[14%]">
              <img src="../../assets/images/Card.png" alt="" />
            </div>
            <div class="absolute left-[15%] top-[24%]">
              <img src="../../assets/images/Card (1).png" alt="" />
            </div>
            <div class="absolute left-[20%] top-[34%]">
              <img src="../../assets/images/Frame 8.png" alt="" />
            </div>
          </div>
          <div>
            <img
              class="absolute bottom-0 left-10"
              src="../../assets/images/Kerfin7_NEA_2375 1.png"
              alt="img"
            />
          </div>
          <!--  -->
        </div>
        <div class="h-full flex items-center w-[45%]">
          <div class="h-2/3 w-2/3 flex flex-col justify-between">
            <h1 class="text-[#32313E] text-[28px] font-bold">Buy online</h1>
            <p class="text-[#545360] text-[16px]">
              Преимущества покупок в интернете и какие удобства это дает вам!
            </p>
            <ul
              class="h-[70%] flex flex-col text-[#545360] text-[16px] justify-between"
            >
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/Vector.svg"
                    alt="img"
                  />
                </div>
                <h1>Помогает сэкономить время</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/truck-time.svg"
                    alt="img"
                  />
                </div>
                <h1>Использование службы доставки</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/box-tick.svg"
                    alt="img"
                  />
                </div>
                <h1>Предварительный заказ лекарств</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/book.svg"
                    alt="img"
                  />
                </div>
                <h1>Подробная информация о препарате</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="container">
      <div class="w-full h-[727px] flex items-center justify-between">
        <div class="h-full flex items-center w-1/2">
          <div class="h-2/3 w-2/3 flex flex-col justify-between">
            <h1 class="text-[#32313E] text-[28px] font-bold">Buy online</h1>
            <p class="text-[#545360] text-[16px]">
              Преимущества покупок в интернете и какие удобства это дает вам!
            </p>
            <ul
              class="h-[70%] flex flex-col text-[#545360] text-[16px] justify-between"
            >
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/Vector.svg"
                    alt="img"
                  />
                </div>
                <h1>Помогает сэкономить время</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/truck-time.svg"
                    alt="img"
                  />
                </div>
                <h1>Использование службы доставки</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/box-tick.svg"
                    alt="img"
                  />
                </div>
                <h1>Предварительный заказ лекарств</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] p-5 shadow-md bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/book.svg"
                    alt="img"
                  />
                </div>
                <h1>Подробная информация о препарате</h1>
              </li>
            </ul>
          </div>
        </div>
        <div class="relative h-full w-1/2">
          <div
            class="absolute w-[800px] secondphone h-[800px] -right-60 top-0"
          ></div>
          <img
            class="absolute top-20 right-44 z-20 h-[500px] w-[240px]"
            src="../../assets/images/MockUp.png"
            alt="img"
          />

          <div
            class="absolute w-[800px] thirdphone -left-[120px] top-48 h-[600px]"
          ></div>
          <img
            class="absolute top-48 left-0 z-20 h-[500px] w-[240px]"
            src="../../assets/images/MockUp.png"
            alt="img"
          />
          <div class="absolute top-96 -left-20 z-40">
            <img src="../../assets/images/Frame 754.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="h-[727px] bg-[#E9F3F2] w-full">
      <div class="container h-full w-full flex justify-between items-center">
        <div class="flex flex-col justify-between h-1/2 w-1/3">
          <h1 class="text-[#32313E] text-[34px] font-bold">
            Мобильные приложения Pharm Live
          </h1>
          <p class="text-[#545360] text-[16px]">
            Мобильное приложение Pharm Live вы можете заказать необходимое
            лекарство, не выходя из дома!
          </p>
          <div class="h-[30%]">
            <p class="text-[#545360] text-[16px]">
              Скачать через Play Market или App Store!
            </p>
            <div class="flex items-center gap-4 text-white">
              <button
                class="flex px-6 py-3 gap-4 items-center rounded-[16px] bg-[#40B75B]"
              >
                <i class="bx bxl-play-store text-4xl"></i>
                <div class="flex flex-col justify-start items-start">
                  <p class="text-[10px]">GET IT ON</p>
                  <h1 class="text-[15px] font-semibold">Google Play</h1>
                </div>
              </button>
              <button
                class="flex px-6 py-3 gap-4 items-center rounded-[16px] bg-[#1A998E]"
              >
                <i class="bx bxl-apple text-4xl"></i>
                <div class="flex flex-col justify-start items-start">
                  <p class="text-[10px]">DOWNLOAD ON THE</p>
                  <h1 class="text-[15px] font-semibold">Apple Store</h1>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="w-[60%] h-full relative">
          <img
            class="w-full h-[600px] absolute bottom-0"
            src="../../assets/images/iPhone 12 Pro (Wooden Hands).png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.firstphone::before {
  content: "";
  position: absolute;
  border-radius: 100%;
  top: 0;
  left: 0;
  width: 60%;
  height: 80%;
  background: #431a99;
  opacity: 0.2;
  filter: blur(60px);
  z-index: 1;
}

.secondphone::before {
  content: "";
  position: absolute;
  border-radius: 100%;
  top: 0;
  left: 0;
  width: 60%;
  height: 90%;
  background: #40b75b;
  opacity: 0.2;
  filter: blur(60px);
  z-index: 1;
}

.newbike::before {
  content: "";
  position: absolute !important;
  border-radius: 100%;
  top: 90px;
  left: 80px;
  width: 80%;
  height: 60%;
  background: #cf966c;
  opacity: 0.15;
  filter: blur(60px);
  z-index: 0;
}
.thirdphone::before {
  content: "";
  position: absolute;
  border-radius: 100%;
  top: 0;
  left: 0;
  width: 60%;
  height: 80%;
  background: #00ff7f;
  opacity: 0.15;
  filter: blur(60px);
  z-index: 0;
}
</style>
