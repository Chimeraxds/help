<template>
  <div class="hall-of-fame-container">
    <div class="text-h2">Команда проекта</div>
    <swiper
    :effect="'coverflow'"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 0,
      stretch: 100,
      depth: 100,
      modifier: 3,
      slideShadows: false,
    }"
    :loop="true"
    :keyboard="{
      enabled: true,
    }"
    :modules="modules"
    :navigation="true"
    class="mySwiper"
  >
      <swiper-slide
        v-for="team in newsinfo.team"
        :key="team.updatedAt"
        :team="team"
        class="team_slider"
      >
      <div class="whole_card">
        <div class="card_img">
        <img :src="`${team.imageUrl}`"  alt="" class="team_img" />
        </div>
        <div class="card_text">
           <p class="team_name">{{ team.name }}</p>
        <p class="team_quote">{{team.quote }}</p>
        <div class="tag_fix">
      <p class="team_tags" v-for="tag in team.tags"
      :key="tag">{{ tag }}</p>
      </div>
        <p class="team_text">
          {{ team.description }}
        </p>
      </div>
      </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination, Navigation,Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { useNewsInfo } from "../stores/example-store.js";
const newsinfo = useNewsInfo();
const props = defineProps({
  team: {
    type: Object,
  },
});
const modules = [EffectCoverflow, Pagination, Navigation,Keyboard];
</script>
<style scoped>
.team_slider{
max-width: 1125px;
padding:40px;
text-align: unset !important;
background: 
linear-gradient(96.17deg, rgba(208, 73, 255, 0.6) -32.76%,
 rgba(78, 185, 220, 0.6) 66.06%);
 border: none !important;
 border-radius: 20px;
}
.team_name {
  font-family: Brokenled;
  font-weight: 400;
  font-size: 44px;
  line-height: 48.4px;
  color: white;
  padding-bottom: 10px;
}
.team_text {
  font-size: 24px;
  line-height: 30px;
  color: white;
}
.card_text {
  max-width: 54%;
}
.team_quote {
  font-size: 20px;
  color: #ffd787;
  padding-bottom: 30px;
}
.team_quote::before {
  content: "«";
}
.team_quote::after {
  content: "»";
}
.team_text,
.team_tags,
.team_quote {
  font-family: Geologica !important;
}
.team_tags {
  font-size: 20px;
  line-height: 25px;
  color: white;
  display:flex;
  max-width: 97%;
}
 .team_tags::before{
  content:'';
  background-image: url('../assets/tags.svg');
  height: 20px;
  width: 1%;
  background-repeat: no-repeat;
  padding-right: 5%;
}
.team_tags:first-child{
  padding-bottom: 10px;
}
.team_tags:last-child{
  padding-bottom: 30px;
}
.whole_card {
  display: flex;
}
.card_img {
  margin-right: 50px;
  width: 52% !important;
  max-height: 600px;
}
.team_img {
  border-radius: 20px;
  object-position: 0 18%;
}
.swiper-slide{
  filter: blur(10px) ;
  min-height: unset !important;
  outline: 5px solid rgba(255, 255, 255, 0.22); 
}
.mySwiper{
  max-height: 1000px;
}
.swiper-slide-fully-visible{
  filter: blur(0px);
}

@media (max-width: 1200px) {
  .team_name{
    font-size:30px;
    line-height: 33px;
  }
  .team_quote,.team_tags,.team_text{
    font-size: 16px !important;
  }
  .team_tags{
    line-height: 20px;
  }
  .team_text{
    line-height: 24px;
  }
  .team_slider{
    max-width: 80%;
    padding: 32px;
  }
  .team_tags::before{
    padding-right: 7%;
  }

}
@media (max-width:800px){
  .team_tags::before{
    padding-right: 8%;
  }
}
@media (max-width: 768px){
  .team_name{
    font-family: BrokenLed;
    font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  }
  .team_quote{
    font-family: BrokenLed;
  font-size: 12px;
  font-weight: 400;
  line-height: 13.2px;  
  }
  .team_tags{
    font-family: Geologica;
  font-size: 16px !important;
  font-weight: 400;
  line-height: 20px;
  }
  .team_tags:last-child{
  padding-bottom: 20px;
}
.team_quote{
  padding-bottom: 20px;
}
}
  @media (max-width: 700px){
    .whole_card{
      display: initial;
    }
    .team_slider{
      padding: 15px;
      width: 80.5%;
    }
    .card_text{
      max-width: 100%;
    }
    .card_img{
      padding-bottom: 20px;
      width: 100% !important;
      height: 65vw;
    }
  }
  @media (max-width:500px){
    .team_tags::before{
      padding-right: 10%;
    }
  }

</style>
