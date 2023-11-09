<template class="inventory-list-main">
  <v-main>
    <v-container>
      <v-row justify="start" class="flex-column">
        <v-col>

          <v-row class="mt-1">
            <v-col>
              <h2>아이템 조회</h2>
            </v-col>
            <v-col class="d-flex justify-end align-baseline">
              <v-text-field
                  density="compact"
                  v-model="searchQuery"
                  variant="outlined"
                  label="이름으로 검색"
                  :loading="searchLoading"
                  @click:append-inner="querySearch"
                  append-inner-icon="mdi-magnify"
                  required
                  class="mr-2"
              />
              <v-btn
                  @click="router.push({ name: ROUTES.ITEM.NEW.NAME })"
                  variant="plain"
                  class="pr-0 pl-0"
                  size="53"
              >
                <v-icon
                    size="53"
                    icon="mdi-plus-box"
                ></v-icon>
              </v-btn>
            </v-col>
          </v-row>

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
                <td>
                  <router-link :to="{ name: ROUTES.ITEM.SHOW.NAME, params: { id: item.id }}">{{ item.name }}</router-link>
                </td>
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

          <MyPaginator
              :page="curPage"
              :size="size"
              :max-page="5"
              :total-items="totalCount"
              :routing-callback="pageChangeRouter"
          />

        </v-col>
      </v-row>
    </v-container>

    <Loading :showLoading="showLoading" />
  </v-main>
</template>

<script setup>
import {ref, watch, onMounted} from "vue";
import router from "@/router";

import Loading from "@/component/etc/Loading.vue";
import ROUTES from "@/const/routes";

import {searchItem} from "@/port/item";
import MyPaginator from "@/component/etc/MyPaginator.vue";

const props = defineProps(["page", "size", "sort", "query"]);
const searchQuery = ref("");
const items = ref([]);

const searchLoading = ref(false);
const showLoading = ref(false);

/**
 * pages
 */
const count = ref(0);
const totalPageCount = ref(0);
const totalCount = ref(0);
const curPage = ref(0);

/**
 * functions
 */
const itemSearchSuccessPostProcessor = (data) => {
  items.value = data.page;
  count.value = data.count;

  totalPageCount.value = data.totalPageCount;
  totalCount.value = data.totalCount;
  curPage.value = data.pageNumber;

  searchLoading.value = false;
};

const querySearch = () => {
  searchLoading.value = true;
  pageChangeRouter(1);
};


const pageChangeRouter = (page) => {
  router.push({
    name: ROUTES.ITEM.LIST.NAME,
    query: { page: page, size: props.size, sort: props.sort, query: searchQuery.value },
  });
};

/**
 * hooks
 */
onMounted(() => {
  searchItem(props.page-1, props.size, props.sort, props.query).then((data) => {
    itemSearchSuccessPostProcessor(data);
  });
});


watch(
    () => [props.page, props.size, props.sort, props.query],
    async () => {
      console.log(props.query);

      searchItem(props.page-1, props.size, props.sort, props.query).then((data) => {
        itemSearchSuccessPostProcessor(data);
      });
  }
);
</script>

<style scoped>
</style>
