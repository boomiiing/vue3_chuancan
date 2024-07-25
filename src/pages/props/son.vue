<template>
  <div class="mainBox">
    <h1>子组件</h1>
    <h2>玩具：{{ toy }}</h2>
    <button @click="changeToy">修改玩具</button>
    <h3>父亲传过来的：{{ money }}</h3>
  </div>
</template>
<script setup lang="ts" name="Son">
import { ref, defineProps } from "vue";
let props = defineProps(["money", "sentToy"]);
let toy = ref("玩具车");
props.sentToy(toy.value);
function changeToy() {
  toy.value += "~";
  props.sentToy(toy.value);
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
