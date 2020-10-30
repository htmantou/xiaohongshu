import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Home.vue'
import node from '../views/nodecontent.vue'

=======
//一级路由引入
import Home from '../views/lj/Home.vue'
import User from '../views/lj/User.vue'
//二级路由引入
import Node from '../components/lj/User/node.vue'
import Video from '../components/lj/User/video.vue'
import Massage from '../components/lj/User/massage.vue'
>>>>>>> 7b4ebad51f3bff57ea08a725bf6653570bed1ecb

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
