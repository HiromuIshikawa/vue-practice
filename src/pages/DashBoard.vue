<template>
  <div>
    <h2>Top heroes</h2>
		<hero-list :deleteFlag="false" :heroes="topHeroes" @select="select"
		></hero-list>
  </div>
</template>

<script>
	import store from '../store'
	import HeroList from '../components/HeroList'
	export default {
		data() {
			return {
				sharedState: store.state
			}
		},
		computed: {
			topHeroes() {
				return this.sharedState.heroes.slice(0, 4)
			}
		},
		methods: {
			select(id) {
				this.$router.push({name: 'details', params: {id}})
			}
		},
		components: {
			HeroList
		}
	}
</script>
