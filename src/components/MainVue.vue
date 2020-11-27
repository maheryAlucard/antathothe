<template>
  <MyHeader />
</template>

<script>
import MyHeader from "./MyHeader";
export default {
  components: {
    MyHeader,
  },
};
</script>

<style>
.tippy-box[data-theme~="tomato"] {
  background-color: #2cb7c9;
  color: white;
}
.tippy-box[data-theme~="tomato"][data-placement^="top"] > .tippy-arrow::before {
  border-top-color: #2cb7c9;
}
.tippy-box[data-theme~="tomato"][data-placement^="bottom"]
  > .tippy-arrow::before {
  border-bottom-color: #2cb7c9;
}
.tippy-box[data-theme~="tomato"][data-placement^="left"]
  > .tippy-arrow::before {
  border-left-color: #2cb7c9;
}
.tippy-box[data-theme~="tomato"][data-placement^="right"]
  > .tippy-arrow::before {
  border-right-color: #2cb7c9;
}
.tippy-box[data-animation="rotate"][data-state="hidden"] {
  opacity: 0;
  transform: rotate(90deg);
}
</style>