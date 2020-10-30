<template>
  <div>
    <content-top></content-top>
    <content-botoom></content-botoom>
  </div>
</template>

<script>
import contenttop from '../components/content-top'
import contentbottom from '../components/content-bottom'
export default {
    components:{
        'content-top':contenttop,
        'content-botoom':contentbottom,
    }
};
</script>

<style>
</style>