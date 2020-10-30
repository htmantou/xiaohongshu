import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/lj/Home.vue'
import User from '../views/lj/User.vue'

import Node from '../components/lj/User/node.vue'
import Video from '../components/lj/User/video.vue'
import Massage from '../components/lj/User/massage.vue'
import nodecontent from '../views/nodecontent.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
    path:'/User',
    name:'User',
    component:User,
    redirect:'/User/Node',
    children:[{
      path:'Node',
      name:'Node',
      component:Node,
    },
    {
      path:'Video',
      name:'Video',
      component:Video
    },
    {
      path:'Massage',
      name:'Massage',
      component:Massage
    }   
  ]
  },

  {
    path:'/nodecontent',
    component:nodecontent
  },
    
 
  {
    path:'/login',
    component:()=>import('../views/login.vue')
  },
  {
    path:'/register',
    component:()=>import('../views/register.vue')
  }
]

const router = new VueRouter({
  routes
})


export default router
