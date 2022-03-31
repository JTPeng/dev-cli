<template>
	<h1>about</h1>
	<h3>{{ num }}</h3>
	<button @click="addNum">addNum</button>
</template>

<script setup>
	import { ref } from "vue"

	const num = ref(0)
	const addNum = () => (num.value += 1)
</script>
