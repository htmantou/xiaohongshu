<template>
  <div class="nav">
    <div class="video">
      <video :src="videosrc" controls="controls"></video>
    </div>
    <h1>{{ titel }}</h1>
    <div class="content" v-html="content">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videosrc:
        "http://192.168.5.151:88/public/mp4/4c4ae202-6d65-4690-9a95-cbfd6b223e34.mp4",
      titel: "玩乐vlog | 迪士尼万圣节美食all in啦！",
      content:'<p>分享一个我最近超爱的口袋打印机给大家</p><p>可以打印文档，还可以打印图案，撕开背胶就可以贴</p><p>自己DIY，就可以拥有超多胶带跟贴纸了</p><p>还是懒得写字懒得画画的手账儿福音哦~</p>'
    };
  },
};
</script>

<style scoped lang='scss'>
.nav {
  width: 500px;
  margin-right: 20px;
  .video {
    width: 500px;
    height: 500px;
    video {
      width: 500px;
      height: 500px;
      object-fit: contain;
    }
  }
  h1 {
    font-size: 24px;
    font-weight: 500;
    overflow: hidden;
    text-align:left;
    margin: 10px 0;
  }
  .content{
      width: 500px;
      p{
        margin: 20px 0;
      }
  }
}
</style>