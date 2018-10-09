<template>
  <div>
	<div
	  v-for="hero in heroes"
	  v-bind:key="hero.id"
 	  :hero="hero"
	  @click="select(hero.id)">{{hero.name}}
	  <button v-if="deleteFlag" @click.stop="remove(hero.id)">delete</button></div>
  </div>
</template>

<script>
  export default {
	props: {
	  heroes: Array,
	  deleteFlag: Boolean
	},
	methods: {
	  select(id) {
	  	this.$emit('select', id)
	  },
	  remove(id) {
		this.$emit('remove', id)
	  }
	}
  }
</script>