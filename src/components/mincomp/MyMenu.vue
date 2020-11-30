<template>
  <button id="mybtn" class="mybt">click me</button>
</template>

<script>
import tippy from "tippy.js";
//import MenBt from "./items/MenuButton";

export default {
  props: ["isactive"],
  data() {
    return {
      btcontent: {
        btext: "this is my bt",
      },
    };
  },
  components: {},
  mounted: function () {
    const myitem =
      `<button class="btn mbt">` + this.btcontent.btext + `my bt</button>`;

    tippy("#mybtn", {
      content: myitem,
      allowHTML: true,
      theme: "tomato",
      interactive: true,
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
.mbt {
  background-color: rgba(0, 0, 0, 0);
  border-style: none;
  border-width: 0px;
}
</style>