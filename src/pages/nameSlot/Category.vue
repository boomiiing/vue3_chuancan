<template>
    <div  class="fatherBox">
      <div class="content">
        <Detail title="" >
          <template v-slot:title>
            <div class="title">
              <p>热门游戏列表</p>
            </div>
          </template>
          <template v-slot:main>
            <div class="context">
              <ul>
                <li v-for="(item,index) in obj">{{ item.name }}</li>
              </ul>
            </div>
          </template>
        </Detail>
        <Detail>
          <template v-slot:title>
            <div class="title">
              <p>今日美食城市</p>
            </div>
          </template>
          <template v-slot:main>
            <div class="context">
              <img :src="imgUrl" alt="">
            </div>
          </template>
        </Detail>
        <Detail>
          <template v-slot:title>
            <div class="title">
              <p>今日影视推荐</p>
            </div>
          </template>
          <template v-slot:main>
            <div class="context">
              <video :src="videoUrl" controls></video>
            </div>
          </template>
        </Detail>
      </div>
      <div class="info">pinia用来存放一个公共的数据，且可以在任意组件中修改其值</div>
    </div>
</template>
<script setup lang="ts" name="NameSlot">
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
.title{
    width: 100%;
    height: 50px;
  }
.title p {
    width: 100%;
    height: 40px;
    background: dimgray;
    font-size:large ;
    text-align: center;
    line-height: 40px;
    font-weight: 800;
    color: white;
  }
  .context{
    display: flex;
    justify-content: space-evenly;
  }
</style>
