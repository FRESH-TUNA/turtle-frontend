<template>
  <AbstractCenterJustifiedComponent col-size="6" class="signin-page">
    <template v-slot:content>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">#</th>
              <th class="text-left">링크</th>
              <th class="text-left">플랫폼</th>
              <th class="text-left">상태</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
  </AbstractCenterJustifiedComponent>
</template>

<script setup>
import { ref, onActivated } from "vue";
import router from "@/router";

import AbstractCenterJustifiedComponent from "../components/AbstractCenterJustifiedComponent.vue";

import { AuthStore } from "@/stores";
import { ApiRequester, QueryStringBuilder } from "@/utils";
import Urls from "@/consts/urls";

/**
 * data
 */
const authStore = AuthStore();


// onActivated(() => {
//   el.value // <div>
// })

/**
 * methods
 */
function signinSuccessHandler(newAccessToken) {
  authStore.setAccessToken(newAccessToken);
  router.push("/");
}

function usersMeQuestionsRequest() {
  const query = new QueryStringBuilder.Builder()
    .addQuery("key", "value")
    .addQuery("key", "value")
    .build();
  console.log(query);

//   ApiRequester.get(Urls.MAIN_API.ROOT.ME.QUESTIONS, { email: email.value, password: password.value }).then((response) =>
//     signinSuccessHandler(response.headers.authorization)
//   );
}
usersMeQuestionsRequest();
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
