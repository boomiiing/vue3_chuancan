<template>
  <div class="box">
    <slot name="title"></slot>
    <slot name="main"></slot>
  </div>
</template>
<script setup lang="ts" name="Detail">
import { ref,reactive} from 'vue'
 defineProps(['title'])
</script>
<style  scoped>
  .box{
    width: 300px;
    height:500px;
    background-color: burlywood;
    box-shadow: 5px 5px 10px;
    border-radius: 10px;
  }


</style>
