<template>
  <div>
    <h2>My Heroes</h2>
		<div>
			<label>add hero:
				<input v-model="privateState.newName" placeholder="new hero's name">
			</label>
			<button @click="add">add</button>
		</div>
	  <hero-list :deleteFlag="true" :heroes="sharedState.heroes" @select="select" @remove="remove" ></hero-list>
  </div>
</template>

<script>
	import store from '../store'
	import HeroList from '../components/HeroList'
	export default {
		data() {
			return {
				sharedState: store.state,
				privateState: {
					newName: ""
				}
			}
		},
		methods: {
			select(id) {
				this.$router.push({name: 'details', params: {id}})
			},
			add() {
				store.actions.addHero(this.privateState.newName)
				this.privateState.newName = ""
			},
			remove(id) {
				store.actions.removeHero(id)
			}
		},
		components: {
			HeroList
		}
	}
</script>
