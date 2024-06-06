<template>
 <div class="rules-container">
        <h1>Правила игры</h1>
        <div class="full_ru">
          <div class="line"></div>
          <div class="first_line"></div>
        <div class="rules-grid">
            <div class="rule-block">
                <h2>Ведение телеграм канала</h2>
                <p>Каждый класс (команда) должен завести свой собственный телеграмм канал, 
                  где будет публиковаться информация о новостях активной жизни класса, 
                  выполнении заданий и достижениях учеников. Этот канал будет являться основным коммуникационным средством,
                   через которое участники будут взаимодействовать и получать актуальную информацию.</p>
            </div>
            <div class="same_line"></div>
            <div class="rule-block">
                <h2>Выполнение заданий</h2>
                <p>В рамках Вк-сообщества проекта будут публиковаться различные задания, 
                  которые необходимо выполнить в определенные сроки. Эти задания могут быть как командными, 
                  так и индивидуальными, как творческими, так и интеллектуальными. 
                  Выполнение заданий поможет развивать вашу командную работу, креативное мышление и умение принимать решения.</p>
            </div>
          </div>
          <div class="line1"></div>
          <div class="rules-grid">
            <div class="same_line"></div>
            <div class="rule-block">
                <h2>Рейтинг участников</h2>
                <p>За выполнение заданий, достижения участников и их активность как в учебной,
                   так и во внеурочной деятельности, игрокам начисляются баллы.
                    Количество баллов определяет их место в командном и индивидуальном рейтингах.
                     В командном рейтинге публикуются баллы класса (сумма баллов всех учеников),
                      а в индивидуальном рейтинге - баллы каждого участника.
                       Это позволит вам отслеживать свой прогресс и сравнивать свои достижения с другими участниками.</p>
            </div>
            <div class="same_line"></div>
            <div class="rule-block">
                <h2>Эволюция</h2>
                <p>В игре есть 4 уровня "эволюции". В индивидуальном рейтинге вы будете проходить следующие стадии: человек, общинник, соплеменник, гражданин.
                   В командном рейтинге же вы сможете развиваться от общины к племени, от племени к государству и, наконец, достичь уровня цивилизации.
                    Для перехода на новый уровень необходимо набрать определенное количество баллов. Каждый новый уровень открывает перед вами новые возможности и роли.</p>
            </div>
          </div>
          <div class="line2"></div>
          <div class="rules-grid">
            <div class="same_line"></div>
            <div class="rule-block">
                <h2>Загрузка достижений</h2>
                <p>Если вы достигли чего-то значимого в спорте, искусстве, науке или общественной деятельности, обязательно поделитесь этим с нами!
                   Загружайте свои дипломы, грамоты, сертификаты и благодарности в свою папку.
                    За каждое загруженное достижение вы будете получать бонусные баллы, которые помогут вам продвинуться в игре и достичь нового уровня эволюции.</p>
            </div>
            <div class="same_line"></div>
            <div class="rule-block">
                <h2>Учебная активность</h2>
                <p>Не забывайте принимать участие в различных олимпиадах,
                   проходить интересные курсы для расширения своих знаний.
                    В игре вы найдете списки удобных платформ для учебных онлайн активностей,
                     которые помогут вам развиваться и повышать свои знания.
                      Это ваша возможность стать лучшей версией себя, развить свои навыки и достичь высоких результатов.
                       Примите вызов и начните свою захватывающую игру прямо сейчас!</p>
            </div>
          </div>
        </div>
    </div>
</template>
<script setup>
</script>

<style>
.rules-container h1 {
    text-align: center;
    color: white;
    font-family: Brokenled;
    font-size:60px;
    line-height: 66px;
}


.line{
  background-image: url("../assets/line.png");
  height: 96px;
    max-width: 93%;
    margin-left: 123px !important;
    background-repeat: no-repeat;
    background-size: cover;
}
.line1{
  background-image:url('../assets/xds_1.png');
  height: 96px;
}
.line2{
  background-image:url('../assets/line_2.png');
  height: 96px;
  background-repeat: no-repeat;
}
.first_line{
  display:none;
}
.same_line{
  display: none;
}
.last_line{
  display: none;
}
.rules-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding-left: 150px;
    padding-right: 10%;
}

.rule-block {
    padding: 15px;
    flex: 1 1 calc(50% - 20px);
    box-sizing: border-box;
}

.rule-block h2 {
    font-size: 36px;
    color: #FFD787;
    line-height: 39.6px;
    font-family: Brokenled;
    margin-bottom: 8px;
    padding-bottom: 5px;
}

.rule-block p {
    font-size: 20px;
    line-height: 30px;
    color: white;
  font-family: Geologica;
}
@media(max-width:1024px){
  .rules-container h1{
    font-family: BrokenLed;
  font-size: 40px;
  font-weight: 400;
  line-height: 44px;
  }
  .rule-block h2{
    font-family: BrokenLed;
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  }
  .rule-block p{
    font-family: Geologica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  } 
  .rules-grid{
    padding-left: 15px;
    padding-right: 20px;
    gap:0px;  
  }
  .line{
    background-image: url('../assets/line_mob.png');
    max-width: 100%;
    margin-left: 0px !important;
  }
  .line1{
    background-image: url('../assets/xds_1_mob.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .line2{
    background-image: url('../assets/line_2_mob.png');
  }
}


@media (max-width: 768px) {
  .rule-block h2{
    margin-top: 0px;
  }
    .rule-block {
        flex: 1 1 100%;
    }
    .rules-container h1{
      font-family: BrokenLed;
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
  }
  .rules-grid{
    padding-left: 1px;
    padding-right: 7px;

  }
  .rule-block h2{
    font-family: BrokenLed;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  }
  .rule-block p{
    font-family: BrokenLed;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  } 
  .first_line{
  display:flex;
  background-image: url('../assets/first_line.png');
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 68px;
}
.same_line{
  display: initial;
  background-image: url('../assets/full.png');
  height: 66px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 5%;
}
.line{
  display:none;
  }
  .line1{
   display:none;
  }
  .line2{
    display:none;
  }
}
</style>