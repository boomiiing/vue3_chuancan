<template>
  <div>
    <div class="mainBox">
      子组件1
      <h3>汽车：{{ car }}</h3>
      <h3>电动车：{{ eleMoto }}</h3>
      <button @click="changeName">修改名称</button>
      <button @click="getParent($parent)">获取并修改父组件值</button>
      <h3>父组件上的值:{{num }}</h3>
    </div>
  </div>
</template>
<script setup lang="ts" name="Son1">
import { ref,reactive} from 'vue'
let car = ref('高尔夫')
let num = ref()
let eleMoto = ref('雅阁')
function changeName(){
  car.value += '~'
}
function getParent(parentInfo:any){
  num.value=parentInfo.num
  parentInfo.num +='~'

}
defineExpose({car,eleMoto})
</script>
<style  scoped>
.mainBox {
  padding: 10px;
  background-color: orange;
  border-radius: 20px;
  box-shadow: 5px 5px 5px;
}
</style>
