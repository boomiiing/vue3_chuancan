<template>
  <div class="fatherBox">
    <h1>父组件</h1>
    <h2>余额:{{ money }}</h2>
    <son1></son1>
    <Son2></Son2>
    <div class="info">mitt传参时，可以用作任意两个组件间传参，需要注意的是，那个组件收数据，那个组件绑定方法；那个组件发数据，那个组件触发时间。同时需要在接受数据的组件内解绑方法</div>
  </div>
</template>
<script setup lang="ts" name="Mitt">
import { ref } from "vue";
import son1 from "./Son1.vue";
import Son2 from './Son2.vue'
let money = ref(999999999)
</script>
<style scoped>
.fatherBox {
  background-color: skyblue;
  border-radius: 20px;
  box-shadow: 0px 0px 10px;
  padding:10px
}
.info{
  border-radius: 20px;
  background-color: lightseagreen;
  padding: 10px;
  margin-top: 30px;
  box-shadow: 5px 5px 5px;
}
</style>
