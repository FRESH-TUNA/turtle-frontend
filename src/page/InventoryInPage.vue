<template>
  <BasicTemplate>
    <template v-slot:main>
      <InventoryInMain :id="props.id" />
    </template>
  </BasicTemplate>
</template>

<script setup>
import { ref, toRefs, onMounted } from "vue";
import BasicTemplate from "@/page/template/BasicPageTemplate.vue";
import InventoryInMain from "@/component/main/InventoryInMain.vue";

const props = defineProps(["id"]);
// const { id } = toRefs(props);

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
