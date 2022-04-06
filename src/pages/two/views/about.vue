<template>
  <h1>about</h1>
  <h2>query:{{ routeQuery }}</h2>
  <h3>{{ num }}</h3>
  <button @click="addNum">addNum</button>
  <h1>{{ msg }}</h1>
  <h3>{{ counter }}</h3>
  <button @click="addCounter">addCounter</button>
  <div>
    <ul>
      <li v-for="(item, index) in nameList" :key="index">{{ item.name }}</li>
    </ul>
    <button @click="addNameList">addNameList</button>
  </div>
  <div>
    <h1>pinia getters</h1>
    <h3>doubleCount：{{ doubleCount }}</h3>
    <h3>doubleCountPlusOne:{{ doubleCountPlusOne }}</h3>
    <h3>getName: {{ getName }}</h3>
  </div>
  <br />
  <button @click="resetStore">resetStore</button>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import { useCounterStore } from '../store/counter'
  import { storeToRefs } from 'pinia'
  import { reactive, ref } from 'vue'
  const route = useRoute()
  const routeQuery = reactive({
    ...route.query,
  })
  // 实例化仓库
  const counterStore = useCounterStore()
  // 解构并使数据具有响应式
  const { counter, msg, nameList, doubleCount, doubleCountPlusOne, getName } =
    storeToRefs(counterStore)
  const { increment } = counterStore
  const num = ref(0)
  const addNum = () => (num.value += 1)
  const addCounter = () => {
    // increment()
    counterStore.$patch({ counter: counterStore.counter + 1 })
    counterStore.$patch({ msg: Math.random() })
  }

  const addNameList = () => {
    counterStore.$patch(state => {
      state.nameList.push({ id: counter, name: 'rose' })
    })
  }
  // 重置所有状态
  const resetStore = () => {
    counterStore.$reset()
  }
</script>
