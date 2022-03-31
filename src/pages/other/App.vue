<template>
	<div>
		<h1>{{ pageName }}</h1>
		<h3>{{ num }}</h3>
		<button @click="add">add</button>
		<h3>{{ count }}</h3>
		<button @click="increment">addCount</button>
	</div>
</template>

<script>
	import { mapState, mapMutations } from "vuex"
	export default {
		data() {
			return {
				pageName: "second",
				num: 1,
			}
		},
		methods: {
			add() {
				this.num++
			},
			...mapMutations(["increment"]),
		},
		computed: {
			...mapState({
				count: (state) => state.count,
			}),
		},
	}
</script>
