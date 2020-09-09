import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Phy from '@/components/Phy'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/phy',
      name: 'phy-layer',
      component: Phy,
    },
  ],
})
