<template>
  <div class="hcontainer">
    <h3 id="mytest">This is my title</h3>
    <div class="menubtcont">
      <MyMenu />
    </div>
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
  justify-content: space-between;
}
.menubtcont {
  padding: 0px;
  margin: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
}
</style>