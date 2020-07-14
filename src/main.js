import Vue from 'vue'
import App from './App.vue'
import  myRouter from './router/index'

//生产模式的消息
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router:myRouter,
  render: h => h(App)
  // $mount()为手动挂载
})