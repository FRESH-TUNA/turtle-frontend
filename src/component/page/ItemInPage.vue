<template>
  <HCFPageTemplate>
    <template v-slot:header>
      <SellerSystemHeader/>
    </template>

    <template v-slot:main>
      <ItemInMain :id="id"/>
    </template>

    <template v-slot:footer>
      <InventorySystemFooter/>
    </template>
  </HCFPageTemplate>
</template>

<script setup>
import HCFPageTemplate from "@/component/page/template/HCFPageTemplate.vue";

import SellerSystemHeader from "@/component/header/InventorySystemHeader.vue";
import InventorySystemFooter from "@/component/footer/InventorySystemFooter.vue";
import ItemInMain from "@/component/main/ItemInMain.vue";

defineProps(["id"]);
</script>

<style></style>