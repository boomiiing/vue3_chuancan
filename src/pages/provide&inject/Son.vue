<template>
    <div>
      <div class="mainBox">
        <h2>儿子</h2>
        <GrandSon></GrandSon>
      </div>
    </div>
</template>
<script setup lang="ts" name="Son">
import { ref,reactive} from 'vue'
import GrandSon from './GrandSon.vue';
</script>
<style  scoped>
.mainBox {
  padding: 10px;
  background-color: orange;
  border-radius: 20px;
  box-shadow: 5px 5px 5px;
}
</style>
