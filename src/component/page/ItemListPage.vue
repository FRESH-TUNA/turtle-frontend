<template>
  <HCFPageTemplate>
    <template v-slot:header>
      <SellerSystemHeader/>
    </template>

    <template v-slot:main>
      <ItemListMain :page="page" :size="size" :sort="sort" :query="query"/>
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
import ItemListMain from "@/component/main/ItemListMain.vue";

defineProps(["page", "size", "sort", "query"]);
</script>

<style></style>
