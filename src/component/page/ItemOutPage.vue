<template>
  <HCFPageTemplate>
    <template v-slot:header>
      <SellerSystemHeader/>
    </template>

    <template v-slot:main>
      <ItemOutMain :id="id"/>
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
import ItemOutMain from "@/component/main/ItemOutMain.vue";

defineProps(["id"]);
</script>

<style></style>