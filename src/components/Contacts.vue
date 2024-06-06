<template>
  <div class="contacts">
    <div class="text-h2">Контакты</div>
    <div>
      <div class="contacts__card-wrapper">
        <div class="contacts__card">
          <img src="../assets/map.png" alt="" />
          <a href="#" class="contacts__text">Мы находимся здесь</a>
        </div>
        <div class="contacts__card">
          <img src="../assets/phone.png" alt="" />
          <a href="#" class="contacts__text">+ 7 932 037 03 72</a>
        </div>
      </div>

      <div class="contacts__socials">
        <div class="contacts__socials-circle">
          <a
            href="https://vk.com/kvazar_spd25"
            target="_blank"
            class="contacts__socials-link-vk"
          ></a>
        </div>
        <div class="contacts__socials-circle">
          <a href="#" target="_blank" class="contacts__socials-link-tg"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.contacts__text {
  font-family: BrokenLed;
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  text-align: left;
  color: #f9f9f9;
}

.contacts__socials-link-vk {
  display: inline-block;
  width: 82px;
  height: 52px;
  background-image: url("../assets/vk.png");
  background-size: cover;
  position: absolute;
  top: 38%;
  left: 27%;
}

.contacts__socials-link-tg {
  display: inline-block;
  width: 70px;
  height: 63px;
  background-image: url("../assets/tg.png");
  background-size: cover;
  position: absolute;
  top: 37%;
  left: 30%;
}

.contacts__card {
  display: flex;
  gap: 31px;
  align-items: center;
  padding: 43px;
  background: linear-gradient(
    270deg,
    rgba(124, 153, 210, 0.7) 6.58%,
    rgba(145, 126, 209, 0.7) 92.53%
  );
  border: 5px solid rgba(180, 187, 183, 0.5);
  border-radius: 20px;
  max-width: 526px;
}
.contacts__card-wrapper {
  margin: 0 auto;
  max-width: 526px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.contacts__socials {
  display: flex;
  justify-content: center;
  gap: 130px;
  margin-top: 60px;
}

.contacts__socials-circle {
  background: linear-gradient(
    180deg,
    rgba(124, 154, 210, 0.7) 0%,
    rgba(121, 202, 236, 0.7) 100%
  );

  border-radius: 50%;
  width: 198px;
  height: 198px;
  position: relative;
}

@media screen and (max-width: 870px) {
  .contacts__text {
    font-size: 16px;
  }
  .contacts__card {
    padding: 13px 40px;
    height: 75px;
  }
  .contacts__socials-circle {
    width: 93px;
    height: 93px;
  }
  .contacts__socials-link-vk {
    width: 39px;
    height: 24px;
  }
  .contacts__socials-link-tg {
    width: 33px;
    height: 29px;
  }
  .contacts__socials {
    gap: 21px;
  }
  .contacts__card-wrapper {
    max-width: 353px;
  }
}
</style>
