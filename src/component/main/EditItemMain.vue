<template class="edit-item-main">
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
              <v-select
                  density="compact"
                  variant="outlined"
                  v-model="category"
                  :items="categories"
                  :rules="[(v) => !!v || '무게 규격을 정해주세요']"
                  required
              ></v-select>
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

          <v-row class="mt-1">
            <v-col cols="3">
              설명
            </v-col>

            <v-col cols="6" class="d-flex">
              <v-textarea
                  density="compact"
                  v-model="description"
                  variant="outlined"
                  required
              ></v-textarea>
            </v-col>
          </v-row>

          <h3 class="mt-5">SKU(재고관리) 정보</h3>
          <v-row class="mt-1">
            <v-col cols="3">
              SKU 아이디 (재고코드)
            </v-col>

            <v-col cols="6">
              <v-text-field density="compact" v-model="skuId" variant="outlined" required></v-text-field>
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
                      v-model="width"
                      variant="outlined"
                      required
                  ></v-text-field>
                </v-col>x
                <v-col cols="3">
                  <v-text-field
                      density="compact"
                      v-model="height"
                      variant="outlined"
                      required
                  ></v-text-field>
                </v-col>x
                <v-col cols="3">
                  <v-text-field
                      density="compact"
                      v-model="depth"
                      variant="outlined"
                      required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-select
                      density="compact"
                      variant="outlined"
                      v-model="dimensionScale"
                      :items="dimensionScales"
                      :rules="[(v) => !!v || '규격을 정해주세요']"
                      required
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col cols="3">
              무게
            </v-col>

            <v-col cols="6" class="d-flex">
              <v-row class="align-center">
                <v-col cols="6">
                  <v-text-field
                      density="compact"
                      v-model="weight"
                      variant="outlined"
                      required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-select
                      density="compact"
                      variant="outlined"
                      v-model="weightScale"
                      :items="weightScales"
                      :rules="[(v) => !!v || '무게 규격을 정해주세요']"
                      required
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col class="d-flex justify-start">
              <v-btn
                  @click="update"
                  prepend-icon="mdi-check-circle"
                  class="mr-1"
              >아이템 수정</v-btn>
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
import {newItem, showItem, updateItem} from "@/port/item";
import router from "@/router";
import ROUTES from "@/const/routes";

const props = defineProps(["id"]);

const showLoading = ref(false);

const name = ref("");
const category = ref("FOOD");
const categories = ref(["FOOD", "CLOTH"]);
const description = ref("");

/**
 * sku 정보
 */
const skuId = ref("");
const barcode = ref("");
const currencies = ref(["KRW", "JPY", "USD"]);
const currency = ref("KRW");
const cost = ref("");

const dimensionScales = ref(["CM", "M", "INCH"]);
const dimensionScale = ref("CM");
const width = ref("");
const height = ref("");
const depth = ref("");

const weight = ref("");
const weightScales = ref(["GRAM", "KILOGRAM"]);
const weightScale = ref("GRAM");

/**
 * functions
 */
const loadItem = () => {
  showItem(props.id).then((item) => {
    const sku = item.sku;

    name.value = item.name;
    category.value = item.category;
    description.value = item.description;

    skuId.value = sku.name;
    barcode.value = sku.barcode;
    cost.value = sku.price.value;
    currency.value = sku.price.currency;

    dimensionScale.value = sku.spec.dimension.scale;
    width.value = sku.spec.dimension.width;
    height.value = sku.spec.dimension.height;
    depth.value = sku.spec.dimension.depth;

    weight.value = sku.spec.weight.value;
    weightScale.value = sku.spec.weight.scale;
  });
};

const update = () => {

  const itemRequest = {
    name: name.value,
    category: category.value,
    description: description.value,
    sku: {
      skuId: skuId.value,
      barcode: barcode.value,
      cost: cost.value,
      currency: currency.value,
      weight: weight.value,
      weightScale: weightScale.value,
      width: width.value,
      height: height.value,
      depth: depth.value,
      dimensionScale: dimensionScale.value
    }
  };

  updateItem(itemRequest, props.id)
      .then(() => router.push({ name: ROUTES.ITEM.LIST.NAME }));
}
/**
 * hooks
 */
onMounted(() => {
  loadItem()
});

onBeforeRouteUpdate((to, from) => {

})
</script>

<style scoped>
</style>
