<template>
	<div>
		<h1>{{ pageName }}</h1>
		<router-link to="/test">Go to test</router-link>
		<button @click="toAbout">toAbout</button>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pageName: "first",
			}
		},
		methods: {
			toAbout() {
				this.$router.push("/about")
			},
		},
	}
</script>
