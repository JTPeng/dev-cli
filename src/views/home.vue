<template>
	<h1>{{ num }}</h1>
	<button @click="addNum">addNum</button>
	<router-link to="/about">about</router-link>
</template>

<script lang="ts" setup>
	import { ref } from "vue"
	const num = ref(0)
	const addNum = () => {
		num.value += 1
	}
</script>

<style scoped>
	h1 {
		color: red;
	}
</style>
