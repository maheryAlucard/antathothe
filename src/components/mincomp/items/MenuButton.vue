<template>
  <div class="menDrop">
    <button v-for="(nitem, i) in gdata" :key="'mbtc' + i" class="btn mnbtn">
      {{ nitem.name }}
    </button>
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
  background-color: #0d82b8;
  width: 200px;
  display: flex;
  flex-direction: column;
}
.mnbtn {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 246, 198);
  overflow: hidden;
  text-overflow: ellipsis;
}
.mnbtn:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>