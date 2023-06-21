<template class="loading">
  <v-overlay v-model="props.showLoading" class="align-center justify-center">
    <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script setup>
const props = defineProps(["showLoading"]);
</script>
