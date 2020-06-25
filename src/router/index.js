import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Open from '../views/Open.vue'
import Done from '../views/Done.vue'
import Trashed from '../views/Trashed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/issues/open',
    name: 'Open',
    component: Open
  },

  {
    path: '/issues/done',
    name: 'Done',
    component: Done
  },

  {
    path: '/issues/trashed',
    name: 'Trashed',
    component: Trashed
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
