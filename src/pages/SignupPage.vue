<template>
  <UniCenterPageTemplate>
    <template v-slot:main>
      <AbstractCenterJustifiedComponent col-size="6" class="signup-page">
        <template v-slot:content>
          <TurtleTitle />

          <SocialLoginParts />

          <hr class="my-12 remember-login-separator" />
          <p class="mb-5">리멤버 계정으로 회원가입</p>
          <v-form ref="form" v-model="valid" lazy-validation class="signup-page form" @keyup.enter="signupRequest">
            <v-text-field
              v-model="email"
              :rules="[rules.emailRequired]"
              label="이메일"
              variant="outlined"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="[rules.passwordRequired]"
              label="패스워드"
              variant="outlined"
              type="password"
            ></v-text-field>
            <v-text-field
              v-model="matchingpassword"
              :rules="[rules.passwordRequired]"
              label="패스워드 재입력"
              variant="outlined"
              type="password"
            ></v-text-field>
          </v-form>

          <v-btn block color="success" @click="signupRequest">회원가입</v-btn>
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
import TurtleTitle from "@/components/parts/TurtleTitle/TurtleTitle.vue";
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
const matchingpassword = ref("");
const rules = {
  passwordRequired: (value) => !!value || "비밀번호를 입력해주세요.",
  emailRequired: (value) => !!value || "이메일을 입력해주세요.",
};

/**
 * methods
 */
function signupSuccessHandler(newAccessToken) {
  authStore.setAccessToken(newAccessToken);
  router.push("/");
}

function signupRequest() {
  ApiRequester.post(Urls.MAIN_API.AUTH.SIGNUP, {
    email: email.value,
    password: password.value,
    matchingpassword: matchingpassword.value,
  }).then((response) => signupSuccessHandler(response.headers.authorization));
}
</script>

<style scoped>
.signup-page {
  max-width: 800px;
}
.signup-page .v-col > hr {
  border-top: 1px solid #e6e6e6;
}

.signup-page .v-col > * {
  width: 100%;
  text-align: center;
}
</style>
