<template>
	<div class="container">
		<h1>about</h1>
		<button @click="goBack">back</button>
	</div>
</template>

<script>
	export default {
		methods: {
			goBack() {
				this.$router.go(-1)
			},
		},
	}
</script>
