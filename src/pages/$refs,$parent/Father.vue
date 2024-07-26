<template>
  <div class="fatherBox">
    <h1>父组件</h1>
    <h3>{{ num }}</h3>
    <button @click="changeNum">修改数字</button>
    <button @click="getInfo($refs)">获取并修改子的数据</button>
    <h4>子1的数据：{{ sonInfo1 }}</h4>
    <h4>子2的数据：{{ sonInfo2 }}</h4>
    <Son1 ref="sonInfo1"></Son1>
    <Son2 ref="sonInfo2"></Son2>
    <div class="info">$refs$parent传参时，$refs用于获取子组件的值，并可以修改子组件上的值；$parent用于获取父组上的值并修改父组件上的值</div>
  </div>
</template>
<script setup lang="ts" name="$refs$parent">
import { ref,reactive} from 'vue'
import Son1 from './Son1.vue'
import Son2 from './Son2.vue'
let num = ref(1)
let sonInfo1 = ref()
let sonInfo2 = ref()
function changeNum(){
  num.value+=1
}
function getInfo(allChildren:{[key:string]:any}){
  for(let key in allChildren){
    for(let item in allChildren[key]){
    allChildren[key][item] +='~'
    }
  }
}
defineExpose({num})
</script>
<style  scoped>
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
