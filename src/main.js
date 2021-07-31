/*
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 11:49:52
 * @LastEditTime: 2021-07-30 14:58:55
 * @Description : 入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 引入antd-vue */
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
