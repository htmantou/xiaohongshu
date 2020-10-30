<template>
  <div class="content-top-nav">
    <left></left>
    <right></right>
  </div>
</template>

<script>
import left from "./contop-left";
import right from "./contop-right";
export default {
  components: {
    left: left,
    right: right,
  },
};
</script>

<style scoped lang='scss'>
.content-top-nav {
  height: 500px;
  width: 100%;
  background-color: khaki;
  display: flex;
  justify-content: center;
}
</style>