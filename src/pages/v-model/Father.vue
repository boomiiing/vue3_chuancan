<template>
    <div  class="fatherBox">
      <h1>父组件</h1>
      <h3>{{ info }}</h3>
      <!-- <New-Input v-model="info"></New-Input> -->
      <New-Input :modelValue="info" @update:modelValue="info = $event"></New-Input>
      <div class="info">v-model 在vue3中其实就是 :modelValue="info" @update:modelValue="info = $event" 的语法糖，实际上是通过props与自定义事件完成了数据的双向绑定，$event对于原生事件，$event能获取事件对象，因此能.target。而在自定义事件中，$event就是触发事件时，所传递的数据</div>
    </div>
</template>
<script setup lang="ts" name="Vmodel">
import { ref,reactive} from 'vue'
import NewInput from './NewInput.vue';
let info = ref(123)
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
