<template>
  <q-page class="bg-image">
    <Header />

    <div class="text-weight-regular container">
      <div class="">
        <h1 class="text-h1">Добро пожаловать в мир <span>КВАЗАР</span></h1>

        <div class="text-h4 text-white">Визуальный мир подготовки к ОГЭ</div>
      </div>
    </div>

    <div class="cards_styles">
      <kavo
        class="news-cards"
        v-for="cards in newsinfo.cards"
        :key="cards.updatedAt"
        :cards="cards"
      />
    </div>

    <section class="about">
      <div class="text-h2">О проекте</div>
      <div class="container row justify-between about__mobile">
        <div class="about__img">
          <img src="../assets/about_project.png" alt="" />
          <img
            src="../assets/about_project2.png"
            alt=""
            class="about__img-absolute"
          />
        </div>
        <div class="about__text">
          <p>
            “КВАЗАР” - увлекательный вариант подготовки к ОГЭ. Городская ролевая
            интеллектуальная игра в жанре “эволюция” между учащимися 7-х классов
            общеобразовательных организаций ГО Спасск-Дальний.
          </p>
          <p>
            Участники знакомятся с четырьмя героями - жителями одного из
            спутников планеты Сатурн и взаимодействуют с ними на протяжении всей
            игры. Телания, Тефия, Амальтея и ее младший брат Квазя рассказывают
            о своем мире и жизни в нем.
          </p>
          <p>
            Чтобы узнать участников и землю, на которой они живут по-лучше,
            герои дают различные задания: интеллектуальные, творческие,
            командные. Это помогает ученикам углубиться в образовательный
            процесс, не теряя интереса. Другими словами, привлекает внимание к
            учебе.
          </p>
          <p>
            За свою активность в игре, школьные, спортивные и творческие
            достижения участникам начисляются баллы, с помощью которых они
            "эволюционируют" от “общины” до “цивилизации”. Повышение игрового
            уровня возможно при повешении индивидуального уровня каждого
            участника команды.
          </p>
          <p>
            Участники с азартом выполняют задания, узнают много нового о жизни
            на спутнике Сатурна и получают удовольствие от образовательного
            процесса.
          </p>
        </div>
      </div>
    </section>

    <section id="world">
      <WorldNew />
    </section>

    <!-- <section id="world-mobile">
      <WorldMobile />
    </section> -->

    <section id="characters"><Characters /></section>

    <section id="rules"><Rules /></section>

    <section id="team">
      <Teammate />
    </section>

    <Fame />

    <section id="contacts">
      <Contacts />
    </section>

    <section id="faq">
      <Faq />
    </section>

    <Footer />
  </q-page>
</template>

<script setup>
import "swiper/css";
import "swiper/css/pagination";
import Header from "../components/Header.vue";
import Faq from "../components/Faq.vue";
import Footer from "../components/Footer.vue";
import Fame from "../components/Fame.vue";
// import World from "../components/World.vue";
import WorldNew from "../components/WorldNew.vue";
import WorldMobile from "../components/WorldMobile.vue";
import Contacts from "../components/Contacts.vue";
import Characters from "../components/Characters.vue";
import { useNewsInfo } from "../stores/example-store.js";
import kavo from "../components/EssentialLink.vue";
import Teammate from "components/team.vue";
const newsinfo = useNewsInfo();
import Rules from "../components/rules.vue";

defineOptions({
  name: "IndexPage",
});
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/1921.png");
  background-size: cover;
  background-repeat: no-repeat;
}

/* добро пожаловать */

.text-h1 {
  font-family: "Brokenled";
  font-size: 112px;
  line-height: 123.35px;
  max-width: 1075px;
  letter-spacing: -0.06em;
  text-align: left;
  color: #ffff;
  margin-top: 100px;
  margin-bottom: 20px;
}

.text-h4 {
  font-family: "BrokenLed";
  font-size: 38px;
  font-weight: 400;
  line-height: 41.8px;
  letter-spacing: -0.02em;
  text-align: left;
}

.text-h1 span {
  color: #ffd787;
}

.news-cards {
  background: linear-gradient(
    96.17deg,
    rgba(208, 73, 255, 0.5) -32.76%,
    rgba(78, 185, 220, 0.5) 66.06%
  );
  outline: 5px solid rgba(255, 255, 255, 0.22);
  border-radius: 20px;
}
.q-card {
  box-shadow: unset !important;
}
/* о проекте  */

.about__img-absolute {
  position: absolute;
  bottom: 6rem;
  left: 8rem;
  /* padding-bottom: 210px; */
}
.about__img {
  position: relative;
}
.about__img img {
  max-width: 527px;
}
.about__text {
  font-family: "Geologica";
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  max-width: 800px;
  color: #ffff;
}

.about__text p {
  padding-bottom: 16px;
}

/* зал славы */

/* вопросы и ответы*/

/* контакты */

@media screen and (max-width: 1500px) {
  /* о проекте  */
  .about__text {
    max-width: 740px;
  }

  .about__img-absolute {
    bottom: 5rem;
  }
  .text-h1 {
    font-size: 100px;
    line-height: 108.35px;
    max-width: 1019px;
  }
}

@media screen and (max-width: 1450px) {
  /* о проекте  */
  .about__text {
    max-width: 664px;
    font-size: 22px;
    line-height: 24px;
  }
  .about__img-absolute {
    bottom: -6rem;
  }
}

@media screen and (max-width: 1400px) {
  /* о проекте  */
  .about__text {
    max-width: 597px;
    font-size: 20px;
  }
  .text-h1 {
    font-size: 90px;
    line-height: 99.35px;
    max-width: 907px;
  }
}

@media screen and (max-width: 1300px) {
  /* о проекте  */
  .about__text {
    max-width: 565px;
    font-size: 16px;
  }
  .about__img img {
    max-width: 437px;
  }
  .about__img-absolute {
    bottom: 2rem;
  }
  .text-h1 {
    font-size: 60px;
    max-width: 580px;
    line-height: 66px;
  }
  .text-h4 {
    font-size: 24px;
  }
}

@media screen and (max-width: 1150px) {
  /* о проекте  */
  .about__img-absolute {
    bottom: 11rem;
  }
  .about__img img {
    max-width: 309px;
  }
}

@media screen and (max-width: 1000px) {
  /* о проекте  */
  .about__text {
    max-width: 465px;
  }
  .about__img-absolute {
    bottom: 13rem;
    left: 3rem;
  }
}

@media screen and (max-width: 870px) {
  /* о проекте  */
  .about__img {
    display: none;
  }
  .about__mobile {
    display: flex;
    justify-content: center;
  }

  .text-h1 {
    font-size: 34px;
    max-width: 332px;
    line-height: 37px;
    margin-top: 40px;
  }
  .text-h4 {
    font-size: 16px;
  }
  .text-h2 {
    margin: 100px 0 20px 0;
  }

  /* */
}
</style>
