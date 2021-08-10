<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 11:49:52
 * @LastEditTime: 2021-08-10 15:40:24
 * @Description : 根组件
-->
<template>
  <div id="app">
    <router-view />
    <!-- 返回顶部组件 -->
    <a-back-top />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/style/reset.scss';
</style>
