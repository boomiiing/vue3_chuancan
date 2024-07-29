<template>
  <div style="height:100%; overflow: hidden;">
    <h1>vue3的组件间传参</h1>
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
          <li>
            <router-link to="/vmodel"  active-class="active" >v-model传参</router-link>
          </li>
          <li>
            <router-link to="/attrs"  active-class="active" >$attrs传参</router-link>
          </li>
          <li>
            <router-link to="/refs&parent"  active-class="active" >$refs与$parent传参</router-link>
          </li>
          <li>
            <router-link to="/provideInject"  active-class="active" >ProvideInject传参</router-link>
          </li>
          <li>
            <router-link to="/Pinia"  active-class="active" >Pinia</router-link>
          </li>
          <li>
            <router-link to="/DefaultSlot"  active-class="active" >默认slot</router-link>
          </li>
          <li>
            <router-link to="/NameSlot"  active-class="active" >具名slot</router-link>
          </li>
          <li>
            <router-link to="/ScopeSlot"  active-class="active" >作用域slot</router-link>
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
  flex:1;
}
.active{
  color:#fff !important;
  background-color: #1ca7ed;
}
</style>
