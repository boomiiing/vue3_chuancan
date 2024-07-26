<template>
    <div>
      子组件：
      <input type="text" :value="modelValue" @input="emit('update:modelValue',(<HTMLInputElement>$event.target).value)" class="inputStyle">
    </div>
</template>
<script setup lang="ts" name="NewInput">
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>
<style  scoped>
.inputStyle{
  width:300px;
  height:30px;
  border-radius: 8px;
  border:1px solid #ccc
}
</style>
