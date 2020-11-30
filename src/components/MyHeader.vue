<template>
  <div class="hcontainer">
    <h3 id="mytest">This is my title</h3>
    <div class="menubtcont">
      <MyMenu
        v-for="(item, i) in MyBtnList"
        :key="'mmn' + i"
        :name="item.name"
        :mdata="item.submen"
      />
    </div>
  </div>
</template>

<script>
import MyMenuData from "../data/Menue.js";
import MyMenu from "./mincomp/MyMenu";
export default {
  components: {
    MyMenu,
  },
  data: function () {
    return {
      MyBtnList: [],
    };
  },
  mounted: function () {
    this.MyBtnList = MyMenuData.mainemenu.content;
  },
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
}
</style>