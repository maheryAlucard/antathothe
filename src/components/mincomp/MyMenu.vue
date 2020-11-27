<template>
  <button id="mybtn" class="mybt">click me</button>
</template>

<script>
import tippy from "tippy.js";
export default {
  props: ["isactive"],
  data() {
    return {};
  },
  mounted: function () {
    tippy("#mybtn", {
      content: "My tooltip!",
    });
  },
};
</script>

<style scoped>
.mybt {
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border-style: none;
  border-width: 0px;
  margin: 0px;
}
</style>