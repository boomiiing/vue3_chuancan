<template>
    <div  class="fatherBox">
      <div class="content">
        <Detail title="热门游戏列表" >
          <ul>
            <li v-for="(item,index) in obj">{{ item.name }}</li>
          </ul>
        </Detail>
        <Detail title="今日美食城市" >
            <img :src="imgUrl" alt="">
        </Detail>
        <Detail title="今日影视推荐" >
            <video :src="videoUrl" controls></video>
        </Detail>
      </div>
    </div>
</template>
<script setup lang="ts" name="DefaultSlot">
import { ref,reactive} from 'vue'
import Detail from './detail.vue'
let imgUrl = 'https://z1.ax1x.com/2023/11/19/piNxLo4.jpg'
let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')
let obj = reactive([
  {
    name:'xxxxxxxxxxx'
  },
  {
    name:'xxxxxxxxxxx'
  },
  {
    name:'xxxxxxxxxxx'
  },
  {
    name:'xxxxxxxxxxx'
  },
  {
    name:'xxxxxxxxxxx'
  }
])
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
