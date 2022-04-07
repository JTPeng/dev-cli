<template>
  <h1>{{ pageName }}</h1>
  <div class="container">
    <p>{{ counter.num }}</p>
    <p>{{ counter.age }}</p>
    <p>{{ counter.sex }}</p>
    <button @click="addNum">addNum</button>
  </div>
  <div class="router-container">
    <button @click="toAbout">toAbout</button>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { interCounter } from '../types/twoIndex'
  const router = useRouter()
  const pageName = ref('Index')

  const counter = reactive<interCounter>({
    num: 0,
    age: 18,
    sex: '男',
  })

  const addNum = () => {
    counter.num++
  }

  const toAbout = () => {
    router.push({
      name: 'about',
      query: {
        source: 'one',
        target: 'about',
        params: '1',
      },
    })
  }
</script>
