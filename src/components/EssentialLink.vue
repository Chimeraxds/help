<template>
  <q-card  class="full-card">
 <q-item class="news_title">{{cards.title}}</q-item>
  <q-card-section class="news_text" v-html="cards.content">
</q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
cards:{
 type: Object,
}
});
console.log(props.cards)
</script>


<style>
.cards_styles{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 6%;
  margin-top: 11.3%;
}
.full-card{
  max-width: 46%;
  padding:30px
}
.news_title{
font-family: BrokenLed;
font-size: 32px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0.02em;
color: white !important;
}
.news_text{
font-family: Geologica;
font-size: 24px;
font-weight: 400;
line-height: 32px;
color:white;
}
.news_text p{
  padding-bottom:12px;
}
.news_text p:last-child{
  padding-bottom:0px;
}
.q-card__section--vert{
  padding:unset;
}
@media (max-width:1024px){
  .news_title{
    font-family: BrokenLed;
font-size: 20px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0.02em;
  }
  .news_text{
    font-family: Geologica;
font-size: 16px;
font-weight: 400;
line-height: 20px;
  }
  .full-card{
    padding:10px;
  }
  .news_text p{
  padding-bottom:0px;
}
}
  @media (max-width:768px){
    .cards_styles{
      flex: 1 1 100%;
      display: initial;

    }
    .full-card{
      max-width: 90%;
      margin-left: 5%;
    }
    .news_title{
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
    }
    .news_text{
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
    }
    .full-card:first-child{
      margin-bottom: 15px;
    }
    .news_text p{
  padding-bottom:7px;
}
  }

</style>
