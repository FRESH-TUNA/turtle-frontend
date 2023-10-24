<template>
  <HCFPageTemplate>
    <template v-slot:header>
      <SellerSystemHeader/>
    </template>

    <template v-slot:main>
      <InventoryListMain :page="page" :size="size" :sort="sort" :query="query"/>
    </template>

    <template v-slot:footer>
      <InventorySystemFooter/>
    </template>

    <template v-slot:other>
      <router-view name="skuInModal"/>
    </template>
  </HCFPageTemplate>
</template>

<script setup>
import HCFPageTemplate from "@/component/page/template/HCFPageTemplate.vue";

import SellerSystemHeader from "@/component/header/InventorySystemHeader.vue";
import InventorySystemFooter from "@/component/footer/InventorySystemFooter.vue";
import InventoryListMain from "@/component/main/SkuListMain.vue";

defineProps(["page", "size", "sort", "query"]);
</script>

<style></style>