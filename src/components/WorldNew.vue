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
            <img src="../assets/arr_right.png" />
          </div>
          <div
            :class="{
              'active-control': slide === 'tv',
              'rotate-arrow': slide === 'tv',
            }"
            @click="goToSlide('tv')"
          >
            <img src="../assets/arr_right.png" />
          </div>
          <div
            :class="{
              'active-control': slide === 'layers',
              'rotate-arrow': slide === 'layers',
            }"
            @click="goToSlide('layers')"
          >
            <img src="../assets/arr_right.png" />
          </div>
          <div
            :class="{
              'active-control': slide === 'map',
              'rotate-arrow': slide === 'map',
            }"
            @click="goToSlide('map')"
          >
            <img src="../assets/arr_right.png" />
          </div>
        </div>
      </template>

      <q-carousel-slide
        name="style"
        class="custom-slide-cosmology custom-slide"
      >
        <div class="custom-slide__wrapper relative">
          <h3 class="custom-slide__title">Кабинет Космобиологии</h3>
          <div class="q-mt-md text-left custom-slide__text">
            Это настоящий оазис в Реянской школе. Здесь так много разнообразных
            растений, что можно провести не один час, любуясь их красотой.Особое
            восхищение вызывает «Purpura Великолепная». Растение с крупными
            пурпурными цветами, которые источают нежный аромат.
          </div>
          <img src="../assets/cosmobiology_img.png" alt="" />
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="tv" class="custom-slide-history custom-slide">
        <div class="custom-slide__wrapper">
          <h3 class="custom-slide__title">Кабинет Межпланетной истории</h3>
          <div class="q-mt-md text-left custom-slide__text">
            Межпланетная история — это один из самых интересных и в то же время
            сложных предметов в школе. Амальтея настолько увлекается изучением
            межпланетной истории, что может проводить в кабинете много времени.
            После этого она с радостью делится с землянами интересными фактами,
            которые узнала.
          </div>
          <img src="../assets/history_img.png" alt="" />
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        name="layers"
        class="custom-slide-astronomy custom-slide"
      >
        <div class="custom-slide__wrapper">
          <h3 class="custom-slide__title">Кабинет Астрономии</h3>
          <div class="q-mt-md text-left custom-slide__text">
            Кабинет астрономии — это место, где проходят уроки по изучению
            различных планет, звёзд и созвездий. Это любимый предмет Квази, он
            часто засматривается на фотографию звезды Sirius, висящую на стене
            возле его парты, размышляя о её характеристиках и особенностях.
          </div>
          <img src="../assets/astronomy_img.png" alt="" />
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="map" class="custom-slide-class custom-slide">
        <div class="custom-slide__wrapper">
          <h3 class="custom-slide__title">Учебный класс</h3>
          <div class="q-mt-md text-left custom-slide__text">
            Это кабинет, где проходят все остальные уроки. Здесь ученики изучают
            различные предметы, которые не связаны с космосом. Главная
            особенность учебного класса — это «ГалактикаТех». «ГалактикаТех»
            включает в себя различные устройства и инструменты, которые помогают
            ученикам получать новые знания и навыки.
          </div>
          <img src="../assets/class_img.png" alt="" />
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
.relative {
  position: relative;
}

.custom-carousel-container {
  overflow: visible;
}

.custom-controls div {
  cursor: pointer;
  padding: 65px 60px;
  background: #73aee6;
  border-radius: 20px;
  border: 5px solid #ffffff33;
  transition: background 0.3s ease, transform 0.3s ease;
}

.custom-controls div.active-control {
  background: transparent;
  border: none;
}

.custom-controls div.rotate-arrow img {
  transform: rotate(180deg);
}

.custom-carousel {
  overflow: visible;
  min-height: 749px;
  position: relative;
  max-width: 1160px;
  margin: 0 auto;
}

.custom-slide__title {
  font-family: "BrokenLed";
  font-size: 44px;
  font-weight: 400;
  line-height: 48.4px;
  text-align: left;
  margin: 0;
  padding-top: 50px;
}

.custom-slide__text {
  font-family: "Geologica";
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  padding-top: 24px;
  padding-bottom: 40px;
}

.custom-slide__wrapper {
  max-width: 890px;
  margin: 0 auto;
  padding-left: 9%;
}

.custom-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.custom-slide {
  background-repeat: no-repeat;
  background-size: contain;
  max-width: 1157px;
  margin: 0 auto;
}

.custom-slide-cosmology {
  background-image: url("../assets/cosmology.png");
}

.custom-slide-history {
  background-image: url("../assets/history.png");
}

.custom-slide-astronomy {
  background-image: url("../assets/astronomy.png");
}

.custom-slide-class {
  background-image: url("../assets/class.png");
}

@media screen and (max-width: 1150px) {
  .custom-slide__title {
    font-size: 30px;
  }
  .custom-slide__text {
    font-size: 16px;
  }
  .custom-slide__wrapper img {
    max-width: 366px;
  }
  .custom-slide {
    max-width: 900px;
  }
  .custom-slide__wrapper {
    padding-left: 22%;
    padding-top: 6%;
  }
  .custom-controls div {
    padding: 53px 47px;
  }
  .custom-controls {
    left: calc(7% - 10px);
  }
  .custom-controls img {
    max-height: 20px;
  }
  .text-h2 {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 880px) {
  .custom-slide__text {
    padding: 25px 0 25px 0;
    margin: 0;
  }
  .custom-slide__wrapper img {
    max-width: 286px;
  }
  .custom-slide__wrapper {
    padding-top: 11%;
  }
}

@media screen and (max-width: 768px) {
  /* .custom-slide__wrapper {
    transform: rotate(270deg);
  } */
  .custom-carousel {
    transform: rotate(90deg);
    overflow-y: hidden;
    overflow-x: hidden;
    display: none;
  }
  .text-h2 {
    margin: 80px 0 20px 0;
  }

  /* .custom-slide__wrapper img {
    max-width: 366px;
  }
  .custom-carousel {
    height: 100%;
    max-height: 100%;
    min-height: 100%;
  }
  .custom-controls {
    left: 0;
    gap: 8px;
  }
  .text-h2 {
    margin-bottom: 65px;
  }
  .custom-controls div {
    padding: 41px 39px;
  }
  .custom-slide__title {
    font-size: 20px;
  }

  .custom-slide__wrapper img {
    max-width: 200px;
  }

  .custom-carousel-mobile {
    display: block;
  } */

  /* .custom-slide-cosmology {
    background-image: url("../assets/cosmobiology-mobile.png");
    transform: rotate(270deg);
  } */
}
</style>
