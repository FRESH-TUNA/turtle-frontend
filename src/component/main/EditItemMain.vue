<template class="new-item-main">
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="10">
          <h2>아이템 수정</h2>

          <h3 class="mt-5">기본 정보</h3>
          <v-row class="mt-1">
            <v-col cols="3">
              이름
            </v-col>

            <v-col cols="6">
              <v-text-field density="compact" v-model="name" variant="outlined" required></v-text-field>
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col cols="3">
              카테고리
            </v-col>

            <v-col cols="6">
              <v-text-field density="compact" v-model="category" variant="outlined" required></v-text-field>
            </v-col>
          </v-row>

          <!--          <v-row class="mt-1">-->
          <!--            <v-col>-->
          <!--              콤보여부-->
          <!--            </v-col>-->

          <!--            <v-col cols="8">-->
          <!--              <v-text-field density="compact" v-model="isCombo" variant="outlined" required></v-text-field>-->
          <!--            </v-col>-->
          <!--          </v-row>-->

          <h3 class="mt-5">SKU(재고관리) 정보</h3>
          <v-row class="mt-1">
            <v-col cols="3">
              SKU 아이디 (재고코드)
            </v-col>

            <v-col cols="6">
              <v-text-field density="compact" v-model="skuName" variant="outlined" required></v-text-field>
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col cols="3">
              바코드
            </v-col>

            <v-col cols="6">
              <v-text-field density="compact" v-model="barcode" variant="outlined" required></v-text-field>
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col cols="3">
              공급가격
            </v-col>

            <v-col cols="6" class="d-flex">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                      density="compact"
                      v-model="cost"
                      variant="outlined"
                      required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-select
                      density="compact"
                      variant="outlined"
                      v-model="currency"
                      :items="currencies"
                      :rules="[(v) => !!v || '통화를 선택해주세요']"
                      required
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col cols="3">
              포장 규격
            </v-col>

            <v-col cols="9" class="d-flex">
              <v-row class="align-center">
                <v-col cols="3">
                  <v-text-field
                      density="compact"
                      v-model="cost"
                      variant="outlined"
                      required
                  ></v-text-field>
                </v-col>x
                <v-col cols="3">
                  <v-text-field
                      density="compact"
                      v-model="cost"
                      variant="outlined"
                      required
                  ></v-text-field>
                </v-col>x
                <v-col cols="3">
                  <v-text-field
                      density="compact"
                      v-model="cost"
                      variant="outlined"
                      required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-select
                      density="compact"
                      variant="outlined"
                      v-model="spec"
                      :items="specs"
                      :rules="[(v) => !!v || '규격을 정해주세요']"
                      required
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col class="d-flex justify-start">
              <v-btn
                  @click="router.push({ name: ROUTES.ITEM.IN.NAME, params: { id: item.id } })"
                  prepend-icon="mdi-check-circle"
                  class="mr-1"
              >아이템 추가</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <Loading :showLoading="showLoading" />
  </v-main>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Loading from "@/component/etc/Loading.vue";
import {onBeforeRouteUpdate} from "vue-router";

const showLoading = ref(false);

const name = ref("");
const category = ref("");


/**
 * sku 정보
 */
const barcode = ref("");
const currencies = ref(["KRW", "JPY", "USD"]);
const currency = ref("KRW");
const cost = ref("");

const specs = ref(["CM", "M", "INCH"]);
const spec = ref("CM");
/**
 * functions
 */


/**
 * hooks
 */
onMounted(() => {

});

onBeforeRouteUpdate((to, from) => {

})
</script>

<style scoped>
</style>
