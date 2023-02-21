<template>
  <div class="app">
    <el-button @click="add">count++</el-button>
    <span>{{ count }}</span>
    <el-input></el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
const add = () => count.value++;
</script>

<style lang="scss" scoped>
.app {
  span {
    margin: 0 10px;
    color: red;
  }
}
</style>
