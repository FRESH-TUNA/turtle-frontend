<template>
  <UniCenterPageTemplate>
    <template v-slot:main>
      <h2>로그인</h2>
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
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[(v) => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"> Validate </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

        <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
      </v-form>
    </template>
  </UniCenterPageTemplate>
</template>

<script>
import UniCenterPageTemplate from "@/pages/UniCenterPageTemplate.vue";

export default {
  name: "SigninPage",
  components: {
    UniCenterPageTemplate,
  },
  data: () => ({}),
  methods: {},
};
</script>

<style></style>
