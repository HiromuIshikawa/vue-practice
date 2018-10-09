const state = {
	heroes: [  
		{ id: 11, name: 'Mr. Nice' },
		{ id: 12, name: 'Narco' },
		{ id: 13, name: 'Bombasto' },
		{ id: 14, name: 'Celeritas' },
		{ id: 15, name: 'Magneta' },
		{ id: 16, name: 'RubberMan' },
		{ id: 17, name: 'Dynama' },
		{ id: 18, name: 'Dr IQ' },
		{ id: 19, name: 'Magma' },
		{ id: 20, name: 'Tornado' }
	],
	lastId: 20
}

const actions = {
	updateHero(hero) {
		const targetId = parseInt(hero.id, 10)
		const index = state.heroes.findIndex((hero) => {
			return hero.id === targetId
		})
		state.heroes.splice(index, 1, hero)
	},
	addHero(newName) {
		const newId = state.lastId + 1
		state.heroes.push({id: newId, name:newName})
		state.lastId = newId
	},
	removeHero(id) {
		const index = state.heroes.findIndex((hero) => {
			return hero.id === id
		})
		state.heroes.splice(index, 1)
	}
}

export default {
	state,
	actions
}