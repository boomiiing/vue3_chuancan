<template>
  <div class="fatherBox">
    <h1>父组件</h1>
    <h2>余额:{{ money }}</h2>
    <button @click="changeMoney">修改余额</button>
    <h3>儿子给的数据:{{ toy  }}</h3>
    <son ></son>
    <div class="info"></div>
  </div>
</template>
<script setup lang="ts" name="Mitt">
import { ref } from "vue";
import son from "./Son.vue";
let money = ref(999999999)
let toy = ref()
function changeMoney(){
  money.value+=1
}
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
