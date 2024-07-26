<template>
  <div class="mainBox">
    <h1>子组件</h1>
    <h3>父亲传过来的a：{{ a }}</h3>
    <GrandSon v-bind="$attrs"></GrandSon>
  </div>
</template>
<script setup lang="ts" name="Son">
import { ref, defineProps } from "vue";
import GrandSon from "./GrandSon.vue";

defineProps(['a'])
</script>
<style scoped>
.mainBox {
  padding: 10px;
  background-color: burlywood;
  border-radius: 20px;
  box-shadow: 5px 5px 5px;
}
</style>
