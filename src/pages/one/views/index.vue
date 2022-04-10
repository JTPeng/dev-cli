<template>
  <h1>{{ pageName }}</h1>
  <div class="container">
    <p>{{ counter.num }}</p>
    <button @click="addNum">addNum</button>
    <sonOne :pageTitle="pageName"></sonOne>
    <TotalButton></TotalButton>
    <br />
    <sonThree :pageTitle="pageName" @handleClick="handleClick"></sonThree>
  </div>
</template>

<script setup>
  import sonOne from '../components/sonOne.vue'
  import sonThree from '../components/sonThree.vue'
  import TotalButton from '@/components/TotalButton.vue'
  import { reactive, ref } from 'vue'

  const pageName = ref('Index')

  const counter = reactive({
    num: 0,
  })

  const addNum = () => {
    counter.num++
  }

  const handleClick = text => {
    pageName.value = text
  }
</script>
