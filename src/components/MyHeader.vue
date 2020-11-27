<template>
  <div class="hcontainer">
    <h3 id="mytest">This is my title</h3>
    <MyMenu />
  </div>
</template>

<script>
import MyMenu from "./mincomp/MyMenu";
export default {
  components: {
    MyMenu,
  },
  mounted: function () {},
};
</script>

<style scoped>
.hcontainer {
  width: 100%;
  background-color: #2cb7c9;
  color: white;
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>