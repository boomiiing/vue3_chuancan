<template>
<div>
  <div class="mainBox">
    子组件2
    <h3>电脑：{{ computer }}</h3>
    <h3>摩托车：{{ moto }}</h3>
  </div>
</div>
</template>
<script setup lang="ts" name="Son2">
import { ref,reactive} from 'vue'
let computer = ref('苹果mac')
let moto = ref('铃木gsx250')
defineExpose({computer,moto})
</script>
<style  scoped>
.mainBox {
  padding: 10px;
  background-color: rosybrown;
  border-radius: 20px;
  box-shadow: 5px 5px 5px;
  margin-top: 20px;
}
</style>
