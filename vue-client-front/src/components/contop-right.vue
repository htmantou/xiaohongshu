<template>
  <div class="nav">
    <nodeauthor></nodeauthor>
    <relevanttag></relevanttag>
    <correnode></correnode>
  </div>
</template>

<script>
import nodeauthor from'./nodeauthor'
import relevanttag from './relevanttag'
import correnode from './correnode'
export default {
components:{
  nodeauthor:nodeauthor,
  relevanttag:relevanttag,
  correnode:correnode
}
}
</script>

<style scoped>
.nav{
    width: 320px;
    height: 500px;
    /* background-color: lightcyan; */
    margin-left: 20px;
}
</style>