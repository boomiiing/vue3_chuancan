<template>
  <div>
    <div class="mainBox">
      <h2>儿子2</h2>
      <h3>state中的count数据：{{ countStore.count }}</h3>
      <button @click="changeCount">修改</button>
    </div>
  </div>
</template>
<script setup lang="ts"  name="Child2.vue">
import { ref,reactive} from 'vue'
import { useCountStore } from '@/stores/count';
const countStore = useCountStore()
function changeCount(){
  countStore.$patch({
  count:countStore.count+1
})
}
</script>
<style  scoped>
.mainBox {
  margin-top: 20px;
  padding: 10px;
  background-color: darkseagreen;
  border-radius: 20px;
  box-shadow: 5px 5px 5px;
}
</style>
