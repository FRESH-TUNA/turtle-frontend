<template class="seller-system-header">
  <v-app-bar color="primary" prominent :elevation="2">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>슈퍼셀러</v-toolbar-title>

    <v-spacer></v-spacer>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        @click="router.push('/inventory')"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>

import { ref, watch } from "vue";

import router from "@/router";

const drawer = ref(false);
const group = ref(false);
const items = ref([
  {
    title: "재고 관리",
    url: "/inventory"
  }
])

watch(group, () => {
  this.drawer = false;
})
// export default {
//   data: () => ({
//     drawer: false,
//     group: null,
//     items: [
//       {
//         title: "재고 관리",
//         value: "재고 관리",
//         url: "/inventory"
//       }
//     ],
//   }),

//   watch: {
//     group() {
//       this.drawer = false;
//     },
//   },
// };
</script>
