<template>
  <div class="mainBox">
    <h1>子组件1</h1>
    <h2>玩具：{{ toy }}</h2>
    <h3>son2给的数据:{{ toy1  }}</h3>
    <button @click="changeToy">修改玩具</button>
    <button @click="sendToy">给son2发送数据</button>
  </div>
</template>
<script setup lang="ts" name="Son1">
import { ref,onUnmounted } from "vue";
import emitter from "@/utils/emitter";
let toy = ref("玩具车");
let toy1 = ref()
function changeToy() {
  toy.value += "~";
}
function sendToy(){
  emitter.emit('send-toy1',toy)
}
emitter.on('send-toy2',(value)=>{
  toy1.value = value
})
onUnmounted(()=>{
  emitter.off('send-toy2')
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
