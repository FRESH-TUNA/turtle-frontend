<template>
  <BasicTemplate>
    <template v-slot:main>
      <v-main style="min-width: 1350px"> hello world </v-main>
    </template>
  </BasicTemplate>
</template>

<script>
import BasicTemplate from "@/page/template/BasicPageTemplate.vue";


export default {
  name: "MainPage",
  components: {
    BasicTemplate
  },
  data: () => ({}),
  methods: {},
};
</script>

<style></style>
