<template>
	<h1>about</h1>
	<h3>{{ num }}</h3>
	<button @click="addNum">addNum</button>
	<h1>{{ msg }}</h1>
	<h3>{{ counter }}</h3>
	<button @click="addCounter">addCounter</button>
</template>

<script setup>
	import { mainStore } from "../store"
	import { storeToRefs } from "pinia"
	import { ref } from "vue"
	// 实例化仓库
	const store = mainStore()
	// 解构并使数据具有响应式
	const { counter, msg } = storeToRefs(store)
	const num = ref(0)
	const addNum = () => (num.value += 1)
	const addCounter = () => {
		counter.value++
	}
</script>
