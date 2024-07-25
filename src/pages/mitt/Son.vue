<template>
  <div class="mainBox">
    <h1>子组件</h1>
    <h2>玩具：{{ toy }}</h2>
    <button @click="changeToy">修改玩具</button>
  </div>
</template>
<script setup lang="ts" name="Son">
import { ref } from "vue";
let toy = ref("玩具车");
function changeToy() {
  toy.value += "~";
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
