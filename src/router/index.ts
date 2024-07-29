import {createRouter,createWebHistory} from 'vue-router'
import Props from '@/pages/props/father.vue'
import CustomEvent from "@/pages/customEvent/Father.vue"
import Mitt from '@/pages/mitt/Father.vue'
import Vmodel from '@/pages/v-model/Father.vue'
import Attrs from '@/pages/$attrs/Father.vue'
import $refs$parent from '@/pages/$refs,$parent/Father.vue'
import ProvideInject from '@/pages/provide&inject/Father.vue'
import Pinia from '@/pages/pinia/Father.vue'
import DefaultSlot from '@/pages/defaultSlot/Category.vue'
import NameSlot from '@/pages/nameSlot/Category.vue'
import ScopeSlot from '@/pages/scopeSlot/Category.vue'
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
      path:'/vmodel',
      component:Vmodel
    },
    {
      path:'/attrs',
      component:Attrs
    },
    {
      path:'/refs&parent',
      component:$refs$parent
    },
    {
      path:'/ProvideInject',
      component:ProvideInject
    },
    {
      path:'/Pinia',
      component:Pinia
    },
    {
      path:'/DefaultSlot',
      component:DefaultSlot
    },
    {
      path:'/NameSlot',
      component:NameSlot
    },
    {
      path:'/ScopeSlot',
      component:ScopeSlot
    },
    {
      path:'/',
      redirect:'/props'
    },
  ]
})
export default router