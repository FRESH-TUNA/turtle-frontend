import { defineStore } from "pinia";

export const AuthStore = defineStore("auth", {
  state: () => ({
    accessToken: null,
  }),
  actions: {
    setAccessToken(newAccessToken) {
      this.accessToken = newAccessToken;
    },
  },
  getters: {
    hasAccessToken() {
      return this.accessToken != null;
    },
  },
});
