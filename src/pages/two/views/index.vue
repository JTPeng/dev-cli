<template>
  <h1>{{ pageName }}</h1>
  <div class="container">
    <p>{{ counter.num }}</p>
    <button @click="addNum">addNum</button>
  </div>
  <div class="router-container">
    <button @click="toAbout">toAbout</button>
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const pageName = ref('Index')

  const counter = reactive({
    num: 0,
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
