<template>
  <div>
    <div class="mainBox">
      <h2>儿子1</h2>
      <h3>state中的count数据：{{ countStore.count }}</h3>
      <button @click="changeCount">修改count</button>
    </div>
  </div>
</template>
<script setup lang="ts" name="Child1.vue">
import { ref,reactive} from 'vue'
import { useCountStore } from '@/stores/count';
const countStore = useCountStore()
function changeCount(){
  countStore.count+=1
}
</script>
<style  scoped>
.mainBox {
padding: 10px;
background-color: orange;
border-radius: 20px;
box-shadow: 5px 5px 5px;
}
</style>
