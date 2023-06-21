<template class="paginator">
  <div class="text-center">
    <v-pagination
      v-model="props.page"
      :length="props.totalPageCount"
      :total-visible="props.totalVisible"
    ></v-pagination>
  </div>
</template>

<script setup>
const props = defineProps(["page", "totalPageCount", "totalVisible"]);
const emit = defineEmits(["pageChangedEvent"]);

function pageChanged() {
  emit("pageChangedEvent");
}
</script>
