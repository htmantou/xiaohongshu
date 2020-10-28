<template>
  <div>
    <h1>我的测试文件</h1>
    <div v-for="(item,index) in textArr" :key="index">
        <div>{{item.name}}</div>
        <div>{{item.age}}</div>
        <br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textArr: [
        {
          name: 'cc',
          age: 18,
        },
        {
          name: 'bb',
          age: 17,
        },
        {
          name: 'dd',
          age: 16,
        },
        {
          name: 'aa',
          age: 15,
        },
      ],
    };
  },
};
</script>

<style>
</style>