<template>
  <div class="turtle-title">
    <font-awesome-icon icon="fa-solid fa-bookmark" />
    <p>Turtle++</p>
  </div>
</template>

<script>
export default {
  name: "TurtleTitle",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap");

.turtle-title {
  display: flex;
  align-items: center;
  gap: 0px 5px;
}

.turtle-title > * {
  font-size: 25px;
}

.turtle-title p {
  font-family: "League Spartan", sans-serif;
}
</style>
