<template>
  <div class="mainBox">
    <h1>子组件2</h1>
    <h2>玩具：{{ toy }}</h2>
    <h3>son1给的数据:{{ toy1  }}</h3>
    <button @click="changeToy">修改玩具</button>
    <button @click="sendToy">给son1发送数据</button>
  </div>
</template>
<script setup lang="ts" name="Son2">
import { ref,onUnmounted } from "vue";
import emitter from "@/utils/emitter";
let toy = ref("游戏机");
let toy1 =ref()
emitter.on('send-toy1',(value)=>{
  toy1.value = value
})
function changeToy() {
  toy.value += "~";
}
function sendToy(){
  emitter.emit('send-toy2',toy)
}
onUnmounted(()=>{
  emitter.off('send-toy1')
})
</script>
<style scoped>
.mainBox {
  padding: 10px;
  background-color: orange;
  border-radius: 20px;
  box-shadow: 5px 5px 5px;
  margin-top: 20px;
}
</style>
