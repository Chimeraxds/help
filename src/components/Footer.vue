<template>
  <div class="container">
    <div class="footer-wrapper">
      <div class="footer__img-wrapper">
        <img src="../assets/logo_header.png" />
      </div>
      <div class="footer">
        <div class="footer__first-column">
          <div class="footer__links">
            <a href="#characters" class="footer__first-column-nav">Персонажи</a>
            <a href="#rules" class="footer__first-column-nav">Правила игры</a>
            <a href="#team" class="footer__first-column-nav">Команда проекта</a>

            <a href="#contacts" class="footer__first-column-nav">Контакты</a>
            <a href="#faq" class="footer__first-column-nav">Вопрос/ответ</a>
          </div>
          <div class="footer__docs2 hiddens">
            <a
              href="https://drive.google.com/file/d/1wwuDPxeEVZTPOQN6rd5444nbgk4fKxJS/view"
              target="_blank"
              class="footer__link"
              >Пользовательское соглашение</a
            >
            <a
              href="https://drive.google.com/file/d/1Vpx8BtmPVo6g2HRh6QB5fOrfcGonL6ub/view"
              target="_blank"
              class="footer__link"
              >Политика конфиденциальности</a
            >
          </div>
        </div>

        <div class="footer__second-column">
          <div class="footer__docs">
            <a
              href="https://drive.google.com/file/d/1wwuDPxeEVZTPOQN6rd5444nbgk4fKxJS/view"
              target="_blank"
              class="footer__link"
              >Пользовательское соглашение</a
            >
            <a
              href="https://drive.google.com/file/d/1Vpx8BtmPVo6g2HRh6QB5fOrfcGonL6ub/view"
              target="_blank"
              class="footer__link"
              >Политика конфиденциальности</a
            >
          </div>
          <div class="footer__copyright">2024 Все права защищены</div>
        </div>

        <div class="footer__mobile">
          <div class="hiddens">2024 Все права защищены</div>

          <div class="footer_team_logo">
            <p class="footer_team_text">Сделано в:</p>
            <a
              target="_blank"
              class="footer_team_link"
              href="https://xn--g1ani7c.xn--p1ai/?ysclid=lroyqtkpvl175668603"
            >
              <svg
                width="145"
                height="30"
                viewBox="0 0 145 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.4304 7.48225L27.3727 11.0178C27.2424 11.109 27.1642 11.2613 27.1642 11.4242V17.8441C27.1642 18.1148 27.376 18.3344 27.6372 18.3344C27.7315 18.3344 27.8236 18.3051 27.9018 18.2505L32.9595 14.715C33.0898 14.6238 33.168 14.4715 33.168 14.3085V7.88872C33.168 7.61788 32.9562 7.39848 32.695 7.39848C32.6007 7.39848 32.5086 7.42764 32.4304 7.48225ZM17.7036 5.95552V28.5774C17.7036 28.8481 17.9154 29.0676 18.1766 29.0676C18.2709 29.0676 18.363 29.0384 18.4412 28.9838L25.1363 24.3036C25.2667 24.2125 25.3448 24.0602 25.3448 23.8972V1.27539C25.3448 1.00463 25.133 0.785156 24.8718 0.785156C24.7775 0.785156 24.6854 0.814341 24.6073 0.869027L17.9121 5.54913C17.7818 5.64028 17.7036 5.79254 17.7036 5.95552ZM8.24307 5.95552V28.5774C8.24307 28.8481 8.45484 29.0676 8.7161 29.0676C8.81037 29.0676 8.90247 29.0384 8.98062 28.9838L15.6758 24.3036C15.8061 24.2125 15.8843 24.0602 15.8843 23.8972V1.27539C15.8843 1.00463 15.6725 0.785156 15.4112 0.785156C15.317 0.785156 15.2248 0.814341 15.1467 0.869027L8.45159 5.54913C8.32126 5.64028 8.24307 5.79254 8.24307 5.95552ZM5.6862 7.48225L0.628417 11.0178C0.498115 11.109 0.419922 11.2613 0.419922 11.4242V17.8441C0.419922 18.1148 0.631693 18.3344 0.892955 18.3344C0.987229 18.3344 1.07932 18.3051 1.15748 18.2505L6.21523 14.715C6.34557 14.6238 6.42373 14.4715 6.42373 14.3085V7.88872C6.42373 7.61788 6.21196 7.39848 5.95069 7.39848C5.85646 7.39848 5.76436 7.42764 5.6862 7.48225Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M70.5509 7.03809H60.0438L58.5661 8.63483V21.2539L60.0438 22.8116H70.5509L72.0334 21.2539V8.63768L70.5509 7.03809ZM69.0502 19.6565H61.5682V10.1953H69.0502V19.6565ZM54.0862 22.813H43.5791L42.0994 21.2582V8.63913L43.5791 7.03954H54.0862L55.5653 8.63913V11.7715H52.5848V10.194H45.1015V19.6579H52.5848V18.1031H55.5653V21.2582L54.0862 22.813ZM82.5203 7.03809H91.503L93.0044 8.63768V21.2568L91.503 22.8144H82.5203L81.0196 21.2568V16.5248H78.0364V22.8137H75.0343V7.03809H78.0364V13.3668H81.0196V8.63483L82.5203 7.03809ZM84.0217 19.6565H90.0253V10.1953H84.0217V19.6565ZM107.991 22.8116H97.4835L96.0044 21.2568V18.1016H99.0059V19.6565H106.49V16.5248H101.987V13.3697H106.49V10.1925H99.0059V11.7701H96.0044V8.63768L97.4835 7.03809H107.991L109.47 8.63768V13.3697L107.991 14.9472L109.47 16.5248V21.2568L107.991 22.8116ZM137.373 7.03809H113.95L112.473 8.63483V21.2539L113.95 22.8137H137.375L138.856 21.2561V8.63768L137.373 7.03809ZM117.281 17.7792H115.471V19.6808H117.281V17.7792ZM115.471 10.1736H122.696L123.589 11.1394V15.8934L122.696 16.8442H115.471V10.1736ZM117.281 14.939H121.791V12.0752H117.281V14.939ZM134.968 10.1736H125.932L125.04 11.1358V17.3309L125.932 18.2668H129.55V19.6809H131.36V18.2654H134.968L135.872 17.3295V11.1358L134.968 10.1736ZM129.55 16.3652H126.85V12.0752H129.55V16.3652ZM134.075 16.3652H131.36V12.0752H134.075V16.3652Z"
                  fill="white"
                />
              </svg>
            </a>

            <p class="webwave">WEBWAVE</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.hiddens {
  display: none;
}
.footer__img-wrapper {
  padding-left: 22px;
}
.footer__links {
  display: flex;
  flex-direction: column;
  gap: 23px;
}
.footer {
  padding: 54px 30px 100px 30px;
  display: flex;
  justify-content: space-between;
}
.footer_team_logo {
  display: flex;
  align-items: end;
  gap: 5px;
}

