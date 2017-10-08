import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import results from '@/components/results'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/results',
    name: 'results',
    component: results
  }
  ]
})
