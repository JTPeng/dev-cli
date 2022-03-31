<template>
	<h1>2222</h1>
	<h3>{{ pageName }}</h3>
	<p>{{ num }}</p>
	<button @click="addNum">addNum</button>
</template>

<script>
	export default {
		data() {
			return {
				pageName: "rose",
				num: 0,
			}
		},
		methods: {
			addNum() {
				this.num++
			},
		},
	}
</script>
