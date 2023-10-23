<template>
  <InventoryListPage/>
  <InventoryInModal :id="id" />
</template>

<script setup>
import InventoryInModal from "@/component/modal/InventoryInModal.vue";
import InventoryListPage from "@/component/page/InventoryListPage.vue";

defineProps({
  id: {
    Type: String,
    required: true
  }
})

</script>

<style></style>
