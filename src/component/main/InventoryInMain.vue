<template class="inventory-in-main">
  <v-main>
    <v-container class="bg-surface-variant">
      <v-row justify="start" class="flex-column">
        <v-col>
          <h2>재고 입고</h2>

          <v-alert
            closable
            type="error"
            title="재고 입고 실패"
            text="실패 사유"
            class="mt-5"
            v-if="isFailure"
          ></v-alert>

          <v-form ref="form" class="mt-5">
            <h3>입고 갯수</h3>
            <v-text-field v-model="count" required></v-text-field>

            <h3>입고 사유</h3>
            <v-select
              v-model="reason"
              :items="reasons"
              :rules="[(v) => !!v || '입고 사유를 선택해주세요']"
              label="입고 사유를 선택해주세요"
              required
            ></v-select>
            <v-btn color="success" class="mt-4" block @click="showInventoryInDiaLog = true"> 입고 </v-btn>
          </v-form>

          <v-dialog v-model="showInventoryInDiaLog" width="auto">
            <v-card>
              <v-card-text>
                SKU 이름: 이름
                <br />
                입고사유: {{ reason }}
                <br />
                입고개수: {{ count }} <br /><br />
                재고 입고를 진행하시겠습니까?
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red-1" variant="text" @click="showInventoryInDiaLog = false">취소</v-btn>
                <v-btn color="green-darken-1" variant="text" @click="inventoryInService">입고</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <Loading :showLoading="showLoading" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import Loading from "@/component/etc/Loading.vue";

import { ref, toRefs, onMounted } from "vue";
import CONFIG from "@/config";
import router from "@/router";
import { ApiRequester } from "@/util";

const props = defineProps(["id"]);
const skuId = props.id;
const sku = ref({});

const count = ref(0);
const reason = ref("");
const reasons = ref([]);

const showInventoryInDiaLog = ref(false);
const showLoading = ref(false);
const isFailure = ref(false);

/**
 * functions
 */
const inventoryInRequest = () =>
  ApiRequester.post(CONFIG.INVENTORY_API_ROOT + "/inventory/sku/" + skuId + "/in", {
    reason: reason.value,
    condition: "NEW",
    count: count.value,
    description: "",
  });

const inventoryInService = () => {
  showInventoryInDiaLog.value = false;
  showLoading.value = true;
  isFailure.value = false;

  inventoryInRequest()
    .then(() => {
      showLoading.value = false;
      router.push("/inventory");
    })
    .catch(() => {
      showLoading.value = false;
      isFailure.value = true;
    });
};

onMounted(() => {
  ApiRequester.get(CONFIG.INVENTORY_API_ROOT + "/inventory/in/reasons").then((res) => {
    reasons.value = res.data.data;
  });

  ApiRequester.get(CONFIG.INVENTORY_API_ROOT + "/inventory/sku/" + skuId).then((res) => {
    sku.value = res.data.data;
  });
});
</script>

<style scoped></style>
