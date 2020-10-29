<template>
<div >
  <div class="mynode">
    <vue-waterfall-easy :gap="30" :maxCols="3" :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData"
      ><div slot-scope="props" class="myscop">
            <p v-html="props.value.info" style="width:200px;overflow:hidden;"></p>
            <span class="icon iconfont iconexit" style="position:absolute;right: 20px;">&#xe621;</span>
        </div>
        </vue-waterfall-easy
    >
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  components: {
    vueWaterfallEasy,
  },
  data() {
    return {
      imgsArr: [], //存放所有已加载图片的数组（即当前页面会加载的所有图片）
      fetchImgsArr: [], //存放每次滚动时下一批要加载的图片的数组
      title:["wo"]
  };
  },
  methods: {
    initImgsArr(n, m) {
      //初始化图片数组的方法，把要加载的图片装入
      var arr = [];
      for (var i = n; i < m; i++) {
        arr.push({
          src: `https://ci.xiaohongshu.com/spectrum/967e9dd563332ba7dc555038dc936a3535371759?imageView2/2/w/540/format/jpg`,
          link: "",
          info: `</div class="ant-card-body" style="width:80%">${this.title[i]}111111111111111111111111</div>`
        }); //src为加载的图片的地址、link为超链接的链接地址、 //info为自定义的图片展示信息，请根据自己的情况自行填写
      }
      return arr;
    },

    fetchImgsData() {
      //获取新的图片数据的方法，用于页面滚动满足条件时调用
      this.imgsArr = this.imgsArr.concat(this.fetchImgsArr); //数组拼接，把下一批要加载的图片放入所有图片的数组中
    },
    getData(){
      axios.get("/getallnode")
        .then(function(response){
          let data = response.data;
          this.imgsArr = [];
          for(let i= 0;i<data.length;i++){
            this.imgsArr.push({
          src: data.imgs,
          link: "",
          info: "一些图片描述文字"
        })
          }
        })
        .catch(error=>{
          console.log(error);
        })
    }

  },
  created() {
    this.imgsArr = this.initImgsArr(0, 9); //初始化第一次（即页面加载完毕时）要加载的图片数据
    this.fetchImgsArr = this.initImgsArr(9, 18); // 模拟每次请求的下一批新的图片的数据数据
  }
};
</script>

<style>

.mynode {
  background-color: white;
  width: 890px;
  height: 500px;
  margin: 40px auto;
  padding: 16px;
}
.bottom-line{
  height: 2px;
  width: 20px;
  border: 1px solid grey;
}
.vue-waterfall-easy-container .vue-waterfall-easy-scroll::-webkit-scrollbar{
  display: none;
}
.myscop{
  padding: 10px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
</style>