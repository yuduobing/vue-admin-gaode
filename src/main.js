import Vue from 'vue'
import App from './App.vue'
import  myRouter from './router/index'
import store from './store/store'
import './assets/css/public.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { messages } from './assets/js/common'
//生产模式的消息
Vue.config.productionTip = false
Vue.use(ElementUI);
//全局挂载提示框
Vue.prototype.$message = messages
new Vue({
  el: '#app',
  router:myRouter,
  store,
  render: h => h(App)
  // $mount()为手动挂载
})