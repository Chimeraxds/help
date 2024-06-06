<template>
  <div class="characters-container">
    <div class="text-h2">Персонажи</div>
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
      :modules="modules"
      :navigation="true"
      class="xds"
    >
    <!-- НАЧАЛО СЛАЙДА -->
      <swiper-slide class="characters-slide">
        <div>
            <!-- НАЧАЛО ВЕРХНЕЙ ЧАСТИ СЛАЙДА -->
          <div class="characters__slide-top">


            <!-- ФОТО ПЕРСОНАЖА(ПК+ АДАПТИВ) -->
            <div class="character_photo_1">
              <img src="../assets/quasar.svg" alt="quasar" class="kv_pk" />
              <img src="../assets/kv_mob.svg" alt="quasar" class="kv_mob" />
            </div>
             <!--  КОНЕЦ БЛОКА С ФОТО ПЕРСОНАЖА(ПК+ АДАПТИВ) -->



            <!-- НАЧАЛО БЛОКА СО ЦИТАТОЙ ПЕСОНАЖА, ИХ ИМЕНЕНЕМ И ШКАЛАМИ -->
            <div class="characters__about">
              <h3 class="characters__about-title">Квазар</h3>
              <p class="characters__about-text">
                «Со мной ты сдашь ОГЭ на 100%»
              </p>
              <p class="characters__about-age">15 лет</p>
              <div class="characters__about-scale">
                <p>Хорошее поведение в школе</p>
                <img src="../assets/kvazar1.svg" alt="" />
                <p>Неусидчивость на одном месте</p>
                <img src="../assets/kvazar2.svg" alt="" />
                <p>Знания о планете Земля</p>
                <img src="../assets/kvazar3.svg" alt="" />
                <p>Желание учиться</p>
                <img src="../assets/kvazar4.svg" alt="" />
              </div>
            </div>
              <!-- КОНЕЦ БЛОКА СО ЦИТАТОЙ ПЕСОНАЖА, ИХ ИМЕНЕНЕМ И ШКАЛАМИ -->
          </div>
            <!--КОНЕЦ ВЕРХНЕЙ ЧАСТИ СЛАЙДА  -->


          <!-- НАЧАЛО НИЖНЕЙ ЧАСТИ СЛАЙДА -->
          <div class="characters__slide-bottom">

            <!-- ОПИСАНИЕ ПЕРСОНАЖА -->
            <div class="characters__text">
              <p>Квазя — младший герой игры.</p>
              <p>
                Он младший брат Амальтеи. Квазя любит исследовать окружающий мир
                и узнавать новое. Он интересуется всем, что происходит вокруг, и
                всегда готов к приключениям. Несмотря на свой возраст, он не
                боится трудностей и всегда готов прийти на помощь своим друзьям.
              </p>
            </div>
            <!--  КОНЕЦ ОПИСАНИЯ ПЕРСОНАЖА -->


            <!-- НАЧАЛО БЛОКА С ЭМОДЗИ И ИХ НАДПИСЯМИ -->
            <div class="characters__skills kvazar">
              <div class="characters__skills-left-column">
                <div class="characters__skills-emoji">
                  <img src="../assets/smirking-face.png" alt="" />
                  <p>Смелый</p>
                </div>

                <div class="characters__skills-emoji">
                  <img src="../assets/Zany.png" alt="" />
                  <p>Непоседа</p>
                </div>
              </div>

              <div class="characters__skills-right-column">
                <div class="characters__skills-emoji">
                  <img src="../assets/Hugging.png" alt="" />
                  <p>Дружелюбный</p>
                </div>

                <div class="characters__skills-emoji">
                  <img src="../assets/Upside_Down.png" alt="" />
                  <p>Любопытный</p>
                </div>
              </div>
            </div>
             <!-- КОНЕЦ БЛОКА С ЭМОДЗИ И ИХ НАДПИСЯМИ -->
          </div>
          <!--КОНЕЦ НИЖНЕЙ ЧАСТИ СЛАЙДА  -->
        </div>
      </swiper-slide>
      <!-- КОНЕЦ СЛАЙДА -->

      <!-- НАЧАЛО СЛАЙДА -->
      <swiper-slide class="tef_pad characters-slide">
        <div>
           <!-- НАЧАЛО ВЕРХНЕЙ ЧАСТИ СЛАЙДА -->
          <div class="characters__slide-top">

             <!-- ФОТО ПЕРСОНАЖА(ПК+ АДАПТИВ) -->
            <div class="character_photo_2">
              <img src="../assets/tefia.svg" alt="quasar" />
            </div>
              <!--  КОНЕЦ БЛОКА С ФОТО ПЕРСОНАЖА(ПК+ АДАПТИВ) -->
                

             <!-- НАЧАЛО БЛОКА СО ЦИТАТОЙ ПЕСОНАЖА, ИХ ИМЕНЕНЕМ И ШКАЛАМИ -->
            <div class="characters__about">
              <h3 class="characters__about-title">Тефия</h3>
              <p class="characters__about-text">
                «Вероятность, что сдашь ОГЭ с нами велика»
              </p>
              <p class="characters__about-age">15 лет</p>
              <div class="characters__about-scale">
                <p>Рвение давать задания Землянам</p>
                <img src="../assets/tefia_1.svg" alt="" />
                <p>Хотение проводить время за уроками</p>
                <img src="../assets/tefia_2.svg" alt="" />
                <p>Любовь к творчеству</p>
                <img src="../assets/tefia_3.svg" alt="" />
                <p>Стремление изучать неизведанное</p>
                <img src="../assets/tefia_4.svg" alt="" />
              </div>
            </div>
             <!-- КОНЕЦ БЛОКА СО ЦИТАТОЙ ПЕСОНАЖА, ИХ ИМЕНЕНЕМ И ШКАЛАМИ -->
          </div>
           <!-- КОНЕЦ ВЕРХНЕЙ ЧАСТИ СЛАЙДА -->

          <!-- НАЧАЛО НИЖНЕЙ ЧАСТИ СЛАЙДА -->
          <div class="characters__slide-bottom">
            <!-- ОПИСАНИЕ ПЕРСОНАЖА -->
            <div class="characters__text">
              <p>Одноклассница Амальтеи.</p>
              <p>
                Ее привлекают неизведанные тайны, поэтому рассказы о планете
                Земля ее особенно заинтересовали. Тефия - творческая личность и
                обожает давать Землянам интересные задания, в которых требуется
                использовать много фантазии. Позже они с Амальтеей обсуждают
                результаты вместе.
              </p>
            </div>
            <!--  КОНЕЦ ОПИСАНИЯ ПЕРСОНАЖА -->

            <!-- НАЧАЛО БЛОКА С ЭМОДЗИ И ИХ НАДПИСЯМИ -->
            <div class="characters__skills">
              <div class="characters__skills-left-column">
                <div class="characters__skills-emoji">
                  <img src="../assets/Sunglasses.png" alt="" />
                  <p>Умная</p>
                </div>

                <div class="characters__skills-emoji">
                  <img src="../assets/Halo.png" alt="" />
                  <p>Душа компании</p>
                </div>
              </div>

              <div class="characters__skills-right-column">
                <div class="characters__skills-emoji">
                  <img src="../assets/Relieved_face.png" alt="" />
                  <p>Сострадательная</p>
                </div>

                <div class="characters__skills-emoji">
                  <img src="../assets/Heart_eyes.png" alt="" />
                  <p>Романтичная</p>
                </div>
              </div>
            </div>
            <!-- КОНЕЦ БЛОКА С ЭМОДЗИ И ИХ НАДПИСЯМИ -->

          </div>
          <!-- КОНЕЦ НИЖНЕЙ ЧАСТИ СЛАЙДА -->
        </div>
      </swiper-slide>
      <!-- КОНЕЦ СЛАЙДА -->


      <!-- НАЧАЛО СЛАЙДА -->
      <swiper-slide class="characters-slide">
        <div>
          <!-- НАЧАЛО ВЕРХНЕЙ ЧАСТИ СЛАЙДА -->
          <div class="characters__slide-top">


            <!-- ФОТО ПЕРСОНАЖА(ПК+ АДАПТИВ) -->
            <div class="character_photo_3">
              <img src="../assets/amaltea_1.svg" alt="quasar" />
            </div>
            <!--  КОНЕЦ БЛОКА С ФОТО ПЕРСОНАЖА(ПК+ АДАПТИВ) -->

             <!-- НАЧАЛО БЛОКА СО ЦИТАТОЙ ПЕСОНАЖА, ИХ ИМЕНЕНЕМ И ШКАЛАМИ -->
            <div class="characters__about">
              <h3 class="characters__about-title">Амальтея</h3>
              <p class="characters__about-text">«Ты сдашь ОГЭ, я уверена!»</p>
              <p class="characters__about-age">15 лет</p>
              <div class="characters__about-scale">
                <p>Любовь к Межпланетной истории</p>
                <img src="../assets/amaltea1.svg" alt="" />
                <p>Стремление знать все о планете Земля</p>
                <img src="../assets/amaltea2.svg" alt="" />
                <p>Незаинтересованность в жизни Землян</p>
                <img src="../assets/amaltea3.svg" alt="" />
                <p>Желание много рассказывать о своей планете</p>
                <img src="../assets/amaltea4.svg" alt="" />
              </div>
            </div>
            <!-- КОНЕЦ БЛОКА СО ЦИТАТОЙ ПЕСОНАЖА, ИХ ИМЕНЕНЕМ И ШКАЛАМИ -->
          </div>
          <!--КОНЕЦ ВЕРХНЕЙ ЧАСТИ СЛАЙДА  -->



          <!-- НАЧАЛО НИЖНЕЙ ЧАСТИ СЛАЙДА -->
          <div class="characters__slide-bottom">


            <!-- ОПИСАНИЕ ПЕРСОНАЖА -->
            <div class="characters__text">
              <p>Амальтея — главный герой проекта.</p>
              <p>
                Она учится в Реянской школе, в выпускном классе. Амальтея следит
                за жизнью землян, она всегда в курсе последних новостей и
                событий, происходящих на Земле. Если вы делитесь своими
                новостями в своём телеграмм-канале, то знайте, Амальтея
                обязательно всё прочитает и расскажет об этом своим друзьям!
              </p>
            </div>
            <!--  КОНЕЦ ОПИСАНИЯ ПЕРСОНАЖА -->


            <!-- НАЧАЛО БЛОКА С ЭМОДЗИ И ИХ НАДПИСЯМИ --> 
            <div class="characters__skills">
              <div class="characters__skills-left-column">
                <div class="characters__skills-emoji">
                  <img src="../assets/Nerd_Face.png" alt="" />
                  <p>Любознательна</p>
                </div>

                <div class="characters__skills-emoji">
                  <img src="../assets/Hearts.png" alt="" />
                  <p>Притягательна</p>
                </div>
              </div>

              <div class="characters__skills-right-column">
                <div class="characters__skills-emoji">
                  <img src="../assets/Grinning.png" alt="" />
                  <p>Добрая</p>
                </div>

                <div class="characters__skills-emoji">
                  <img src="../assets/Winking.png" alt="" />
                  <p>Общительная</p>
                </div>
              </div>
            </div>
            <!-- КОНЕЦ БЛОКА С ЭМОДЗИ И ИХ НАДПИСЯМИ -->
          </div>
          <!--КОНЕЦ НИЖНЕЙ ЧАСТИ СЛАЙДА  -->
        </div>
      </swiper-slide>
      <!-- КОНЕЦ СЛАЙДА -->


      <!-- НАЧАЛО СЛАЙДА -->
      <swiper-slide class="characters-slide">
        <div>
           <!-- НАЧАЛО ВЕРХНЕЙ ЧАСТИ СЛАЙДА -->
          <div class="characters__slide-top">


            <!-- ФОТО ПЕРСОНАЖА(ПК+ АДАПТИВ) -->
            <div class="character_photo_4">
              <img src="../assets/telania.png" alt="quasar" />
            </div>
             <!--  КОНЕЦ БЛОКА С ФОТО ПЕРСОНАЖА(ПК+ АДАПТИВ) -->

            
             <!-- НАЧАЛО БЛОКА СО ЦИТАТОЙ ПЕСОНАЖА, ИХ ИМЕНЕНЕМ И ШКАЛАМИ -->
            <div class="characters__about">
              <h3 class="characters__about-title">Телания</h3>
              <p class="characters__about-text">
                «Думаешь, ты не сдашь ОГЭ? Ну да, так и поверила»
              </p>
              <p class="characters__about-age">15 лет</p>
              <div class="characters__about-scale">
                <p>Любопытность</p>
                <img src="../assets/tela1.svg" alt="" />
                <p>Знания о планете Земля</p>
                <img src="../assets/tela2.svg" alt="" />
                <p>Дружелюбность</p>
                <img src="../assets/tela3.svg" alt="" />
                <p>Стремление изучить планету Земля</p>
                <img src="../assets/tela4.svg" alt="" />
              </div>
            </div>
             <!-- КОНЕЦ БЛОКА СО ЦИТАТОЙ ПЕСОНАЖА, ИХ ИМЕНЕНЕМ И ШКАЛАМИ -->
          </div>
          <!--КОНЕЦ ВЕРХНЕЙ ЧАСТИ СЛАЙДА  -->



          <!-- НАЧАЛО НИЖНЕЙ ЧАСТИ СЛАЙДА -->
          <div class="characters__slide-bottom">

            <!-- ОПИСАНИЕ ПЕРСОНАЖА -->
            <div class="characters__text">
              <p>
                Давняя подруга Амальтеи. Она на год младше своей подруги,
                поэтому Амальтея часто помогает ей со школьными уроками. Телания
                тоже узнала о планете Земля от Амальтеи. Сначала она просто
                слушала рассказы о землянах, а затем сама захотела познакомиться
                с ними и узнать много интересного об этой планете.
              </p>
            </div>
             <!--  КОНЕЦ ОПИСАНИЯ ПЕРСОНАЖА -->


            <!-- НАЧАЛО БЛОКА С ЭМОДЗИ И ИХ НАДПИСЯМИ -->
            <div class="characters__skills">
              <div class="characters__skills-left-column">
                <div class="characters__skills-emoji">
                  <img src="../assets/Cat.png" alt="" />
                  <p>Смелая</p>
                </div>

                <div class="characters__skills-emoji">
                  <img src="../assets/smile_with_big-eyes.png" alt="" />
                  <p>Уверенная в себе</p>
                </div>
              </div>

              <div class="characters__skills-right-column">
                <div class="characters__skills-emoji">
                  <img src="../assets/Star.png" alt="" />
                  <p>Решительная</p>
                </div>

                <div class="characters__skills-emoji">
                  <img src="../assets/smiling.png" alt="" />
                  <p>Любит сарказм</p>
                </div>
              </div>
            </div>
            <!-- КОНЕЦ БЛОКА С ЭМОДЗИ И ИХ НАДПИСЯМИ -->

          </div>
           <!--КОНЕЦ НИЖНЕЙ ЧАСТИ СЛАЙДА  -->
        </div>
      </swiper-slide>
      <!-- КОНЕЦ СЛАЙДА -->
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
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
const modules = [EffectCoverflow, Pagination, Navigation];
</script>

