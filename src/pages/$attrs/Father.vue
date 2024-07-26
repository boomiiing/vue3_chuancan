<template>
    <div class="fatherBox">
      <h1>父组件</h1>
      <span>{{ a }},</span>
      <span>{{ b }},</span>
      <span>{{ c }},</span>
      <span>{{ d }},</span>
      <h4>孙子的数据：{{ pen }}</h4>
      <button @click="changeNum">修改数字</button>
      <Son :a = a :b = "b" :c = "c" :d = "d" :setPen="getPen"></Son>
      <div class="info">$attrs传参用于祖孙组件间的传参</div>
    </div>
</template>
<script setup lang="ts" name="Attrs">
import { ref,reactive} from 'vue'
import Son from './Son.vue'
let a = ref(1)
let b = ref(2)
let c = ref(3)
let d = ref(4)
let pen =ref()
function changeNum(){
  a.value+=1
  b.value+=2
  c.value+=3
  d.value+=4
}
function getPen(value:string){
  pen.value = value
}
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
