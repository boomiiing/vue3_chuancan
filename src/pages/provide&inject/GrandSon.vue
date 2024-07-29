<template>
  <div>
    <div class="mainBox">
      <h2>孙子</h2>
      <h3>爷的资产：{{ money }}</h3>
      <button @click="huaqian(6)">花钱</button>
      <h3>还有{{ another.house }}套房子，与{{ another.car }}辆车子</h3>
    </div>
  </div>
</template>
<script setup lang="ts"  name="GrandSon">
import { ref,reactive,inject} from 'vue'
let {money,huaqian} = inject('moneyContext',{money:0,huaqian:(value:number)=>{}})
let another = inject('another',{house:0,car:0})

</script>
<style  scoped>
.mainBox {
  padding: 10px;
  background-color: darkseagreen;
  border-radius: 20px;
  box-shadow: 5px 5px 5px;
}
</style>
