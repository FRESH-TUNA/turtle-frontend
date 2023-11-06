<template class="item-show-main">
  <v-main>
    <v-container class="justify-center flex-column">
      <v-row class="mt-1">
        <v-col>
          <h2>아이템 상세</h2>
        </v-col>
        <v-col class="d-flex justify-end">
          <v-btn
              @click="router.push({ name: ROUTES.ITEM.IN.NAME, params: { id: item.id } })"
              prepend-icon="mdi-check-circle"
              class="mr-1"
          >입고</v-btn>

          <v-btn
              @click="router.push({ name: ROUTES.ITEM.IN.NAME, params: { id: item.id } })"
              prepend-icon="mdi-check-circle"
              class="mr-1"
          >출고</v-btn>

          <v-btn
              @click="router.push({ name: ROUTES.ITEM.IN.NAME, params: { id: item.id } })"
              prepend-icon="mdi-check-circle"
              class="mr-1"
          >수정</v-btn>

          <v-btn
              @click="router.push({ name: ROUTES.ITEM.IN.NAME, params: { id: item.id } })"
              prepend-icon="mdi-check-circle"
          >삭제</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h3 class="mt-5">기본 정보</h3>
          <v-row class="mt-1">
            <v-col>
              이름
            </v-col>

            <v-col cols="8">
              {{item.name}}
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col>
              카테고리
            </v-col>

            <v-col cols="8">
              {{item.category}}
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col>
              콤보여부
            </v-col>

            <v-col cols="8">
              {{item.isCombo}}
            </v-col>
          </v-row>

          <h3 class="mt-5">SKU(재고관리) 정보</h3>
          <v-row class="mt-1">
            <v-col>
              SKU 아이디 (재고관리코드)
            </v-col>

            <v-col cols="8">
              {{item.sku.name}}
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col>
              바코드
            </v-col>

            <v-col cols="8">
              {{item.sku.barcode}}
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col>
              재고수량
            </v-col>

            <v-col cols="8">
              {{item.sku.count}}
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col>
              공급가격
            </v-col>

            <v-col cols="8">
              {{item.sku.price.value}}({{item.sku.price.currency}})
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col>
              포장 규격
            </v-col>

            <v-col cols="8">
              {{item.sku.spec.dimension.depth}}/{{item.sku.spec.dimension.height}}/{{item.sku.spec.dimension.width}}({{item.sku.spec.dimension.scale}})
            </v-col>
          </v-row>
        </v-col>

        <v-col>

        </v-col>
      </v-row>
    </v-container>

    <Loading :showLoading="showLoading" />
  </v-main>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Loading from "@/component/etc/Loading.vue";
import ROUTES from "@/const/routes";
import {onBeforeRouteUpdate} from "vue-router";
import {showItem} from "@/port/item";

const props = defineProps(["id"]);

const item = ref({sku: {price: {}, spec: {dimension: {}}}});

const showLoading = ref(false);

/**
 * functions
 */
const itemSuccessPostProcessor = (data) => {
  item.value = data;
};

/**
 * hooks
 */
onMounted(() => {
  showItem(props.id).then((data) => {
    itemSuccessPostProcessor(data);
  });
});

onBeforeRouteUpdate((to, from) => {
  if(from.name === ROUTES.ITEM.IN.NAME || from.name === ROUTES.ITEM.OUT.NAME) {
    showItem(props.id).then((data) => {
      itemSuccessPostProcessor(data);
    });
  }
  return true;
});
</script>

<style scoped>
</style>
