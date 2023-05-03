<script setup>
import Plus from "../Icons/Plus.vue";
import Circle from "../Icons/Circle.vue";
</script>
<template>
  <div class="bg-white font-[Roboto] overflow-hidden">
    <div class="flex flex-col justify-center items-center container">
      <div class="relative">
        <Plus class="top-4 -right-10 w-6 h-6" />
        <h1 class="text-[28px] lg:text-[34px] text-[#32313E] font-bold">
          Our advantages
        </h1>
      </div>
      <!--  -->
      <div class="w-full h-[1400px] lg:h-[727px] flex justify-center flex-wrap">
        <div class="relative h-[727px] w-full lg:w-1/2">
          <div
            class="absolute w-[800px] secondphone h-[600px] -right-60 top-40"
          ></div>
          <img
            class="absolute top-20 right-2 sm:right-[15%] md:right-[25%] lg:right-44 z-20 h-[500px] w-[240px]"
            src="../../assets/images/MockUp.png"
            alt="img"
          />

          <div
            class="absolute w-[800px] firstphone -left-[120px] top-48 h-[600px]"
          ></div>
          <img
            class="absolute top-48 left-2 sm:right-[45%] md:left-[30%] lg:left-0 z-20 h-[500px] w-[240px]"
            src="../../assets/images/MockUp.png"
            alt="img"
          />
        </div>
        <div
          class="h-[727px] px-2 sm:px-4 lg:px-4 w-full lg:w-1/2 flex items-center"
        >
          <div class="h-2/3 lg:w-2/3 mx-auto flex flex-col justify-between">
            <h1 class="text-[#32313E] text-[28px] font-bold">Buy online</h1>
            <p class="text-[#545360] text-[16px]">
              Преимущества покупок в интернете и какие удобства это дает вам!
            </p>
            <ul
              class="h-[70%] flex flex-col text-[#545360] text-[16px] justify-between"
            >
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/Vector.svg"
                    alt="img"
                  />
                </div>
                <h1>Помогает сэкономить время</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/truck-time.svg"
                    alt="img"
                  />
                </div>
                <h1>Использование службы доставки</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/box-tick.svg"
                    alt="img"
                  />
                </div>
                <h1>Предварительный заказ лекарств</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
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
    <!--  cashback -->
    <div
      class="h-auto lg:h-[727px] w-full bg-[#E9F3F2] relative overflow-hidden"
    >
      <img
        class="absolute -top-20 -left-20 lg:top-0 lg:left-0"
        src="../../assets/images/freepik--background-complete--inject-12.png"
        alt="img"
      />
      <img
        class="absolute top-48 lg:top-20 -right-60 lg:-right-20 w-[500px] lg:w-[800px] h-[500px] lg:h-[800px]"
        src="../../assets/images/freepik--background-complete--inject-12.png"
        alt="img"
      />

      <div
        class="w-full h-full px-2 sm:px-4 lg:px-4 py-2 container flex items-center flex-col-reverse lg:flex-grow flex-wrap"
      >
        <div class="h-full flex items-center mx-auto pb-8 lg:w-1/2">
          <div
            class="h-[400px] w-full lg:h-2/3 lg:w-2/3 flex flex-col justify-between"
          >
            <h1 class="text-[#32313E] text-[28px] font-bold">Buy online</h1>
            <p class="text-[#545360] text-[16px]">
              Преимущества покупок в интернете и какие удобства это дает вам!
            </p>
            <ul
              class="h-[70%] flex flex-col text-[#545360] text-[16px] justify-between"
            >
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/Vector.svg"
                    alt="img"
                  />
                </div>
                <h1>Помогает сэкономить время</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/truck-time.svg"
                    alt="img"
                  />
                </div>
                <h1>Использование службы доставки</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/box-tick.svg"
                    alt="img"
                  />
                </div>
                <h1>Предварительный заказ лекарств</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
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
        <div class="relative z-10">
          <Plus class="top-10 left-40 w-3 h-3" />
          <Plus class="top-20 left-5 lg:left-20 w-6 h-6" />
          <Circle class="w-5 h-5 top-40 lg:top-28 left-4 lg:left-28" />
          <img
            class="h-[500px] lg:h-auto w-[500px] md:w-auto object-cover"
            src="../../assets/images/iPhone 13 Pro.png"
            alt=""
          />
          <Circle class="bottom-10 lg:bottom-16 right-60 lg:right-40 w-3 h-3" />
          <Circle class="bottom-20 right-4 lg:right-20 w-6 h-6" />
          <Circle class="w-5 h-5 bottom-10 right-28" />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="w-full overflow-hidden">
      <div class="flex items-center h-full container justify-between flex-wrap">
        <!--  -->
        <div class="w-full lg:w-[45%] h-[627px] relative">
          <div class="relative z-10 h-full w-full newbike">
            <Plus class="top-60 right-20 w-6 h-6" />
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
          <div class="bike2">
            <img
              class="absolute bottom-0 z-10 left-10"
              src="../../assets/images/Kerfin7_NEA_2375 1.png"
              alt="img"
            />
          </div>
          <!--  -->
        </div>
        <div
          class="h-[727px] px-2 sm:px-4 lg:px-4 flex items-center mx-auto lg:w-[45%]"
        >
          <div class="h-2/3 w-full lg:w-2/3 flex flex-col justify-between">
            <h1 class="text-[#32313E] text-[28px] font-bold">Buy online</h1>
            <p class="text-[#545360] text-[16px]">
              Преимущества покупок в интернете и какие удобства это дает вам!
            </p>
            <ul
              class="h-[70%] flex flex-col text-[#545360] text-[16px] justify-between"
            >
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/Vector.svg"
                    alt="img"
                  />
                </div>
                <h1>Помогает сэкономить время</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/truck-time.svg"
                    alt="img"
                  />
                </div>
                <h1>Использование службы доставки</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/box-tick.svg"
                    alt="img"
                  />
                </div>
                <h1>Предварительный заказ лекарств</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
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
      <div
        class="w-full flex items-center justify-between flex-col-reverse lg:flex-row"
      >
        <div class="h-[727px] flex items-center mx-auto lg:w-1/2">
          <div
            class="h-2/3 lg:w-2/3 w-full px-2 sm:px-4 lg:px-4 flex flex-col justify-between"
          >
            <h1 class="text-[#32313E] text-[28px] font-bold">Buy online</h1>
            <p class="text-[#545360] text-[16px]">
              Преимущества покупок в интернете и какие удобства это дает вам!
            </p>
            <ul
              class="h-[70%] flex flex-col text-[#545360] text-[16px] justify-between"
            >
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/Vector.svg"
                    alt="img"
                  />
                </div>
                <h1>Помогает сэкономить время</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/truck-time.svg"
                    alt="img"
                  />
                </div>
                <h1>Использование службы доставки</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
                  <img
                    class="w-5 h-5"
                    src="../../assets/icons/box-tick.svg"
                    alt="img"
                  />
                </div>
                <h1>Предварительный заказ лекарств</h1>
              </li>
              <li class="flex items-center gap-5">
                <div class="rounded-[16px] boxshadow p-5 bg-white">
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
        <div class="relative h-[727px] w-full lg:w-1/2">
          <div
            class="absolute w-[800px] secondphone h-[800px] -right-60 top-0"
          ></div>
          <img
            class="absolute top-20 right-2 md:right-[20%] lg:right-44 z-20 h-[500px] w-[240px]"
            src="../../assets/images/MockUp (3).png"
            alt="img"
          />

          <div
            class="absolute w-[800px] thirdphone -left-[120px] top-48 h-[600px]"
          ></div>
          <img
            class="absolute top-48 left-2 md:left-[20%] lg:left-0 z-20 h-[500px] w-[240px]"
            src="../../assets/images/MockUp (3).png"
            alt="img"
          />
          <div class="absolute top-96 left-2 md:left-[12%] lg:-left-20 z-40">
            <img src="../../assets/images/Frame 754.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="bg-[#E9F3F2] w-full overflow-hidden py-4">
      <div
        class="container w-full flex justify-between flex-col-reverse lg:flex-row items-center gap-y-6"
      >
        <div
          class="flex px-2 sm:px-4 lg:px-4 h-[300px] flex-col justify-between items-center lg:items-stretch w-full lg:w-1/3"
        >
          <h1 class="hidden lg:block text-[#32313E] text-[34px] font-bold">
            Мобильные приложения Pharm Live
          </h1>
          <p class="hidden lg:block text-[#545360] text-[16px]">
            Мобильное приложение Pharm Live вы можете заказать необходимое
            лекарство, не выходя из дома!
          </p>
          <div class="h-[30%] flex flex-col gap-4">
            <p class="text-[#545360] text-[16px]">
              Скачать через Play Market или App Store!
            </p>
            <div
              class="flex items-center lg:flex-row flex-col gap-4 text-white"
            >
              <button
                class="flex h-[60px] px-6 py-3 gap-2 items-center rounded-[16px] bg-[#40B75B]"
              >
                <i class="bx bxl-play-store text-4xl"></i>
                <div class="flex flex-col justify-start items-start">
                  <p class="text-[10px]">GET IT ON</p>
                  <h1 class="text-[15px] font-semibold">Google Play</h1>
                </div>
              </button>
              <button
                class="flex h-[60px] px-6 py-3 gap-2 items-center rounded-[16px] bg-[#1A998E]"
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
        <div
          class="w-full lg:w-[50%] h-[400px] px-2 sm:px-4 lg:px-4 sm:h-[500px] md:h-[627px] p-5 relative"
        >
          <Plus class="top-40 lg:right-40 right-20 w-6 h-6" />
          <Plus class="bottom-80 left-10 lg:top-60 lg:-left-20 w-6 h-6" />
          <Plus class="top-10 left-60 w-3 h-3" />
          <Plus class="top-96 -left-10 w-3 h-3" />
          <Circle
            class="w-3 h-3 bottom-4 lg:bottom-8 right-36 lg:right-72 z-20"
          />
          <Circle
            class="w-3 h-3 bottom-14 lg:bottom-8 left-10 lg:left-0 z-20"
          />
          <Circle class="w-3 h-3 top-10 left-20 z-20" />

          <img
            class="w-full h-auto lg:h-[500px] absolute bottom-0"
            src="../../assets/images/iPhone 12 Pro (Wooden Hands).png"
            alt=""
          />
        </div>

        <div class="h-40 flex px-2 sm:px-4 lg:px-4 flex-col gap-5">
          <h1 class="lg:hidden text-[#32313E] text-[34px] font-bold">
            Мобильные приложения Pharm Live
          </h1>
          <p class="block lg:hidden text-[#545360] text-[16px]">
            Мобильное приложение Pharm Live вы можете заказать необходимое
            лекарство, не выходя из дома!
          </p>
        </div>
      </div>
    </div>
    <!--  -->
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

.bike2::before {
  content: "";
  position: absolute;
  border-radius: 100%;
  bottom: 0px;
  left: 20px;
  width: 40%;
  height: 40%;
  background: #00ff7f;
  opacity: 0.15;
  filter: blur(60px);
  z-index: 0;
}

.boxshadow {
  box-shadow: 0px 6px 30px rgba(64, 183, 91, 0.2);
}
</style>
