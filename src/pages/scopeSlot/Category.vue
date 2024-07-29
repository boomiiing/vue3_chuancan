<template>
    <div  class="fatherBox">
      <div class="content">
        <Detail title="热门游戏列表" >
          <template v-slot="params">
            <ul>
            <li v-for="(item,index) in params.obj">{{ item.name }}</li>
          </ul>
          </template>
        </Detail>
      </div>
      <div class="info">数据在子组件中，但根据数据生成的结构，却由父亲决定</div>
    </div>
</template>
<script setup lang="ts" name="ScopeSlot">
import { ref,reactive} from 'vue'
import Detail from './detail.vue'

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
.content{
  display: flex;
  justify-content: space-evenly;
}
img,video{
  width: 90%;
}
</style>
