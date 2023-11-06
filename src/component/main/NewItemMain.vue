<template class="new-item-main">
  <v-main>
    <v-container>
      <h2>신규 아이템 등록</h2>

      <v-row>
        <v-col cols="10">
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
        </v-col>

        <v-col>

        </v-col>
      </v-row>







<!--      <v-form ref="form">-->



<!--        <v-row class="mt-0">-->
<!--          <v-col>-->
<!--            <h3>이름</h3>-->
<!--          </v-col>-->
<!--        </v-row>-->

<!--        <v-row class="mt-0">-->
<!--          <v-col>-->
<!--            <v-text-field v-model="name" variant="outlined" required></v-text-field>-->
<!--          </v-col>-->
<!--        </v-row>-->

<!--        <v-row class="mt-0">-->
<!--          <v-col>-->
<!--            <h3>바코드</h3>-->
<!--          </v-col>-->
<!--        </v-row>-->

<!--        <v-row class="mt-0">-->
<!--          <v-col>-->
<!--            <v-text-field v-model="barcode" variant="outlined" required></v-text-field>-->
<!--          </v-col>-->
<!--        </v-row>-->

<!--        <v-row class="mt-0">-->
<!--          <v-col>-->
<!--            <h3>가격</h3>-->
<!--          </v-col>-->
<!--        </v-row>-->

<!--        <v-row class="mt-0">-->
<!--          <v-col>-->
<!--            <v-select-->
<!--                variant="outlined"-->
<!--                v-model="currency"-->
<!--                :items="currencies"-->
<!--                :rules="[(v) => !!v || '통화를 선택해주세요']"-->
<!--                required-->
<!--            ></v-select>-->
<!--          </v-col>-->
<!--          <v-col>-->
<!--            <v-text-field v-model="cost" variant="outlined" required width="70px"></v-text-field>-->
<!--          </v-col>-->
<!--          <v-col>-->
<!--          </v-col>-->
<!--        </v-row>-->

<!--        <v-row class="mt-0">-->
<!--          <v-col>-->
<!--            <h3>설명</h3>-->
<!--          </v-col>-->
<!--        </v-row>-->

<!--        <v-row class="mt-0">-->
<!--          <v-col>-->
<!--            <v-text-field v-model="description" variant="outlined" required></v-text-field>-->
<!--          </v-col>-->
<!--        </v-row>-->

<!--        <v-btn color="success" class="mt-4" block variant="flat" @click="skuInService">등록</v-btn>-->
<!--      </v-form>-->
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
