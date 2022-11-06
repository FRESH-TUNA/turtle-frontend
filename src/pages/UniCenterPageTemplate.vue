<template>
  <div class="uni-center-page-template">
    <slot name="main"></slot>
  </div>
</template>

<script scoped>
export default {
  name: "UniCenterPageTemplate",
  components: {},
  data: () => ({}),
  methods: {},
};
</script>
<style scoped>
.uni-center-page-template {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
