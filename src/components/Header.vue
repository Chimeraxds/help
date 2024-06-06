<template>
  <header class="container">
    <div class="text-white custom-layout" height-hint="98">
      <div class="row align-end">
        <div class="header__logo">
          <img src="../assets/logo_header.png" />
        </div>
        <div class="q-tabs flex justify-around items-end" style="flex-grow: 1">
          <a href="#world" class="q-tabs-item">Мир Квазар</a>
          <a href="#characters" class="q-tabs-item">Персонажи</a>
          <a href="#rules" class="q-tabs-item">Правила игры</a>
          <a href="#team" class="q-tabs-item">Команда проекта</a>
          <a href="#contacts" class="q-tabs-item">Контакты</a>
          <a href="#faq" class="q-tabs-item">Вопрос/ответ</a>
        </div>
      </div>
      <q-btn
        dense
        flat
        round
        icon="menu"
        @click="toggleRightDrawer"
        class="burger-menu"
      />
    </div>
    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      behavior="mobile"
      class="full-width custom-q-drawer"
      mini="mini"
    >
      <div class="custom-q-drawer-links">
        <a href="#world" class="q-tabs-item">Мир Квазар</a>
        <a href="#characters" class="q-tabs-item">Персонажи</a>
        <a href="#rules" class="q-tabs-item">Правила игры</a>
        <a href="#team" class="q-tabs-item" @click="closeDrawer"
          >Команда проекта</a
        >
        <a href="#contacts" class="q-tabs-item" @click="closeDrawer"
          >Контакты</a
        >
        <a href="#faq" class="q-tabs-item" @click="closeDrawer">Вопрос/ответ</a>
      </div>

      <div class="contacts">
        <div class="contacts__circle">
          <a
            href="https://vk.com/kvazar_spd25"
            class="contacts__link-vk"
            target="_blank"
          ></a>
        </div>
        <div class="contacts__circle">
          <a href="#" class="contacts__link-tg" target="_blank"></a>
        </div>
      </div>
    </q-drawer>
  </header>
</template>

<script setup>
import { ref } from "vue";

const rightDrawerOpen = ref(false);

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

const closeDrawer = () => {
  rightDrawerOpen.value = false;
};
</script>

<style scoped>
.burger-menu {
  display: none;
}

.q-tabs,
.header__logo {
  padding-top: 2rem;
}

.q-tabs-item {
  font-family: "BrokenLed";
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  cursor: pointer;
  color: #fbfbfb;
}

.q-avatar {
  width: 100%;
  max-width: 167px;
  height: auto;
}

.q-tab__label {
  font-family: "BrokenLed";
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
}

.q-avatar__content,
.q-avatar img:not(.q-icon):not(.q-img__image) {
  border-radius: 0px;
  height: unset;
  width: 100%;
}

::v-deep .custom-q-drawer {
  background-color: #191941f7 !important;
  border-radius: 15px;
}

@media screen and (max-width: 1200px) {
  .q-tabs-item {
    font-size: 16px;
  }
  .header__logo img {
    max-width: 139px;
  }
  .q-tabs {
    padding-right: 15px;
  }
}

@media screen and (max-width: 900px) {
  .burger-menu {
    display: block;
  }
  .q-tabs {
    display: none;
  }

  .custom-q-drawer-links {
    display: flex;
    flex-direction: column;
  }

  .custom-layout {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .q-tabs-item {
    font-family: "BrokenLed";
    font-size: 16px;
    font-weight: 400;
    line-height: 17.6px;
    text-align: left;
    padding: 25px 0 23px 20px;
  }
  .contacts__circle {
    background: linear-gradient(
      180deg,
      rgba(124, 154, 210, 0.7) 0%,
      rgba(121, 202, 236, 0.7) 100%
    );
    border-radius: 50%;
    width: 52px;
    height: 52px;
    position: relative;
  }
  .contacts__link-vk {
    display: inline-block;
    width: 30px;
    height: 19px;
    background-image: url("../assets/vk.png");
    background-size: cover;
    position: absolute;
    top: 16px;
    left: 9px;
  }
  .contacts__link-tg {
    display: inline-block;
    width: 27px;
    height: 25px;
    background-image: url("../assets/tg.png");
    background-size: cover;
    position: absolute;
    top: 14px;
    left: 10px;
  }

  .contacts {
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    padding-left: 20px;
  }

  .fixed,
  .fixed-full,
  .fullscreen,
  .fixed-center,
  .fixed-bottom,
  .fixed-left,
  .fixed-right,
  .fixed-top,
  .fixed-top-left,
  .fixed-top-right,
  .fixed-bottom-left,
  .fixed-bottom-right {
    width: 500px !important;
  }
}
</style>
