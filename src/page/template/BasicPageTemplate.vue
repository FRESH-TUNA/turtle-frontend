<template>
  <HCFPageTemplate>
    <template v-slot:header>
      <SellerSystemHeader />
    </template>

    <template v-slot:main>
      <slot name="main"></slot>
    </template>

    <template v-slot:footer>
      <v-footer>Footer 를 정의합니다. 🦶🏻</v-footer>
    </template>
  </HCFPageTemplate>
</template>

<script>
import HCFPageTemplate from "@/page/template/HCFPageTemplate.vue";
import SellerSystemHeader from "@/component/header/SellerSystemHeader.vue";

export default {
  name: "MainPage",
  components: {
    HCFPageTemplate,
    SellerSystemHeader,
  },
  data: () => ({}),
  methods: {},
};
</script>

<style></style>
