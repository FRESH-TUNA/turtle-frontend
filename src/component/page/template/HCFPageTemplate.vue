<template class="d-flex flex-column hcf-page-template">
  <header>
    <slot name="header"><h1>This is header</h1></slot>
  </header>

  <main class="mb-auto">
    <slot name="main"><h1>TThis is main</h1></slot>
  </main>

  <footer class="justify-end">
    <slot name="footer"><h1>This is footer</h1></slot>
  </footer>

  <slot name="other"></slot>
</template>

<script>

</script>

<style scoped>
footer {
  min-height:50px;
}
</style>

