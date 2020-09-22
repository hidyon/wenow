import Vue from 'vue'
import VueRouter from 'vue-router'
import WorkToday from '../views/WorkToday.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: WorkToday,
    props: true
  },
  {
    path: '/works/today/:group',
    name: 'WorkTodayByGroup',
    component: WorkToday,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
