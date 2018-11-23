import Vue from 'vue'
import VueRouter from 'vue-router'
import ServerStatus from '../views/serverStatus'
import Home from '../views/home'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/serverStatus',
      name: 'serverStatus',
      component: ServerStatus
    }
  ]
})
