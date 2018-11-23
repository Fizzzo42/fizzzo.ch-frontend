import Vue from 'vue'
import VueRouter from 'vue-router'
import ServerStatus from '../views/serverStatus'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/serverStatus',
      name: 'serverStatus',
      component: ServerStatus
    }
  ]
})
