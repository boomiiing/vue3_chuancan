import {createRouter,createWebHistory} from 'vue-router'
import Props from '@/pages/props/father.vue'
import CustomEvent from "@/pages/customEvent/Father.vue"
import Mitt from '@/pages/mitt/Father.vue'
const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/props',
      component:Props
    },
    {
      path:'/customEvent',
      component:CustomEvent
    },
    {
      path:'/mitt',
      component:Mitt
    },
    {
      path:'/',
      redirect:'/props'
    }
  ]
})
export default router