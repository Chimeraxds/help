<template>
  <div>
    <div class="text-h2">О мире Квазар</div>
    <q-carousel
      v-model="slide"
      swipeable
      animated
      :vertical="vertical"
      :navigation="false"
      class="bg-transparent text-white rounded-borders custom-carousel"
    >
      <!-- Custom navigation controls -->
      <template v-slot:control>
        <div class="custom-controls">
          <div
            :class="{
              'active-control': slide === 'style',
              'rotate-arrow': slide === 'style',
            }"
            @click="goToSlide('style')"
          >
            <img src="../assets/arr_down.png" />
          </div>
          <div
            :class="{
              'active-control': slide === 'tv',
              'rotate-arrow': slide === 'tv',
            }"
            @click="goToSlide('tv')"
          >
            <img src="../assets/arr_down.png" />
          </div>
          <div
            :class="{
              'active-control': slide === 'layers',
              'rotate-arrow': slide === 'layers',
            }"
            @click="goToSlide('layers')"
          >
            <img src="../assets/arr_down.png" />
          </div>
          <div
            :class="{
              'active-control': slide === 'map',
              'rotate-arrow': slide === 'map',
            }"
            @click="goToSlide('map')"
          >
            <img src="../assets/arr_down.png" />
          </div>
        </div>
      </template>

      <q-carousel-slide
        name="style"
        class="custom-slide-cosmology custom-slide"
      >
        <div class="custom-slide__wrapper relative">
          <!-- <h3 class="custom-slide__title">Кабинет Космобиологии</h3>
          <div class="q-mt-md text-left custom-slide__text">
            Это настоящий оазис в Реянской школе. Здесь так много разнообразных
            растений, что можно провести не один час, любуясь их красотой.Особое
            восхищение вызывает «Purpura Великолепная». Растение с крупными
            пурпурными цветами, которые источают нежный аромат.
          </div>
          <img src="../assets/cosmobiology_img.png" alt="" /> -->
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="tv" class="custom-slide-history custom-slide">
        <div class="custom-slide__wrapper">
          <!-- <h3 class="custom-slide__title">Кабинет Межпланетной истории</h3>
          <div class="q-mt-md text-left custom-slide__text">
            Межпланетная история — это один из самых интересных и в то же время
            сложных предметов в школе. Амальтея настолько увлекается изучением
            межпланетной истории, что может проводить в кабинете много времени.
            После этого она с радостью делится с землянами интересными фактами,
            которые узнала.
          </div>
          <img src="../assets/history_img.png" alt="" /> -->
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        name="layers"
        class="custom-slide-astronomy custom-slide"
      >
        <div class="custom-slide__wrapper">
          <!-- <h3 class="custom-slide__title">Кабинет Астрономии</h3>
          <div class="q-mt-md text-left custom-slide__text">
            Кабинет астрономии — это место, где проходят уроки по изучению
            различных планет, звёзд и созвездий. Это любимый предмет Квази, он
            часто засматривается на фотографию звезды Sirius, висящую на стене
            возле его парты, размышляя о её характеристиках и особенностях.
          </div>
          <img src="../assets/astronomy_img.png" alt="" /> -->
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="map" class="custom-slide-class custom-slide">
        <div class="custom-slide__wrapper">
          <!-- <h3 class="custom-slide__title">Учебный класс</h3>
          <div class="q-mt-md text-left custom-slide__text">
            Это кабинет, где проходят все остальные уроки. Здесь ученики изучают
            различные предметы, которые не связаны с космосом. Главная
            особенность учебного класса — это «ГалактикаТех». «ГалактикаТех»
            включает в себя различные устройства и инструменты, которые помогают
            ученикам получать новые знания и навыки.
          </div>
          <img src="../assets/class_img.png" alt="" /> -->
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const vertical = ref(true);
    const slide = ref("style");

    const goToSlide = (slideName) => {
      slide.value = slideName;
    };

    return {
      vertical,
      navigation: ref(false),
      slide,
      goToSlide,
    };
  },
};
</script>

<style scoped>


.custom-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 6px;
}

.custom-slide-cosmology {
  background-image: url("../assets/cosmobiology-mobile.png");
}

.custom-slide-history {
  background-image: url("../assets/history-mobile.png");
}

.custom-slide-astronomy {
  background-image: url("../assets/astronomy-mobile.png");
}

.custom-slide-class {
  background-image: url("../assets/class-mobile.png");
}

.custom-controls div {
  cursor: pointer;
  padding: 30px 30px;
  background: #73aee6;
  border-radius: 20px;
  border: 5px solid #ffffff33;
  transition: background 0.3s ease, transform 0.3s ease;
}

.custom-slide {
  background-repeat: no-repeat;
  background-size: contain;
}

.custom-controls div.active-control {
  background: transparent;
  border: none;
}

/* .relative {
  position: relative;
} */

.custom-controls div.rotate-arrow img {
  transform: rotate(180deg);
}
</style>
