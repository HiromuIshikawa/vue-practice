import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/pages/DashBoard'
import Heroes from '@/pages/Heroes'
import Details from '@/pages/Details'
import AbstHero from '@/components/AbstHero'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: DashBoard
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: Heroes
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    }
  ]
})
