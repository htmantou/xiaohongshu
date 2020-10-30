<template>
  <div class="relevanttagnav">
    <h3>相关标签</h3>
    <div>
      <span
        v-for="item in taglist"
        :key="item.t_id"
        @click="gett_id(item.t_id)"
        >{{ item.tagname }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taglist: [
        {
          tagname: "游戏42141",
          t_id: 12,
        },
        {
          tagname: "游戏312",
          t_id: 1,
        },
        {
          tagname: "游戏",
          t_id: 14,
        },
        {
          tagname: "游戏21414",
          t_id: 14241,
        },
        {
          tagname: "游戏42141",
          t_id: 1414,
        },
        {
          tagname: "游戏3414",
          t_id: 1416,
        },
        {
          tagname: "游戏124",
          t_id: 141,
        },
        {
          tagname: "游戏41241",
          t_id: 4124,
        },
        {
          tagname: "游戏11",
          t_id: 1412,
        },
        {
          tagname: "游戏42",
          t_id: 112,
        },
      ],
    };
  },
  methods: {
    gett_id(id) {
      console.log(id);
    },
  },
};
</script>

<style scoped lang='scss'>
.relevanttagnav {
  border-radius: 4px;
  width: 320px;
//   height: 176px;
  /* background-color: greenyellow; */
  border: 1px solid #eee;
    margin-bottom: 10px;
  box-sizing: border-box;
  h3 {
    font-weight: 500;
    font-size: 16px;
    padding: 10px 0 10px 20px;
    margin: 0;
    border-bottom: 1px solid #eee;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    // align-content: center;
    span {
      background: rgba(91, 146, 225, 0.2);
      border-radius: 24px;
      cursor: pointer;
      color: #333;
      padding: 6px 12px;
      margin: 10px;
    }
  }
}
</style>