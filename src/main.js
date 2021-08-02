/*
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 11:49:52
 * @LastEditTime: 2021-08-02 21:01:47
 * @Description : 入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 引入阿里巴巴iconfont图标 */
import '@/assets/icon/iconfont.css'
import '@/assets/icon/iconfont.js' // 用于彩色图标
/* 使用element-ui */
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
/* 引入进度条插件 */
import QProgress from 'qier-progress'
const qprogress = new QProgress()

Vue.use(Antd)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  qprogress.start()
  // 这个一定要加，没有next()页面不会跳转的
  next()
})
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  qprogress.finish()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
