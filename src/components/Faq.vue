<template>
  <div class="container faq">
    <div class="text-h2">Вопросы и ответы</div>
    <q-list>
      <q-expansion-item
        v-for="(item, index) in faqItems"
        :key="index"
        class="bottom-borders padding"
        dense
        dense-toggle
        expand-separator
      >
        <template v-slot:header>
          <div
            class="q-item__label"
            :class="{ active: item.active }"
            @click="toggleActive(index)"
          >
            {{ item.label }}
          </div>
        </template>
        <q-card class="faq__q-card">
          <q-card-section class="q-card-text">
            {{ item.content }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqItems = ref([
  {
    label: "Как участвовать в образовательном проекте “Квазар”?",
    content: `Узнай у преподавателя в твоей образовательной организации, является ли твой класс участником проекта “Квазар”. Если твоя образовательная организация не является участником проекта “Квазар”, представители твоей образовательной организации могут связаться с руководителем проекта “Квазар”. Способы связи указаны в разделе “Контакты”.`,
    active: false,
  },
  {
    label: "Что я получу, став участников проекта “Квазар”?",
    content: `Космический мир Квазар и его герои помогут сделать процесс подготовки в ОГЭ интересным и эффективным. Тебя ждет интересный и удобный формат взаимодействия с чат-ботом. Выполняя групповые и индивидуальные, интеллектуальные и творческие задания, ты сможешь повысить свой уровень в игре, получить шанс оказаться в зале славы и, конечно же, получить высший балл на ОГЭ!`,
    active: false,
  },
  {
    label:
      "Мой учебный класс участвует в образовательном проекте “Квазар”. Как пройти регистрацию?",
    content: `Необходимо зайти в чат-бот проекта “Квазар”, либо узнав название чат-бота у преподавателя, либо перейдя по ссылке, указанной в разделе “Контакты” на сайте. Зайдя в чат-бот, необходимо выбрать из появившихся кнопок вариант ”Регистрация”. В появившемся окне ввести свое имя и фамилию, номер школы и класса. Администратор проверит корректность введенных тобой данных, и при их подтверждении регистрация будет завершена.`,
    active: false,
  },
  {
    label:
      "Зачем моей команде понадобится Telegram-канал для участия в программе “КВАЗАР”?",
    content: `У каждой команды должен быть свой Telegram-канал. В нем твоя команда будет публиковать новости о достижениях команды в целом и ее участников как в рамках этого проекта, так и другие достижения в рамках образовательного процесса. Помимо этого именно через каналы твоя команда будет давать ответ на групповое задание. Для этого пользователю, авторизованному через чат-бот “КВАЗАР”, необходимо через настройки канала добавить чат-бота “КВАЗАР” в качестве участника канала и назначить его администратором.`,
    active: false,
  },
  {
    label:
      "Я зарегистрирован в проекте “Квазар”. Как я узнаю о следующем групповом или индивидуальном задании?",
    content: `Информация о предстоящих заданиях будет публиковаться в ВК-сообществе (https://vk.com/kvazar_spd25). Помимо этого авторизованным пользователям чат-бот рассылает оповещения о предстоящих групповых заданиях в каналы и об индивидуальных заданиях в личные сообщения.`,
    active: false,
  },
  {
    label: "Как отправить ответ на индивидуальное задание?",
    content: `После прохождения регистрации через чат-бот индивидуальные задания будут присылаться вам в личные сообщения. Чтобы дать ответ на задание, зайдя в чат-бот, необходимо выбрать из появившихся кнопок вариант ”Дать ответ на индивидуальное задание”. После отправления ответа на задание, оно будет направленно администратору на проверку.`,
    active: false,
  },
  {
    label: "Как отправить ответ на групповое задание?",
    content: `После создания Telegram-канал команды, добавления и назначения чат-бота “КВАЗАР” администратором канала, любой из участников команды сможет дать ответ на групповое задание, вызвав команду “/give_answer”. Для удобства твоей команде следует договориться, кто из участников будет отправлять ответ на задание. Важно, чтобы ответ на задание отправлял один и тот же человек.`,
    active: false,
  },
]);

const toggleActive = (index) => {
  faqItems.value[index].active = !faqItems.value[index].active;
};
</script>

<style>
.q-item__label {
  font-family: "Brokenled";
  display: flex;
  justify-content: space-between;
  font-size: 36px;
  font-weight: 400;
  line-height: 39.6px;
  text-align: left;
  color: #fbfbfb;
  padding-top: 6px;
  width: 100%;
  cursor: pointer;
  transition: color 0.2s ease;
}

.active {
  color: #ffd787 !important;
}

.q-item__label::after {
  position: relative;
  content: url("../assets/arr_down.png");
  width: 30px;
  height: 30px;
  margin-right: 2px;
  transition: transform 0.7s;
}

.active::after {
  content: url("../assets/arrow_up.png");
  transform: rotate(-180deg);
}

.q-expansion-item__toggle-icon {
  display: none;
}

.faq {
  margin: 0 auto;
  padding-bottom: 100px;
}

.q-item {
  padding: 8px 0;
}

.faq__q-card {
  background: transparent;
}

.bottom-borders {
  border-bottom: 2px solid #ffffff;
}

.q-card-text {
  font-family: "Geologica";
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  color: #ffffff;
  padding: 20px 0;
}

@media screen and (max-width: 1200px) {
  .q-item__label {
    font-size: 28px;
  }
  .q-card-text {
    font-size: 16px;
  }
}
</style>