<style scoped>
.characters-slide {
  background: linear-gradient(
    214.87deg,
    rgba(133, 188, 238, 0.5) -62.05%,
    rgba(66, 48, 96, 0.5) 89.14%
  );
  outline: 5px solid rgba(255, 255, 255, 0.22);
  border-radius: 20px;
}
.characters__slide-top {
  display: flex;
}
.character_photo_1,
.character_photo_2,
.character_photo_3,
.character_photo_4 {
  padding-right: 40px;
}
.character_photo_2 {
  width: 54%;
}
.character_photo_1 {
  width: 40%;
}
.character_photo_3 {
  width: 66%;
}
.character_photo_4 {
  width: 50%;
}
.tef_pad {
  padding-top: 20px;
}
.kv_mob {
  display: none;
}
.characters__about-title {
  font-family: "BrokenLed";
  font-size: 44px;
  font-weight: 400;
  line-height: 48.4px;
  text-align: left;
  color: #f9f9f9;
  margin: 30px 0 9px 0;
}
.characters__about-text {
  font-family: "BrokenLed";
  font-size: 16px;
  font-weight: 400;
  line-height: 17.6px;
  text-align: left;
  color: #ffd787;
  max-width: 208px;
  padding-bottom: 9px;
}
.characters__about-age {
  font-family: "BrokenLed";
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  text-align: left;
  color: #f9f9f9;
  padding-bottom: 8px;
}
.characters__about-scale p {
  font-family: "BrokenLed";
  font-size: 16px;
  font-weight: 400;
  line-height: 17.6px;
  text-align: left;
  color: #f9f9f9;
  padding-top: 12px;
}
.characters__text p {
  font-family: "Geologica";
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  color: #f9f9f9;
  max-width: 490px;
}
.characters__skills-emoji img {
  width: 30px;
}
.characters__slide-bottom {
  margin-top: 30px;
}
.kvazar {
  gap: 35% !important;
}
.characters__skills {
  display: flex;
  padding-bottom: 23px;
  padding-top: 56px;
  gap: 20%;
}
.characters__skills-emoji {
  display: flex;
  gap: 10px;
  padding-bottom: 25px;
}
.characters__skills-emoji:last-child {
  padding-bottom: 0px;
}
.characters__skills-emoji p {
  font-family: "BrokenLed";
  font-size: 16px;
  font-weight: 400;
  line-height: 17.6px;
  text-align: left;
  color: #ffffff;
  display: flex;
  align-items: center;
}

