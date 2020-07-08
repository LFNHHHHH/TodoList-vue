import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './App.css'
import { Button, Input } from 'element-ui'

Vue.component(Button.name, Button)
Vue.component(Input.name, Input)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
