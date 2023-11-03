<template class="inventory-list-main">
  <v-main>
    <v-container>
      <v-row justify="start" class="flex-column">
        <v-col>
          <h2>재고 현황</h2>

          <v-table fixed-header height="300px" class="w-100 mt-5">
            <thead>
              <tr>
                <th class="text-left">아이디</th>
                <th class="text-left">이름</th>
                <th class="text-left">카테고리</th>
                <th class="text-left">콤보여부</th>
                <th class="text-left">재고수량</th>
                <th class="text-left"></th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.name">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.isCombo }}</td>
                <td>{{ item.count }}</td>
                <td>
                  <v-btn
                      @click="router.push({ name: ROUTES.ITEM.IN.NAME, params: { id: item.id } })"
                  >입고</v-btn>
                </td>
                <td><v-btn
                    @click="router.push({ name: ROUTES.ITEM.OUT.NAME, params: { id: item.id } })"
                >출고</v-btn></td>
              </tr>
            </tbody>
          </v-table>

          <v-pagination v-model="curPageState" class="my-4" :length="pageCount"></v-pagination>
        </v-col>
      </v-row>
    </v-container>

    <Loading :showLoading="showLoading" />
  </v-main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";

import Loading from "@/component/etc/Loading.vue";
import ROUTES from "@/const/routes";
import {onBeforeRouteUpdate} from "vue-router";
import {searchItem} from "@/port/item";

const props = defineProps(["page", "size", "sort", "query"]);

const items = ref([]);
const pageCount = ref(2);
const showLoading = ref(false);

/**
 * functions
 */
const itemSearchSuccessPostProcessor = (data) => {
  items.value = data.page;
  pageCount.value = data.totalPageCount;
};

/**
 * hooks
 */
onMounted(() => {
  searchItem(props.page, props.size, props.sort, props.query).then((data) => {
    itemSearchSuccessPostProcessor(data);
  });
});

onBeforeRouteUpdate((to, from) => {
  if(from.name === ROUTES.ITEM.IN.NAME || from.name === ROUTES.ITEM.OUT.NAME) {
    searchItem(props.page, props.size, props.sort, props.query).then((data) => {
      itemSearchSuccessPostProcessor(data);
    });
  }
  return true;
});
</script>

<style scoped>
</style>
