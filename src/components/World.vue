<template>
  <div class="world-container">
    <div class="text-h2">О мире Квазар</div>
    <div class="world">
      <div class="arrow-left" @click="prevSlide">
        <!-- <img src="../assets/arr_left.png" alt="Previous Slide" /> -->
      </div>
      <div class="world__content">
        <h3 class="world__title">{{ slides[currentSlide].title }}</h3>
        <p class="world__text">{{ slides[currentSlide].text }}</p>
        <img :src="slides[currentSlide].img" class="world__img" />
      </div>
      <div class="arrow-right" @click="nextSlide">
        <img src="../assets/arr_right.png" alt="Next Slide" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentSlide = ref(0);
const slides = [
  {
    title: "Кабинет Космобиологии",
    text: "Это настоящий оазис в Реянской школе. Здесь так много разнообразных растений, что можно провести не один час, любуясь их красотой. Особое восхищение вызывает «Purpura Великолепная». Растение с крупными пурпурными цветами, которые источают нежный аромат.",
    //img: "/src/assets/cosmobiology.png",
  },
  {
    title: "Кабинет Межпланетной истории",
    text: "Межпланетная история — это один из самых интересных и в то же время сложных предметов в школе. Амальтея настолько увлекается изучением межпланетной истории, что может проводить в кабинете много времени. После этого она с радостью делится с землянами интересными фактами, которые узнала.",
    // img: "/src/assets/history.png",
  },
  {
    title: "Кабинет Астрономии",
    text: "Кабинет астрономии — это место, где проходят уроки по изучению различных планет, звёзд и созвездий. Это любимый предмет Квази, он часто засматривается на фотографию звезды Sirius, висящую на стене возле его парты, размышляя о её характеристиках и особенностях.",
    //img: "/src/assets/astronomy.png",
  },
  {
    title: "Учебный класс",
    text: "Это кабинет, где проходят все остальные уроки. Здесь ученики изучают различные предметы, которые не связаны с космосом. Главная особенность учебного класса — это «ГалактикаТех». «ГалактикаТех» включает в себя различные устройства и инструменты, которые помогают ученикам получать новые знания и навыки ",
    // img: "/src/assets/school_class.png",
  },
];

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};
</script>

<style>
.world {
  border: 5px solid black;
  border-radius: 20px;
  max-width: 1157px;
  margin: 0 auto;
  position: relative;
}

.world__content {
  max-width: 790px;
  margin: 0 auto;
}

.world__content::before {
  content: url("../assets/arr_left.png");
  position: absolute;
  left: 50px;
}

.world__title {
  font-family: "BrokenLed";
  font-size: 44px;
  font-weight: 400;
  line-height: 48.4px;
  text-align: left;
  color: #ffffff;
  margin: 50px 0 40px 0;
}
.world__text {
  font-family: "Geologica";
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  color: #ffffff;
  margin-bottom: 40px;
}
.world__img {
  margin-bottom: 50px;
}
</style>
