import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pet from './views/Pet.vue'
import Cats from './views/Cats.vue'
import Dogs from './views/Dogs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pets/:species/:id',
      name: 'pet',
      component: Pet
    },
    {
      path: '/cats',
      name: 'cats',
      component: Cats
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: Dogs
    }

  ]
})
