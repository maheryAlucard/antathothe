<template>
  <button id="mybtn" class="mybt">click me</button>
</template>

<script>
import tippy from "tippy.js";
import mitem from "./items/MenuButton";

export default {
  props: ["isactive"],
  data() {
    return {};
  },
  mounted: function () {
    tippy("#mybtn", {
      content: mitem,
      allowHTML: true,
      theme: "tomato",
      inertia: true,
      animation: "rotate",
      onMount(instance) {
        const box = instance.popper.firstElementChild;
        requestAnimationFrame(() => {
          box.classList.add("animate__animated");
          box.classList.add("animate__bounceIn");
        });
      },
      onHide(instance) {
        const box = instance.popper.firstElementChild;
        requestAnimationFrame(() => {
          box.classList.remove("animate__animated");
          box.classList.remove("animate__bounceOut");
        });
      },
    });
  },
};
</script>

<style scoped>
.mybt {
  padding: 10px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border-style: none;
  border-width: 0px;
  margin: 0px;
}
.mybt:hover {
  background-color: rgba(0, 0, 0, 0.35);
}
</style>