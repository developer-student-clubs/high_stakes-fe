import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile.vue'),
   
   
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/faq.vue'),
   
    
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */ '../views/list.vue')
  },
    
  {
    path: '/tutorial',
    name: 'tutorial',
    component: () => import(/* webpackChunkName: "list" */ '../views/tutorial.vue')
  },
    
 
  
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },

    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: () => import(/* webpackChunkName: "leaderboard" */ '../views/LeaderBoard.vue'),
      },

      {
        path: '/PRrequest',
        name: 'PRrequest',
        component: () => import(/* webpackChunkName: "PRrequest" */ '../views/PRrequest.vue'),
        },

        
   
      
]

const router = new VueRouter({
  routes
})

export default router
