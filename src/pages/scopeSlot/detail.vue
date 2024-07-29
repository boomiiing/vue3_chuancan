<template>
  <div class="box">
    <div class="title">
      <p>游戏列表</p>
    </div>
    <div class="context">
      <slot :obj="obj" a="123" b="321"></slot>
    </div>
  </div>
</template>
<script setup lang="ts" name="Detail">
import { ref,reactive} from 'vue'
let obj = reactive([
  {
    name:'xxxxxxxxxxx'
  },
  {
    name:'xxxxxxxxxxx'
  },
  {
    name:'xxxxxxxxxxx'
  },
  {
    name:'xxxxxxxxxxx'
  },
  {
    name:'xxxxxxxxxxx'
  }
])
</script>
<style  scoped>
  .box{
    width: 300px;
    height:500px;
    background-color: burlywood;
    box-shadow: 5px 5px 10px;
    border-radius: 10px;
  }
  .title{
    width: 100%;
    height: 50px;
  }
  .title p {
    width: 100%;
    height: 40px;
    background: dimgray;
    font-size:large ;
    text-align: center;
    line-height: 40px;
    font-weight: 800;
    color: white;
  }
  .context{
    display: flex;
    justify-content: space-evenly;
  }
</style>
