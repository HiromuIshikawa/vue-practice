<template>
  <div>
    <h2>{{hero.name}} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div>
      <label>name:
        <input v-model="hero.name">
      </label>
    </div>
    <button @click="back">go back</button>
    <button @click="update">save</button>
  </div>
</template>

<script>
  import store from '../store'
  export default {
    data() {
      return {
        sharedState: store.state
      }
    },
    computed: {
      hero() {
        const id = this.$route.params.id
        if (id !== undefined) {
          const idInt = parseInt(id, 10)
          const hero = this.sharedState.heroes.find((hero) => {
            return hero.id === idInt
          })
          const tmpHero = Object.assign({}, hero)
          return tmpHero
        }
      }
    },
    methods: {
			update() {
        const hero = Object.assign({}, this.hero)
        store.actions.updateHero(hero)
        this.$router.go(-1)
      },
      back() {
        this.$router.go(-1)
      }
		}
  }
</script>