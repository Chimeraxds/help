<template>
  <router-view />
</template>

<script setup>
defineOptions({
  name: "App",
});

import { onMounted } from "vue";
import { useNewsInfo } from "./stores/example-store.js";
const store = useNewsInfo();
onMounted(() => {
  store.getTests();
  store.getAchievements();
  store.getTeam();
});
</script>
