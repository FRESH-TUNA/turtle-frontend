<template>
  <HCFPageTemplate>
    <template v-slot:header>
      <SellerSystemHeader/>
    </template>

    <template v-slot:main>
      <ItemShowMain :id="id" />
    </template>

    <template v-slot:footer>
      <InventorySystemFooter/>
    </template>

    <template v-slot:other>
      <router-view name="itemInModal"/>
      <router-view name="itemOutModal"/>
    </template>
  </HCFPageTemplate>
</template>

<script setup>
import HCFPageTemplate from "@/component/page/template/HCFPageTemplate.vue";

import SellerSystemHeader from "@/component/header/InventorySystemHeader.vue";
import InventorySystemFooter from "@/component/footer/InventorySystemFooter.vue";
import ItemShowMain from "@/component/main/ItemShowMain.vue";

defineProps(["id"]);
</script>

<style></style>

