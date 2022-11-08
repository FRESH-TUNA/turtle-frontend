<template>
  <div class="turtle-title">
    <p>Turtle++</p>
    <img src="./sea-turtle.png" />
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
  display: inline-flex;
  align-items: end;
  justify-content: center;
}

.turtle-title img {
  width: 40px;
}

.turtle-title > * {
  font-size: 25px;
}

.turtle-title p {
  font-family: "League Spartan", sans-serif;
}
</style>
