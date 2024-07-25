<template>
  <div style="height:100%; overflow: hidden;">
    <h1>vue的组件间传参</h1>
    <div class="mainBox">
      <div class="nav">
        <ul>
          <li>
            <router-link to="/props" active-class="active" >props传参</router-link>
          </li>
          <li>
            <router-link to="/customEvent"  active-class="active" >自定义事件传参</router-link>
          </li>
          <li>
            <router-link to="/mitt"  active-class="active" >mitt传参</router-link>
          </li>
        </ul>
      </div>
      <div class="viewBox">
        <router-view></router-view>
      </div>
    </div>  
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
h1{
  background-color: #69be4c;
  border: 2px solid #000;
  border-radius: 20px;
  text-align: center;
  height: 100px;
  line-height: 100px;
}
.mainBox{
  height: calc(100% - 180px);
  background-color: #b6be9b;
  border-radius: 20px;
  padding: 10px;
  display: flex;
}
.nav{
  width: 30%;
  min-width: 200px;
  border:1px solid #000;
  border-radius: 20px;
  overflow: hidden;
}
.nav ul{
  margin: 0;
  padding: 0;
  border-radius: 20px;
}
.nav li {
  list-style: none;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-bottom: 1px solid #000;

}
.nav li a{
  color:#000;
  text-decoration: none;
  display: block;
}
.viewBox{
  margin-left: 10px;
  border: 1px solid #000;
  border-radius: 20px;
  padding:10px;
  flex:1
}
.active{
  color:#fff !important;
  background-color: #1ca7ed;
}
</style>
