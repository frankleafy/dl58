import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
/*Home
Over ons
Aanpak
Diensten
Workshops
Team
Reserveren
Projecten
*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/overOns',
      name: 'overOns',
      component: () => import('./views/OverOns.vue')
    },
    {
      path: '/aanpak',
      name: 'aanpak',
      component: () => import('./views/Aanpak.vue')
    },
    {
      path: '/diensten',
      name: 'diensten',
      component: () => import('./views/Diensten.vue')
    },
    {
      path: '/workshops',
      name: 'workshops',
      component: () => import('./views/Workshops.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./views/Team.vue')
    },
    {
      path: '/reserveren',
      name: 'reserveren',
      component: () => import('./views/Reserveren.vue')
    },
    {
      path: '/projecten',
      name: 'projecten',
      component: () => import('./views/Projecten.vue')
    }

  ]
})
