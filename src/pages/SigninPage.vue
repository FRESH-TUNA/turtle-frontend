<template>
  <UniCenterPageTemplate>
    <template v-slot:main>
      <AbstractCenterJustifiedComponent col-size="6" class="signin-page">
        <template v-slot:content>
          <TurtleTitle/>

          <SocialLoginParts/>
          
          <hr class="my-12 remember-login-separator" />
          <p class="mb-5">리멤버 계정으로 로그인</p>
          <v-form ref="form" v-model="valid" lazy-validation class="signin-page form">
            <v-text-field v-model="email" :rules="[rules.emailRequired]" label="이메일" variant="outlined">
            </v-text-field>
            <v-text-field v-model="password" :rules="[rules.passwordRequired]" label="패스워드" variant="outlined"></v-text-field>
          </v-form>

          <v-btn block color="success" @click="signinRequest"> 로그인 </v-btn>
        </template>
      </AbstractCenterJustifiedComponent>
    </template>
  </UniCenterPageTemplate>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router";

import AbstractCenterJustifiedComponent from "../components/AbstractCenterJustifiedComponent.vue";
import UniCenterPageTemplate from "@/pages/UniCenterPageTemplate.vue";
import TurtleTitle from "../components/TurtleTitle.vue";
import SocialLoginParts from "@/components/parts/SocialLoginParts.vue";

import { AuthStore } from "@/stores";
import { ApiRequester } from "@/utils";
import Urls from "@/consts/urls";

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

/**
 * methods
 */
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

<style scoped>
.signin-page {
  max-width: 800px;
}
.signin-page .v-col > hr {
  border-top: 1px solid #e6e6e6;
}

.signin-page .v-col > * {
  width: 100%;
  text-align: center;
}
</style>
