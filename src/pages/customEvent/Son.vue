<template>
  <div class="mainBox">
    <h1>子组件</h1>
    <h2>玩具：{{ toy }}</h2>
    <button @click="changeToy">修改玩具</button>
  </div>
</template>
<script setup lang="ts" name="Son">
import { ref, onMounted } from "vue";
const emit = defineEmits(["send-toy"]);
let toy = ref("玩具车");
onMounted(() => {
  emit("send-toy", toy.value);
});
function changeToy() {
  toy.value += "~";
  emit("send-toy", toy.value);
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
