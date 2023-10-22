<template class="basic-header">
  <AbstractCenterJustifiedComponent :style="styleObject" :fluid="true">
    <template v-slot:content>
      <v-toolbar color="white">
        <v-toolbar-title><TurtleTitle /></v-toolbar-title>

        <v-tabs
          style="margin-top: 20px"
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows
        >
          <v-tab @click="this.$router.push('/signin')" hide-slider> 로그인 </v-tab>
          <v-tab @click="this.$router.push('/signup')" hide-slider> 회원가입 </v-tab>
        </v-tabs>
      </v-toolbar>
    </template>
  </AbstractCenterJustifiedComponent>
</template>

<script>
import AbstractCenterJustifiedComponent from "@/component/template/AbstractCenterJustifiedComponent.vue";
import TurtleTitle from "../etc/TurtleTitle.vue";

export default {
  name: "BasicHeader",
  components: {
    AbstractCenterJustifiedComponent,
    TurtleTitle,
  },
  data: () => ({
    styleObject: {
      backgroundColor: "white",
      borderBottom: "1px solid #e6e6e6",
    },
  }),
  methods: {},
};
</script>
