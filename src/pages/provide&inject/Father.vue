<template>
    <div class="fatherBox">
      <h1>父组件</h1>
      <h3>资产：{{ money }}万元</h3>
      <h3>还有{{ another.house }}套房子，与{{ another.car }}辆车子</h3>
      <Son></Son>
      <div class="info">provideInject传参多用于祖孙组件的传参，provideInject传参不会影响到子组件，通过 inject 接收到的数据默认是响应式的，这意味着如果在后代组件中直接修改了通过 inject 接收的数据，那么这个修改会反映到原始的祖先组件上，因为它们引用的是同一个对象或值。然而，这种做法并不推荐，因为它违反了 Vue 的单向数据流原则，可能会导致组件状态的混乱和难以调试的问题。因此推荐创建一个新的响应式属性来存储处理后的数据，或者使用计算属性、方法等来间接操作这些数据，而不是直接修改通过 inject 接收到的值。</div>
    </div>
</template>
<script setup lang="ts" name="ProvideInject">
import { ref,reactive,provide} from 'vue'
import Son from './Son.vue';
let money = ref(99999)
let another = reactive({
  house:99,
  car:88
})
function huaqian(value:number){
  money.value-=value
}
provide('moneyContext',{money,huaqian})
provide('another',another)
</script>
<style  scoped>
.fatherBox {
  background-color: skyblue;
  border-radius: 20px;
  box-shadow: 0px 0px 10px;
  padding:10px
}
.info{
  border-radius: 20px;
  background-color: lightseagreen;
  padding: 10px;
  margin-top: 30px;
  box-shadow: 5px 5px 5px;
}
</style>
