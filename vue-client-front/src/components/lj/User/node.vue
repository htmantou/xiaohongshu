<template>
<div >
  <div class="mynode">
   
    <vue-waterfall-easy :gap="30" :maxCols="3" :imgsArr="imgsArr"
      ><div slot-scope="props" class="myscop">
            <p v-html="props.value.info" style="width:200px;overflow:hidden;"></p>
            <span class="icon iconfont iconexit"  style="position:absolute;right: 20px;" @click="changedel">&#xe621;</span>
        </div>
        </vue-waterfall-easy
    >
    </div>
  </div>
</template>

<script>
// @scrollLoadImg="fetchImgsData"
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  components: {
    vueWaterfallEasy,
  },
  data() {
    return {
      imgsArr: [ ], //存放所有已加载图片的数组（即当前页面会加载的所有图片）
      
  };
  },
  methods: {
    changedel(el){
      let a = el.target.previousElementSibling.firstElementChild.innerHTML
      console.dir(a);
      // console.log(el.target);
      this.$axios.post('/delnode',{
        id:a
      }).then(res=>{
        console.log(res);
        
        if(res.data.code==1){
          this.imgsArr.forEach((item,index)=>{
            if(item.id==a){
              this.imgsArr.splice(index,1)
            }
          })
        }
      })
      .catch(error=>{
        console.log(error);
      })
    }
  },
  created() {
    //请求用户笔记
    this.$axios.get('/getallnode',{
      params:{
        u_id:this.$store.state.u_id
      }
    })
    .then(res=>{
      console.log(res.data);
      let data = res.data
      data.forEach(element => {
        this.imgsArr.push({
          id:element.n_id,
          src: element.imgs,
           link: "",
          info: `</div class="ant-card-body" :value="${element.nodetitle}" style="width:80%">${element.nodetitle}<div style="display:none">${element.n_id}</div></div>`
        })
        console.log(this.imgsArr);
      });
    })

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
.default-card-animation{
  cursor: pointer;
}
</style>