<template>
  <div class="pt-4 sm:pt-12 flex flex-col gap-4 items-center">
    <swiper
      :slides-per-view="1"
      :space-between="20"
      :cssMode="true"
      :navigation="true"
      :pagination="true"
      :mousewheel="true"
      :keyboard="true"
      :modules="modules"
      :breakpoints="swiperOptions.breakpoints"
      class="mySwiper h-[400px] sm:h-[360px] md:h-[360px] lg:h-[350px]"
    >
      <swiper-slide class="hidden lg:block">
        <div
          class="flex opacity-0 h-full flex-col justify-between items-center p-2"
        >
          <img
            src="../../assets/images/Ellipse 42 (1).png"
            class="p-1 rounded-full"
            alt="img"
          />
          <div class="hidden flex-col justify-between items-center h-[200px]">
            <p class="text-[16px] text-[#32313E]">
              Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
              Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada
              dictum amet risus iaculis tincidunt. Libero vitae euismod sit
              ultricies turpis proin risus eget.
            </p>
            <div class="flex flex-col h-[30%]">
              <h1 class="text-[#40B75B] text-[22px]">Ahror Yusupov</h1>
              <p class="text-[#98999D] text-[21pxa]">CEO Apple</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!--  -->
      <swiper-slide>
        <div
          class="flex h-full gap-4 flex-col justify-between items-center p-2"
        >
          <img
            src="../../assets/images/Ellipse 42.png"
            class="p-1 rounded-full"
            alt="img"
          />
          <div
            class="hidden flex-col justify-between items-center gap-8 h-[200px]"
          >
            <p class="text-[16px] text-[#32313E]">
              Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
              Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada
              dictum amet risus iaculis tincidunt. Libero vitae euismod sit
              ultricies turpis proin risus eget.
            </p>
            <div class="flex flex-col h-[30%]">
              <h1 class="text-[#40B75B] text-[22px]">Ahror Yusupov</h1>
              <p class="text-[#98999D] text-[21pxa]">CEO Apple</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="flex h-full gap-4 flex-col justify-between items-center p-2"
        >
          <img
            src="../../assets/images/Ellipse 42 (1).png"
            class="p-1 rounded-full"
            alt="img"
          />
          <div
            class="hidden flex-col justify-between items-center gap-8 h-[200px]"
          >
            <p class="text-[16px] text-[#32313E]">
              Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
              Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada
              dictum amet risus iaculis tincidunt. Libero vitae euismod sit
              ultricies turpis proin risus eget.
            </p>
            <div class="flex flex-col h-[30%]">
              <h1 class="text-[#40B75B] text-[22px]">Ahror Yusupov</h1>
              <p class="text-[#98999D] text-[21pxa]">CEO Apple</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="flex h-full gap-4 flex-col justify-between items-center p-2"
        >
          <img
            src="../../assets/images/Ellipse 42 (2).png"
            class="p-1 rounded-full"
            alt="img"
          />
          <div
            class="hidden flex-col justify-between items-center gap-8 h-[200px]"
          >
            <p class="text-[16px] text-[#32313E]">
              Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
              Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada
              dictum amet risus iaculis tincidunt. Libero vitae euismod sit
              ultricies turpis proin risus eget.
            </p>
            <div class="flex flex-col h-[30%]">
              <h1 class="text-[#40B75B] text-[22px]">Ahror Yusupov</h1>
              <p class="text-[#98999D] text-[21pxa]">CEO Apple</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="flex h-full gap-4 flex-col justify-between items-center p-2"
        >
          <img
            src="../../assets/images/Ellipse 42 (3).png"
            class="p-1 rounded-full"
            alt="img"
          />
          <div
            class="hidden flex-col justify-between items-center gap-8 h-[200px]"
          >
            <p class="text-[16px] text-[#32313E]">
              Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
              Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada
              dictum amet risus iaculis tincidunt. Libero vitae euismod sit
              ultricies turpis proin risus eget.
            </p>
            <div class="flex flex-col h-[30%]">
              <h1 class="text-[#40B75B] text-[22px]">Ahror Yusupov</h1>
              <p class="text-[#98999D] text-[21pxa]">CEO Apple</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="flex h-full gap-4 flex-col justify-between items-center p-2"
        >
          <img
            src="../../assets/images/Ellipse 42 (4).png"
            class="p-1 rounded-full"
            alt="img"
          />
          <div
            class="hidden flex-col justify-between items-center gap-8 h-[200px]"
          >
            <p class="text-[16px] text-[#32313E]">
              Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
              Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada
              dictum amet risus iaculis tincidunt. Libero vitae euismod sit
              ultricies turpis proin risus eget.
            </p>
            <div class="flex flex-col h-[30%]">
              <h1 class="text-[#40B75B] text-[22px]">Ahror Yusupov</h1>
              <p class="text-[#98999D] text-[21pxa]">CEO Apple</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!--  -->
      <swiper-slide class="hidden lg:block">
        <div
          class="flex h-full opacity-0 flex-col justify-between items-center p-2"
        >
          <img
            src="../../assets/images/Ellipse 42 (1).png"
            class="p-1 rounded-full"
            alt="img"
          />
          <div class="hidden flex-col justify-between items-center h-[200px]">
            <p class="text-[16px] text-[#32313E]">
              Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
              Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada
              dictum amet risus iaculis tincidunt. Libero vitae euismod sit
              ultricies turpis proin risus eget.
            </p>
            <div class="flex flex-col h-[30%]">
              <h1 class="text-[#40B75B] text-[22px]">Ahror Yusupov</h1>
              <p class="text-[#98999D] text-[21pxa]">CEO Apple</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="w-full flex justify-center items-center">
      <div
        class="flex w-[20%] sm:w-[16%] md:w-[20%] lg:w-[10%] justify-between items-center"
      >
        <button
          @click="prev"
          class="w-10 h-10 rounded-full border border-[#40b75b] bg-white"
        >
          <i class="bx bx-chevron-left text-[#40b75b] text-2xl"></i>
        </button>
        <button
          @click="next"
          class="w-10 h-10 rounded-full border border-white bg-[#40b75b]"
        >
          <i class="bx bx-chevron-right text-white text-2xl"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default {
  name: "Recommendations",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Mousewheel, Keyboard, Navigation],
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          520: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          770: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      },
    };
  },
  methods: {
    next() {
      document.querySelector(".swiper").swiper.slideNext();
    },
    prev() {
      document.querySelector(".swiper").swiper.slidePrev();
    },
  },
};
</script>
<style>
.mySwiper {
  padding: 0px !important;
  margin: 0px !important;
}
.swiper {
  width: 100%;
  box-sizing: border-box !important;
  padding: 0px !important;
  height: auto;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
}

.swiper-slide > div > img {
  width: 80px;
  cursor: pointer;
}
.swiper-button-prev,
.swiper-button-next {
  display: none;
}

.swiper-slide-next > div > img {
  outline: 3px solid #40b75b;
  width: 110px !important;
}

.swiper-slide-active > div {
  display: flex !important;
}

.swiper-slide-next > div > div {
  display: flex;
  text-align: center;
}
</style>
