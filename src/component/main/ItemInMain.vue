<template>
  <v-main>
  <v-container>
    <v-row>
      <v-col cols="10">
        <h2>재고 입고</h2>

        <h3 class="mt-5">아이템 정보</h3>
        <v-table fixed-header class="w-100 mt-5">
          <thead>
          <tr>
            <th class="text-left">아이디</th>
            <th class="text-left">바코드</th>
            <th class="text-left">이름</th>
            <th class="text-left">재고</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{ sku.id }}</td>
            <td>{{ sku.barcode }}</td>
            <td>{{ sku.name }}</td>
            <td>{{ sku.count }}</td>
          </tr>
          </tbody>
        </v-table>

        <h3 class="mt-5">수량 입력</h3>
        <v-text-field v-model="count" variant="outlined" required></v-text-field>

        <h3 class="mt-5">사유 선택</h3>
        <v-select
            variant="outlined"
            v-model="reason"
            :items="reasons"
            :rules="[(v) => !!v || '입고 사유를 선택해주세요']"
            required
        ></v-select>

        <v-row>
          <v-col>
            <v-btn color="red-lighten-1" class="mt-4" block variant="flat" @click="close"> 취소 </v-btn>
          </v-col>
          <v-col>
            <v-btn color="success" class="mt-4" block variant="flat" @click="skuInService"> 입고 </v-btn>
          </v-col>
        </v-row>


        <!--      <v-alert-->
        <!--          closable-->
        <!--          type="error"-->
        <!--          title="재고 입고 실패"-->
        <!--          text="실패 사유"-->
        <!--          class="mt-5"-->
        <!--          v-if="isFailure"-->
        <!--      ></v-alert>-->
      </v-col>
    </v-row>
  </v-container>
    </v-main>
</template>

<script setup>
import {ref, onMounted, watch} from "vue";
import router from "@/router";

import { showSku, skuInReasons } from "@/port/sku";
import { itemIn } from "@/port/item";

const props = defineProps(["id"]);

const isOpen = ref(true);

const sku = ref({});
const count = ref(0);
const reason = ref("");
const reasons = ref([]);

const showLoading = ref(false);
const isFailure = ref(false);

/**
 * functions
 */
const skuInService = () => {
  showLoading.value = true;
  isFailure.value = false;

  itemIn(props.id, reason.value, count.value, "")
    .then(() => {
      showLoading.value = false;
      close();
    }).catch(() => {
      showLoading.value = false;
      isFailure.value = true;
    });
};

const close = () => { isOpen.value = false; }

/**
 * hooks
 */
onMounted(() => {
  skuInReasons().then((res) => {
    reasons.value = res;
    reason.value = reasons.value[0];
  });

  showSku(props.id).then((res) => { sku.value = res; });
});

watch(isOpen, async (next, prev) => {
  if(prev === true && next === false)
    router.back();
});
</script>
