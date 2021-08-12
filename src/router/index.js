/*
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 11:49:52
 * @LastEditTime: 2021-08-12 14:45:04
 * @Description : 路由
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout'),
    redirect: '/',
    children: [
      // 首页
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home')
      },
      // 时间线
      {
        path: 'time-line',
        name: 'time-line',
        component: () => import('@/views/time-line')
      },
      // 视频投稿
      {
        path: 'video-submissions',
        name: 'video-submissions',
        component: () => import('@/views/video-submissions')
      },
      // 二创组
      {
        path: 'create-group',
        name: 'create-group',
        component: () => import('@/views/create-group')
      }
    ]
  },

  // 404页面
  {
    path: '*',
    name: 'not-found-404',
    component: () => import('@/views/not-found-404')
  }
]

const router = new VueRouter({
  mode: 'history', // 使用history模式，把url中的#去掉，更美观
  routes,
  /* 自定义路由切换时页面如何滚动 */
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 } // 回到顶部
  }
})

export default router
