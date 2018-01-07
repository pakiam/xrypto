import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Pages/Home/Home'
import Change from '@/Pages/Change'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/change',
      name: 'Change',
      component: Change
    }
  ]
})
