import Vue from 'vue'
import Router from 'vue-router'
import Daiban from '../components/item.vue'
import Yiwanc from '../components/delItem.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'daiban'
    },
    {
      path: '/daiban',
      name: 'daiban',
      component: Daiban
    },
    {
      path: '/yiwanc',
      name: 'yiwanc',
      component: Yiwanc
    }
  ]
})
