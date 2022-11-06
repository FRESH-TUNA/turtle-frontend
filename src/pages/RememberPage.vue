<template>
  <BasicTemplate>
    <template v-slot:header>
      <BasicHeader />
    </template>

    <template v-slot:main>
      <v-main style="min-width: 1350px"> hello world </v-main>
    </template>

    <template v-slot:footer>
      <h1>Footer 를 정의합니다. 🦶🏻</h1>
    </template>
  </BasicTemplate>
</template>

<script>
import BasicTemplate from "@/pages/BasicPageTemplate.vue";
import BasicHeader from "@/components/headers/BasicHeader.vue";

export default {
  name: "RememberPage",
  components: {
    BasicTemplate,
    BasicHeader,
  },
  data: () => ({}),
  methods: {},
};
</script>

<style></style>
