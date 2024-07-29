<template>
  <div class="fatherBox">
    <h1>父组件</h1>
    <h2>余额:{{ money }}</h2>
    <button @click="changeMoney">修改余额</button>
    <h3>儿子给的数据:{{ toy }}</h3>
    <son :money="money" :sentToy="getToy"></son>
    <div class="info">props传参,父组件给子组件传参时，父组件的数据发生变化，子组件接收到的数据也会立即发生变化；但是子组件给父组件传参时，子组件所传参数发生变化后，必须再次调用函数才会引起父组件接收到的参数发生变化。</div>
  </div>
</template>
<script setup lang="ts" name="Props">
import { ref } from "vue";
import son from "./son.vue";
let money = ref(999999999)
let toy = ref()
function getToy(value:string){
  toy.value = value
}
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
