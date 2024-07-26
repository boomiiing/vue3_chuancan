<template>
  <div>
  <div class="mainBox">
    <h1>孙组件</h1>
    <button @click="changePen">修改数据</button>
    <h2>自身的数据：{{ pen }}</h2>
    <h3>爷组件传过来的b：{{ b }}</h3>
    <h3>爷组件传过来的c：{{ c }}</h3>
    <h3>爷组件传过来的d：{{ d }}</h3>
  </div>
</div>
</template>
<script setup lang="ts" name="GrandSon">
import { ref, defineProps } from "vue";
let a = defineProps(['b','c','d','setPen'])
 let pen = ref('asd')
function changePen(){
  pen.value += '~'
  a.setPen(pen.value)
}
</script>
<style scoped>
.mainBox {
  padding: 10px;
  background-color: orange;
  border-radius: 20px;
  box-shadow: 5px 5px 5px;
}
</style>
