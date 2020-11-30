<template>
  <div>
    <button class="btn mbt">{{ gdata.btext }} my bt</button>
  </div>
</template>

<script>
export default {
  name: "MenItem",
  props: ["gdata"],
};
</script>

<style scoped>
.mbt {
  background-color: rgba(0, 0, 0, 0);
  border-style: none;
  border-width: 0px;
}
</style>