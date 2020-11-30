<template>
  <div class="contmen">
    <button
      id="mybtn"
      class="mybt"
      @mouseenter="showMenue()"
      @mouseleave="hideMenue()"
    >
      {{ name }}
    </button>
    <transition
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOut"
    >
      <MenBt
        @mouseenter="showMenue()"
        @mouseleave="hideMenue()"
        v-if="showMenu"
        class="menubt"
      />
    </transition>
  </div>
</template>

<script>
//import tippy from "tippy.js";
import MenBt from "./items/MenuButton";

export default {
  props: ["isactive", "mdata", "name"],
  data() {
    return {
      showMenu: false,
      btcontent: {
        btext: "this is my bt",
      },
    };
  },
  methods: {
    showMenue: function () {
      this.showMenu = true;
    },
    hideMenue: function () {
      this.showMenu = false;
    },
  },
  components: {
    MenBt,
  },
  mounted: function () {
    // const myitem =
    //   '<div v-for="item in mdata"><button class="btn mbt">' +
    //   this.btcontent.btext +
    //   "my bt</button></div>";
    // tippy("#mybtn", {
    //   content: myitem,
    //   allowHTML: true,
    //   theme: "tomato",
    //   interactive: true,
    //   inertia: true,
    //   animation: "rotate",
    //   flipBehavior: ["bottom", "left"],
    //   onMount(instance) {
    //     const box = instance.popper.firstElementChild;
    //     requestAnimationFrame(() => {
    //       box.classList.add("animate__animated");
    //       box.classList.add("animate__bounceIn");
    //     });
    //   },
    //   onHide(instance) {
    //     const box = instance.popper.firstElementChild;
    //     requestAnimationFrame(() => {
    //       box.classList.remove("animate__animated");
    //       box.classList.remove("animate__bounceOut");
    //     });
    //   },
    // });
  },
};
</script>

<style scoped>
.mybt {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border-style: none;
  border-width: 0px;
  margin: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.mybt:hover {
  background-color: rgba(0, 0, 0, 0.35);
}
.mbt {
  background-color: rgba(0, 0, 0, 0);
  border-style: none;
  border-width: 0px;
}
.menubt {
  position: absolute;
  margin-top: 40px;
}
.contmen {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>