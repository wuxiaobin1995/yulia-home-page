/*
 * @Author      : Mr.bin
 * @Date        : 2021-07-30 11:49:52
 * @LastEditTime: 2021-08-15 15:26:26
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
/* 引入轮播图插件，请用3.x版本 */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
/* 引入音乐播放器插件 */
import APlayer from '@moefe/vue-aplayer'

Vue.use(Antd)
Vue.use(VueAwesomeSwiper)
Vue.use(APlayer, {
  defaultCover: require('../src/assets/music/默认封面.png'), // 设置播放器默认封面图片
  productionTip: false // 是否在控制台输出版本信息
})

Vue.config.productionTip = false

const qprogress = new QProgress()
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
