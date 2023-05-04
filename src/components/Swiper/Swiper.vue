<template>
  <swiper
    :space-between="20"
    :cssMode="true"
    :mousewheel="true"
    :keyboard="true"
    :slidesPerView="5"
    :spaceBetween="0"
    :centeredSlides="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    :breakpoints="swiperOptions.breakpoints"
    class="swiper mySwiper mt-10 mb-4"
  >
    <swiper-slide>
      <div class="flex h-full flex-col justify-between items-center p-2">
        <img
          src="../../assets/images/Ellipse 42 (1).png"
          class="p-1 rounded-full"
          alt="img"
        />
        <div class="hidden flex-col justify-between items-center h-[200px]">
          <p class="text-[16px] text-[#32313E]">
            Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
            Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada dictum
            amet risus iaculis tincidunt. Libero vitae euismod sit ultricies
            turpis proin risus eget.
          </p>
          <div class="flex flex-col h-[30%]">
            <h1 class="text-[#40B75B] text-[22px]">Ahror Yusupov</h1>
            <p class="text-[#98999D] text-[21pxa]">CEO Apple</p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex h-full flex-col justify-between items-center p-2">
        <img
          src="../../assets/images/Ellipse 42 (1).png"
          class="p-1 rounded-full"
          alt="img"
        />
        <div class="hidden flex-col justify-between items-center h-[200px]">
          <p class="text-[16px] text-[#32313E]">
            Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
            Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada dictum
            amet risus iaculis tincidunt. Libero vitae euismod sit ultricies
            turpis proin risus eget.
          </p>
          <div class="flex flex-col h-[30%]">
            <h1 class="text-[#40B75B] text-[22px]">Ahror Yusupov</h1>
            <p class="text-[#98999D] text-[21pxa]">CEO Apple</p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex h-full flex-col justify-between items-center p-2">
        <img
          src="../../assets/images/Ellipse 42 (1).png"
          class="p-1 rounded-full"
          alt="img"
        />
        <div class="hidden flex-col justify-between items-center h-[200px]">
          <p class="text-[16px] text-[#32313E]">
            Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
            Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada dictum
            amet risus iaculis tincidunt. Libero vitae euismod sit ultricies
            turpis proin risus eget.
          </p>
          <div class="flex flex-col h-[30%]">
            <h1 class="text-[#40B75B] text-[22px]">Ahror Yusupov</h1>
            <p class="text-[#98999D] text-[21pxa]">CEO Apple</p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex h-full flex-col justify-between items-center p-2">
        <img
          src="../../assets/images/Ellipse 42 (1).png"
          class="p-1 rounded-full"
          alt="img"
        />
        <div class="hidden flex-col justify-between items-center h-[200px]">
          <p class="text-[16px] text-[#32313E]">
            Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
            Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada dictum
            amet risus iaculis tincidunt. Libero vitae euismod sit ultricies
            turpis proin risus eget.
          </p>
          <div class="flex flex-col h-[30%]">
            <h1 class="text-[#40B75B] text-[22px]">Ahror Yusupov</h1>
            <p class="text-[#98999D] text-[21pxa]">CEO Apple</p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex h-full flex-col justify-between items-center p-2">
        <img
          src="../../assets/images/Ellipse 42 (1).png"
          class="p-1 rounded-full"
          alt="img"
        />
        <div class="hidden flex-col justify-between items-center h-[200px]">
          <p class="text-[16px] text-[#32313E]">
            Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
            Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada dictum
            amet risus iaculis tincidunt. Libero vitae euismod sit ultricies
            turpis proin risus eget.
          </p>
          <div class="flex flex-col h-[30%]">
            <h1 class="text-[#40B75B] text-[22px]">Ahror Yusupov</h1>
            <p class="text-[#98999D] text-[21pxa]">CEO Apple</p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex h-full flex-col justify-between items-center p-2">
        <img
          src="../../assets/images/Ellipse 42 (1).png"
          class="p-1 rounded-full"
          alt="img"
        />
        <div class="hidden flex-col justify-between items-center h-[200px]">
          <p class="text-[16px] text-[#32313E]">
            Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
            Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada dictum
            amet risus iaculis tincidunt. Libero vitae euismod sit ultricies
            turpis proin risus eget.
          </p>
          <div class="flex flex-col h-[30%]">
            <h1 class="text-[#40B75B] text-[22px]">Ahror Yusupov</h1>
            <p class="text-[#98999D] text-[21pxa]">CEO Apple</p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex h-full flex-col justify-between items-center p-2">
        <img
          src="../../assets/images/Ellipse 42 (1).png"
          class="p-1 rounded-full"
          alt="img"
        />
        <div class="hidden flex-col justify-between items-center h-[200px]">
          <p class="text-[16px] text-[#32313E]">
            Lorem ipsum dolor sit amet consectetur. Dui sit dictum nibh duis.
            Imperdiet turpis egestas gravida sit arcu lacus. Et malesuada dictum
            amet risus iaculis tincidunt. Libero vitae euismod sit ultricies
            turpis proin risus eget.
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
    <div class="flex w-[40%] lg:w-[10%] justify-between items-center">
      <button @click="prev" class="w-10 h-10 rounded-full bg-sky-600">
        <i class="bx bx-chevron-left text-white text-2xl"></i>
      </button>
      <button @click="next" class="w-10 h-10 rounded-full bg-sky-600">
        <i class="bx bx-chevron-right text-white text-2xl"></i>
      </button>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiper = useSwiper();
    return {
      swiper,
      modules: [Pagination, Navigation],
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          520: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1350: {
            slidesPerView: 5.3,
            spaceBetween: 50,
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

<style scoped>
.swiper {
  width: 100%;
  height: 400px !important;
  background: yellow;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px !important;
  background: red;
}

.swiper-slide > div > img {
  margin-top: 20px;
}

.swiper-slide-active > div > img {
  margin-top: 0px;
}

.swiper-slide {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  width: 180px !important;
}

.swiper-slide > div > div {
  display: none;
}

.swiper-slide-active > div {
  display: flex !important;
}
v
.swiper-slide-active > div > img {
  outline: 3px solid #40b75b;
  width: 110px !important;
}
.swiper-slide-active {
  width: 400px !important;
  background: green;
}
</style>
