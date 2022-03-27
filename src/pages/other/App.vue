<template>
	<div>
		<h1>{{ pageName }}</h1>
		<h3>{{ count }}</h3>
		<button @click="add">add</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pageName: "second",
				count: 1,
			}
		},
		methods: {
			add() {
				this.count++
			},
		},
	}
</script>
