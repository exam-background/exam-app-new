import Vue from 'vue'
import VueRouter from 'vue-router'
import dl from '@/views/dl'
import home from '@/views/Home'
import first from '@/components/first'
import item from '@/components/item'
import me from '@/components/me'
import examine from '@/components/examine'
import student from '@/components/first/student'
import task from '@/components/item/task'
import information1 from '@/components/item/information'
import wrong from '@/components/item/wrong'
import check from '@/components/me/check'
import information from '@/components/me/information'
import Classroom from '@/components/me/Classroom'
import personal from '@/components/me/personal'
import personal1 from '@/components/me/personal1'
import test from '@/components/me/test'
import modify from '@/components/me/modify'
import feedback from '@/components/me/feedback'

import home1 from "@/views/home1"
import first1 from "@/components/xs/first"
import paper1 from "@/components/xs/paper"
import me1 from "@/components/xs/me"
import details1 from "@/components/xs/first/details"
import examine1 from "@/components/xs/paper/examine"
import show from "@/components/xs/paper/showexam"

import Vuex from 'vuex'
import store from '@/store'
Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:"/dl"
  },
  {
    path:'/dl',
    component:dl 
  },
  {
    path:'/home',
    component:home ,
    children:[
      {
        path:'/home',
        redirect:"examine",
      },
      {
        path:'first',
        component:first 
      },
      {
        path:'item',
        component:item 
      },
      {
        path:'me',
        component:me 
      },
      {
        path:'examine',
        component:examine 
      }
    ]
  },
  {
    path:'/student',
    name:'student',
    component:student
  },
  {
    path:'/task',
    name:'task',
    component:task
  },
  {
    path:'/check',
    component:check
  },
  {
    path:'/information',
    component:information
  },
  {
    path:'/Classroom',
    component:Classroom
  },
  {
    path:'/personal',
    component:personal
  },
  {
    path:'/personal1',
    component:personal1
  },
  {
    path:'/test',
    component:test
  },
  {
    path:'/modify',
    component:modify
  },
  {
    path:'/feedback',
    component:feedback
  },
  {
    path:'/information1',
    name:'information1',
    component:information1
  },
  {
    path:'/wrong',
    name:'wrong',
    component:wrong
  },
  {
    path:"/home1",
    component:home1,
    children:[
      {
        path:"/home1",
        redirect:"/home1/first1"
      },
      {
        path:"first1",
        component:first1
      },
      {
        path:"paper1",
        component:paper1
      },
      {
        path:"me1",
        component:me1
      },
      {
        path:"/home1/details1",
        name:'details1',
        component:details1
      },
      {
        path:"/home1/examine1",
        name:'examine1',
        component:examine1
      },
      {
        path:"/home1/show",
        name:'show',
        component:show
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // to和from都是路由实例
  // to：即将跳转到的路由
  // from：现在的要离开的路由
  // next：函数
  // 如果未登录，就跳到登录页，如果登录了，选择哪个页面跳到哪个页面；如果登录了还去了login页面，就跳到首页。
   if (to.path != '/dl') {
     if (null != localStorage.getItem("stuToken") && '' != localStorage.getItem("stuToken")){
       next();
     }else{
       next('/dl')
     }
   }else{
     next();
   }
})

export default router