.swiper-slide {
  filter: blur(10px);
  max-width: 600px !important;
  width: 536px !important;
  padding: 32px;
  display: initial !important;
  padding-left: 40px;
  min-height: unset;
}
.swiper-slide-active {
  filter: blur(0px);
}

@media (max-width: 1024px) {
  .characters__about-title {
    font-size: 30px;
  }
  .characters__about-scale p {
    font-size: 14px;
  }
  .characters__text p {
    font-size: 16px;
  }
  .characters__skills-emoji p {
    font-size: 14px;
  }
  .swiper-slide {
    padding-top: 15px;
    padding-right: 3px;
  }
  .characters__skills {
    padding-bottom: 0px;
    padding-top: 40px;
  }
  .character_photo_1 {
    width: 41%;
  }
  .character_photo_2 {
    width: 42%;
  }
  .character_photo_3 {
    width: 42%;
  }
  .character_photo_4 {
    width: 41%;
  }
  .kvazar {
    padding-top: 60px;
  }
  .characters__about {
    max-width: 44.5%;
  }
  .characters__text p {
    line-height: 24px;
  }
}
@media (max-width: 700px) {
  .kv_mob {
    display: initial;
  }
  .characters__about {
    max-width: 54.5%;
  }

  .kv_pk {
    display: none;
  }
  .text-h2 {
    margin: 80px 0 20px 0;
  }
  .characters__about-scale p:first-child {
    padding-top: 0px;
  }
  .swiper-slide {
    max-width: 88% !important;
    padding-left: 20px;
    max-height: 636px;
  }
  .characters__slide-top {
    justify-content: space-around;
  }
  .character_photo_1,
  .character_photo_2,
  .character_photo_3,
  .character_photo_4 {
    padding-right: 0px;
    max-width: 124px;
    max-height: 227px;
    padding-top: 8%;
  }
  .characters__about-title {
    font-size: 25px;
    margin: 0;
  }
  .characters__about-text {
    font-size: 12px;
    padding-bottom: 0;
  }
  .characters__about-age {
    font-size: 14px;
    padding: 0;
  }
  .characters__about-scale p {
    font-size: 12px;
    padding-top: 8px;
  }
  .characters__skills-emoji p {
    font-size: 12px;
  }
  .characters__skills-emoji {
    gap: 9px;
  }
  .characters__skills-emoji img {
    width: 15px;
  }
  .characters__skills {
    gap: 16% !important;
    justify-content: flex-start;
    padding-top: 18px;
  }
  .characters__slide-bottom {
    margin-top: 15px;
  }
}
</style>
