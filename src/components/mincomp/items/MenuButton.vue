<template>
  <div class="menDrop">
    <p>this is a text</p>
  </div>
</template>

<script>
export default {
  name: "MenItem",
  props: ["gdata"],
};
</script>

<style scoped>
.menDrop {
  border-radius: 5px;
  background-color: #0ba2b0;
  width: 200px;
}
</style>