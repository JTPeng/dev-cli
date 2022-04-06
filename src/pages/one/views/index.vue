<template>
  <h1>{{ pageName }}</h1>
  <div class="container">
    <p>{{ counter.num }}</p>
    <button @click="addNum">addNum</button>
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue'

  const pageName = ref('Index')

  const counter = reactive({
    num: 0,
  })

  const addNum = () => {
    counter.num++
  }
</script>
