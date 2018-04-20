import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/Index'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
