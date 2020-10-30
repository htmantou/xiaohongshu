<template>
  <div class="nav">
    <div class="video">
      <video :src="videosrc" controls="controls"></video>
    </div>
    <h1>{{ titel }}</h1>
    <div class="content" v-html="content"></div>
    <div class="interaction">
      <span class="icon iconfont iconexit" style="color: gray">&#xe613;</span>
      <span>{{ likes }}</span>
      <span class="icon iconfont iconexit" style="color: gray">&#xe607;</span>
      <span>{{ replays }}</span>
      <span class="icon iconfont iconexit" style="color: gray">&#xe73d;</span>
      <span>{{ collects }}</span>
    </div>
    <div class="releasetime">
      <span>发布于 {{retime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videosrc:
        "http://192.168.12.106:88/public/mp4/14d73dd7-b201-42b9-8ea8-785eff98a285.mp4",
      titel: "玩乐vlog | 迪士尼万圣节美食all in啦！",
      content:
        "<p>分享一个我最近超爱的口袋打印机给大家</p><p>可以打印文档，还可以打印图案，撕开背胶就可以贴</p><p>自己DIY，就可以拥有超多胶带跟贴纸了</p><p>还是懒得写字懒得画画的手账儿福音哦~</p>",
      likes: 100,
      replays: 200,
      collects: 300,
      retime:'2020-10-30 11:19'
    };
  },
};
</script>

<style scoped lang='scss'>
.releasetime{
  color: #999;
  font-size: 16px;
}
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
    text-align: left;
    margin: 10px 0;
  }
  .content {
    width: 500px;
    p {
      margin: 20px 0;
    }
  }
  .interaction {
    margin: 30px 0;
    :nth-child(odd){
      font-size: 20px !important;
      margin-right: 5px;
    }
    :nth-child(even){
      margin-right: 15px;
    }
    font-size: 20px;
    span {
      color: gray;
    }
  }
}
</style>