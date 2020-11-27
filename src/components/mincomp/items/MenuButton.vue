<template>
  <div>
    <button class="btn mbt">{{gdata.btext}}</button>
  </div>
</template>

<script>
export default {
  props:["gdata"],

}
</script>

<style scoped>
.mbt{
  background-color: rgba(0, 0, 0, 0);
  border-style:none;
  border-width:0px;
}
</style>