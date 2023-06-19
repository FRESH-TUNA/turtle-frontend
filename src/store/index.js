import { defineStore } from "pinia";

export const AuthStore = defineStore("auth", {
  state: () => ({
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYmZmNmQ5YS02ZTU5LTRlMWUtOWYyMS0yMWM0ZTQzYzNlZTgiLCJST0xFUyI6WyJTRUxMRVIiXX0.VSuHSOGItzlW_V9Q8GS2Ul2kp2TQjnNoh29uRdQhISs",
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