.footer__second-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.webwave {
  font-family: NEXT ART;
  font-size: 20.84px;
  font-weight: 600;
  line-height: 23.62px;
  text-align: left;
  color: #f7f7f7;
  margin: 0;
  border-left: 2px solid white;
  padding-left: 7px;
  padding-bottom: 7px;
}

.footer__copyright {
  font-family: BrokenLed;
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  text-align: left;
  color: #f7f7f7;
  padding-bottom: 7px;
}

.footer__docs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer__docs a {
  font-family: BrokenLed;
  font-size: 24px;
  font-weight: 400;
  line-height: 33.89px;
  text-align: left;
  color: #f7f7f7;
}

.footer__first-column-nav {
  font-family: BrokenLed;
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  text-align: left;
  color: #f7f7f7;
  cursor: pointer;
  padding-bottom: 7px;
}

.footer__mobile {
  display: flex;
}

.footer_team_text {
  font-family: TT Interphases Pro;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin: 0;
  color: #ffff;
  padding-bottom: 9px;
}

@media screen and (max-width: 1200px) {
  .footer__first-column-nav {
    font-size: 20px;
  }
}

@media screen and (max-width: 1000px) {
  .hiddens {
    display: block;
    font-family: BrokenLed;
    font-size: 13px;
    font-weight: 400;
    line-height: 13.2px;
    text-align: left;
    color: #f7f7f7;
  }
  .footer__copyright {
    display: none;
  }
  .footer {
    flex-direction: column;
    padding: 30px 0px 60px 0px;
  }

  .footer__mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
  .footer__docs {
    display: none;
  }

  .footer__docs2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 28px;
  }

  .footer__first-column-nav {
    font-size: 12px;
    line-height: 13.2px;
  }

  .footer__docs2 a {
    font-size: 12px;
    line-height: 16.94px;

    color: #f7f7f7;
    max-width: 162px;
  }
  .footer__first-column {
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
  }
  .footer_team_text {
    font-size: 14px;
  }
  .footer__img-wrapper img {
    max-width: 134px;
  }
  .footer__img-wrapper {
    padding-left: 0;
  }
  .webwave {
    padding-bottom: 0;
  }

  .footer_team_logo {
    align-items: center;
  }
  
}
</style>
