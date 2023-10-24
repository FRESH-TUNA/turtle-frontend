<template>
  <UniCenterPageTemplate>
    <template v-slot:main>
      <TurtleTitle />
      <div class="social">
        <a
          href="http://localhost:8080/oauth2/authorization/google?redirect_url=http://localhost:5173"
          class="btn btn-success active"
          role="button"
        >
          구글 계정으로 로그인
        </a>
      </div>
      <hr class="my-12 remember-login-separator" />
      <p class="remember-login-title">리멤버 계정으로 로그인</p>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="email" :rules="[rules.emailRequired]" label="이메일" required></v-text-field>

        <v-text-field v-model="password" :rules="[rules.passwordRequired]" label="패스워드" required></v-text-field>

        <v-btn color="success" class="mr-4" @click="signinRequest"> 로그인 </v-btn>
      </v-form>
    </template>
  </UniCenterPageTemplate>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router";

import UniCenterPageTemplate from "@/component/page/template/MainCenterPageTemplate.vue";
import TurtleTitle from "@/component/etc/TurtleTitle.vue";
import { AuthStore } from "@/store";
import { ApiRequester } from "@/util/apiRequester";
import Urls from "@/const/apiTemplate";

/**
 * data
 */
const authStore = AuthStore();
const email = ref("");
const password = ref("");
const rules = {
  passwordRequired: (value) => !!value || "비밀번호를 입력해주세요.",
  emailRequired: (value) => !!value || "이메일을 입력해주세요.",
};

function signinSuccessHandler(newAccessToken) {
  authStore.setAccessToken(newAccessToken);
  router.push("/");
}

function signinRequest() {
  ApiRequester.post(Urls.MAIN_API.AUTH.SIGNIN, { email: email.value, password: password.value }).then((response) =>
    signinSuccessHandler(response.headers.authorization)
  );
}
</script>

<style></style>
