import { defineStore } from "pinia";
export const useNewsInfo = defineStore("newsinfo", {
  state: () => ({
    cards: [],
    achievements: [],
    team: [],
  }),
  actions: {
    async getTests() {
      const res = await fetch("https://admin.kvazaroge.ru/api/news");
      const kekw = await res.json();
      this.cards = kekw.data;
    },
    async getAchievements() {
      const res = await fetch("https://admin.kvazaroge.ru/api/top");
      const achieveRes = await res.json();
      this.achievements = achieveRes.data;
    },
    async getTeam() {
      const res = await fetch("https://admin.kvazaroge.ru/api/team");
      const teamRes = await res.json();
      this.team = teamRes.data;
    },
  },
});
