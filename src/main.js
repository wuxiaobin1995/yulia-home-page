/*
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 11:49:52
 * @LastEditTime: 2021-07-31 11:22:21
 * @Description : 入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 使用element-ui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
