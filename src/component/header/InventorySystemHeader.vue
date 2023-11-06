<template class="seller-system-header">
  <v-app-bar color="primary" prominent :elevation="2">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>재고관리시스템</v-toolbar-title>

    <v-spacer></v-spacer>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left" permanent>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        @click="router.push(item.path)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>

import { ref, watch } from "vue";

import router from "@/router";
import ROUTES from "@/const/routes";

const drawer = ref(false);
const group = ref(false);
const items = ref([
  {
    title: "재고 조회",
    path: ROUTES.ITEM.LIST.PATH
  }
])

watch(group, () => {
  this.drawer = false;
})
</script>
