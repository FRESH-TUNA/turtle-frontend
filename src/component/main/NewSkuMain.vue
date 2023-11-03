<template class="new-sku-main">
  <v-main>
    <v-container>
      <h2>신규 SKU 등록</h2>

      <v-form ref="form">

        <v-row class="mt-0">
          <v-col>
            <h3>이름</h3>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col>
            <v-text-field v-model="name" variant="outlined" required></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col>
            <h3>바코드</h3>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col>
            <v-text-field v-model="barcode" variant="outlined" required></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col>
            <h3>가격</h3>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col>
            <v-select
                variant="outlined"
                v-model="currency"
                :items="currencies"
                :rules="[(v) => !!v || '통화를 선택해주세요']"
                required
            ></v-select>
          </v-col>
          <v-col>
            <v-text-field v-model="cost" variant="outlined" required width="70px"></v-text-field>
          </v-col>
          <v-col>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col>
            <h3>설명</h3>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col>
            <v-text-field v-model="description" variant="outlined" required></v-text-field>
          </v-col>
        </v-row>

        <v-btn color="success" class="mt-4" block variant="flat" @click="skuInService">등록</v-btn>
      </v-form>
    </v-container>

    <Loading :showLoading="showLoading" />
  </v-main>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Loading from "@/component/etc/Loading.vue";
import ROUTES from "@/const/routes";
import {onBeforeRouteUpdate} from "vue-router";
import {searchSku} from "@/port/sku";

const props = defineProps(["page", "size", "sort", "query"]);

const skus = ref([]);
const pageCount = ref(2);
const showLoading = ref(false);

const cost = ref(0);
const currencies = ref([]);

/**
 * functions
 */
const inventorySearchSuccessPostProcessor = (data) => {
  skus.value = data.page;
  pageCount.value = data.totalPageCount;
};

/**
 * hooks
 */
onMounted(() => {
  searchSku(props.page, props.size, props.sort, props.query).then((data) => {
    inventorySearchSuccessPostProcessor(data);
  });
});

onBeforeRouteUpdate((to, from) => {
  if(from.name === ROUTES.SKU.IN.NAME) {
    searchSku(props.page, props.size, props.sort, props.query).then((data) => {
      inventorySearchSuccessPostProcessor(data);
    });
  }
  return true;
})
</script>

<style scoped>
</style>
