<template>
  <div class="fatherBox">
    <h1>父组件</h1>
    <h3>state中的count数据：{{ countStore.count }}</h3>
    <button @click="changeCount">修改</button>
    <child1></child1>
    <child2></child2>
    <div class="info">pinia用来存放一个公共的数据，且可以在任意组件中修改其值</div>
  </div>
</template>
<script setup lang="ts" name="Pinia">
import { ref,reactive} from 'vue'
import child1 from './child1.vue';
import child2 from './child2.vue';
import { useCountStore } from '@/stores/count';
const countStore = useCountStore()
function changeCount(){
  countStore.add(6)
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
