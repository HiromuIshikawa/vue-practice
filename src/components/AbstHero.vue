<template>
	<div>
	<h2>{{hero.name}} is my hero</h2>
	<button @click="detail(hero.id)">show detail</button>
	</div>
</template>

<script>
	export default {
		props: {
			hero: Object
		},
		methods: {
			detail(id) {
				this.$router.push({name: 'details', params: {id}})
			}
		},
	}
</script>