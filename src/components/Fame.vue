<template>
  <div class="hall-of-fame-container">
    <div class="text-h2">Зал славы</div>
    <swiper
      :modules="[Autoplay]"
      :slidesPerView="4"
      :centeredSlides="true"
      :spaceBetween="20"
      :grabCursor="true"
      class="mySwiper"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide
        class="column content-center hall-of-fame"
        v-for="achieve in newsinfo.achievements"
        :key="achieve.id"
      >
        <div class="row justify-center no-wrap medal-wrapper">
          <img
            v-for="(medal, index) in achieve.medals"
            :key="index"
            class="medal"
            :src="getMedalImage(medal)"
            alt="medal"
          />
        </div>

        <img
          :src="
            achieve.imageUrl ? achieve.imageUrl : 'src/assets/rectangle.png'
          "
          alt=""
          class="hall-of-fame__img"
        />
        <p class="hall-of-fame__name">{{ achieve.name }}</p>
        <p class="hall-of-fame__text">
          {{ achieve.description }}
        </p>

        <div class="hall-of-fame__feedback">
          <p>
            {{ achieve.review }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useNewsInfo } from "../stores/example-store.js";

const newsinfo = useNewsInfo();

const getMedalImage = (medal) => {
  switch (medal) {
    case "MEDAL1":
      return "src/assets/medal1.png";
    case "MEDAL2":
      return "src/assets/medal2.png";
    case "MEDAL3":
      return "src/assets/medal3.png";
    default:
      return "src/assets/medal1.png";
  }
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.mySwiper {
  position: relative;
}

.hall-of-fame__feedback {
  background: linear-gradient(
    214.87deg,
    rgba(133, 188, 238, 0.5) -62.05%,
    rgba(66, 48, 96, 0.5) 89.14%
  );
  border-radius: 20px;
  position: absolute;
  z-index: 10000;
  display: none;
  font-family: "BrokenLed";
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  text-align: left;
  color: #ffffff;
  padding: 40px;
  width: 694px;
}

.hall-of-fame:hover .hall-of-fame__feedback {
  display: block;
}

.hall-of-fame {
  min-height: 791px;
  min-width: 526px;
  text-align: center;
  font-size: 18px;
  background: linear-gradient(
    214.87deg,
    rgba(133, 188, 238, 0.5) -62.05%,
    rgba(66, 48, 96, 0.5) 89.14%
  );
  outline: 5px solid rgba(255, 255, 255, 0.22);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hall-of-fame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 10;
}

.medal {
  max-width: 161px;
  width: 100%;
  margin: 40px 0 20px 0;
}

.hall-of-fame__img {
  max-width: 262px;
  max-height: 307px;
  border-radius: 20px;
}

.hall-of-fame__name {
  font-family: "BrokenLed";
  font-size: 36px;
  font-weight: 400;
  line-height: 39.6px;
  color: #ffffff;
  padding: 20px 0 4px 0;
}

.hall-of-fame__text {
  font-family: "Geologica";
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  color: #ffffff;
  margin: 0 40px 58px 40px;
}

@media (max-width: 1024px) {
  .hall-of-fame {
    min-width: 453px;
    /* height: 500px; */
  }
  .medal-wrapper {
    width: 130px;
  }
  .hall-of-fame__img {
    height: 241px;
  }
  .hall-of-fame__name {
    font-size: 30px;
  }
  .hall-of-fame__text {
    font-size: 16px;
  }
  .hall-of-fame__feedback {
    width: 400px;
    height: 50%;
  }
}

@media (max-width: 700px) {
  .text-h2 {
    margin: 100px 0 20px 0;
  }

  .hall-of-fame {
    min-width: 356px;
    min-height: 489px;
  }
  .medal-wrapper {
    width: 91px;
  }
  .hall-of-fame__name {
    font-size: 24px;
    padding: 14px 0;
  }
  .hall-of-fame__img {
    max-width: 174px;
    max-height: 204px;
  }
  .medal {
    margin: 30px 0 15px 0;
  }
  .hall-of-fame__text {
    margin: 0 40px 40px 40px;
  }
  .hall-of-fame__feedback p {
    font-size: 16px;
    backdrop-filter: blur(18px);
  }
  .hall-of-fame__feedback {
    width: 250px;
    height: 85%;
  }
}
</style>
