<template>
  <h1>{{ num }}</h1>
  <button @click="addNum">addNum</button>
  <router-link to="/about">about</router-link>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  interface interName {
    name: string
    age: number
    [name: string]: any
  }
  interface interNum {
    value: number
  }
  const num: interNum = ref(0)
  const nameParams = reactive<interName>({
    name: 'jack',
    age: 18,
    sex: '男',
  })
  const addNum = () => {
    num.value += 1
  }
  console.log(nameParams)
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
