<template>
  <BasicTemplate>
    <template v-slot:main>
      <InventoryMain />
    </template>
  </BasicTemplate>
</template>

<script setup>
import BasicTemplate from "@/page/template/BasicPageTemplate.vue";
import InventoryMain from "@/component/main/InventoryMain.vue";

// export default {
//   name: "InventoryHomePage",
//   components: {
//     BasicTemplate,
//   },
//   data: () => ({}),
//   methods: {},
// };
</script>

<style></style>
