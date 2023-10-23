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
                <th class="text-left">바코드</th>
                <th class="text-left">이름</th>
                <th class="text-left">재고</th>
                <th class="text-left"></th>
                <th class="text-left"></th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in skus" :key="item.name">
                <td>{{ item.id }}</td>
                <td>{{ item.barcode }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.count }}</td>
                <td><v-btn>입고</v-btn></td>
                <td><v-btn>출고</v-btn></td>
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
import Loading from "@/component/etc/Loading.vue";
import { ref, onMounted, watch } from "vue";

import router from "@/router";
import { ApiRequester } from "@/util";
import API_TEMPLATE from "@/const/apiTemplate";

const curPageState = ref(router.currentRoute.value.query.page);
const curQueryState = ref(router.currentRoute.value.query.query);
const curSizeState = ref(router.currentRoute.value.query.size);

const skus = ref([]);
const pageCount = ref(2);

const showLoading = ref(false);

/**
 * functions
 */
const inventorySearch = (page = 1, query = "", size = 2) =>
  ApiRequester.get(API_TEMPLATE.INVENTORY.LIST + `?page=${page - 1}&query=${query}&size=${size}`);

const inventorySearchSuccessPostProcessor = (data) => {
  skus.value = data.page;
  pageCount.value = data.totalPageCount;
};

onMounted(() => {
  inventorySearch(curPageState.value, curQueryState.value, curSizeState.value).then((res) => {
    inventorySearchSuccessPostProcessor(res.data.data);
  });
});

watch(curPageState, async (newPageNumber, oldPageNumber) => {
  if (newPageNumber !== oldPageNumber) {
    await router.push(`/inventory?page=${newPageNumber}&query=${curQueryState.value}&size=${curSizeState.value}`);

    curPageState.value = newPageNumber;

    inventorySearch(newPageNumber, curQueryState.value, curSizeState.value).then((res) => {
      inventorySearchSuccessPostProcessor(res.data.data);
    });
  }
});
</script>

<style scoped>
</style>
