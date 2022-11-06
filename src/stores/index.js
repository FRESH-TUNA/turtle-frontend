import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const AuthStore = defineStore("auth", () => {
  const accessToken = ref(null);

  const hasAccessToken = computed(() => accessToken.value != null);

  function setAccessToken(newAccessToken) {
    this.accessToken = newAccessToken;
  }
  return { accessToken, hasAccessToken, setAccessToken };
});
