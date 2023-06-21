<template class="inventory-main">
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
                <th class="text-left">입고</th>
                <th class="text-left">출고</th>
                <th class="text-left">수정/삭제</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in skus" :key="item.name">
                <td>{{ item.id }}</td>
                <td>{{ item.barcode }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.count }}</td>
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
import CONFIG from "@/config";
import router from "@/router";
import { ApiRequester } from "@/util";

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
  ApiRequester.get(CONFIG.INVENTORY_API_ROOT + `/inventory/sku?page=${page - 1}&query=${query}&size=${size}`);

const inventorySearchSuccessPostProcessor = (data) => {
  skus.value = data.page;
  pageCount.value = data.totalPageCount;
};

onMounted(() => {
  console.log(curPageState.value);
  inventorySearch(curPageState.value, curQueryState.value, curSizeState.value).then((res) => {
    inventorySearchSuccessPostProcessor(res.data.data);
  });
});

watch(curPageState, async (newPageNumber, oldPageNumber) => {
  if (newPageNumber !== oldPageNumber) {
    router.push(`/inventory?page=${newPageNumber}&query=${curQueryState.value}&size=${curSizeState.value}`);

    curPageState.value = newPageNumber;

    inventorySearch(newPageNumber, curQueryState.value, curSizeState.value).then((res) => {
      inventorySearchSuccessPostProcessor(res.data.data);
    });
  }
});
</script>

<style scoped>
</style>
