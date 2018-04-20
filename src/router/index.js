import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/Index'
import SmartDevices from '@/components/SmartDevices'
import SmartHome from '@/components/SmartHome'
import BlockChain from '@/components/BlockChain'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    }, 
    {
      path: '/smartDevices',
      name: 'SmartDevices',
      component: SmartDevices
    }, 
    {
      path: '/smartHome',
      name: 'SmartHome',
      component: SmartHome
    }, 
    {
      path: '/blockChain',
      name: 'BlockChain',
      component: BlockChain
    }

    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
